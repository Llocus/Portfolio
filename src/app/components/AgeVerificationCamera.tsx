'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import * as faceapi from 'face-api.js';
import Cookies from 'js-cookie';
import { Box, Flex, VStack, Heading, Text, Button } from "@chakra-ui/react";
import { AnimatedBackground } from './AnimatedBackground';

interface AgeVerificationProps {
    uiTranslations: {
        ageModalTitle: string;
        ageModalSubtitle: string;
        ageModalPrivacy: string;
        ageModalLoading: string;
        ageModalStartBtn: string;
        ageModalCancelBtn: string;
        ageModalSuccessTitle: string;
        ageModalSuccessDesc: string;
        ageModalStatusReady: string;
        ageModalStatusSearching: string;
        ageModalStatusApproach: string;
        ageModalStatusUnderage: string;
        ageModalErrorCamera: string;
        ageModalErrorIA: string;
        ageModalTextScan: string;
        ageModalTextValidating: string;
        ageModalTextAge: string;
        ageModalTextYears: string;
    };
}

export default function AgeVerificationModal({ uiTranslations }: AgeVerificationProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const zoomCanvasRef = useRef<HTMLCanvasElement>(null);

    const currentBox = useRef({ sx: 0, sy: 0, sWidth: 0, sHeight: 0 });
    const targetBox = useRef({ sx: 0, sy: 0, sWidth: 0, sHeight: 0 });
    const animFrameId = useRef<number>(0);
    const validationProgress = useRef<number>(0);

    const [isOpen, setIsOpen] = useState(false);
    const [isModelsLoaded, setIsModelsLoaded] = useState(false);
    const [isCameraStarted, setIsCameraStarted] = useState(false);
    const [statusMessage, setStatusMessage] = useState(uiTranslations.ageModalLoading);
    const [displayAge, setDisplayAge] = useState<number | null>(null);
    const [isVerified, setIsVerified] = useState(false);
    const [isTooFar, setIsTooFar] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (!Cookies.get('ageVerified')) {
            setIsOpen(true);
            document.body.style.overflow = 'hidden';
        }
    }, []);

    useEffect(() => {
        if (!isOpen) return;
        const loadModels = async () => {
            const MODEL_URL = `${window.location.origin}/models`;
            try {
                await Promise.all([
                    faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
                    faceapi.nets.ageGenderNet.loadFromUri(MODEL_URL),
                ]);
                setIsModelsLoaded(true);
                setStatusMessage(uiTranslations.ageModalStatusReady);
            } catch (err) { setError(uiTranslations.ageModalErrorIA); }
        };
        loadModels();
    }, [isOpen, uiTranslations.ageModalStatusReady, uiTranslations.ageModalErrorIA]);

    const startVideo = useCallback(async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode: 'user', width: { ideal: 640 }, height: { ideal: 480 } }
            });

            if (videoRef.current) {
                videoRef.current.srcObject = stream;
                videoRef.current.setAttribute('playsinline', 'true');

                await new Promise<void>((resolve) => {
                    if (videoRef.current) {
                        videoRef.current.onloadedmetadata = () => {
                            videoRef.current?.play().then(() => {
                                const vw = videoRef.current!.videoWidth;
                                const vh = videoRef.current!.videoHeight;

                                const initialBox = { sx: 0, sy: 0, sWidth: vw, sHeight: vh };
                                currentBox.current = { ...initialBox };
                                targetBox.current = { ...initialBox };
                                validationProgress.current = 0;
                                resolve();
                            });
                        };
                    }
                });

                setIsCameraStarted(true);
                setError(null);
            }
        } catch (err) { setError(uiTranslations.ageModalErrorCamera); }
    }, [uiTranslations.ageModalErrorCamera]);

    const stopVideo = useCallback(() => {
        if (videoRef.current?.srcObject) {
            (videoRef.current.srcObject as MediaStream).getTracks().forEach(track => track.stop());
            setIsCameraStarted(false);
            setDisplayAge(null);
            setIsTooFar(true);
            validationProgress.current = 0;

            cancelAnimationFrame(animFrameId.current);

            if (canvasRef.current) canvasRef.current.getContext('2d')?.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
            if (zoomCanvasRef.current) zoomCanvasRef.current.getContext('2d')?.clearRect(0, 0, zoomCanvasRef.current.width, zoomCanvasRef.current.height);
        }
    }, []);

    useEffect(() => {
        if (!isCameraStarted || !videoRef.current || !zoomCanvasRef.current) return;

        const video = videoRef.current;
        const zoomCanvas = zoomCanvasRef.current;
        const zoomCtx = zoomCanvas.getContext('2d');

        const renderLoop = () => {
            if (video.paused || video.ended || !zoomCtx) return;

            currentBox.current.sx += (targetBox.current.sx - currentBox.current.sx) * 0.08;
            currentBox.current.sy += (targetBox.current.sy - currentBox.current.sy) * 0.08;
            currentBox.current.sWidth += (targetBox.current.sWidth - currentBox.current.sWidth) * 0.08;
            currentBox.current.sHeight += (targetBox.current.sHeight - currentBox.current.sHeight) * 0.08;

            const { sx, sy, sWidth, sHeight } = currentBox.current;

            zoomCtx.clearRect(0, 0, zoomCanvas.width, zoomCanvas.height);
            zoomCtx.drawImage(
                video,
                sx, sy, sWidth, sHeight,
                0, 0, zoomCanvas.width, zoomCanvas.height
            );

            animFrameId.current = requestAnimationFrame(renderLoop);
        };

        animFrameId.current = requestAnimationFrame(renderLoop);

        return () => cancelAnimationFrame(animFrameId.current);
    }, [isCameraStarted]);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isModelsLoaded && isCameraStarted && videoRef.current && canvasRef.current && zoomCanvasRef.current && !isVerified) {
            const video = videoRef.current;
            const canvas = canvasRef.current;
            const zoomCanvas = zoomCanvasRef.current;

            interval = setInterval(async () => {
                if (!video || video.paused) return;

                const vw = video.videoWidth;
                const vh = video.videoHeight;
                if (vw === 0 || vh === 0) return;

                const displaySize = { width: vw, height: vh };
                faceapi.matchDimensions(canvas, displaySize);
                zoomCanvas.width = vw;
                zoomCanvas.height = vh;

                const detections = await faceapi.detectAllFaces(
                    video, new faceapi.TinyFaceDetectorOptions()
                ).withAgeAndGender();

                const ctx = canvas.getContext('2d');
                ctx?.clearRect(0, 0, canvas.width, canvas.height);

                if (detections.length > 0) {
                    const det = detections[0];
                    const age = Math.round(det.age);
                    setDisplayAge(age);

                    const faceWidthOriginal = det.detection.box.width;
                    const ratio = faceWidthOriginal / vw;
                    const isCloseEnough = ratio >= 0.2;

                    const zoomFactor = 2.0;
                    const { x, y, width, height } = det.detection.box;
                    const sWidth = vw / zoomFactor;
                    const sHeight = vh / zoomFactor;

                    let sx = Math.max(0, x + width / 2 - sWidth / 2);
                    let sy = Math.max(0, y + height / 2 - sHeight / 2);
                    if (sx + sWidth > vw) sx = vw - sWidth;
                    if (sy + sHeight > vh) sy = vh - sHeight;

                    targetBox.current = { sx, sy, sWidth, sHeight };

                    if (isCloseEnough) {
                        setIsTooFar(false);

                        if (age >= 18) {
                            validationProgress.current += 15;
                            if (validationProgress.current > 100) validationProgress.current = 100;

                            setStatusMessage(`${uiTranslations.ageModalTextScan} ${validationProgress.current}%`);

                            if (validationProgress.current >= 100) {
                                Cookies.set('ageVerified', 'true', { expires: 30 });
                                setIsVerified(true);
                                stopVideo();
                                setTimeout(() => { setIsOpen(false); document.body.style.overflow = 'auto'; }, 2500);
                            }
                        } else {
                            validationProgress.current = 0;
                            setStatusMessage(uiTranslations.ageModalStatusUnderage);
                        }
                    } else {
                        setIsTooFar(true);
                        validationProgress.current = 0;
                        setStatusMessage(uiTranslations.ageModalStatusApproach);
                    }

                    if (ctx) {
                        ctx.beginPath();
                        ctx.lineWidth = 4;

                        const boxColor = validationProgress.current > 0
                            ? '#38A169'
                            : (isCloseEnough ? '#9F7AEA' : '#DD6B20');

                        ctx.strokeStyle = boxColor;

                        const boxSize = Math.min(vw, vh) * 0.5;
                        const rectX = (vw - boxSize) / 2;
                        const rectY = (vh - boxSize) / 2;

                        ctx.rect(rectX, rectY, boxSize, boxSize);
                        ctx.stroke();

                        ctx.fillStyle = boxColor;
                        ctx.font = 'bold 20px monospace';

                        const labelText = validationProgress.current > 0
                            ? `${uiTranslations.ageModalTextValidating}: ~${age} ${uiTranslations.ageModalTextYears}`
                            : (isCloseEnough ? `${uiTranslations.ageModalTextAge}: ~${age}` : uiTranslations.ageModalStatusApproach);

                        ctx.fillText(labelText, rectX, rectY - 10);

                        if (validationProgress.current > 0 && validationProgress.current < 100) {
                            const barHeight = 8;
                            const barY = rectY + boxSize + 10;

                            ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
                            ctx.fillRect(rectX, barY, boxSize, barHeight);

                            ctx.fillStyle = '#38A169';
                            ctx.fillRect(rectX, barY, boxSize * (validationProgress.current / 100), barHeight);
                        }
                    }

                } else {
                    targetBox.current = { sx: 0, sy: 0, sWidth: vw, sHeight: vh };
                    setStatusMessage(uiTranslations.ageModalStatusSearching);
                    setIsTooFar(true);
                    setDisplayAge(null);
                    validationProgress.current = 0;
                }
            }, 300);
        }
        return () => clearInterval(interval);
    }, [isModelsLoaded, isCameraStarted, isVerified, stopVideo, uiTranslations]);

    if (!mounted || !isOpen) return null;

    return (
        <Flex
            position="fixed"
            inset={0}
            zIndex={99999}
            bg="blackAlpha.800"
            backdropFilter="blur(15px)"
            align="center"
            justify="center"
            p={4}
        >
            <AnimatedBackground />

            <Box
                bg="gray.900"
                p={{ base: 6, md: 10 }}
                borderRadius="3xl"
                maxW="lg"
                w="full"
                textAlign="center"
                boxShadow="dark-lg"
                border="1px solid"
                borderColor="purple.800"
                position="relative"
                zIndex={1}
            >
                {isVerified ? (
                    <VStack spacing={4} py={8}>
                        <Text fontSize="6xl" animation="pulse 2s infinite">✨</Text>
                        <Heading size="lg" bgGradient="linear(to-r, purple.400, pink.500)" bgClip="text">
                            {uiTranslations.ageModalSuccessTitle}
                        </Heading>
                        <Text color="gray.400" fontWeight="medium">
                            {displayAge ? `~${displayAge} ${uiTranslations.ageModalTextYears}. ` : ''} {uiTranslations.ageModalSuccessDesc}
                        </Text>
                    </VStack>
                ) : (
                    <VStack spacing={0}>
                        <Heading size="md" color="white" mb={2}>{uiTranslations.ageModalTitle}</Heading>
                        <Text color="gray.400" fontSize="sm" mb={6} lineHeight="tall">
                            {uiTranslations.ageModalSubtitle}<br />
                            <Text as="span" fontSize="xs" color="gray.500">{uiTranslations.ageModalPrivacy}</Text>
                        </Text>

                        {error && (
                            <Box w="full" bg="red.900" color="red.200" p={3} borderRadius="md" mb={6} fontSize="sm" border="1px solid" borderColor="red.700">
                                {error}
                            </Box>
                        )}

                        {!isCameraStarted && (
                            <Button
                                w="full"
                                size="lg"
                                colorScheme="purple"
                                onClick={startVideo}
                                isDisabled={!isModelsLoaded}
                                isLoading={!isModelsLoaded}
                                loadingText={uiTranslations.ageModalLoading}
                                boxShadow={isModelsLoaded ? "0 8px 20px -4px rgba(159, 122, 234, 0.4)" : "none"}
                            >
                                {isModelsLoaded ? uiTranslations.ageModalStartBtn : uiTranslations.ageModalLoading}
                            </Button>
                        )}

                        <Box
                            display={isCameraStarted ? 'block' : 'none'}
                            mt={4}
                            position="relative"
                            borderRadius="2xl"
                            overflow="hidden"
                            bg="black"
                            border="2px solid"
                            borderColor="purple.800"
                            boxShadow="dark-lg"
                            w="full"
                        >
                            <video ref={videoRef} autoPlay muted playsInline style={{ display: 'none' }} />

                            <canvas ref={zoomCanvasRef} style={{ width: '100%', height: 'auto', display: 'block', transform: 'scaleX(-1)' }} />
                            <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }} />

                            <Box
                                position="absolute"
                                bottom={4}
                                left={4}
                                bg={validationProgress.current > 0 ? 'green.900' : (isTooFar ? 'orange.900' : 'purple.900')}
                                color={validationProgress.current > 0 ? 'green.300' : (isTooFar ? 'orange.300' : 'purple.300')}
                                px={4}
                                py={2}
                                borderRadius="md"
                                fontSize="xs"
                                fontWeight="bold"
                                border="1px solid"
                                borderColor={validationProgress.current > 0 ? 'green.500' : (isTooFar ? 'orange.500' : 'purple.500')}
                                transition="all 0.3s ease"
                            >
                                {statusMessage}
                            </Box>
                        </Box>

                        {isCameraStarted && (
                            <Button variant="ghost" colorScheme="red" size="sm" mt={6} onClick={stopVideo}>
                                {uiTranslations.ageModalCancelBtn}
                            </Button>
                        )}
                    </VStack>
                )}
            </Box>
        </Flex>
    );
}
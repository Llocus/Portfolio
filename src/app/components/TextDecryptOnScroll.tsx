"use client";

import { Text, type TextProps } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

interface TextDecryptOnScrollProps extends TextProps {
  children: string;
  duration?: number;
}

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

export const TextDecryptOnScroll = ({ children, duration = 500, ...rest }: TextDecryptOnScrollProps) => {
  const [displayText, setDisplayText] = useState("");
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const textLength = children.length;
          if (textLength === 0) return;

          const flickerSpeed = 30;
          const totalFrames = duration / flickerSpeed;
          const charsToRevealPerFrame = textLength / totalFrames;

          let iteration = 0;

          const interval = setInterval(() => {
            iteration += charsToRevealPerFrame;

            const newText = children
              .split("")
              .map((char, index) => {
                if (index < iteration) {
                  return children[index];
                }
                return chars[Math.floor(Math.random() * chars.length)];
              })
              .join("");

            setDisplayText(newText);

            if (iteration >= textLength) {
              clearInterval(interval);
              setDisplayText(children);
            }
          }, flickerSpeed);

          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [children, hasAnimated, duration]);

  return (
    <Text ref={ref} {...rest}>
      {displayText || <span style={{ opacity: 0 }}>{children}</span>}
    </Text>
  );
};
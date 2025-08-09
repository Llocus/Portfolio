# 🚀 Portfólio Dinâmico com Next.js e Chakra UI

Bem-vindo ao repositório do meu portfólio pessoal! Este não é apenas um site para mostrar os meus projetos, mas também um template **open-source** que qualquer desenvolvedor pode usar para criar o seu próprio portfólio moderno, animado e totalmente personalizável.

A filosofia é simples: um design de alta qualidade que pode ser seu com o mínimo de esforço. **Basta editar um único ficheiro para mudar tudo.**

![placeholder](https://placehold.co/1200x600/0D1117/805AD5?text=Adicione+um+print+do+seu+site+aqui)

---

## ✨ Funcionalidades Principais

* **Moderno e Elegante:** Design inspirado nas melhores práticas de UI/UX, com um tema escuro e uma cor de destaque vibrante.
* **Animações Fluidas:** Efeitos subtis de "descriptografia" de texto e animações de entrada que dão vida à página, feitos com **Framer Motion**.
* **Totalmente Responsivo:** Experiência de utilizador impecável em qualquer dispositivo, do desktop ao telemóvel, com um menu de navegação dedicado para mobile.
* **Configuração Centralizada:** **Altere apenas um ficheiro (`siteConfig.ts`)** para atualizar as suas informações pessoais, links, experiências e tecnologias.
* **Internacionalização (i18n):** Suporte nativo para múltiplos idiomas (inglês e português por defeito), com deteção automática do idioma do navegador.
* **Integração com GitHub:** Puxa os seus projetos mais recentes diretamente da API do GitHub.
* **Construído com as Melhores Tecnologias:**
    * [Next.js](https://nextjs.org/) (App Router)
    * [Chakra UI](https://chakra-ui.com/)
    * [TypeScript](https://www.typescriptlang.org/)
    * [Framer Motion](https://www.framer.com/motion/)

---

## 🔧 Como Usar (Para o Seu Próprio Portfólio)

Siga estes passos simples para criar o seu próprio portfólio:

### 1. Clone o Repositório

Primeiro, clone este repositório para a sua máquina local:

```bash
git clone [https://github.com/Llocus/Portfolio.git](https://github.com/Llocus/Portfolio.git)
cd Portfolio
```

### 2. Instale as Dependências

Instale todas as dependências do projeto com o seu gestor de pacotes preferido:

```bash
npm install
# ou
yarn install
```

### 3. Personalize o Seu Conteúdo ✨ (O Passo Mais Importante)

Este é o coração do projeto. Abra o ficheiro `src/data/siteConfig.ts`. Todas as informações que aparecem no site estão centralizadas aqui.

Basta alterar os valores neste ficheiro para os seus próprios dados:

* **`personalData`**: O seu nome e informações de contacto.
* **`socialLinks`**: Os links para as suas redes sociais.
* **`technologies`**: A lista de tecnologias que domina. Pode adicionar ou remover itens facilmente.
* **`translations`**: Você pode traduzir o seu título, descrição, experiências e todos os textos da interface para os idiomas que desejar (`pt` e `en` já estão configurados).

### 4. Adicione o Seu Favicon

Substitua o ficheiro `src/app/favicon.ico` pelo seu próprio ícone.

### 5. Rode o Servidor de Desenvolvimento

Inicie o servidor para ver o seu portfólio em ação:

```bash
npm run dev
```

Abra http://localhost:3000 no seu navegador!

---

## 📜 Licença

Este projeto está sob a licença MIT. Isto significa que você é **totalmente livre** para usar, copiar, modificar e distribuir este código para os seus próprios fins, incluindo comerciais. A única coisa que peço é que, se gostar do projeto, considere dar uma estrela ⭐ no repositório!

Sinta-se à vontade para o usar como ponto de partida para o seu próprio portfólio!
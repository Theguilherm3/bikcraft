# Bikcraft

> Projeto de estudo de **HTML5** e **CSS3** — site completo para uma marca fictícia de bicicletas elétricas personalizadas.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Status](https://img.shields.io/badge/status-desenvolvendo-brightgreen?style=for-the-badge)

---

## Sobre o projeto

A **Bikcraft** é um site institucional e de e-commerce para uma marca fictícia de bicicletas elétricas artesanais. O projeto foi desenvolvido com foco no aprendizado de **HTML semântico** e **CSS modular**, cobrindo desde a estrutura de páginas até layouts responsivos, formulários e organização de estilos em múltiplos arquivos.

---

## Páginas

| Página | Descrição |
|---|---|
| `index.html` | Home com hero, destaques, tecnologia, parceiros e depoimentos |
| `bicicletas.html` | Catálogo com as três bicicletas disponíveis |
| `bicicletas/magic.html` | Página individual — Magic Might (R$ 2.499) |
| `bicicletas/nebula.html` | Página individual — Nebula Cosmic (R$ 3.999) |
| `bicicletas/nimbus.html` | Página individual — Nimbus Stark (R$ 4.999) |
| `seguros.html` | Planos de seguro Prata e Ouro com FAQ |
| `contato.html` | Formulário de contato e informações da empresa |
| `termos.html` | Termos de uso, política de reembolso e seguro |

---

## Tecnologias

- **HTML5** — marcação semântica com uso de `<header>`, `<main>`, `<section>`, `<article>`, `<footer>` e atributos de acessibilidade
- **CSS3** — layouts com Grid e Flexbox, variáveis CSS, pseudo-elementos, media queries e animações
- **Google Fonts** — Poppins, Roboto e Merriweather
- **SVG** — ícones e elementos decorativos vetorizados

---

## Estrutura de CSS

O projeto utiliza uma arquitetura de CSS **modular**, onde cada seção e página tem seu próprio arquivo de estilo, todos importados por um único `style.css`.

```
css/
├── style.css          ← ponto de entrada (importa tudo)
├── global/
│   ├── global.css
│   ├── header.css
│   └── footer.css
├── utilidades/
│   ├── tipografia.css
│   ├── cores.css
│   ├── componentes.css
│   └── formulario.css
├── home/
├── bicicletas/
├── seguros/
├── contato/
└── termos/
```

---

## O que foi praticado

- Estrutura semântica de documentos HTML
- Organização de projetos com múltiplos arquivos CSS
- Layouts com **CSS Grid** (catálogo de produtos, grade de parceiros, vantagens)
- Layouts com **Flexbox** (header, footer, cards)
- Estilização de formulários com inputs e textarea
- Uso de **variáveis CSS** para paleta de cores consistente
- Navegação entre páginas com links relativos
- Inclusão de fontes via Google Fonts
- Otimização de imagens com SVG

---

## Como visualizar

Por ser um projeto puramente estático (sem back-end), basta abrir o arquivo `index.html` diretamente no navegador — ou usar uma extensão como o **Live Server** no VS Code.

```bash
# Com Live Server (VS Code)
# Clique com o botão direito em index.html → "Open with Live Server"
```

---

## Layout

O design foi baseado no curso **Origamid**, com adaptações e implementação própria de cada componente.

---

*Projeto desenvolvido para fins de estudo — não representa um produto ou empresa real.*

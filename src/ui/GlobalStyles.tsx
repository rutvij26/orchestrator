import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    /*! minireset.css v0.0.6 | MIT License | github.com/jgthms/minireset.css */
    html,
    body,
    p,
    ol,
    ul,
    li,
    dl,
    dt,
    dd,
    blockquote,
    figure,
    fieldset,
    legend,
    textarea,
    pre,
    iframe,
    hr,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 0;
        padding: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-size: 100%;
        font-weight: normal;
    }

    ul {
        list-style: none;
    }

    button,
    input,
    select {
        margin: 0;
    }

    html {
        box-sizing: border-box;
    }

    *, *::before, *::after {
        box-sizing: inherit;
    }

    img,
    video {
        height: auto;
        max-width: 100%;
    }

    iframe {
        border: 0;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    td,
    th {
        padding: 0;
    }

    html,
    body {
        width: 100%;
        height: 100vh;
    }

    #root {
        display: flex;
        width: 100%;
        height: 100%;
        margin: 0px;
        padding: 0px; 
    }
`;

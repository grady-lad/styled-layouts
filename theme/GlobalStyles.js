import { normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';
import spacing from './spacing';
import fontFaces from './fonts';

const GlobalStyles = createGlobalStyle`
  ${normalize}

  ${fontFaces}

  :root {
    ${spacing}
    --font-primary: "IBM Plex Mono", monospace;
  }

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: var(--font-primary);
    box-sizing: border-box;
  }

  *, :after, :before {
    box-sizing: border-box;
    /* What to do here? */
    /* background-color: inherit; */
    font-family: inherit;
    color: inherit;
    overflow-wrap: break-word;
    margin: 0;
    padding: 0;
    border: 0 solid;
}

  body {
    background-color: #0F110C;
    /* // white background = #f4edea; */
    /* // text color maybe = 0F110C; */
    color: white;
  }

  html,
  body,
  body > div:first-child,
  div#__next,
  div#__next > div {
    min-height: 100%;
  }

  img {
    max-width: 100%;
  }
`;

export default GlobalStyles;

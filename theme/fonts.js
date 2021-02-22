import { css } from 'styled-components';

const fontFaces = css`
  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('IBM Plex Mono'), local('IBMPlexMono'),
      url('/fonts/IBMPlexMono-Regular.woff2');
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local('IBM Plex Mono Medium'), local('IBMPlexMono-Medium'),
      url('/fonts/IBMPlexMono-Medium.woff2') format('woff2');
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('IBM Plex Mono SemiBold'), local('IBMPlexMono-SemiBold'),
      url('/fonts/IBMPlexMono-SemiBold') format('woff2');
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('IBM Plex Mono Bold'), local('IBMPlexMono-Bold'),
      url('/fonts/IBMPlexMono-Bold.woff2') format('woff2');
  }
`;

export default fontFaces;

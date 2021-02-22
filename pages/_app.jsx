import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../theme/GlobalStyles';
import SiteLayout from '../src/components/siteLayout/SiteLayout';

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

function MyApp({ Component, pageProps }) {
  const getLayout =
    Component.getLayout || ((page) => <SiteLayout>{page}</SiteLayout>);

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </>
  );
}

export default MyApp;

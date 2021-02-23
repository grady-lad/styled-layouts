import Link from 'next/link';
import { Box, Center, Sidebar as SidebarLayout, Stack } from '@styled-layouts';

const SiteLayout = ({ children }) => (
  <SidebarLayout>
    <Box as="header" borderWidth="1px" borderColor="white" isFullBox={false}>
      <Stack>
        <h2>Styled layouts</h2>
        <nav>
          <Stack as="ul" splitAfter={1}>
            <Center as="li">
              <Link href="/stack">
                <a>The Stack</a>
              </Link>
            </Center>
            <Center as="li">
              <Link href="/box">
                <a>The Box</a>
              </Link>
            </Center>
            <Center as="li">
              <Link href="/center">
                <a>The Center</a>
              </Link>
            </Center>
            <Center as="li">
              <Link href="/cluster">
                <a>The Cluster</a>
              </Link>
            </Center>
            <Center as="li">
              <Link href="/sidebar">
                <a>The Sidebar</a>
              </Link>
            </Center>
            <Center as="li">
              <Link href="/cover">
                <a>The Cover</a>
              </Link>
            </Center>
            <Center as="li">
              <Link href="/switcher">
                <a>The Switcher</a>
              </Link>
            </Center>
            <Center as="li">
              <Link href="/grid">
                <a>The Grid</a>
              </Link>
            </Center>
            <Center as="li">
              <Link href="/frame">
                <a>The Frame</a>
              </Link>
            </Center>
            <Center as="li">
              <Link href="/reel">
                <a>The Reel</a>
              </Link>
            </Center>
            <Center as="li">
              <Link href="/reel">
                <a>The Imposter</a>
              </Link>
            </Center>
            <Center as="li">
              <Link href="/reel">
                <a>The Icon</a>
              </Link>
            </Center>
          </Stack>
        </nav>
      </Stack>
    </Box>
    <Box as="main" space={2}>
      {children}
    </Box>
  </SidebarLayout>
);

export const getLayout = (page) => <SiteLayout>{page}</SiteLayout>;

export default SiteLayout;

import Head from 'next/head';
import { Box, Grid, Stack } from '@styled-layouts';

function GridItem({ children }) {
  return (
    <Box borderColor="white" offset borderWidth="1px">
      <Stack>{children}</Stack>
    </Box>
  );
}

export default function GridPage() {
  return (
    <>
      <Head>
        <title>Grid</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Grid</h1>
      <Stack>
        <Grid min="250px">
          <GridItem>
            <h2>Content</h2>
            <p>Some other content</p>
          </GridItem>
          <GridItem>
            <h2>Content</h2>
            <p>Some other content</p>
          </GridItem>
        </Grid>
      </Stack>
    </>
  );
}

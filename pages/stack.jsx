import Head from 'next/head';
import styled from 'styled-components';
import { Box, Cover, Sidebar, Stack } from '@styled-layouts';

const StackBoxItem = styled(Box)`
  border: 1px solid yellow;
`;

const SampleCover = styled(Cover)`
  border-color: red;
  border-width: 1px;
  height: 500px;
`;

const t = () =>
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const BoxYellow = ({ children, ...rest }) => (
  <Box {...rest} borderColor="yellow">
    {children}
  </Box>
);

export default function StackPage() {
  return (
    <>
      <Head>
        <title>Stack</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Stack</h1>
      <Stack space={3}>
        <section>
          <Stack>
            <h2>Basic Stack example</h2>
            <p>
              Stack content basic example. The Stack components uses the owl
              selector to add space between the components. So{' '}
              {`> * + * { margin-top: 1.5rem; }`} will inject margin between
              elements via their common parent. The plus symbol is known as the
              adjacent sibling combinator
            </p>
            <BoxYellow>{t()}</BoxYellow>
            <BoxYellow borderWidth="1px">{t()}</BoxYellow>
            <BoxYellow borderWidth="1px">{t()}</BoxYellow>
          </Stack>
        </section>
        <section>
          <Stack>
            <h2>Stack recursive example</h2>
            <p>
              We can apply margin to all children via Recursion. Recursion
              applies the same margin no matter the nesting depth
            </p>
            <Stack recursive>
              <BoxYellow>I have no children</BoxYellow>
              <BoxYellow>
                <Box borderColor="red">
                  <div>First item</div>
                  <div>
                    Second item. Margin is being applied since recursive prop is
                    true.
                  </div>
                </Box>
                <Box borderColor="blue">Why hello back</Box>
              </BoxYellow>
            </Stack>
          </Stack>
        </section>
        <section>
          <Stack>
            <h2>Apply individual custom spacing.</h2>
            <p>We can override the stack spacing.</p>
            <Stack>
              {({ stackSpace }) => (
                <>
                  <StackBoxItem>First item</StackBoxItem>
                  <StackBoxItem style={stackSpace('4rem')}>
                    I have custom spacing applied.
                  </StackBoxItem>
                  <StackBoxItem style={stackSpace('4rem')}>
                    third item
                  </StackBoxItem>
                  <StackBoxItem style={stackSpace('0px')}>
                    I have no spacing applied
                  </StackBoxItem>
                </>
              )}
            </Stack>
          </Stack>
        </section>
        <section>
          <Stack>
            <h2>Group stack items</h2>
            <p>
              We can group items in our stack so in the example below were are
              grouping the items before/after the 2nd child
            </p>
            <Sidebar>
              <Stack splitAfter={2}>
                <StackBoxItem>First item</StackBoxItem>
                <StackBoxItem>second item</StackBoxItem>
                <StackBoxItem>third item</StackBoxItem>
              </Stack>
              <SampleCover hasPadding centeredSelector="h1">
                <h1>Well hello</h1>
              </SampleCover>
            </Sidebar>
          </Stack>
        </section>
      </Stack>
    </>
  );
}

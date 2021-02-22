import Head from 'next/head';
import styled from 'styled-components';
import { Box, Switcher } from '@styled-layouts';

const StackBoxItem = styled(Box)`
  border: 1px solid yellow;
`;

export default function SwitcherPage() {
  return (
    <>
      <Head>
        <title>Switcher</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>The Switcher</h1>
      <Switcher threshold="50%">
        <div>
          <StackBoxItem>hello</StackBoxItem>
          <StackBoxItem>goodbye</StackBoxItem>
          <StackBoxItem>Oh hi</StackBoxItem>
        </div>
      </Switcher>
      <Switcher threshold="20em" limit={5}>
        <div>
          <StackBoxItem>hello</StackBoxItem>
          <StackBoxItem>goodbye</StackBoxItem>
          <StackBoxItem>Oh hi</StackBoxItem>
          <StackBoxItem>goodbye</StackBoxItem>
          <StackBoxItem>Oh hi</StackBoxItem>
        </div>
      </Switcher>
    </>
  );
}

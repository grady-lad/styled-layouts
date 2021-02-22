import styled from 'styled-components';
import { Center, Stack } from '@styled-layouts';

const ContentWrapper = styled(Stack)`
  padding: 40px;
  height: 100vw;
`;

const StackCenterItem = styled(Center)`
  border: 1px solid yellow;
`;

StackCenterItem.defaultProps = { max: '60ch' };

const LoremIpsum = () => (
  <p>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the
    1500s, when an unknown printer took a galley of type and scrambled it to
    make a type specimen book. It has survived not only five centuries, but also
    the leap into electronic typesetting, remaining essentially unchanged. It
    was popularised in the 1960s with the release of Letraset sheets containing
    Lorem Ipsum passages, and more recently with desktop publishing software
    like Aldus PageMaker including versions of Lorem Ipsum.
  </p>
);

export default function CenterPage() {
  return (
    <main>
      <header>
        <h1>Center</h1>
      </header>
      <ContentWrapper customSpacing="4rem">
        <div>
          <p>The columns are centered used auto margin </p>
          <Stack>
            <StackCenterItem>
              <LoremIpsum />
            </StackCenterItem>
            <StackCenterItem>
              <LoremIpsum />
            </StackCenterItem>
            <StackCenterItem>
              <LoremIpsum />
            </StackCenterItem>
          </Stack>
        </div>
        <div>
          <p />
          <Stack>
            <StackCenterItem gutters="1rem">
              <LoremIpsum />
            </StackCenterItem>
            <StackCenterItem gutters="1rem">
              <LoremIpsum />
            </StackCenterItem>
            <StackCenterItem gutters="1rem">
              <LoremIpsum />
            </StackCenterItem>
          </Stack>
        </div>
        <div>
          <p />
          <Stack>
            <StackCenterItem>
              <LoremIpsum />
              <p>Without intrinsic prop</p>
            </StackCenterItem>
            <StackCenterItem intrinsic>
              <LoremIpsum />
              <p>With intrinsic prop</p>
            </StackCenterItem>
            <StackCenterItem>
              <LoremIpsum />
              <p>Without intrinsic prop</p>
            </StackCenterItem>
          </Stack>
        </div>
      </ContentWrapper>
    </main>
  );
}

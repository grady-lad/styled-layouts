import styled from 'styled-components';

const ContentWrapper = styled.div`
  padding: 40px;
  height: 100vw;
`;

const InlineComponent = styled.div`
  display: inline;
  width: 200px;
  height: 200px;
  margin-top: 20px;
`;

const BoxContent = styled.div`
  box-sizing: content-box;
  padding: 1rem;
  border: 1px solid red;
  width: ${({ width }) => width};
`;

const BoxSizingWrapper = styled.div`
  width: 300px;
  border: 1px solid yellow;
  padding: 20px 0px;

  > * {
    margin-bottom: 20px;
  }
`;

export default function Block() {
  return (
    <main>
      <header>
        <h1>Block</h1>
      </header>
      <ContentWrapper>
        <p>
          <strong>Inline content:</strong> Height and width do not take effect
          on inline components. Only horizontal margin and padding values are
          permitted (See component below within dev tools)
        </p>
        <InlineComponent>
          This is inline content has width and height of 200px but it is not
          taking effect. The margin that is applied is also not taking effect.
        </InlineComponent>

        <div>
          <p>
            With property box-content the padding border etc is taken into
            consideration when calculating the size of the box
          </p>
          <p>
            When there are constraints on the parents height the property given
            to width or height matters
          </p>
          <p>
            Below we see that the item with width: auto; fits within the parent
            rather than width: 100%. This happens because we are telling the
            browser that the child should take 100% of the parent and then it
            adds the padding after. Where as with width: auto the browser tries
            as hard as possible to keep an element the same width as its parrent
            container (Including extra padding margins etc).
          </p>
          <BoxSizingWrapper>
            <BoxContent width="100%">I have a width of 100%</BoxContent>
            <BoxContent width="auto">I have a width of auto</BoxContent>
          </BoxSizingWrapper>
        </div>
      </ContentWrapper>
    </main>
  );
}

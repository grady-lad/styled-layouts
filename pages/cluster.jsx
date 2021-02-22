import Head from 'next/head';
import styled from 'styled-components';
import { Cluster, Stack } from '@styled-layouts';

const Text = styled.p`
  max-width: 100ch;
  line-height: 2;
`;

export default function ClusterPage() {
  return (
    <>
      <Head>
        <title>Cluster</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Cluster</h1>
      <section>
        <Stack>
          <h2>Problem</h2>
          <Text>
            We could align content using grids. But grid adhre to a strict
            veritical and horizontal lines. In reality text can be all types of
            length and so there are a lot of uses cases where we would have a
            "grid" but each item within the grid can vary in size due to the
            text conent.
          </Text>
          <h2>Solution</h2>
          <Text>
            This solution can be solved with "flex gap". But we do not have that
            yet =/. So instead what we do is the following:
          </Text>
          <Text>
            The clusters first child needs to be a wrapper. This is so that the
            margins that are applied within the component are encapusalted
            there. (F.X The the interfering with the stack margins) We apply
            margins to each items symmetrically to all sides. The first child
            also has a negative margin applied to it. This cancels out the
            negative margin that has been applied.
          </Text>
          <Cluster
            justify="space-between"
            align="center"
            style={{ padding: '1rem', border: '1px solid white' }}
          >
            <div>
              <div>IMAGE IMAGE IMAGE</div>
              <Cluster space={2}>
                <ul style={{ listStyle: 'none' }}>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Shop</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Accessibility</a>
                  </li>
                </ul>
              </Cluster>
            </div>
          </Cluster>
        </Stack>
      </section>
    </>
  );
}

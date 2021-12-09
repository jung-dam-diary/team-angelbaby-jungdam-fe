import styled from '@emotion/styled';
import font from '@assets/fonts';
import { Divider } from '@components/base';

const Title = styled.h1`
  ${font.heading_24};
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Divider',
  component: Divider,
};

export const Default = () => {
  return (
    <div>
      <Title>헤더1</Title>
      <Divider />
      <p>Content</p>
    </div>
  );
};

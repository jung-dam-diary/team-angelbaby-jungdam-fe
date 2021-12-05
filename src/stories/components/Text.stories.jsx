import styled from '@emotion/styled';

const Text = styled.p`
  font-size: 1.5rem;
  line-height: 1.5;
  margin: 0;
`;

export default {
  title: 'Components/Text',
  component: Text,
};

export const Default = (args) => {
  return <Text {...args}>테스트용</Text>;
};

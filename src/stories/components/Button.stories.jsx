import color from '@assets/colors/Color';
import styled from '@emotion/styled';
import { Button } from '@components/base';
import { Icon } from '@components/base';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export default {
  title: 'Components/Button',
  component: Button,
};

export const Default = () => {
  return (
    <Container>
      <Button>
        <Icon name="ep:back" color={color.brown} />
      </Button>
      <Button>Text</Button>
      <Button>
        <Icon name="bx:bx-home-heart" color={color.brown} />
        Text
      </Button>
    </Container>
  );
};

export const Primary = () => {
  return (
    <Container>
      <Button mode="primary">확인</Button>
      <Button mode="primary">
        <Icon name="bx:bx-home-heart" color={color.brown} />
      </Button>
      <Button mode="primary">
        <Icon name="bx:bx-home-heart" color={color.brown} />
        확인
      </Button>
      <Button mode="primary" bgColor={'#03C75A'}>
        네이버로 시작하기
      </Button>
    </Container>
  );
};

export const Border = () => {
  return (
    <Container>
      <Button mode="border" gap="4px">
        <Icon name="ant-design:plus-outlined" color={color.brown} height={16} />
        추가하기
      </Button>
      <Button mode="border">추가하기</Button>
      <Button mode="border">
        <Icon name="ant-design:plus-outlined" color={color.brown} height={16} />
      </Button>
    </Container>
  );
};

export const OnClick = () => {
  return (
    <Container>
      <Button
        mode="primary"
        onClick={() => {
          alert('클릭됨');
        }}
      >
        onClick Event 적용 여부 확인
      </Button>
    </Container>
  );
};

import styled from '@emotion/styled';
import { css } from '@emotion/react';
import font from '@assets/fonts';
import { Input, Textarea } from '@components/base';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  margin-bottom: 20px;
  ${font.heading_24};
`;

const InputStyle = css`
  margin-bottom: 40px;
  ${font.content_16}
`;

const DiaryCreateStepTwo = ({ onChange }) => {
  // const onChange = (e) => {
  //   console.log(e.target.value);
  // };

  return (
    <Container>
      <Title>제목을 입력해주세요.</Title>
      <Input
        type="Default"
        name="title"
        onChange={onChange}
        placeholder="제목을 입력해주세요."
        css={InputStyle}
        autoComplete="off"
      />

      <Title>일기장을 적어볼까요 ?</Title>
      <Textarea name="content" onChange={onChange} />
    </Container>
  );
};

export default DiaryCreateStepTwo;

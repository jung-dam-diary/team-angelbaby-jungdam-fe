import styled from '@emotion/styled';
import { css } from '@emotion/react';
import font from '@assets/fonts';
import { Input, Textarea } from '@components/base';
import { forwardRef } from 'react';

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

const DiaryCreateStepTwo = forwardRef((_, ref) => {
  const onChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <Container>
      <Title>제목을 입력해주세요.</Title>
      <Input
        type="Default"
        name="Default"
        onChange={onChange}
        placeholder="제목을 입력해주세요."
        css={InputStyle}
        ref={ref}
        autoComplete="off"
      />

      <Title>일기장을 적어볼까요 ?</Title>
      <Textarea />
    </Container>
  );
});

export default DiaryCreateStepTwo;

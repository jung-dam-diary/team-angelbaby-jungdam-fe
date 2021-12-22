import styled from '@emotion/styled';
import { css } from '@emotion/react';
import font from '@assets/fonts';
import { Input, Textarea } from '@components/base';

const Container = styled.div`
  margin-top: 80px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TitleHeading = styled.span`
  margin-bottom: 10px;
  ${font.heading_24};
`;

const InputStyle = css`
  margin-bottom: 0px;
  ${font.content_16}
`;

const ContentHeading = styled.span`
  margin-top: ${({ error }) => (error ? '15px' : '35px')};
  ${font.heading_24};
`;

const ErrorText = styled.span`
  margin-top: 5px;
  font-size: 14px;
  color: red;
`;

const DiaryCreateStepTwo = ({
  onChange,
  title,
  content,
  titleError,
  contentError,
}) => {
  return (
    <Container>
      <TitleHeading>제목을 입력해주세요.</TitleHeading>
      <Input
        type="Default"
        name="title"
        onChange={onChange}
        placeholder="제목을 입력해주세요."
        css={InputStyle}
        autoComplete="off"
        value={title}
      />
      {titleError && <ErrorText>{titleError}</ErrorText>}

      <ContentHeading error={titleError && true}>
        일기장을 적어볼까요 ?
      </ContentHeading>

      {contentError && <ErrorText>{contentError}</ErrorText>}

      <Textarea
        name="content"
        onChange={onChange}
        value={content}
        height={'30vh'}
      />
    </Container>
  );
};

export default DiaryCreateStepTwo;

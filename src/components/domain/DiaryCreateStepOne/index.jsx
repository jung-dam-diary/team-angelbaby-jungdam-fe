import styled from '@emotion/styled';
import font from '@assets/fonts';
import { Input } from '@components/base';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  margin-bottom: 20px;
  ${font.heading_24};
`;

const ErrorText = styled.span`
  margin-top: 5px;
  font-size: 14px;
  color: red;
`;

const DiaryCreateStepOne = ({ onChange, date, dateError }) => {
  const getTodayDate = () => {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();

    if (dd < 10) {
      dd += '0';
    }

    if (mm < 10) {
      mm += '0';
    }

    today = `${yyyy}-${mm}-${dd}`;

    return today;
  };

  return (
    <Container>
      <Title>날짜를 선택해주세요.</Title>
      <Input
        type="date"
        name="date"
        onChange={onChange}
        css={font.content_16}
        max={getTodayDate()}
        value={date}
      />
      {dateError && <ErrorText>{dateError}</ErrorText>}
    </Container>
  );
};

export default DiaryCreateStepOne;

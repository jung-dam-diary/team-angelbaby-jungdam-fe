import styled from '@emotion/styled';
import color from '@assets/colors';

const Container = styled.div`
  width: 100%;
  height: 5px;
  display: flex;
  justify-content: space-between;

  & :not(:first-of-type) {
    margin-left: 3px;
  }
`;

const HighLight = styled.div`
  width: ${({ width }) => width};
  border-radius: 4px;
  background: ${({ active }) => (active ? color.brown : color.grey)};
`;

const renderHighLight = (totalStep, currentStep) => {
  const result = [];
  const calculateWidth = `${Math.floor(100 / totalStep)}%`;

  for (let i = 0; i < totalStep; i++) {
    result.push(
      <HighLight
        key={i}
        width={calculateWidth}
        active={i < currentStep && true}
      />,
    );
  }

  return result;
};

const ProgressBar = ({ totalStep, currentStep }) => {
  return <Container>{renderHighLight(totalStep, currentStep)}</Container>;
};

export default ProgressBar;

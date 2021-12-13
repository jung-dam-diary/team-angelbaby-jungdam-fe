import styled from '@emotion/styled';
import color from '@assets/colors';
import PropTypes from 'prop-types';

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
  height: 5px;
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
        className="bar"
      />,
    );
  }

  return result;
};

const ProgressBar = ({ totalStep, currentStep, ...props }) => {
  return (
    <Container {...props}>{renderHighLight(totalStep, currentStep)}</Container>
  );
};

ProgressBar.propTypes = {
  totalStep: PropTypes.number.isRequired,
  currentStep: PropTypes.number.isRequired,
};

export default ProgressBar;

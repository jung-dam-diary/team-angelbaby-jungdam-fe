import { ProgressBar } from '@components/base';

export default {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  argTypes: {
    totalStep: {
      type: 'number',
      defaultValue: 3,
      control: { type: 'number', min: 3, max: 5 },
    },
    currentStep: {
      type: 'number',
      defaultValue: 1,
      control: { type: 'number', min: 1, max: 5 },
    },
  },
};

export const Default = (args) => {
  return (
    <>
      <ProgressBar {...args} />
      <br />
      <ProgressBar {...args} totalStep={4} />
      <br />
      <ProgressBar {...args} totalStep={5} />
    </>
  );
};

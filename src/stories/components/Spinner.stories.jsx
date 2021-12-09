import { Spinner } from '@components/base';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Spinner',
  component: Spinner,
};

export const Default = (args) => {
  return (
    <div>
      <Spinner size={32} {...args} />
      <Spinner size={24} {...args} />
      <Spinner {...args} />
    </div>
  );
};

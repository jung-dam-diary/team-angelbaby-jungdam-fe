import { Textarea } from '@components/base';

export default {
  title: 'Components/Textarea',
  component: Textarea,
};

export const Default = (args) => {
  return <Textarea {...args} />;
};

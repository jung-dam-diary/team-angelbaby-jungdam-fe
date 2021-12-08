import { Avatar } from '@components/base';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Avatar',
  component: Avatar,
};

export const Default = (args) => {
  return <Avatar {...args} />;
};

export const Large = (args) => {
  return <Avatar size="large" {...args} />;
};

export const DefaultSrc = (args) => {
  return <Avatar src="https://picsum.photos/300/600" {...args} />;
};

export const LargeSrc = (args) => {
  return <Avatar size="large" src="https://picsum.photos/300/600" {...args} />;
};

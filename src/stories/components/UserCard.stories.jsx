import { UserCard } from '@components/base';

export default {
  title: 'Components/UserCard',
  component: UserCard,
};

export const Default = (args) => {
  return <UserCard nickname="저에요.." email="test@gmail.com" {...args} />;
};

export const OnAvatar = (args) => {
  return (
    <UserCard
      avatar="https://picsum.photos/300/600"
      nickname="저에요.."
      email="test@gmail.com"
      {...args}
    />
  );
};

import Icon from '@components/base/Icon';
import color from '@assets/colors/Color';

export default {
  title: 'Components/Icon',
  component: Icon,
};

export const Assets = () => {
  return (
    <>
      <Icon name="bx:bx-home-heart" color={color.brown} height={30} />
      <Icon name="bx:bx-home-heart" color={color.grey} height={30} />
      <Icon name="akar-icons:book" color={color.brown} height={30} />
      <Icon name="akar-icons:book" color={color.grey} height={30} />
      <Icon name="bi:pencil" color={color.brown} height={30} />
      <Icon name="bi:pencil" color={color.grey} height={30} />
      <Icon name="ic:outline-timeline" color={color.brown} height={30} />
      <Icon name="ic:outline-timeline" color={color.grey} height={30} />
      <Icon name="fluent:people-20-regular" color={color.brown} height={30} />
      <Icon name="fluent:people-20-regular" color={color.grey} height={30} />
    </>
  );
};

export const Home = () => {
  return (
    <>
      <Icon name="bx:bx-home-heart" color={color.brown} height={30} />
      <Icon name="bx:bx-home-heart" color={color.grey} height={30} />
    </>
  );
};

export const Storybook = () => {
  return (
    <>
      <Icon name="akar-icons:book" color={color.brown} height={30} />
      <Icon name="akar-icons:book" color={color.grey} height={30} />
    </>
  );
};

export const Diary = () => {
  return (
    <>
      <Icon name="bi:pencil" color={color.brown} height={30} />
      <Icon name="bi:pencil" color={color.grey} height={30} />
    </>
  );
};

export const SpecialMoment = () => {
  return (
    <>
      <Icon name="ic:outline-timeline" color={color.brown} height={30} />
      <Icon name="ic:outline-timeline" color={color.grey} height={30} />
    </>
  );
};

export const MemberList = () => {
  return (
    <>
      <Icon name="fluent:people-20-regular" color={color.brown} height={30} />
      <Icon name="fluent:people-20-regular" color={color.grey} height={30} />
    </>
  );
};

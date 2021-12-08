import { Image } from '@components/base';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Image',
  component: Image,
};

export const Default = () => {
  return (
    <Image
      src="https://picsum.photos/300/600"
      width="200px"
      height="200px"
      alt="Image"
    />
  );
};

export const Cover = () => {
  return (
    <Image
      src="https://picsum.photos/300/600"
      width="200px"
      height="200px"
      alt="Image"
      mode="cover"
    />
  );
};

export const None = () => {
  return (
    <Image
      src="https://picsum.photos/300/600"
      width="200px"
      height="200px"
      alt="Image"
      mode="none"
    />
  );
};

export const Contain = () => {
  return (
    <Image
      src="https://picsum.photos/300/600"
      width="200px"
      height="200px"
      alt="Image"
      mode="contain"
    />
  );
};

export const Block = () => {
  return (
    <>
      <Image
        src="https://picsum.photos/300/600"
        width="200px"
        height="200px"
        alt="Image"
        mode="contain"
        block
      />
      <Image
        src="https://picsum.photos/300/600"
        width="200px"
        height="200px"
        alt="Image"
        mode="contain"
        block
      />
    </>
  );
};

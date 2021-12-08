import React from 'react';
import { Input } from '@components/base';

export default {
  title: 'Components/Input',
  component: Input,
};

export const Default = (args) => {
  return <Input {...args} type="text" placeholder="내용을 입력해주세요." />;
};

export const Date = (args) => {
  return <Input {...args} type="date" placeholder="날짜를 입력해주세요." />;
};

export const Error = (args) => {
  return <Input {...args} error type="text" placeholder="Error" />;
};

export const Success = (args) => {
  return <Input {...args} success type="text" placeholder="Success" />;
};

export const Disabled = (args) => {
  return <Input {...args} type="text" placeholder="Disabled" disabled />;
};

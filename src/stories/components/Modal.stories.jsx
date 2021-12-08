import { useState } from 'react';
import { Modal } from '@components/base';

export default {
  title: 'Components/Modal',
  component: Modal,
};

export const Default = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div style={{ height: 10000 }}>
      <button
        type="button"
        onClick={() => {
          setVisible(true);
        }}
      >
        show Modal
      </button>
      <Modal visible={visible} onClose={() => setVisible(false)}>
        총 1명의 인원을 초대하시겠습니까?
      </Modal>
    </div>
  );
};

export const LongText = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div style={{ height: 10000 }}>
      <button
        type="button"
        onClick={() => {
          setVisible(true);
        }}
      >
        show Modal
      </button>
      <Modal visible={visible} onClose={() => setVisible(false)}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Modal>
    </div>
  );
};

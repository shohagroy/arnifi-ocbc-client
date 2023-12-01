import { Modal } from "antd";
import React from "react";

const ConfirmModal = ({ setOpen, open, loading, submitFn, modalText }) => {
  //   const [modalText, setModalText] = useState("Content of the modal");

  const handleOk = () => {
    // setModalText("The modal will be closed after two seconds");
    submitFn();
  };

  return (
    <Modal
      title={modalText?.tittle}
      open={open}
      onOk={handleOk}
      confirmLoading={loading}
      onCancel={() => setOpen(false)}
    >
      <p>{modalText.details}</p>
    </Modal>
  );
};

export default ConfirmModal;

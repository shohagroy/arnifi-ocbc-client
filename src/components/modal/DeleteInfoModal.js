/* eslint-disable react/no-unescaped-entities */
import { Button, Modal } from "antd";
import React from "react";

const DeleteInfoModal = ({ setOpen, open, loading, submitFn, modalText }) => {
  const handleOk = () => {
    submitFn();
  };

  return (
    <Modal
      title={modalText?.tittle}
      open={open}
      footer={[
        <Button
          key="no"
          type="primary"
          danger
          onClick={() => setOpen(false)}
          disabled={loading}
        >
          No, don't
        </Button>,

        <Button
          className="bg-primary text-white font-bold "
          disabled={loading}
          loading={loading}
          key={"yes"}
          onClick={handleOk}
        >
          {loading ? "Loading.." : " Yes, Confirm"}
        </Button>,
      ]}
      onCancel={() => setOpen(false)}
    >
      <div>{modalText.details}</div>
    </Modal>
  );
};

export default DeleteInfoModal;

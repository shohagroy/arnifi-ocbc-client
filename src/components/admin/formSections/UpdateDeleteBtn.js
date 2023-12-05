import { Button } from "antd";
import React, { useState } from "react";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import CreateUpdateInfoModal from "@/components/modal/CreateUpdateInfoModal";

const UpdateDeleteBtn = ({
  data,
  deleteModalOkHandelar,
  loading,
  setStepFields,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [modalText, setModalText] = useState({});

  const deleteHandelar = () => {
    const info = {
      tittle: "Are you sure delete this step fild?",
      details: (
        <>
          <p className="font-primary">
            Label: <strong>{data?.label}</strong>
          </p>
          <p className="font-primary">
            Placeholder: <strong>{data?.placeholder}</strong>
          </p>
          <p className="font-primary">
            Error: <strong>{data?.errorText}</strong>
          </p>
        </>
      ),
    };
    setModalText(info);
    setOpenModal(true);
  };

  return (
    <>
      <div className="flex justify-end bg-gray-200 rounded-md items-center">
        <Button onClick={() => setStepFields(data)} type="link">
          <EditFilled />
        </Button>
        <Button onClick={deleteHandelar} type="link" danger>
          <DeleteFilled />
        </Button>
      </div>
      <CreateUpdateInfoModal
        loading={loading}
        setOpen={setOpenModal}
        open={openModal}
        submitFn={() => deleteModalOkHandelar(data)}
        modalText={modalText}
      />
    </>
  );
};

export default UpdateDeleteBtn;

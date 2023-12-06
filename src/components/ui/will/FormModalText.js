import React, { useState } from "react";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { Modal } from "antd";

const FormModalText = ({ text, tittle, data }) => {
  const [showModal, setShowModal] = useState(false);

  // const data = [
  //   {
  //     info: " An Executor is the person appointed by the Testator under his Will to carry out the wishes of the Testator in accordance with the Will. An Executor can also be a beneficiary under a Will and a Testator can appoint more than one Executor in his Will. Where there are more than one Executors, they must act jointly (together). ",
  //     others: [],
  //   },
  //   {
  //     info: " Please note that the Online Will Generator does not cater to joint Executors. However, the Online Will Generator allows the Testator to include an alternative Executor. If circumstances cause the main Executor to be unable to execute the terms of the Will, the execution power will be passed on to the alternative Executor. ",
  //     others: [],
  //   },
  //   {
  //     info: " An Executor must be over the age of 21, not be a bankrupt and is of sound mind to carry out his or her duties under the Will upon the Testator’s demise. ",
  //     others: [],
  //   },
  //   {
  //     info: " Some of the Executor’s duties would include: ",
  //     others: [
  //       " (a) Applying for Grant of Probate for the deceased;",
  //       " (b) Making funeral arrangements for the deceased;",
  //       " (c) Settling the lawful just debts owed by the deceased;",
  //       " (d) Taking possession of and Distributing the assets of the deceased in accordance with the Will. ",
  //     ],
  //   },
  //   {
  //     info: " If circumstances are such that an Executor refuses or is unable to take up his office, the relevant persons will have to seek legal advice as to how next to proceed.",
  //   },
  // ];

  return (
    <div className="py-6 ">
      <div
        onClick={() => setShowModal(true)}
        className="text-primary flex items-center cursor-pointer"
      >
        <QuestionCircleOutlined />
        <p className="px-2">{text}</p>
      </div>

      <Modal
        centered
        open={showModal}
        title={<p className="text-2xl font-semibold font-primary">{tittle}</p>}
        width={1000}
        onCancel={() => setShowModal(false)}
        footer={[]}
      >
        <div>
          {data?.map((info, i) => (
            <div key={i} className="my-4 font-primary">
              <p>{info?.info}</p>

              {info?.others?.map((other, i) => (
                <p key={i}>{other}</p>
              ))}
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
};

export default FormModalText;

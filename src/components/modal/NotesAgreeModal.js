import { Button, Checkbox, Modal } from "antd";
import Link from "next/link";
import React, { useState } from "react";

const NotesAgreeModal = ({ setOpen, open }) => {
  const [agree, setAgree] = useState(false);

  const applicableOptions = [
    {
      label: "Residents (non-citizens) residing in the United Arab Emirates",
    },
    {
      label: "Persons over the age of 21; and",
    },
    {
      label:
        "Non-Muslims (Muslims should consult a lawyer well-versed in Muslim law for succession planning)",
    },
  ];
  return (
    <Modal
      title={
        <div>
          <p className="px-2 font-primary text-3xl font-semibold">
            Important Notes
          </p>
        </div>
      }
      footer={
        <div className="w-full px-2 flex justify-between items-center">
          <Checkbox onChange={(e) => setAgree(e.target.checked)}>
            I Agree
          </Checkbox>
          <Link href={"/step"}>
            <Button
              onClick={() => setOpen(false)}
              disabled={!agree}
              type="primary"
              size="large"
              className={`px-10 font-bold  ${
                agree ? "bg-primary" : "bg-[#CECCDA]"
              }`}
            >
              Next
            </Button>
          </Link>
        </div>
      }
      centered
      open={open}
      onCancel={() => setOpen(false)}
      width={1000}
    >
      <div className="p-2 md:py-6 font-primary text-lg text-gray-600">
        <p className="py-4">The Online Will Generator may be applicable for:</p>
        <ul className="text-sm pb-10">
          {applicableOptions?.map((option, i) => (
            <p key={i}>
              {i + 1}. {option?.label}
            </p>
          ))}
        </ul>

        <div
          className="pt-6 text-sm"
          style={{ borderTop: "1px solid #DFDDDD" }}
        >
          <p>
            By checking “I agree” and clicking “Next”, I hereby confirm that
            Arnifi Corporate Services Providers LLC (“Arnifi”) and its related
            corporations, as well as their respective representatives and/or
            agents, can collect, use or disclose my personal data in the manner
            set forth in{" "}
            <a href="/" className="text-primary">
              Arnifi’s privacy policy
            </a>{" "}
            and{" "}
            <a href="/" className="text-primary">
              FAQ’s.
            </a>
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default NotesAgreeModal;

import React from "react";

const WillTemplate = () => {
  return (
    <section className="min-h-screen p-[100px]">
      <div className="h-[11.7in] w-[8.3in] mx-auto bg-white p-[30px]">
        {/* heading.. */}
        <div>
          <div className="font-primary text-center h-[600px] flex flex-col justify-center items-center">
            <h2 className="text-2xl">LAST WILL AND TESTAMENT OF</h2>
            <h1 className="text-3xl py-4">Personal full name</h1>
          </div>
        </div>

        {/* footer... */}
        <div className="mt-28 text-lg">
          <div className="p-10 m-10 bg-gray-100">
            <p className="py-1">
              <strong>Please note the following:</strong>
            </p>
            <ol className="ml-4">
              <li>Please Print</li>
              <li>
                Sign it before tow (2) witnesses (These 2 witnesses must be of
                sound ming, be above the age of 21 years old, and must not be
                beneficiaries under the Will)
              </li>
              <li>
                Store it in a safe location. We recommend a safe deposit box.
              </li>
              <li>
                Consider notifying the Will Registry that your Will han been
                made.
              </li>
              <li>
                Inform Your executors of their role and the location of the
                Will.
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div>
        <ol className="">
          <li>list 1</li>
          <li>list 2</li>
          <li>list 3</li>
          <li>list 4</li>
          <li>list 5</li>
        </ol>
      </div>
    </section>
  );
};

export default WillTemplate;

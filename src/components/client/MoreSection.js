import React from "react";

const MoreSection = () => {
  return (
    <section>
      <div className="max-w-5xl mx-auto p-4">
        <h2 className="font-primary my-4 text-lg font-semibold text-center">
          More on Wealth and Legacy Planning in your Silver Years
        </h2>

        <div className="grid  grid-cols-1 md:grid-cols-2 gap-4">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="my-2">
              <div>
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/d0bUbrYda6g"
                  title="Debunking the myths of writing a will"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
                <h3 className=" font-semibold text-lg py-4">
                  Debunking the myths of writing a will
                </h3>
                <p>
                  Do you need a lawyer to write a will? Is it expensive? Why and
                  when should you write a will? Let us debunk some of the
                  misconceptions that people have with writing a will.{" "}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="py-10 text-sm text-gray-500 text-center text-clip px-2">
          <p>
            The Online Will Generator utilises a basic Will template and has
            been prepared upon the advice and with the assistance of Hin Tat
            Augustine & Partners and does not necessarily deal with every
            important topic or nor cover every aspect of the topics with which
            it deals. The Online Will Generator is intended for general use only
            and does not contain or convey any legal or other advice. You should
            seek legal advice from appropriately qualified lawyers for more
            specific Will requirements (e.g. Islamic law, persons under 21, not
            residing in Singapore etc.). You may refer to the
            <a href="/" className="mx-1 text-primary">
              Ministry of Law
            </a>
            for more information. OCBC Bank does not act as adviser to you. OCBC
            Bank gives no warranty as to the accuracy or completeness of the
            Online Will Generator, and is not responsible for or liable to any
            person for any loss or damage arising from any reliance thereon.{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default MoreSection;

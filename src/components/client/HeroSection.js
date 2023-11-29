"use client";

import { Button, Card, Flex } from "antd";
import React from "react";
import { CheckOutlined } from "@ant-design/icons";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";

const HeroSection = () => {
  const { md } = useBreakpoint();

  return (
    <section
      className="relative"
      style={{
        backgroundImage: "url(/background.png)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100%",
      }}
    >
      <div className="max-w-5xl mx-auto font-primary">
        <div className="pt-16">
          <div className="py-6 p-4 w-[400px] md:w-[700px]">
            <h2 className="text-5xl ">Arnifi Online Will Generator</h2>
            <p className="mt-8 text-xl">
              Take care of your loved ones by planning your legacy today. After
              you have decided on your executor(s) and beneficiaries, as well as
              how much each should receive, use our Online Will Generator to set
              a plan in place.
            </p>
          </div>
        </div>

        <div className="">
          <p className="text-xl text-[#1F938F] font-semibold p-4">
            Things to note before you begin.
          </p>
          <div className="p-4 lg:p-0">
            <Card className="">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
                {[...Array(3)].map((_, i) => (
                  <div
                    style={{
                      borderLeft: i === 1 && md ? "1px solid #DFDDDD" : "none",
                      borderRight: i === 1 && md ? "1px solid #DFDDDD" : "none",
                    }}
                    className=" font-primary p-4 w-full mx-1"
                    key={i}
                  >
                    <div className="w-full my-10 flex flex-col justify-center items-center">
                      <div className="">
                        <div className="w-16 relative h-16 rounded-full bg-[#C0EEEB]">
                          <p className="text-5xl font-bold absolute top-[-25%] left-[25%] transform-translate(-50%, 0%)">
                            {i + 1}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="leading-none font-primary">
                      <h3 className="my-6">
                        You will need the following information
                      </h3>
                      <p className="my-3 font-semibold">Mandatory</p>
                      <div>
                        <Flex justify="start" align="center">
                          <CheckOutlined />
                          <p className="p-2">Your personal details</p>
                        </Flex>
                        <Flex justify="start" align="center">
                          <CheckOutlined />
                          <p className="p-2">
                            Name and NRIC/Passport no. of Executors
                          </p>
                        </Flex>
                        <Flex justify="start" align="center">
                          <CheckOutlined />
                          <p className="p-2">
                            Name and NRIC/Passport no. of Beneficiaries
                          </p>
                        </Flex>
                      </div>
                      <p className="my-3 font-semibold">Recommended</p>
                      <div>
                        <Flex justify="start" align="center">
                          <CheckOutlined />
                          <p className="p-2">
                            Asset details (e.g. list of bank accounts or
                            insurance policies){" "}
                          </p>
                        </Flex>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        <div className="text-center my-6">
          <Button
            className="bg-primary"
            type="primary font-bold px-6"
            size="large"
          >
            Proceed
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

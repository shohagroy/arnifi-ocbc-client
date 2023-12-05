"use client";

import Image from "next/image";
import Primary_Logo from "../../assets/Primary_Logo.png";
import Form from "@/components/forms/From";
import FormInput from "@/components/forms/FormInput";
import { Button, message } from "antd";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/schemas/user";
import { useLoginMutation } from "@/redux/features/user/userApi";
import { setToLocalStorage } from "@/utils/local-storage";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [login, { isLoading }] = useLoginMutation();
  const router = useRouter();

  const loginHandelar = async (data) => {
    try {
      const result = await login(data).unwrap();

      // console.log(result?.data?.message);
      if (result?.data?.success) {
        messageApi.open({
          type: "success",
          content: result?.data?.message || "User Login Successfully!",
        });

        setToLocalStorage("accessToken", result?.data?.data?.accessToken);
        router.push(router.query?.callbackUrl || "/admin");
      } else {
        messageApi.open({
          type: "error",
          content: result?.message || "Something went wrong!",
        });
      }
    } catch (error) {
      messageApi.open({
        type: "error",
        content: error?.data || "Something went wrong!",
      });
    }
  };
  return (
    <>
      <main>
        {contextHolder}
        <div className="bg-[#EEEEEE] font-primary h-screen flex justify-center items-center w-full">
          <div className=" w-full lg:w-1/2 lg:p-6 p-2">
            <div className="w-11/12 p-8 m-auto bg-white rounded-lg sm:w-96 bg-opacity-80 bg-clip-padding shadow-lg">
              <div className="flex flex-col justify-center items-center">
                <Image src={Primary_Logo} alt="Arnifi" width={150} />

                <div className="p-4 text-center">
                  <h2>Wellcome Back!</h2>
                  <p className="p-2 font-semibold">Admin Login</p>
                </div>
              </div>

              <div className="mt-6">
                <Form
                  submitHandler={loginHandelar}
                  resolver={yupResolver(loginSchema)}
                  defaultValues={{ email: "", password: "" }}
                >
                  <div className="my-2">
                    <FormInput
                      name={"email"}
                      placeholder={"Enter Your Email"}
                      type={"email"}
                      size="large"
                      required
                    />
                  </div>

                  <div className="my-2">
                    <FormInput
                      name={"password"}
                      placeholder={"**********"}
                      type={"password"}
                      size="large"
                      required
                    />
                  </div>

                  <div className="my-6">
                    <Button
                      loading={isLoading}
                      disabled={isLoading}
                      htmlType="submit"
                      className="font-primary text-white bg-primary hover:bg-primary/90 h-[50px] w-full font-bold"
                      size="large"
                      type="primary"
                    >
                      {isLoading ? "Loading..." : "Log In"}
                    </Button>
                  </div>
                </Form>
              </div>
            </div>

            {/* <h2 className="max-w-xs text-center  font-bold mx-auto text-gray-400 mt-8">
              Only Admin or Super Admin Can Login
            </h2> */}
          </div>
        </div>
      </main>
    </>
  );
};

export default LoginPage;

import Image from "next/image";
import Primary_Logo from "../../assets/Primary_Logo.png";
import Form from "@/components/forms/From";
import FormInput from "@/components/forms/FormInput";

const LoginPage = () => {
  const loginHandelar = (data) => {
    console.log(data);
  };
  return (
    <>
      <main>
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
                {/* <Form submitHandler={loginHandelar}>
                  <div>
                    <FormInput
                      required
                      type={"email"}
                      placeholder={"type login email"}
                      name={"Email"}
                    />
                  </div>
                </Form> */}
                {/* <form className="text-base font-nunito">
                  <div className="space-y-4">
                    <div className="relative flex items-center">
                      <svg
                        className="absolute w-5 h-5 ml-3 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <input
                        className="w-full p-2 pl-10 text-gray-800 placeholder-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 border"
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                      />
                    </div>
                    <div className="relative flex items-center">
                      <svg
                        className="absolute w-5 h-5 ml-3 text-gray-400 "
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                      <input
                        className="w-full p-2 pl-10 text-gray-800 placeholder-gray-600 rounded-md  border focus:outline-none focus:ring-2 focus:ring-blue-300"
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                      />
                    </div>
                    <div className="flex items-start space-x-2 md:items-center">
                      <input
                        className="focus:outline-none"
                        type="checkbox"
                        name="terms"
                        id="serviceTerms"
                      />
                      <label
                        className="-mt-1 text-sm sm:mt-0"
                        htmlFor="serviceTerms"
                      >
                        <span>Remember Me</span>
                      </label>
                    </div>
                    <div>
                      <button className="w-full p-2 text-sm font-semibold text-center text-white transition duration-100 rounded-md md:text-lg font-nunito bg-gradient-to-r from-blue-600 to-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 hover:shadow-lg">
                        Login
                      </button>
                    </div>
                  </div>
                </form> */}
              </div>
            </div>

            <h2 className="max-w-xs text-center  font-bold mx-auto text-gray-400 mt-8">
              Started for free and get attractive offer
            </h2>
          </div>
        </div>
      </main>
    </>
  );
};

export default LoginPage;

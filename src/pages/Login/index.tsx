import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { fetchUser } from "../../services/AuthSlice";

interface Inputs {
  username: string,
  password: string
}

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
  const dispatch = useAppDispatch()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(fetchUser({username: data.username, password: data.password}))
  }
  return (
    <section className="w-screen h-screen flex items-center justify-center bg-primaryColor bg-no-repeat bg-cover bg-center">
        <form onSubmit={handleSubmit(onSubmit)} className="w-[350px]">
            <h1 className="text-whiteColor text-4xl font-medium mb-2">Welcome Back</h1>
            <p className="text-sm mb-4 text-[#B3B3B3]">
              Welcome Back! Please Enter Your Details.
            </p>
            <div className="mb-4">
              <input
                autoComplete=""
                {...register("username", {
                  required: "Required",
                })}
                className="block w-full mt-1 py-3 text-whiteColor outline-none border-b border-whiteColor bg-transparent"
                type="text"
                placeholder="Username"
              />
              {errors.username && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.username.message} *
                </p>
              )}
            </div>
            <div className="mb-4">
              <input
                autoComplete=""
                {...register("password", {
                  required: "Required",
                })}
                className="block w-full mt-1 py-3 text-whiteColor outline-none border-b border-whiteColor bg-transparent"
                type="password"
                placeholder="Password"
              />
              {errors.password && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.password?.message} *
                </p>
              )}
            </div>
            <button className="bg-mainColor h-[52px] w-full text-whiteColor bg-secondaryColor rounded-md">
              LOGIN
            </button>
          </form>
    </section>
  );
};

export default Login;

/* import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Flex from "../../components/MiniComponents/Flex";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { fetchUser } from "../../services/Auth/AuthSlice";

interface Inputs {
  username: string,
  password: string
}

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
  const dispatch = useAppDispatch()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(fetchUser({username: data.username, password: data.password}))
  }
  return (
    <section className="w-screen h-screen">
      <Flex>
        <div className="basis-[60%] h-screen flex items-center justify-center p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="w-[400px]">
            <h1 className="text-4xl font-medium mb-2">Welcome Back</h1>
            <p className="text-sm mb-4 text-[#B3B3B3]">
              Welcome Back! Please Enter Your Details.
            </p>
            <div className="mb-4">
              <label className="">Username</label>
              <input
                autoComplete=""
                {...register("username", {
                  required: "Hökmany",
                })}
                className="block w-full mt-1 bg-[#eeeeee] py-3 rounded-md outline-none px-4"
                type="text"
              />
              {errors.username && (
                <p className="text-red-600 text-sm">
                  {errors.username.message} *
                </p>
              )}
            </div>
            <div className="mb-4">
              <label className="">Password</label>
              <input
                autoComplete=""
                {...register("password", {
                  required: "Hökmany",
                })}
                className="block w-full mt-1 bg-[#eeeeee] py-3 rounded-md outline-none px-4"
                type="password"
              />
              {errors.password && (
                <p className="text-red-600 text-sm">
                  {errors.password?.message} *
                </p>
              )}
            </div>
            <button className="bg-mainColor h-[52px] w-full text-whiteColor rounded-md">
              LOGIN
            </button>
          </form>
        </div>
        <div className="basis-[40%] h-screen bg-loginBg bg-center bg-cover"></div>
      </Flex>
    </section>
  );
};

export default Login;
 */

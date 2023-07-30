import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";
import Head from "next/head";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "@/firebase/firebase.auth";
import RootLayout from "@/components/layouts/RootLayout";

const Login = () => {
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        createUserWithEmailAndPassword(data.email, data.password);
    };
    console.log(user);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <Head>
                <title>Next Login</title>
            </Head>
            <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow">
                <h3 className="text-2xl font-bold mb-4">LOGIN</h3>
                <div className="flex items-center mb-4">
                    <GoogleOutlined className="text-3xl mr-4 cursor-pointer" />
                    <GithubOutlined className="text-3xl cursor-pointer" onClick={() => signIn('github')} />
                </div>
                <hr className="my-4" />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="block mb-2" htmlFor="email">Your Email</label>
                    <input {...register("email", { required: true })} type="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                    <label className="block mt-4 mb-2" htmlFor="password">Your Password</label>
                    <input {...register("password", { required: true })} type="password" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                    <button type="submit" className="w-full mt-6 py-2 text-white bg-orange-600 rounded-md focus:outline-none hover:bg-chocolate-dark">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;

Login.getLayout = function (page) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
};

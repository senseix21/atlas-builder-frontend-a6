import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";
import Head from "next/head";
import styles from "@/styles/Login.module.css";
import { signIn, useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import auth from "@/firebase/firebase.auth";
import RootLayout from "@/components/layouts/RootLayout";


const Login = () => {
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        createUserWithEmailAndPassword(data.email, data.password)
    }
    console.log(user);


    return (
        <div>
            <Head>
                <title>Next Login</title>
            </Head>
            <div className={styles.form}>
                <h3>LOGIN</h3>
                <div className={styles.social_icons}>
                    <GoogleOutlined />
                    <GithubOutlined onClick={() => signIn('github')} />
                </div>
                <hr />
                <form >
                    <label htmlFor="">Your Email</label>
                    <input {...register("email", { required: true })} type="email" />
                    <label htmlFor="">Your Password</label>
                    <input {...register("password", { required: true })} type="password" />
                    <button style={{ color: 'white', backgroundColor: 'chocolate', borderRadius: '5px', }} type="submit">Login</button>
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
}
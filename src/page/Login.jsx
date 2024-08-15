import React from 'react'
import InputForm from '../components/InputForm';

function Login() {
  return (
    <div className=" con-align h-[100vh] flex justify-between gap-2 ">
      {/* password */}
      <div>
        <h3> Welcome Back</h3>
        <p>Sign in to start managing your projects.</p>
        <InputForm type="email" label=" Email:" />
        <InputForm type="password" label=" Password:" />
      </div>
      {/* img */}
      <div className="">
        <img className=" h-full w-full" src="./images/manzara.png" alt="" />
      </div>
    </div>
  );
}

export default Login
import React from 'react'
import InputForm from '../components/InputForm';

function Login() {
  return (
    <div className="con-align flex justify-between gap-2 ">
      {/* password */}
      <div>
        <h3> Welcome Back</h3>
        <p>Sign in to start managing your projects.</p>
        <InputForm />
      </div>
      {/* img */}
      <div>
        <img className='h-full w-full' src="./images/manzara.png" alt="" />
      </div>
    </div>
  );
}

export default Login
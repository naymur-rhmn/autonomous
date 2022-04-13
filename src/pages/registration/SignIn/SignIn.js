import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import useAuth from '../../../hook/useAuth';
import './SignIn.css'

const SignIn = () => {
  const { googleSignIn, user } = useAuth();

  // react hook form
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className='register d-flex align-items-center justify-content-center'>
      <div className="register-box p-3 shadow">
        <h5 className='text-center'>Sign In</h5>

        {/* react hook form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <input className='w-100 mt-3 px-3 py-2 rounded-pill border' defaultValue="" {...register("Email", { required: true })} placeholder="Email address" /><br />
          {errors.Email && <span className='text-danger ms-3' style={{ fontSize: 14 }}>This field is required</span>}

          <input className='w-100 mt-3 px-3 py-2 rounded-pill border' {...register("password", { required: true })} placeholder="Password" /><br />
          {errors.password && <span className='text-danger ms-3' style={{ fontSize: 14 }}>This field is required</span>}

          <input className='w-100 mt-3 px-3 py-2 text-uppercase rounded-pill border bg-primary text-white' type="submit" value='Sign In' />
        </form>
        <hr />
        <Button onClick={googleSignIn} style={{ fontSize: 14 }} className='w-100 px-3 text-uppercase py-2 rounded-pill border' type='button'>Sign in with google</Button>
        <Button style={{ fontSize: 14 }} className='w-100 mt-3 text-uppercase px-3 py-2 rounded-pill border' type='button'>Sign in with facebook</Button>
      </div>
    </div>
  );
};

export default SignIn;
import React from 'react';
import Logo from '../Assets/Images/assets.jpg';
import { useForm } from "react-hook-form";
import Constant from '../Constant';
import './Login.scss';

function Login() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm({mode:'onSubmit'});
  console.log('Errors : ', errors)
  const onSubmit = data => {
    console.log('Data : ', data);
  }
  return (
    <div className='loginPage'>
        <div className='innerContainer'>
            <div className='leftPart'>
              <img src={Logo} alt='' />
            </div>
            <div className='rightPart'>
            <div className='upperPart'>
              <p className='pageHeader'>Become an instructor</p>
              <p className='login' onClick={() => console.log('Already Have Account')}>Already have account? <span>Login</span></p>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
              <div className='labelInput'>
                <label>Name</label>
                <input {...register("firstName", { required: {value: true, message:'First name is required.'} , })} />
                {errors.firstName && <p className='errorMessage'>{errors?.firstName?.message}</p>}
              </div>
              <div className='labelInput'>
                <label>email</label>
                <input
                 {...register("email", 
                 { required: {value: true, message:'email is required.'}} , 
                 {pattern:{ value: '/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/', message:'are you sure you are entering valid email address?'} })} />
                {errors.email && <p className='errorMessage'>{errors?.email?.message}</p>}
              </div>

              <div className='labelInput'>
                <label>Password</label>
                <input {...register("password", 
                { required: {value: true, message:'password is required.'}} ,
                {minLength:{value:8, message:'Password contains atleast 8 characters'}},
                { validate: {
                  length: (value) =>
                      (value && value.length >= 8) || '',
                  hasUpperLowercase: (value) =>
                      value && value.match(Constant.REGEX.LOWERCASEUPPERCASE) !== null,
                  hasNumbers: (value) =>
                      (value && value.match(Constant.REGEX.NUMBER)) !== null,
                  hasSpecialChar: (value) =>
                      (value && value.match(Constant.REGEX.SPECIALCHARACTERS)) !== null
              }
              },)} />
                {errors.password && <p className='errorMessage'>{errors?.password?.message}</p>}
              </div>

              <div className='labelInput'>
                <label>Confirm Password</label>
                <input {...register("confirmpassword", 
                { required: {value: true, message:'Confirm password is required.'}},
                )} />
                {errors.confirmpassword && <p  className='errorMessage'>{errors?.confirmpassword?.message}</p>}
                {watch('password') !== watch('confirmpassword') && <p  className='errorMessage'>{errors?.confirmpassword?.message}</p>}
              </div>

              <div className='labelInput'>
              <label>Address</label>
              <input {...register("address", { required: {value: true, message:'Address is required.'} , })} />
              {errors.address && <p className='errorMessage'>{errors?.address?.message}</p>}
            </div>

            <div className='labelInput'>
            <label>Social Profile</label>
            <input {...register("socialprofile", { required:false })} />
          </div>
                <button type='submit'>Next</button>
              </form>

            </div>
        </div>
    </div>
  )
}

export default Login
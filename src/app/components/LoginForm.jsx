"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { loginAction } from './action/loginAction'

function LoginForm() {
  
    const { handleSubmit, register, reset, formState: { errors } } = useForm();
    const [errormsg, setError] = useState(null)
    const onSubmit = async(data) => {
      const res=  await loginAction(data)
      setError(res?.error)
        //console.log("Response",res)
        reset();
    }
    return (
      <div className=' h-screen flex items-center justify-center bg-slate-900 text-slate-50'>
          <div className='border border-white max-h-auto  w-[380px] drop-shadow-md rounded px-4 py-2'>
            {
                errormsg && <div className='bg-blue-600 rounded-md text-center text-base py-2'>{errormsg}</div>
            }
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className='flex flex-col'>
                    <label className='my-2'>Enter Your Name</label>
                    <input type="text" className='py-2 rounded-sm bg-transparent border-b-2 outline-none'
                        {...register("username", { required: true })}
                    />
                    {
                        errors.username?.type == 'required' && <p className='text-blue-500'>Username Required</p>
                    }
                </fieldset>

                <fieldset className='flex flex-col'>
                    <label className='my-2'>Enter Your Password</label>
                    <input type="password" className='py-2 rounded-sm bg-transparent border-b-2 outline-none'
                        {...register("password", { required: true })}
                    />

                    {
                        errors.password?.type == 'required' && <p className='text-blue-500'>Password Required</p>
                    }
                </fieldset>

                <fieldset className='flex flex-col my-6 border border-white py-2 rounded-md text-xl'>
                    <button type="submit">Login</button>
                </fieldset>
                <fieldset className='my-4'>
                    <Link href='#'>Forgot your password?</Link>
                </fieldset>
                <Link href='/register'>Not Registered yet ? <span className='text-blue-400 underline'>Click here</span></Link>
            </form>
        </div>
      </div>
    )
}

export default LoginForm
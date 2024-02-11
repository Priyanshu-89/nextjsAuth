"use client"
import Link from 'next/link'
import { signupAction } from './action/SignupAction';
import { useForm } from 'react-hook-form'


function RegisterForm() {
  
    const { handleSubmit, register, reset, formState: { errors } } = useForm();
   
    const onSubmit = async(data) => {
    
        await signupAction(data)
        reset();
    }
    return (
      <div className=' h-screen flex items-center justify-center bg-slate-900 text-slate-50'>
          <div className='border border-white max-h-auto w-[380px] drop-shadow-md rounded px-4 py-2'>
           
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
                    <label className='my-2'>Enter Your Email</label>
                    <input type="email" className='py-2 rounded-sm bg-transparent border-b-2 outline-none'
                        {...register("email", { required: true })}
                    />

                    {
                        errors.email?.type == 'required' && <p className='text-blue-500'>Email Required</p>
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
                    <button type="submit">Signup Here</button>
                </fieldset>
                
                <Link href='/login'>Return go to <span className='text-blue-400 underline'>Login Page</span></Link>
            </form>
        </div>
      </div>
    )
}

export default RegisterForm
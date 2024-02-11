import React from 'react'
import { signOut } from '../auth'
import { redirect } from 'next/navigation';

function page() {
    const handleLogout=async()=>{
        "use server"
        signOut();
        redirect("/login")
    }
  return (
    <div>
        <form action={handleLogout} className='bg-slate-900 h-screen flex justify-center items-center '>
<fieldset className='border border-slate-50 h-44 rounded-lg w-80 flex justify-center items-center flex-col'>
      <div className='text-slate-100 text-2xl'>
      Are You sure to signout ?
      </div>
        <button className='mt-4 px-4 py-1 bg-blue-700 text-white text-xl rounded-md' type="submit">Logout</button>
</fieldset>
        </form>
    </div>
  )
}

export default page
import { redirect } from "next/navigation";
import { auth } from "./auth";
import Link from "next/link";

export default async function Home() {
  const session =await auth();
  //console.log(session)
  if(!session)
  redirect("/api/auth/signin")
  return (
   <>
  <div className="bg-cover bg-center h-screen flex flex-col items-center justify-center bg-slate-900 text-slate-50 text-2xl" >
  <div>
  Welcome to the home page!<br/>
  </div>
   <div>
  {/* <Link href={'/logout'}>Logout</Link> */}
  <Link className='mt-6 px-4 py-1 bg-blue-700 text-white text-xl rounded-md' href={'/api/auth/signout'}>Logout</Link>



   </div>
  
    </div>

   </>
  );
}

import Image from "next/image";
import { auth } from "@clerk/nextjs/server";
import { SignOutButton } from '@clerk/nextjs'
import Link from 'next/link'


export default async function Home() {
  const { getToken, userId } = await auth();
  
  const token = await getToken();
  
  console.log("token : " , token);
  
  // if(!userId){
  //   return;
  // }

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <SignOutButton />
      <h1>hello</h1>
      <Link href="/sign-in">sign in</Link>
      <Link href="/sign-up">sign up</Link>
    </div>
  );
}

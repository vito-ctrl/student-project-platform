import { getToken, SignUp } from '@clerk/nextjs'

const SignUpPage = () => {
  return (
    <div className='flex justify-center'>
        <SignUp
          signInUrl='/sign-in'
          routing='path'
        />
    </div>
  )
}

export default SignUpPage
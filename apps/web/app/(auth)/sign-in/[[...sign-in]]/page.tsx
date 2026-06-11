import { SignIn } from '@clerk/nextjs'

const SignInPage = () => {
  return (
    <div className= "flex justify-center">
      <SignIn
        signUpUrl="/sign-up"
        routing="path"
      />
    </div>
  )
}

export default SignInPage
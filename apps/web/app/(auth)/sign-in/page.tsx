import { SignIn } from '@clerk/nextjs'

const SignInPage = () => {
  return (
    <SignIn
        appearance={{
        elements: {
          card: "shadow-xl",
          headerTitle: "text-2xl font-bold",
          formButtonPrimary: "bg-blue-100 hover:bg-blue-100",
        },
      }}
    />
  )
}

export default SignInPage
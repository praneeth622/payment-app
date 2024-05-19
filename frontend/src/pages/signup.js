import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"

export const Signup = () => {

    return <div className="bg-slate-300 h-screen flex justify-center " >
    <div className="flex flex-col justify-center ">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign Up"} />
        <SubHeading label={"Enter your infromation to create an account"} />
        <InputBox placeholder="First Name" label={"First Name"} />
        <InputBox placeholder="Last Name" label={"Last Name"} />
        <InputBox placeholder="example@email.com" label={"Email"} />
        <InputBox placeholder="Password" label={"Password"} />
        <div className="pt-4">
          <Button label={"Sign up"} />
        </div>
        <BottomWarning label={"Already Created Account?"} buttonText={"Sign in"} to={"/signin"} />
      </div>
    </div>
  </div>
}
//@ts-ignore
import Userfront from "@userfront/react";

Userfront.init("jb76q7n6");

const SignupForm = Userfront.build({
  toolId: "odndam",
});

const Signup = () => {
  return (
    <div>
      <SignupForm />
    </div>
  );
};

export default Signup;

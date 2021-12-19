//@ts-ignore
import Userfront from "@userfront/react";

const Login = () => {
  Userfront.init("jb76q7n6");

  const LoginForm = Userfront.build({
    toolId: "lkrkdl",
  });

  return (
    <div>
      <LoginForm />
    </div>
  );
};
export default Login;

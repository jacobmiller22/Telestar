import WithLayout from "WithLayout";
import { Auth as AuthLayout } from "layouts";
import { Signup } from "views/Auth";

const signuppage = () => <WithLayout layout={AuthLayout} component={Signup} />;

export default signuppage;

import WithLayout from "WithLayout";
import { Auth as AuthLayout } from "layouts";
import { Login } from "views/Auth";

const loginpage = () => <WithLayout layout={AuthLayout} component={Login} />;

export default loginpage;

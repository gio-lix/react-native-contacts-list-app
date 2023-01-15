import LoginComponents from "../../components/Login";
import { useContext, useState } from "react";
import loginUserAction from "../../context/actions/auth/loginUserAction";
import { GlobalContext } from "../../context/Provider";

const Login = () => {
  const [form, setForm] = useState({});
  const { authDispatch } = useContext(GlobalContext);
  const onSubmit = () => {
    if (form.username && form.password) {
      loginUserAction(form)(authDispatch);
    }
  };

  const onChange = ({ name, value }) => {
    setForm({ ...form, [name]: value });
  };

  return (
    <LoginComponents
      onSubmit={onSubmit}
      form={form}
      onChange={onChange}
    />
  );
};

export default Login;


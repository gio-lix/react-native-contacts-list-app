import React, {useContext, useState } from "react";
import SignUpComponent from "../../components/Signup";
import registerAction from "../../context/actions/auth/registerAction";
import { GlobalContext } from "../../context/Provider";

const SignUp = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const { authDispatch, authState: { error, loading, data } } = useContext(GlobalContext);


  const handleChange = ({ name, value }) => {
    setForm({ ...form, [name]: value });

    if (value !== "") {
      if (name === "password") {
        if (value.length < 6) {
          setErrors((prev) =>
            ({ ...prev, [name]: "This filed need min 6 chart" }));
        } else {
          setErrors((prev) =>
            ({ ...prev, [name]: null }));
        }
      } else {
        setErrors((prev) =>
          ({ ...prev, [name]: null }));
      }
    } else {
      setErrors((prev) =>
        ({ ...prev, [name]: "this field is required." }));
    }
    if (
      Object.values(form).length === 5 &&
      Object.values(form).every(item => item.trim().length > 0) &&
      Object.values(errors).every(item => !item)
    ) {
      console.log("form - ", form);
    }
  };

  const handleSubmit = () => {
    if (!form.username) {
      setErrors((prev) =>
        ({ ...prev, username: "Please add username." }));
    }
    if (!form.firstname) {
      setErrors((prev) =>
        ({ ...prev, firstname: "Please add first name." }));
    }
    if (!form.lastname) {
      setErrors((prev) =>
        ({ ...prev, lastname: "Please add last name." }));
    }
    if (!form.email) {
      setErrors((prev) =>
        ({ ...prev, email: "Please add email." }));
    }
    if (!form.password) {
      setErrors((prev) =>
        ({ ...prev, password: "Please add password." }));
    }

    registerAction(form)(authDispatch);
  };

  return (
    <SignUpComponent
      form={form}
      errors={errors}
      onSubmit={handleSubmit}
      onChange={handleChange}
      error={error}
      loading={loading}
    />
  );
};

export default SignUp;

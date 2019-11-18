import React from "react";
import * as Yup from "yup";
import axios from "axios";
import styled from "styled-components";
import { withFormik, Form, Field, ErrorMessage } from "formik";
// import UserList from "../components/UserList";

// Styling

const StyledDiv = styled.div`
  /* border: 1px solid blue; */
  width: 61.8%;
  /* border: 1px solid blue; */
  margin: 0 auto;
  /* height: 400px; */
  display: flex;
  flex-direction: column;
  justify-content: end;
  .form {
    /* border: 1px solid blue; */
    margin: 0 16.1%;
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);

    label {
      width: 100%;
      color: #555;
      margin-left: 10px;
      margin-right: 10px;
      margin-bottom: 5px;
      padding-top: 10px;
      color: black;
      display: flex;
      flex-direction: column;
      font-size: 12px;
    }
    form {
      margin-top: 9.6%;
    }

    input {
      display: flex;
      flex-direction: column;
      width: 50%;
      margin: 0 auto;
      /* margin-right: 40px; */
      margin-bottom: 3px;
      text-align: center;
    }

    /* .check {
      margin-left: 3px;
    } */
    input[type="submit"] {
      margin: 0 auto;
      padding-top: 9.6%;
      width: 30%;
      height: 40px;
    }
  }
  button {
    margin: 0 auto 20px auto;
    width: 60px;
  }
  .error {
    color: red;
    font-size: 12px;
    font-weight: 600;
  }
`;

function LoginForm(props) {
  // console.log(props);
  return (
    <StyledDiv className="New-user-form">
      <h2>Sign in</h2>
      <Form className="form">
        <ErrorMessage
          name="userName_password"
          render={msg => <div className="error">{msg}</div>}
        />
        <label>
          Username or email:
          <Field
            type="text"
            name="userName_password"
            placeholder="Username or email"
          />
        </label>
        <ErrorMessage
          name="current_password"
          render={msg => <div className="error">{msg}</div>}
        />
        <label>
          Password :
          <Field
            type="password"
            name="current_password"
            placeholder="Password "
          />
        </label>

        <button type="submit">Submit</button>
      </Form>
    </StyledDiv>
  );
}

const LoginFormWithFormik = withFormik({
  mapPropsToValues() {
    return {
      userName_password: "",
      current_password: ""
    };
  },
  validationSchema: Yup.object().shape({
    current_password: Yup.string().required("password is a required field"),
    userName_password: Yup.string().required("user name is a required field")
  }),

  handleSubmit(input, tools) {
    axios
      .post("https://reqres.in/api/users/", input)
      .then(res => {
        console.log(res.data);
        tools.resetForm();
      })
      .catch(err => {
        console.log(err);
      });
  }
})(LoginForm);

export default LoginFormWithFormik;

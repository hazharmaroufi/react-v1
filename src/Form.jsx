import { useState } from "react";

function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");

  const submitHandler = () => {
    console.log(email, password);
  };
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const passHandler = (event) => {
    setPassWord(event.target.value);
  };
  return (
    <>
      <hr />
      <input type="text" onChange={emailHandler} value={email} />
      <input type="password" onChange={passHandler} value={password} />
      <button onClick={submitHandler}>send</button>
    </>
  );
}

export default Form;

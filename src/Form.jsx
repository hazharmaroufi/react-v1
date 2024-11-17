import { useState } from "react";

function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const [role, setRole] = useState("user");
  const [gender, setGender] = useState("male");
  const [rule, setRule] = useState(false);

  const submitHandler = () => {
    console.log(email, password, role, gender, rule);
  };
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const passHandler = (event) => {
    setPassWord(event.target.value);
  };
  const roleHandler = (event) => {
    setRole(event.target.value);
  };
  const genderHandler = (event) => {
    setGender(event.target.value);
  };
  const ruleHandler = () => {
    setRule((rule) => !rule);
  };
  return (
    <>
      <hr />
      <input type="text" onChange={emailHandler} value={email} />
      <input type="password" onChange={passHandler} value={password} />
      <select onChange={roleHandler} value={role}>
        <option value="admin">Admin</option>
        <option value="writer">Writer</option>
        <option value="user">User</option>
      </select>

      <input
        id="male"
        type="radio"
        name="gender"
        onChange={genderHandler}
        value={"male"}
        checked={gender === "male"}
      />
      <label htmlFor="male"> Male</label>
      <input
        id="female"
        type="radio"
        name="gender"
        onChange={genderHandler}
        value={"female"}
        checked={gender === "female"}
      />
      <label htmlFor="female"> female</label>
      <input
        id="other"
        type="radio"
        name="gender"
        onChange={genderHandler}
        value={"other"}
        checked={gender === "other"}
      />
      <label htmlFor="other"> Other</label>
      <input type="checkbox" value={rule} onChange={ruleHandler} />
      <button onClick={submitHandler}>send</button>
    </>
  );
}

export default Form;

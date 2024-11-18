import { useState } from "react";

function Form() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    role: "user",
    gender: "make",
    rules: false,
  });
  // const [email, setEmail] = useState("");
  // const [password, setPassWord] = useState("");
  // const [role, setRole] = useState("user");
  // const [gender, setGender] = useState("male");
  // const [rule, setRule] = useState(false);

  const submitHandler = () => {
    console.log(form);
  };
  const formHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if (name === "rules") {
      setForm((form) => ({ ...form, rules: !form.rules }));
    } else {
      setForm((form) => ({ ...form, [name]: value }));
    }
  };
  // const emailHandler = (event) => {
  //   setEmail(event.target.value);
  // };
  // const passHandler = (event) => {
  //   setPassWord(event.target.value);
  // };
  // const roleHandler = (event) => {
  //   setRole(event.target.value);
  // };
  // const genderHandler = (event) => {
  //   setGender(event.target.value);
  // };
  // const ruleHandler = () => {
  //   setRule((rule) => !rule);
  // };

  return (
    <>
      <hr />
      <input
        type="text"
        onChange={formHandler}
        name="email"
        value={form.email}
      />
      <input
        type="password"
        onChange={formHandler}
        name="password"
        value={form.password}
      />
      <select onChange={formHandler} name="role" value={form.role}>
        <option value="admin">Admin</option>
        <option value="writer">Writer</option>
        <option value="user">User</option>
      </select>

      <input
        id="male"
        type="radio"
        name="gender"
        onChange={formHandler}
        value={"male"}
        checked={form.gender === "male"}
      />
      <label htmlFor="male"> Male</label>
      <input
        id="female"
        type="radio"
        name="gender"
        onChange={formHandler}
        value={"female"}
        checked={form.gender === "female"}
      />
      <label htmlFor="female"> female</label>
      <input
        id="other"
        type="radio"
        name="gender"
        onChange={formHandler}
        value={"other"}
        checked={form.gender === "other"}
      />
      <label htmlFor="other"> Other</label>
      <input
        type="checkbox"
        value={form.rules}
        name="rules"
        onChange={formHandler}
      />
      <button onClick={submitHandler}>send</button>
    </>
  );
}

export default Form;

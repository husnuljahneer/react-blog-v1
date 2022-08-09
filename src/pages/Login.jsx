import { useState } from "react";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginCheck = e => {
    e.preventDefault();
    if (email === " " && password === " ") {
      alert("Please enter your email and password");
    }
    if (email === " ") {
      alert("Please enter your email");
    }
    if (password === " ") {
      alert("Please enter your password");
    }
    if (email === "admin" && password === "admin") {
      alert("Login Successful");
      window.location.href = "/";
    } else {
      alert("Login Failed");
    }
  };
  return (
    <div className="flex flex-col w-96 mx-auto">
      <h1 className="mb-10">Login</h1>
      <input
        className="p-5 border border-black mb-2"
        type="text"
        placeholder="Email"
        onChange={e => setEmail(e.target.value)}
      />
      <input
        className="p-5 border border-black mb-2"
        type="password"
        placeholder="********"
        onChange={e => setPassword(e.target.value)}
      />
      <button className="bg-teal-500 p-3" onClick={loginCheck}>
        Login
      </button>
    </div>
  );
}

import { FormEvent, useState } from "react";
import { signUpNewUser } from "../services/auth-service";

export function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onHandleSubmit(e: FormEvent) {
    e.preventDefault();

    if (email && password) {
      const signup = signUpNewUser(email, password);
      console.log(signup);
    }
  }

  return (
    <form
      className="flex flex-col gap-4 mt-3 border border-red-500 p-4"
      onSubmit={onHandleSubmit}
    >
      <input
        value={email}
        type="email"
        placeholder="Email here"
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        value={password}
        type="password"
        placeholder="Password here"
        required
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Registrarme</button>
    </form>
  );
}

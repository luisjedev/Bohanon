import { FormEvent, useState } from "react";
import { signUpNewUser } from "../services/auth-service";
import { Navigate } from "react-router-dom";

export function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function onHandleSubmit(e: FormEvent) {
    e.preventDefault();

    if (email && password) {
      const signup = await signUpNewUser({ email: email, password: password });

      if (signup) {
        return <Navigate to={"auth/signin"} />;
      }
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

import { FormEvent, useState } from "react";
import { useSessionContext } from "../../../contexts/session-context";

export function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signup } = useSessionContext();

  async function onHandleSubmit(e: FormEvent) {
    e.preventDefault();

    if (email && password) {
      await signup(email, password);
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

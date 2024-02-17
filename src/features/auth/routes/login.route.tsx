import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSessionContext } from "../../../contexts/session-context";
import { signInWithEmail } from "../services/auth-service";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { session } = useSessionContext();

  useEffect(() => {
    if (session) {
      navigate("/");
    }
  }, [session]);

  async function onHandleSubmit(e: FormEvent) {
    e.preventDefault();

    if (email && password) {
      const res = await signInWithEmail({ email: email, password: password });

      console.log("Resultado inicio de sesion: ", res);

      if (res?.session) {
        navigate("/");
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
      <button>Login</button>
    </form>
  );
}

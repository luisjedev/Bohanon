import { supabase } from "../../../lib/supabase";

export async function signUpNewUser(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function signInWithEmail(email: string, password: string) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      console.log(error.message);
      throw new Error("Error en la llamada");
    }
    return data;
  } catch (error) {
    console.log("Error en la llamada: ", error);
  }
}

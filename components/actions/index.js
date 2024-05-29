"use server";

import { signIn, signOut } from "@/auth";

export async function doSignOut() {
  await signOut();
}

export async function doSignIn() {
  await signIn("google", { callbackUrl: "http://localhost:3000" });
}

export async function login({ email, password }) {
  console.log("submitting form", email, password);

  try {
    const response = await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
    });
    return response;
  } catch (err) {
    throw err;
  }
}

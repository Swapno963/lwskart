"use server";

import { signIn, signOut } from "@/auth";

// every king of
export async function doSignOut() {
  await signOut();
}

// login using google
export async function doSignIn(byWhom = "facebook") {
  if (byWhom == "google") {
    await signIn("google", { callbackUrl: "http://localhost:3000" });
  } else {
    await signIn("facebook", { callbackUrl: "http://localhost:3000" });
  }
}

// login useing email and password
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
    return err;
  }
}

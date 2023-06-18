"use client";
import { signIn, useSession } from "next-auth/react";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
  const session = useSession();
  const router = useRouter();
  const submitHandler = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", { email, password });
  };
  if (session.status === "loading") {
    return <p> loading...</p>;
  }
  if (session.status === "authenticated") {
    router.push("/dashboard");
  }
  if (session.status === "unauthenticated") {
    return (
      <div className="LoginContainer">
        <button onClick={() => signIn("google")} className="googleLoginBtn">
          login with Google
        </button>
        <button onClick={() => signIn("github")} className="githubLoginBtn">
          login with Github
        </button>
        <div className="regisContainer">
          <form onSubmit={submitHandler}>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="password" required />
            <button type="submit">Login</button>
          </form>
          <Link href="/dashboard/register">create Account</Link>
        </div>
      </div>
    );
  }
};

export default Login;

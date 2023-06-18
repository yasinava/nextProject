"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const router = useRouter();
  const [err, setErr] = useState(false);
  const submitHandler = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await axios.post("/api/auth/register", {
        name,
        email,
        password,
      });
      res.status === 201 &&
        router.push("/dashboard/login?success=Account has been created:)");
    } catch (error) {
      setErr(true);
    }
  };

  return (
    <div className="regisContainer">
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="userName" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="password" required />
        <button type="submit">Register</button>
      </form>
      <Link href="/dashboard/login">i have account , i want Login</Link>
    </div>
  );
};

export default Register;

"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function Login() {
  const router = useRouter();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);

      const res = await axios.post("/api/users/login", user);
      console.log(res.data);
      if (res.data.success) {
        console.log(res.data.data);
        toast.success("Login successfully");
        router.push("/profile");
      } else {
        toast.error(res.data.message);
      }
    } catch (error: any) {
      console.log(error);
      toast.error("Login failed: ", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col gap-2 items-center justify-center max-w-lg mx-auto min-h-screen py-2">
      <h1 className="text-2xl ">Login</h1>
      <hr />

      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="email">email</label>
        <input
          className="p-2 px-4 text-gray-950 border border-gray-300 rounded-lg my-2 focus:outline-none focus:border-gray-600"
          id="email"
          type="email"
          inputMode="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="email"
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="password">password</label>
        <input
          className="p-2 px-4 text-gray-950 border border-gray-300 rounded-lg my-2 focus:outline-none focus:border-gray-600"
          id="password"
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="password"
        />
      </div>

      <button
        onClick={onLogin}
        className={`
        ${buttonDisabled ? "pointer-events-none opacity-50" : ""} 
        ${loading ? "italic" : ""}
        ${"w-full p-2 border border-gray-300 rounded-lg my-2 focus:outline-none focus:border-gray-600"}`}
      >
        {loading ? "Loading..." : "Login"}
      </button>

      <Link href="/signup">Visit sign up page</Link>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function ProfilePage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    try {
      setLoading(true);

      const res = await axios.get("/api/users/logout");
      console.log(res.data);
      if (res.data.success) {
        toast.success(res.data.message);
        router.push("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error: any) {
      console.log(error);
      toast.error("logout failed: ", error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col gap-2 items-center justify-center max-w-lg mx-auto min-h-screen py-2">
      <h1 className="text-2xl ">Profile</h1>
      <hr />
      <p>Profile Page</p>

      <button
        onClick={handleLogout}
        className={`
        ${loading ? "italic" : ""}
        ${"  p-2 px-10 border hover:border-red-300 hover:text-red-300 border-gray-300 rounded-lg my-2 focus:outline-none "}`}
      >
        {loading ? "Logging out..." : "Logout"}
      </button>
    </div>
  );
}

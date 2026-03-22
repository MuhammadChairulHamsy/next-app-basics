"use client";

import { useState } from "react";

const AdminProductPage = () => {
  const [status, setStatus] = useState("");
  const handleRevalidate = async () => {
    try {
      const res = await fetch(
        "http://localhost:3000/api/revalidate?tag=products&secret=syycode22451053",
        {
          method: "POST",
        },
      );

      const response = await res.json();

      if (!res.ok) {
        setStatus(`Revalidate failed: ${response.message || "Unknown error"}`);
      } else if (response.revalidated) {
        setStatus("Revalidate success");
      } else {
        setStatus("Revalidate failed: Invalid response");
      }
    } catch (error) {
      setStatus(`Error: ${error instanceof Error ? error.message : "Unknown error"}`);
    }
  };

  return (
    <div className="bg-sky-500 w-3/6 h-80 flex justify-center items-center rounded-lg">
      <button
        onClick={() => handleRevalidate()}
        className="text-slate-100 border px-2 py-1 rounded-lg m-5"
      >
        Revalidate
      </button>
      <h1 className={`text-2xl m-2 ${status.includes("success") ? "text-green-600" : "text-red-600"}`}>
        {status}
      </h1>
    </div>
  );
};

export default AdminProductPage;

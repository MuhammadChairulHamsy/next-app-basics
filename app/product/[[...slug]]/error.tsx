"use client";

import { useEffect } from "react";

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2 className="text-red-500 text-2xl">Something went wrong!</h2>
      <button
        onClick={() => unstable_retry()}
        className="text-red-500 text-2xl border px-2 py-1 rounded-lg"
      >
        Try again
      </button>
    </div>
  );
}

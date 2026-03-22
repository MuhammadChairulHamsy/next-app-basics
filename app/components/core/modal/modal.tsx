"use client"

import { useRouter } from "next/navigation";
import { MouseEventHandler, useRef, ReactNode } from "react";

const Modal = ({ children }: { children: ReactNode }) => {
  const overlay = useRef(null);
  const router = useRouter();

  const close: MouseEventHandler = (e) => {
    if (e.target === overlay.current) {
      router.back();
    }
  };

  return (
    <div
      ref={overlay}
      onClick={close}
      className="fixed z-10 inset-0 bg-black/60 flex items-center justify-center"
    >
      <div className="p-6 bg-slate-50 rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

export default Modal;
"use client";
import { useRouter } from "next/navigation";
import type { ReactNode } from "react";

type ModalProps = {
  children: ReactNode;
};

export const Modal = ({ children }: ModalProps) => {
  const router = useRouter();

  return (
    <dialog open className="top-1/2 left-0 fixed p-0">
      <div className="p-4">
        <button onClick={() => router.back()}>Close modal</button>
        {children}
      </div>
    </dialog>
  );
};

"use client";

import React, { useContext, createContext, useState } from "react";

type ModalContextType = {
  isModalOpen: boolean;
  setIsModalOpen: (slug: boolean) => void;
  modalHandler: () => void;
};

const modalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalHandler = (): void => {
    setIsModalOpen(true);
    document.body.classList.add("hideScrollbar");
    document.documentElement.classList.add("hideScrollbarhtml");
  };
  return (
    <modalContext.Provider
      value={{ isModalOpen, setIsModalOpen, modalHandler }}
    >
      {children}
    </modalContext.Provider>
  );
};

const useModalContext = (): ModalContextType => {
  const context = useContext(modalContext);
  if (!context) {
    throw new Error("useModalContext must be used within a ModalProvider");
  }
  return context;
};

export default useModalContext;

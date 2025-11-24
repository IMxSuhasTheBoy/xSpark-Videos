"use client";

import { createContext, useState } from "react";

type ModalState = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const CreateChannelModalContext = createContext<ModalState | null>(null);

/**
 * Creates a provider component for the CreateChannelModalContext.
 */
const CreateChannelModalProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(true); //!change this after testing

  return (
    <CreateChannelModalContext.Provider
      value={{
        isOpen,
        onOpen: () => setIsOpen(true),
        onClose: () => setIsOpen(false),
      }}
    >
      {children}
    </CreateChannelModalContext.Provider>
  );
};

export default CreateChannelModalProvider;

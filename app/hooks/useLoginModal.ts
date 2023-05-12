import { create } from 'zustand'

interface LoginModalModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useLoginModal = create<LoginModalModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default useLoginModal;
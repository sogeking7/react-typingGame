import { User } from "@/types/user";
import { create } from "zustand";

type Store = {
  user: User | null;
  initUser: (user: User) => void;
  resetUser: () => void;
};

export const useUserStore = create<Store>()((set) => {
  return {
    user: null,
    initUser: (user) => set({ user }),
    resetUser: () => set({ user: null }),
  };
});

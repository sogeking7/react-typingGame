import { User } from "@/types/user";
import { create } from "zustand";

type Store = {
  user: User | null;
  initUser: (user: User) => void;
};

export const useUserStore = create<Store>()((set) => {
  return {
    user: null,
    initUser: (user) => set({ user }),
  };
});

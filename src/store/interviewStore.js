import { create } from "zustand";
import { persist } from "zustand/middleware";

const interviewStore = create(
  persist(
    (set) => ({
      interview : null,
      isInterviewing: false,
      setInterview: (interview) => set({ interview, isInterviewing: !!interview }),
    }),
    {
      name: "interview-storage", 
      getStorage: () => localStorage, 
    }
  )
);

export default interviewStore;
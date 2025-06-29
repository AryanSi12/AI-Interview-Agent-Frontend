// resumeStore.js
import { create } from "zustand"

const useResumeStore = create((set) => ({
  resume: null,
  setResume: (file) => set({ resume: file }),
  clearResume: () => set({ resume: null }),
}))

export default useResumeStore

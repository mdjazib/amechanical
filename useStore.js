import { create } from 'zustand'

export const useStore = create((set) => ({
    data: [],
    setData: (value) => set(() => ({ data: value })),
}))
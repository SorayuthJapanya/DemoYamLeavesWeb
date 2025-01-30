import { create } from 'zustand';
import axios from 'axios';
import { persist, createJSONStorage } from 'zustand/middleware'

const yamleavesStore = (set) => ({
  user: null,
  token: null,
  actionLogin: async (formData) => {
    try {
      // ส่ง request ไปที่ backend
      const res = await axios.post('http://localhost:5000/api/login', formData);
      
      // อัปเดตค่าใน store ด้วยการใช้ set
      set({
        user: res.data.payload,
        token: res.data.token
      });

      return res.data; // ส่ง response data กลับ
    } catch (err) {
      console.error("Login error:", err);
      throw new Error("Login failed!");
    }
  },
});


const usePersist = {
    name: 'yamLeaves-store',
    Storage: createJSONStorage(() => localStorage)
}

const useYamLeavesStore = create(persist(yamleavesStore, usePersist));

export default useYamLeavesStore;

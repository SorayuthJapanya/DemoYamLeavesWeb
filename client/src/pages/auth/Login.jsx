import React, { useState } from "react";
import { toast } from 'react-toastify';
import useYamLeavesStore from "../../store/yamleaves-store";
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const actionLogin = useYamLeavesStore((state) => state.actionLogin);

  const user = useYamLeavesStore((state) => state.user)
  console.log('user from zustand', user)

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await actionLogin(formData);
      const role = res.payload.role
      roleRedirect(role)
      toast.success("Login successful!"); // แจ้งเตือนเมื่อเข้าสู่ระบบสำเร็จ
    } catch (err) {
      console.log(err);
      toast.error("Login failed! Please check your credentials."); // แจ้งเตือนเมื่อเข้าสู่ระบบล้มเหลว
    }
  };

  const roleRedirect = (role) => {
    if (role === 'ADMIN') {
      navigate('/admin')
    } else {
      navigate('/user')
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-lg w-96">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username */}
          <div>
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

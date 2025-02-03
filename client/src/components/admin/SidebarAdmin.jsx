import React from 'react'
import { FaTachometerAlt, FaCog } from 'react-icons/fa' // ใช้ไอคอนจาก react-icons

const SidebarAdmin = () => {
  return (
    <div className="w-64 bg-blue-900 text-white flex flex-col h-screen">
      {/* Logo หรือชื่อของ Sidebar */}
      <div className="h-[90px] mb-5 bg-blue-950 font-bold text-white flex items-center justify-center text-2xl">
        Admin Panel
      </div>

      {/* เมนูใน Sidebar */}
      <ul className="space-y-6">
        <li className="flex items-center hover:bg-blue-700 p-2 rounded-md">
          <FaTachometerAlt className="mr-3" />
          <span>Dashboard</span>
        </li>
        <li className="flex items-center hover:bg-blue-700 p-2 rounded-md">
          <FaCog className="mr-3" />
          <span>Settings</span>
        </li>
        {/* เพิ่มเมนูอื่น ๆ ที่คุณต้องการ */}
      </ul>

      {/* เพิ่มส่วนสำหรับ Logout หรือส่วนอื่น ๆ */}
      <div className="mt-auto p-2">
        <button className="w-60 bg-blue-700 hover:bg-blue-600 text-white p-2 rounded-md mb-3 ">
          Logout
        </button>
      </div>
    </div>
  )
}

export default SidebarAdmin

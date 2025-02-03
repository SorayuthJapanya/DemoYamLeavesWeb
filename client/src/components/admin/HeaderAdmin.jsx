import React from 'react'
import { FaBell, FaUserCircle } from 'react-icons/fa' // ใช้ไอคอนจาก react-icons

const HeaderAdmin = () => {
  return (
    <header className="bg-blue-900 text-white p-4 flex justify-between items-center">
      {/* โลโก้หรือชื่อใน Header */}
      <div className="text-xl font-bold">
        Admin Panel
      </div>

      {/* เมนู/ปุ่มการแจ้งเตือน และบัญชีผู้ใช้ */}
      <div className="flex items-center space-x-6">
        {/* ไอคอนการแจ้งเตือน */}
        <div className="relative">
          <FaBell className="text-2xl cursor-pointer" />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
        </div>

        {/* ไอคอนโปรไฟล์ผู้ใช้ */}
        <FaUserCircle className="text-3xl cursor-pointer" />
      </div>
    </header>
  )
}

export default HeaderAdmin

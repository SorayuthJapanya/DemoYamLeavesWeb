import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import Layout from '../layouts/Layout'
import Dashboard from '../pages/admin/Dashboard'
import LayoutAdmin from '../layouts/LayoutAdmin'
import LayoutUser from '../layouts/LayoutUser'
import HomeUser from '../pages/user/HomeUser'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: 'login', element: <Login /> },
            { path: 'register', element: <Register /> },
        ]
    },
    {
        path: '/admin',
        element: <LayoutAdmin />,
        children: [
            { index:true, element: <Dashboard /> }
        ]
    },
    {
        path: '/user',
        element: <LayoutUser />,
        children: [
            { index:true, element: <HomeUser /> }
        ]
    },
])

const AppRoutes = () => {
    return <RouterProvider router={router} />
}

export default AppRoutes

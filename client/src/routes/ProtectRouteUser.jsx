import React, { useEffect, useState } from 'react'
import useYamLeavesStore from '../store/yamleaves-store'
import { curruntUser } from '../api/auth'
import LoadingToRedirect from './LoadingToRedirect'

const ProtectRouteUser = ({ element }) => {

    const [ok, setOK] = useState(false)
    const user = useYamLeavesStore((state) => state.user)
    const token = useYamLeavesStore((state) => state.token)
    
    useEffect(() => {
        if(user && token) {
            // send to back
            curruntUser(token)
            .then((res) => setOK(true))
            .catch((err) => setOK(false))
        }
    },[])

    return ok ? element: <LoadingToRedirect />
}

export default ProtectRouteUser

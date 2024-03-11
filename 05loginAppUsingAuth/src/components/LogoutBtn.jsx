import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const LogoutBtn = () => {
    const { logout } = useAuth0()

    return (
        <>
            <button
                onClick={() => logout()}
                className="border bg-white rounded px-3 py-2 text-sky-950">
                Log out
            </button>
        </>
    )


}

export default LogoutBtn
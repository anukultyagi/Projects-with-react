import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const LoginBtn = () => {
    const { isAuthenticated, user, loginWithRedirect } = useAuth0()

    if (isAuthenticated) {
        return (
            <>
                <div>Welcome {user.name}</div>

            </>
        )
    } else {
        return (
            <>
                <button onClick={loginWithRedirect} className="border bg-white rounded px-3 py-2 text-sky-950">Login</button>

            </>
        )
    }


}

export default LoginBtn
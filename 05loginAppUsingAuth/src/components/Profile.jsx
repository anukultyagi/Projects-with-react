import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Profile = () => {

    const { user } = useAuth0()
    return (
        <>
            <div>Welcome {user.name}</div>
            {JSON.stringify(user)}
        </>
    )
}

export default Profile
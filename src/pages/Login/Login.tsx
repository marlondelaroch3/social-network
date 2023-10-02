import React from 'react'
import Button from '../../components/atoms/Button/Button'
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
    const { loginWithRedirect } = useAuth0()
    
    return (
        <div>
            <Button handleClick={() => loginWithRedirect()}>
                Login o register
            </Button>
        </div>
    )
}

export default Login

import React from 'react'
import Button from '../../components/atoms/Button/Button'
import { useAuth0 } from '@auth0/auth0-react';

import styles from './Login.module.css'

const Login = () => {
    const { loginWithRedirect } = useAuth0()

    return (
        <div className={styles.loginContainer}>
            <Button handleClick={() => loginWithRedirect()}>
                Login o register
            </Button>
        </div>
    )
}

export default Login

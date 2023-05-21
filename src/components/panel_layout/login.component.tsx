'use client'

import {useRouter} from 'next/navigation'
import {useRef} from 'react'
import toast from 'react-hot-toast'
import {login} from '../../lib/api'

const Login = () => {
    const router = useRouter()
    const loginRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const loginData = loginRef.current?.value
        const passwordData = passwordRef.current?.value

        if (!loginData || !passwordData || loginData === '' || passwordData === '')
            return toast.error('Please fill all fields')

        const res = await login({login: loginData, password: passwordData})

        if (res.error)
            return toast.error(res.message)
        await router.push('/dashboard')
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                Login: <input type="text" name="login" required ref={loginRef}/> <br/>
                Password: <input type="password" name="password" required ref={passwordRef}/> <br/>
                <input type="submit" value="Login"/>
            </form>
        </>
    )
}

export default Login
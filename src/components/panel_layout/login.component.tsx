'use client'

import {login} from '../../lib/api'
import {useRouter} from 'next/navigation'
import {useState} from 'react'
import toast from 'react-hot-toast'

const initialState = {login: '', password: ''}

const Login = () => {
    const router = useRouter()
    const [formState, setFormState] = useState(initialState)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (formState.login === '' || formState.password === '')
            return toast.error('Please fill all fields')

        const res = await login(formState)

        if (res.error)
            return toast.error(res.message)

        setFormState(initialState)
        await router.push('/panel/dashboard')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                Login: <input type="text" name="login" required
                              onChange={(e) => setFormState((s) => ({...s, login: e.target.value}))}/> <br/>
                Password: <input type="password" name="password" required
                                 onChange={(e) => setFormState((s) => ({...s, password: e.target.value}))}/> <br/>
                <input type="submit" value="Login"/>
            </form>
        </div>
    )
}

export default Login
'use client'

import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Page() {
    const [error, setError] = useState('')
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const email = formData.get('email')
        const password = formData.get('password')

        if (email && password) {
            const response = await signIn('credentials', {
                redirect: false,
                email: email.toString(),
                password: password.toString()
            })

            if (response?.error) {
                const {error} = response
                
                setError(error)
            } else {
                router.push('/')
            }
        }
        
    }
    
    return (
        <main>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <label htmlFor="email">Correo electrónico</label>
                <input type="email" name="email" id="email"/>
                <label htmlFor="password">Contraseña</label>
                <input type="password" name="password" id="password" />
                {error && <span className="font-light text-red-500">{error}</span>}
                <button type="submit">Iniciar sesión</button>
            </form>
        </main>
    )
}
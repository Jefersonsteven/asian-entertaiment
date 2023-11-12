'use client'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useEffect } from 'react'
import Button from './Button'

export default function ButtonLogin() {
    const {data: session, status} = useSession()
    
    useEffect(() => {
        console.log(session, status)
        if (session) {
            //
        }
    }, [session, status])
    
    return (
        <>
            {session ? (
                <Button type="btn-primary" text="Cerrar sesión" callback={() => signOut()}/>
            ) : (
                <div className='flex gap-4'>
                    <Button type="btn-secondary" text="Iniciar sesión con Google" callback={() => signIn('google')} icon='google'/>
                    <Button type="btn-primary" text="Iniciar sesión" callback={() => signIn()}/>
                </div>
            )}
        </>
    )
}
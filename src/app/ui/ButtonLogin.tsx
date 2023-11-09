'use client'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useEffect } from 'react'

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
                <button
                    onClick={() => signOut()} 
                    className='btn btn-primary'
                >
                    Cerrar sesión
                </button>
            ) : (
                <div className='flex gap-4'>
                    <button
                        onClick={() => signIn('google')} 
                        className='btn btn-primary'
                    >
                        Iniciar sesión con Google
                    </button>
                    <button
                        onClick={() => signIn()} 
                        className='btn btn-primary'
                    >
                        Iniciar sesión
                    </button>
                </div>
            )}
        </>
    )
}
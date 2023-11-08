'use client'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useEffect } from 'react'

export default function ButtonLogin() {
    const {data: session, status} = useSession()

    function handleClick() {
        signIn()
    }

    function handleClick2() {
        signOut()
    }
    
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
                    onClick={handleClick2} 
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                >
                    Cerrar sesión
                </button>
            ) : (
                <button
                    onClick={handleClick} 
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                >
                    Iniciar sesión
                </button>
            )}
        </>
    )
}
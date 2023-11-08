'use client'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useEffect } from 'react'

export default function ButtonLogin() {
    const {data: session, status} = useSession()

    function handleClick() {
        signIn()
    }

    function handleClickGoogle() {
        signIn('google')
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
                <div className='flex gap-4'>
                    <button
                        onClick={handleClickGoogle} 
                        className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
                    >
                        Iniciar sesión con Google
                    </button>
                    <button
                        onClick={handleClick} 
                        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                    >
                        Iniciar sesión
                    </button>
                </div>
            )}
        </>
    )
}
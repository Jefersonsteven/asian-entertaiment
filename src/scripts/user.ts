import { prisma } from "@/app/lib/prisma"
import encryptPassword from "./encryptPassword"
import { UserUpdate } from "@/app/lib/types/user"

export async function createUser(email: string, password: string) {

    try {
        const user = await prisma.user.create({
            data: {
                email,
                password: await encryptPassword(password),
            },
        })
        return user
    } catch (error) {
        return error
    }
}

export async function getUser(email: string) {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email,
            },
        })
        
        return user
    } catch (error) {
        return error
    }
}

export async function getUserComplete(id: string) {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id,
            },
            include: {
                lists: {
                    include: {
                        items: true,
                    },
                },
                favorites: true,
            }
        })
        
        if(!user) throw new Error("User not found")
    
        return user
    } catch (error) {
        return error
    }
}

export async function deleteUser(email: string) {
    try {
        const user = await prisma.user.delete({
            where: {
                email,
            },
        })
        return user
    } catch (error) {
        return error
    }
}

export async function updateUser(email: string, data: UserUpdate) {
    try {
        const user = await prisma.user.update({
            where: {
                email,
            },
            data,
        })
        return user
    } catch (error) {
        return error
    }
}
import { prisma } from "@/app/lib/prisma"

export async function createList(name: string, userId: string) {
    try {
        const list = await prisma.list.create({
            data: {
                name,
                userId,
            },
        })
        return list
    } catch (error) {
        throw error
    }
}

export async function getList(id: string) {
    try {
        const list = await prisma.list.findUnique({
            where: {
                id,
            },
            include: {
                items: true,
            }
        })
        
        return list
    } catch (error) {
        throw error
    }
}

export async function deleteList(id: string) {
    try {
        const list = await prisma.list.delete({
            where: {
                id,
            },
        })
        return list
    } catch (error) {
        throw error
    }}
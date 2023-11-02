import { prisma } from "@/app/lib/prisma";

export async function createList(name: string, userId: string) {
    const list = await prisma.list.create({
        data: {
            name,
            userId,
        },
    })
    return list;
}

export async function getList(id: string) {
    const list = await prisma.list.findUnique({
        where: {
            id,
        },
    })
    
    return list;
}

export async function deleteList(id: string) {
    const list = await prisma.list.delete({
        where: {
            id,
        },
    })
    return list;
}
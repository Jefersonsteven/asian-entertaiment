import { prisma } from "@/app/lib/prisma"


export async function creatItemList(listId: string, contentId: string, name: string, image: string) {
    
    try {
        const isCreated = await prisma.listItem.findFirst({
            where: {
                contentId
            }
        })

        if (isCreated) {
            return "Favorite already created"
        }

        const listItem = await prisma.listItem.create({
            data: {
                listId,
                contentId,
                name,
                image
            }
        })
        return listItem
    } catch (error) {
        return error
    }
} 

export async function deleteItemList(id: string) {
    try {
        const listItem = await prisma.listItem.delete({
            where: {
                id
            }
        })
        return listItem
    } catch (error) {
        return error
    }
}
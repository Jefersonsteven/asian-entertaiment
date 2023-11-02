import { prisma } from "@/app/lib/prisma";


export async function creatItemList(listId: string, contentId: string, name: string, image: string) {
    
    try {
        const listItem = await prisma.listItem.create({
            data: {
                listId,
                contentId,
                name,
                image
            }
        })
        return listItem;
    } catch (error) {
        return error;
    }
}   
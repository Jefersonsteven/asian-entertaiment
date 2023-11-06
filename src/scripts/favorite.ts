import {prisma} from "@/app/lib/prisma"

export async function createFavorite(
    userId: string, 
    contentId: string, 
    name: string, 
    image: string
) {
    try {
        const isCreated = await prisma.favorite.findFirst({
            where: {
                contentId
            }
        })

        if (isCreated) {
            return "Favorite already created"
        }
        
        const favorite = await prisma.favorite.create({
            data: {
                userId,
                contentId,
                name,
                image
            }
        })
        return favorite
    } catch (error) {
        return error
    }
}

export async function deleteFavorite(id: string) {
    try {
        const favorite = await prisma.favorite.delete({
            where: {
                id
            }
        })
        return favorite
    } catch (error) {   
        return error
    }
}
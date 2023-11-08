import { prisma } from "@/app/lib/prisma"

export async function createLinks(contentId: string) {
    try {
        const links = await prisma.links.create({
            data: {
                contentId,
            },
        })
        return links
    } catch (error) {
        throw error
    }
}

export async function getLinks(contentId: string) {
    try {
        const links = await prisma.links.findUnique({
            where: {
                contentId,
            },
            include: {
                urls: true,
            }
        })
        
        return links
    } catch (error) {
        throw error
    }
}

export async function deleteLinks(id: string) {
    try {
        const link = await prisma.links.delete({
            where: {
                id,
            },
        })
        
        return link
    } catch (error) {
        throw error
    }
}
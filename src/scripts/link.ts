import { prisma } from "@/app/lib/prisma"
import { StreamingProvider } from "@/app/lib/types/streaming"

export async function createLink(linksId: string, streamingProvider: StreamingProvider, url: string) {
    try {
        const link = await prisma.link.create({
            data: {
                linksId,
                streamingProvider,
                url
            },
        })
        return link
    } catch (error) {
        return error
    }
}

export async function deleteLink(id: string) {
    try {
        const link = await prisma.link.delete({
            where: {
                id,
            },
        })
        return link
    } catch (error) {
        return error
    }
}
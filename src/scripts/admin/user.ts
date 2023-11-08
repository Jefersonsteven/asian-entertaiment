export async function getUsers() {
    try {
        const users = await prisma?.user.findMany()
        return users
    } catch (error) {
        throw error
    }
}
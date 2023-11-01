import { prisma } from "@/app/lib/prisma";
import encryptPassword from "./encryptPassword";

export async function createUser(email: string, password: string) {

    const user = await prisma.user.create({
        data: {
            email,
            password: await encryptPassword(password),
        },
    })
    return user;
}

export async function getUser(email: string) {
    const user = await prisma.user.findUnique({
        where: {
            email,
        },
    })
    return user;
}

export async function deleteUser(email: string) {
    const user = await prisma.user.delete({
        where: {
            email,
        },
    })
    return user;
}
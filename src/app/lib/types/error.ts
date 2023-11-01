export interface ErrorPrisma  {
    name: string,
    code: string,
    clientVersion: string,
    meta: {
        target: string[],
    }
}
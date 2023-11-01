import bcrypt from 'bcryptjs';

export default function encryptPassword(password: string) {
    const passwordHash = bcrypt.hash(password, 10);
    
    return passwordHash;
}
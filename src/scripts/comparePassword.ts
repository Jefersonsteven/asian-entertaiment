import bcrypt from 'bcryptjs';

export default function comparePassword(password: string, passwordHash: string) {
    const isPasswordValid = bcrypt.compare(password, passwordHash);

    return isPasswordValid;
}
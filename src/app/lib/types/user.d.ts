export interface User {
    data:    Data;
    message: string;
}

export interface Data {
    id:        string;
    email:     string;
    name:      string;
    lastName:  string;
    password:  string;
    photo:     null;
    verified:  boolean;
    createdAt: Date;
    updatedAt: Date;
    admin:     boolean;
    type:      string;
}


export interface UserUpdate {
    name?: string
    lastName?: string
    photo?: string
}
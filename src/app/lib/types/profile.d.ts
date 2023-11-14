export interface Profile {
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
    lists:     List[];
    favorites: Favorite[];
}

export interface Favorite {
    id:        string;
    userId?:   string;
    contentId: string;
    name:      string;
    image:     string;
    createdAt: Date;
    updatedAt: Date;
    listId?:   string;
}

export interface List {
    id:        string;
    name:      string;
    userId:    string;
    createdAt: Date;
    updatedAt: Date;
    items:     Favorite[];
}

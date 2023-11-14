export interface Person {
    content:   Content;
    catalogue: Catalogue;
    external:  External;
}

export interface Catalogue {
    cast: Cast[];
    crew: any[];
    id:   number;
}

export interface Cast {
    adult:             boolean;
    backdrop_path:     null | string;
    genre_ids:         number[];
    id:                number;
    original_language: string;
    original_title?:   string;
    overview:          string;
    popularity:        number;
    poster_path:       null | string;
    release_date?:     Date;
    title?:            string;
    video?:            boolean;
    vote_average:      number;
    vote_count:        number;
    character:         string;
    credit_id:         string;
    order?:            number;
    media_type:        MediaType;
}

export enum MediaType {
    Movie = "movie",
    Tv = "tv",
}

export enum OriginalLanguage {
    Ko = "ko",
}

export interface Content {
    adult:                boolean;
    also_known_as:        string[];
    biography:            string;
    birthday:             Date;
    deathday:             null;
    gender:               number;
    homepage:             null;
    id:                   number;
    imdb_id:              string;
    known_for_department: string;
    name:                 string;
    place_of_birth:       string;
    popularity:           number;
    profile_path:         string;
}

export interface External {
    id:           number;
    freebase_mid: null;
    freebase_id:  null;
    imdb_id:      string;
    tvrage_id:    null;
    wikidata_id:  null;
    facebook_id:  null;
    instagram_id: string;
    tiktok_id:    null;
    twitter_id:   null;
    youtube_id:   null;
}

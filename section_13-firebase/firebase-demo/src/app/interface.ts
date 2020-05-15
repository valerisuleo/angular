export interface IMovie {
    title: string;
    liked: boolean;
    id: string
    genre: {
        name: string;
        id: string
    }
}
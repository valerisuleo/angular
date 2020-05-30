export interface ITab {
    name: string,
    viewMode: string
}

export interface ILesson {
    id: number,
    description: string,
    duration: string,
    seqNo: number,
    courseId: number
}


export interface ICourse {
    titles: {
        description: string,
        longDescription: string
    },
    iconUrl: string,
    lessonsCount: number,
    categories: string[],
    seqNo: number,
    url: string,
    id: string
}
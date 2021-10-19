
export enum CourseFrequency {
    DAILY = 'DAILY',
    WEEKLY = 'WEEKLY',
    FORNIGHTLY = 'FORNIGHTLY',
    MONTHLY = 'MONTHLY',
    YEARLY = 'YEARLY'
}

export interface CourseRun {
    date: string;
    cost: number;
    address: string;
}

export interface CourseRegisteration {
    userEmail: string;
    courseName: string;
    kidName: string;
    courses: CourseRun[]
    frequency: CourseFrequency;
};
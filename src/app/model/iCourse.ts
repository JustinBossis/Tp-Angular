export interface ICourse {
    courseId: number;
    courseName: string;
    courseCode: string;
    releaseDate: string;
    weight: number;
    description: string;
    content: string[];
    starRating: number;
    imageUrl: string;

    displayCourse(): string;
}
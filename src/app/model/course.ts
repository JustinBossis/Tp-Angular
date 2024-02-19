import { ICourse } from "./iCourse";

export class Course implements ICourse{
    courseId: number;
    courseName: string;
    courseCode: string;
    releaseDate: string;
    weight: number;
    description: string;
    content: string[];
    starRating: number;
    imageUrl: string;
    studentList: string[];

    constructor(data: any){
        this.courseId = data.courseId;
        this.courseName = data.courseName;
        this.courseCode = data.courseCode;
        this.releaseDate = data.releaseDate;
        this.weight = data.weight;
        this.description = data.description;
        this.content = data.content;
        this.starRating = data.starRating;
        this.imageUrl = data.imageUrl;
        this.studentList = [];
    }

    displayCourse(): string {
        return `${this.courseName} : code ${this.courseCode}`
    }
    
}
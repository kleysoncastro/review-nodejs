interface Curse {
    name: string;
    duration: number;
    educator: string;
}


class CreateCourseService {

    execute({duration, educator, name}:Curse) {
        console.log(name, duration, educator);
    }
}


export default new CreateCourseService();
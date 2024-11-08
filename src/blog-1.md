Union : Union type is used when we need to match with one type from a list of types. Lets say we have a website for a school. In the website  we have a diffetent kinds of user like: Teacher,student, worker. Now in out website user should be any one type.

ex:

interface Teacher {
    name: string;
    age: number;
    course: string;
}
interface Student {
    name: string;
    age: number;
    class: string;
}
interface Worker {
    name: string;
    age: number;
    department: string;
}
type user = Teacher | Student | Worker;


Intersection : Intersection  type is used when we need combibine properties from multiple types. Lets say we have two types Studentand Results we need both then we will use  Intersection.

interface Student {
    name: string;
    age: number;
    class: string;
}
interface results {
    course: string;
    gotNumber: number;
}

type studentDetails = Student & results;
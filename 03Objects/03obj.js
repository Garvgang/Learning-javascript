const course={
    coursename:"js in hindi",
    price:'$999',
    courseInstructor:"garv"
}

// console.log(Object.values(course))
// console.log(Object.keys(course))
// console.log(course.hasOwnProperty('price'))

const {courseInstructor}=course //extracted courseInstructor value 
// so don't have to write the whole course.courseInstructor
console.log(courseInstructor)
// 
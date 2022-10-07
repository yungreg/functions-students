// this is a good project to learn the debugger with. step through this one a few times and understand the flow of information. 1:05pm aug 25th 2022

const createStudent = (nameValue, gradeValue) => {
    const newStudentObject = {}
    //idk how to pass an object into this function as an argument, and kinda coudln't figure it out w/ stack overflow. might be missing the right search terms. 8/25/22 9:56am
    newStudentObject.name = nameValue
    newStudentObject.grade = gradeValue
    return newStudentObject
}

// these are all different functions. declare them each
const addMathGrade = (newStudentObject) => {
    newStudentObject.math = 'B'
    return newStudentObject
}


const reggieStudentReportCard = createStudent('Reggie', 9)
// const valStudentReportCard = createStudent('Val', 11)
// console.log(studentReportCard)

// addMathGrade(valStudentReportCard)


const addHistoryGrade = (studentObject) => {
    studentObject.history = 'C'
    return studentObject
}

const addScienceGrade = (studentObject) => {
    studentObject.science = 'A'
    return studentObject
}

addMathGrade(reggieStudentReportCard)
addHistoryGrade(reggieStudentReportCard)
addScienceGrade(reggieStudentReportCard)
console.log(reggieStudentReportCard)

// current problem, I undrstand that a function can be stored in a variable which will contain a value of the object contained inside that function. 
// I also know that variable can be passed to another function as an argument. I"m having trouble getting a whole property into a variable. once you figure it out for the math grade, you can just repeat that process. 

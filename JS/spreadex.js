const students={
    departments:"xyz",
    branch:"CS",
    section:"A"
}

const newStudent ={...students};
console.log(students);

newStudent.name ="ABC";
console.log(newStudent);

const newStudent = {id:101,...students};
newStudent.name ="AC";
console.log(newStudent);

const newStudent = {id:102,...students,section:"B"};
newStudent.name ="BC";
console.log(newStudent);

const emp=["ABC",56,100023.50];
console.log(emp);

const emp1=[101,...emp];
console.log(emp);



let StudentRecordClass10=[]
//It is a set key for passing object
let studentDataKey =prompt("Enter Data Saving Key"); 
 
//Object tw for user input
let studentObjectTwo = { 
	studentName:prompt("Enter Student Name"),
	fatherName:prompt("Enter Student Father Name"),
	className:prompt("Enter Student Class  Name"),
	rollNo:prompt("Enter Student Roll No"),
	classTeacher:prompt("Enter Student Class Teacher Name"),
}

//Object Data Storing Function
function recordStudentData(getKey, getObject) {
 
 StudentRecordClass10.push(getObject); 
 const jsonStudentStringify = JSON.stringify(getObject);
 localStorage.setItem(getKey, JSON.stringify(getObject));
}

console.log(recordStudentData(studentDataKey,studentObjectOne));
console.log(StudentRecordClass10);
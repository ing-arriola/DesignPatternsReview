const students={
    listOfStudents : [],

    get : function(id) {
        console.log(this.listOfStudents[id])
    },
    create : function(data) {
        console.log(data)
        this.listOfStudents.push(data)
    },
    list : function () {
        return this.listOfStudents
    }
}

const student1={
    name:'John',
    age:20
}

const student2={
    name:'Peter',
    age:23
}

students.create(student1)

students.create(student2)

console.log(students.list())

students.get(1)
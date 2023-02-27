class Student { 
    constructor(name, urname, yearOfBirth, mark) { 
        this.name = name 
        this.urname = urname 
        this.yearOfBirth = yearOfBirth 
        this.mark = mark 
    } 
    ageStudent() { 
        return new Date().getFullYear() - this.yearOfBirth 
    } 
    GPA() { 
        return this.mark.reduce((el, ac) => el + ac, 0) / this.mark.length 
    } 
} 
class Visiting extends Student { 
    constructor(name, urname, yearOfBirth, mark, attendance) { 
        super(name, urname, yearOfBirth, mark) 
        this.attendance = [] 
    } 
    present() { 
        if (this.attendance.length < 25) { 
            this.attendance.push(true) 
        } 
    } 
    absent() { 
        if (this.attendance.length < 25) { 
            this.attendance.push(false) 
        } 
    } 
    summary() { 
        const averageNumb = +(this.attendance.reduce((el, attendance) => attendance ? el + 1 : el, 0) / this.attendance.length).toFixed(2); 
        if (this.GPA() > 90 && averageNumb > 0.9) { 
            return "Молодець!" 
        } else if (this.GPA() > 90 || averageNumb > 0.9) { 
            return `Добре, але можна краще ` 
        } else { 
            return "Редиска!" 
        } 
    } 
} 
 
 
const student1 = new Visiting(`Jim`, `Kery`, 1990, [80, 99, 100, 54, 100, 28, 86, 90, 95, 97, 98, 99, 100], []) 
 
console.log(`student1`) 
student1.absent() 
student1.absent() 
student1.absent() 
student1.absent() 
student1.absent() 
student1.absent() 
student1.absent() 
student1.absent() 
student1.absent() 
student1.absent() 
student1.absent() 
student1.absent() 
student1.absent() 
student1.absent() 
student1.absent() 
student1.absent() 
student1.absent() 
student1.absent() 
student1.absent() 
student1.absent() 
student1.absent() 
student1.absent() 
student1.absent() 
student1.absent() 
student1.absent() 
 
 
 
console.log(`середній бал: ${student1.GPA()}`) 
console.log(` вік: ${student1.ageStudent()}`) 
console.log(student1.attendance) 
console.log(student1.summary()) 
const student2 = new Visiting('Alex', 'Short', 2000, [100, 100, 100, 100, 100, 100, 76, 90, 100, 100, 100, 100, 100, 100, 100], []); 
 
console.log(`student2`) 
 
student2.present() 
student2.present() 
student2.present() 
student2.present() 
student2.present() 
student2.present() 
student2.present() 
student2.present() 
student2.present() 
student2.present() 
student2.present() 
student2.present() 
student2.present() 
student2.present() 
student2.present() 
student2.present() 
student2.present() 
student2.present() 
student2.present() 
student2.present() 
student2.present() 
student2.present() 
student2.present() 
student2.present() 
student2.present() 
 

console.log(`середній бал: ${student2.GPA()}`) 
console.log(` вік: ${student2.ageStudent()}`) 
console.log(student2.attendance) 
console.log(student2.summary())
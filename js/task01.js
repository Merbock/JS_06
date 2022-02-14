'use strict';

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

const filter = (allStudents, failedStudents) => {

    const passStudents = allStudents.filter(item => !failedStudents.includes(item));

    return console.log(passStudents);
}

filter(allStudents, failedStudents);

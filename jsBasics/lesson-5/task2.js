const avrgGrade = 60;

switch (true){
    case avrgGrade < 60:
        console.log(`${avrgGrade} - Незадовільно`)
        break;
    case avrgGrade >= 60 && avrgGrade <= 70:
        console.log(`${avrgGrade} - Задовільно`)
        break;
    case avrgGrade >= 71 && avrgGrade <= 80:
        console.log(`${avrgGrade} - Добре`);
        break;
    case avrgGrade >= 81 && avrgGrade <= 90:
        console.log(`${avrgGrade} - Дуже добре`);
        break;
    case avrgGrade >= 91 && avrgGrade <=100:
        console.log(`${avrgGrade} - Відмінно`)
        break;
}
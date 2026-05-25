const avrgGrade = 60;

if (avrgGrade < 60){
    console.log(`${avrgGrade} - Незадовільно`)
} else if (avrgGrade >= 60 && avrgGrade <= 70){
    console.log(`${avrgGrade} - Задовільно`)
} else if (avrgGrade >= 71 && avrgGrade <= 80){
    console.log(`${avrgGrade} - Добре`)
} else if (avrgGrade >= 81 && avrgGrade <= 90){
    console.log(`${avrgGrade} - Дуже добре`)
} else {
    console.log(`${avrgGrade} - Відмінно`)
}

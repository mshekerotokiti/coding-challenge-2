const massMark = 78;
const massJohn = 92;
const markHeight = 1.69;
const johnHeight = 1.95;
const BMIMark = 78 / 1.69**2;
const BMIJohn = 92 / 1.95**2;
console.log (BMIMark , BMIJohn);

const BMI = 20;
const BMIMarknew = BMI >= 28;
if (BMIMarknew){
    console.log(`Mark's BMI is higher than John's`) //will execute code if the expression is true
} else {console.log(`John's BMI is higher than Mark's`)}; //will execute code if the expression is false
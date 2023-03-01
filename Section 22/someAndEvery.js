//EVERY:
const exams = [80, 29,49,59,78,24,83,86,93,98];

exams.every(score => score >= 75);

//this will return false: every score is evaluated its like a big AND in an array

//SOME will do this:
const exams2 = [80, 29,49,59,78,24,83,86,93,98];

exams.some(score => score >= 75);
//this will return true because there will be one (its like OR)
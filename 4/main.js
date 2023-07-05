

 function random(n, m, count) {
    let randomGroup = []
    for (i = 0; i < count; i++) {
        let diff = Math.abs(m-n)
        let number = Math.round(Math.random()*diff)
        let min = Math.min(m, n)
        let randomNumber = min + number
        randomGroup.push(randomNumber)
    }
    console.log(randomGroup)
 }

 random(10, 20, 10)

 //2

 function reverse (text) {
    let newText = text.split('')
    newText.reverse()
    let reversedText = newText.join("")
    console.log(reversedText)
 }

 reverse(' Здравствуйте, вы гном! ')

 

 //3


 let roadMines = [false, false, false, false, false, false, false, false, false, false]
 let tankDamage = 0;
 
 for (let i = 0; i < roadMines.length; i++) {

   if (roadMines[i] === false)
   console.log(`Танк переместился на ${i + 1}`);
 
   if (roadMines[i] === true) {
     if (tankDamage === 0) {
       console.log('Танк повреждён');
       console.log(`Танк переместился на ${i + 1}`);
       tankDamage++;
     } 
     else {
      console.log(`Танк переместился на ${i + 1}`);
      console.log('Танк уничтожен');
       break;
     }
   }
 }

 

 //4


const daysOfWeek = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];


const startDayIndex = 3;

const monthNumbers = [];
for (let i = 1; i <= 31; i++) {
  monthNumbers.push(i);
}

for (let number of monthNumbers) {
  const dayOfWeekIndex = (number + startDayIndex - 1) % 7;

  console.log(`${number} января, ${daysOfWeek[dayOfWeekIndex]}`);
}

 

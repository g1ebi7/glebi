// 1
function passwordChecking(password) {
    if (password.length >= 4 && (password.includes('-') || password.includes('_'))){
        console.log( 'Пароль ' + password + ' надежный')
    } else {
        console.log( 'Пароль ' + password + ' ненадежный')
    }
}

passwordChecking('MironGnom')

// 2

function normalizeName (userName, userSurname) { 
    let firstLetterName = userName.substring(0, 1);
    let lastLetterName = userName.substring(1);
    let veryNormalizedName = firstLetterName.toUpperCase() + lastLetterName.toLowerCase();
    let firstLetterSurname = userSurname.substring(0, 1);
    let lastLetterSurname = userSurname.substring(1);
    let veryNormalizedSurname = firstLetterSurname.toUpperCase() + lastLetterSurname.toLowerCase();
    console.log(veryNormalizedName + ' ' + veryNormalizedSurname);
    if (userName === veryNormalizedName && userSurname === veryNormalizedSurname) {
        console.log( 'Имя осталось без изменений')
    } else {
        console.log( 'Имя было преобразовано')
    }
}

normalizeName('gleb', 'elkin');




// 3
function evenOrNot (number) {
    console.log( number%2 === 0 ? 'Число четное': 'Число нечетное')
}


evenOrNot(9);
//1


function email (n, b) {
   return n.filter(check => !b.includes(check))
}


let n = ['gleb', 'egor', 'miron', 'kepi']
let b = ['gleb', 'egor']

let newEmail = email(n, b)

console.log(newEmail)


//2

function calculate (sum, amount, prom = null) {
  let finalAmount = sum
  let discount = 0

  if (prom === 'ДАРИМ300') {
    if (sum < 300) {
      finalAmount = 0
      
    } else {
      discount += 300
    }
  }
  if (amount >= 10) {
    discount += finalAmount * 0.05
  }
  if (sum > 50000) {
    discount += (finalAmount-50000)*0.2
  }
  if (sum >= 20000 && prom === 'СКИДКА15') { 
    discount += finalAmount * 0.15
  }
 return finalAmount-discount
}

let result = calculate (100000, 7, 'СКИДКА15')
console.log(result)












function findCardIndex(cards, wantedCard = "Монетки") {
  console.log('Ищем в колоде индекс карты ' + wantedCard);

  let found = false;

  for (let card of cards) {
      let index = cards.indexOf(card);
      console.log('Из колоды вытянута карта ' + card);
      if (card === wantedCard) {
        console.log('Мы нашли карту '  + wantedCard + "! " + 'Ее индекс равен ' + index)
          found = true
          break;
      }
    }
    if (found === false) {
    console.log('Карты закончились, к сожалению в колоде нет карты ' + wantedCard)
    }
}

let myCards = ['Дама', "Черви", "Туз", "Сердечки", "Монетки"]

findCardIndex(myCards)

   















































document.querySelector('.bobik').addEventListener('click', function() {
  document.querySelector('.bobik-img').classList.add('bobik-open')
  setTimeout(function() {
    document.querySelector('.bobik-close').classList.add('bobik-open')
  }, 3000)
  
})



document.querySelector('.bobik-close').addEventListener('click', function() {
  document.querySelector('.bobik-img').classList.remove('bobik-open')
})

document.querySelector('.bobik-close').addEventListener('click', function () {
  document.querySelector('.bobik-close').classList.remove('bobik-open')
})
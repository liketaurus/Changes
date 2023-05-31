//destiny number  

function calculateDestinyNumber(name, dateOfBirth) {
    // Заміна літер імені на числові значення
    const numericalValuesOfName = name
        .toLowerCase()
        .split('')
        .map(letter => letter.charCodeAt(0) - 1071); // 96 - значення 'а' в кодуванні Unicode для кирилиці

    // Обчислення числа долі для імені
    const nameNumber = numericalValuesOfName.reduce((sum, value) => sum + value, 0);

    // Розбиття дати народження на окремі компоненти
    const [day, month, year] = dateOfBirth.split('.');

    // Обчислення числа долі для дати народження
    const dateOfBirthNumber = parseInt(day) + parseInt(month) + parseInt(year);

    // Обчислення числа долі шляхом складання чисел
    let destinyNumber = dateOfBirthNumber;
    while (destinyNumber > 9) {
        destinyNumber = destinyNumber
            .toString()
            .split('')
            .reduce((sum, digit) => sum + parseInt(digit), 0);
    }

    // Повернення числа долі
    return nameNumber + destinyNumber;
}

// Приклад використання функції обчислення числа долі
//   const name = 'John';
//   const dateOfBirth = '22.02.1977';

//   const destinyNumber = calculateDestinyNumber(name, dateOfBirth);
//   console.log(destinyNumber);

//biorythms
function getBiorhythms(birthDate) { 
    const physical = Math.sin(2 * Math.PI * (new Date() - birthDate) / 23); 
    const emotional = Math.sin(2 * Math.PI * (new Date() - birthDate) / 28); 
    const intellectual = Math.sin(2 * Math.PI * (new Date() - birthDate) / 33); 
    return { physical, emotional, intellectual }; 
} 

// const biorhythms = getBiorhythms(new Date('1974-05-20')); console.log(biorhythms);
// 
// Шкала біоритмів зазвичай має діапазон від -100% до +100%. Значення від 0% до +100% вважаються позитивними, а значення від -100% до 0% - негативними. 
// Якщо значення біоритму перевищує 0%, то людина може відчувати підвищену активність та ефективність у відповідному аспекті життя. 
// Якщо значення біоритму менше 0%, то людина може відчувати зниження активності та ефективності у відповідному аспекті життя

//horoscope
function getZodiacSign(day, month) { 
    // var zodiacSigns = ["Козеріг", "Водолій", "Риби", "Овен", "Телець", "Близнюки", "Рак", "Лев", "Діва", "Терези", "Скорпіон", "Стрілець"];
    var zodiacSigns = ["capricorn", "aquarius", "pisces", "aries", "taurus", "gemini", "cancer", "leo", "virgo", "libra", "scorpio", "sagittarius"]; 
    var lastDayOfSign = [20, 19, 20, 20, 21, 21, 22, 23, 23, 23, 22, 21]; 
    return (day > lastDayOfSign[month - 1]) ? zodiacSigns[month] : zodiacSigns[month - 1]; 
}


//  приклад JavaScript-коду для отримання гороскопа зі сторінки сайту "https://telegraf.com.ua/lifestyle/goroskop
function getHoroscope(sign) {
    const url = `https://telegraf.com.ua/lifestyle/goroskop/sign/${sign}`;
    fetch(url)
      .then(response => response.text())
      .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const horoscope = doc.querySelector('div.s-content.s-content--static').textContent.trim();
        console.log(`Гороскоп для ${sign}: ${horoscope}`);
      })
      .catch(error => {
        console.log('Сталася помилка під час отримання гороскопу', error);
      });
  }
  
// Приклад використання функції для отримання гороскопа зі сторінки "https://telegraf.com.ua/lifestyle/goroskop/sign/aries"
//   getHoroscope('aries');
  




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
  const [year, month, day] = dateOfBirth.split('-');

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
  return (nameNumber + destinyNumber) % 9 + 1;
}

// Приклад використання функції обчислення числа долі
//   const name = 'John';
//   const dateOfBirth = '22.02.1977';

//   const destinyNumber = calculateDestinyNumber(name, dateOfBirth);
//   console.log(destinyNumber);

//biorythms
function getBiorhythms(birthDate) {
  const physical = Math.round(Math.sin(2 * Math.PI * (new Date() - birthDate) / (1000 * 60 * 60 * 24 * 23)) * 100);
  const emotional = Math.round(Math.sin(2 * Math.PI * (new Date() - birthDate) / (1000 * 60 * 60 * 24 * 28)) * 100);
  const intellectual = Math.round(Math.sin(2 * Math.PI * (new Date() - birthDate) / (1000 * 60 * 60 * 24 * 33)) * 100);
  return { physical, emotional, intellectual };
}

// const biorhythms = getBiorhythms(new Date('1974-05-20')); console.log(biorhythms);
// 
// Шкала біоритмів зазвичай має діапазон від -100% до +100%. Значення від 0% до +100% вважаються позитивними, а значення від -100% до 0% - негативними. 
// Якщо значення біоритму перевищує 0%, то людина може відчувати підвищену активність та ефективність у відповідному аспекті життя. 
// Якщо значення біоритму менше 0%, то людина може відчувати зниження активності та ефективності у відповідному аспекті життя

var zodiacSignsUA = ["Козеріг", "Водолій", "Риби", "Овен", "Телець", "Близнюки", "Рак", "Лев", "Діва", "Терези", "Скорпіон", "Стрілець"];
var zodiacSigns = ["capricorn", "aquarius", "pisces", "aries", "taurus", "gemini", "cancer", "leo", "virgo", "libra", "scorpio", "sagittarius"];

//horoscope
function getZodiacSign(day, month) { 
  var lastDayOfSign = [20, 19, 20, 20, 21, 21, 22, 23, 23, 23, 22, 21];
  return (day > lastDayOfSign[month - 1]) ? zodiacSigns[month] : zodiacSigns[month - 1];
}

// hosted on render.com
// https://render.com/docs/deploy-flask
// sample url is https://horoscopes.onrender.com/horoscope/taurus
async function getHoroscope(sign) {
  const url = `https://horoscopes.onrender.com/horoscope/${sign}`;
  const options = {
    method: 'GET',
  };

  try {
    const response = await fetch(url);
    const result = await response.text();
    console.log(result);
    const horo = JSON.parse(result);
    document.getElementById("horoscope").innerHTML = `Гороскоп на сьогодні, ${(new Date()).toLocaleDateString('uk-UA', { day: '2-digit', month: '2-digit', year: 'numeric' })}: ${horo.horoscope}`;
  } catch (error) {
    console.error(error);
  }
}

// Приклад використання функції для отримання гороскопа зі сторінки "https://telegraf.com.ua/lifestyle/goroskop/sign/aries"
//   getHoroscope('aries');





// Task 1

// Method 1

// const books = [
//     { title: 'Гаррі Поттер', author: 'Дж.К. Ролінг' },
//     { title: '1984', author: 'Джордж Орвелл' },
//     { title: 'Хоббіт', author: 'Дж.Р.Р. Толкієн' }
// ];

// const ourString = books.filter(item => item.author === 'Джордж Орвелл');
// console.log(ourString);

// Method 2  

const ourbooks = [
    { title: 'Гаррі Поттер', author: 'Дж.К. Ролінг' },
    { title: '1984', author: 'Джордж Орвелл' },
    { title: 'Хоббіт', author: 'Дж.Р.Р. Толкієн' }
];

ourbooks.some((find, index) => {
    console.log(find);
    console.log(index);
    return find.author === 'Джордж Орвелл';
})

// Task 2   

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pairedNumbers = numbers.filter((num) => {
    return num % 2 === 0;
});
console.log(pairedNumbers);

// Task 3  

const prices = [100, 200, 300, 400, 500];
let percent = 10
let newNumbers = prices.map((x) => x + (x * percent) / 100);

console.log(newNumbers);

// Task 4  

const arrNumbers = [45, 80, 32, 100, 105];
arrNumbers.some((moreThan) => {
    console.log(moreThan);
    return moreThan > 100;
});

// Task 5  

const nums = [1, 2, 3, 4, 5, -6, 7];
const exam = nums.every(item => item > 0);
console.log(exam);

// Task 6  

const sentences = ["Я люблю JavaScript", "Масиви це весело", "Програмування це круто"];

const newSentences = sentences.map((sentence) => {
    const words = sentence.split(" ");
    return words[0];
});

console.log(newSentences);  
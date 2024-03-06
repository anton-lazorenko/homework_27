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
    console.log(find)
    console.log(index)
    return find.author === 'Джордж Орвелл'
})

// Task 2   

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
const pairedNumbers = numbers.filter((num) => {
    return num % 2 === 0
});
console.log(pairedNumbers);
 


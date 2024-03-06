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

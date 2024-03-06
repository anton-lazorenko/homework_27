const books = [
    { title: 'Гаррі Поттер', author: 'Дж.К. Ролінг' },
    { title: '1984', author: 'Джордж Орвелл' },
    { title: 'Хоббіт', author: 'Дж.Р.Р. Толкієн' }
   ];
   
   const ourString = books.filter(item => item.author === 'Джордж Орвелл');
   console.log(ourString);
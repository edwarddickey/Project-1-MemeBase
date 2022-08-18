let books = [
    {
        "title":"flat iron 101",
        "Author":"Stephen",
        'alreadyRead':false 
    }
];

for( let i = 0;i<books.length;i++){
let book = books[i];
let bookInfo = book.title + "by "+book.Author;
if(book.alreadyRead){
    console.log('you already read ' +bookInfo);
}else{
    console.log('you still need to read ' +bookInfo);
}
} 
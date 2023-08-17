const app = Vue.createApp({
    data(){
        return{
            url: "http://youtube.com",
            showBooks: true,
            books: [
                {title: "Name of the wind", author: "Dima Nevydaylo", img: "assets/12.jpeg", isFav: true},
                {title: "Tes of tests ", author: "Bla bla bla",img: "assets/Download (1).jpeg", isFav: false},
                {title: "Gaming book", author: "David Spancer",img: "assets/Download.jpeg", isFav: true}
            ]
        }
    },
    methods: {
        toogleShowBooks(){
            this.showBooks = !this.showBooks
        },
        toggleFav(book){
            book.isFav = !book.isFav
        }
    }
})

app.mount("#app")
import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "You Can WIN",
    author: "Shiv Khera",
    price: "5000",
    image:"https://i.postimg.cc/wjWCqRFd/you-can-win.jpg",
    // image:"https://rukminim1.flixcart.com/image/612/612/kufuikw0/book/x/s/w/atomic-habits-original-imag7kbzg2fu8rjv.jpeg?q=70",
    categoryName: "non-fiction",
    rating:2.5,
    discount:15
  },
  {
    _id: uuid(),
    title: "The Shining",
    author: "Stephen King",
    price: "1200",
    image:"https://i.postimg.cc/zBmqpyyK/the-shining.jpg",
    categoryName: "horror",
    rating:3.5,
    discount:10
    },
    {
    _id: uuid(),
    title: "The Exorcist",
    author: "William Peter Blatty",
    price: "1100",
    image:"https://i.postimg.cc/TYkTLdXj/the-exorcist.jpg",
    categoryName: "horror",
    rating:3.5,
    discount:15
    },
    {
    _id: uuid(),
    title: "Dracula",
    author: "Bram Stoker",
    price: "1000",
    image:"https://i.postimg.cc/qvRyyv6p/dracula-image.jpg",
    categoryName: "horror",
    rating:2.5,
    discount:15
    },
    {
    _id: uuid(),
    title: "The Haunting of Hill House",
    author: "Shirley Jackson",
    price: "1300",
    image:"https://i.postimg.cc/JzL4C6mv/haunting-of-the-hill-house.jpg",
    categoryName: "horror",
    rating:3.5,
    discount:15
    },
    {
      _id: uuid(),
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      price: "900",
      image:"https://i.postimg.cc/gjxrrnB7/to-kill-a-mocking-bird.jpg",
      categoryName: "fiction",
      rating:4.5,
      discount:20
      },
      {
      _id: uuid(),
      title: "1984",
      author: "George Orwell",
      price: "1000",
      image:"https://i.postimg.cc/MTFVskCh/1984.jpg",
      categoryName: "fiction",
      rating:5.0,
      discount:15
      },
      {
      _id: uuid(),
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      price: "800",
      image:"https://i.postimg.cc/FKg7dtFj/the-catcher-in-the-rye.jpg",
      categoryName: "fiction",
      rating:5.0,
      discount:10
      },
      {
      _id: uuid(),
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      price: "1200",
      image:"https://i.postimg.cc/QxD3nBjJ/the-great-gatsby.jpg",
      categoryName: "fiction",
      rating:3.5,
      discount:20
      },
     {
    _id: uuid(),
    title: "Atomic Habits",
    author: "James Clear",
    price: "1500",
    image:"https://rukminim1.flixcart.com/image/612/612/kufuikw0/book/x/s/w/atomic-habits-original-imag7kbzg2fu8rjv.jpeg?q=70",
    categoryName: "non-fiction",
    rating:4.0,
    discount:10
    },
    {
    _id: uuid(),
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    price: "2000",
    image:"https://i.postimg.cc/FKpGbHhp/sapiens.jpg",
    categoryName: "non-fiction",
    rating:4.0,
    discount:15
    },
    {
    _id: uuid(),
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen Covey",
    price: "1800",
    image:"https://i.postimg.cc/FFCPYzKV/7-habits.jpg",
    categoryName: "non-fiction",
    rating:4.5,
    discount:15
    }
];

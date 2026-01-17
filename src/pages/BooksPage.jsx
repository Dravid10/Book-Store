import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import axios from "axios";

export default function BooksPage() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/books')
            .then(res => setBooks(res.data))
            .catch(err => console.error('Error fetching books:', err));
    }, []);

    return (
        <>
            <div className="mt-5">
                <h3 className="text-center">Our Collections</h3>

                <div className="container">
                    <div className="row">
                        {
                            books.map((book) => {
                                return (
                                    <div className="col" key={book.id}>
                                        <img src={book.imgUrl} alt={book.bookName} width="200px" />
                                        <h3>{book.bookName}</h3>
                                        <p>{book.author}</p>
                                        <h4>₹{book.price}</h4>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}
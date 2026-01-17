import axios from "axios"
import { useEffect, useState } from "react"

export default function NewArrivals() {
    const [books, setBooks] = useState([])

    // same simple axios call you already had in your project
    useEffect(() => {
        axios.get('http://localhost:5000/books')
            .then(res => setBooks(res.data))
    }, [])

    return (
        <>
            <h2 className="text-center mt-4">New Arrivals</h2>
            <div className="container mt-3">
                <div className="row">
                    {
                        books
                            .filter((book) => book.offer === "new")
                            .map((book) => {
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
        </>
    )
}
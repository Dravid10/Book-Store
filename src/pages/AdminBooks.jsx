import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export default function AdminBooks() {

    const [books, setBooks] = useState([])
    const [author, setAuthor] = useState("")

     const myNavigate = useNavigate();     
    
    useEffect(()=>{
        const user = JSON.parse(sessionStorage.getItem("loggedUser"));

        if (!user)
            myNavigate("/login")
        else if (user.role !== "admin") {
            myNavigate("/")
        }
    
    }, [])

    useEffect(()=>{
        axios.get('http://localhost:5000/books')
        .then(res => setBooks(res.data))

    },[])

    function searchByAuthor(){
      const filteredBooks = books.filter((book) => book.author === author)
        console.log(filteredBooks);
        setBooks(filteredBooks)
    }

    function sortByAuthor(author){
        const filteredBooks = books.filter((book) => book.author === author)
        console.log(filteredBooks);
        setBooks(filteredBooks)
    }

    function deleteBook(id){
        // delete from json‑server (backend)
        axios.delete(`http://localhost:5000/books/${id}`)
        .then(() => {
            // also remove from the local state
            const filteredBooks = books.filter((book) => book.id !== id)
            setBooks(filteredBooks)
        })
    }

    return (
        <>
            <div className="container-fluid vh-100 p-0">
                <h3 className="text-center bg-dark p-2 m-0 text-white">Admin Dashboard</h3>
                <div className="row ">
                    <div className="col-2 vh-100 bg-secondary">
                        <ul className="nav flex-column pt-5">
                            <li className="nav-item ">
                                <Link to="/admin-dashboard" className="nav-link text-white">Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/admin-books" className="nav-link text-white">Books</Link>
                            </li>    
                             <li className="nav-item">
                                <Link to="/admin-users" className="nav-link text-white">Users</Link>
                            </li>                            
                        </ul>
                    </div>
                    <div className="col-10">
                        <div className="d-flex justify-content-between">
                            <h3 className="mt-5">All Books</h3>
                            <div className="filter mt-5">
                                {/* <button onClick={()=>sortByAuthor('kalki') }>Kalki</button>
                                <button onClick={()=>sortByAuthor('JK Rowling') }>Rowling</button> */}
                                <div className="search-by-author">
                                    <input type="text" name="" onChange={(e)=> setAuthor(e.target.value)} placeholder="Author" className="form-control" />
                                    <button onClick={searchByAuthor}>Search</button>
                                </div>
                            </div>
                        </div>
                        
                        <table className="table mt-5">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Book Name</th>
                                    <th>Image</th>
                                    <th>Price</th>
                                    <th>Stock</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    books.map((book)=>{
                                        return <tr key={book.id}>
                                            <td>{book.id}</td>
                                            <td>{book.bookName}</td>
                                            <td>{book.author}</td>
                                            {/* <td><img src={book.imgUrl} width="150px"/></td> */}
                                            <td>{book.price}</td>
                                            <td>{book.stock}</td>    
                                            <td><button onClick={()=> deleteBook(book.id)}>Delete</button></td>                                        
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                        <Link to="/add-book" className="btn btn-info">Add New Book</Link>
                    </div>
                </div>

            </div>
        </>
    )
}
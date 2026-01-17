import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export default function AddBook() {

    const [book, setBook] = useState({})

    const myNavigate = useNavigate();
    
    
    useEffect(()=>{
            const user = JSON.parse(sessionStorage.getItem("loggedUser"));
            
            if(!user) 
                myNavigate("/login")
            else if(user.role !== "admin"){
                myNavigate("/")
            }
    
    }, [])

    async function addBook(e){
        e.preventDefault();
        // console.log(book);       
     const res =await axios.get("http://localhost:5000/books");
     const existingBooks = res.data;
    //  console.log(existingBooks);
    const existbook = existingBooks.some((b)=> b.id === book.id);

    if(!existbook)
    {
        axios.post('http://localhost:5000/books', book)
        .then(res => alert('Added successfully'))

        myNavigate("/admin-books")
    }
    else
        alert('Book already exist')
        
        
    }
    
    function handleChange(e){
        setBook({...book, [e.target.name]:e.target.value});
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
                        <h3 className="mt-5 text-center">Add Book</h3>
                        <div className="container w-25">
                            <form action="" onSubmit={addBook}>
                                <div className="form-group">
                                    <input type="text" onChange={handleChange} name="id" placeholder="Book ID" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <input type="text"  onChange={handleChange}  name="bookName" placeholder="Book name" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <input type="text"  onChange={handleChange}  name="author" placeholder="Book author" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <input type="text"  onChange={handleChange}  name="imgUrl" placeholder="Book image" className="form-control" />
                                </div>
                                 <div className="form-group">
                                    <input type="text"  onChange={handleChange}  name="price" placeholder="Book price" className="form-control" />
                                </div>
                                 <div className="form-group">
                                    <input type="number"  onChange={handleChange}  name="stock" placeholder="Book stock" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <select name="offer" onChange={handleChange} defaultValue="" className="form-control">
                                        <option disabled value="">Select one</option>
                                        <option value="new">New Arrivals</option>
                                        <option value="10%">10%</option>
                                        <option value="5%">5%</option>
                                    </select>
                                </div>
                                <input type="submit" value="Add book" className="btn btn-success" />
                                <input type="reset" value="Cancel"  className="ml-3 btn btn-secondary"/>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-dark text-white mt-5 py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <h4 className="text-warning mb-3"> Bookstore</h4>
                        <p>
                            Your one-stop destination for all your reading needs. 
                            Discover amazing books and expand your knowledge.
                        </p>
                    </div>
                    <div className="col-md-4 mb-4">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/" className="text-white-50 text-decoration-none">Home</Link></li>
                            <li><Link to="/books" className="text-white-50 text-decoration-none">Books</Link></li>
                            <li><Link to="/blog" className="text-white-50 text-decoration-none">Blog</Link></li>
                            <li><Link to="/contact" className="text-white-50 text-decoration-none">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-4 mb-4">
                        <h5>Contact Us</h5>
                        <p className="text-white-50 mb-1">Email: info@bookstore.com</p>
                        <p className="text-white-50 mb-1">Phone: +1 234 567 8900</p>
                        <p className="text-white-50">Address: 123 Book Street, Reading City</p>
                    </div>
                </div>
                <hr className="bg-white-50" />
                <div className="text-center text-white-50">
                    <p className="mb-0">&copy; {new Date().getFullYear()} Bookstore. All rights reserved.</p>
                    <p className="mb-0 mt-2">Done by Dravid</p>
                </div>
            </div>
        </footer>
    );
}
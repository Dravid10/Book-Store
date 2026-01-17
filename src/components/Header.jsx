import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="bg-dark text-white py-3">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <Link to="/" className="text-decoration-none text-white">
                        <h3 className="mb-0"> Bookstore</h3>
                    </Link>
                    <nav>
                        <Link to="/" className="text-white text-decoration-none me-3">Home</Link>
                        <Link to="/books" className="text-white text-decoration-none me-3">Books</Link>
                        <Link to="/blog" className="text-white text-decoration-none me-3">Blog</Link>
                        <Link to="/contact" className="text-white text-decoration-none">Contact</Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}
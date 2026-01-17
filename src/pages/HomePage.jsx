import Footer from "../components/Footer";
import NewArrivals from "../components/NewArrivals";

export default function HomePage() {
    return (
        <>
            <div className="container mt-4">
                <h1 className="text-center">Welcome to Bookstore</h1>
                <p className="text-center text-muted">
                    Browse and enjoy some of our favourite books.
                </p>
            </div>

            <NewArrivals />

            <Footer />
        </>
    );
}
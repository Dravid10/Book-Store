import Footer from "../components/Footer";

export default function BlogPage() {
    const blogPosts = [
        {
            id: 1,
            title: "10 Must-Read Books for 2024",
            excerpt: "Discover the most anticipated books of the year that you shouldn't miss.",
            date: "January 15, 2024",
            author: "Bookstore Team"
        },
        {
            id: 2,
            title: "How to Build a Reading Habit",
            excerpt: "Tips and tricks to help you read more books and develop a consistent reading routine.",
            date: "January 10, 2024",
            author: "Bookstore Team"
        },
        {
            id: 3,
            title: "Best Fiction Books of All Time",
            excerpt: "A curated list of timeless fiction books that have captivated readers for generations.",
            date: "January 5, 2024",
            author: "Bookstore Team"
        }
    ];

    return (
        <>
            <div className="container my-5">
                <h1 className="text-center mb-5">📖 Our Blog</h1>
                <p className="text-center text-muted mb-5">
                    Stay updated with the latest book reviews, reading tips, and literary news
                </p>

                <div className="row">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="col-md-4 mb-4">
                            <div className="card h-100 shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title">{post.title}</h5>
                                    <p className="card-text text-muted">{post.excerpt}</p>
                                    <div className="d-flex justify-content-between align-items-center mt-auto">
                                        <small className="text-muted">
                                            {post.date} by {post.author}
                                        </small>
                                        <button className="btn btn-sm btn-outline-primary">
                                            Read More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}
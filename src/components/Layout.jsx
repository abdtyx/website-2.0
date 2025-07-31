import Navbar from "./NavBar.jsx";
import Footer from "./Footer.jsx";

export default function Layout({content}) {
    return (
        <div className="flex flex-col min-h-screen bg-stone-100">
            <Navbar />
                <main className="flex-grow pt-16">
                    {content}
                </main>
            <Footer />
        </div>
    );
}

import "./Footer.css"



export default function Footer(){
    return (
        <footer className="footer text-center">
            <section className="footer-section container-md" id="author-section">
                <h4>© 2024 Andrea Massa</h4>
                <p>andreamassa1999@gmail.com</p>
                <div className="container-sm" id="links-container">
                    <a href="">Official Website</a>
                    <a href="">LinkedIn</a>
                    <a href="">GitHub</a>
                </div>
            </section>
            <section className="footer-section container-md" id="credits-section">
                <h5>Attributions & Notices</h5>
                <p>Pokemon Data provided by <a href="">PokeApi v2 by Nintendo</a></p>
            </section>
        </footer>
    )
}
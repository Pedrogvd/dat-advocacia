import { useState } from "react";
import "./Header.css";
import logoDAT from "../../assets/logoDATHeader.png";

const Header = () => {
    const [menuHamburguerOpen, setMenuHamburguerOpen] = useState(false);
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const headerHeight = document.querySelector(".header").offsetHeight;
            window.scrollTo({
                top: element.offsetTop - headerHeight - 10,
                behavior: "smooth",
            });
        }
    };

    return (
        <header className="header">
            <div className="logo">
                <img src={logoDAT} className="logo-img" alt="DAT Advocacia" />
            </div>
            <button className="menu-toggle" onClick={() => setMenuHamburguerOpen(!menuHamburguerOpen)}>
                ☰
            </button>
            <nav className={menuHamburguerOpen ? "nav active" : "nav"}>
                <ul>
                    <li><button onClick={() => scrollToSection("home")}>Página inicial</button></li>
                    <li><a href="#history">Nossa História</a></li>
                    <li><a href="#about">Sobre</a></li>
                    <li><a href="#members">Quem somos?</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
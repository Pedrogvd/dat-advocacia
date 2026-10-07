import React, { useState, useEffect } from 'react';
import './Footer.css';
import whatsappButtonIcon from '../../assets/whatsappButton.png';

const Footer = () => {
    const [viewByCellphone, setViewByCellphone] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            if (window.innerWidth <= 768) {
                setViewByCellphone(true);
            } else {
                setViewByCellphone(false);
            }
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} DAT Advocacia</p>

                <div className="footer-info">
                    <p className="footer-address">Av. Augusto de Lima, 1800 · Sala 908 · Barro Preto, Belo Horizonte/MG · CEP 30190-008</p>
                </div>

                {!viewByCellphone && (
                    <nav className="footer-nav">
                        <ul>
                            <li><a href="#home">Página Inicial</a></li>
                            <li><a href="#history">Nossa História</a></li>
                            <li><a href="#about">Sobre</a></li>
                            <li><a href="#members">Equipe</a></li>
                            <li><a href="#contact">Contato</a></li>
                        </ul>
                    </nav>
                )}
            </div>

            <div className="footer-whatsapp">
                <a
                    href="https://wa.me/5531971567039"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-button"
                >
                    <img src={whatsappButtonIcon} alt="WhatsApp" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
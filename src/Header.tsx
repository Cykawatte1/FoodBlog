import { Link } from 'react-router-dom';
import { useState } from 'react'; // 1. Hook importieren

export default function Header() {
    // 2. State für das Menü erstellen
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="header">
                <div className="header-container">
                    {/* 3. Hamburger Button aktivieren */}
                    <button
                        className={`hamburger-btn ${isOpen ? 'rotate' : ''}`}
                        onClick={toggleMenu}
                    >
                        ☰
                    </button>

                    <div className="menu-searchbar">
                        {/* Desktop Menü (bleibt wie es ist oder ausblenden auf Mobile) */}
                        <div className="menu-container hide-on-mobile">
                            <Link to={"/"}>Startseite</Link>
                            <Link to={"/Rezept"}>Rezepte</Link>
                            <Link to={"/Texte"}>Texte</Link>
                            <Link to={"/About_me"}>Über mich</Link>
                        </div>

                        <input type="search" name="search" placeholder="Search" />
                        <button className="search-button">
                            <img src={`${import.meta.env.BASE_URL}lupe.png`} alt="Suche" />
                        </button>
                    </div>
                </div>
            </div>

            {/* 4. Der seitliche Reiter (Side Drawer) */}
            <div className={`side-drawer ${isOpen ? 'open' : ''}`}>
                <button className="close-btn" onClick={toggleMenu}>×</button>
                <nav className="drawer-nav">
                    <Link to={"/"} onClick={toggleMenu}>Startseite</Link>
                    <Link to={"/Rezept"} onClick={toggleMenu}>Rezepte</Link>
                    <Link to={"/Texte"} onClick={toggleMenu}>Texte</Link>
                    <Link to={"/About_me"} onClick={toggleMenu}>Über mich</Link>
                </nav>
            </div>

            {/* Optional: Ein Overlay, das den Rest abdunkelt */}
            {isOpen && <div className="backdrop" onClick={toggleMenu}></div>}
        </>
    );
}
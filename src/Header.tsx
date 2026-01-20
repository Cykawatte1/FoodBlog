import { Link } from 'react-router-dom';

export default function Header() {
    return(
        <>
        <div className={"header"}>
        <div className="header-container">

            <button className="hamburger-btn" id="hamburger-btn" >☰</button>

            <div className="menu-searchbar">

                <div className="menu-container">
                    <Link to={"/"}>Startseite</Link>
                    <Link to={"/Rezept"}>Rezepte</Link>
                    <Link to={"/Texte"}>Texte</Link>
                    <Link to={"/About_me"}>Über mich</Link>
                </div>
                <input type="search" name="search" placeholder="Search" />
                    <button className="search-button"><img src="./src/assets/lupe.png" /></button>
            </div>
        </div>
        </div>
        </>
    )
}
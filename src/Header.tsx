import CarouselSection from "./CarouselSection.tsx";

export default function Header() {
    return(
        <>
        <div className={"header"}>
        <div className="header-container">

            <button className="hamburger-btn" id="hamburger-btn" >☰</button>

            <div className="menu-searchbar">

                <div className="menu-container">
                    <a href="index.html">Startseite</a>
                    <a href="rezepte.html">Rezepte</a>
                    <a href="texte.html">Texte</a>
                    <a href="aboutme.html">Über mich</a>
                </div>
                <input type="search" name="search" placeholder="Search" />
                    <button className="search-button"><img src="./src/assets/lupe.png" /></button>
            </div>
        </div>
            <CarouselSection />
        </div>
        </>
    )
}
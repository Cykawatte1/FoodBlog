import FoodContainer from "./FoodContainer.tsx";
import Socials from "./Socials.tsx";
import CarouselSection from "./CarouselSection.tsx";

export default function MainSection() {
    return(
        <>
            <CarouselSection />
            <div className={"littleText"}>
                <h5>
                    Freut mich, dass du hier bist!
                </h5>
                <div className={"text-content"}>
                    <span>Wenn du auf der Suche nach den unterschiedlichsten Rezespanten bist,</span>
                    <span>egal ob vegan oder  vielleicht proteinreich, hier wirst du etwas</span>
                    <span>passendes für dich finden, das versichere ich dir!</span>
                </div>
            </div>

            <div className={"foodContainer-h2"}>
                <h2> Leckere vegane Rezepte, passend zum Veganuary.. </h2>
            </div>
            <FoodContainer />
            <div className={"irgendwasKA"}>
                <p>Tipp: Viele dieser Gerichte lassen sich perfekt für die Woche vorbereiten (Meal Prep).</p>
            </div>
            <div className={"foodContainer-h2"}>
                <h2>Schon probiert ?</h2>
            </div>
            <FoodContainer />
            <Socials/>
        </>
    )
}
import FoodContainer from "./FoodContainer.tsx";
import Socials from "./Socials.tsx";

export default function MainSection() {
    return(
        <>
            <div className={"littleText"}>
                <h5>
                    Freut mich, dass du hier bist!
                </h5>
                <div className={"text-content"}>
                    <span>Wenn du auf der Suche nach den unterschiedlichsten Rezespanten bist,</span>
                    <span>egal ob Vegan, Nachspeise oder proteinreich, hier wirst du etwas</span>
                    <span>passendes für dich finden, das versichere ich dir!</span>
                </div>
            </div>

            <div className={"foodContainer-h2"}>
                <h2>Schon probiert ?</h2>
            </div>
            <FoodContainer />
            <div className={"irgendwasKA"}>
                <p>Hier soll irgendwas noch hinkommen...</p>
            </div>
            <div className={"foodContainer-h2"}>
                <h2>Für die weihnachtliche Stimmung </h2>
            </div>
            <FoodContainer />
            <Socials/>
        </>
    )
}
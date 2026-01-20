import Card from "./Card.tsx"
import Linseneintopf from "./recipes/Linseneintopf.json";
import Header from "./Header.tsx";

interface LetterProps {
    letter: string;
}

export default function RecipesAlphabet({letter} : LetterProps) {
    return(
        <>
            <div className="alphabet-container">
                <h2 id={letter}>{letter}</h2>
                <div className="recipes-alphabet">
                    <Card imgUrl={'./src/assets/rezept1.png'} textContent={"Japanische Ramen"} description={"leckere Ramen Suppe mit Mais, knuspriges Hähnchen und Sojasprossen"} recipe={Linseneintopf}/>
                    <Card imgUrl={'./src/assets/rezept3.png'} textContent={"Knuspriges Backfischbrötchen"} description={"knuspriges Backfischfilet, angerichtet mit Remoulade und frischem Salat "} recipe={Linseneintopf}/>
                    <Card imgUrl={'./src/assets/rezept1.png'} textContent={"Japanische Ramen"} description={"leckere Ramen Suppe mit Mais, knuspriges Hähnchen und Sojasprossen"} recipe={Linseneintopf}/>
                    <Card imgUrl={'./src/assets/rezept1.png'} textContent={"Japanische Ramen"} description={"leckere Ramen Suppe mit Mais, knuspriges Hähnchen und Sojasprossen"} recipe={Linseneintopf}/>
                    <Card imgUrl={'./src/assets/rezept1.png'} textContent={"Japanische Ramen"} description={"leckere Ramen Suppe mit Mais, knuspriges Hähnchen und Sojasprossen"} recipe={Linseneintopf}/>
                </div>
            </div>
        </>
    )
}
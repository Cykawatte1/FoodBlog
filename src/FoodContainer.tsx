import Card from "./Card.tsx";
import Linseneintopf from "./recipes/Linseneintopf.json";
import Erdnusscurry from "./recipes/Erdnusscurry.json"
import Bohnenpatty from "./recipes/Bohnenpatty.json"
import ChilliSinCarne from "./recipes/ChilliSinCarne.json"
import VeganerBurrito from "./recipes/VeganerBurrito.json"
import VeganeLasagne from "./recipes/VeganeLasagne.json"

export default function FoodContainer() {
    return(
        <>
        <div className={"foodContainer"}>
            <Card imgUrl={`${import.meta.env.BASE_URL}rezept10.jpg`} textContent={"Bohnenpatty mit Blumenkohlstampf"} description={"deftiges Bohnenpatty, angerichtet mit Blumenkohlstampf und verfeinert mit Mandeln"} recipe={Bohnenpatty}/>
            <Card imgUrl={`${import.meta.env.BASE_URL}rezept9(2).jpg`} textContent={"Veganes Erdnusscurry"} description={"veganes Kichererbsen-Erdnusscurry mit räuchertofu, dazu als Beilage Reis. Das Rezept bietet sich sehr gut für's Mealpreping an "} recipe={Erdnusscurry}/>
            <Card imgUrl={`${import.meta.env.BASE_URL}rezept8(4).png`} textContent={"Veganer Linseneintopf"} description={"herzhafter veganer Linseneintopf, angerichtet mit feingehackter Petersilie. Das Rezept bietet sich sehr gut für's Mealpreping an "} recipe={Linseneintopf}/>
            <Card imgUrl={`${import.meta.env.BASE_URL}rezept11.jpg`} textContent={"Chilli sin Carne"} description={"würziges Chilli sin Carne, serviert mit Reis und Sauerteigbrot. Sehr herzhaft und Proteinreich"} recipe={ChilliSinCarne}/>
            <Card imgUrl={`${import.meta.env.BASE_URL}rezept12(5).jpg`} textContent={"Veganer Burrito"} description={"veganer Burrito, gefüllt mit Reis und klassischer Burritofüllung aus Sojagranulat"} recipe={VeganerBurrito} />
            <Card imgUrl={`${import.meta.env.BASE_URL}rezept13(2).jpg`} textContent={"Vegane Lasagne"} description={"Vegane Lasagne, bestehend aus Tomaten-Sojagranulat Soße und Mandelmilch bechamelsoße"} recipe={VeganeLasagne} />
        </div>
        </>
    )
}




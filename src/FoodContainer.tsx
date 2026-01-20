import Card from "./Card.tsx";
import Linseneintopf from "./recipes/Linseneintopf.json";


export default function FoodContainer() {
    return(
        <>
        <div className={"foodContainer"}>
            <Card imgUrl={'./src/assets/rezept10.jpg'} textContent={"Bohnenpatty mit Blumenkohlstampf"} description={"deftiges Bohnenpatty, angerichtet mit Blumenkohlstampf und verfeinert mit Mandeln"} recipe={Linseneintopf}/>
            <Card imgUrl={'./src/assets/rezept9(2).jpg'} textContent={"Veganes Erdnusscurry"} description={"veganes Kichererbsen-Erdnusscurry mit räuchertofu, dazu als Beilage Reis"} recipe={Linseneintopf}/>
            <Card imgUrl={'./src/assets/Gemini_Generated_Image_q54aw4q54aw4q54a.png'} textContent={"Veganer Linseneintopf"} description={"herzhafter veganer Linseneintopf, angerichtet mit Petersilie"} recipe={Linseneintopf}/>
            <Card imgUrl={'./src/assets/rezept6.png'} textContent={"Rinderrouladen"} description={"mit Speck gefüllte Rinderrouladen, angerichtet mit gedünstetem Genüse und Kartoffelpüree"} recipe={Linseneintopf} />
            <Card imgUrl={'./src/assets/rezept6.png'} textContent={"Rinderrouladen"} description={"mit Speck gefüllte Rinderrouladen, angerichtet mit gedünstetem Genüse und Kartoffelpüree"} recipe={Linseneintopf} />
            <Card imgUrl={'./src/assets/rezept6.png'} textContent={"Rinderrouladen"} description={"mit Speck gefüllte Rinderrouladen, angerichtet mit gedünstetem Genüse und Kartoffelpüree"} recipe={Linseneintopf} />
        </div>
        </>
    )
}




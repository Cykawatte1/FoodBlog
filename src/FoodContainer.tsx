import Card from "./Card.tsx";

export default function FoodContainer() {
    return(
        <>
        <div className={"foodContainer"}>
            <Card imgUrl={'./src/assets/rezept1.png'} textContent={"Japanische Ramen"} description={"leckere Ramen Suppe mit Mais, knuspriges Hähnchen und Sojasprossen"}/>
            <Card imgUrl={'./src/assets/rezept3.png'} textContent={"Knuspriges Backfischbrötchen"} description={"knuspriges Backfischfilet, angerichtet mit Remoulade und frischem Salat "}/>
            <Card imgUrl={'./src/assets/rezept4.png'} textContent={"Spiegelei mit gegertem Ofengemüse"} description={"TreeLover"} />
            <Card imgUrl={'./src/assets/rezept6.png'} textContent={"Rinderrouladen"} description={"mit Speck gefüllte Rinderrouladen, angerichtet mit gedünstetem Genüse und Kartoffelpüree"} />
            <Card imgUrl={'./src/assets/rezept6.png'} textContent={"Rinderrouladen"} description={"mit Speck gefüllte Rinderrouladen, angerichtet mit gedünstetem Genüse und Kartoffelpüree"} />
            <Card imgUrl={'./src/assets/rezept6.png'} textContent={"Rinderrouladen"} description={"mit Speck gefüllte Rinderrouladen, angerichtet mit gedünstetem Genüse und Kartoffelpüree"} />
        </div>
        </>
    )
}




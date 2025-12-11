import Card from "./Card.tsx";

export default function FoodContainer() {
    return(
        <>
            <div className={"foodContainer"}>
                <Card imgUrl={'./src/assets/rezept1.png'} textContent={"Tortelini mit Käse-Sahne Soße und Schinken"} />
                <Card imgUrl={'./src/assets/rezept2.png'} textContent={"Rinderrouladen mit Kartoffelklösen und Rotkraut"} />
                <Card imgUrl={'./src/assets/rezept3.png'} textContent={"BACKFISCH 😮‍💨"} />
                <Card imgUrl={'./src/assets/rezept4.png'} textContent={"lorem dorem lorem sodasodandakndasndakndaknsdkandkansdknakdnakjnsda"} />
                <Card imgUrl={'./src/assets/rezept5.png'} textContent={"jaja"} />
                <Card imgUrl={'./src/assets/rezept6.png'} textContent={"TreeLover"} />
            </div>
        </>
    )
}
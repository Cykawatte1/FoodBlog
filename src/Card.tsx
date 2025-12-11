interface CardProps{
    imgUrl : string;
    textContent : string;
}
export default function Card({imgUrl, textContent} : CardProps) {
    return(
        <>
            <section>
                <img src={imgUrl}/>
                <p>{textContent}</p>
            </section>
        </>
    )
}
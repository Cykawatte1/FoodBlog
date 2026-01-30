import {Link} from "react-router-dom";
import type {RecipeData} from "./Recipe.tsx";

interface CardProps{
    imgUrl : string;
    textContent : string;
    description : string;
    recipe : RecipeData;
}
export default function Card({imgUrl, textContent, description, recipe} : CardProps) {
    return(
        <>
            <div className={"card"} style={{width: "18rem", margin: "50px"}}>
                <div className={"img-pos"}>
                    <img src={imgUrl} className={"card-img-top"} id={"image"} />
                </div>
                <div className={"card-body"}>
                    <h5 className={"card-title"}>{textContent}</h5>
                    <p className={'card-text'}>{description}</p>
                    {/*<a href={"#"} className={"btn btn-primary"}>Go somewhere</a>*/}
                    <Link to={`/${recipe.id}`} className={"btn btn-primary"}>Zum Rezept</Link>
                </div>
            </div>
        </>
    )
}
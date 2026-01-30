import React from "react";
import Header from "./Header.tsx";

export interface RecipeData {
    id: string | number;
    title: string;
    img: string;
    stats: {
        duration: string;
        difficulty: number;
        type: string;
    };
    ingredients: string[];
    instructions: string[];
    hints: string[];
    nutritions: number[];
    imgUrl: string;
    textContent: string;
    description: string;
}



interface RecipeProps {
    recipe: RecipeData;
}

export default function Recipe({recipe} : RecipeProps) {
    console.log(recipe.img);

    return(
        <>
            <Header />
            <div className="recipe-container">
                <div className={"recipe"}>
                    <h1> {recipe.title} </h1>
                    <div className="recipe-img">
                        <img src={recipe.img} />
                    </div>
                    <span className={"recipe-stats"}>
                        <p>Dauer: {recipe.stats.duration}</p>
                        <p>Schwierigkeit: {recipe.stats.difficulty}/5</p>
                        <p>{recipe.stats.type}</p>
                    </span>
                    <div className={"recipe-instructions"}>
                        <div className={"ingredients"}>
                            <div className={"ingredients-table"}>
                                <h4> Rezept Zutaten </h4>
                                <ul>
                                    {
                                        recipe.ingredients.map(ingredient => (
                                            <li>{ingredient}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className={"instructions"}>
                            <h4>Rezept Zubereitung </h4>
                            <ol>
                                {
                                    recipe.instructions.map(instruction => (
                                        <li>{instruction}</li>
                                    ))
                                }
                            </ol>
                            <p> HINWEIS: &nbsp;
                                {
                                    recipe.hints?.map((hint, index) => (
                                        <React.Fragment key={index}>
                                            {hint}
                                            <br />
                                        </React.Fragment>
                                    ))
                                }
                                <br />
                            </p>
                        </div>
                        <hr></hr>
                        <div className={"nutrition"}>
                            <h5> Ungefähre Nährwerte pro Portion </h5>
                            <p> Kalorien: {recipe.nutritions[0]}kcal | Kohlenhydrate: {recipe.nutritions[1]}g | Eiweiß: {recipe.nutritions[2]}g | Fett: {recipe.nutritions[3]}g </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
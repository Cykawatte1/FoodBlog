import Card from "./Card.tsx"
import type {RecipeData} from "./Recipe.tsx";

interface LetterProps {
    letter: string;
    recipes: RecipeData[];
}

export default function RecipesAlphabet({ letter, recipes } : LetterProps) {
    return(
        <>
            <div className="alphabet-container">
                <h2 id={letter}>{letter}</h2>
                <div className="recipes-alphabet">
                    {recipes.map(recipe => (
                        <div key={recipe.id}>
                            <Card imgUrl={recipe.imgUrl} recipe={recipe} textContent={recipe.textContent} description={recipe.description} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
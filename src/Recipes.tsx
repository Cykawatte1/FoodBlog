import Header from "./Header.tsx";
import RecipesAlphabet from "./RecipesAlphabet.tsx";

export default function Recipes() {
    return(
        <>
            <Header />
            <div className="background-white">
                <div className="recipes-container">
                    <div className="recipes-header">
                        <div className={"recipes-header-alphabet"}>
                            <a href={"#A"}>A</a>
                            <a href={"#B"}>B</a>
                            <a href={"#C"}>C</a>
                            <a href={"#D"}>D</a>
                            <a href={"#E"}>E</a>
                            <a href={"#F"}>F</a>
                            <a href={"#G"}>G</a>
                            <a href={"#H"}>H</a>
                            <a href={"#I"}>I</a>
                            <a href={"#J"}>J</a>
                            <a href={"#K"}>K</a>
                            <a href={"#L"}>L</a>
                            <a href={"#M"}>M</a>
                            <a href={"#N"}>N</a>
                            <a href={"#O"}>O</a>
                            <a href={"#P"}>P</a>
                            <a href={"#Q"}>Q</a>
                            <a href={"#R"}>R</a>
                            <a href={"#S"}>S</a>
                            <a href={"#T"}>T</a>
                            <a href={"#U"}>U</a>
                            <a href={"#V"}>V</a>
                            <a href={"#W"}>W</a>
                            <a href={"#X"}>X</a>
                            <a href={"#Y"}>Y</a>
                            <a href={"#Z"}>Z</a>
                        </div>
                        <div className="recipes-header-searchbar">
                            <input type={"search"} name={"search"} placeholder={"Search.."}/>
                            <button type={"button"}><img src={"./src/assets/lupe.png"}/></button>
                        </div>
                    </div>
                    <div className="recipes-body">
                        <RecipesAlphabet letter={"A"} />
                        <RecipesAlphabet letter={"B"} />
                        <RecipesAlphabet letter={"C"} />
                        <RecipesAlphabet letter={"D"} />
                        <RecipesAlphabet letter={"E"} />
                        <RecipesAlphabet letter={"F"} />
                        <RecipesAlphabet letter={"G"} />
                        <RecipesAlphabet letter={"H"} />
                        <RecipesAlphabet letter={"I"} />
                        <RecipesAlphabet letter={"J"} />
                        <RecipesAlphabet letter={"K"} />
                        <RecipesAlphabet letter={"L"} />
                        <RecipesAlphabet letter={"M"} />
                        <RecipesAlphabet letter={"N"} />
                        <RecipesAlphabet letter={"O"} />
                        <RecipesAlphabet letter={"P"} />
                        <RecipesAlphabet letter={"Q"} />
                        <RecipesAlphabet letter={"R"} />
                        <RecipesAlphabet letter={"S"} />
                        <RecipesAlphabet letter={"T"} />
                        <RecipesAlphabet letter={"U"} />
                        <RecipesAlphabet letter={"V"} />
                        <RecipesAlphabet letter={"W"} />
                        <RecipesAlphabet letter={"X"} />
                        <RecipesAlphabet letter={"Y"} />
                        <RecipesAlphabet letter={"Z"} />
                    </div>
                </div>
            </div>
        </>
    )
}
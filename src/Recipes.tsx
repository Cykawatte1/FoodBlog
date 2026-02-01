import Header from "./Header.tsx";
import RecipesAlphabet from "./RecipesAlphabet.tsx";
import Linseneintopf from "./recipes/Linseneintopf.json"
import Erdnusscurry from "./recipes/Erdnusscurry.json"
import Bohnenpatty from "./recipes/Bohnenpatty.json"
import ChilliSinCarne from "./recipes/ChilliSinCarne.json"
import VeganerBurrito from "./recipes/VeganerBurrito.json"
import VeganeLasagne from "./recipes/VeganeLasagne.json"
import MissingNo from "./recipes/MissingNo.json"

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
                    </div>
                    <div className="recipes-body">
                        <RecipesAlphabet letter={"A"} recipes={[MissingNo]}/>
                        <RecipesAlphabet letter={"B"} recipes={[VeganerBurrito, Bohnenpatty]}/>
                        <RecipesAlphabet letter={"C"} recipes={[ChilliSinCarne]}/>
                        <RecipesAlphabet letter={"D"} recipes={[MissingNo]}/>
                        <RecipesAlphabet letter={"E"} recipes={[Erdnusscurry]}/>
                        <RecipesAlphabet letter={"F"} recipes={[MissingNo]}/>
                        <RecipesAlphabet letter={"G"} recipes={[MissingNo]}/>
                        <RecipesAlphabet letter={"H"} recipes={[MissingNo]}/>
                        <RecipesAlphabet letter={"I"} recipes={[MissingNo]}/>
                        <RecipesAlphabet letter={"J"} recipes={[MissingNo]}/>
                        <RecipesAlphabet letter={"K"} recipes={[MissingNo]}/>
                        <RecipesAlphabet letter={"L"} recipes={[VeganeLasagne, Linseneintopf]}/>
                        <RecipesAlphabet letter={"M"} recipes={[MissingNo]}/>
                        <RecipesAlphabet letter={"N"} recipes={[MissingNo]}/>
                        <RecipesAlphabet letter={"O"} recipes={[MissingNo]}/>
                        <RecipesAlphabet letter={"P"} recipes={[MissingNo]}/>
                        <RecipesAlphabet letter={"Q"} recipes={[MissingNo]}/>
                        <RecipesAlphabet letter={"R"} recipes={[MissingNo]}/>
                        <RecipesAlphabet letter={"S"} recipes={[MissingNo]}/>
                        <RecipesAlphabet letter={"T"} recipes={[MissingNo]}/>
                        <RecipesAlphabet letter={"U"} recipes={[MissingNo]}/>
                        <RecipesAlphabet letter={"V"} recipes={[MissingNo]}/>
                        <RecipesAlphabet letter={"W"} recipes={[MissingNo]}/>
                        <RecipesAlphabet letter={"X"} recipes={[MissingNo]}/>
                        <RecipesAlphabet letter={"Y"} recipes={[MissingNo]}/>
                        <RecipesAlphabet letter={"Z"} recipes={[MissingNo]}/>
                    </div>
                </div>
            </div>
        </>
    )
}
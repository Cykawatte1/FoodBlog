import Recipes from "./Recipes.tsx";
import { Routes, Route } from 'react-router-dom'
import Homepage from "./Homepage.tsx";
import MainSection from "./MainSection.tsx";
import {Texts} from "./Texts.tsx";
import {AboutMe} from "./AboutMe.tsx";
import Recipe from "./Recipe.tsx";
import type {RecipeData} from "./Recipe.tsx";
import Linseneintop from "./recipes/Linseneintopf.json"

export default function App() {

    // const [recipe, fillRoutes] = useRecipe();

  return (
    <>
        <Routes>
            <Route element={<Homepage />}>
            <Route path="/" element={<MainSection />} />
            </Route>

            <Route path="/Rezept" element={<Recipes/>} />
            {/*<Route path="/Beispiel_Rezept" element={<Recipe/>} />*/}
            <Route path="/Texte" element={<Texts/>}/>
            <Route path="/About_me" element={<AboutMe/>}/>
            <Route path="/Veganer_Linseneintopf" element={<Recipe recipe={Linseneintop as RecipeData}/>}/>
        </Routes>


    </>
  )
}

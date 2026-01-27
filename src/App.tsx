import Recipes from "./Recipes.tsx";
import { Routes, Route } from 'react-router-dom'
import Homepage from "./Homepage.tsx";
import MainSection from "./MainSection.tsx";
import {Texts} from "./Texts.tsx";
import {AboutMe} from "./AboutMe.tsx";
import Recipe from "./Recipe.tsx";
import type {RecipeData} from "./Recipe.tsx";
import Linseneintop from "./recipes/Linseneintopf.json"
import Erdnusscurry from "./recipes/Erdnusscurry.json"
import Bohnenpatty from "./recipes/Bohnenpatty.json"
import ScrollToTop from "./ScrollToTop.tsx";

export default function App() {

    // const [recipe, fillRoutes] = useRecipe();

  return (
    <>
        <ScrollToTop/>
        <Routes>
            <Route element={<Homepage />}>
            <Route path="/" element={<MainSection />} />
            </Route>

            <Route path="/Rezept" element={<Recipes/>} />
            {/*<Route path="/Beispiel_Rezept" element={<Recipe/>} />*/}
            <Route path="/Texte" element={<Texts/>}/>
            <Route path="/About_me" element={<AboutMe/>}/>
            <Route path="/Veganer_Linseneintopf" element={<Recipe recipe={Linseneintop as RecipeData}/>}/>
            <Route path="/Veganes_Erdnusscurry" element={<Recipe recipe={Erdnusscurry as RecipeData}/>}/>
            <Route path="/Bohnenpatty_Blumenkohlstampf" element={<Recipe recipe={Bohnenpatty as RecipeData}/>}/>
        </Routes>


    </>
  )
}

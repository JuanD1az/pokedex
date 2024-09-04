import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { HomePage, PokedexPage } from "./pages";
import { PokemonProvider } from "./context/PokemonContext.jsx";

export const AppRouter = () => {
    return <Routes>
        <Route path="/" element={<Navigation />}>
            <Route index element={<PokemonProvider> <PokedexPage /> </PokemonProvider>} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
    </Routes>
}
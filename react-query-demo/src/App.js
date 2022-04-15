import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { ReactQueryDevtools } from 'react-query/devtools'

import { QueryClientProvider, QueryClient } from "react-query";
import { HomePage } from "./components/Home.page";
import { RQSuperHeroesPage } from "./components/RQSuperHeroes.page";
import { SuperHeroesPage } from "./components/SuperHeroes.page";

import { PanoViewer, SpinViewer, PROJECTION_TYPE } from "@egjs/react-view360";


import "./App.css";

const queryClient = new QueryClient();

function App() {
    return (

    );
}

export default App;
import React from "react";
import './App.css'

import { AppProvider } from "./AppProvider";

import AppNaviagation from "./AppNavigation";

function App() {

    return (
        <AppProvider>
           <AppNaviagation />
        </AppProvider>
    )
}

export default App;
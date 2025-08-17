import Content from "./Content";
import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";
import './App.css';

// Context
// Comp A => Comp C

// 1. Create context
// 2. Provider
// 3. Consumer

function App() {
    const context = useContext(ThemeContext);

    return (
        <div style={{ padding: 20 }}>
            <button onClick={context.ToggleTheme}>Toggle Theme</button>
            <Content/>
        </div>
    )
}

export default App
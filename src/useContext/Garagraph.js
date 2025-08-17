import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Paragraph() {
    const context = useContext(ThemeContext);

    return (
        <p className={context.theme}>
            Helloo 123 456 789
        </p>
    );
}

export default Paragraph
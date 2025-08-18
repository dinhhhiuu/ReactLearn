import Button from "./components/Button";
import GlobalStates from "./components/GlobalStates";


function App() {
    return (
        <GlobalStates>
            <div style={{ padding: '10px 32px'}}>
                <Button primary />
            </div>
        </GlobalStates>
    )
}

export default App
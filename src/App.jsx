import "./App.css";
import Header from "./Components/Header/Header.jsx";
import Main from "./Components/Main/Main.jsx";

const App = () => {
    return (
        <>
            <div className="app-wrapper">
                <div className="site-content">
                    <Header />
                    <Main />
                </div>
            </div>
        </>
    )
}
export default App;
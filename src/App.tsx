import './App.css';
import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";
import MainScreen from "./components/MainScreen/MainScreen.tsx";


function App() {
    return (
        <div className="App">
            <Header/>
            <MainScreen/>
            <Footer/>
        </div>
    );
}

export default App;

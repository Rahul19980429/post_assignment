import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import PillForPost from "./components/PillForPost";


function App() {
  return (
    <>
    <NavBar/>
    <div className="container" style={{minHeight:'60vh'}}>
      <PillForPost/>
    </div>
    <Footer/>
    </>
  );
}

export default App;

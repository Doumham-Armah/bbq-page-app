import Intro from "./components/intro";
import MainContent from "./components/mainContent";

function App() {
  return (
    <>
      {/* <h1 className="trial">THIS IS A TRIAL</h1> */}
      <div className="splitter">
        <Intro />
        <MainContent />
      </div>
    </>
  );
}

export default App;

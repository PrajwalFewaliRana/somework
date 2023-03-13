import MainComponent from "./components/mainComponent";
import Sidebar from "./components/sidebar";

function App() {
  return (

    <div className="bg-black flex self-start" >
      <Sidebar />
      <MainComponent />
    </div>
  )
}

export default App;

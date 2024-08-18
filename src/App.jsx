import Player from "./Components/Player"
import Sidebar from "./Components/Sidebar"

const App = () => {
  return (
    <div className="h-screen bg-black">
    <div className="h-[90%] flex">
      <Sidebar />
    </div>
    <Player />
  </div>
  )
}
export default App
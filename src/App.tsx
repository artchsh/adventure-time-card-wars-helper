import PlayerCard from "./components/player-card"

function App() {

  return (
    <>
      <div className="container">
        {[1,2].map((playerNumber: number) => (
          <div className="wr">
            <PlayerCard key={playerNumber} />
          </div>
        ))}
      </div>
    </>
  )
}

export default App

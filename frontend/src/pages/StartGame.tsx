function StartGame(){
    return(
        <>
        <section id="top-center">
            <div>
                <h1>En Attente des joueurs</h1>
            </div>
        </section>

        <section id="players-waiting">
            <div>
                <p id="player-1">player 1</p>
                <p id="player-2">player 2</p>
                <p id="player-3">player 3</p>
                <p id="player-4">player 4</p>
            </div>
        </section>

        <section id="game-start-button">
            <div>
                <h3>Commencer la partie</h3>
            </div>
        </section>
        </>
    )
}

export default StartGame
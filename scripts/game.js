function startNewGame(){
    if(players[0].name === '' || players[1].name === ''){
        alert('Please add Custom player names for the both players to start the game!')
        return;
    } else {
        gameAreaElement.style.display = "block";
    }
    
}
function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1,
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7,
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15,
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5,
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1,
          },
        },
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2,
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10,
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5,
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0,
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12,
          },
        },
      },
    };
  }

  function numPointsScored(playerName) {
    const gameData = gameObject();
    for (const team in gameData) {
      if (gameData[team].players.hasOwnProperty(playerName)) {
        return gameData[team].players[playerName].points;
      }
    }
    return "Player not found";
    
  }
console.log("Alan Anderson's points:", numPointsScored("Alan Anderson")); 
console.log("Bismak Biyombo's points:", numPointsScored("Bismak Biyombo"));
console.log("Unknown player's points:", numPointsScored("Unknown Player")); 

  function shoeSize(playerName) {
    const gameData = gameObject();
    for (const team in gameData) {
      if (gameData[team].players.hasOwnProperty(playerName)) {
        return gameData[team].players[playerName].shoe;
      }
    }
    return "Player not found";
  }
  console.log("Alan Anderson's shoe size:", shoeSize("Alan Anderson")); 


  function teamColors(teamName) {
    const gameData = gameObject();
    for (const team in gameData) {
      if (gameData[team].teamName === teamName) {
        return gameData[team].colors;
      }
    }
    return "Team not found";
  }
  console.log("Home team colors:", teamColors("Brooklyn Nets")); 


  function teamNames() {
    const gameData = gameObject();
    return [gameData.home.teamName, gameData.away.teamName];
  }
  console.log("Team names:", teamNames());


  function playerNumbers(teamName) {
    const gameData = gameObject();
    for (const team in gameData) {
      if (gameData[team].teamName === teamName) {
        const players = gameData[team].players;
        return Object.values(players).map((player) => player.number);
      }
    }
    return "Team not found";
  }
  console.log("Home team player numbers:", playerNumbers("Brooklyn Nets")); 
  
  function playerStats(playerName) {
    const gameData = gameObject();
    for (const team in gameData) {
      if (gameData[team].players.hasOwnProperty(playerName)) {
        return gameData[team].players[playerName];
      }
    }
    return "Player not found";
  }
  console.log("Alan Anderson's stats:", playerStats("Alan Anderson"));

function bigShoeRebounds() {
    const gameData = gameObject();
    let maxShoeSize = 0;
    let playerWithLargestShoe;
    for (const team in gameData) {
      const players = gameData[team].players;
      for (const player in players) {
        if (players[player].shoe > maxShoeSize) {
          maxShoeSize = players[player].shoe;
          playerWithLargestShoe = players[player]; 
        }
      }
    }
    console.log("Player with largest shoe size:", playerWithLargestShoe);
    console.log("Rebounds by player with largest shoe size:", playerWithLargestShoe.rebounds);
    return playerWithLargestShoe.rebounds;
  }

  function mostPointsScored() {
    const gameData = gameObject();
    let maxPoints = 0;
    let playerWithMostPoints;
  
    for (const team in gameData) {
      const players = gameData[team].players;
      for (const player in players) {
        if (players[player].points > maxPoints) {
          maxPoints = players[player].points;
          playerWithMostPoints = player;
        }
      }
    }
  
    return playerWithMostPoints;
  }  console.log("Player with the most points:", mostPointsScored());
  
  function winningTeam() {
    const gameData = gameObject();
    let maxPoints = 0;
    let winningTeamName;
  
    for (const team in gameData) {
      const teamPoints = Object.values(gameData[team].players).reduce((total, player) => total + player.points, 0);
      if (teamPoints > maxPoints) {
        maxPoints = teamPoints;
        winningTeamName = gameData[team].teamName;
      }
    }
  
    return winningTeamName;
  }  console.log("Team with the most points:", winningTeam());
  
  function playerWithLongestName() {
    const gameData = gameObject();
    let longestName = "";
    let playerWithLongestName;
  
    for (const team in gameData) {
      const players = gameData[team].players;
      for (const player in players) {
        if (player.length > longestName.length) {
          longestName = player;
          playerWithLongestName = player;
        }
      }
    }
  
    return playerWithLongestName;
  }
  console.log("Player with the longest name:", playerWithLongestName());
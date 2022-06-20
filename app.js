const warriorsGames = [{
    awayTeam: {
      team: 'Golden State',
      points: 119,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 106,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 105,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 127,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 126,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 85,
      isWinner: false
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 92,
      isWinner: false
    },
    awayTeam: {
      team: 'Houston',
      points: 95,
      isWinner: true
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 94,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 98,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 115,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 86,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 101,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 92,
      isWinner: false
    }
  }
]
const getScoreLine = ({homeTeam, awayTeam}) => {

  let scoreLine;
  const {team: hTeam, points: hPts} = homeTeam;
  const {team: aTeam, points: aPts} = awayTeam;
  const teamNames = `${aTeam}  @  ${hTeam}`;

  if (aPts > hPts) {
    scoreLine = `<b>${aPts}</b> - ${hPts}`;
  } else {
    scoreLine = `${aPts} - <b>${hPts}</b>`;
  }
  return `${teamNames} ${scoreLine}`
}


const isWinner = ({homeTeam, awayTeam}, targetTeam) =>{
  const confirmWinner = homeTeam.team === targetTeam ? homeTeam : awayTeam;
  return confirmWinner
}


const makeChart = (gameData, targetTeam) => {
  const ulParent = document.createElement('ul')

  for (let game of gameData) {
    const gameLI = document.createElement('li');
    gameLI.innerHTML = getScoreLine(game)
    gameLI.classList.add(isWinner(game, targetTeam).isWinner ? 'win' : 'loss');
    ulParent.appendChild(gameLI)


  }
  return ulParent
}
const chart1 = makeChart(warriorsGames, 'Golden State');
document.querySelector('#gs').append(chart1)

const chart2 = makeChart(warriorsGames, 'Houston');
document.querySelector('#hr').append(chart2)

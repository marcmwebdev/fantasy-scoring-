const calculateScore = (player) => {

 switch (player.position) {
   
  case 'QB': return calculateQBScore(player)
     break;
     case 'RB': return calculateRBScore(player)
     break;
     case 'WR': return calculateWRScore(player)
     break;
     case 'TE': return calculateTEScore(player)
     break;
     default: return 0
     break;
     
 }

}

const calculateQBScore = (player) => {
  let score = 0
  const passing = player.stats.passing
  const rushing = player.stats.rushing

  score += passing.yards / 25
  score += passing.touchdowns * 6  
  score += passing.interceptions * -3  
  score += rushing.yards / 10 
  score += rushing.touchdowns * 6 
  score += rushing.fumbles * -3

  return score 
  
} 

const calculateRBScore = (player) => {
  let score = 0
  
  const rushing = player.stats.rushing
  const receiving = player.stats.receiving
  const kick_Ret = player.stats.return.kickreturn
  const punt_Ret =  player.stats.return.puntreturn

  
  score += kick_Ret.yards / 15  
  score += kick_Ret.touchdowns * 6  
  score += kick_Ret.fumbles * -3  
  score += punt_Ret.yards / 15  
  score += punt_Ret.touchdowns * 6  
  score += punt_Ret.fumbles * -3  
  score += receiving.touchdowns * 6  
  score += receiving.yards / 10   
  score += receiving.receptions / 1  
  score += rushing.yards / 10 
  score += rushing.touchdowns * 6 
  score += rushing.fumbles * -3
  score += receiving.fumbles * -3
  

  return score 
  
}
const calculateWRScore = (player) => {
  let score = 0
  
  const rushing = player.stats.rushing
  const receiving = player.stats.receiving
  const kick_Ret = player.stats.return.kickreturn
  const punt_Ret =  player.stats.return.puntreturn

  
  score += kick_Ret.yards / 15  
  score += kick_Ret.touchdowns * 6  
  score += kick_Ret.fumbles * -3  
  score += punt_Ret.yards / 15  
  score += punt_Ret.touchdowns * 6  
  score += punt_Ret.fumbles * -3  
  score += receiving.touchdowns * 6  
  score += receiving.yards / 10   
  score += receiving.receptions / 1  
  score += rushing.yards / 10 
  score += rushing.touchdowns * 6 
  score += rushing.fumbles * -3
  score += receiving.fumbles * -3
  

  return score 
  
}
const calculateTEScore = (player) => {
  let score = 0
  
  
  const receiving = player.stats.receiving


  

  score += receiving.touchdowns * 6  
  score += receiving.yards / 10   
  score += receiving.receptions / 1  
  score += receiving.fumbles * -3
  

  return score 
  
}
module.exports = calculateScore
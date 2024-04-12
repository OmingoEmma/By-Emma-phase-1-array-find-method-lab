// code your solution here

const superbowlWin = (record) => {
    
    const wins = record.filter(entry => entry.result === 'W');
  
    
    if (wins.length === 0) {
      return undefined;
    }
  
    

    return wins[0].year;
  }
  

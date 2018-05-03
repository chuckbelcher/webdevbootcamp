//Create a function to log the average score
function avgScore(scores) {
     //add all scores together
    var total = 0;
    scores.forEach(function(score){
        total += score;
    });
    //divide by total number of scores
    var avg = total/scores.length
    
    //round average
    return Math.round(avg);
}

var scores1 = [5,5,6,7,5,5,7];
console.log(avgScore(scores1));
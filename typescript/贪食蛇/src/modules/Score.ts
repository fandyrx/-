// score 
class ScorePanel{
  score = 0;
  level = 1;
  scoreEle :HTMLElement;
  levelEle:HTMLElement;
  MaxLevel:number;
  constructor(MaxLevel = 10) {
    this.scoreEle = document.getElementById("score")!;
    this.levelEle = document.getElementById("level")!;
    this.MaxLevel = MaxLevel;
  }

  addScore(){
    this.scoreEle.innerHTML = ++this.score +''
    
    if(this.score %10 === 0 ){
      this.levelUp();
    }
  }

  levelUp(){
    if(this.level <  this.MaxLevel){
      this.levelEle.innerHTML = ++this.level + '';
    }
   
  }
}

export default ScorePanel;
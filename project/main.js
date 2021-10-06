//JS Class

/* class Student{
    constructor(name,age,cls) {
        this.name = name;
        this.age = age;
        this.cls = cls;
    }
    student_profile(){
        return `my name is ${this.name}. I am ${this.age} years old. I read in class ${this.cls}`;
    }
}

 class Player extends Student{
    constructor(name,age,cls,game) {
        super(name,age,cls)
        this.game = game;
    }
    player_profile(){
        return `${this.student_profile()}. I love to play ${this.game}`;
    }
 }
 


const player1 = new Player('labib', '17,', 'Ten','cricket');
 console.log(player1.player_profile()); */



 //This Keyword

 const video = {
        title: 'title',
        play: function(){
            console.log(this);
        }
 }


 function videoPlay(video){
     console.log(this);
 }
 videoPlay()



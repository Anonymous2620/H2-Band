
class Instrument
{
    set Name(name){
        this.iName = name;
    }
    get Name(){
        return this.iName;
    }
    Play(sound){
        var audio = new Audio(sound);
        audio.play();
    }
}

class Stringed extends Instrument
{
    set NumberofStrings(amount){
        this.NumberofStrings = amount;
    }

    get NumberofStrings(){
        return this.NumberofStrings;
    }
    constructor(numberOfStrings){
        super();
        this.numberOfStrings = numberOfStrings;
    }
}

class Harp extends Stringed
{
    constructor(height){
        super(4);
        this.height = height;
        super.Name = "Harp";
    }
}

class Guitar extends Stringed
{
    constructor(material){
        super(4);
        super.Name = material;  
    }
}

class Saxophone extends Instrument
{
    constructor(material){
        super(4);
        super.Name = material;
    }
}

class Flute extends Instrument
{
    constructor(holes, material){
        super(4);
        this.holes = holes;
        super.Name = material;
        
    }
}

var harp = new Harp(4);
var guitar = new Guitar("Guitar");
var saxo = new Saxophone("Saxophone");
var flute = new Flute("Flute");

function OnClick()
{
    var selected = document.getElementById("instrumentMenu").value;
    switch (selected){
        case "Guitar":
            guitar.Play("music/guitar.mp3");    
            break;
        case "Harp":
            harp.Play("music/harp.mp3")
            break;
        case "Saxophone":
            saxo.Play("music/saxophone.mp3");
            break;
        case "Flute":
            flute.Play("music/flute.mp3");
            break;
        default:
            break;
    }
}

type BirdType = {
    wings: 2;
}
interface BirdInterface{
    wings:2;
}

const bird1 :BirdType={wings:2};
const bird2:BirdInterface={wings:2};
const bird3 : BirdInterface = bird1;


type Owl ={nocturnal:true} & BirdType;
type Robin={nocturnal:false} & BirdInterface;

interface Peacock extends BirdType{
    colourful:true;
    flies:false;
}

interface Chicken extends BirdInterface{
    colourful:false;
    flies:false;
}

let owl: Owl ={wings:2,nocturnal:true};
let chicken: Chicken ={wings:2,colourful:false,flies:false};



// owl=chicken;
// chicken=owl;

interface Kitten{
    purrs:boolean;
}
interface Kitten{
    colour:string;
}
let kitten: Kitten={purrs:false,colour:"black"};


// type Puppy = {
//     colour:string;
// }
// type Puppy={
//     toys:number;
// }


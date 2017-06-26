var myNum: number = 5;
var myString: string = "Hello Universe";
var myArr: number[] = [1,2,3,4];
var myObj: object = { name:'Bill'};

var anythingVariable: any = "Hey";
var anythingVariable2: any = 25; 

var arrayOne: boolean[] = [true, false, true, true]; 
var arrayTwo: any[] = [1, 'abc', true, 2];

var myObj2: object = { x: 5, y: 10 };

// object constructor
class MyNode {
    val: number;
    _priv?: number;

    constructor(value: number){
        this.val = value;
    };
    doSomething() {
        this._priv = 10;
    };
};
var myNodeInstnace: MyNode = new MyNode(1);

console.log(myNodeInstnace.val);

function myFunction(value: string): void {
    console.log(value);
    return;
}

function sendingErrors(message: string): never {
	throw new Error(message);
}
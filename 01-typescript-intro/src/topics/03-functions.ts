function AddNumbers(a: number, b: number){
 return a + b;
}

const addNumbersArrow = (a:number, b:number):string => {
    return `${a + b}`;
}

function Multiply(firstNumber: number, secondNumber?: number, base: number = 2): number {
    return firstNumber * base;
}


//const result: number = AddNumbers(1,2);
//const result2: string = addNumbersArrow(1,2);
//const multiplyResult= Multiply(5);
//console.log({ result, result2, multiplyResult });

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}
const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}

const Legolas: Character = {
    name: 'Legolas',
    hp: 50,
    showHp() {
        console.log('Puntos de vida', this.hp);
    }
}

healCharacter(Legolas, 10);
healCharacter(Legolas, 50);

Legolas.showHp();
export{};
export interface QuestionType {
  left: number | string,
  right: number | string,
  operator: string
}

export default class Question<QuestionType> {
  constructor (left: number, right: number, operator: string) {
    this.left = left;
    this.right = right;
    this.operator = operator;
  }

  checkAnswer (answer: string | number | boolean): boolean  {
    let result = null;
    switch (this.operator) {
      case '+':
      result = Math.floor(Math.abs(this.left+this.right));
      break;

      case '-':
      result = Math.floor(Math.abs(this.left-this.right));
      break;

      case '*':
      result = Math.floor(Math.abs(this.left*this.right));
      break;

      case '/':
      result = Math.floor(Math.abs(this.left/this.right));
      break;

      case '=':
      result = Math.floor(Math.abs(this.left===this.rigt));
      break;

      case '>':
      result = (this.left>this.right)==answer;
      break;

      case '<':
      result = (this.left<this.right)==answer;
      break;
    }

    console.log(`result: ${result} : ${answer}`)
    return result==answer;
  }
}
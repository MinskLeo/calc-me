import Question, { QuestionType } from 'App/Constants/Types/Question';
import RandomGenerator from 'App/Helpers/RandomGenerator';
import gameConfig from 'App/Configs/Game';

export default class GameEngine {
  static generateGame (amount: number): Array<QuestionType> {
    const questions: Array<Question> = [];
    
    for(let i=0;i<amount;i++) {
      const left = RandomGenerator.randomMinMax(gameConfig.min, gameConfig.max);
      const right = RandomGenerator.randomMinMax(gameConfig.min, gameConfig.max);
      const operator = RandomGenerator.randomOperator();
      questions[questions.length] = new Question(left, right, operator)
    }

    return questions;
  }

  static generateCongratsWords (): string {
    const { gameOverWords } = gameConfig;

    return gameOverWords[RandomGenerator.randomMinMax(0, gameOverWords.length-1)];
  }
}
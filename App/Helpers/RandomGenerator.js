import gameConfig from 'App/Configs/Game';

export default class RandomGenerator {
  static randomMinMax (min: number, max: number) {
    let rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  }

  static randomOperator () {
    const availableOperators = gameConfig.availableOperators;
    const randNumber = this.randomMinMax(0, availableOperators.length-1);
    return availableOperators[randNumber];
  }
}
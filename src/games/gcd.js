import { cons } from 'hexlet-pairs';
import gameProcess from '../game-process';
import getRandomInt from '../utils';

const gameTask = 'Find the greatest common divisor of given numbers.';
const maxNumber = 100;
const minNumber = 1;

const getGcd = (num1, num2) => {
  const iter = (a, b) => {
    const r = a % b;
    if (r === 0) {
      return b;
    }
    return iter(b, r);
  };
  return num1 > num2 ? iter(num1, num2) : iter(num2, num1);
};

const questionPairGenerator = () => {
  const number1 = getRandomInt(minNumber, maxNumber);
  const number2 = getRandomInt(minNumber, maxNumber);
  const question = `${number1} ${number2}`;
  const answer = String(getGcd(number1, number2));

  const pair = cons(question, answer);
  return pair;
};

export default () => {
  const game = cons(gameTask, questionPairGenerator);
  gameProcess(game);
};

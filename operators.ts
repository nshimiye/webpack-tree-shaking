import { subtract } from 'lodash-es';

export function plus(a:number, b:number) {
  return a + b +'ADD';
}

export function minus(a:number,b:number) {
  return subtract(a,b) + 'MINUS';
}


export class Pair<Type> {
  left: Type;
  right: Type;

  constructor(left: Type, right: Type) {
    this.left = left;
    this.right = right;
  }
}
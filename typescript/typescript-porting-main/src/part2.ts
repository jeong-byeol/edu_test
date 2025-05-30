// Todo: FILLMEIN을 타입에 맞도록 수정하여 오류 메세지가 뜨지 않도록 합니다.

export function sumNumber(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid type detected. Only numbers are allowed.');
  }
  return a + b;
}

export let sumString = (first: string, last: string): string => {
  if (typeof first !== 'string' || typeof last !== 'string') {
    throw new Error('Invalid type detected. Only strings are allowed.');
  }

  return `${first} ${last}`;
};

export function isBoolean(a: boolean, b: boolean): boolean {
  if (typeof a !== 'boolean' || typeof b !== 'boolean') {
    return true;
  } else {
    return false;
  }
}

export function concatArray(arr1: string[], arr2: string[]): string[] {
  return [...arr1, ...arr2];
}

export function mergeObjects(obj1: object, obj2: object): object {
  return { ...obj1, ...obj2 };
}

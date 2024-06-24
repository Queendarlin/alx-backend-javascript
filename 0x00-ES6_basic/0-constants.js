export function taskFirst() {
  // Use const as the value won't change
  const task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  // Use let as the value is being modified
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}

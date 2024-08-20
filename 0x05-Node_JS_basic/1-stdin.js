process.stdin.setEncoding('utf8');

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (chunk) => {
  const name = chunk.trim(); // Convert input to a string and remove any extra spaces/newlines
  process.stdout.write(`Your name is: ${name}\n`);
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});

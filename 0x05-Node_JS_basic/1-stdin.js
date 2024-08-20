const readline = require('readline');

// Create an interface to read input from stdin
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Display the welcome message
rl.question('Welcome to Holberton School, what is your name?\n', (name) => {
  console.log(`Your name is: ${name}`);
  rl.close();
});

// Handle the close event
rl.on('close', () => {
  console.log('This important software is now closing');
});

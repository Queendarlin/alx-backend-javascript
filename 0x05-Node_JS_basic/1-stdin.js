// Display the initial message
console.log('Welcome to Holberton School, what is your name?');

// Listen to the standard input (stdin) data event
process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  console.log(`Your name is: ${name}`);
});

// Listen to the standard input (stdin) end event
process.stdin.on('end', () => {
  console.log('This important software is now closing');
});

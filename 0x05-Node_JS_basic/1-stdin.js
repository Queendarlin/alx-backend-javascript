// Display the welcome message
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Listen for user input on stdin
process.stdin.on('data', (data) => {
  // Trim any extra newline characters from the input
  const name = data.toString().trim();

  // Display the user's name
  process.stdout.write(`Your name is: ${name}\n`);

  // Close stdin and print the closing message
  process.stdin.end(() => {
    process.stdout.write('This important software is now closing\n');
  });
});

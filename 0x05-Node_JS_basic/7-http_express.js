const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 1245;

const countStudents = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1);
      const totalStudents = students.length;
      const fields = {};

      students.forEach((student) => {
        const [firstname, , , field] = student.split(',');
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      });

      const summary = [`Number of students: ${totalStudents}`];
      for (const [field, names] of Object.entries(fields)) {
        summary.push(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }

      resolve(summary.join('\n'));
    });
  });
};

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const filePath = process.argv[2];
  try {
    const studentData = await countStudents(filePath);
    res.send(`This is the list of our students\n${studentData}`);
  } catch (error) {
    res.send('This is the list of our students\nCannot load the database');
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;

const fs = require('fs');

// fs.readFile('example.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });



// try {
//   const data = fs.readFileSync('example.txt', 'utf8');
//   console.log(data);
// } catch (err) {
//   console.error(err);
// }

// fs.writeFile('example.txt', 'Hello, World!', (err) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log('File has been written');
//   });

// fs.appendFile('example.txt', 'Appending this text.', (err) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log('Text has been appended');
//   });

// fs.unlink('example.txt', (err) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log('File has been deleted');
//   });

fs.mkdir('new_directory', (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Directory has been created');
  });
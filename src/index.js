const express = require('express');
const cors = require('cors') 
const app = express();
app.use(cors()); 
const port = 3000; 
app.get('/', (req, res) => {
  res.send('Arithmetic service - Hello World!');
}); 
app.get('/add/:n/:m', (req, res) => {
    res.json(Number(req.params.n) + Number(req.params.m));
  }); 
 
app.listen(port);



// const express = require('express');
// const cors=require('cors');
// const app = express();
// const port = 3000;

// app.use(cors());

// app.get('/add', (req, res) => {
//     const num1 = parseFloat(req.query.num1);
//     const num2 = parseFloat(req.query.num2);

//     if (!isNaN(num1) && !isNaN(num2)) {
//         const sum = num1 + num2;
//         res.send(`Sum of ${num1} and ${num2} is: ${sum}`);
//     } else {
//         res.status(400).send('Invalid input. Please provide valid numbers.');
//     }
// });

// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });
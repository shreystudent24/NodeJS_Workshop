const express = require('express');
const app = express();
app.use(express.json());
let toDoArr = [
  {
    item: 'Make a To-Do app',
    id: 0,
  },
];

app.get('/', function (req, res) {
  res.status(200).json({ data: toDoArr, message: 'Data fetched!' });
});

app.post('/', function (req, res) {
  toDoArr.push(req.body);
  res.status(200).json({ data: toDoArr });
});

app.delete('/', function (req, res) {
  toDoArr = toDoArr.filter(function (el) {
    return req.body.id !== el.id;
  });
  res.status(200).json({ data: toDoArr });
});

app.put('/', function (req, res) {
  toDoArr = toDoArr.filter(function (el) {
    return req.body.id !== el.id;
  });
  toDoArr.push(req.body);
  res.status(200).json({ data: toDoArr });
})

app.listen(3000, () => {
  console.log('Server started at PORT: 3000');
});


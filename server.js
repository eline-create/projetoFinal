const app = require("./src/app");
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`App working in ${PORT} port`);
});


// const app = require("./src/app");
// const port = 5002;

// app.listen(process.env.PORT || port, () => {
//   console.log(`App working in ${PORT} port`);
// });
const fs = require("fs");

// // READING files
// fs.readFile("./texts/blog.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log(errs);
//   }
//   console.log(data);
// });
// console.log("last line");


// WRITING FILES
// fs.writeFile("./texts/blog.txt", "hello liomo", () => {
//   console.log("written");
// });
// fs.writeFile("./texts/blog2.txt", "hello liomo", () => {
//     console.log("written");
//   });



// DIRECTORIES
// if (!fs.existsSync("./assets")) {
//   fs.mkdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("assets created");
//   });
// } else {
//   fs.rmdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("assets deleted");
//   });
// }



//DELETING FILES
// if (fs.existsSync("./texts/deleteme.txt")) {
//   fs.unlink("./texts/deleteme.txt", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("file deletecd");
//   });
// }

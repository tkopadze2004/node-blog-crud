const fs = require("fs");

const readStreams = fs.createReadStream("./texts/blog1.txt", {
  encoding: "utf-8",
});

const writeStreams=fs.createWriteStream('./texts/blog3.txt')

// readStreams.on("data", (chunk) => {
//   console.log("CREATED CHUNK");
//   writeStreams.write('\nNEW CHUNK\n')
//   writeStreams.write(chunk)
//   console.log(chunk);
// });


//piping
readStreams.pipe(writeStreams)
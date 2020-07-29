// const fs = require('fs');

// const breedDetailsFromFile = function(filePath, callback) {
//   console.log('breedDetailsFromFile: Calling readFile...');
//   fs.readFile(filePath, 'utf8', (error, data) => {
//     console.log("In readFile's Callback: it has the data.");
	
// 		if (error) {
// 			// console.log(error);
// 			// cb(err);
// 		};
// 		// cb(null, data);
//   });
// };

// const bombay = breedDetailsFromFile('./data/${breed}.txt', (data)=>{
// 	// if(err) throw err;
// 	// console.log(data)
// 	return data;
// });
// console.log('Return Value: ', bombay);


// asyncBreeds.js
const fs = require('fs');

const readFileCallback = (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    if (!error) {
		console.log("Return value: " + data);
	} else {
		console.log(error);
	}
}

const breedDetailsFromFile = function(breed, callback) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', readFileCallback); // takes 5 seconds to run

 // takes .0000000001 second
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
};

// we try to get the return value

const callback = function(data) {
	console.log('Return Value: ', data);
}

breedDetailsFromFile('Bombay', callback);
 // => will NOT print out details, instead we will see undefined!


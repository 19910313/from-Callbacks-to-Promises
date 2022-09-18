const data = {
  first: 1000,
  second: 2000,
};
// err = new ReferenceError();

function getValueOf(property, callback) {
  setTimeout(() => {
    if (data.hasOwnProperty(property)) {
      return callback(data[property]);
    } else {
      return callback(new ReferenceError("No such property in DATA!"));
    }
  }, 3000);
}
getValueOf("nothing", console.log);
getValueOf("first", console.log);
getValueOf("second", console.log);

getValueOf("first", (result) => {
  if (((err = new ReferenceError()), (data = null))) {
    console.log("Data NOT available: ", result);
    getValueOf("second", (result) => {
      if (((err = new ReferenceError()), (data = null))) {
        console.log("Data NOT available: ", result);
      } else {
        console.log("Succes! Data: ", result);
      }
    });
  } else {
    console.log("Succes! Data: ", result);
  }
});

// (err = new ReferenceError()), (data = null);
// (err = null), (data = data[property]);

// data.hasOwnProperty(property);
// data[property];
// new ReferenceError("No such property in DATA!")
// * Math.random()

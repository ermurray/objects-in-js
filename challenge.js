const listOfReceivedData = [
  {type:"astro", data:"Saturn Data"},
  {type:"bio", data:"Space Potatoes"},
  {type:"physics", data:"Lagrange Points"},
  {type:"bio", data:"OMG Tardigrades"},
  {type:"physics", data:"Material reflectivity"},
  {type:"astro", data:"Mercury is not the hottest"},
]

// Output:

//     {
//       "astro":["Saturn Data","Mercury is not the hottest"],
//       "bio":["Space Potatoes","OMG Tardigrades"],
//       "physics":["Lagrange points", "Material reflectivity"]
//      }

const organizeData = (inputData) => {
 const output = {};

 inputData.forEach((elem) =>{
  if (!output[elem.type]) {
    output[elem.type] = [elem.data];
  } else {
    output[elem.type].push(elem.data);
  }
 })

  return output;
}
// const organizeData = (inputData) => {
//  const output = {};

//  inputData.forEach((elem) =>{
//     !output[elem.type] ? output[elem.type] = [elem.data] : output[elem.type].push(elem.data);
//  })

//   return output;
// }
// const organizeData = (inputData) => {
//  const output = {};

//   for(const elem of inputData) {
//     if (!output[elem.type]) {
//       output[elem.type] = [elem.data];
//     } else {
//       output[elem.type].push(elem.data);
//     }
//   }

//   return output;
// }

console.log(organizeData(listOfReceivedData));

/*
const apartment = {
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
  };
  
  const keys = [];
  const values = [];
  for (const key in apartment){
    keys.push(key);
    values.push(apartment[key]);
    
  }

return values; 
*/




/*
function countProps(object) {
    let propCount = 0;
   const objectAfter = Object.keys(object);
    for (const key of objectAfter) {
      if (object.hasOwnProperty(key)) {
        propCount += 1;
      }
    }
  
    return propCount;
  }
  */




/*
  function countTotalSalary(salaries) {
    let totalSalary = 0;
   
    const salaryArray = Object.values(salaries);
   
   
    for (const item of salaries){
      totalSalary += Object.values(salaries)
    }
  return totalSalary;
  }
  console.log(countTotalSalary({}));
  console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); */
  /*



  const colors = [
    { hex: "#f44336", rgb: "244,67,54" },
    { hex: "#2196f3", rgb: "33,150,243" },
    { hex: "#4caf50", rgb: "76,175,80" },
    { hex: "#ffeb3b", rgb: "255,235,59" },
  ];
  
  const hexColors = [];
  const rgbColors = [];
  for (const color of colors){
    hexColors.push(color.hex);
    rgbColors.push(color.rgb);
  }
  console.log(hexColors);
  console.log(rgbColors); */



/*
  function getProductPrice(productName) {
    const products = [
      { name: "Radar", price: 1300, quantity: 4 },
      { name: "Scanner", price: 2700, quantity: 3 },
      { name: "Droid", price: 400, quantity: 7 },
      { name: "Grip", price: 1200, quantity: 9 },
    ];
    const neededProduct = productName;
   for (const wares of products){
    if (wares.name  === neededProduct ){
     return wares.price;}
     else {return null; }
   }
   
  }
  console.log(getProductPrice("Grip"));
  console.log(getProductPrice("Scanner"));
  console.log(getProductPrice("Droid"));
  console.log(getProductPrice("Radar"));
  console.log(getProductPrice("Engine")); */


  /*
  function getAllPropValues(propName) {
    const products = [
      { name: "Radar", price: 1300, quantity: 4 },
      { name: "Scanner", price: 2700, quantity: 3 },
      { name: "Droid", price: 400, quantity: 7 },
      { name: "Grip", price: 1200, quantity: 9 },
    ];
    const result = []; 
    
    
    for (const prop of products){
      const keys = Object.keys(prop);
      
      if (keys[0] === propName) { result.push(prop.name); }
          else if(keys[1] === propName){result.push(prop.price)}
          else if (keys[2] ===propName) {result.push(prop.quantity)}
    }     
    return result;
  }
  console.log(getAllPropValues("name"));
  console.log(getAllPropValues("quantity"));
  console.log(getAllPropValues("price"));
  console.log(getAllPropValues("category")); 
  */

  

  function getAllPropValues(propName) {
    const products = [
      { name: "Radar", price: 1300, quantity: 4 },
      { name: "Scanner", price: 2700, quantity: 3 },
      { name: "Droid", price: 400, quantity: 7 },
      { name: "Grip", price: 1200, quantity: 9 },
    ];
    const result = []; 
  
    for (const prop of products){
      const keys = Object.keys(prop);
      for (let index = 0; index < keys.length; index++){
        if (keys[index] === propName) { result.push(prop.name); }
        else if(keys[index] === propName){result.push(prop.price)}
        else if (keys[index] ===propName) {result.push(prop.quantity)}
  }     
      }
     
    return result;
  }
  console.log(getAllPropValues("name"));
  console.log(getAllPropValues("quantity"));
  console.log(getAllPropValues("price"));
  console.log(getAllPropValues("category")); 
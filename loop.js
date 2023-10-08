///*** JSON ITREATION USING FOR LOOPS ***///
//**created a json string with a ice-cream plaour theme*/
const Palour_details =
  '{"name":"VioletIcecreams","city":"winterfall","working hours":" FROM 9am-8pm."}';
const palour_menue =
  '{"flavours":["vanila","butterscoth","pista","chocolate","rashberry"],"price":[10,20,30,40,50]}';
const Ice_cream = JSON.parse(Palour_details); //to convert json string into javascript objects //
const Ice_cream_1 = JSON.parse(palour_menue); //to convert json string into javascript arrays //
//**for in is used to display the icecream palaour details*/
(function () {
  details = "";
  for (const x in Ice_cream) {
    details += Ice_cream[x] + ",";
  }

  console.log("For DECLIOUS ICREAMS PLEASE CONTACT :");
  console.log(details);
})();
//**for loop is used in the function to display the plaour menue */
(function () {
  menue = "";
  for (var i = 0; i < Ice_cream_1.flavours.length; i++) {
    menue += "" + Ice_cream_1.flavours[i] + " ,";
  }
  console.log("MY SERVING MENUE IS :");
  console.log(menue);
})();
//**for of is used to display the normal price of the palour*/
(function () {
  for (const x of Ice_cream_1.price) {
    PRICE = Ice_cream_1.price;
  }
  console.log("PRICE FOR EACH SCOOP IS :");
  console.log(PRICE.join("    $     "));
})();
//**for each is used in to double the palour price amount */
let hike_price = [];
Ice_cream_1.price.forEach((element) => {
  hike_price.push(element * 2);
});
console.log("OCTOBER MONTH PRICE:");
console.log(hike_price.join("    $     "));

///***JSON ITERATION USING FOR LOOPS***///

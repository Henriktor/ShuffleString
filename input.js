function inputter() { // get text input from user 

  var x = document.getElementById("myText").value;
  var arr = x.s
plit(' '); // splits user input

  arr = shuffle(arr); //calls shuffle function on split array...

  result = arr.join(' '); // ...and merge it to arr

  document.getElementById("out").innerHTML = result;
}

function shuffle(arr) {
  var copy = [],
    n = arr.length,
    i;

  // While there remain elements to shuffle…
  while (n) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * n--);

    // And move it to the new array.
    copy.push(arr.splice(i, 1)[0]);
  }

  return copy;
}

function sAve() {
   var x = document.getElementById("out").innerText
   console.log("nu ska den spara",out)
   $.ajax ({
     url: "/echo/json/",
     method: "POST",
     contentType: "application/json",
     data: x
   })
}

/*function saveSlot() {

  this.entry = entry //actual string or array from fisher-yates
  this.date = date 

  this.demo = function() {

    console.log("hej " + this.entry)
  }

}
*/
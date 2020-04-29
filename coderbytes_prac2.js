function CommandLine(str) { 

  // code goes here
  var output = [];
  var parts = str.split("=");
  var subparts = [];
  var keys = [];
  var vals = [];
  var i, j = 0;

  for(i = 0; i < parts.length; i++) {
    subparts[i] = parts[i].split(" ")
    for (j = 0; j < subparts[i].length; j++) {
      //console.log(subparts[i][j])
      //console.log("")       
    }
  }

  for(i = 0; i < parts.length - 1; i++) {
    keys[i] = subparts[i][subparts[i].length - 1]
  }
  console.log("")

  for(i = 0; i < parts.length; i++) {
    if (parts[i + 1] != null){
      vals[i] = parts[i + 1].substring(0, parts[i + 1].length - keys[i].length - 1)
      if (i == parts.length - 2) {
        vals[i] = parts[i + 1].substring(0, parts[i].length - keys[i].length)
      }
    }
  }

  output = keys.map(function(i, j) {
    return (i.length + " = " + vals[j].length);
  });
  /*
  for(i = 0; i < keys.length; i++) {
    console.log(keys[i])
    console.log(vals[i])
    console.log(keys[i].length)
    console.log(vals[i].length) 
    console.log("")
  }
  */
  //return str; 
  output2 = output.toString().replace(" [ ", "")
  output3 = output2.replace(/ ] /g, "")
  output4 = output3.replace(/ ' /g, "")
  output5 = output4.replace(/ /g, "")
  output6 = output5.replace(/,/g, " ")
  
  return output6
}
   
// keep this function call here 
console.log(CommandLine(readline()));
function CommandLine(str) { 

    // code goes here
    var output = [];
    var parts = [];
    var subparts = [];
    var keys = [];
    var keys2 = [];
    var keys3 = [];
    var vals = [];
    var vals2 = [];
    var i, j = 0;
    var re = [];
    var re2 = [];
    key_len = 0
    val_len = 0
  
    parts = str.split(/(?<=\=)/);
    
    function my_len(str){
      return (str == null ? 0 : str.length)
    }
  
    for (i = 0; i < parts.length; i++) {
      //console.log(parts[i])
      for (j = 0; j < parts[i].length; j++) {
        if (parts[i][j] == "=") {
          //console.log(parts[i][j-1])
          subparts = parts[i].split(' ')
          keys[i] = " " + subparts[subparts.length - 1] // keys with prior space included        
          keys2[i] = keys[i].substring(1, keys[i].length) // keys without prior space with delim included
          keys3[i] = keys[i].substring(1, keys[i].length - 1) // keys without prior space or delim 
          //console.log(subparts.length)
          /*
          if (subparts.length > 1) {
            parts[i].pop()
          }
          */
          //console.log(keys[i], keys[i].length)
          //console.log(keys2[i], keys2[i].length)
        }
      }    
    }
  
    //console.log("")
  
    for (i = 0; i < keys.length; i++) {
      re[i] = new RegExp(keys[i], "g") // create REs with keys (including surrounding space)
      re2[i] = new RegExp(keys2[i], "g") // create REs with keys (not including surrounding space)
    }
  
    for (i = 0; i < parts.length; i++) {
      if (i == 0) {
        vals[i] = parts[i].replace(re2[i], " ")
      } 
      else {
        vals[i] = parts[i].replace(re[i], "")
      }
      //console.log(vals[i], my_len(vals[i]))
    }
  
    
    for (i = 0; i < vals.length + 1; i++) {
      if (vals[i] == null) {
        vals2[i] = null
      } else {
        vals2[i] = vals[i + 1]
      }
    }
  
    output = keys3.map(function(i, j) {
      return (my_len(i) + " = " + my_len(vals2[j]));
    });
  
    output2 = output.toString().replace(" [ ", "")
    output3 = output2.replace(/ ] /g, "")
    output4 = output3.replace(/ ' /g, "")
    output5 = output4.replace(/ /g, "")
    output6 = output5.replace(/,/g, " ")
    
    return output6
    
    //return str; 
  }
     
  // keep this function call here 
  console.log(CommandLine(readline()));
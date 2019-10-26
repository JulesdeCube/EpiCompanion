window.addEventListener("load", (event) => {
  getICS(1, "A2", "2", (file) => {
      
    console.log(file);
  });

  function convertICS(file) {
    let lines = file.split(RegExp("[\n\r]+"));


    let instructions = [];
    lines.forEach(line => {
      let instuction = line.replace(RegExp("^[ ]+"), "");
      if (instuction === line) {
        instructions.push(instuction);
      } else {
        instructions[instructions.length - 1] += instuction;
      }
    });

    
    function ObjGen(array, start, block) {
      let obj = {};
      for (let i = start; i < array.length; i++) { const instruction = array[i];
        
        let type = instruction.match(RegExp("^[A-Z-]+[:;]"))[0].slice(0, -1);
        let value = instruction.replace(RegExp("^[A-Z-]+[:;]"),"");
        
        if (type === "BEGIN") {
          if (obj[value] === undefined) { obj[value] = []; }
          let sub = ObjGen(array,i+1, value);
          obj[value].push(sub.obj);
          i = sub.i;
        } else if (type === "END") {
          if (value === block) {
            return {obj, i};
          } else {
            console.error(`The block ${block} was not finish but the block ${value} finish here.`);
          }
        } else {
          obj[type] = value;
        }
      }
      return {obj, i:array.length};
    }
        
      
    return ObjGen(instructions, 0, "").obj; 
  }
  
  function getICS(Semester, Class, Group, callback) {
    getFile(`https://ichronos.net/feed/INFOS${Semester}${Class}-${Group}.ics`, (file) => {
      callback(convertICS(file));
    });
  }

  function getFile(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = function (e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          callback(xhr.responseText);
        } else {
          console.error(xhr.statusText);
        }
      }
    };
    xhr.onerror = function (e) {
      console.error(xhr.statusText);
    };
    xhr.send(null);
  }
  
  
});
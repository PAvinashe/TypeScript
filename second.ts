

const isStringEqual = (str1: string, str2: string) :Boolean => {
    if(str1===str2){
        return true;
    }
    return false;
}

isStringEqual("yes", "Yes");

//second program

interface IisReverse{
    str2: string,
}


const isReverse = (str: string) : string =>{
    let str2 = "";
    for(let i=str.length-1; i>=0; i--){
       str2= str2 +str[i]
      
    }
    return str2;
  }
  console.log(isReverse("kjsa"));
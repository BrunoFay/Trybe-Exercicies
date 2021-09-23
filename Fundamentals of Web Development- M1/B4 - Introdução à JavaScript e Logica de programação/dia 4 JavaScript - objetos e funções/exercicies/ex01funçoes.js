function testPalindromo(str) {
   let reverse= str.split("").reverse().join("")
    if(str === reverse){
        return true;
    }
    else{
        return false;
    }
   
}
console.log(testPalindromo("arara"));

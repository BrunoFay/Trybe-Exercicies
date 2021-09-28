function findLongestWord(str) {
    //split string into an array
    const splStrArray = str.split(" ");
  
    //order the length of words in the array from highest to lowest using the sort array method 
    const orderedArray = splStrArray.sort((a, b) => b.length - a.length)
  
    //pick out the longest which would be the first item in the array with index 0
    const longestWord2 = orderedArray[0]
    return longestWord2
  
  }
  
  console.log(findLongestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));

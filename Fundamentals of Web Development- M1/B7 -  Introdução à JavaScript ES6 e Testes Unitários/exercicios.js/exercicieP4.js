const learnReplace = string => string.replace('x', 'bebetin');
console.log(learnReplace("Tryber x aqui!"));

let mySkills = ['linux', 'hmtl', 'css', 'javaScript', 'bootstrap'];
function fusionStrings(string) { string.sort(); return `${learnReplace("Tryber x aqui, ")}minhas princiais skills são ${string}` };
console.log(fusionStrings(mySkills));
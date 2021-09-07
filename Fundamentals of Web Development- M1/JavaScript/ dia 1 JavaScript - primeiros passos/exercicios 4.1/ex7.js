const notaDoAluno = 80;
if(notaDoAluno >= 90 && notaDoAluno < 100){
    console.log("a");
}
else if(notaDoAluno >= 80){
    console.log("b");
}
else if (notaDoAluno >= 70){
    console.log("c");
}
else if (notaDoAluno >= 60){
    console.log("d");
}
else if (notaDoAluno >= 50){
    console.log("e");
}
else if (notaDoAluno < 50 && notaDoAluno > 0){
    console.log("f");
}
else{
    console.log("error");
}
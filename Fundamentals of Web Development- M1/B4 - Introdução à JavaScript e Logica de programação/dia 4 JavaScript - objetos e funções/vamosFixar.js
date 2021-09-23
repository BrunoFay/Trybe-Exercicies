

let competidoraMarta = {
    name: "marta",
    lastName: "silva" ,
    age: 34,
    medals: {
        golden :2,
        silver :3 
    }
};
competidoraMarta["fullName"] = competidoraMarta.name + " " + competidoraMarta.lastName;
competidoraMarta["massage"] = "a competidora " + competidoraMarta.fullName+ " tem " + competidoraMarta.age+ " de idade"
console.log(competidoraMarta.massage);

competidoraMarta["bestInTheWorld"]= [2006, 2007, 2008, 2009, 2010, 2018]
competidoraMarta["numeroDeVezesCamp"]=competidoraMarta.bestInTheWorld.length;
console.log("a jogadora " + competidoraMarta.fullName+" foi eleita a melhor do mundo por "+ 
competidoraMarta["numeroDeVezesCamp"] + " anos");

console.log("a jogadora possui " + competidoraMarta.medals.golden + " medalhas de ouro e " + competidoraMarta.medals.silver + " medalhas de prata");
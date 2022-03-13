const fs = require('fs').promises;
const arraysimpsonsFile= JSON.parse(simpsonsFile) 
async function getSimpsomById(id){
   const checkSimpsonsId =arraysimpsonsFile.filter((simp)=>simp.id == id)
   if(!checkSimpsonsId) throw new Error('id não encontrado')
   return console.log(checkSimpsonsId[0].name);
}
async function main(){
  try{
   await getSimpsomById(1)
  }
  catch(e){
    console.log(e.message);
  }

}
main() 
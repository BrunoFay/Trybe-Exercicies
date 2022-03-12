const {function:fun}=require("./exe1.js")

try{
  const ramdomNum=()=> Math.floor(Math.random() * 100 + 1) 
  fun(ramdomNum(),ramdomNum(),ramdomNum())
  

}
catch(e){
  console.log(e.message);
}
// function filter con array 
const numbers = [21,15,22,16];

const responseNumbers = numbers.filter((dato)=>{
    if(dato >= 21){
        return true;
    }else{
        return false;
    }
})

console.log(responseNumbers)

//funcion filter con un array con objetos

const persons = [{edad: 21},{edad: 15},{edad: 22},{edad: 16}];

const responsePersons = persons.filter((dato)=>{
    if(dato.edad >= 21){
        return true;
    }else{
        return false;
    }
})


console.log(responsePersons);


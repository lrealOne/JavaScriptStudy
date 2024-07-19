// console.log(2323);

// var contador = 0;

// while(contador <= 51){
//     if (contador % 3 == 0 && contador % 5 == 0){
//         console.log('tik tok', contador);
//     }else if(contador % 3 ==0){
//         console.log('tik', contador);
//     }else if(contador % 5 == 0){
//         console.log('tok', contador);
//     }
//     ++contador;

// let i = 10
// let o = 9

// if (!i == o){
//     console.log('Opaaaa')
// }

// for(i = 0; i <= 5; i++){
//     for(j = 5; j <= 10; j++){
        
//     }
//     console.log(j, i) 
// }

// for (var i= 0; i <= 50; i++){
//     if (i % 2 === 0 && i % 3 === 0){
//         console.log(i, 'tiktok');
//     }else if(i % 2 === 0){
//         console.log(i, 'tik');
//     }else if (i % 3 === 0) {
//         console.log(i, 'tok')
//     }
// }

// function soma(lista){
//     let final = 0;
//     for (let p = 0; p < lista.lenth; p++){
//         final = final + lista[p];
//     }
//     return final;
// }

// const numberlist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(soma(numberlist));

// cbfunction

// const setAge = (age, cb) => {
//     cb(age);
//   };
  
// function showName(nome) {
//     console.log("nome: ", nome);
// }
  
// setAge('Luan', showName);

// function nomeFuncao(parametro, cb){
//     cb(parametro);
// }

// function nomeParametro(nome){
//     console.log(nome, ' é seu nome');
// }

// nomeFuncao('Luan', nomeParametro);

// get and set
// let employees = [
//     {
//         name: 'Luan',
//         recharge:'CTO'
//     },
//     {
//         name: 'Rafael',
//         recharge:'Homeless'
//     },
//     {
//         name: 'Ana Julia',
//         recharge:'CEO'
//     },
// ];

// let alter =  {
//     position: 0,
//     get currentPosition(){
//         return employees[this.position];
//     },
//     set currentPosition(position){
//         this.position = position;
//     },
//     nextPosition(){
//         ++this.position;
//     },
//     prevPosition(){
//         --this.position;
//     }
// };   


// alter.currentPosition = 2;
// console.log(alter.currentPosition)
    
// let userFunction = {
//     name: 'Luan',
//     age: 21,
//     sex: 'M',
//     flag: 'Brazil'
// }

// let props = Object.keys(userFunction);
// console.log(props);

// for (let i = 0; i < props.length; i++){
//     console.log(userFunction[props[i]], i);
// };

// for of

// for (let prop of props) {
//     console.log(prop)
// }

// for (let prop2 in userFunction){
//     console.log(userFunction[prop2])
// }


const pessoa = () => {
    let impostoDeRenda = (valor) => {
        return .25 * valor;
    }

    const calcImpostoanalista01 = () => {
        let salario = 4320;
        return impostoDeRenda(salario);
    };

    const calcImpostoanalista02 = () => {
        let salario = 7682;
        return impostoDeRenda(salario);
    }

}

console.log(calcImpostoanalista02());
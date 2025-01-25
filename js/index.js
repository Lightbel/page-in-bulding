
    "use strict"

// var cat = {
//     sound: "Miau",
//     speak: function(){
//         alert(this.sound)
//     }
// }

// var dog = {
//     sound: "Au au",
//     speak: function(){
//         alert(this.sound)
//     }
// }

// dog.speak();
// cat.speak();


// let soundGeneric = function (){
//     alert(this.sound)
// }

// var cat = {
//     sound: "Miau",
//     speak: soundGeneric
// }


// var dog = {
//     sound: "AuAu",
//     speak: soundGeneric
// }

// let sound = soundGeneric.bind(dog)

// sound()


                                // Método callBack
// let people = ['marcos', ' laura', ' antonio' ]

// function insertNewName (n, call){
//     setTimeout(()=>{
//         people.push(n);
//         call();
//     })
// }

// function listPeople(){
//     alert(people);
// }

// insertNewName(" Igor", listPeople);




                                // Método Promises


// let people = ["luan"," claudio"," alberto"]

// function insertNewName(n){
//     let promo = new Promise(function(ok, not){
//         setTimeout(()=>{
//             people.push(n);
//             let error = false;
//             if(!error){
//                 ok();
//             }
//             else{
//                 not({msg: "Error random"})
//             }
//         }, 1000)
//     })
//     return promo;
// }

// function insertPeople(){
//     alert(people);
// }



                    // Async and await add function async

// async function exe(){
//     await insertNewName(" Igor");
//     insertPeople();
// };

// exe().catch((error)=>{
//     console.log(error.msg)
// })


                            // Filter function

// function novoAluno(nome,idade){
//     return {nome,idade};
// };

// let alunos = [
//     novoAluno("Marcos", 45),
//     novoAluno("Laura", 35),
//     novoAluno("Anna", 23),
//     novoAluno("Amanda", 18)
// ]

// function moreThan30(aluno){
//     return aluno.idade > 30;
// }

// let alunosComMaisDeTrinta = alunos.filter(moreThan30)
// console.log(alunosComMaisDeTrinta)



                        // Fuction filter, feita na "unha"

// function filtro(callBack){
//     let alunosFiltrados = [];
//     for(let aluno of this){
//         if(callBack(aluno)){
//             alunosFiltrados.push(aluno)
//         }
//     }
//     return alunosFiltrados
// }

// alunos.filtro = filtro;

// console.log(alunos.filtro(moreThan30))



                    //    Function filter JS

// let alunosFiltrados = alunos.filter(moreThan30)

// console.log((alunosFiltrados))



                    //   Function "map()"

//     function newName(name, age){
//         return {name,age} 
//     }

//     let students = [
//         newName('Marcos', 46),
//         newName('Antonia', 92),
//         newName('Annie', 20),
//         newName('Alexa', 25)
//     ]

//     function camada2(student){
//         return student.name + " is " + student.age + " years old"
//     }

// console.log(students.map(camada2)) 

                // Tentando fazer um "Reduce" manualmente. 

//  function newStudent(nome, idade){
//     return {nome, idade};
//  }; 

//  let students = [
//     newStudent("Marcia",23),
//     newStudent(" Carlos",25),
//     newStudent(" Ana",30),
//     newStudent(" Kale",21)
//  ];

//  function getAllStudents(total, student){
//     return total + student.idade;
//  };

   
//     function somatoria(alunos){
//         let soma = 0;
//         for( let aluno of alunos){
//             soma += aluno.idade
//         } 
//         return soma;
//      } 
    
//      function somatoria2(alunos){
//         let soma = " ";
//         for( let aluno of alunos){
//             soma += aluno.nome
//         } 
//         return soma;
//      } 
    


// let idaderesca = somatoria(students);
// let idaderesca1 = somatoria2(students);

//  console.log(idaderesca1) 



//  function forSafadinho(alunos){
//     let idades = [];
//     for (let aluno of alunos){
//         idades.push(aluno.idade)
//     }
//     return idades
//  }

// let idades = forSafadinho(students);

//  console.log(idades) 


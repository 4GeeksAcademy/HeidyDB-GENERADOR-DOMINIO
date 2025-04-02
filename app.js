let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

let ext= ['.com', '.es', '.us', '.io'];

function generadorDominio(pronoun, adj, noun, ext){
    for (let i=0; i < pronoun.length; i++){

        for (let j=0; j < adj.length; j++ ){

         for (let z=0; z < noun.length; z++){

            for (let k= 0; k < ext.length; k++){
             console.log(pronoun[i].concat(adj[j]).concat(noun[z]).concat(ext[k]));
         
       }
     }
  }
}

}

generadorDominio(pronoun, adj, noun, ext);

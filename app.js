const ppl_result = document.getElementById('ppl_result')
const ppl_btn = document.getElementById('ppl_btn')

ppl_btn.addEventListener('click', getRandomPpl)

function getRandomPpl(){
    fetch('https://swapi.dev/api/people/')
    .then(res=> res.json())
    .then(data=>{
        
       const acak = Math.floor(Math.random()*9) + 0;
       const object = data.results[acak];
       
       ppl_result.innerHTML = `Name: ${object.name} <br> Height: ${object.height} <br> Mass: ${object.mass} <br> Hair color: ${object.hair_color}
       <br> Skin color: ${object.skin_color} <br> Eye color: ${object.eye_color} <br> Birth year: ${object.birth_year} 
       <br> Gender: ${object.gender}`;
   
    });
}
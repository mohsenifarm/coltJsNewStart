//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

let container = document.querySelector('.container');
// console.log(container)
let i = 1;
while(i < 151) {
    let img = document.createElement('img');
    let pokemon = document.createElement('div');
    pokemon.classList.add('pokemon')
    let lable = document.createElement('span');
    img.setAttribute('src',`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`);
    lable.innerText =`#${i}`
    pokemon.appendChild(img)
    pokemon.appendChild(lable)

    container.appendChild(pokemon)

    i++
}

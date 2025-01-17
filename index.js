function background(url, left, bottom, height, width){
    for(let h = 0; h < height; h++){
        for(let w = 0; w < width; w++){
            newImage(url, left + w*200, bottom+h*200)
        }
    }
}

function newImage(url, left, bottom){
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left + 'px' 
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}

function newItem(url, left, bottom){
    let object = newImage(url, left, bottom)

object.addEventListener('dblclick', function(){
    object.remove()
})
}

let horizon = window.innerHeight / 2.75
let heightOfSky = window.innerHeight-horizon
let heightOfGrass = horizon

background('assets/sky.png', 0, horizon, window.innerWidth/200, heightOfSky/200)
background('assets/grass.png', 0, 0, window.innerWidth/200, heightOfGrass/200)

newImage('assets/green-character.gif', '100', '100')
newImage('assets/pine-tree.png', '450', '200')
newImage('assets/tree.png', '200', '300')
newImage('assets/pillar.png', '350', '100')
newImage('assets/crate.png', '150', '200')
newImage('assets/well.png', '500', '425')

newItem('assets/sword.png', '500', '405')
newItem('assets/shield.png', '165', '185')
newItem('assets/staff.png', '600', '100')



// let sword = document.createElement('img')
// sword.src = 'assets/sword.png'
// sword.style.position = 'fixed'
// sword.style.left = '500px'
// sword.style.bottom = '405px'
// document.body.append(sword)



// function newItem(){

// }



//let greenCharacter = document.createElement('img')
//greenCharacter.src = 'assets/green-character.gif'
//greenCharacter.style.position = 'fixed'
//greenCharacter.style.left = '100px'
//greenCharacter.style.bottom = '100px'
//document.body.append(greenCharacter)

// let pineTree = document.createElement('img')
// pineTree.src = 'assets/pine-tree.png'
// pineTree.style.position = 'fixed'
// pineTree.style.left = '450px'
// pineTree.style.bottom = '200px'
// document.body.append(pineTree)


function changeColor(){
    let chaneColor = document.getElementById("changeColor")
    let hexcode = document.getElementById("hexcode")
    let color = document.getElementById("color")
    let back = document.getElementById("back")
    let colorGenerate = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
    let rendomColor = ""
    for(var i=0; i<6; i++){
        colorIndex = Math.floor(Math.random() * colorGenerate.length)
        rendomColor += colorGenerate[colorIndex]
        
    }

    hexcode.innerHTML = "#" + rendomColor
    chaneColor.style.backgroundColor = "#" +rendomColor

    if(hexcode.innerHTML == "#D7F7DE"){
        color.style.backgroundColor = "#000"
        back.style.color = "#fff"

    }


    

}
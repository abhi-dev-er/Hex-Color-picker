const Change_Color= ()=>{
    const Random_Code = Math.floor(Math.random() * 16777215);
    const RandomCode = "#" + Random_Code.toString(16);
    document.body.style.backgroundColor =RandomCode;
    document.getElementById('Color-Code').innerHTML = RandomCode;
}

document.getElementById('btn').addEventListener('click', Change_Color);




Change_Color();








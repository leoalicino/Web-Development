function getDati(){
    var consumo = document.getElementById("consumo").value;
    var kilometri = document.getElementById("kilometri").value;
    var costo = document.getElementById("costo").value;
    controlloDati(consumo,kilometri,costo);
  }

function controlloDati(consumo,kilometri,costo){
    if(consumo<0 && kilometri<0 && costo<0){
        document.getElementById('risultato').innerHTML = "Inserisci dati appropriati!"; 

    }if(consumo>0 && kilometri>0 && costo>0){
        CalcolaCosto(consumo,kilometri,costo);
    }else{
        document.getElementById('risultato').innerHTML = "Inserisci dati appropriati!";       
    }
    }

  
  
function CalcolaCosto(consumo, kilometri, costo){
    var risultato= kilometri/100*consumo*costo; 
    risultato=risultato.toFixed(2);
    document.getElementById('risultato').innerHTML = "<b>"+risultato+" Euro</b>"; 
}

if(document.getElementById("option-benzina").checked){
    alert("ciao");
    document.getElementById('risultato').innerHTML = 1.691; 
}else if(document.getElementById("option-gpl").checked){
    document.getElementById('costo').innerHTML = 0,787; 
}else{
    document.getElementById('costo').innerHTML = 1.800; 
}
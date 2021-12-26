function myFunction(){
    console.log("hello World");
}

var kota1 = ["Makassar", "Pare Pare", "Palopo", "Sungguminasa","Soppeng"]; //Sulsel
var kota2 = ["Majene", "Mamasa", "Mamuju", "Pasangkayu", "Mandar"]; //Sulbar
var kota3 = ["Manado", "Bitung", "Tomohon", "Kotamobagu", "Tondano"] //Sultar
var kota4 = ["Palu", "Luwuk", "Kolonodale", "Banawa", "Poso"] //sulteng


function escapeValue(){
    var prov1 = document.getElementById("Provinsi").value;
    var selectKota = "";
    if(prov1 == "sul-sel"){
        selectKota += "<option> -- Pilih Kota Anda --</option>";
        for(var i=0; i<=4; i++){
            selectKota += "<option";
            selectKota += " value = " + kota1[i] + ">";
            selectKota += kota1[i];
            selectKota += "</option>";
        }

        document.getElementById("Kota").innerHTML = selectKota;
    }
    else if (prov1 == "sul-bar"){
        selectKota += "<option> -- Pilih Kota Anda --</option>";
        for(var i=0; i<=4; i++){
            selectKota += "<option";
            selectKota += " value = " + kota2[i] + ">";
            selectKota += kota2[i];
            selectKota += "</option>";
        }

        document.getElementById("Kota").innerHTML = selectKota;
    }
    else if(prov1 == "sul-lut"){
        selectKota += "<option> -- Pilih Kota Anda --</option>";
        for(var i=0; i<=4; i++){
            selectKota += "<option";
            selectKota += " value = " + kota3[i] + ">";
            selectKota += kota3[i];
            selectKota += "</option>";
        }

        document.getElementById("Kota").innerHTML = selectKota;
    }
    else if(prov1 == "sul-teng"){
        selectKota += "<option> -- Pilih Kota Anda --</option>";
        for(var i=0; i<=4; i++){
            selectKota += "<option";
            selectKota += " value = " + kota4[i] + ">";
            selectKota += kota4[i];
            selectKota += "</option>";
        }

        document.getElementById("Kota").innerHTML = selectKota;
    }
    else{
        console.log("Undifined Input");
    }
}

function escapeCity(){
    var tempProv = document.getElementById("Provinsi").value; 
    var tempKota = document.getElementById("Kota").value;
    document.getElementById("head").innerHTML = (" Pada Provinsi " + changeName(tempProv) + " Ada Kota " + tempKota);

}

function changeName(x){
    if(x == "sul-sel"){
        return "Sulawesi Selatan"; 
    }
    else if(x == "sul-bar"){
        return "Sulawesi Barat"; 
    }
    else if(x == "sul-lut"){
        return "Sulawesi Utara"; 
    }
    else if(x == "sul-teng"){
        return "Sulawesi Tengah"; 
    }
    else{
        return "Itu";
    }
}

function darkModa(){
    const change = document.body;
    change.classList.toggle("dark");
}




/*
function darkKing(){
    const cssid = document.getElementById("blink");
    const buttonx = document.getElementById("hitam");

    if(buttonx.innerHTML == "Dark Mode"){
        cssid.setAttribute("href", "darkmode.css");
        buttonx.innerHTML = "Light Mode";
        }
}
*/

/*
document.getElementById("hitam").addEventListener('click', function(){
    const cssid = document.getElementById("blink");
    const buttonx = document.getElementById("hitam");

    if(buttonx.innerHTML == 'Dark Mode'){
        cssid.setAttribute('href', '/darkmode.css');
        buttonx.innerHTML = "Light Mode";
    }

});
*/
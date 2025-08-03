let DataArr = [];
let today = new Date();
let day = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear(); 
let DateNow = `${day.toString().padStart(2, '0')}-${month.toString().padStart(2, '0')}-${year}`;
let total = 0;
let smd = 0;
let ld = 0;
let fd = 0;
let Genertor = false ;

function GETData(){
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://script.google.com/macros/s/AKfycbyngPTb8PF-d2WcP7GhGvcyXzZMRvILww5EvizM-68Qif3ekgwZsKPVN9aVVkvyTSsAXg/exec", true);
xhr.onload = function () {
    if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        DataArr = Array.from(data);
        total = DataArr.length;
        for(let i = 0; i < DataArr.length; i++){
            if(DataArr[i].DesignCtgry == "Social media"){
                smd++;
            }
            if(DataArr[i].DesignCtgry == "Flyers"){
                fd++;
            }
            if(DataArr[i].DesignCtgry == "Logo"){
                ld++;
            }
        }
        AddDataToScreen();
    } else {
        //console.error("Request failed. Status:", xhr.status);
    }
};
xhr.send(); 
}

GETData();

function AddDataToScreen(){
    document.querySelector(".head .total span").innerHTML = total;
    document.querySelector(".head .social span").innerHTML = smd;
    document.querySelector(".head .logo span").innerHTML = ld;
    document.querySelector(".head .flyers span").innerHTML = fd;
    for(let i = 0; i < DataArr.length; i++){
        let div = document.createElement("div");
        div.className="des-bar";
        div.setAttribute("id",`${i}`);
        div.setAttribute("onclick",`opendesign(this.id)`);
        div.innerHTML=`
            <div class="num">${i+1}</div>
            <div class="tit">Title: <span>${DataArr[i].DesignTitle}</span></div>
            <div class="tit">Category: <span>${DataArr[i].DesignCtgry}</span></div>
            <div class="tit">Date Modified: <span>${DataArr[i].DateModified}</span></div>`
        document.querySelector(".homepage").appendChild(div)
    }
}

function opendesign(index){
    document.getElementById("num-fld").value = (Number(index) + 1);
    document.getElementById("title-fld").value = DataArr[index].DesignTitle;
    document.getElementById("ctgry-fld").value = DataArr[index].DesignCtgry;
    document.getElementById("url-fld").value = DataArr[index].DesignURL;
    document.getElementById("date-fld").value = DataArr[index].DateModified;
    document.querySelector(".main .menu-bar .design-form img").setAttribute("src",`${document.getElementById("url-fld").value}`)
}

document.getElementById("url-fld").addEventListener("input",function(){
    document.querySelector(".main .menu-bar .design-form img").setAttribute("src",`${document.getElementById("url-fld").value}`)
});

function OpenDesignSheet(){ window.open('https://example.com', '_blank') }

function OpenGenerate(){
    if(!Genertor){
        document.querySelector(".gen-link").classList.add("show");
        Genertor = true;
    }else{
        document.querySelector(".gen-link").classList.remove("show");
        Genertor = false;
    }
}
function Generate(){
    const inp = document.getElementById("drivelink-fld").value;
    const match = inp.match(/\/d\/(.*?)\//);
    if (match && match[1]) {
        const fileId = match[1];
        const directUrl = `https://lh3.googleusercontent.com/u/0/d/${fileId}=w1920-h1080`;
        document.getElementById("url-fld").value = directUrl;
        document.querySelector(".main .menu-bar .design-form img").setAttribute("src",`${document.getElementById("url-fld").value}`);
    }
    else {
        alert("Unsupported link");
    }
    document.getElementById("drivelink-fld").value = "";
    document.getElementById("num-fld").value = "";
    document.getElementById("title-fld").value = "";
    document.getElementById("ctgry-fld").value = "";
    document.getElementById("date-fld").value = "";
}

document.getElementById("catgry").addEventListener("input",function(){
    var a = document.getElementById("catgry").value;
    document.querySelector(".homepage").innerHTML="";
    if(a == "All"){
        AddDataToScreen();
    }
    if(a =="Social media"){
        for(let i = 0; i < DataArr.length; i++){
            if( DataArr[i].DesignCtgry == a){
                let div = document.createElement("div");
                div.className="des-bar";
                div.setAttribute("id",`${i}`);
                div.setAttribute("onclick",`opendesign(this.id)`);
                div.innerHTML=`
                    <div class="num">${i+1}</div>
                    <div class="tit">Title: <span>${DataArr[i].DesignTitle}</span></div>
                    <div class="tit">Category: <span>${DataArr[i].DesignCtgry}</span></div>
                    <div class="tit">Date Modified: <span>${DataArr[i].DateModified}</span></div>`;
                document.querySelector(".homepage").appendChild(div);
            }
        }
    }
    if(a =="Logo"){
        for(let i = 0; i < DataArr.length; i++){
            if( DataArr[i].DesignCtgry == a){
                let div = document.createElement("div");
                div.className="des-bar";
                div.setAttribute("id",`${i}`);
                div.setAttribute("onclick",`opendesign(this.id)`);
                div.innerHTML=`
                    <div class="num">${i+1}</div>
                    <div class="tit">Title: <span>${DataArr[i].DesignTitle}</span></div>
                    <div class="tit">Category: <span>${DataArr[i].DesignCtgry}</span></div>
                    <div class="tit">Date Modified: <span>${DataArr[i].DateModified}</span></div>`;
                document.querySelector(".homepage").appendChild(div);
            }
        }
    }
    if(a =="Flyers"){
        for(let i = 0; i < DataArr.length; i++){
            if( DataArr[i].DesignCtgry == a){
                let div = document.createElement("div");
                div.className="des-bar";
                div.setAttribute("id",`${i}`);
                div.setAttribute("onclick",`opendesign(this.id)`);
                div.innerHTML=`
                    <div class="num">${i+1}</div>
                    <div class="tit">Title: <span>${DataArr[i].DesignTitle}</span></div>
                    <div class="tit">Category: <span>${DataArr[i].DesignCtgry}</span></div>
                    <div class="tit">Date Modified: <span>${DataArr[i].DateModified}</span></div>`;
                document.querySelector(".homepage").appendChild(div);
            }
        }
    }
})

/*   Æ   */
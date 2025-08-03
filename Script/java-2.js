let dataaa = []; 
let DataArr ;
let today = new Date();
let day = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear(); 
let DateNow = `${day.toString().padStart(2, '0')}-${month.toString().padStart(2, '0')}-${year}`;


const xhr = new XMLHttpRequest();
xhr.open("GET", "https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLjanmuKtskg7njnZvNndjOBtxmXG0Dx99DVDmkJqVRJHBhmXnjs51Ax1CCcMckLgWz5o73xr_H96DPCXcea7u8tuM126kkjRjSHsUA5p1khQxUWfVbHlPMhogEI_VBkCARpVDe1i97ag_y33MnLhcJWKLACjSQEV_BXG1DM5TzgvMYdtHzs8-HbQCasEWvNvIRJudg8nFCTHrTjcQblUdPNZ-SbBusTAxckzo-QUYdAREsDKpFdMZSbCKbhFyGuYgMq2NLiLkzTJzERXGKbqg2Q_B7lkLQKTsQJghmL&lib=MkrRJvITPZxS_oP5Su5epmftVeO-hctRV", true);
xhr.onload = function () {
    if (xhr.status === 200) {
        document.querySelector(".wrapper").classList.remove("show");
        const data = JSON.parse(xhr.responseText);
        dataaa = Array.from(data);
        AddDataToScreen();
    }
};
xhr.send();


function AddDataToScreen(){
    DataArr = dataaa.reverse()
    for(let i = 0; i < DataArr.length; i++){
        let div = document.createElement("div");
        div.className="w-card";
        div.setAttribute("ondblclick","OpenPreview(this.id)")
        div.id=`${i}`;
        var desdate = DataArr[i].DateModified.slice(0, 10)
        if(String(desdate) == String(DateNow)){
            var div2 =document.createElement("div")
            div2.className="new";
            div2.innerHTML="NEW";
            div.appendChild(div2);
        }
        div.innerHTML+=`
        <img src="${DataArr[i].DesignURL}">
        <div class="info">
            <span class="tit">${DataArr[i].DesignTitle}</span>
            <span class="ctgry">${DataArr[i].DesignCtgry}</span>
        </div>
        `
        document.querySelector(".main .main-cont .main-w-cont").appendChild(div)
    }
}
function OpenPreview(index){
    let section =document.createElement("section");
    section.className="prev";
    section.innerHTML= `
        <img src="${DataArr[index].DesignURL}" alt="">
        <div><i class="fa-brands fa-x" onclick="ClosePrev()"></i></div>
    `
    document.querySelector("body").appendChild(section)
}
function ClosePrev(){
    document.querySelector(".prev").remove();
}




/*   Æ   */
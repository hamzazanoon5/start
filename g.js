const input = document.querySelector("input");
const downloadBtn = document.querySelector("button");

downloadBtn.addEventListener("click", e => {
    downloadBtn.innerText = "Downloading file ...";
    e.preventDefault();
    fetchFile(input.value);
});

function fetchFile(url) {
   
    fetch(url).then(res => res.blob()).then(file => {

       let tempUrl = URL.createObjectURL(file);    
       let atag = document.createElement("a");
       atag.href = tempUrl;
       atag.download = url.replace(/^.*[\\\/]/,'');
       document.body.appendChild(atag);
       atag.click();
       atag.remove();
       URL.revokeObjectURL(tempUrl);
       downloadBtn.innerText = "Downloading file ...";
    }).catch(() => {
        downloadBtn.innerText = "Downloading file ...";
        alert("File to download file!");
    });
}; 
const createPostBtn = document.getElementById('createPostBtn');
function AjaxGet(url){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = () => {
        if( this.status == 200 ){
            console.log(this.responseText);
        }
    }
    xhr.onerror = () => {
        console.log('Request Error...');
    }
    xhr.send();
}
if(createPostBtn){
    createPostBtn.addEventListener('click', ()=>{
        let form = document.getElementById('createPost');
        form.style.display = 'block';
    });
}

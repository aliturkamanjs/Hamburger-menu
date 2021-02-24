window.onload = function(){
    let container = document.getElementById('container')
    container.addEventListener('click' , function(){
        if(!container.classList.contains('play')){
            container.classList.add('play')
        } else {
            container.classList.remove('play')
        }
    })
}

var i = 0;
const task = document.querySelector('input');
const btn = document.querySelector('button');
const div = document.querySelector('div.todos');

btn.addEventListener('click',function () {
    // console.log(task.value)
    let tag = document.createElement('p');
    tag.setAttribute("key", String(i));
    tag.innerHTML=task.value;
    div.appendChild(tag);

    tag.onclick = function (){
        // console.log(tag)
        div.removeChild(tag)
    }
    i++
})
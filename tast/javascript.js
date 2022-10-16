

var el = document.getElementsByTagName('a')[0];


function extend(e){
    e.preventDefault();
    if (el.className == 'close task_control') {
        var elNote = document.getElementById('note_close');
    elNote.innerHTML  = '<textarea>make a note</textarea><button id="save_button" class="task_control">save</button>'
    el.textContent = 'close';
    el.className = 'open task_control';
    }else{
        document.getElementById('note_close').innerHTML = '';
        el.className = 'close task_control';
        el.textContent = 'Make a note';
    }
    
}

el.addEventListener('click', extend, false);


    const timeline = document.querySelector('.timeline')
    var ele = document.getElementsByTagName('input');
    const imageTimeline = document.querySelector('#imageTimeline')

    timeline.addEventListener('click', function(){
        for(i = 0; i < ele.length; i++) { 
            if(ele[i].type="radio") { 
                if(ele[i].checked) 
                    if(ele[i].value == '2000'){
                        imageTimeline.setAttribute('src', '../imagens/image.jpg')
                    }
                    else if(ele[i].value == '2001'){
                        imageTimeline.setAttribute('src', '../imagens/ifrj.jpg')
                    }
            } 
        } 
    })



var div = document.getElementById('titleProject')

addEventListener('resize', function(){
    if(document.body.clientWidth < 560){
        div.innerHTML = 'Projeto Acervo Digital de História e <br> Memória do IFRJ Campus <br> Duque de Caxias.'
    }else{
        div.innerHTML = 'Projeto Acervo Digital de História e Memória do <br> IFRJ CampusDuque de Caxias.'
    }
})

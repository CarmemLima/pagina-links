
    //para ocultar a div na tela principal  a variavel display none deve estar fora da function
    var push = document.querySelector('#idpush')
    push.style.display = 'none' //display none para ocultar a div na tela inicial
    
   
    function clicar(){

        var ocultarLinks = document.querySelector('.links');
        ocultarLinks.innerHTML = ''; //faz ocultar as imagens dos icones
        ocultarLinks.style.background = 'none'; //faz ocultar o fundo
        ocultarLinks.style.border = 'none'; //faz ocultar a borda
        ocultarLinks.style.width = '0';

        var ocultarTitulo = document.querySelector('.titulo');
        ocultarTitulo.innerHTML = ''; //faz ocultar as imagens da caixa do titulo
        ocultarTitulo.style.background = 'none'; //faz ocultar o fundo da cx
        ocultarTitulo.style.border = 'none'; //faz ocultar a borda da cx
        ocultarTitulo.style.width = '0';
    
        var blur = document.querySelector('#tela') // variavel para definir a opacidade do iframe por 3seg
        blur.style.opacity = '0.7'; //opacidade de 60%
        

        //para exibir a div após o clique no icone, a variavel display block deve estar dentroda function
        var push = document.querySelector('#idpush'); 
        push.style.display = 'none';

       //para que a div desapareça em alguns segundos usei a propriedade setTimeout que define em milissegundos a execução apenas uma vez 
       setTimeout(() => {
            push.style.display = 'block'; //mostra a div após um delay de 1seg ao abrir a tela do iframe
        }, '1000');

        setTimeout(() => {
            push.style.display = 'none';
            blur.style.opacity = '1'; //retorna a opacidade de 0%
        }, '4000');


    }


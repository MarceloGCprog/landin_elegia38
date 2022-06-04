(function($) {
    "use strict";

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 60
    });

    $('#topNav').affix({
        offset: {
            top: 200
        }
    });
    
    new WOW().init();
    
    $('a.page-scroll').bind('click', function(event) {
        var $ele = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($ele.attr('href')).offset().top - 60)
        }, 1450, 'easeInOutExpo');
        event.preventDefault();
    });
    
    $('.navbar-collapse ul li a').click(function() {
        /* always close responsive nav after click */
        $('.navbar-toggle:visible').click();
    });

    $('#galleryModal').on('show.bs.modal', function (e) {
       $('#galleryImage').attr("src",$(e.relatedTarget).data("src"));
    });

})(jQuery);

const $about = document.querySelector("#texto_about");

function poema(){
    $about.innerHTML = `<p class="text-center">
                        <i>
                        Trabalhas sem alegria para um mundo caduco,<br>
                        onde as formas e as ações não encerram nenhum exemplo.<br>
                        Praticas laboriosamente os gestos universais,<br>
                        sentes calor e frio, falta de dinheiro, fome e desejo sexual.<br>
                        <br>

                        Heróis enchem os parques da cidade em que te arrastas,<br>
                        e preconizam a virtude, a renúncia, o sangue frio, a concepção.<br>
                        A noite, se neblina, abrem guarda-chuvas de bronze<br>
                        ou se recolhem aos volumes de sinistras bibliotecas.<br>
                        <br>

                        Amas a noite pelo poder de aniquilamento que encerra<br>
                        e sabes que, dormindo, os problemas te dispensam de morrer.<br>
                        Mas o horrível despertar prova a existência do maquinário<br>
                        e te repõe, pequenino, em face de indecifráveis palmeiras.<br>
                        <br>

                        Caminhas entre mortos e com eles conversas<br>
                        sobre coisas do tempo futuro e negócios do espírito.<br>
                        A literatura estragou tuas melhores horas de amor.<br>
                        Ao telefone perdeste muito, muitíssimo tempo de semear.<br>
                        <br>

                        Coração orgulhoso, tens pressa de confessar tua derrota<br>
                        e adiar para outro século a felicidade coletiva.<br>
                        Aceitas a chuva, a guerra, o desemprego e a injusta distribuição<br>
                        porque não podes, sozinho, dinamitar a ilha de Manhattan.<br>
                        <br></i>
                        <b>Carlos Drummond de Andrade - 1938</b></p> 
                        <hr>
                        <div class=" container-fluid text-center">
                            <button class="btn btn-default btn-lg" onclick="aboutElegia38()">Elegia 38</button> 
                        </div>`
}

function aboutElegia38(){
    $about.innerHTML=`
                    <p class="text-center">
        		    A Elegia 38, inspirada no poema homônimo,
                    nasceu da ideia de um espaço virtual mais inclusivo, acessível, seguro e eficiente.
                    <br>
                    <br>
                    Somos usuários, entusiastas e desenvolvedores Web3 guidados pelas excitantes ideias de que estamos
                    apenas no começo dessa tecnologia, que as possibilidades de aplicação são infinitas e que a construção
                    desse novo espaço será comunitário e livre. 
                    <br>
                    <br>
                    Todos os dias milhares de novos projetos surgem e transformam o meio digital. 
                    <br>O Bitcoin, moeda digital de maior valor, criado em 2009, está entre os 10 ativos mais 
                    valiosos do planeta.<br>
                    A rede Ethereum, maior rede de contratos inteligentes atualmente em funcionamento,
                    processa 12 transações por segundo - somente na primeira camada. <br>
                    <br>
                    <b>E isso é só o começo...</b></p>
                    <hr>
                        <div class=" container-fluid text-center">
                            <button class="btn btn-default btn-lg" onclick="poema()">Poema</button> 
                        </div>
                    </div>`
}



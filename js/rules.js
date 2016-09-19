/*
 *
 *	author: Alan David
 *
 */

 //$('#header').load('include/header.html');
 //$('#footer').load('include/footer.html');

 $(window).resize(function() {
	if ($(this).width() > 768) {
		$('header nav').css('display','block');
	} else {
		$('header nav').css('display','none')
		//bugHeader();
	}
	Cufon.replace('.code', { fontFamily: 'Code', hover: true });

	
});

$(document).ready(function() {

	//Cufon.replace('.century', { fontFamily: 'Century', hover: true });
	Cufon.replace('.code', { fontFamily: 'Code', hover: true });

	if ($(window).width() < 768) {
		caseHover();
		//bugHeader();
	}
	/* SCROLL */
	var $paneTarget = $('body');
			
	$('nav a').click(function(){
		$.scrollTo( this.hash, 1000, { easing:'swing' });

		if ($(window).width() < 768) {
			$('header nav').fadeOut();
		}
		return false
	});

	/* MENU MOBILE */
	$('#btnMenu').click(function(){
		if ($('header nav').css('display') == 'none') {
			$('header nav').fadeIn();
		} else {
			$('header nav').fadeOut();
		}

		return false
	});


	/* */

	/* TROCAR IMAGEM PARA MOBILE
	$('.mobile').each(function(){
		if ($(window).width() < 768){
			var url = $(this).attr('src');
			url = url.slice(4, 50);
			$(this).attr('src', 'img/mobile/' + url);
		}
	}); */

	/*	HOME
	****************/
	$('.slider')
		.jcarousel({
			wrap: 'circular'
		})
        .jcarouselAutoscroll({
            interval: 8000,
            target: '+=1',
            autostart: true
		});

	$('.prev-slider').jcarouselControl({
        target: '-=1',
        carousel: $('.slider')
    })

	$('.next-slider').jcarouselControl({
        target: '+=1',
        carousel: $('.slider')
    })

    $('.jcarousel-pagination')
    	.jcarouselPagination({
	        item: function(page) {
	            if (page == 1){
	            return '<a href="#' + page + '" class="active">' + page + '</a>';
	        	} else{
	        		return '<a href="#' + page + '">' + page + '</a>';
	        	}
	        },
	        carousel: $('.slider')
	    })
	    .on('jcarouselpagination:active', 'a', function() {
        	$(this).addClass('active');
	    })
	    .on('jcarouselpagination:inactive', 'a', function() {
	        $(this).removeClass('active');
	    });

	$('.slider').swipe({
        swipeLeft: function(event, direction, distance, duration, fingerCount) {   
            $('.slider').jcarousel('scroll', '+=1');
        },
        swipeRight: function(event, direction, distance, duration, fingerCount) {
            $('.slider').jcarousel('scroll', '-=1');
        }
    });

    $('.video').click(function(){
    	//$(this).parent().find('img, a, .texto').fadeOut()

    	//$('#player').pauseVideo()
    });

	$('.video, .video2').fancybox({
		padding: 0,
		type: 'iframe',
		width: 853,
		height: 480
	});

	
	/*	CASES
	****************/
		//cases(11);
		caseHover();	

		/* LIGHTBOX */
		$('.grid a').fancybox();
		$('.grid a').click(function(){
			$('header nav').fadeOut();	
		});

		$('body').swipe({
	        swipeLeft: function(event, direction, distance, duration, fingerCount) {   
	            $.fancybox.next()
	        },
	        swipeRight: function(event, direction, distance, duration, fingerCount) {
	            $.fancybox.prev()
	        }
	    });

		var grid = $('.grid')
			.jcarousel({
				wrap: 'circular'
			})
	        
	        setTimeout(function(){
		       	$('.grid').jcarouselAutoscroll({
		            interval: 8000,
		            target: '+=1',
		            autostart: true
				});
			}, 5000);

		$('.prev-grid').jcarouselControl({
	        target: '-=1',
	        carousel: grid
	    })

		$('.next-grid').jcarouselControl({
	        target: '+=1',
	        carousel: grid
	    })


	 //    var Shuffle = window.shuffle;
		// var element = document.getElementById('grid');
		// //var sizer = element.querySelector('.my-sizer-element');

		// var shuffle = new Shuffle(element, {
		//   itemSelector: '.item',
		//   //sizer: '.sizer', // could also be a selector: '.my-sizer-element'
		//   gutterWidth: 10,
		//   columnWidth: 20
		// });

	/*	CLIENTES
	****************/
	var clientes = $('.gallery')
		.jcarousel({
			wrap: 'circular'
		})
		setTimeout(function(){
	        $('.gallery').jcarouselAutoscroll({
	            interval: 5000,
	            target: '+=2',
	            autostart: true
			});
		}, 5000);

	$('.prev-clientes').jcarouselControl({
        target: '-=2',
        carousel: clientes
    })

	$('.next-clientes').jcarouselControl({
        target: '+=2',
        carousel: clientes
    })


});


$(window).on('scroll resize load', function () {
	var w = $(this).width();

	if(w>768) {
		if ($(this).scrollTop() > 136) {
			$('header').addClass('fixed');
			$('#homeTop').css('paddingTop', '136px');
		} else{
			$('header').removeClass('fixed');
			$('#homeTop').css('paddingTop', 0);
		}

		$('.slider li').width(1260);
		$('.slider li img').css('margin-left', 0)
	} else {
		$('header').removeClass('fixed');
		$('#homeTop').css('paddingTop', 0);

		$('.slider li').width(w);
		var img = $('.slider li img').width()
		$('.slider li img').css('margin-left', (w - img) /2)
		console.log(img, w, (w - img) /2)
	}
});


function cases(qtd) {
	/* Imagens Randomicas */
	var imgG=new Array()
		imgG[0] = 'momentum'
		imgG[1] = 'fideliza'
		imgG[2] = 'ritmo'
		imgG[3] = 'colgateplax'
		imgG[4] = 'colgateslimsoft'
		imgG[5] = 'colgateslimsoft2'
		imgG[6] = 'colgateslimsoft3'
		imgG[7] = 'embu'
		imgG[8] = 'artvitta'

	var img=new Array()
		img[0] = 'colgate'
		img[1] = 'cgm'
		img[2] = 'cecreb'
		img[3] = 'soudapaz'
		img[4] = 'gvf'
		img[5] = 'brgo'
		img[6] = 'cebrace'
		img[7] = 'congresso'
	
	for (i=1; i < qtd; i++){
		if (i == 1 || i == 2 || i == 8 ) {
			var item = 'itemG'
			var rnd = Math.round(Math.random()*(imgG.length - 1));
			banner = imgG[rnd];
			del = imgG.splice(rnd,1);
		} else {
			var item = 'itemP'
			var rnd = Math.round(Math.random()*(img.length - 1));
			banner = img[rnd];
			del = img.splice(rnd,1);
		}
		
		$('.grid ul').append('<li class="item '+ item +' item'+ i +'"><a rel="cases" href="img/cases/' + banner + '.jpg"><img src="img/cases/thumb/'+ banner +'.jpg" /></a></li>');
	}
	//caseHover();
}	


function caseHover(){
	if ($(window).width() > 768) {

		$('.grid a').mouseenter(function(){
			var img = $(this).find('img');
			img.stop().animate({ 
				'width': 	'108%',
				'maxWidth': '108%',
				'margin': 	'-4% 0 0 -4%',
				'opacity': 	0.8
			}, 200, 'linear');
		});
		$('.grid a').mouseleave(function(){
			var img = $(this).find('img');

			img.stop().animate({ 
				'width': 	'100%',
				'maxWidth': '100%',
				'margin': 	'0 0 0 0',
				'opacity': 	1
			}, 200, 'linear');
		});
	}
}

function bugHeader(){
	w = $(window).width()
	$('header').width(w * 0.95);
}
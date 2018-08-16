
$(document).ready(function($) {
	$(".scroll").click(function(event){		
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top},1200);
	});
});
var swiper = new Swiper('#team .swiper-container', {
	slidesPerView: 4,
	spaceBetween: 10,
    slidesPerGroup: 4,
	pagination: {
	  el: '#team .swiper-pagination',
	   clickable: true,
	},
	breakpoints: {
	  1024: {
	   slidesPerView: 1,
		spaceBetween: 40,
	    slidesPerGroup: 1,
	  },
	  768: {
	    slidesPerView: 2,
	    spaceBetween: 30,
	  },
	  640: {
	    slidesPerView: 1,
	    spaceBetween: 20,
	    slidesPerGroup: 1,
	  },
	  320: {
	    slidesPerView: 1,
	    spaceBetween: 10,
	    slidesPerGroup: 1,
	  }
	}
});
var swiper_hospital_envir = new Swiper('#hospital_envir .swiper-container', {
	slidesPerView: 4,
	spaceBetween: 10,

	scrollbar: {
	    el: '#hospital_envir .swiper-scrollbar',
	    dragSize: 30,
	    draggable: true,
	},

	breakpoints: {
	  1024: {
	    slidesPerView: 1,
	    spaceBetween: 40,
	  },
	  768: {
	    slidesPerView: 2,
	    spaceBetween: 30,
	  },
	  640: {
	    slidesPerView: 1,
	    spaceBetween: 20,
	  },
	  320: {
	    slidesPerView: 1,
	    spaceBetween: 10,
	  }
	}
});
swiper_hospital_envir.scrollbar.$el.css('height','15px');
swiper_hospital_envir.scrollbar.$dragEl.css('background','#009991');
var swiper = new Swiper('#home .swiper-container', {
	pagination: {
	  el: '#home .swiper-pagination',
	   clickable: true,
	},
	autoplay : {
	   delay:9000,
	   disableOnInteraction: false,
	},
	loop:true,
});


$(document).ready(function($) {
	function scroll(){
		if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
		   $('#nav').hide();
		   $('.toggleMenu img').attr({src: "images/nav_icon.png"}).css({width:32,height:32});;
		}
		var st =  $("body").scrollTop() || $("html").scrollTop();
		$('#content>div').each(function(index, el) {
			var sp = $(this).offset().top;
			if(st >= sp-500){
			 	$('#nav li').removeClass('con').eq(index).addClass('con');
			 }else{

			 }
		});
	}
	scroll();
	$(document).scroll(function(event) {
		scroll();
	});
	$('#nav li').click(function(event) {
		var con  = $(this).index();
		var str = ($('#content>div').eq(con).offset().top) - 100;
		$('body,html').animate({scrollTop:str});
		if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
		   $('#nav').fadeOut(200);
		}
	});
	$('#top').click(function(){
		$('body,html').animate({scrollTop:0});
	})
	function goPAGE() {
	     if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
	        $('#s_t_list').hide();
	        $('.container_one').hide();
	        $('.container_two').show();
	        $('.header-top .line span').hide();
	        $('.facts').css({backgroundImage:"none",background:'#009951'})
	        var swiper = new Swiper('#exprat .container_two  .swiper-container', {
	        	slidesPerView: 1,
	        	spaceBetween: 10,
	        	// 如果需要前进后退按钮
	     	    navigation: {
	     	      nextEl: '#exprat  .container_two .swiper-button-next',
	     	      prevEl: '#exprat  .container_two .swiper-button-prev',
	     	    },
	        });
	     }else{
	     	// 点击放大
	     	$('.swiper-slide_zoom').click(function(e){
	     		$('#zoom_img').fadeIn();
	     		$('#zoom_img img').attr("src",$(this).attr('src'));
	     		
	     	})
	     	$('#zoom_img').click(function(){
	     		$(this).fadeOut()
	     	});
	     	$('.container_one').show();
	     	$('.container_two').hide();
	     	var galleryTop = new Swiper('.gallery-top', {
	     	  spaceBetween: 10,
	     	  loop:true,
	     	  loopedSlides: 5, 
	     	  autoplay : {
	     	    delay:9000,
	     	    disableOnInteraction: false,
	     	  },
	     	});
	     	var galleryThumbs = new Swiper('.gallery-thumbs', {
	     	  spaceBetween: 20,
	     	  slidesPerView: 4,
	     	  touchRatio: 0.2,
	     	  loop: true,
	     	  slideToClickedSlide: true,
	     	  navigation: {
	     	    nextEl: '.swiper-button-next',
	     	    prevEl: '.swiper-button-prev',
	     	  },
	     	});
	     	galleryThumbs.controller.control = galleryTop;
	     	galleryTop.controller.control = galleryThumbs;
	     }
	  }
	goPAGE();


	$('#exprat .swiper-slide img').click(function(){
		var arr = $(this).attr('src').split("/");
		var str = "./images/export/"+arr[3].split('.')[0].split("-")[0]+".png";
		$('#bg_img').attr('src',str)
	})
	
	

});


function index(){
    
   

   var resm = $('#resume'),
         rBtn = $('.rem_btn'),
         resm_origin = resm.css('right');
    

    rBtn.on('click', function(){
        
        resm.toggleClass('resm_move', function(){
             $('.resm_skill').find('div').toggleClass('gage');
        }); 
//    if(resm_origin_right >= 0 ){
//    }
   
}); 
    
        resmBtn();  
function resmBtn(){
        var resmBar = $('#resmBar');
        var up  = $('.btn_up'),
        	  down = $('.btn_down'),
        	  $this = $(this);
        resmBar.on('mouseenter',function(){
            var resm_origin_right = resm.css('right');
//            console.log(resm_origin_right);
//            console.log(resm_origin);
            if(resm_origin_right == resm_origin ){
                up.css({'transform':'rotate(-35deg)'});
                down.css({'transform':'rotate(35deg)'});
            }else{
                 up.css({'transform':'rotate(35deg)'});
                down.css({'transform':'rotate(-35deg)'}); 
            }
        });
        resmBar.on('mouseleave',function(){
            up.css({'transform':'rotate(0deg)'});
            down.css({'transform':'rotate(0deg)'});
        });
    
        var homeBtn = $('.homeBtn'),
    		  homeBtn_Link = homeBtn.find('a');
           homeBtn_Link.on('click', function(e){
            e.preventDefault();
            $('html, body').animate({scrollTop:0},700);
        
});
 };

    
        moveBox();
function moveBox(){
    var gnb = $('.gnb_nav'),
        gnbLi = gnb.children('li'),
		gnbLi_link = gnbLi.find('a'),
        $this = $(this),
        box = $('#wrap').children('article');
    
   gnbLi_link.on ('click', function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop:$(this.hash).offset().top},700);
        
    });

};

    
        webBox();
function webBox(){
    var webArt  = $('.web'),
        webBar  = webArt.find('dt');

    
    webBar.on ('click', function(){
        var $this = $(this);  
        webArt.find('dd').removeClass('height_view');
        $this.next('dd').addClass('height_view');
    });
};

        galleryBox();
function galleryBox(){
    var ga = $('.gallery'),
        gaBar = ga.find('dt');
    gaBar.on ('click', function(){
        var $this = $(this);
        ga.find('dd').removeClass('ga_height');
        $this.next('dd').addClass('ga_height');
    });
};
}
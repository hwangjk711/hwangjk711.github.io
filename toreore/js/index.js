        function index(){
            $('.b_olbtn_1').on('click', function(){
                $('#indexBanner').children('ul').animate({'margin-left':0},700);
            }); 
            $('.b_olbtn_2').on('click', function(){
                $('#indexBanner').children('ul').animate({'margin-left':'-1200'+'px'},700);
            });
            $('.b_olbtn_3').on('click', function(){
                $('#indexBanner').children('ul').animate({'margin-left':'-2400'+'px'},700);
            });
            
            /*productBox*/
            $("#pro_btn_1").on('click', function(){
                $('#productBox').children('ul').animate({'margin-top':0},500);
            });
            $("#pro_btn_2").on('click', function(){
                $('#productBox').children('ul').animate({'margin-top':-222+'px'},500);
            });
            $("#pro_btn_3").on('click', function(){
                $('#productBox').children('ul').animate({'margin-top':-444+'px'},500);
            });
            
            var info = $('.info_menu'),
                info_btn = $('.info_menu').find('dt');
            info_btn.on('click', function(e){
                e.preventDefault();
                var $this = $(this);
                info.find('dd').removeClass('widthView');
                $this.next('dd').addClass('widthView');
            });
            
            
            /*--------------------gnb_menu------------------------------*/
            
            
            var menu_1 = $('.menu_1'),
                bar_1 = $('.bar_1');
            
                 menu_1.on('mouseenter', function(){
                bar_1.stop().animate({'height':35+'px'},500);
            }).on('mouseleave',function(){
                    bar_1.stop().animate({'height':0+'px'},500);
                 });
            
            
            var menu_2 = $('.menu_2'),
                bar_2 = $('.bar_2');
            
                 menu_2.on('mouseenter', function(){
                bar_2.stop().animate({'height':35+'px'},500);
            }).on('mouseleave',function(){
                    bar_2.stop().animate({'height':0+'px'},500);
                 });
            
            var menu_4 = $('.menu_4'),
                bar_4 = $('.bar_4');
            
                 menu_4.on('mouseenter', function(){
                bar_4.stop().animate({'height':35+'px'},500);
            }).on('mouseleave',function(){
                    bar_4.stop().animate({'height':0+'px'},500);
                 });
         
          var banner = $('.banner_box'),
          banLi = banner.find('li'),
          banLiFirst = banner.find('li').first(),
          banLiWid = parseInt(banLi.width()),
          banLihei = banner.find('li').height(),
          
          ind = $('.ind'),
          indLi = ind.find('li'),
          indLiFirst = ind.find('li').first(),
          l_btn = $('#indexBtn_L'),
          r_btn = $('#indexBtn_R'),
          
          
          //배너가 자동으로 움직이는 시간
          slideTime = 1000,
          settingTime = 1100;
            //슬라이드가 작동되게 하는 시간(버튼) 
      
      
      // 인디게이터 크기 활성화
      indLiFirst.addClass('indWidth');
      
      // 인디게이터 위치 맞게 변경
//      var bannerMarginCut = Math.abs( parseInt(banner.css('margin-left') ) ) / banLiWid;
//      console.log(bannerMarginCut);
//      indLi.eq(bannerMarginCut - 1).addClass('indWidth');
//      var inTest = indLi.eq(-bannerMarginCut + 1);
      
      // 첫번째 이미지 보이기
        banLi.last().clone().prependTo('.banner_1');//banLi 배너내부의 li (하나의 배너부분)
        indLi.last().clone().prependTo('.ind');//indLi 인디케이터의 하나나
      
      // 인디게이터 표시 및 위치 이동
      indLi.on('click', function(){
       var $this = $(this),
           index = $this.index(),
           indexPlus = index - 1,
           banLi = banner.find('li'),
           banLiWid = banner.find('li').width();
           
          $this.addClass('indWidth')
               .siblings().removeClass('indWidth');
          banner.stop().animate({'margin-left':-banLiWid*index},slideTime,function(){
        });
      });
      
      // slidebtn 버튼클릭
      l_btn.on('click', function(){
          var bannerML = parseInt(banner.css('margin-left'));
          if(bannerML == -banLiWid){
            banner.stop().delay(100).animate({'margin-left':"+="+banLiWid},slideTime, function(){
              banner.css({'margin-left':-banLiWid*2})
            });
            $('.ind li').last().addClass('indWidth').siblings().removeClass('indWidth');
          }else{
            banner.stop().delay(100).animate({'margin-left':"+="+banLiWid},slideTime)
            var bannerMarginCut = Math.abs( parseInt($('.banner_box').css('margin-left') ) ) / $('.banner_box').find('li').width();
             $('.ind li').eq(bannerMarginCut-1).addClass('indWidth').siblings().removeClass('indWidth');
            console.log(bannerMarginCut);
          };
        });
      var rightBtn = function(){
        r_btn.on('click', function(){
            var bannerML = parseInt(banner.css('margin-left'));
            if(bannerML <= -banLiWid*2){
              banner.css({'margin-left':0}).stop().delay(100).animate({'margin-left':"-="+banLiWid},slideTime);
            }else{
              banner.stop().delay(100).animate({'margin-left':"-="+banLiWid},slideTime)
            };
          var bannerMarginCut = Math.abs( parseInt($('.banner_box').css('margin-left') ) ) / $('.banner_box').find('li').width();
           $('.ind li').eq(bannerMarginCut+1).addClass('indWidth').siblings().removeClass('indWidth');
          console.log(bannerMarginCut);
        });
      }
      rightBtn();
      
      
      indLi = ind.find('li').eq(0);
      indLi.first().css({'display':'none'});
   
    // 자동움직임
      // var timer;
      // 일정한 시간간격을 두고 움직이는기능 : setInterval
      function startBtn(){ settingTime = setInterval('$("#indexBtn_R").click()', 2000) };
      //setInterval 취소시키는 기능: clearInterval
      function stopBtn(){	clearInterval( settingTime )};
      function stopBtn(){	clearInterval( settingTime )};
      startBtn()
      $('.banner_box').on({mouseenter:stopBtn ,mouseleave:startBtn});  
            
        }
$(function(){
    // carousel list animation
    const $barBox = $('.bar-box');
    const $listBar = $('.bar-box span');
    const $carouselList = $('.carousel-bottom-list li');
    const $carouselListUl = $('.carousel-bottom-list');
    const $carouselListNum = $carouselListUl.children('li').length;
    const $carouselImg = $('.carouselImg');
    var $carouselListWidth = $carouselList.eq(0).width();
    
    // nav 스크롤 이동시 trans class 부여
    const windowScroll = $(window).scroll(function(){
        var i = $(window).scrollTop()
        if(i === 0 ){
            $('nav').removeClass('bg-trans')
        }else{
            $('nav').addClass('bg-trans')
        }
    })
    
    


    // list 전체 폭 사이즈 설정(css에서 설정 완료)
    // $carouselList.css({'width':80/$carouselListNum + '%'});

    // bar 폭 사이즈 설정
    const border = function(){
        $listBar.css({'width':$carouselListWidth + 'px'});
    }
    border()
    

    // 스크린 사이즈 반응하여 bar width 자동 설정
    $(window).resize(function(){
        $carouselListWidth = $carouselList.eq(0).width();
        border();
        ListPositionLocate()
    })

    // 캐러셀 설정
    $carouselImg.slick({
        autoplay: true,
        autoplaySpeed: 7000,
        fade: true,
        dots:false,
        arrows: false,
        pauseOnFoucs:false,
        focusOnSelect:false,
        pauseOnHover:false,
        draggable: false,    
    });
    
    // 캐러셀 index 확인
    var $carouselCurrent = $carouselImg.slick('slickCurrentSlide');
    $carouselImg.on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $carouselCurrent = nextSlide;
        barAniContinue();
    });

    // 캐러셀 인덱스에 따른 bar position 설정하기
    const ListPositionLocate = function(){
        var $carouselListEachPo = $carouselList.eq($carouselCurrent).position().left
        $barBox.css({
            'left':$carouselListEachPo + 'px'
        })
    }

    // slick carousel index num에 맞춰 bar transition 끝날 때마다 옆으로 이동 진행하도록 설정하기
    const barWidthSet = function(){
        transitionEnd = 'transitionend webkitTransitionEnd oTransitionEnd otransitionend';
        
        $listBar.on(transitionEnd, function(){
            $listBar.removeClass('bar-ani')
            $listBar.css({
                'width' : '0'
            })
        })
        border()
        $listBar.addClass('bar-ani')
    }

    function barAniContinue(){
        

        if($carouselCurrent === 0){
            ListPositionLocate()
            barWidthSet()
        }
        if($carouselCurrent === 1){
            ListPositionLocate()
            barWidthSet()
        }
        if($carouselCurrent === 2){
            ListPositionLocate()
            barWidthSet()
        }
        if($carouselCurrent === 3){
            ListPositionLocate()
            barWidthSet()
        }
        if($carouselCurrent === 4){
            ListPositionLocate()
            barWidthSet()
        }
    }
    
    // text 클릭하여 해당 내용으로 바로 넘어가기
    // $carouselList.click(function(){
    //     var i = $(this).index()
    //     $carouselCurrent = i
    // })


    //section channel content 진행
    //리스트 선택시 나머지 설명 박스 없애기 + active 클래스 붙이기
    
    const $contentText = $('.contents-box li')
    $contentText.click(function(){
        var i = $(this).hasClass('content-active')

        if(i === false){
        $contentText.removeClass('content-active')
        $(this).addClass('content-active')
        $('.contents-box .show').removeClass('show')
        }
    })

    //section news 사이즈에 따라 class
    
    // var windowWidth = $(window).width()
    

    // if(windowWidth <= 623){
    //     $newsCarousel.removeClass('news-carousel')
    //     console.log(windowWidth)
    // }

    // section news carousel
    var $newsCarousel = $('.news-carousel')
    $newsCarousel.slick({
        pauseOnFoucs:false,
        focusOnSelect:true,
        pauseOnHover:false,
        arrows: false,
        
        
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1500,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                
              }
            },
            {
              breakpoint: 991.98,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                
              }
            },
            {
                breakpoint: 575.98,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                //   centerMode: true,
                  
                }
              },
           
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });

    // ----------------- mode change
    const $changeBtn = $('.change-box button')
    


    // $changeBtn.click(function(){
    //     var hasDarkClass = $(this).hasClass('dark-mode');
    //     var hasLightClass = $(this).hasClass('light-mode');    
        
    //     var lightfont = '#202020';
    //     var lighticon = '#f7f9fa';
    //     var lightback = '#f7f9fa';
        
    //     var darkfont = '#ededed';
    //     var darkicon = '#2c2d30';
    //     var darkback = '#1e1f21';

    //     if(hasDarkClass === true){
    //         // alert('라이트모드로 변경합니다.')
    //         $(this).removeClass('dark-mode');
    //         $(this).addClass('light-mode');
    //         $(this).text('다크모드로 보기')
    //         // -----css 작성
    //         $(this).css({
    //             'border' : lighticon,
    //             'background-color' : lightback,
    //             'color' : lightfont,
                
    //         })

    //         $('html, body').css({
    //             'background-color' : lightback,
    //             'color' : lightfont,
    //         })

    //         $('.card-body').css({
    //             'background-color' : lightback,
    //             'border' : '1px solid #202020'
    //         })
            

    //     }else{
    //         // alert('다크모드로 변경합니다.')
    //         $(this).removeClass('light-mode');
    //         $(this).addClass('dark-mode');
    //         $(this).text('라이트모드로 보기')
    //         // -----css 작성
    //         $(this).css({
    //             'border' : darkicon,
    //             'background-color' : darkback,
    //             'color' : darkfont,
    //         })

    //         $('html, body').css({
    //             'background-color' : 'black',
    //             'color' : darkfont,
    //         })

    //         $('.card-body').css({
    //             'background-color' : darkback,
    //             'border' : '1px solid darkicon'
    //         })
    //     }

    // })
    $(window).resize(function(){
        console.log($(window).width())
    })
})
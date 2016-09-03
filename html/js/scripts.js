$( document ).ready( function() {

    /*------------------------------*/
    /*----------Main Slider---------*/ 
    /*------------------------------*/
    var url_path = 'file:///C:/Users/Billy%20Joel%20Ranario/Google%20Drive/__PROJECTS/__HPM%20Projects/ganp.org/html/';
    
    // var url_path = "http://mockupdevs.esy.es/~dws/creative360travel.com/";
    
    $( '#slider-content' ).layerSlider({
        autostart: true,
        skin: 'v5',
        twoWaySlideshow : true,
        skinsPath: url_path + 'skins/',
        responsiveUnder: 960,
        layersContainer: 960,
        hoverBottomNav: true,
        thumbnailNavigation : 'hover',
        durationIn : 10000,
        durationOut : 10000,
        showBarTimer: true,
        showCircleTimer: false,
    });

    /*------------------------------*/
    /*----------plugins-------------*/ 
    /*------------------------------*/
    // Transformicon Plugin
    transformicons.add('.tcon');
    // WOW Plugin
    new WOW().init();
    // Nice Scroll Plugin
    $( "html" ).niceScroll( {
        cursorcolor: "#C2CBCF",
        cursorwidth: "9px",
        zindex: 9999,
        bouncescroll: true,
        scrollspeed: 120
    } );

    var $document = $(document),
        $element = $('header'),
        className = 'hasScrolled';

    $document.scroll(function() {
      if ($document.scrollTop() >= 50) {
        // user scrolled 50 pixels or more;
        // do stuff
        $( '.scrolltop-wrapper' ).fadeIn();
      } else {
        $( '.scrolltop-wrapper' ).fadeOut();
      }
    });    

    /*------------------------------*/
    /*--------Hover Animation-------*/ 
    /*------------------------------*/
    // For Images
    $( '.img-wrapper' ).mouseover( function() {
        $( this ).children( ':first-child' ).addClass( 'animated pulse hovered' );
        $( this ).children( 'i' ).addClass( 'text-hovered' );
    } );
    $( '.img-wrapper' ).mouseout( function() {
        $( this ).children( ':first-child' ).removeClass( 'animated pulse hovered' );
        $( this ).children( 'i' ).removeClass( 'text-hovered' );
    } );
    // For Features
    $( '.icon-wrapper' ).mouseover( function() {
        $( this ).children( ':first-child' ).addClass( 'animated tada hovered' );
        $( this ).children( 'i' ).addClass( 'text-hovered' );
    } );
    $( '.icon-wrapper' ).mouseout( function() {
        $( this ).children( ':first-child' ).removeClass( 'animated tada hovered' );
        $( this ).children( 'i' ).removeClass( 'text-hovered' );
    } );

} );
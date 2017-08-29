//Search, sort, and filter
$(document).ready(function(){
  $('.no-results').hide();
  $('#search').on('keyup',function(){
    var search_term = $(this).val();
    filter_content(search_term);
  })
});

function filter_content(search_term) {
  $('.article-wrapper').each(function() {
    var $article = $(this);
    if($article.find('.col').text().indexOf(search_term) == -1) {
      $article.parent('section').fadeOut();
    } else {
      $article.parent('section').fadeIn();
    }
  });

  if($('.grid section:visible').length === 0) {
    $('.no-results').show();
  } else {
    $('.no-results').hide();
  }
}

//Toggle Our Sources
$('#our-sources').click(function() {
  $('#our-sources-1').slideToggle();
  $('#our-sources').toggleClass('read-more-box-header-open');
  $('#our-sources i').toggleClass('fa-plus-square');
  $('#our-sources i').toggleClass('fa-minus-square');
});

//Toggle Our News Coverage
$('#news-coverage').click(function() {
  $('#news-coverage-1').slideToggle();
  $('#news-coverage').toggleClass('read-more-box-header-open');
  $('#news-coverage i').toggleClass('fa-plus-square');
  $('#news-coverage i').toggleClass('fa-minus-square');
});


//Toggle Explore This Topic
$('#explore-topic').click(function() {
  $('#explore-topic-1').slideToggle();
  $('#explore-topic').toggleClass('read-more-box-header-open');
  $('#explore-topic i').toggleClass('fa-plus-square');
  $('#explore-topic i').toggleClass('fa-minus-square');
});


//Button animation
$('#article-1 .primary-button').one('click', function(e){
    $('#article-1 .primary-button').addClass('primary-button-click');

    setTimeout(function(){
      window.location.href = e.currentTarget.dataset.redirect;
    }, 800);
});

$('#article-2 .primary-button').one('click', function(){
    $('#article-2 .primary-button').addClass('primary-button-click');
});

$('#article-3 .primary-button').one('click', function(){
    $('#article-3 .primary-button').addClass('primary-button-click');
});

$('#article-4 .primary-button').one('click', function(){
    $('#article-4 .primary-button').addClass('primary-button-click');
});

$('#article-5 .primary-button').one('click', function(){
    $('#article-5 .primary-button').addClass('primary-button-click');
});

$('#subscribe .take-action-button').one('click', function(){
    $('#subscribe .take-action-button').addClass('take-action-button-click');
});

$('#donate .take-action-button').one('click', function(){
    $('#donate .take-action-button').addClass('take-action-button-click');
});

$('#notify .take-action-button').one('click', function(){
    $('#notify .take-action-button').addClass('take-action-button-click');
});



//Header scroll
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    if (st > lastScrollTop && st > navbarHeight){
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}

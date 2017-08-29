//Search, sort, and filter
$(document).ready(function(){
  $('.no-results').hide();
  $('#search').on('keyup', filter_content);
  $('#topics').on('change', filter_content);
  $('#date').on('change', sort_content);
});

function filter_content() {
  $('.article-wrapper').each(function() {
    var $article = $(this);
    var $article_section = $article.parent('section');
    
    if(in_topics($article_section) && in_search_text($article)) {
      $article_section.fadeIn();
    } else {
      $article_section.fadeOut();
    }
  });

  if($('.grid section:visible').length === 0) {
    $('.no-results').show();
  } else {
    $('.no-results').hide();
  }
}

function in_topics(article) {
  topic = $('#topics').val();

  if(topic.length == 0) {
    return true;
  }

  if(article.data('topics')) {
    var topics = article.data('topics').split(',');
    return $.inArray(topic, topics) > -1;    
  } else {
    return false;
  }
}

function in_search_text(article) {
  var search_term = $('#search').val().toUpperCase();
  return article.find('.col').text().toUpperCase().indexOf(search_term) > -1;
}

function sort_content() {

  var articles = new Array();

  $('.article').each(function() {
    var date = $(this).data('date');
    articles.push( { date: date, article: $(this) });
  });

  articles.sort(sort_by_date);

  for(idx in articles) {
    $('.article-grid').append(articles[idx].article);
  };
}

function sort_by_date(a, b) {
  var sort_direction = $('#date').val();    

  if(sort_direction === 'newest') {
    return new Date(b.date) - new Date(a.date);
  } else {
    return new Date(a.date) - new Date(b.date);
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

$('#article-2 .primary-button').one('click', function(e){
    $('#article-2 .primary-button').addClass('primary-button-click');

    setTimeout(function(){
      window.location.href = e.currentTarget.dataset.redirect;
    }, 800);
});

$('#article-3 .primary-button').one('click', function(e){
    $('#article-3 .primary-button').addClass('primary-button-click');

    setTimeout(function(){
      window.location.href = e.currentTarget.dataset.redirect;
    }, 800);
});

$('#article-4 .primary-button').one('click', function(e){
    $('#article-4 .primary-button').addClass('primary-button-click');

    setTimeout(function(){
      window.location.href = e.currentTarget.dataset.redirect;
    }, 800);
});

$('#article-5 .primary-button').one('click', function(e){
    $('#article-5 .primary-button').addClass('primary-button-click');

    setTimeout(function(){
      window.location.href = e.currentTarget.dataset.redirect;
    }, 800);
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

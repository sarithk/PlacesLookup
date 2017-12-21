function loadData() {

    var $body = $('body');
    var $heading = $('#heading');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');

    // clear out old data before new request
    $heading.text ("");
    $nytElem.text("");

    // load streetview
    var street = $('#street').val();
    var city = $('#city').val();
    var address = street + ', ' + city

    $heading.text (street=="" ? city.toUpperCase(): address);

    var streetURL = "http://maps.googleapis.com/maps/api/streetview?size=600x300&location=" + address+ '';
    $body.append('<img class="bgimg" src="'+streetURL+'">');

    //AJAX request for NY times API
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="
               + city +
               "&sort=newest&api-key=9840a8412fbd4db997f582d96e756dce&begin_date=20170901" ;

    $.getJSON(url)
    .done(function(data) {
       $nytHeaderElem.text("What's going on in "+ city);
       articles = data.response.docs;
       console.log(articles.length);
       for (var i=0; i<articles.length; i++){
           var article = articles[i];
           $nytHeaderElem.append(
            '<li class="article">'+'<a href="'+article.web_url+'">'+article.headline.main+'</a>'+
            '<p>'+article.snippet+'</p>'+
            '</li>');
           };
    }).fail(function(e) {
        $nytHeaderElem.text("New York Times articles could not be loaded.");
  });

return false;
};

    $('#form-container').submit(loadData);
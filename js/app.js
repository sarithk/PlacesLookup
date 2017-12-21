function loadData() {

    var $body = $('body');
    var $heading = $('#heading');

    // clear out old data before new request
    $heading.text ("");

    // load streetview
    var street = $('#street').val();
    var city = $('#city').val();
    var address = street + ', ' + city

    $heading.text (street=="" ? city.toUpperCase(): address);

    var streetURL = "http://maps.googleapis.com/maps/api/streetview?size=600x300&location=" + address+ '';
    $body.append('<img class="bgimg" src="'+streetURL+'">');

return false;
};

    $('#form-container').submit(loadData);
var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
    var countryName = $('#country-name').val();
    if (!countryName.length) countryName = 'Poland';
    $.ajax({
        url: url + countryName,
        method: 'GET',
        success: showCountriesList
    });
};

function showCountriesList(resp) {
    countriesList.empty();

    resp.forEach(function(item) {

    var countryLi = $('<li><p><span>Kraj: </span></p></li>');
    $('#countries').append(countryLi).append(item.name);

    var capitaLi = $('<li><p><span>Stolica: </span></p></li>');
    $('#countries').append(capitaLi).append(item.capital);

    var popuLi = $('<li><p><span>Populacja: </span></p></li>');
    $('#countries').append(popuLi).append(item.population);

    var calLi = $('<li><p><span>Kierunkowy: </span></p></li>');
    $('#countries').append(calLi).append(item.callingCodes);
    

    });
};
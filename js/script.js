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
    var newLi = $('<li id="li"></li>');
    var country = $('<p><span>Kraj:&nbsp</span></p>');
    var capital = $('<p><span>Stolica:&nbsp</span></p>');
    var population = $('<p><span>Populacja:&nbsp</span></p>');
    var callPrefix = $('<p><span>Kierunkowy:&nbsp</span></p>');
    

    
    $('#countries').append(newLi.append(country.append(item.name)));
    $('#countries').append(newLi.append(capital.append(item.capital)));
    $('#countries').append(newLi.append(population.append(item.population)));
    $('#countries').append(newLi.append(callPrefix.append(item.callingCodes)));


    
    });
};
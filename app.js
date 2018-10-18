const getGIS = function () {
    $('.GIS').removeClass('invisible');
    $('.value').addClass('invisible');
    $('.web').addClass('invisible');
    $('#GIS').addClass('bg-danger');
    $('#value').removeClass('bg-danger');
    $('#web').removeClass('bg-danger');
};

const getValuation = function () {
    $('.value').removeClass('invisible');
    $('.GIS').addClass('invisible');
    $('.web').addClass('invisible');
    $('#GIS').removeClass('bg-danger');
    $('#value').addClass('bg-danger');
    $('#web').removeClass('bg-danger');
};
const getWeb = function () {
    $('.value').addClass('invisible');
    $('.GIS').addClass('invisible');
    $('.web').removeClass('invisible');
    $('#GIS').removeClass('bg-danger');
    $('#value').removeClass('bg-danger');
    $('#web').addClass('bg-danger');
};

$('#GIS').on('click', getGIS);
$('#value').on('click', getValuation);
$('#web').on('click', getWeb)
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

const getLeadership=function(){
    $('.tech').addClass('invisible');
    $('.appraisers').addClass('invisible');
    $('.support').addClass('invisible');
    $('.leadership').removeClass('invisible');
}
const getTech=function(){
    $('.leadership').addClass('invisible');
    $('.appraisers').addClass('invisible');
    $('.support').addClass('invisible');
    $('.tech').removeClass('invisible');
}
const getAppraisers=function(){
    $('.leadership').addClass('invisible');
    $('.tech').addClass('invisible');
    $('.support').addClass('invisible');
    $('.appraisers').removeClass('invisible');
}
const getSupport=function(){
    $('.leadership').addClass('invisible');
    $('.appraisers').addClass('invisible');
    $('.tech').addClass('invisible');
    $('.support').removeClass('invisible');
}

$('#GIS').on('click', getGIS);
$('#value').on('click', getValuation);
$('#web').on('click', getWeb);
$('.nav-about').hover(function(){
    $(this).toggleClass('bg-dark')});
$('#leader').on('click', getLeadership)
$('#tech').on('click', getTech);
$('#appraisers').on('click',getAppraisers);
$('#support').on('click',getSupport);

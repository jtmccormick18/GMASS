const getGIS = function () {
    $('.GIS').removeClass('invisible');
    $('.value').addClass('invisible');
    $('.projects').addClass('invisible');
    // $('#GIS').addClass('bg-danger text-white rounded');
    $('#value').removeClass('bg-danger text-white rounded');
    $('#projects').removeClass('bg-danger text-white rounded');
    $('.other').addClass('invisible');
    $('#other').removeClass('bg-danger text-white rounded');
    $('.portfolio').addClass('invisible');
    $('#portfolio').removeClass('bg-danger text-white rounded');
    $('#client').removeClass('bg-danger text-white rounded');
    $('.client').addClass('invisible');
};
const jumboVal=function(){
    localStorage.Services="Valuation";
}
const jumboGIS=function(){
    localStorage.Services="GIS"
}
const jumboOther=function(){
    localStorage.Services="Software"
}

const getValuation = function () {
    $('.value').removeClass('invisible');
    $('.GIS').addClass('invisible');
    $('.projects').addClass('invisible');
    $('#GIS').removeClass('bg-danger text-white rounded');
    // $('#value').addClass('bg-danger text-white rounded');
    $('#projects').removeClass('bg-danger text-white rounded');
    $('.other').addClass('invisible');
    $('#other').removeClass('bg-danger text-white rounded');
    $('.portfolio').addClass('invisible');
    $('#portfolio').removeClass('bg-danger text-white rounded');
    $('#client').removeClass('bg-danger text-white rounded');
    $('.client').addClass('invisible');
};
const getProjects = function () {
    $('.value').addClass('invisible');
    $('.GIS').addClass('invisible');
    $('.projects').removeClass('invisible');
    $('#GIS').removeClass('bg-danger text-white rounded');
    $('#value').removeClass('bg-danger text-white rounded');
    // $('#projects').addClass('bg-danger text-white rounded');
    $('.other').addClass('invisible');
    $('#other').removeClass('bg-danger text-white rounded');
    $('.portfolio').addClass('invisible');
    $('#portfolio').removeClass('bg-danger text-white rounded');
    $('#client').removeClass('bg-danger text-white rounded');
    $('.client').addClass('invisible');
};
const getOther = function(){
    $('.value').addClass('invisible');
    $('.GIS').addClass('invisible');
    $('.projects').addClass('invisible');
    $('#GIS').removeClass('bg-danger text-white rounded');
    $('#value').removeClass('bg-danger text-white rounded');
    $('#projects').removeClass('bg-danger text-white rounded');
    $('.other').removeClass('invisible');
    // $('#other').addClass('bg-danger text-white rounded');
    $('.portfolio').addClass('invisible');
    $('#portfolio').removeClass('bg-danger text-white rounded');
    $('#client').removeClass('bg-danger text-white rounded');
    $('.client').addClass('invisible');
}
const getPortfolio = function(){
    $('.value').addClass('invisible');
    $('.GIS').addClass('invisible');
    $('.projects').addClass('invisible');
    $('#GIS').removeClass('bg-danger text-white rounded');
    $('#value').removeClass('bg-danger text-white rounded');
    $('#projects').removeClass('bg-danger text-white rounded');
    $('.other').addClass('invisible');
    $('#other').removeClass('bg-danger text-white rounded');
    $('.portfolio').removeClass('invisible');
    $('#client').removeClass('bg-danger text-white rounded');
    $('.client').addClass('invisible');
    // $('#portfolio').addClass('bg-danger text-white rounded');
}
const getClient=function(){
    $('.value').addClass('invisible');
    $('.GIS').addClass('invisible');
    $('.projects').addClass('invisible');
    $('#GIS').removeClass('bg-danger text-white rounded');
    $('#value').removeClass('bg-danger text-white rounded');
    $('#projects').removeClass('bg-danger text-white rounded');
    $('.other').addClass('invisible');
    $('#other').removeClass('bg-danger text-white rounded');
    $('.portfolio').addClass('invisible');
    $('.client').removeClass('invisible');
}

const getLeadership = function () {
    $('.tech').addClass('invisible');
    $('.appraisers').addClass('invisible');
    $('.support').addClass('invisible');
    $('.leadership').removeClass('invisible');
}
const getTech = function () {
    $('.leadership').addClass('invisible');
    $('.appraisers').addClass('invisible');
    $('.support').addClass('invisible');
    $('.tech').removeClass('invisible');
}
const getAppraisers = function () {
    $('.leadership').addClass('invisible');
    $('.tech').addClass('invisible');
    $('.support').addClass('invisible');
    $('.appraisers').removeClass('invisible');
}
const getSupport = function () {
    $('.leadership').addClass('invisible');
    $('.appraisers').addClass('invisible');
    $('.tech').addClass('invisible');
    $('.support').removeClass('invisible');
}
const submitContact = function (e) {
    e.preventDefault();
    if ($('#nameField').val().trim() && $('#emailInput').val().trim()
        && $('#corporation').val().trim() && $('#inputGroup').val().trim() && $('#summary').val().trim()) {

        let data = {
            name: $('#nameField').val().trim(),
            email: $('#emailInput').val().trim(),
            corporation: $('#corporation').val().trim(),
            type: $('#inputGroup').val().trim(),
            message: $('#summary').val().trim()
        }
        console.log(data);
        $.ajax({
            type: "POST",
            url: '/send-email',
            data:data
        })
            .done(function (res) {
                $('#nameField').val('')
                $('#emailInput').val('')
                $('#corporation').val('')
                $('#inputGroup').val('');
                $('#summary').val('')
                console.log(JSON.stringify(res));
            }).fail(err => {
                console.log(JSON.stringify(err));
            })
    } else $('#emailForm').prepend('<h5 class="text-danger">Uh Oh! Please Fill Out All Fields and Try Again!</h5>');
}


$('.demo').on('click',function(){
    if($(this).paused){
        $(this).play();
    } else{
        $(this).pause();
    }
})

$('#GIS').on('click', getGIS);
$('#value').on('click', getValuation);
$('#projects').on('click', getProjects);
$('#other').on('click',getOther);
$('#portfolio').on('click',getPortfolio);
$('#client').on('click',getClient);
$('.nav-about').hover(function () {
    $(this).toggleClass('bg-dark text-white')
});
$('.nav-about').on('click',function () {
    $('.nav-about').removeClass('bg-danger');
    $(this).addClass('bg-danger text-white');
});
$('.list-group-item').hover(function(){
    $(this).toggleClass('bg-light');
})
//If accessed from JumboTron, defining which DOM elements to show
$(function(){
    if(localStorage.Services==='GIS'){
        getGIS();
    } else if(localStorage.Services==='Valuation'){
        getValuation();
    } else if(localStorage.Services==='Software'){
        getOther();
    }
    localStorage.Services=''
})

//Setting portfolio items to change pictures
$('.comp').on('click',function(){
    $('.comp').removeClass('bg-primary text-white');
    $(this).addClass('bg-primary text-white');
    if($(this).data('attr')==="front"){
        $('#comp').attr('src','assets/portfolio/comp_report.png')
    } else if ($(this).data('attr')==="back"){
        $('#comp').attr('src','assets/portfolio/comp_location.png')
    }
    
})

$('#GISJumbo').on('click',jumboGIS);
$('#valJumbo').on('click',jumboVal);
$('#softwareJumbo').on('click',jumboOther);
$('#leader').on('click', getLeadership)
$('#tech').on('click', getTech);
$('#appraisers').on('click', getAppraisers);
$('#support').on('click', getSupport);
//submitting contact form
$('#contactSubmit').on('click', submitContact);

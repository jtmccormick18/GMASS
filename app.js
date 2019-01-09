const getGIS = function () {
    $('.GIS').removeClass('invisible');
    $('.value').addClass('invisible');
    $('.projects').addClass('invisible');
    $('#GIS').addClass('bg-danger');
    $('#value').removeClass('bg-danger');
    $('#projects').removeClass('bg-danger');
    $('.other').addClass('invisible');
    $('#other').removeClass('bg-danger');
    $('.portfolio').addClass('invisible');
    $('#portfolio').removeClass('bg-danger');
};

const getValuation = function () {
    $('.value').removeClass('invisible');
    $('.GIS').addClass('invisible');
    $('.projects').addClass('invisible');
    $('#GIS').removeClass('bg-danger');
    $('#value').addClass('bg-danger');
    $('#projects').removeClass('bg-danger');
    $('.other').addClass('invisible');
    $('#other').removeClass('bg-danger');
    $('.portfolio').addClass('invisible');
    $('#portfolio').removeClass('bg-danger');
};
const getProjects = function () {
    $('.value').addClass('invisible');
    $('.GIS').addClass('invisible');
    $('.projects').removeClass('invisible');
    $('#GIS').removeClass('bg-danger');
    $('#value').removeClass('bg-danger');
    $('#projects').addClass('bg-danger');
    $('.other').addClass('invisible');
    $('#other').removeClass('bg-danger');
    $('.portfolio').addClass('invisible');
    $('#portfolio').removeClass('bg-danger');
};
const getOther = function(){
    $('.value').addClass('invisible');
    $('.GIS').addClass('invisible');
    $('.projects').addClass('invisible');
    $('#GIS').removeClass('bg-danger');
    $('#value').removeClass('bg-danger');
    $('#projects').removeClass('bg-danger');
    $('.other').removeClass('invisible');
    $('#other').addClass('bg-danger');
    $('.portfolio').addClass('invisible');
    $('#portfolio').removeClass('bg-danger');
}
const getPortfolio = function(){
    $('.value').addClass('invisible');
    $('.GIS').addClass('invisible');
    $('.projects').addClass('invisible');
    $('#GIS').removeClass('bg-danger');
    $('#value').removeClass('bg-danger');
    $('#projects').removeClass('bg-danger');
    $('.other').addClass('invisible');
    $('#other').removeClass('bg-danger');
    $('.portfolio').removeClass('invisible');
    $('#portfolio').addClass('bg-danger');
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

$('#GIS').on('click', getGIS);
$('#value').on('click', getValuation);
$('#projects').on('click', getProjects);
$('#other').on('click',getOther);
$('#portfolio').on('click',getPortfolio);
$('.nav-about').hover(function () {
    $(this).toggleClass('bg-dark')
});
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
$('#leader').on('click', getLeadership)
$('#tech').on('click', getTech);
$('#appraisers').on('click', getAppraisers);
$('#support').on('click', getSupport);
//submitting contact form
$('#contactSubmit').on('click', submitContact);

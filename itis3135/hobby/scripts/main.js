$(document).ready(() =>{
    $('.teams, .locations, .seasons, .how, .why, .ai').hide();
    
    $('nav ul li').on('click', event =>{
        let sectionName = $(event.currentTarget).attr('id').replace('-btn','');
        $('.section').hide();
        $('.' + sectionName).show();
    })
})
let aa = $('#hoge');

$(() => {
    click_scloll();
})

function click_scloll() {
    console.log('-click_scloll-');

    $('.navbar-brand').on('click', function() {
        let id = $(this).attr('href');
        let pos = $(id).offset().top - 60;
        $('html,body').animate({'scrollTop': pos },0);
        return false;
    });
}
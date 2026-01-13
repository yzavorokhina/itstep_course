//выбираем все теги с именем  modal
$('a[name=modal]').click(function (e) {
    //Отменяем поведение ссылки
    e.preventDefault();
    //Получаем тег A
    var divId = $(this).attr('href');
    console.log({ divId });
    var id = $(divId);
    //Получаем ширину и высоту окна
    var winH = $(window).height();
    var winW = $(window).width();
    //Устанавливаем всплывающее окно по центру
    id.css('top', winH / 2 - id.height() / 2);
    id.css('left', winW / 2 - id.width() / 2);
    //эффект перехода
    id.fadeIn(500);
});
//если нажата кнопка закрытия окна
$('.modalwindow .close').click(function (e) {
    //Отменяем поведение ссылки
    e.preventDefault();
    $('.modalwindow').fadeOut(500);
});

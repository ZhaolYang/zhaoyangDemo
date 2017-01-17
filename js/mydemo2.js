(function(win, $) {
    // 内容递减实现
    // var mText = $('.mul-text')[0],
    //     width = $(mText).width(),
    //     height = $(mText).height(),
    //     value = $(mText).html(),
    //     cvalue = value;
    // var clone = document.createElement('p');
    // $(clone).width(width).html(cvalue).css('display', 'none');
    // $(mText).after($(clone));
    // var cloHeight = $(clone).height();
    // while (cloHeight > height) {
    //     cvalue = cvalue.substring(0, cvalue.length - 1);
    //     $(clone).html(cvalue + '…');
    //     cloHeight = $(clone).height();
    //     if (cloHeight <= height) { $(mText).html(cvalue + '…') }
    // }
    
    var mText = $('.mul-text')[0];
    $(mText).initEllipsis();
    
}(this, jQuery));

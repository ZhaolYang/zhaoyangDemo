(function(win, $) {
    $.fn.extend({
        initEllipsis: function() {
            var eDom = $(this),
                width = eDom.width(),
                height = eDom.height(),
                value = eDom.html(),
                cvalue = value;
            var clone = document.createElement('p');
            $(clone).width(width).html(cvalue).css('display', 'none');
            $(eDom).after($(clone));
            var cloHeight = $(clone).height();
            while (cloHeight > height) {
                cvalue = cvalue.substring(0, cvalue.length - 1);
                $(clone).html(cvalue + '…');
                cloHeight = $(clone).height();
                if (cloHeight <= height) { $(eDom).html(cvalue + '…') }
            }
        }
    });
}(this, jQuery))

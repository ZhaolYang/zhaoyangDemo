(function(win, $) {
    // $(".top").click(function(){
    // 	$(this).toggleClass('green');
    // });
    // 'use strict';

    // function string2int(arr) {
    //     var myarr = arr.map(function(x) {
    //         return x.toLowerCase();
    //     });
    //     var myarr2 = myarr.map(function(string) {
    //         var firstS = string.split('');
    //         firstS[0] = firstS[0].toUpperCase();
    //         return firstS.join('');
    //     });
    //     console.log(myarr2);
    //     // console.log(arr);
    // }
    // function firstWord(string) {
    // 	var firstS = string.split('');
    // 	firstS[0] = firstS[0].toUpperCase();
    // 	return firstS.join('');
    // }
    // firstWord('aaaaa');
    // var s = ['AADF', 'aUFdd', 'ASsss'];
    // string2int(s);
    
    // 直接实现,通过类名控制
    // $(".hd-item").each(function(i){
    //     $(this).click(function(){
    //         $(this).addClass('hd-cur').siblings().removeClass('hd-cur');
    //         $(".bd-item").eq(i).removeClass('hidden').siblings().addClass('hidden');
    //     })
    // });
    
    new TabView({
        hdDom: '.hd-item',
        bdDom: '.bd-item',
        activeClass: 'hd-cur',
        event: 'click'
    });
}(this, jQuery));
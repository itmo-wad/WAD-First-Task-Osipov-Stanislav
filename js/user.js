$(".gallery").gallery({
    helpers : {
        title: {
            type: 'inside',
            position: 'top'
        }
    },
    nextEffect: 'fade',
    prevEffect: 'fade',
    afterLoad: function() {
        var html = '<span>Date, File Type, Download</span>';
        $('.fancybox-sidebar').append(html);
    },
    tpl: {
        wrap     : '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div><div class="fancybox-sidebar"></div></div></div></div>'
    }
});
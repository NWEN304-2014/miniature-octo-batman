var myColor = 'rgba(41,100,159,.5)';
$(".knob").knob({
    'fgColor': myColor,
});
$('.knob').each(function(){
    var dis = this;
    if($(dis).val() == 0)
    {
        $({value: 0}).animate({value: parseInt($(dis).attr("rel"))}, {
            duration: 2000,
            easing:'swing',
            step: function()
            {
                $(dis).val(Math.ceil(this.value)).trigger('change');
                $(dis).val($(dis).val() + '%');
            }
        })
    }
});

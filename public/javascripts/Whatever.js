
//drop down select//

	$(document).ready(function() {

    	//build dropdown
    	$("<select />").appendTo(".navigation nav div");

    	$("<option />", {
    		"selected": "selected",
    		"value": "",
    		"text": "Go to..."
    	}).appendTo("nav select");

    	// Populate dropdown with menu items
        $(".navigation nav li a").each(function() {
        var el = $(this);
        $("<option />", {
        "value"   : el.attr("href"),
        "text"    : el.text()
        }).appendTo("nav select");
        });
        // make the dropdown menu actually work...
        $("nav select").change(function() {
        window.location = $(this).find("option:selected").val();
});
    });

    //Flex Slider
    $(document).ready(function(){
        $('.flexslider').flexslider({
            directionNav:false,

        });
    });

    

$(document).ready(function(){
    
    function productlinkover() {
        $(this).addClass("productlinkhover");
        $(this).find(".productdesc").hide();
        $(this).find(".morebutton").show();
        var productname = $(this).attr("id");
        var titleid = "#" + productname + "title";
        $("div").find(".title").hide();
        $("div").find(titleid).show();
        }
    function productlinkout(){
        $(this).removeClass("productlinkhover");
        $(this).find(".productdesc").show();
        $(this).find(".morebutton").hide();
        $("div").find(".title").hide();
        $("div").find("#defaulttitle").show();
    }

        $("#productlist li").on("mouseover", productlinkover).on("mouseout", productlinkout);
});


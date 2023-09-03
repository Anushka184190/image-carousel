$(".box").css("background","url(images/img"+1+".jpg)")
    .css("background-position","center")
    .css("background-size","cover").css("height", "89vh").css("width","auto");
    var i=1;
    if(i==1)$(".left").hide();
$(".right").click(function(){
    i++;
    $(".box").css("background","url(images/img"+i+".jpg)")
    .css("background-position","center").css("trans")
    .css("background-size","cover").css("height", "89vh").css("width","auto");
    if(i>=5)$(".right").hide();
    if(i>=2 && i<5)$(".right").show();
    if(i>=2 && i<=5)$(".left").show();
    document.querySelector(".radio-"+i).checked=true;
})
$(".left").click(function(){
    i--;
    $(".box").css("background","url(images/img"+i+".jpg)")
    .css("background-position","center")
    .css("background-size","cover").css("height", "89vh").css("width","auto");
    if(i==1)$(".left").hide();
    if(i>=2 && i<=5)$(".right").show();
    if(i>=2 && i<=5)$(".left").show();
    document.querySelector(".radio-"+i).checked=true;
})

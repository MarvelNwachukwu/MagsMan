let menuItems = $("#menuitem");
let bugerIcon = $(".burger")


bugerIcon.on("click", () => {
    menuItems.toggle(111);
    $("main").toggle(111)
    $("footer").toggle(111);

    $($(".burger").children()[0]).toggleClass("menuLine turnDown");
    $($(".burger").children()[2]).toggleClass("menuLine turnUp");
    $($(".burger").children()[1]).toggleClass("menuLine hide");
    
    
})





$(window).on("load", begynd);

function begynd() {
    $("#start").on("click", movingFox);
    $("#start").on("click", movingBear);

    $("#stop").on("click", stopFox);
    $("#stop").on("click", stopBear);
}

function movingFox() {

    console.log("moving_fox");
    $("#fox_container").addClass("moving_fox");
    $("#fox_sprite").addClass("walk_fox");

}

function movingBear() {

    console.log("moving_bear");
    $("#bear_container").addClass("moving_bear");
    $("#bear_sprite").addClass("walk_bear");

}

function stopFox() {

    console.log("fox_center");
    $("#fox_container").removeClass("moving_fox");
    $("#fox_sprite").removeClass("walk_fox");
    $("#fox_container").addClass("fox_center");

}

function stopBear() {

    console.log("bear_center");
    $("#bear_container").removeClass("moving_bear");
    $("#bear_sprite").removeClass("walk_bear");
    $("#bear_container").addClass("bear_center");

}

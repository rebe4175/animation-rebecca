$(window).on("load", sidenVises);

function sidenVises() {

    console.log("sidenVises");

    $("#quietmusic")[0].play();

    $("#fox_container").addClass("moving_fox");
    $("#fox_sprite").addClass("walk_fox");
    $("#bear_container").addClass("moving_bear");
    $("#bear_sprite").addClass("walk_bear");

    $("#fox_container").on("animationend", stopFox);
    $("#bear_container").on("animationend", stopBear);
}


function stopFox() {


    console.log("stopFox");

    $("#fox_container").off("animationend", stopFox);

    $("#fox_container").removeClass("moving_fox");
    $("#fox_sprite").removeClass("walk_fox");

    $("#fox_container").addClass("fox_center");

    $("#fox_container").on("animationend", turnFox);
}

function stopBear() {


    console.log("stopBear");

    $("#bear_container").off("animationend", stopBear);

    $("#bear_container").removeClass("moving_bear");
    $("#bear_sprite").removeClass("walk_bear");
    $("#bear_container").addClass("bear_center");

    $("#growl")[0].play();

    $("#fox_container").on("animationend", turnFox);

}

// valgmulighed 1

function turnFox() {


    console.log("turnFox");

    $("#fox_container").off("animationend", turnFox);

    $("#fox_container").removeClass("fox_center");
    $("#fox_sprite").addClass("fox_turn");

    $("#fox_container").on("animationend", foxRun);
}

function foxRun() {

    console.log("foxRun");

    $("#fox_container").off("animationend", foxRun);


    $("#fox_container").removeClass("fox_center");
    $("#fox_container").addClass("fox_run_move");
    $("#fox_sprite").addClass("fox_run")

    $("#bear_container").removeClass("bear_center");
    $("#bear_container").addClass("bear_attack");

    $("#fox_container").on("animationend", foxLose);
}


function foxLose() {

    console.log("foxLose");

    $("#fox_container").off("animationend", foxLose);


    $("#fox_container").removeClass("fox_run_move");
    $("#fox_sprite").removeClass("fox_run")

    $("#bear_container").removeClass("bear_attack");

    $("#fox_sprite").addClass("fox_lose");

    $("#foxdies")[0].play();

    $("#fox_container").on("animationend", foxyfox);



}


function foxyfox() {

    console.log("foxyfox");

    $("#fox_container").off("animationend", foxyfox);

    $("#fox_container").on("animationend", foxLose);


}


//valgmulighed 2

function foxAttack() {

    console.log("foxAttack");

    $("#fox_container").off("animationend", foxAttack);

    $("#fox_container").addClass("fox_attack");

    $("#fox_container").on("animationend", bearLose);


}


function bearLose() {

    console.log("bearLose");

    $("#fox_container").off("animationend", bearLose);

    $("#fox_container").removeClass("fox_attack");
    $("#bear_sprite").addClass("bear_dies");



}

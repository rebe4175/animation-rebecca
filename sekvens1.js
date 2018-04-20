var taeller = 0;

var erDerKlikketNok = false;


$(window).on("load", sidenVises);

function sidenVises() {

    console.log("sidenVises");

    $("#quietmusic")[0].play();

    $("#fox_sprite2").hide();

    $("#valg1").hide();
    $("#valg2").hide();
    $("#charge").hide();


    $("#clawmarks").hide();
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


}

function stopBear() {


    console.log("stopBear");

    $("#bear_container").off("animationend", stopBear);

    $("#bear_container").removeClass("moving_bear");
    $("#bear_sprite").removeClass("walk_bear");
    $("#bear_container").addClass("bear_center");

    $("#growl")[0].play();

    ValgEt();


}

function ValgEt() {


    $("#valg1").fadeIn();
    $("#valg2").fadeIn();


    $("#valg1").on("click", turnFox);
    $("#valg2").on("click", foxCharging);

}

// valgmulighed 1

function turnFox() {


    console.log("turnFox");

    $("#valg1").fadeOut();
    $("#valg2").hide();

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
    $("#clawmarks").show();
    $("#clawmarks").addClass("klo");


    $("#fox_container").on("animationend", foxLose);
}


function foxLose() {

    console.log("foxLose");



    $("#fox_container").off("animationend", foxLose);

    $("#clawmarks").hide();


    $("#fox_container").removeClass("fox_run_move");
    $("#fox_sprite").removeClass("fox_run")
    $("#bear_container").removeClass("bear_attack");

    $("#fox_sprite").addClass("fox_lose");

    $("#foxdies")[0].play();


}



//valgmulighed 2

function foxAttack() {

    console.log("foxAttack");

    $("#fox_container").off("animationend", foxAttack);

    $("#fox_container").removeClass("fox_center");

    $("#fox_container").addClass("fox_attack");
    $("#clawmarks").show();
    $("#clawmarks").addClass("klo_fox");



}

function kanKlikke() {

    console.log("kanKlikke");

    $("#charge").on("click", klikPaaKnap);
}

function klikPaaKnap() {

    console.log("klik paa knap");


    $("#charge").off("click", klikPaaKnap);

    $("#charge").addClass("puls");

    $("#charge").on("animationend", foxCharge);
}

function foxCharging() {

    console.log("foxCharging");

    $("#fox_container").off("animationend", foxCharging);

    $("#valg1").hide();
    $("#valg2").fadeOut();

    $("#charge").delay(1000).fadeIn();

    setTimeout(tidenergaaet, 10000);
    kanKlikke();
}

function foxCharge() {
    console.log("foxCharge");

    //valgmulighed 2
    $("#charge").off("animationend", foxCharge);
    $("#charge").removeClass("puls");
    $("#fox_container").addClass("fox_charge");
    taeller++;
    console.log("har klikket " + taeller + " gange");
    if (taeller >= 10) {
        console.log("fox wins");
        erDerKlikketNok = true;

        foxfaerdig();

    } else {

        // console.log("klik igen");

        erDerKlikketNok = false;

        kanKlikke();
    }

}

function tidenergaaet() {

    console.log("tiden er gaaet");

    if (erDerKlikketNok == false) {

        foxfaerdig();

    }


}

function foxfaerdig() {

    console.log("faerdig");

    if (erDerKlikketNok == true) {

        console.log("fox winning");
        foxWins();

    } else {

        (erDerKlikketNok == false);
        console.log("fox losing");
        foxLose();

    }
}


function foxAttack() {
    $("fox_container").removeClass("fox_charge");
    $("fox_container").addClass("fox_charge");
}



function bearLose() {

    console.log("bearLose");

    $("#fox_container").off("animationend", bearLose);

    $("#fox_container").removeClass("fox_attack");
    $("#bear_sprite").addClass("bear_dies");


}


function foxWins() {

    console.log("foxWins");

    $("#fox_container").off("animationend", foxWins);

    $("#fox_container").addClass("fox_attack");

    $("#fox_container").on("animationend", foxVictory);


}

function foxVictory() {

    console.log("fox victory");

    $("#fox_sprite").hide();
    $("#fox_sprite2").show();

    $("#fox_container").off("animationend", foxWins);

    $("#fox_container").removeClass("fox_attack");
    $("#fox_sprite2").addClass("win_fox");


}

function foxLoseAgain() {

    console.log("bearLose");

    $("#fox_container").off("animationend", bearLose);

    $("#fox_container").removeClass("fox_attack");
    $("#bear_sprite").addClass("bear_dies");


}



function bearWin() {

    console.log("bearWin");

    $("#fox_container").off("animationend", bearLose);

    $("#fox_container").removeClass("fox_attack");
    $("#bear_sprite").addClass("bear_dies");


}

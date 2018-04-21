var taeller = 0;

var erDerKlikketNok = false;

var rand = Math.floor(Math.random() * 4) + 1


$(window).on("load", titelBillede);


function titelBillede() {

    $("#valg1").hide();
    $("#valg2").hide();
    $("#charge").hide();
    $("#tryagain").hide();
    $("#tryagainwin").hide();
    $("#clawmarks").hide();
    $("#ildfluer_front").hide();
    $("#ildfluer_bag").hide();

    $("#startknap").on("click", sidenVises);

    $("#quietmusic")[0].play();

    document.getElementById("#quietmusic").loop = true;

}

function sidenVises() {

    $("#titel").hide();

    $("#vind")[0].play();

    console.log("sidenVises");

    $("#fox_container").off("animationend", sidenVises);

    $("#fox_sprite2").hide();
    $("#bear_sprite2").hide();
    $("#bear_sprite3").hide();

    $("#valg1").hide();
    $("#valg2").hide();
    $("#charge").hide();
    $("#tryagain").hide();
    $("#tryagainwin").hide();

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
    $("#valg2").on("click", randomValg);

}

function randomValg() {

    console.log("Random valg");

    if (Math.random() >= 0.5) {
        foxWins();
    } else {
        foxCharging();

    }

}

// valgmulighed 1

function turnFox() {


    $("#vind")[0].play();


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

    $("#attack")[0].play();


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

    $("#bear_sprite").hide();
    $("#clawmarks").hide();
    $("#bear_sprite3").show();

    $("#tryagain").fadeIn();
    $("#againbutton").on("click", reset);

    $("#foxdies")[0].play();

    $("#fox_container").removeClass("fox_run_move");
    $("#fox_sprite").removeClass("fox_run")
    $("#bear_container").removeClass("bear_attack");

    $("#fox_sprite").addClass("fox_lose");

}


function reset() {

    console.log("reset page");

    location.reload();
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

    $("#vind")[0].play();

    taeller++;

    console.log("har klikket " + taeller + " gange");

    if (taeller >= 10) {
        console.log("fox wins");
        erDerKlikketNok = true;

        foxfaerdig();

    } else {

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



    $("#charge").hide();


    console.log("faerdig");

    if (erDerKlikketNok == true) {

        console.log("fox winning");
        foxWins();

    } else {

        (erDerKlikketNok == false);
        console.log("fox losing");
        turnFox();

    }
}


function bearLose() {

    console.log("bearLose");

    $("#fox_container").off("animationend", bearLose);

    $("#fox_container").removeClass("fox_attack");
    $("#bear_sprite").addClass("bear_dies");


}


function foxWins() {

    console.log("fox Wins");

    $("#fox_container").off("animationend", foxWins);

    $("#attack")[0].play();

    $("#fox_container").addClass("fox_attack");

    $("#fox_container").on("animationend", foxVictory);


}

function foxVictory() {



    console.log("fox victory");

    $("#fox_container").off("animationend", foxVictory);

    $("#fox_sprite").hide();
    $("#fox_sprite2").show();

    $("#bear_sprite").hide();
    $("#bear_sprite2").show();

    $("#charge").hide();

    $("#valg1").hide();

    $("#valg2").hide();

    $("#tryagainwin").delay(1000).fadeIn();

    $("#againbutton2").on("click", reset);

    $("#fox_container").removeClass("fox_attack");
    $("#beardie")[0].play();
    $("#fox_sprite2").addClass("win_fox");


}

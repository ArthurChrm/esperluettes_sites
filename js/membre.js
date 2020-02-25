/*
    Script de gestion de l'affichage du texte de la fausse console

    Bibliothèque utilisée : Typed.js
*/

//Fonction d'affichage du texte de la première commande
function text_command1(){
    new Typed('#typed_command_1_text',{
        strings: [$("#command_1_text").text()],
        showCursor: false,
        onComplete: command2
    });
}

//Fonction d'affichage du texte de la deuxième commande
function text_command2(){
    new Typed('#typed_command_2_text',{
        strings: [$("#command_2_text").text()],
        showCursor: false,
        onComplete: command3
    });
}

//Fonction d'affichage du texte de la troisième commande
function text_command3(){
    new Typed('#typed_command_3_text',{
        strings: [$("#command_3_text").text()],
        showCursor: false,
    });
}

//Fonction d'affichage de la première commande
function command1(){
    new Typed('#typed_command_1',{
        strings: [$("#command_1").text()],
        showCursor: false,
        onComplete: text_command1
    });
}

//Fonction d'affichage de la deuxième commande
function command2(){
    new Typed('#typed_command_2',{
        strings: [$("#command_2").text()],
        showCursor: false,
        onComplete: text_command2
    });
}

//Fonction d'affichage de la troisième commande
function command3(){
    new Typed('#typed_command_3',{
        strings: [$("#command_3").text()],
        showCursor: false,
        onComplete: text_command3
    });
}

//Démarrage de l'animation d'écriture
command1()


/*
    Adding animation to the fake console text with Typed.js
*/

//Animation for the 1st command text
function text_command1(){
    new Typed('#typed_command_1_text',{
        strings: [$("#command_1_text").text()],
        showCursor: false,
        onComplete: command2
    });
}

//Animation for the 2nd command text
function text_command2(){
    new Typed('#typed_command_2_text',{
        strings: [$("#command_2_text").text()],
        showCursor: false,
        onComplete: command3
    });
}

//Animation for the 3rd command text
function text_command3(){
    new Typed('#typed_command_3_text',{
        strings: [$("#command_3_text").text()],
        showCursor: false,
    });
}

//Animation for the 1st command
function command1(){
    new Typed('#typed_command_1',{
        strings: [$("#command_1").text()],
        showCursor: false,
        onComplete: text_command1
    });
}

//Animation for the 2nd command
function command2(){
    new Typed('#typed_command_2',{
        strings: [$("#command_2").text()],
        showCursor: false,
        onComplete: text_command2
    });
}

//Animation for the 3th command
function command3(){
    new Typed('#typed_command_3',{
        strings: [$("#command_3").text()],
        showCursor: false,
        onComplete: text_command3
    });
}

//Animation start
command1()


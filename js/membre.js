
function text_command1(){
    new Typed('#typed_command_1_text',{
        strings: [$("#command_1_text").text()],
        onComplete: command2
    });
}

function text_command2(){
    new Typed('#typed_command_2_text',{
        strings: [$("#command_2_text").text()],
        onComplete: command3
    });
}

function text_command3(){
    new Typed('#typed_command_3_text',{
        strings: [$("#command_3_text").text()],
    });
}

function command1(){
    new Typed('#typed_command_1',{
        strings: [$("#command_1").text()],
        showCursor: false,
        onComplete: text_command1
    });
}

function command2(){
    new Typed('#typed_command_2',{
        strings: [$("#command_2").text()],
        showCursor: false,
        onComplete: text_command2
    });
}

function command3(){
    new Typed('#typed_command_3',{
        strings: [$("#command_3").text()],
        showCursor: false,
        onComplete: text_command3
    });
}

command1()


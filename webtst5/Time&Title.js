function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
    t = setTimeout(function() {
        startTime()
    }, 1000);
}

window.onload = function () {
    startTime();
}

// document.getElementById("inp").addEventListener('keypress',refresh());

function checkUp() {
    var input = document.getElementById("inp").value;
    // console.log(input);
    if( input.includes("!") || input.includes("@") || input.includes("#") || input.includes("$") || input.includes("%") || input.includes("^") || input.includes("&") || input.includes("*") || input.includes("(") || input.includes(")") || input.includes("-") || input.includes("+") || input.includes("/") || input.includes(">") || input.includes(".") || input.includes("<") || input.includes(",") || input.includes(";") || input.includes(".") || input.includes("'") || input.includes("|") || input.includes("]") || input.includes("[") || input.includes("}") || input.includes("{") || input.includes("~") || input.includes("`") || input.includes("±") || input.includes("§") || input.includes("_") || input.includes("=") || input.includes("?") || input.includes(" \\")) {
        document.getElementById("inp").value = input.substr(0,input.length-1);
    }
}


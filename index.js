function shout(string) {
    return string.toUpperCase();
  }
function whisper(string) {
    return string.toLowerCase();
  }
function logShout(string) {
    console.log(string.toUpperCase());
}
function logWhisper(string){
    console.log(string.toLowerCase());
}
function sayHiToGrandma (string){
    // check if the string is lowercase
    if (string.toLowerCase() === string) {
return "I can't hear you!";
    }
    if (string.toUpperCase() === string) {
return "YES INDEED!";
    }

    if (string === "I love you, Grandma."){
        return "I love you, too.";
    }
}

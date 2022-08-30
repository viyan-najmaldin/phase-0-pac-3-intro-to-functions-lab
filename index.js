function whisper(text) {
  return text.toLowerCase();
}

console.log(whisper("Hiii"));

function shout(text) {
  return text.toUpperCase();
}

shout("hello");

function logShout(text) {
  return console.log(text.toUpperCase());
}

logShout("viyan");

function logWhisper(text) {
  return console.log(text.toLowerCase());
}
logWhisper("What");

function sayHiToHeadphonedRoommate(text) {
  if (text === text.toLowerCase(text)) {
    return "I can't hear you!";
  } else if (text === text.toUpperCase(text)) {
    return "YES INDEED!";
  } else if (text === "Let's have dinner together!") {
    return "I would love to!";
  }
}
console.log(sayHiToHeadphonedRoommate("okey just Test it"));
sayHiToHeadphonedRoommate("viyann");

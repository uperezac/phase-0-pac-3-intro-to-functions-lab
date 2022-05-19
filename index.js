function shout(string) {
    return string.toUpperCase();
}
shout()
function whisper(string) {
    return string.toLowerCase();
}
whisper()
function logShout(string) {
    console.log(string.toUpperCase());
}
logShout()
function logWhisper(string) {
    console.log(string.toLowerCase());
}
logWhisper()
function sayHiToHeadphonedRoommate (string) {
    const noHear = "I can't hear you!";
    const yesHear = "YES INDEED!";
    const yesDinner = "I would love to!";
    if (string.toLowerCase(string) === string) {
      return noHear;
    }
    else if (string.toUpperCase(string) === string) {
      return yesHear;
    }
    else if ("Let's have dinner together!" === string) {
      return yesDinner
    }
  }
  sayHiToHeadphonedRoommate()
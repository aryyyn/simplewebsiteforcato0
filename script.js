let muteState = false;
const muteIcon = document.getElementById("mute-icon");

function toggleMute() {
   muteState = !muteState;
   muteIcon.style.display = muteState ? "block" : "none";
}


function btn1()
{
    window.open("https://discord.com/oauth2/authorize?client_id=1009772633790877736&permissions=1133584&scope=bot", '_blank');
}

function btn2()
{
    window.open("https://discord.com/oauth2/authorize?client_id=1058677525791907840&permissions=1133584&scope=bot", '_blank');
}

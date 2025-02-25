var laguDariServer = null;
var audio = document.getElementById("pemutarlagu")
var sedangDiputar  = 0;



$(document).ready(function () {
});$.ajax({
    type: "GET",
    url: "http://192.168.1.111/semualagu.php",
    success: function (response) {
        laguDariServer = response
        console.log (laguDariServer)
        playlagu(sedangDiputar);
        buatPlaylist();
    }
});

function playlagu(nomor) {
    sedangDiputar=nomor;

    $("#artis").html(laguDariServer[nomor].artis);
   $("#judul").html(laguDariServer[nomor].judul);
   $("#lirik").html(laguDariServer[nomor].lirik);

   var audio = document.getElementById("pemutarlagu")
   audio.src = laguDariServer[nomor].url;
   audio.load();
   audio.play();

}

function laguBerikut(){
    sedangDiputar++;
    playlagu(sedangDiputar);

}

function laguSebelum(){
    sedangDiputar--;
    playlagu(sedangDiputar);
    
}

function pause(){
    audio.pause();
}

function buatPlaylist(){
    $.each(laguDariServer, function (indexInArray, valueOfElement) { 
        $("#Playlist").append(
            "<p data-bs-dismiss='modal' onclick='playlagu("+indexInArray+")' >"+
            valueOfElement.artis+
            " - "+
            valueOfElement.judul+
            "</p>"
        );
         
    });
}
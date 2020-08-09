$(document).ready(function(){

    $("button").on("click",(event)=>{
        const randomNumber = Math.floor(Math.random()*data.length);
        console.log(data);
        $("iframe").attr("src","https://www.youtube.com/embed/"+data[randomNumber].url);
        $(".videoDescription").html(data[randomNumber].name);
        $(".followThisArtist").css("display","flex");
        $(".linkLogosFollow").css("display","flex");
        $("#instagramFollow").attr("href",data[randomNumber].instagramURL);
        $("#facebookFollow").attr("href",data[randomNumber].facebookURL);
        $("#bandcampFollow").attr("href",data[randomNumber].bandcampURL);
    })

})
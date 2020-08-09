$(document).ready(function(){

    $("button").on("click",(event)=>{
        const randomNumber = Math.floor(Math.random()*data.length);
        console.log(data);
        $("iframe").attr("src","https://www.youtube.com/embed/"+data[randomNumber].url);
        $(".videoDescription").html(data[randomNumber].name);
    })

})
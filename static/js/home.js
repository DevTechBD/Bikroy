$(document).ready(function () {
    $(".fb-like-text").mouseover(function() {
        $("#fb-like-shadow").css("transition", "all 0.5s ease")
        $("#fb-like-shadow").css("boxShadow", "10px 10px 5px gray")
    })

    $(".fb-like-text").mouseout(function() {
        $("#fb-like-shadow").css("boxShadow", "none")
    })

    $("input[name='searchBox']").focus(function() {
        $(".searchBx").css("transition", "all 0.5s ease")
        $(".searchBx").css("border", "3px solid #80BDFF")
    })

    $("input[name='searchBox']").blur(function() {
        $(".searchBx").css("border", "3px solid #32e17c")
    })
})
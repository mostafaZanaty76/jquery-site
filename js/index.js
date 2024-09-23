$(document).ready(function () {

    let aboutOffset = $('#about').offset().top;
    $(window).scroll(function () {
        let wScroll = $(window).scrollTop();
        if (wScroll > aboutOffset - 50) {
            $('#main-nav').css('backgroundColor', 'rgba(0,0,0,0.7)')
            $('#btnUp').fadeIn(500)
        }
        else {
            $('#main-nav').css('backroundColor', 'transpare')
            $('#btnUp').fadeOut(500)
        }
    })
    $("a[href^='#']").click(function (e) {
        let Ahref = $(e.target).attr('href');
        let sectionOffset = $(Ahref).offset().top;
        $('html,body').animate({ scrollTop: sectionOffset }, 2000)
    });
    $('#btnUp').click(function () {
        console.log('hello')
        $('html,body').animate({ scrollTop: 0 }, 1000)
    })

    $("#loading .spinner").fadeOut(1000, function () {
        $("#loading").fadeOut(1000, function () {
            $("#loading").remove();
            $("body").css('overflow', 'auto');
        })
    })
})


$("#sideBar i").click(function()
{
    let boxWidth=$('.box').outerWidth();
    if ($("#sideBar").css('left')==='0px'){
        $("#sideBar").animate({left:`-${boxWidth}`},1000);
    }
    else{
        $("#sideBar").animate({left:`0px`},1000)
    }
   
})
let colorSpans = $("#sideBar  span");
// for(let i =0;i<colorSpans.length ; i++)
// {
//     let red = math.round( math.random() *255);
//     let green = math.round( math.random()  *255);
//     let blue = math.round(  math.random() *255);
//     colorSpans.eq(i).css('backgroundColor',`rgb(${red},${green},${blue})`)
// }
$("#sideBar span").eq(0).css('backgroundColor','tomato')
$("#sideBar span").eq(1).css('backgroundColor','orange')
$("#sideBar span").eq(2).css('backgroundColor','#09c')
$("#sideBar span").eq(3).css('backgroundColor','teal')
$("#sideBar span").eq(4).css('backgroundColor','lightblue')
 
colorSpans?.click(function(e){
    let color = $(e.target).css('backgroundColor');
    $(".change").css('color',color)
    // console.log(color);
    $("body").css('color',color);
    
})

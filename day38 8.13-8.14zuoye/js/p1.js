
$(function(){
    var a =0
    $(".zeng").click(function(){
        a++
        var tr = $("<tr></tr>").addClass("trr")
        var td1 = $("<td></td>").html($("<input type='text'>").css({
            'width':100+"%",
            'height':100+"%",

        }).addClass("inn1")).addClass("td1")
        var td2 = $("<td></td>").html($("<input type='text'>").css({
            'width':100+"%",
            'height':100+"%",

        }).addClass("inn2")).addClass("td2")
        var td3 = $("<td></td>").html($("<input type='text'>").css({
            'width':100+"%",
            'height':100+"%",

        }).addClass("inn3")).addClass("td3")

        var td4 = $("<td></td>").addClass("td4")
        
        var i = 0
        var bian = $("<a></a>").text("保存").click(function(){
            i++
            if(i==1){
                console.log(123)
                // console.log($(this).parent().parent().children().eq(0).children(".inn1").val())
                var e = $(this).parent().parent().children().eq(0).children(".inn1").val()
                var r = $(this).parent().parent().children().eq(1).children(".inn2").val()
                var t = $(this).parent().parent().children().eq(2).children(".inn3").val()
                $(this).parent().parent().children().eq(2).children(".inn3").remove()
    
                $(this).parent().parent().children().eq(0).text(e)
                $(this).parent().parent().children().eq(1).text(r)
                $(this).parent().parent().children().eq(2).text(t)
                $(this).text("修改").toggleClass("xiu bao")
            }else if(i==2){
                console.log($(this).parent().parent().children().eq(0).text())
                var ee = $(this).parent().parent().children().eq(0).text()
                var rr = $(this).parent().parent().children().eq(0).text()
                var tt = $(this).parent().parent().children().eq(0).text()

                $(this).parent().parent().children().eq(0).html($("<input type='text'>").css({
                                    'width':100+"%",
                                    'height':100+"%",
                        
                }).addClass("inn1").val(ee))
                $(this).parent().parent().children().eq(1).html($("<input type='text'>").css({
                    'width':100+"%",
                    'height':100+"%",
        
                }).addClass("inn2").val(rr))

                $(this).parent().parent().children().eq(2).html($("<input type='text'>").css({
                    'width':100+"%",
                    'height':100+"%",

                }).addClass("inn3").val(tt))

                $(this).text("保存")
                i=0

            }

            return false 
        })
    
        var shan = $("<a></a>").text("删除").addClass("shan").click(function(){
            shan.parent().parent().remove()
            return false
        })
        // bao()


        $(".tab").append(tr)
        td4.append(bian)
        td4.append(shan)


        tr.append(td1)
        tr.append(td2)

        tr.append(td3)
        tr.append(td4)


    })


   
})


$(function(){
    var arr = []
    $(".tij").click(function(){
        // console.log($(".form_card_body input").length)
        // for(var n = 0;n<$(".form_card_body input").length;n++){
        //     // console.log($(".form_card_body input").val())
        // console.log(!($(".form_card_body input").eq(n).val())==true)
        // // console.log($(".tab tr").length)
           
        //     if(!($(".form_card_body input").eq(n).val())==true){
        //         console.log(12)
        //         $(".form_card_body input").eq(n).addClass("red")
        //         var p = $("<p>这个地方不可以为空值</p>").css("color","red").addClass("pp")
        //         $(".form_card_body input").eq(n).parent().append(p)
        //         // if(($(".tab tr").length)<1){
        //             // console.log(455)
        //             // alert("表格部分也不可以为空")

        //         var ppp = $("<p>这个地方也不可以为空值</p>").css("color","red").addClass("pp")
        //         $(".form_table").append(ppp)
                    
        //         // }
                
        //     }else if(!($(".form_card_body input").eq(n).val())==false){
        //         $(".pp").remove()
        //         $(".form_card_body input").eq(n).removeClass("red")
        //     }else if(!($(".form_card_body input").eq(n).val())==false&&($(".tab tr").length)>1){
        //         console.log(54645985)
        //     }
             

           
        // }
        var xx ={
            "cangku1":{
                'ming':$(".innp1").val(),
                'ming2':$(".innp2").val(),
                'ming3':$(".innp3").val(),
                'ming4':$(".innp4").val(),
                'ming5':$(".innp5").val(),
                'ming6':$(".innp6").val(),
            },
            "cangku2":{
                'ming':$(".innp7").val(),
                'ming2':$(".innp8").val(),
                'ming3':$(".innp9").val(),
                'ming4':$(".innp10").val(),
                'ming5':$(".innp11").val(),
                'ming6':$(".innp12").val(),
            },
            // 'biaoge':{
            //     'biao1':$("trr1").children(".td1").text(),
            //     'biao2':$("trr1").children(".td2").text(),
            //     'biao3':$("trr1")[j].children(".td3").text(),

            // }
        }
        arr.push(xx)
        // if(($(".tab tr").length)>1){
        //     console.log($(".tab .trr").length)
        //     for(var j = 0 ;j<$(".tab .trr").length;j++){
        //         console.log(($(".tab .trr")[j]).eq(0))
        //         // var xxx={
        //         //     'biaoge':{
        //         //         'biao1':$(".trr")[j].children(".td1").text(),
        //         //         'biao2':$(".trr")[j].children(".td2").text(),
        //         //         'biao3':$(".trr")[j].children(".td3").text(),

        //         //     }
        //         // }
        //         // arr.push(xxx)
        //     }
            

        // }
        
        console.log(arr)
       

        
       
        
       


    })
})
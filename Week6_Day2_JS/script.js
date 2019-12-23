$(function () {
    /*   console.log("Hello, world!");
  
      $("li:first").addClass("stil");
      $("li").addClass("upperCase");
      $("li:last").addClass("active");
      /*   $("li:nth-child(3)").addClass("middle");
    $("li").eq(Math.floor($("li").length / 2)).addClass("middle"); */


    var arr = ["https://www.stopmandatoryvaccination.com/wp-content/uploads/2015/06/Advertise-300X350.gif",
        "https://www.stopmandatoryvaccination.com/wp-content/uploads/2015/06/Advertise-300X350.gif",
        "https://www.stopmandatoryvaccination.com/wp-content/uploads/2015/06/Advertise-300X350.gif",
        "https://www.stopmandatoryvaccination.com/wp-content/uploads/2015/06/Advertise-300X350.gif",
        "https://www.stopmandatoryvaccination.com/wp-content/uploads/2015/06/Advertise-300X350.gif"];

    var res = [];

    var $body = $("body");

    for (var i = 0; i < arr.length; i++) {
        res[i] = $('<img>').attr("src", arr[i]);
        res[i].css("float", "left");

        $body.append(res[i])/* .append("<br><br>") */;
    }


    $("body").prepend("<h1> Amazing Gallery</h1>");

    for (var i = 0; i < res.length; i++) {
        res[i].width(Math.random() * 150 + 100);
        /*  res[i].height(Math.random() * 350 + 300); */
    }


    $("img").each(function () {

        if ($(this).width() > 200) return false;

        $(this).css({
            "border-color": "red",
            "border-width": "3px",
            "border-style": "solid"
        });

    }

    );









});


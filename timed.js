$(document).ready(function () {
        var now = new Date();
        var timedBanners = document.getElementsByClassName("timed");
        for (var i = 0; i < timedBanners.length; i++) {
            var start_date=new Date(timedBanners[i].getAttribute("start"));
            var end_date=new Date(timedBanners[i].getAttribute("end"));
            if ((now < end_date) && (now > start_date)) {
                $(timedBanners[i]).toggle();
            }
        }
    });

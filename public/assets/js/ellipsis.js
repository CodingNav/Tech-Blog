
var showChar = 200;
var ellipsestext = "...";
var moretext = "[more]";

document.querySelectorAll(".post-message").forEach(function (item) {
    var content = item.innerHTML;

    if (content.length > showChar) {

        var c = content.substr(0, showChar);

        var html = c + '<span class="moreellipses">' + ellipsestext + '&nbsp;</span><span class="morecontent"><span>' + '</span>&nbsp;&nbsp;<span>' + moretext + '</span></span>';

        item.innerHTML = html;
    }

});

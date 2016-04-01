//updateFooterTime = (function() {
//    var serverTzDisplay='CST';
//    var serverServerDateAndGMTOffset = new Date(1459283897050)
//    var serverLocalOffset = serverServerDateAndGMTOffset.getTime() - (new Date()).getTime();
//
//    return function() {
//        var offsetDate = new Date((new Date()).getTime() + serverLocalOffset);
//        var dateString = offsetDate.toUTCString()
//            .replace(/GMT/, serverTzDisplay)
//            .replace(/UTC/, serverTzDisplay);
//
//        document.getElementById('serverTime').innerHTML = dateString;
//
//
//        setTimeout('updateFooterTime()', 1000);
//    };
//})();
updateFooterTime = (function() {
    var serverTzDisplay='CST';
    var serverServerDateAndGMTOffset = new Date()
    var offset=8
    var serverLocalOffset = serverServerDateAndGMTOffset.getTimezoneOffset()*60000 + (new Date()).getTime()+offset*3600000;

    return function() {
        var offsetDate = new Date(serverLocalOffset);
        var dateString = offsetDate.toLocaleString()
            .replace(/GMT/, serverTzDisplay)
            .replace(/UTC/, serverTzDisplay)
            .replace(/DST/, serverTzDisplay);

        document.getElementById('serverTime').innerHTML = dateString;

        setTimeout('updateFooterTime()', 1000);
    };
})();
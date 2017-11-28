$test = (function () {

    $global = (function () {
        return {
            currentImage: null,
            myTimer: null,
            website: "website"
        }
    })();

    $utility = (function () {

        return {            
            test: function (s) {
                alert(s);
            }            
        }
    })()

})();
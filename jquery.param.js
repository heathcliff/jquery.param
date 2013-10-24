jQuery.extend({
    getHashParam: function(name) {
        var regex   = new RegExp("(#)("+name+")(\=)([^#]*)"),
            matches = [];
        matches = regex.exec(window.location.hash);
        if (matches !== null && matches.length > 4 && matches[4] !== null) {
            return matches[4];
        } else {
            return false;
        }
    },
    updateHashParam: function(key, value) {
        var hash = window.location.hash;
        value = encodeURIComponent(value);
        if (!jQuery.getHashParam(key)) {
            window.location.hash = window.location.hash + '#' + key + '=' + value;
            return true;
        } else {
            var regex   = new RegExp("(#)("+key+")(\=)([^#]*)"),
                matches = [];
            matches = regex.exec(window.location.hash);
            if (matches !== null && matches.length > 0 && matches[0] !== null) {
                window.location.hash = hash.replace(matches[0], '#' + key + '=' + value);
                return true;
            }
        }
        return false;
    },
    getParam: function(name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regexS = "[\\?&]" + name + "=([^&#]*)";
        var regex = new RegExp(regexS);
        var results = regex.exec(window.location.search);
        if(results == null) {
            return "";
        } else {
            return decodeURIComponent(results[1].replace(/\+/g, " "));
        }
    }
});
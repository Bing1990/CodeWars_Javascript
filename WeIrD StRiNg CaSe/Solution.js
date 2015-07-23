function toWeirdCase(string) {

    function singleWeird(e) {
        var word = e.split('');
        for (var i = 0; i < word.length; i += 2) {
            word[i] = word[i].toUpperCase();
        }
        return word.join('');
    }

    return string.split(' ').map(function (e) {
        return singleWeird(e);
    }).join(' ');
}
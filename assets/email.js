var link = document.getElementsByTagName && document.getElementsByTagName("a");
	var email, e;
	for (e = 0; link && e < link.length; e++) {
		if ((" "+link[e].className+" ").indexOf(" email ") >= 0) {
			email = link[e].firstChild.nodeValue || "";
			email = email.replace(/dot/ig, ".");
			email = email.replace(/\(at\)/ig, "@");
			email = email.replace(/\s/g, "");
			if (/^[^@]+@[a-z0-9]+([_\.\-]{0,1}[a-z0-9]+)*([\.]{1}[a-z0-9]+)+$/.test(email)) {
				link[e].href = "mailto:" + email;
				link[e].firstChild.nodeValue = email;
			}
		}
	}
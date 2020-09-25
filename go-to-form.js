
function generateURL() {

	$.ajaxSetup({
	    async: false
	});

	$.getJSON("gifts.json", function(data) {
		var kids = data;

		var randomKid = kids.sort(function() { return 0.5 - Math.random() })[0];

		$.entries = { 
			"entry.1897858937": randomKid.name, 
			"entry.733959159": randomKid.age,
			"entry.1066679739": randomKid.city
		};

		console.log($.entries);

	});

	console.log(jQuery.entries);	

	var str = jQuery.param(jQuery.entries);

	var base = "https://docs.google.com/forms/d/e/1FAIpQLSdf-t5c-h9GdBvL4yYZFgYT7JMbnOtR7MIbTI8ESvHamQAWaA/viewform"

	return base.concat("?").concat(str);
}

function goToForm() {
  window.location.href = generateURL();
}
function generateURL() {

	$.ajaxSetup({
	    async: false
	});

	// ID of the Google Spreadsheet
	var spreadsheetID = "1Tlg18RZaL61iFap1gXSXkZhEJinMcyiojIDFHo2HlPg";

https://docs.google.com/spreadsheets/d/e/2PACX-1vR08296bfdjzLdCZjthaupgUCALfNe72ro2QceaYa--fT6vGNpOUeoBkSTFUlABzdWY_llA12272h2P/pubhtml?gid=0&single=true

	// Make sure it is public or set to Anyone with link can view 
	var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/1/public/values?alt=json";

	console.log(url);

	$.ajax({
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vR08296bfdjzLdCZjthaupgUCALfNe72ro2QceaYa--fT6vGNpOUeoBkSTFUlABzdWY_llA12272h2P/pub?gid=0&single=true&output=csv",
    async: false,
    success: function (csvd) {

		console.log(csvd);

		var kids = $.csv.toObjects(csvd);

		var randomKid = kids.sort(function() { return 0.5 - Math.random() })[0];

		$.entries = { 
			"entry.1897858937": randomKid.nome, 
			"entry.733959159": randomKid.idade,
			"entry.1066679739": randomKid.cidade
		};

		console.log($.entries);

        // var jsonobject = JSON.stringify(items);
        // alert(jsonobject);
    },
    complete: function () {
        // call a function on complete 
    }
});

	// $.getJSON(url, function(data) {
	// 	var kids = data;

	// 	var randomKid = kids.sort(function() { return 0.5 - Math.random() })[0];

	// 	$.entries = { 
	// 		"entry.1897858937": randomKid.nome, 
	// 		"entry.733959159": randomKid.idade,
	// 		"entry.1066679739": randomKid.cidade
	// 	};

	// 	console.log($.entries);

	// });

	console.log(jQuery.entries);	

	var str = jQuery.param(jQuery.entries);

	var base = "https://docs.google.com/forms/d/e/1FAIpQLSdf-t5c-h9GdBvL4yYZFgYT7JMbnOtR7MIbTI8ESvHamQAWaA/viewform"

	return base.concat("?").concat(str);
}

function goToForm() {
	console.log(generateURL());

  // window.location.href = generateURL();
}
//$('.search-button').click(function () {
//	alert("button is now clicked!");
//		})



var showWiki = () => {
var $linkElement = $('#links');
var searchField = $('#searchField').val();
var wikiURL = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchField + "&format=json&callback=wikiCallback?";

//var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm + "&format=json&callback=?";

$.ajax({
	url: wikiURL,
	dataType: "jsonp",
	jsonp: "callback",
	success: function(res) {
		var linkList = res[1];
		linkList.forEach(function(item) {
			var url = 'https://en.wikipedia.org/wiki/' + item;
			$linkElement.append('<li><a href="' + url + '">' + item + '</a></li>');
			return url;
			console.log(url + item);
		})
	}


	});

	return false;


};

$('#form').submit(showWiki);

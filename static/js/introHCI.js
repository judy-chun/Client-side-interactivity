'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Ask your own heart.");
		$("#testjs").text("Please Wait...");
		$("#testjs").toggleClass("active");
	});
	$("a.thumbnail").click(projectClick);

function projectClick(e) {
	//prevent page from reloading
	e.preventDefault();
	//In an event handler, $(this) refers
	//the object that triggered the even
	var containingProject = $(this).closest(".project");
	var description = $(containingProject).find(".project-description");

	if(description.length == 0){
		$(containingProject).append("<div class= 'project-description'><p>Description of the Project.</p></div>");
	}

	else{
		description.fadeOut();
	}
}

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}
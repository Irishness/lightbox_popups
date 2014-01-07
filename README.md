<h2><b>Simple Lightboxes Tool & Library</b></h2>
by Jon O'Shaughnessy
www.jonoshaughnessy.org/projects

<center><h2><a href="http://www.jonoshaughnessy.org/projects/projects/lightboxes">Demo</a></h2></center>


<h2><b>Legal and License: </b></h2>

	The MIT License

	This lightbox library is licensed under the MIT License, which means you can:
		Use it for personal stuff
		Use it for commercial stuff
		Change it however you like
		... all for free. In exchange, you have to give proper credit to www.jonoshaughnessy.org if you use it.
	
<h2><b>Purpose</b></h2>

The goal is to create a dead simple library to easily add popups/lightboxes to your app or website. Tons of documentation included. Appropriate for either experienced developers or those who know little to no coding.
		
<h2><b>What you can do:</b></h2>

Create lightboxes in only two lines of code, like so:
	
		var d1 = generateLightBox("top", "right", "#c9c456");
		lightboxContentHelper(d1, "This is a lightbox content...", "Title");


<h2><b>What's Included</b></h2>

	index.html 				- simple html demo page
	js/lightbox_examples 	- examples of lightbox functions. See them in the live demo link above
	js/lightbox_library		- lightbox javascript definitions
	js/libs					- a copy of JQuery
	css/buttons.css			- css for the buttons on the sample page
	css/lightbox.css		- css for the lightboxes
	

<h2><b>To Use</b></h2>

	1) Create a new function to call a lightbox.
	
		a) copy/paste one of the example functions from lightbox_examples, for example:
		
		function example2() {
			var d1 = generateLightBox("top", "right", "#c9c456");
			lightboxContentHelper(d1, "This is a lightbox content... with a tiger. Rawr.", "Title", "imgs/tiger.jpg", "Button1");
		}

		b) change the function name and the parameters to whatever you like (see lightbox_examples for more info on how to do this).
 
	2) Call your new function. In our examples, we set our lightboxes to appear when someone clicks one of the buttons in index.html, like this:
	
			<button onclick="example3();" class="buttonMedium buttonBase">Example 3</button>

	3) Enjoy your new lightbox. 
	

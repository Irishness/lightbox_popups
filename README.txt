Simple Lightboxes Tool & Library by Jon O'Shaughnessy
www.jonoshaughnessy.org/projects


Legal and License: 

	The Creative Commons Attribution 3.0 License

	This lightbox library is licensed under the Creative Commons Attribution 3.0 License, which means you can:
		Use it for personal stuff
		Use it for commercial stuff
		Change it however you like
		... all for free. In exchange, you have to give proper credit to www.jonoshaughnessy.org if you use it.
	
Purpose: 

The goal is to create a dead simple library - for either experienced developers or those who know little to no coding - to easily build lightboxes.

		Create a lightbox with only two simple lines of code:
		
What you can do:

	Create lightboxes in only two lines of code, like so:
	
		var d1 = generateLightBox("top", "right", "#c9c456");
		lightboxContentHelper(d1, "This is a lightbox content...", "Title");


What's included:

	index.html 			- simple html page with a couple of buttons that call the lightbox functions. Go here to www.jonoshaughnessy.org/
	js/lightbox_examples 		- examples of lightbox functions
	js/lightbox_library		- javascript definitions
	js/libs				- jQuery
	css/buttons.css			- css for the buttons on the sample page
	css/lightbox.css		- css for the lightboxes
	

To Use:

	1) Make sure all of the includes (lines 4-8 in index.html) are included in the html page that you want to use the javascript.
	2) Make sure the /js folder is located in the same directory
	3) Create a new function to call a lightbox.
		3a) copy/paste one of the example functions from lightbox_examples, for example:
		
		function example2() {
			var d1 = generateLightBox("top", "right", "#c9c456");
			lightboxContentHelper(d1, "This is a lightbox content... with a tiger. Rawr.", "Title", "imgs/tiger.jpg", "Button1");
		}

		3b) change the function name and the parameters to whatever you like (see lightbox_examples for more info on how to do this).
 
	4) Call your new function in your html page when you want it. In our examples, we set our lightboxes to appear when someone clicks one of the buttons in index.html:
	
			<button onclick="example3();" class="buttonMedium buttonBase">Example 3</button>

	5) Enjoy your new lightbox. 
	

/*  
	There are two sections here. One for those who know how to code, and one for those who don't.
		The first three examples are for those who DO understand code and want to just call the lightbox functions directly.
		The fourth and fifth examples are for those who DONT understand code and just want to plug in some inputs and make lightboxes.
*/

/* 
----------------------------------------------------------------------------------------------------------------------------------------------------------
For those who DO understand how to code:

There are two functions to call, one to create and position the lightbox (generateLightBox()) and one to populate the content (lightboxContentHelper()). 
Alternatively, instead of using the helper function you can populate the content manually with document.getElementById().innerHTML.
Examples 1 and 2 use lightboxContentHelper, example 3 populates it manually. 

Here's how they work:

generateLightBox(vpos, hpos, color, width, height) 
	only requires two inputs: vpos and hpos (positions), with the other three optional.
 
	vpos accepts four values to position the lightbox vertically: 'top', 'center', 'bottom', or a number. A number is a custom .top value as a percent  (i.e. "4" is the same as lightbox.style.top = "4%";)
	hpos accepts four values to position the lightbox horizontally: 'left', 'center', 'right', or a number. A number is a custom .left value as a percent (i.e. "29" is the same as lightbox.style.left = "29%";)
	color is the background color of the lightbox, assigned as a hex value (i.e. #c45fd3)
	width and height are used to manually set the lightboxes dimensions (in pixels). If left blank, the lightbox will fit to the content. 
	
lightboxContentHelper(id, body, title, image, button1, button1_action, button2, button2_action, button3, button3_action) 
	only requires two parameters: id and body, the rest are optional. 
	
	id 				the id of the lightbox you want to change/modify
	body			content to put in the body of the lightbox.
	title			lightbox title (optional)
	image			src of an image to use in the lightbox (optional)
	button1			text of a button to include (optional)
	button1_action	sets the onClick of the button (in addition to clearing the lightbox) (if left blank, will only clear the lightbox)
		
----------------------------------------------------------------------------------------------------------------------------------------------------------
*/	

// Example 1

function example1() {
			var d1 = generateLightBox("center", "center", "#492cf6");										
			lightboxContentHelper(d1, "...With some of body content.", "This is a sample lightbox", "", "Button with an alert", "alert('hi. note that the action includes the lightbox fadeout.')", "HI!", "alert('HI!!!!!!')", "Button3 with No action");	th
}

//Example 2
// This one includes a picture and only has one button without an action assigned to it. 

function example2() {
			var d1 = generateLightBox("top", "right", "#c9c456");
			lightboxContentHelper(d1, "This is a lightbox content... with a tiger. Rawr.", "Title", "imgs/tiger.jpg", "Button1");
}
	
//Example 3
// Same as above, except this one assigns the content of the lightbox manually. It also manually sets the dimensions to 400px wide and 200px high.

function example3() {
			var d1 = generateLightBox(21, 12, "#49cf59", 300, 200);
			document.getElementById(d1).innerHTML = "<div>This is a lightbox with content created by hand <br>(without a helper function)<br><br><br><i>Not too shabby</i></div>";	
}


/* 
----------------------------------------------------------------------------------------------------------------------------------------------------------
For those who DONT understand how to code well, no sweat... we'll walk you through it:

	How to use: 1) copy and paste the entire block of code below (lines 77-105). 
				2) Fill in each variable inside the quotes ''
				4) make sure the function is called to make the lightbox appear - for example onLoad() or in a button, like we have in these examples (see index.html for how that's done)
				3) Boom. You're done.
				(if you're having trouble, be sure to read the README)
----------------------------------------------------------------------------------------------------------------------------------------------------------
*/	

//Example 4

function yourExampleLightbox() {
	
	// Set these variables below to create your lightbox.
	
		// These are mandatory
		var vertical_position = 	'center';				// Accepts 'top', 'center', 'bottom', or a number which represents how far from the top of the screen to place the lightbox (as a % of screen size)
		var horizontal_position = 	'left';					// Accepts 'left', 'center', 'right', or a number which represents how far from the left of the screen to place the lightbox (as a % of screen size)
		var body_content = 			'This is some sample body content for your lightbox.';
		
		//These are optional. Leave as '' if you want to use the defaults.
		var lightbox_color = 		'#d37c59';				// Set the background color of your lightbox as a hex value (i.e. #43cf5d). Blue if left blank.
		var lightbox_width = 		'500';					// Normally leave blank to have box fit to the size of your content. Use this to manually set the width if your lightbox in pixels
		var lightbox_height = 		'440';					// Normally leave blank to have box fit to the size of your content. Use this to manually set the height if your lightbox in pixels
		var title = 				'Your Title';			// Give your lightbox a title
		var image = 				'imgs/tiger.jpg';		// Add an image to your lightbox
		
		// Add buttons (optional). Leave as '' if you don't want to add buttons
		var button1_text = 			'My sample button';		// Add a button. Give it some text
		var button1_action = 		'alert("hi");';			// ... and an action. 
		var button2_text = 			'Another button';		//
		var button2_action = 		'';						// leave blank to not add an action
		var button3_text = 			'';
		var button3_action = 		'';
		
	// Don't touch these, unless you know what you are doing. 
			var d1 = generateLightBox(vertical_position, horizontal_position, lightbox_color, lightbox_width, lightbox_height);
			lightboxContentHelper(d1, body_content, title, image, button1_text, button1_action, button2_text, button2_action, button3_text, button3_action);
	}
	
//Example 5 - Your turn
// Create your own

function yourExampleLightbox2() {
	
		// These are mandatory
		var vertical_position = 	'center';				// Accepts 'top', 'center', 'bottom', or a number which represents % of screen from the top to place the lightbox
		var horizontal_position = 	'center';				// Accepts 'left', 'center', 'right', or a number which represents % of screen from the left to place the lightbox
		var body_content = 			'Floor if yours. Fill these in however you want';
		
		//These are optional. Leave as '' if you want to use the defaults.
		var lightbox_color = 		'';						// Set the background color of your lightbox as a hex value (i.e. #43cf5d). Blue if left blank.
		var lightbox_width = 		'';						// Normally leave blank to have box fit to the size of your content. Use this to manually set the width if your lightbox in pixels
		var lightbox_height = 		'';						// Normally leave blank to have box fit to the size of your content. Use this to manually set the height if your lightbox in pixels
		var title = 				'Fill me in.';			
		var image = 				'';						
		var button1_text = 			'My sample button';		
		var button1_action = 		'';						
		var button2_text = 			'';						
		var button2_action = 		'';
		var button3_text = 			'';
		var button3_action = 		'';
		
	
	// Don't touch these, unless you know what you are doing. 
			var d1 = generateLightBox(vertical_position, horizontal_position, lightbox_color, lightbox_width, lightbox_height);
			lightboxContentHelper(d1, body_content, title, image, button1_text, button1_action, button2_text, button2_action, button3_text, button3_action);
	}
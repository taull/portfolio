$(document).ready(function(){

	$('.connect-button').on('click', function(){
		event.preventDefault();
		$('.social-buttons').toggleClass('open-social-module');
		$('.connect-button').toggleClass('connect-button-dark');
	});


	// $(window).load(function() {
	// 	$('.social-module').addClass('animated lightSpeedIn');
	// });

	// Waypoints Opacity

	$('#service1').css('opacity', 0);
	$('#service2').css('opacity', 0);
	$('#service3').css('opacity', 0);
	$('#service4').css('opacity', 0);
	$('#service5').css('opacity', 0);
	$('#service6').css('opacity', 0);
	$('#education1').css('opacity', 0);
	$('#education2').css('opacity', 0);
	$('#education-mobile-1').css('opacity', 0);
	$('#education-mobile-2').css('opacity', 0);

	$('#testimonials').css('opacity', 0);
	$('#percentage1').css('opacity', 0);
	$('#percentage2').css('opacity', 0);
	$('#percentage3').css('opacity', 0);
	$('#percentage4').css('opacity', 0);
	$('#skills').css('opacity', 0);


	// Services Waypoints

	var waypoint = new Waypoint({
	  element: document.getElementById('service1'),
	  handler: function(direction) {
	   	$('#service1').addClass('fadeIn');
	   	setTimeout(function(){
			$(".service-svg1").attr("class", "oldclass");
         },1000);
	  },
	  offset: 'bottom-in-view' 
	})

	var waypoint = new Waypoint({
	  element: document.getElementById('service2'),
	  handler: function(direction) {
	   	$('#service2').addClass('fadeIn');
	   	setTimeout(function(){
			$(".service-svg2").attr("class", "oldclass");
         },1000);
	  },
	  offset: 'bottom-in-view' 
	})

	var waypoint = new Waypoint({
	  element: document.getElementById('service3'),
	  handler: function(direction) {
	   	$('#service3').addClass('fadeIn');
	   	setTimeout(function(){
			$(".service-svg3").attr("class", "oldclass");
         },1000);
	  },
	  offset: 'bottom-in-view' 
	})

	var waypoint = new Waypoint({
	  element: document.getElementById('service4'),
	  handler: function(direction) {
	   	$('#service4').addClass('fadeIn');
	   	setTimeout(function(){
			$(".service-svg4").attr("class", "oldclass");
         },1000);
	  },
	  offset: 'bottom-in-view' 
	})

	var waypoint = new Waypoint({
	  element: document.getElementById('service5'),
	  handler: function(direction) {
	   	$('#service5').addClass('fadeIn');
	   	setTimeout(function(){
			$(".service-svg5").attr("class", "oldclass");
         },1000);
	  },
	  offset: 'bottom-in-view' 
	})

	var waypoint = new Waypoint({
	  element: document.getElementById('service6'),
	  handler: function(direction) {
	   	$('#service6').addClass('fadeIn');
	   	setTimeout(function(){
			$(".service-svg6").attr("class", "oldclass");
         },1000);
	  },
	  offset: 'bottom-in-view' 
	})

	// Skills Waypoints

	var waypoint = new Waypoint({
	  element: document.getElementById('skills'),
	  handler: function(direction) {
	   	$('#skills').addClass('fadeIn');
	  },
	  offset: 'top-in-view' 
	})


	// Education Waypoints

	var waypoint = new Waypoint({
	  element: document.getElementById('education1'),
	  handler: function(direction) {
	   	$('#education1').addClass('fadeInLeft');
	  },
	  offset: 'bottom-in-view' 
	})

	var waypoint = new Waypoint({
	  element: document.getElementById('education2'),
	  handler: function(direction) {
	   	$('#education2').addClass('fadeInRight');
	  },
	  offset: 'bottom-in-view' 
	})

	// Education Mobile Waypoints

	var waypoint = new Waypoint({
	  element: document.getElementById('education-mobile-1'),
	  handler: function(direction) {
	   	$('#education-mobile-1').addClass('fadeIn');
	  },
	  offset: 'bottom-in-view' 
	})

	var waypoint = new Waypoint({
	  element: document.getElementById('education-mobile-2'),
	  handler: function(direction) {
	   	$('#education-mobile-2').addClass('fadeIn');
	  },
	  offset: 'bottom-in-view' 
	})

	// Testimonial Waypoints

	var waypoint = new Waypoint({
	  element: document.getElementById('testimonials'),
	  handler: function(direction) {
	   	$('#testimonials').addClass('fadeInLeft');
	  },
	  offset: '80%' 
	})

	// Percentages waypoint 1

	var waypoint = new Waypoint({
	  element: document.getElementById('percentage1'),
	  handler: function(down) {

	  	$('#percentage1').addClass('fadeIn');

		var bar1 = new ProgressBar.Circle(progress1, {
		  color: '#00E676',
		  // This has to be the same size as the maximum width to
		  // prevent clipping
		  strokeWidth: 3,
		  trailWidth: 3,
		  easing: 'easeInOut',
		  duration: 1400,
		  text: {
		    autoStyleContainer: false
		  },
		  from: { color: '#69F0AE', width: 3 },
		  to: { color: '#00E676', width: 3 },
		  // Set default step function for all animate calls
		  step: function(state, circle) {
		    circle.path.setAttribute('stroke', state.color);
		    circle.path.setAttribute('stroke-width', state.width);

		    var value = Math.round(circle.value() * 100) + '%';
		    if (value === 0) {
		      circle.setText('');
		    } else {
		      circle.setText(value);
		    }

		  }
		});

		bar1.text.style.fontSize = '1.4rem';
		bar1.text.style.fontWeight = '400';


		bar1.animate(.95);  // Number from 0.0 to 1.0  
		this.destroy()
		}, offset: 'bottom-in-view'  

	})


	// Percentages waypoint 2

	var waypoint = new Waypoint({
	  element: document.getElementById('percentage2'),
	  handler: function(down) {

	  	$('#percentage2').addClass('fadeIn');

		// progressbar.js@1.0.0 version is used
		// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

		var bar2 = new ProgressBar.Circle(progress2, {
		  color: '#00E676',
		  // This has to be the same size as the maximum width to
		  // prevent clipping
		  strokeWidth: 3,
		  trailWidth: 3,
		  easing: 'easeInOut',
		  duration: 1400,
		  text: {
		    autoStyleContainer: false
		  },
		  from: { color: '#69F0AE', width: 3 },
		  to: { color: '#00E676', width: 3 },
		  // Set default step function for all animate calls
		  step: function(state, circle) {
		    circle.path.setAttribute('stroke', state.color);
		    circle.path.setAttribute('stroke-width', state.width);

		    var value = Math.round(circle.value() * 100) + '%';
		    if (value === 0) {
		      circle.setText('');
		    } else {
		      circle.setText(value);
		    }

		  }
		});

		bar2.text.style.fontSize = '1.4rem';
		bar2.text.style.fontWeight = '400';
		bar2.animate(.88);  // Number from 0.0 to 1.0
  
		this.destroy();

		}, offset: 'bottom-in-view'  

	})


	// Percentages waypoint 3

	var waypoint = new Waypoint({
	  element: document.getElementById('percentage3'),
	  handler: function(down) {

	  	$('#percentage3').addClass('fadeIn');

		var bar3 = new ProgressBar.Circle(progress3, {
		  color: '#00E676',
		  // This has to be the same size as the maximum width to
		  // prevent clipping
		  strokeWidth: 3,
		  trailWidth: 3,
		  easing: 'easeInOut',
		  duration: 1400,
		  text: {
		    autoStyleContainer: false
		  },
		  from: { color: '#69F0AE', width: 3 },
		  to: { color: '#00E676', width: 3 },
		  // Set default step function for all animate calls
		  step: function(state, circle) {
		    circle.path.setAttribute('stroke', state.color);
		    circle.path.setAttribute('stroke-width', state.width);

		    var value = Math.round(circle.value() * 100) + '%';
		    if (value === 0) {
		      circle.setText('');
		    } else {
		      circle.setText(value);
		    }

		  }
		});

		bar3.text.style.fontSize = '1.4rem';
		bar3.text.style.fontWeight = '400';

		bar3.animate(.45);

		this.destroy()
		}, offset: 'bottom-in-view' 

	})

	// Percentages 4 waypoint

	var waypoint = new Waypoint({
	  element: document.getElementById('percentage4'),
	  handler: function(down) {

	  	$('#percentage4').addClass('fadeIn');

		var bar4 = new ProgressBar.Circle(progress4, {
		  color: '#00E676',
		  // This has to be the same size as the maximum width to
		  // prevent clipping
		  strokeWidth: 3,
		  trailWidth: 3,
		  easing: 'easeInOut',
		  duration: 1400,
		  text: {
		    autoStyleContainer: false
		  },
		  from: { color: '#69F0AE', width: 3 },
		  to: { color: '#00E676', width: 3 },
		  // Set default step function for all animate calls
		  step: function(state, circle) {
		    circle.path.setAttribute('stroke', state.color);
		    circle.path.setAttribute('stroke-width', state.width);

		    var value = Math.round(circle.value() * 100) + '%';
		    if (value === 0) {
		      circle.setText('');
		    } else {
		      circle.setText(value);
		    }

		  }
		});

		bar4.text.style.fontSize = '1.4rem';
		bar4.text.style.fontWeight = '400';

		bar4.animate(.92);

		this.destroy()

		}, offset: 'bottom-in-view' 

	})

	// var bar1 = new ProgressBar.SemiCircle(progress1, {
	//   strokeWidth: 6,
	//   color: '#FFEA82',
	//   trailColor: '#eee',
	//   trailWidth: 1,
	//   easing: 'easeInOut',
	//   duration: 1400,
	//   svgStyle: null,
	//   text: {
	//     value: '',
	//     alignToBottom: false
	//   },
	//   from: {color: '#FFEA82'},
	//   to: {color: '#ED6A5A'},
	//   // Set default step function for all animate calls
	//   step: (state, bar) => {
	//     bar.path.setAttribute('stroke', state.color);
	//     var value = Math.round(bar.value() * 100);
	//     if (value === 0) {
	//       bar.setText('');
	//     } else {
	//       bar.setText(value);
	//     }

	//     bar.text.style.color = state.color;
	//   }
	// });
	// bar1.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
	// bar1.text.style.fontSize = '2rem';

	// bar1.animate(.88);  // Number from 0.0 to 1.0

});

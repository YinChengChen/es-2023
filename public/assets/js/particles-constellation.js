(function($) {
	"use strict";

	// Constellation Background
	if($('#constellation-background').length){
		if(typeof particlesJS == 'undefined') {
			console.log('Constellation Background: particlesJS not Defined.');
			return true;
		}
		
		particlesJS("constellation-background", {
			"particles": {
				"number": {
					"value": 120,
					"density": {
						"enable": true,
						"value_area": 800
					}
				},
				"color": {
					"value": "#57C1F4"
				},
				"shape": {
					"type": "circle",
					"stroke": {
						"width": 0,
						"color": "#000000"
					}
				},
				"opacity": {
					"value": 1,
					"random": false,
					"anim": {
						"enable": false,
						"speed": 1,
						"opacity_min": 0.9,
						"sync": false
					}
				},
				"size": {
					"value": 5,
					"random": true,
					"anim": {
						"enable": false,
						"speed": 40,
						"size_min": 0.5,
						"sync": false
					}
				},
				"line_linked": {
					"enable": true,
					"distance": 150,
					"color": "#57C1F4",
					"opacity": 0.9,
					"width": 1
				},
				"move": {
					"enable": true,
					"speed": 4,
					"random": true
				}
			},
			"interactivity": {
				"detect_on": "canvas",
				"events": {
					"onhover": {
						"enable": false,
						"mode": "grab"
					},
					"onclick": {
						"enable": false,
						"mode": "push"
					},
					"resize": true
				},
				"modes": {
					"grab": {
						"distance": 400,
						"line_linked": {
							"opacity": 1
						}
					},
					"bubble": {
						"distance": 400,
						"size": 40,
						"duration": 2,
						"opacity": 8,
						"speed": 3
					},
					"repulse": {
						"distance": 200,
						"duration": 0.4
					},
					"push": {
						"particles_nb": 4
					},
					"remove": {
						"particles_nb": 2
					}
				}
			},
			"retina_detect": true
		});
	
	}

})(jQuery);
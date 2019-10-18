/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Home Slider
5. Init Dropdown
6. Init Scrolling
7. Init Single Player
8. Init Album Player
9. Init Parallax


******************************/

$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	var header = $('.header');
	var cdd = $('.custom_dropdown');
	var cddActive = false;

	initMenu();
	initHomeSlider();
	initDropdown();
	initScrolling();
	initSinglePlayer();
	initAlbumPlayer();
	initParallax();

	setHeader();

	$(window).on('resize', function()
	{
		setHeader();

		setTimeout(function()
		{
			$(window).trigger('resize.px.parallax');
		}, 375);
	});

	$(document).on('scroll', function()
	{
		setHeader();
	});

	/* 

	2. Set Header

	*/

	function setHeader()
	{
		if($(window).scrollTop() > 91)
		{
			header.addClass('scrolled');
		}
		else
		{
			header.removeClass('scrolled');
		}
	}

	/* 

	3. Init Menu

	*/

	function initMenu()
	{
		if($('.menu').length && $('.hamburger').length)
		{
			var menu = $('.menu');
			var hamburger = $('.hamburger');
			var close = $('.menu_close');

			hamburger.on('click', function()
			{
				menu.toggleClass('active');
			});

			close.on('click', function()
			{
				menu.toggleClass('active');
			});
		}
	}

	/* 

	4. Init Home Slider

	*/

	function initHomeSlider()
	{
		if($('.home_slider').length)
		{
			var homeSlider = $('.home_slider');
			homeSlider.owlCarousel(
			{
				items:1,
				loop:true,
				autoplay:false,
				nav:false,
				dots:false,
				smartSpeed:1200,
				mouseDrag:false
			});

			if($('.home_slider_nav').length)
			{
				var next = $('.home_slider_nav');
				next.on('click', function()
				{
					homeSlider.trigger('next.owl.carousel');
				});
			}
		}
	}

	/* 

	5. Init Dropdown

	*/

	function initDropdown()
	{
		if($('.custom_dropdown').length)
		{
			var dd = $('.custom_dropdown');
			var ddItems = $('.custom_dropdown ul li');
			var ddSelected = $('.custom_dropdown_selected');

			dd.on('click', function()
			{
				if(cddActive)
				{
					closeCdd();
				}
				else
				{
					openCdd();
					$(document).one('click', function cls(e)
					{
						if($(e.target).hasClass('cdd'))
						{
							$(document).one('click', cls);
						}
						else
						{
							closeCdd();
						}
					});
				}
			});

			ddItems.on('click', function()
			{
				var sel = $(this).text();
				ddSelected.text(sel);
			});
		}
	}

	function closeCdd()
	{
		cdd.removeClass('active');
		cddActive = false;
	}

	function openCdd()
	{
		cdd.addClass('active');
		cddActive = true;
	}

	/*

	6. Init Scrolling

	*/

	function initScrolling()
    {
    	if($('.scroll_down_link').length)
    	{
    		var links = $('.scroll_down_link');
	    	links.each(function()
	    	{
	    		var ele = $(this);
	    		var target = ele.data('scroll-to');
	    		ele.on('click', function(e)
	    		{
	    			e.preventDefault();
	    			$(window).scrollTo(target, 1500, {offset: -75, easing: 'easeInOutQuart'});
	    		});
	    	});
    	}	
    }

    /* 

	7. Init Single Player

	*/

	function initSinglePlayer()
	{
		if($(".jp-jplayer").length)
		{
			$("#jplayer_1").jPlayer({
				ready: function () {
					$(this).jPlayer("setMedia", {
						
						title:"",
							artist:"Shreya Ghoshal",
							mp3:""
					});
					
				},
				play: function() { // To avoid multiple jPlayers playing together.
					$(this).jPlayer("pauseOthers");
				},
				swfPath: "plugins/jPlayer",
				supplied: "mp3",
				cssSelectorAncestor: "#jp_container_1",
				wmode: "window",
				globalVolume: false,
				useStateClassSkin: true,
				autoBlur: false,
				smoothPlayBar: true,
				keyEnabled: true,
				solution: 'html',
				preload: 'metadata',
				volume: 0.2,
				muted: false,
				backgroundColor: '#000000',
				errorAlerts: false,
				warningAlerts: false
			});
		}
	}


	/* 

	8. Init Album Player

	*/

	function initAlbumPlayer()
	{
		var playlist = 
			[
				{
					title:"tera fitoor",
					artist:"Arijit Singh",
					album:"Ocean Vibes",
					mp3:"files/Tera Fitoor Lyrical - Genius _ Utkarsh Sharma, Ishita Chauhan _ Arijit Singh _ Himesh Reshammiya.mp3",
					poster:"images/music-27.jpg"
				},
				{
					title:"Dil Diyaan Gallan",
					artist:"Atif Aslam",
					album:"DJ Mind",
					mp3:"files/Dil Diyan Gallan Song _ Tiger Zinda Hai _ Salman Khan, Katrina Kaif _ Atif, Vishal & Shekhar, Irshad.mp3",
					poster:"images/music-28.jpg"
				},
				{
					title:"Humma Humma",
					artist:"A R Rahman",
					album:"Ocean Vibes",
					mp3:"files/The Humma Song - OK Jaanu 320Kbps.mp3",
					poster:"images/music-29.jpg"
				},
				{
					title:"Abhi mujh me kahi",
					artist:"Sonu Nigam",
					album:"DJ Mind",
					mp3:"files/05   Abhi Mujh Mein Kahin   Agneepath.mp3",
					poster:"images/Sonu.jpg"
				},
				{
					title:"Back to u",
					artist:"Selena Gomez",
					album:"Dublin Dub",
					mp3:"files/Selena Gomez - Back To You (Lyric Video).mp3",
					poster:"images/music-30.jpg"
				},
				{
					title:"Khudi",
					artist:"Local Train",
					album:"Ocean Vibes",
					mp3:"files/The Local Train - Khudi (Official).mp3",
					poster:"images/music-34.jpg"
				},
				{
					title:"Aao ge tum kabhi",
					artist:"Local Train",
					album:"DJ Mind",
					mp3:"files/The Local Train - Aaoge Tum Kabhi (Official).mp3",
					poster:"images/music-32.jpg"
				},
				{
					title:"Tere bin",
					artist:"Rahat Fateh ali khan",
					album:"Dublin Dub",
					mp3:"files/SIMMBA - Tere Bin _ Ranveer Singh, Sara Ali Khan _ Tanishk Bagchi, Rahat Fateh Ali Khan, Asees Kaur.mp3",
					poster:"images/music-35.jpg"
				},
				{
					title:"Pehla nasha",
					artist:"Jubin Nautiyal",
					album:"DJ Mind",
					mp3:"files/Pehla Nasha Once Again _ Kuchh Bheege Alfaaz _ Zain Khan Durrani _ Geetanjali Thapa _ Jubin _ Palak.mp3",
					poster:"images/music-36.jpg"
				},
				{
					title:"Pehla nasha",
					artist:"Jubin Nautiyal",
					album:"DJ Mind",
					mp3:"files/Pehla Nasha Once Again _ Kuchh Bheege Alfaaz _ Zain Khan Durrani _ Geetanjali Thapa _ Jubin _ Palak.mp3",
					poster:"images/music-39.jpg"
				},
				{
					title:"Pehla nasha",
					artist:"Jubin Nautiyal",
					album:"DJ Mind",
					mp3:"files/Pehla Nasha Once Again _ Kuchh Bheege Alfaaz _ Zain Khan Durrani _ Geetanjali Thapa _ Jubin _ Palak.mp3",
					poster:"images/music-38.jpg"
				},
				{
					title:"Pehla nasha",
					artist:"Jubin Nautiyal",
					album:"DJ Mind",
					mp3:"files/Pehla Nasha Once Again _ Kuchh Bheege Alfaaz _ Zain Khan Durrani _ Geetanjali Thapa _ Jubin _ Palak.mp3",
					poster:"images/music-37.jpg"
				}
				
			];
		if($('#jplayer_2').length)
		{
			
			var options =
			{
				playlistOptions:
				{
					autoPlay:false,
					enableRemoveControls:false
				},
				play: function() // To avoid multiple jPlayers playing together.
				{ 
					$(this).jPlayer("pauseOthers");
				},
				solution: 'html',
				supplied: 'oga, mp3',
				useStateClassSkin: true,
				preload: 'metadata',
				volume: 0.2,
				muted: false,
				backgroundColor: '#000000',
				cssSelectorAncestor: '#jp_container_2',
				errorAlerts: false,
				warningAlerts: false
			};

			var cssSel = 
			{
				jPlayer: "#jplayer_2",
				cssSelectorAncestor: "#jp_container_2",
				play: '.jp-play',
				pause: '.jp-pause',
				stop: '.jp-stop',
				seekBar: '.jp-seek-bar',
				playBar: '.jp-play-bar',
				globalVolume: true,
				mute: '.jp-mute',
				unmute: '.jp-unmute',
				volumeBar: '.jp-volume-bar',
				volumeBarValue: '.jp-volume-bar-value',
				volumeMax: '.jp-volume-max',
				playbackRateBar: '.jp-playback-rate-bar',
				playbackRateBarValue: '.jp-playback-rate-bar-value',
				currentTime: '.jp-current-time',
				duration: '.jp-duration',
				title: '.jp-title',
				fullScreen: '.jp-full-screen',
				restoreScreen: '.jp-restore-screen',
				repeat: '.jp-repeat',
				repeatOff: '.jp-repeat-off',
				gui: '.jp-gui',
				noSolution: '.jp-no-solution'
			};

			var myPlaylist = new jPlayerPlaylist(cssSel,playlist,options);
			
			
			setTimeout(function()
			{
				var items = $('.jp-playlist ul li > div');
				for(var x = 0; x < items.length; x++)
				{
					var item = items[x];
					var img = playlist[x].poster;
					var album = playlist[x].album;
					var title = playlist[x].title;
					var imageDiv = document.createElement('div');
					var imgx = document.createElement('img');
					var albumDiv = document.createElement('div');
					albumDiv.className = "featured_album";
					var albumText = document.createTextNode(album);
					var playButton = document.createElement('div');
					var titleDiv = document.createElement('div');
					titleDiv.className = "featured_title";
					var titleText = document.createTextNode(title);
					titleDiv.append(titleText);
					playButton.className = 'album_play_button';
					albumDiv.prepend(albumText);
					imageDiv.className = "featured_image";
					imgx.src = img;
					imageDiv.append(imgx);
					item.parentElement.append(imageDiv);
					item.parentElement.append(playButton);
					item.append(albumDiv);
					item.append(titleDiv);
				}

				var buttons = $('.album_play_button');
				buttons.each(function()
				{
					var btn = $(this);
					btn.on('click', function(e)
					{
						var i = buttons.index(btn);
						myPlaylist.select(i);
						$(".jp-artist").html(playlist[i].artist);
							$("#song_image_path").attr("src",playlist[i].poster);
							$(".jp-title").html(playlist[i].title);
							$("#myaudio").attr("src",playlist[i].mp3);
							
						if(btn.hasClass('is-playing'))
						{
							buttons.removeClass('is-playing');
							myPlaylist.pause();
							btn.removeClass('is-playing');
							$("#myplay").show();
							$("#mypause").hide();
						}
						else
						{
							buttons.removeClass('is-playing');
							myPlaylist.play();
							btn.addClass('is-playing');
							$("#myplay").hide();
							$("#mypause").show();
						}
					});
				});
			},200);	
		}
	}

	/* 

	9. Init Parallax

	*/

	function initParallax()
	{
		if($('.parallax_background').length)
		{
			$('.parallax_background').parallax(
			{
				speed:0.8
			});
		}
	}

});
window.addEventListener('DOMContentLoaded', (event) => {

	var home__Slide__1 = document.getElementsByClassName("home_Slide_1")[0];
	var home__Slide__2 = document.getElementsByClassName("home_Slide_2")[0];



	var round_1 = document.getElementsByClassName("round")[0];
	var round_2 = document.getElementsByClassName("round")[1];
	var round_3 = document.getElementsByClassName("round")[2];
	var round_4 = document.getElementsByClassName("round")[3];
	var slide_Rounds = document.getElementsByClassName("slide_Rounds")[0];



	var pixel = 0;
	var slide__Interval;

	// Այս ֆունկցիան կախվախ թե որ շրջանն է սեղմված pixel-ին տալիս է արժեք և կանչում է changeRoundStyle() ֆունկցիան

	function roundi_Stugum_Func() {
		var roundiStugum;
		if (pixel === 0) {
			roundiStugum = round_1;
		} else if (pixel === -800) {
			roundiStugum = round_2;
		} else if (pixel === -1600) {
			roundiStugum = round_3;
		} else if (pixel === -2400) {
			roundiStugum = round_4;
		}

		changeRoundStyle(roundiStugum);
	}

	// Այս ֆունկցիան 5 վայրկյանը մեկ փոխում է գլխավոր էջի սլայդ դիրքը


	function slide_Interval_Func() {
		slide__Interval = setInterval(function() {
			pixel -= 800;
			if (pixel == -3200) {
				pixel = 0;
			}
			home__Slide__1.style.marginLeft = pixel + "px";
			roundi_Stugum_Func();
		}, 5000);
	}

	window.onload = slide_Interval_Func();

	// Սլայդը դիտելու նախորդ և հաջորդ կոճակներին ավելացնում է մի ֆունկցիա որը կանգնեցնում է setInterval ֆունկցիան,փոխում է սլայդը կախվախ թե որ կոճակն է սեղմված, ապա կրկին կանչում է slide_Interval_Func() ֆունկցիան setInterval-ը միացնելու համար և կանչում roundi_Stugum_Func() ֆունկցիան շրջանի ետնաշերտը փոխելու համար

	var prev = document.getElementsByClassName("prev")[0];
	prev.onclick = function() {
		clearInterval(slide__Interval);
		pixel += 800;
		if (pixel == 800) {
			pixel = -2400;
		}
		home__Slide__1.style.marginLeft = pixel + "px";
		slide_Interval_Func();
		roundi_Stugum_Func();
	}

	var next = document.getElementsByClassName("next")[0];
	next.onclick = function() {
		clearInterval(slide__Interval);
		pixel -= 800;
		if (pixel == -3200) {
			pixel = 0;
		}
		home__Slide__1.style.marginLeft = pixel + "px";
		slide_Interval_Func();
		roundi_Stugum_Func();
	}

	var slide_Rounds_Child = slide_Rounds.children;

	// Այս ֆունկցիան փոխում է սեղմված շրջանի ետնաշերտը և մնացած շրջաններից որը սխալ գույնի ետնաշերտ ունի փոխում է ետնաշերտի գույնը

	function changeRoundStyle(randomRound) {
		var k;
		for (k = 0; k < 4; k++) {
			if (slide_Rounds_Child[k] === randomRound) {
				randomRound.style.backgroundColor = "#F26419";
			} else {

				if (slide_Rounds_Child[k].style.backgroundColor != "#002633") {
					slide_Rounds_Child[k].style.backgroundColor = "#002633";
				}
			}
		}
	}

	// Բոլոր շրջանների վրա կանչում է մի ֆունկցիա որը կանգնեցնում է setInterval-ը,փոխում սլայդը,և կրկինյ կանչում slide_Interval_Func() և changeRoundStyle() ֆունկցիաները

	round_1.onclick = function() {
		clearInterval(slide__Interval);
		pixel = 0;
		home__Slide__1.style.marginLeft = pixel + "px";
		slide_Interval_Func();
		changeRoundStyle(this);
	}
	round_2.onclick = function() {
		clearInterval(slide__Interval);
		pixel = -800;
		home__Slide__1.style.marginLeft = pixel + "px";
		slide_Interval_Func();
		changeRoundStyle(this);
	}
	round_3.onclick = function() {
		clearInterval(slide__Interval);
		pixel = -1600;
		home__Slide__1.style.marginLeft = pixel + "px";
		slide_Interval_Func();
		changeRoundStyle(this);
	}
	round_4.onclick = function() {
		clearInterval(slide__Interval);
		pixel = -2400;
		home__Slide__1.style.marginLeft = pixel + "px";
		slide_Interval_Func();
		changeRoundStyle(this);
	}

	var searchInputDiv = document.getElementsByClassName("search_Input_Div")[0];
	var searchInput = document.getElementsByClassName("search_Input")[0];
	var searchResultA = document.getElementsByClassName("search_Result_A")[0];
	var navbarMenu = document.getElementsByClassName("navbar_Menu")[0];
	var dropDownDiv = document.getElementsByClassName("dropDownDiv")[0];
	var searchInputDiv = document.getElementsByClassName("search_Input_Div")[0];

	var searchDidplayCost = false;

	// Այս ֆունկցիան տեսանելի և անտեսանելի է դարձնում որոնման միջակայքը և որոնման արդյունքների բլոկը որոնման կոճակին սեղմելու դեպքում

	var searchIcon = document.getElementsByClassName("fa-search")[0];

	function searchDisplay() {
		if (dropDownDisplayCost === true) {
			dropDownDisplay();
		}
		if (searchDidplayCost === false) {
			searchIcon.classList.remove("fa-search");
			searchIcon.classList.add("fa-close");
			searchInput.style.display = "inline-block";
			searchInputDiv.style.display = "flex";
			searchDidplayCost = true;
		} else if (searchDidplayCost === true) {
			searchIcon.classList.remove("fa-close");
			searchIcon.classList.add("fa-search");
			searchInput.style.display = "none";
			searchInputDiv.style.display = "none";
			searchDidplayCost = false;
		}
	}

	// Այս ֆունկցիան գտնում և տեսանելի է դարձնում որոնման արդյունքները

	function searchFilter() {
		var input, filter, ul, li, a, i;
		input = document.getElementsByClassName("search_Input")[0];
		filter = input.value.toUpperCase();
		ul = document.getElementsByClassName("search_Result_Ul")[0];
		li = ul.getElementsByTagName("li");

		for (i = 0; i < li.length; i++) {
			a = li[i].getElementsByTagName("a")[0];
			txtValue = a.textContent || a.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				li[i].style.display = "";
			} else {
				li[i].style.display = "none";
			}
		}
	}

	var searchDiv = document.getElementsByClassName("search_Div")[0];
	var searchInputFocusCost = false;
	searchDiv.onclick = searchDisplay;
	searchInput.onkeyup = searchFilter;

	// Բոլոր Show կոճակներին սեղմելիս սահեցնում է դեպի պատուհանի այն մաս որտեղ գտնվում է տվյալ կենդանին կախվախ թե որ Show կոճակն է սեղմված

	document.getElementsByClassName("search_Result_Span_Show")[0].onclick = () => {
		document.getElementsByClassName("cards")[0].scrollIntoView();
		searchDisplay();
	}

	document.getElementsByClassName("search_Result_Span_Show")[1].onclick = () => {
		document.getElementsByClassName("cards")[0].scrollIntoView();
		searchDisplay();
	}

	document.getElementsByClassName("search_Result_Span_Show")[2].onclick = () => {
		document.getElementsByClassName("cards")[0].scrollIntoView();
		searchDisplay();
	}

	document.getElementsByClassName("search_Result_Span_Show")[3].onclick = () => {
		document.getElementsByClassName("crocodile_Div")[0].scrollIntoView();
		searchDisplay();
	}

	document.getElementsByClassName("search_Result_Span_Show")[4].onclick = () => {
		document.getElementsByClassName("hing_Div")[0].scrollIntoView();
		searchDisplay();
	}

	document.getElementsByClassName("search_Result_Span_Show")[5].onclick = () => {
		document.getElementsByClassName("vec_Div")[0].scrollIntoView();
		searchDisplay();
	}

	navbarMenu.onclick = dropDownDisplay;

	var dropDownDisplayCost = false;

	// Ստեղծում է Մենյուի կոճակի իկոնը

	var navBarMenuIcon = document.createElement("i");
	navBarMenuIcon.classList.add("fa");
	navBarMenuIcon.classList.add("fa-bars");

	navbarMenu.appendChild(navBarMenuIcon);

	// Այս ֆունկցիան տեսանելի և անտեսանելի է դարձնում Գլխավոր էջի, Իմ մասին և Այլ կոճակները մենյուի կոճակին սեղմելու դեպքում

	function dropDownDisplay() {
		if (searchDidplayCost === true) {
			searchDisplay();
		}

		if (dropDownDisplayCost === false) {
			navBarMenuIcon.classList.remove("fa-bars");
			navBarMenuIcon.classList.add("fa-close");
			dropDownDiv.style.display = "flex";
			dropDownDisplayCost = true;
		} else if (dropDownDisplayCost === true) {
			navBarMenuIcon.classList.remove("fa-close");
			navBarMenuIcon.classList.add("fa-bars");
			dropDownDiv.style.display = "none";
			dropDownDisplayCost = false;
		}
	}

	// Ստեղծում է լոգոն և ավելացնում որոնման կոճակից առաջ

	var logoText = document.createElement("h1");
	logoText.classList.add("logo_Text");
	logoText.innerHTML = "BAI";

	var logoDivA = document.createElement("a");
	logoDivA.classList.add("logo_Div_A");
	logoDivA.href = "index.html";
	logoDivA.setAttribute("target", "_self");

	logoDivA.appendChild(logoText);

	var header1 = document.getElementsByClassName("header_1")[0];
	header1.insertBefore(logoDivA, header1.firstChild);
});
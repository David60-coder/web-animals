window.addEventListener('DOMContentLoaded', (event) => {

	var navbarMenu = document.getElementsByClassName("navbar_Menu")[0];
	var dropDownDiv = document.getElementsByClassName("dropDownDiv")[0];
	var allHeader = document.getElementsByClassName("all_Header")[0];
	var allDropDownDiv = document.getElementsByClassName("allDropDownDiv")[0];
	navbarMenu.onclick = dropDownDisplay;

	var dropDownDisplayCost = false;

	// Ստեղծում է Մենյուի կոճակի իկոնը

	var navBarMenuIcon = document.createElement("i");
	navBarMenuIcon.classList.add("fa");
	navBarMenuIcon.classList.add("fa-bars");
	navBarMenuIcon.classList.add("nav_Bar_Menu_Search_Icon");

	navbarMenu.appendChild(navBarMenuIcon);

	// Այս ֆունկցիան տեսանելի և անտեսանելի է դարձնում Գլխավոր էջի, Իմ մասին և Այլ կոճակները մենյուի կոճակին սեղմելու դեպքում

	function dropDownDisplay() {
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
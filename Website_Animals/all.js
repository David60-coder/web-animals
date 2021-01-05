window.addEventListener('DOMContentLoaded', (event) => {

	var animalCost;
	var string = window.location.href;
	for (let z = 0; z < string.length; z++) {
		if (string.endsWith(".html") === false) {
			string = string.slice(0, -1);
		}
		if (string.endsWith("lion.html")) {
			animalCost = "lion";
			break;
		} else if (string.endsWith("tiger.html")) {
			animalCost = "tiger";
			break;
		} else if (string.endsWith("deer.html")) {
			animalCost = "deer";
			break;
		} else if (string.endsWith("crocodile.html")) {
			animalCost = "crocodile";
			break;
		} else if (string.endsWith("whale.html")) {
			animalCost = "whale";
			break;
		} else if (string.endsWith("shark.html")) {
			animalCost = "shark";
			break;
		}
	}

	function go_To_Up_Func() {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		})
	}

	var upIcon = document.getElementsByClassName("up_Icon")[0];
	upIcon.onclick = go_To_Up_Func;


	// Ավելացնում է ամբողջ սլայդը և տեղեկության սլայդդը

	var iivDiv = document.getElementsByClassName("iivDiv")[0];

	iivDiv.insertAdjacentHTML('afterend', '<div class="All_Slide"><div class="slide_Ovrf"><div class="slides_I_I_V"><div class="info_Slide">');

	var slides_IIV = document.getElementsByClassName("slides_I_I_V")[0];

	// Ստեղծում է նկարների սլայդը իր մեջ ներառվող նկարներով և ավելացնում ամբողջ սլայդին

	var imgSlide = document.createElement("div");
	imgSlide.classList.add("img_Slide");

	var allImgDiv = document.createElement("div");
	allImgDiv.classList.add("all_Img_Div");

	imgSlide.appendChild(allImgDiv);

	slides_IIV.appendChild(imgSlide);

	var infoSlide = document.getElementsByClassName("info_Slide")[0];
	var body = document.getElementsByTagName("body")[0];

	// Սլայդից դուրս մնացած ենթավերնագրերի հղումները և ինֆորմացիան ավելացնում է տեղեկության սլայդին

	var bodyChild = body.children;
	var w;
	for (w = 0; w < 2; w++) {
		infoSlide.appendChild(bodyChild[5]);

	}

	var infoPage = document.getElementsByClassName("info_Page")[0];
	var imgPage = document.getElementsByClassName("img_Page")[0];
	var videoPage = document.getElementsByClassName("video_Page")[0];


	// Մենյուից նշելով թե էջի ենթավերնագիրը, օրինակ՝ տեղեկություն, նկարներ, տեսանյութեր, փոխում է ետնաշերտը որպես ընտրված

	infoPage.style.backgroundColor = "#004861";

	var iivDivChildElement = iivDiv.children;

	function changeIIVBagC(iivDivChild) {
		iivDivChild.style.backgroundColor = "#004861";
		iivDivChild.style.borderRadius = "10px";
		var y;
		for (y = 0; y < 3; y++) {
			if (iivDivChildElement[y] === iivDivChild) {
				continue;
			}
			iivDivChildElement[y].style.backgroundColor = "";
			iivDivChildElement[y].style.borderRadius = "";
		}
	}

	// Ցույց է տալիս սլայդի այն հատվածը որը ընտրված է


	infoPage.onclick = function() {
		changeIIVBagC(this);
		infoSlide.style.marginLeft = "0%";
	}


	imgPage.onclick = function() {
		changeIIVBagC(this);
		infoSlide.style.marginLeft = "-25%";
	}


	videoPage.onclick = function() {
		changeIIVBagC(this);
		infoSlide.style.marginLeft = "-50%";
	}

	// Ստեղծում է մոդալ պատուհան նկարը բացելու և նայելու համար և ավելացնում է սլայդին

	var modalDiv = document.createElement("div");
	modalDiv.classList.add("modal");



	var close = document.createElement("i");
	close.classList.add("fa");
	close.classList.add("fa-close");
	close.classList.add("modalClose");

	var closeDiv = document.createElement("div");
	closeDiv.classList.add("close_Div");
	closeDiv.appendChild(close);


	var all_Div_In_Modal = document.createElement("div");
	all_Div_In_Modal.classList.add("all_Div_In_Modal");


	var imgInModal = document.createElement("img");
	imgInModal.classList.add("img_In_Modal");

	all_Div_In_Modal.appendChild(closeDiv);
	all_Div_In_Modal.appendChild(imgInModal);

	modalDiv.insertAdjacentHTML('beforeend', '<i class="fa fa-arrow-left modal_Prev prev_Next_Center"></i>');
	modalDiv.appendChild(all_Div_In_Modal);
	modalDiv.insertAdjacentHTML('beforeend', '<i class="fa fa-arrow-right modal_Next prev_Next_Center"></i>');

	imgSlide.appendChild(modalDiv);

	// Օբյեկտների մեջ դրված են բոլոր նկարների և տեսանյութերի հղումները


	var lionObject = {
		lionImgsArr: [
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600616558/samples/animals/thumb-1920-456201_oidoos.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600616592/samples/animals/alfi-caniago-6FTJ91NYsqc-unsplash_cianwq.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600616753/samples/animals/taylor-lee-CEP11hggI-k-unsplash_hrut5e.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600616754/samples/animals/lion-3317670_1920_jpwaw9.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600616754/samples/animals/joel-herzog-KzkG73OANzc-unsplash_pqb1ug.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600616754/samples/animals/brianna-reak-2yNLxbkyCac-unsplash_hl7kbx.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600616755/samples/animals/9d900b9b771aef53a0e655d20470f6c4_cvgk1i.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600616755/samples/animals/5pd6qb34-1387219765_fcdlav.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600616755/samples/animals/Lion.png_wrtwok.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600616756/samples/animals/cats-lion-baby-animal-cub-wallpaper-preview_bizq8z.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600616756/samples/animals/1358719_pw7llv.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600616756/samples/animals/lion-with-lion-cubs-brown-lion-wallpaper-preview_d2l9sa.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600616756/samples/animals/8ef8eccf41e23895f5cf42bcd982ea78_slqaqy.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600616757/samples/animals/1156321_vvvphx.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600616757/samples/animals/desktop-baby-white-lions-pics-download_dbo2t9.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600616757/samples/animals/animal-white-lion-baby-animal-cub-wallpaper-preview_eempde.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600616758/samples/animals/cats-lion-baby-animal-big-cat-cub-hd-wallpaper-preview_gfffp2.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600616758/samples/animals/2f2202162c1cf5eb3e9b9dda7bf00a2c_ewfg9s.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600616759/samples/animals/white-lions-1-lion-and-1-lioness-wallpaper-preview_hjehok.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600616760/samples/animals/baby-lion-wallpaper_cd1zwt.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600616760/samples/animals/wade-lambert-YDNvH9T2Fuk-unsplash_tfhiba.jpg',
		],
		lionVideosArr: [
			'https://www.youtube.com/embed/mgAk620yavI',
			'https://www.youtube.com/embed/R1BjPRI5ddA?start=3',
			'https://www.youtube.com/embed/a5V6gdu5ih8?start=3',
			'https://www.youtube.com/embed/WhnUM4sTW8s?start=3',
			'https://www.youtube.com/embed/9Ciyd4AggzI',
			'https://www.youtube.com/embed/jenVMnOi2uA',
			'https://www.youtube.com/embed/DINUoBQK80g',
			'https://www.youtube.com/embed/a5ZxnXIzXCI',
			'https://www.youtube.com/embed/o-yhrTnblPE',
			'https://www.youtube.com/embed/7nQhWhI89kQ',
			'https://www.youtube.com/embed/TeCkm-BEZ-8',
			'https://www.youtube.com/embed/PjjIQvjZ1Qc',
			'https://www.youtube.com/embed/Q6gBCrElUA0',
			'https://www.youtube.com/embed/8J8-M09R7Lw',
			'https://www.youtube.com/embed/pJ5hw3858Oo',
			'https://www.youtube.com/embed/XYlmP9aX-Pw',
			'https://www.youtube.com/embed/l01Q8AvytwA',
			'https://www.youtube.com/embed/Aljb_M0uY7s',
			'https://www.youtube.com/embed/6QMQJXeYzpQ',
			'https://www.youtube.com/embed/7lqZ7vmEnBM',
			'https://www.youtube.com/embed/UVTsu0iAVpk',
		]
	}

	var tigerObject = {
		tigerImgsArr: [
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600616923/samples/ecommerce/thumb-1920-441761_jwl0xi.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600616924/samples/ecommerce/Tiger-in-the-Trees-4K-Ultra-HD-Wallpaper-for-Desktop-Laptop-Tablet-Mobile-Phones-And-TV-3840x2400--915x515_ywrygt.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600616925/samples/ecommerce/9821e591e1d16b779566fe33ff81efa3_ohgzbb.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600616925/samples/ecommerce/190887_water-tiger-jump-hunting-hd-wallpapers-wallpapers_1920x1080_h_fhdspx.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600616926/samples/ecommerce/dad83e32593985eb59b14665e8773c50_svd9jy.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600616926/samples/ecommerce/unnamed_kawsio.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600616927/samples/ecommerce/wp2999608_zmsbe7.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600616927/samples/ecommerce/Tiger-4K-Wallpaper-HD-Wallpapers_uag6qh.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600616927/samples/ecommerce/tiger-wading-through-the-water-wallpaper_xpfjfd.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600616928/samples/ecommerce/943476_cfe2ko.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600616928/samples/ecommerce/94901e3151eaf8401a9e78f612ee521a_yak0is.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600616929/samples/ecommerce/White-Tiger-4K_ekgkhq.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600616930/samples/ecommerce/699409352fcd2194ce5f590de4f7c172_tcekym.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600616930/samples/ecommerce/sKQEgFN_yxuqrv.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600616931/samples/ecommerce/Wallpaper_white_tiger_4k_Animals_9495111101_ui8zgu.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600616932/samples/ecommerce/White-Tiger-for-desktop-background_dcbtff.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600616934/samples/ecommerce/white-tiger-5-4K_ud9gh3.jpg'
		],
		tigerVideosArr: [
			'https://www.youtube.com/embed/xgKGeWGZPO8',
			'https://www.youtube.com/embed/y4sC1C1ZVPw',
			'https://www.youtube.com/embed/_UbDeqPdUek',
			'https://www.youtube.com/embed/ENkzSXfJPCE',
			'https://www.youtube.com/embed/lYn39NnSbGU',
			'https://www.youtube.com/embed/FK3dav4bA4s',
			'https://www.youtube.com/embed/ApyjTGfgfwg',
			'https://www.youtube.com/embed/Bv4d5XHVgGg',
			'https://www.youtube.com/embed/VkqzH1TovRQ',
			'https://www.youtube.com/embed/kXmqwRj0o4E',
			'https://www.youtube.com/embed/wNAzBHhaCqw',
			'https://www.youtube.com/embed/VjHSfnDCxvM',
			'https://www.youtube.com/embed/t9je3P-_NmU',
			'https://www.youtube.com/embed/touati4CKwM',
			'https://www.youtube.com/embed/YKwPOXRs79k',
			'https://www.youtube.com/embed/cNa3ZxKt0WA',
			'https://www.youtube.com/embed/jEQaRY4YpVo',
			'https://www.youtube.com/embed/OEFAPemmoJg',
			'https://www.youtube.com/embed/yQ96qBXMWh8',
			'https://www.youtube.com/embed/cknCmN80UK8',
			'https://www.youtube.com/embed/jS8y53QxIBs',
			'https://www.youtube.com/embed/DfHARgviUzQ',
			'https://www.youtube.com/embed/f-XzDTTwgvw',
			'https://www.youtube.com/embed/j7CEgLSo0Co',
		]
	}

	var deerObject = {
		deerImgsArr: [
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600617015/samples/food/wp2269139_oxirxi.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600617015/samples/food/wp2269138_jzd74c.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600617016/samples/food/3587925_knxmrm.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600617017/samples/food/a89934a81b4e888bd3a0a616e4260765-700_tewpnp.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600617017/samples/food/Deer_Fight_in_Snow_4K_Wallpaper_lmktko.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600617018/samples/food/animal_three_deers_272765_w4ksod.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600617018/samples/food/213d5813257ab1af6bbe7fecfc1c274a_vcpm5h.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600617019/samples/food/985936_wxkh2r.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600617023/samples/food/deer-horns-4k-yt_fowe8u.jpg'
		],
		deerVideosArr: [
			'https://www.youtube.com/embed/Bv4d5XHVgGg',
			'https://www.youtube.com/embed/RtnLNmB3ZNE',
			'https://www.youtube.com/embed/35smkXasyFc',
			'https://www.youtube.com/embed/zLeqBS9fpH8',
			'https://www.youtube.com/embed/WUVz2xdhfOE',
			'https://www.youtube.com/embed/Sd6lOjTa1jA',
			'https://www.youtube.com/embed/II0XTUtHghg',
			'https://www.youtube.com/embed/n26DnHOTDvY',
			'https://www.youtube.com/embed/OyfroasLwPI',
			'https://www.youtube.com/embed/SXX6zm1sJEQ',
			'https://www.youtube.com/embed/yhZcRDWKIFw',
			'https://www.youtube.com/embed/Xa4DJgkVe0w',
			'https://www.youtube.com/embed/S8UQ5liKg0g',
			'https://www.youtube.com/embed/UaPJp9KmmFI',
			'https://www.youtube.com/embed/Vwvfd6tvN2c',
			'https://www.youtube.com/embed/eStXV_TYFFw',
			'https://www.youtube.com/embed/RLEE_uj7rVw',
			'https://www.youtube.com/embed/GM-z_VPVgMs',
			'https://www.youtube.com/embed/F_w5W91tq00',
			'https://www.youtube.com/embed/w8fxabvGV5Q',
			'https://www.youtube.com/embed/k3KZq9VR88k',
			'https://www.youtube.com/embed/fF1XpI_JwsA',
			'https://www.youtube.com/embed/CIPEda9rwrI',
			'https://www.youtube.com/embed/0qYbATyHm2A',
			'https://www.youtube.com/embed/BIAyb-1uwTg'
		]
	}

	var crocodileObject = {
		crocodileImgsArr: [
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600617089/samples/landscapes/thumb-1920-360898_ettkij.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600617090/samples/landscapes/wp4080148_it51r8.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600617090/samples/landscapes/c5e9d4a03fabf1eb6081f94cc4ca15e4_uvnwhb.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600617091/samples/landscapes/97fd19a663df601e4df837fbe029e8a9_b3jf3r.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600617091/samples/landscapes/732950dc4fd275248ce80da77d0e4133_dlhwaq.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600617091/samples/landscapes/nature-crocodile-nile-crocodile-reptile_r19foh.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600617092/samples/landscapes/596a0875ef5a5e5d34ac6acf1c8ffdce_i4vy4e.png',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600617092/samples/landscapes/_90965996_gettyimages-491925361_e997zf.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600617093/samples/landscapes/a694181bb259cc098b379882d81b3320_bvhne0.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600617093/samples/landscapes/sn-crocsleep_hfydyv.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600617093/samples/landscapes/1040469_zqb0yv.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600617093/samples/landscapes/Wallpaper_baby_crocodiles_cute_animals_Travel_635119977_keeeab.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600617094/samples/landscapes/baby-crocodile-alligator-hd-black-and-orange-lizard-wallpaper-preview_kpt6kq.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600617094/samples/landscapes/maxresdefault_tnnral.jpg',
		],
		crocodileVideosArr: [
			'https://www.youtube.com/embed/XNTMfax5Q5w',
			'https://www.youtube.com/embed/qyTNzTYFqlw',
			'https://www.youtube.com/embed/Ez6H_1-hPRA',
			'https://www.youtube.com/embed/fafQe4DPdAQ',
			'https://www.youtube.com/embed/R0_biLXlL5o',
			'https://www.youtube.com/embed/ULP7hs0gYRU',
			'https://www.youtube.com/embed/ZWxSbJwq-H8',
			'https://www.youtube.com/embed/4h9re1bHt40',
			'https://www.youtube.com/embed/anzl5oaHTf8',
			'https://www.youtube.com/embed/IzSehEBfe9s',
			'https://www.youtube.com/embed/lvu4KCNuptM',
			'https://www.youtube.com/embed/GxHWp1A_ABg',
			'https://www.youtube.com/embed/_bVZeOt7bCw',
			'https://www.youtube.com/embed/KqkGORcSwoM',
			'https://www.youtube.com/embed/eIAG852keFA',
			'https://www.youtube.com/embed/k2BRA6U0U9Y',
			'https://www.youtube.com/embed/kKVjZUWkrow',
			'https://www.youtube.com/embed/5654gc_gJJM',
			'https://www.youtube.com/embed/dbm-P7jaa_c',
			'https://www.youtube.com/embed/pXsqhNoM0ME',
			'https://www.youtube.com/embed/-0JwhAGi9bA',
			'https://www.youtube.com/embed/GvhNGbjouUY',
			'https://www.youtube.com/embed/5ScqFCJcJzQ'
		]
	}

	var whaleObject = {
		whaleImgsArr: [
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600617166/samples/people/animals-whale-wallpaper-preview_erbaqg.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600617166/samples/people/whale-3840x2160-5k-4k-wallpaper-8k-ocean-12586_nszpgj.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600617167/samples/people/photo-1568430462989-44163eb1752f_qtrhps.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600617167/samples/people/141c18b890f3708191b882bf49596458_bwebzj.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600617167/samples/people/13092_c0-42-990-701_r800x533_cn988b.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600617167/samples/people/sn-whalesH_4_uh2ok6.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600617168/samples/people/killer-whales-591130_1920-a40d29197e584bccb50fdae288bf6eb5_j6aqg0.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600617168/samples/people/whales-humpback-tonga-cr-alamy_cg2nkb.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600617168/samples/people/8C9469100-131023-science-whale.nbcnews-fp-1200-630_qaugeg.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600617168/samples/people/animal-whale-baby-animal-humpback-whale-sea-life-hd-wallpaper-preview_zdj1vm.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600617169/samples/people/animal-baby-cute-nature-wallpaper-preview_crspeu.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600617170/samples/people/1558711_jedjsq.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600617170/samples/people/HHpfkqs_nxoss1.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600617171/samples/people/1_6hm43GPkawtgyndUQck21w_f7kzwa.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600617171/samples/people/190FDE7E-3FF0-4EE4-96B2-B757024F1439_eqjftm.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600617172/samples/people/NVRQOW3M5VEI3IE23TAJSAMLSA_gtdkqr.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600617173/samples/people/d8aa7305f85432655d2a1f2b6bd184e8_dqhles.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600617174/samples/people/sea-world-orca-whale_qqf7rq.jpg',
		],
		whaleVideosArr: [
			'https://www.youtube.com/embed/bgiPTUy2RqI',
			'https://www.youtube.com/embed/NiHBeEahxxg',
			'https://www.youtube.com/embed/WabT1L-nN-E',
			'https://www.youtube.com/embed/MqHegdap35A',
			'https://www.youtube.com/embed/VH7fH6SwaZw',
			'https://www.youtube.com/embed/HsMuvyZdUAk',
			'https://www.youtube.com/embed/YM1Elka4Itc',
			'https://www.youtube.com/embed/wNqJLK2n8nY',
			'https://www.youtube.com/embed/zZTQngw8MZE',
			'https://www.youtube.com/embed/o767PuYbEXg',
			'https://www.youtube.com/embed/tWBG2q5sT0I',
			'https://www.youtube.com/embed/oXn1XxuAZEA',
			'https://www.youtube.com/embed/ZV7Cv4I0Skg',
			'https://www.youtube.com/embed/vAZkzV41sCc',
			'https://www.youtube.com/embed/XE49YW8NdJo',
			'https://www.youtube.com/embed/AYf0aPuoCjg',
			'https://www.youtube.com/embed/o0XN3RTF9qk',
			'https://www.youtube.com/embed/pJqlkuVKO2k',
			'https://www.youtube.com/embed/Qseb4IVnOv8',
			'https://www.youtube.com/embed/L14bl7GwHK8',
			'https://www.youtube.com/embed/PbySbprDjF0',
			'https://www.youtube.com/embed/cHNU7jDv3Ww',
			'https://www.youtube.com/embed/ez7XVgFYZho',
			'https://www.youtube.com/embed/DLC1NlOAMdg'
		]
	}

	var sharkObject = {
		sharkImgsArr: [
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600617225/samples/people/1008893_wymxnw.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600617225/samples/people/shark-5k-vb-2048x1152_renp51.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600617226/samples/people/AdobeStock_103878807-e1539273926352_zxsfw7.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600617226/samples/people/5cb73b20a9c7cb1f021b1963_myeozg.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600617226/samples/people/istock-485406986_wlh0yl.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600617226/samples/people/1081583_e9v8yo.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600617229/samples/people/74196-shark-in-water-4k-ultra-hd-wallpaper__animals_cq2xyz.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600617230/samples/people/thumb-1920-478474_x9hulx.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600617230/samples/people/1341460_gzbkgr.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600617231/samples/people/5cb73b20a9c7cb1f021b1963_btmicv.jpg',
			'https://res.cloudinary.com/cloudinary-accaunt/image/upload/v1600617232/samples/people/1081583_ggzcb2.jpg'
		],
		sharkVideosArr: [
			'https://www.youtube.com/embed/3D1_sRg22ms',
			'https://www.youtube.com/embed/4HGNqFdaD34',
			'https://www.youtube.com/embed/-6qoceEjwbA',
			'https://www.youtube.com/embed/EEvcOiTTrbA',
			'https://www.youtube.com/embed/AneiTzSFmrY',
			'https://www.youtube.com/embed/pgYmY6--DjI',
			'https://www.youtube.com/embed/x-RvZUHpPMc',
			'https://www.youtube.com/embed/c1TMRq9fDsc',
			'https://www.youtube.com/embed/3gVBPIp_WJU',
			'https://www.youtube.com/embed/ktcCcIYwSSI',
			'https://www.youtube.com/embed/cHaNCVJ5Ko0',
			'https://www.youtube.com/embed/dhSpE_2OF40',
			'https://www.youtube.com/embed/ze3XbkLjEHE',
			'https://www.youtube.com/embed/Djj3-jF19F8',
			'https://www.youtube.com/embed/hz2HBk5sKlc',
			'https://www.youtube.com/embed/36JcLKhUWoI',
			'https://www.youtube.com/embed/-m3N_BnVdOI',
			'https://www.youtube.com/embed/XoqRcwBJxa8',
			'https://www.youtube.com/embed/7LaDXFUERgc',
			'https://www.youtube.com/embed/73PW56YHvXs',
			'https://www.youtube.com/embed/CCr6RP68OpQ',
			'https://www.youtube.com/embed/fSmzhqbuABU'
		]
	}

	// Այս ֆունկցիաի միջոցով նկարը կարողանում ենք բացել մոդալ պատուհանում

	function openImageInModal(imgDivArgument) {
		modalDiv.style.display = "flex";
		var imgDivArgument_Src = imgDivArgument.src;
		imgInModal.src = imgDivArgument_Src;
	}

	// Այս 2 ֆունկցիաի միջոցով կարողանում ենք փակել մոդալ պատուհանը

	function modalFlexNone() {
		modalDiv.style.display = "none";
	}
	close.onclick = modalFlexNone;

	window.onclick = function(event) {
		if (event.target == modalDiv) {
			modalFlexNone();
		}
	}


	var allVideoDiv = document.createElement("div");
	allVideoDiv.classList.add("all_Video_Div");

	// Ստեղծում է որոնելու կոճակը և ավելացնում է մենյուի կոճակից առաջ

	var searchDiv = document.createElement("div");
	searchDiv.classList.add("search_Div");
	searchDiv.classList.add("w3-xxxlarge");


	var searchIcon = document.createElement("i");
	searchIcon.classList.add("fa");
	searchIcon.classList.add("fa-search");

	searchDiv.appendChild(searchIcon);

	var header1 = document.getElementsByClassName("header_1")[0];



	header1.insertBefore(searchDiv, document.getElementsByClassName("navbar_Menu")[0]);

	// Ստեղծում է որոնման միջակայք և ավելացնում մենյուի կոճակից առաջ

	var searchInput = document.createElement("input");
	searchInput.classList.add("search_Input");
	searchInput.setAttribute("type", "text");

	header1.insertBefore(searchInput, document.getElementsByClassName("navbar_Menu")[0]);

	var searchResultUl = document.createElement("ul");
	searchResultUl.classList.add("search_Result_Ul");

	// Ստեղծում է բլոկ որոնման արդյունքների համար

	var searchInputDiv = document.createElement("div");
	searchInputDiv.classList.add("search_Input_Div");

	var searchResultLi;
	var searchResultA;
	var searchResultTitleDiv;
	var showOpenDiv;
	var searchResultSpanShow;
	var openA;
	var searchResultSpanOpen;
	var showA;

	// Այս օբյեկտների մեջ դրված են որոնման արդյունքների անունները և հղումների

	var resultArr = [
		"Lion",
		"Tiger",
		"Deer",
		"Crocodile",
		"Whale",
		"Shark"
	];
	var openHrefs = [
		"../lion_folder/lion.html",
		"../tiger_folder/tiger.html",
		"../deer_folder/deer.html",
		"../crocodile_folder/crocodile.html",
		"../whale_folder/whale.html",
		"../shark_folder/shark.html"
	]

	// Ստեղծում է բոլոր տողերը՝ կենդանիներին բացելու կոժակները իրենց հղումներով և ավելացնում որոնման արդյունքների համար նախատեսված բլոկի մեջ

	var l;

	for (l = 0; l < resultArr.length; l++) {
		searchResultLi = document.createElement("li");
		searchResultLi.classList.add("search_Result_Li");

		searchResultA = document.createElement("a");
		searchResultA.classList.add("search_Result_A");

		searchResultTitleDiv = document.createElement("div");
		searchResultTitleDiv.classList.add("search_Result_Title_Div");
		searchResultTitleDiv.innerHTML = resultArr[l];

		searchResultA.appendChild(searchResultTitleDiv);

		showOpenDiv = document.createElement("div");
		showOpenDiv.classList.add("show_Open_Div");

		searchResultSpanShow = document.createElement("span");
		searchResultSpanShow.classList.add("search_Result_Span_Show");
		searchResultSpanShow.classList.add("search_Result_Show_Open");
		searchResultSpanShow.innerHTML = "Show";

		openA = document.createElement("a");
		openA.href = openHrefs[l];
		openA.classList.add("open_A");
		openA.setAttribute("target", "_self");

		searchResultSpanOpen = document.createElement("span");
		searchResultSpanOpen.classList.add("search_Result_Span_Open");
		searchResultSpanOpen.classList.add("search_Result_Show_Open");
		searchResultSpanOpen.innerHTML = "Open";

		openA.appendChild(searchResultSpanOpen);
		showOpenDiv.appendChild(openA);

		searchResultLi.appendChild(searchResultA);
		searchResultLi.appendChild(showOpenDiv);
		searchResultUl.appendChild(searchResultLi);
	}

	searchInputDiv.appendChild(searchResultUl);

	var dropDownDiv = document.getElementsByClassName("dropDownDiv")[0];


	body.insertBefore(searchInputDiv, dropDownDiv);



	var searchDidplayCost = false;
	var underHeaderDisplay = false;

	var noResult = document.getElementsByClassName("no_Result")[0];

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

	searchDiv.onclick = searchDisplay;
	searchInput.onkeyup = searchFilter;


	var navbarMenu = document.getElementsByClassName("navbar_Menu")[0];

	var dropDownDisplayCost = false;

	var more = document.getElementsByClassName("more")[0];

	var iivDivCost = false;

	// Այս ֆունկցիան տեսանելի և անտեսանելի է դարձնում Տեղեկություն, Նկարներ, Տեսանյութեր կոճակները Այլ կոճակին սեղմելու դեպքում

	function iivDisplay() {
		if (iivDivCost === false) {
			iivDiv.style.display = "flex";
			more.style.backgroundColor = "#00364a";
			more.style.borderRadius = "10px";
			iivDivCost = true;
		} else if (iivDivCost === true) {
			iivDiv.style.display = "none";
			more.style.backgroundColor = "";
			more.style.borderRadius = "";
			iivDivCost = false;
		}
	}

	more.onclick = iivDisplay;

	// Ստեղծում է Մենյուի կոճակի իկոնը


	var navBarMenuIcon = document.createElement("i");
	navBarMenuIcon.classList.add("fa");
	navBarMenuIcon.classList.add("fa-bars");
	navBarMenuIcon.classList.add("nav_Bar_Menu_Search_Icon");

	navbarMenu.appendChild(navBarMenuIcon);

	// Այս ֆունկցիան տեսանելի և անտեսանելի է դարձնում Գլխավոր էջի, Իմ մասին և Այլ կոճակները մենյուի կոճակին սեղմելու դեպքում

	function dropDownDisplay() {
		if (iivDivCost === true) {
			iivDisplay();
		}
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

	navbarMenu.onclick = dropDownDisplay;

	// Այս ֆունկցիան տեսանելի և անտեսանելի է դարձնում որոնման միջակայքը և որոնման արդյունքների բլոկը որոնման կոճակին սեղմելու դեպքում

	function searchDisplay() {
		if (iivDivCost === true) {
			iivDisplay();
		}
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

	var videoSlide = document.createElement("div");

	var cancelBtn;
	var okBtn;

	// Ստուգում է էջի հղումը և կախված հղումից էջին ավելացնում է կենդանու տեղեկությունը, նկարները և տեսանյութերը օգտվելով հղումներով լի օբյեկտներից
	// Միայն շնաձկան էջին ավելացնում է նաև նախազգուսհացման տեքստ որը կարդալուց հետո համաձայնվելով և նշելով այո կամ ոչ տեսանելի կամ անտեսանելի է դարձնում տեսանյութերը

	if (animalCost === "lion") {
		for (var l = 0; l < lionObject.lionImgsArr.length; l++) {
			var imgAnAnimal = document.createElement("img");
			imgAnAnimal.src = lionObject.lionImgsArr[l];
			imgAnAnimal.classList.add("img_An_Animal");
			allImgDiv.appendChild(imgAnAnimal);
			imgAnAnimal.onclick = function() {
				openImageInModal(this);
			}
		}

		for (var q = 0; q < lionObject.lionVideosArr.length; q++) {
			var videoDiv = document.createElement("div");
			videoDiv.classList.add("video_Div");
			var videoIframe = document.createElement("iframe");
			videoPlace(videoIframe);
			videoIframe.setAttribute("src", lionObject.lionVideosArr[q]);
			videoDiv.appendChild(videoIframe);
			allVideoDiv.appendChild(videoDiv);
		}
	} else if (animalCost === "tiger") {
		for (var l = 0; l < tigerObject.tigerImgsArr.length; l++) {
			var imgAnAnimal = document.createElement("img");
			imgAnAnimal.src = tigerObject.tigerImgsArr[l];
			imgAnAnimal.classList.add("img_An_Animal");
			allImgDiv.appendChild(imgAnAnimal);
			imgAnAnimal.onclick = function() {
				openImageInModal(this);
			}
		}

		for (var q = 0; q < tigerObject.tigerVideosArr.length; q++) {
			var videoDiv = document.createElement("div");
			videoDiv.classList.add("video_Div");
			var videoIframe = document.createElement("iframe");
			videoPlace(videoIframe);
			videoIframe.setAttribute("src", tigerObject.tigerVideosArr[q]);
			videoDiv.appendChild(videoIframe);
			allVideoDiv.appendChild(videoDiv);
		}
	} else if (animalCost === "deer") {
		for (var l = 0; l < deerObject.deerImgsArr.length; l++) {
			var imgAnAnimal = document.createElement("img");
			imgAnAnimal.src = deerObject.deerImgsArr[l];
			imgAnAnimal.classList.add("img_An_Animal");
			allImgDiv.appendChild(imgAnAnimal);
			imgAnAnimal.onclick = function() {
				openImageInModal(this);
			}
		}

		for (var q = 0; q < deerObject.deerVideosArr.length; q++) {
			var videoDiv = document.createElement("div");
			videoDiv.classList.add("video_Div");
			var videoIframe = document.createElement("iframe");
			videoPlace(videoIframe);
			videoIframe.setAttribute("src", deerObject.deerVideosArr[q]);
			videoDiv.appendChild(videoIframe);
			allVideoDiv.appendChild(videoDiv);
		}
	} else if (animalCost === "crocodile") {
		for (var l = 0; l < crocodileObject.crocodileImgsArr.length; l++) {
			var imgAnAnimal = document.createElement("img");
			imgAnAnimal.src = crocodileObject.crocodileImgsArr[l];
			imgAnAnimal.classList.add("img_An_Animal");
			allImgDiv.appendChild(imgAnAnimal);
			imgAnAnimal.onclick = function() {
				openImageInModal(this);
			}
		}

		for (var q = 0; q < crocodileObject.crocodileVideosArr.length; q++) {
			var videoDiv = document.createElement("div");
			videoDiv.classList.add("video_Div");
			var videoIframe = document.createElement("iframe");
			videoPlace(videoIframe);
			videoIframe.setAttribute("src", crocodileObject.crocodileVideosArr[q]);
			videoDiv.appendChild(videoIframe);
			allVideoDiv.appendChild(videoDiv);
		}
	} else if (animalCost === "whale") {
		for (var l = 0; l < whaleObject.whaleImgsArr.length; l++) {
			var imgAnAnimal = document.createElement("img");
			imgAnAnimal.src = whaleObject.whaleImgsArr[l];
			imgAnAnimal.classList.add("img_An_Animal");
			allImgDiv.appendChild(imgAnAnimal);
			imgAnAnimal.onclick = function() {
				openImageInModal(this);
			}
		}

		for (var q = 0; q < whaleObject.whaleVideosArr.length; q++) {
			var videoDiv = document.createElement("div");
			videoDiv.classList.add("video_Div");
			var videoIframe = document.createElement("iframe");
			videoPlace(videoIframe);
			videoIframe.setAttribute("src", whaleObject.whaleVideosArr[q]);
			videoDiv.appendChild(videoIframe);
			allVideoDiv.appendChild(videoDiv);
		}
	} else if (animalCost === "shark") {
		for (var l = 0; l < sharkObject.sharkImgsArr.length; l++) {
			var imgAnAnimal = document.createElement("img");
			imgAnAnimal.src = sharkObject.sharkImgsArr[l];
			imgAnAnimal.classList.add("img_An_Animal");
			allImgDiv.appendChild(imgAnAnimal);
			imgAnAnimal.onclick = function() {
				openImageInModal(this);
			}

		}

		for (var q = 0; q < sharkObject.sharkVideosArr.length; q++) {
			var videoDiv = document.createElement("div");
			videoDiv.classList.add("video_Div");
			var videoIframe = document.createElement("iframe");
			videoPlace(videoIframe);
			videoIframe.setAttribute("src", sharkObject.sharkVideosArr[q]);
			videoDiv.appendChild(videoIframe);
			allVideoDiv.appendChild(videoDiv);
		}

		var attentionDiv = document.createElement("div");
		attentionDiv.classList.add("attention_Div");

		var attentionText1 = document.createElement("p");
		attentionText1.classList.add("attention_Text");
		attentionText1.classList.add("attention_Text1");
		attentionText1.innerHTML = "ATTENTION";

		var attentionText2 = document.createElement("p");
		attentionText2.classList.add("attention_Text");
		attentionText2.classList.add("attention_Text2");
		attentionText2.innerHTML = "The content is not for the faint of heart!";

		var attentionText3 = document.createElement("p");
		attentionText3.classList.add("attention_Text");
		attentionText3.classList.add("attention_Text3");
		attentionText3.innerHTML = "Please, choose one of the bottom buttons.";

		cancelBtn = document.createElement("button");
		cancelBtn.classList.add("cancel_Btn");
		cancelBtn.innerHTML = "Don't Show";
		cancelBtn.onclick = () => {
			show_All_Video_Div("no");
		}

		okBtn = document.createElement("button");
		okBtn.classList.add("ok_Btn");
		okBtn.innerHTML = "Show";
		okBtn.onclick = () => {
			show_All_Video_Div("yes");
		}

		var cancelOkDiv = document.createElement("div");
		cancelOkDiv.classList.add("cancel_Ok_Div");

		cancelOkDiv.appendChild(cancelBtn);
		cancelOkDiv.appendChild(okBtn);

		attentionDiv.appendChild(attentionText1);
		attentionDiv.appendChild(attentionText2);
		attentionDiv.appendChild(attentionText3);
		attentionDiv.appendChild(cancelOkDiv);

		videoSlide.appendChild(attentionDiv);
	}

	var modal_Prev = document.getElementsByClassName("modal_Prev")[0];
	var modal_Next = document.getElementsByClassName("modal_Next")[0];

	// Այս 2 ֆունկցիաները կանչում են prevNext() ֆունկցիան արգումենտով

	modal_Prev.onclick = function() {
		prevNext("false");
	}
	modal_Next.onclick = function() {
		prevNext("true");
	}

	// Այս ֆունկցիան կախված վերևում կանցչած արգումենտից փոխում է դեպի հաջորդ կամ նախորդ նկարը

	function prevNext(prev_Next_Arg) {
		var prevImgIndex;
		var p;
		var allImgDivChilds = allImgDiv.children;
		for (p = 0; p < allImgDivChilds.length; p++) {
			if (allImgDivChilds[p].src === imgInModal.src) {
				if (prev_Next_Arg === "false") {
					if (p === 0) {
						p = allImgDivChilds.length;
					}
					prevImgIndex = p - 1;
				} else if (prev_Next_Arg === "true") {
					if (p === allImgDivChilds.length - 1) {
						p = -1;
					}
					prevImgIndex = p + 1;
				}
				break;
			}
		}
		imgInModal.src = allImgDivChilds[prevImgIndex].src;
	}

	// Այս ֆունկցիան տեսանյութերին ավելացնում է անհրաժեշտ ատրիբուտները

	function videoPlace(videoIframeArg) {
		videoIframeArg.classList.add("responsive_Iframe")
		videoIframeArg.setAttribute("frameborder", "0");
		videoIframeArg.setAttribute("allow", "accelerometer");
		videoIframeArg.setAttribute("allow", "autoplay");
		videoIframeArg.setAttribute("allow", "encrypted-media");
		videoIframeArg.setAttribute("allow", "gyroscope");
		videoIframeArg.setAttribute("allow", "picture-in-picture");
		videoIframeArg.setAttribute("allowFullScreen", "true");
	}

	// Տեսանյութերի սլայդին ավելացնում է տեսանյութերը պարունակող բլոկը

	videoSlide.classList.add("video_Slide");
	videoSlide.appendChild(allVideoDiv);

	// Ամբողջ սլայդին ավելացնում է տեսանյութերի սլայդը

	slides_IIV.appendChild(videoSlide);

	// Ստեղծում է Տեղեկություն, Նկարներ և Տեսանյութեր վերնագրերը և ավլեացնում համապատասխան սլայդներին

	var globalInfoTitle = document.createElement("h2");
	globalInfoTitle.classList.add("global_Info_Img_Video_Title");
	globalInfoTitle.innerHTML = "INFORMATION";

	var globalImgTitle = document.createElement("h2");
	globalImgTitle.classList.add("global_Info_Img_Video_Title");
	globalImgTitle.innerHTML = "IMAGES";

	var globalVideoTitle = document.createElement("h2");
	globalVideoTitle.classList.add("global_Info_Img_Video_Title");
	globalVideoTitle.innerHTML = "VIDEOS";

	infoSlide.insertBefore(globalInfoTitle, infoSlide.firstChild);
	imgSlide.insertBefore(globalImgTitle, imgSlide.firstChild);
	videoSlide.insertBefore(globalVideoTitle, videoSlide.firstChild);

	document.getElementsByClassName("information")[0].insertBefore(document.getElementsByClassName("src_Subtitles")[0], document.getElementsByClassName("exCl")[0]);

	// Ստեղծում է Տեղեկությունի, Նկարների և Տեսանյութերի ավարտման տեքստեր վերնագրերը և ավլեացնում համապատասխան սլայ

	var endInfoDiv = document.createElement("div");
	endInfoDiv.classList.add("end_Info_Img_Video_Div");
	var endInfoText = document.createElement("p");
	endInfoText.classList.add("end_Info_Img_Video_Text");
	endInfoText.innerHTML = "The Imformation Is Over";

	var endImgDiv = document.createElement("div");
	endImgDiv.classList.add("end_Info_Img_Video_Div");
	var endImgText = document.createElement("p");
	endImgText.classList.add("end_Info_Img_Video_Text");
	endImgText.innerHTML = "The Images are Over";

	var endVideoDiv = document.createElement("div");
	endVideoDiv.classList.add("end_Info_Img_Video_Div");
	endVideoDiv.classList.add("end_Video_Div");
	var endVideoText = document.createElement("p");
	endVideoText.classList.add("end_Info_Img_Video_Text");
	endVideoText.innerHTML = "The Videos Are Over";

	endInfoDiv.appendChild(endInfoText);
	endImgDiv.appendChild(endImgText);
	endVideoDiv.appendChild(endVideoText);

	infoSlide.appendChild(endInfoDiv);
	imgSlide.appendChild(endImgDiv);
	videoSlide.appendChild(endVideoDiv);

	// Այս ֆունկցիան՝ շնաձկան էջի, կախված թե այո կամ ոչ կոճակներից որն է սեղմված տեսանելի կամ անտեսանելի է դարձնում տեսանյութերը

	function show_All_Video_Div(btnCost) {
		if (btnCost === "no") {
			cancelBtn.style.display = "none";
			okBtn.style.display = "flex";
			allVideoDiv.style.display = "none";
			endVideoDiv.style.display = "none";
			cancelBtn.style.marginRight = "0";
			okBtn.style.marginLeft = "0";
		} else if (btnCost === "yes") {
			okBtn.style.display = "none";
			cancelBtn.style.display = "flex";
			allVideoDiv.style.display = "flex";
			endVideoDiv.style.display = "flex";
			cancelBtn.style.marginRight = "0";
			okBtn.style.marginLeft = "0";
		}
	}

	// Ստեղծում է լոգոն և ավելացնում որոնման կոճակից առաջ

	var logoText = document.createElement("h1");
	logoText.classList.add("logo_Text");
	logoText.innerHTML = "BAI";

	var logoDivA = document.createElement("a");
	logoDivA.classList.add("logo_Div_A");
	logoDivA.href = "../index.html";
	logoDivA.setAttribute("target", "_self");

	logoDivA.appendChild(logoText);

	header1.insertBefore(logoDivA, header1.firstChild);
	window.onscroll = () => {
		if (window.pageYOffset >= 900) {
			document.getElementsByClassName("up_Icon")[0].style.display = "flex";
		} else if (window.pageYOffset < 900) {
			document.getElementsByClassName("up_Icon")[0].style.display = "none";
		}
	}
});
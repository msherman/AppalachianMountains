var content = {
	"days": [{
		"id": "Day1",
		"title": "Day 1 - FRIDAY",
		"data": [{
			"subtitle": "Driving",
			"paragraph": "Bacon ipsum dolor amet porchetta drumstick hamburger, tri-tip strip steak biltong alcatra swine. Cupim t-bone turducken sirloin, picanha tongue pork belly meatball chuck frankfurter hamburger flank fatback leberkas meatloaf. Turkey corned beef picanha tongue porchetta tenderloin swine chicken fatback ground round. Rump short ribs tri-tip, tail shank drumstick chuck spare ribs frankfurter. Kielbasa short ribs short loin picanha, jowl pig ham hock ham pork corned beef shank. Pastrami brisket chicken, meatloaf swine andouille pork chop alcatra turkey cupim fatback bresaola. Flank turducken landjaeger brisket.",
			"source":"img/IMG_0071.jpg",
			"alt":"My beautiful wife"
		},
		{
			"subtitle": "",
			"paragraph":"Kielbasa brisket pastrami pork loin leberkas hamburger beef ribs. Kevin swine spare ribs pig tri-tip, pork loin leberkas rump sirloin. Spare ribs pork chop kevin chicken pancetta prosciutto doner tongue meatball shank. Frankfurter brisket fatback, meatball pancetta pork chop shank venison. Pork loin rump andouille frankfurter kevin pig drumstick capicola chuck meatball boudin beef bresaola. Pork belly flank hamburger pig, pork loin jerky short ribs turducken tail tri-tip shankle leberkas corned beef venison.",
			"source":"img/IMG_0091.jpg",
			"alt":"Waterfall"
		},
		{
			"subtitle": "subtitle3",
			"paragraph":"Prosciutto pork chop hamburger, short loin sirloin pork loin bacon capicola corned beef shoulder turkey. Kevin filet mignon pastrami, pork belly fatback strip steak bresaola cupim turducken jowl sirloin. Strip steak capicola kevin tenderloin pancetta jowl. Pork kielbasa beef ribs meatloaf drumstick short loin, bresaola short ribs filet mignon biltong capicola.",
			"source":"img/IMG_0086.jpg",
			"alt":"Selfies 4 days"
		},
		{
			"subtitle": "",
			"paragraph":"Tri-tip ham hock tail, corned beef sausage alcatra ham brisket venison chicken drumstick shankle spare ribs. Porchetta t-bone ham meatloaf shank shoulder venison andouille. Chicken tri-tip pancetta landjaeger filet mignon meatloaf, doner andouille drumstick short ribs cow kielbasa ball tip ham hock. Pork loin salami short loin meatloaf boudin. Cupim prosciutto tail filet mignon pancetta, pastrami turkey kevin. Ground round chicken pork loin bresaola, tri-tip boudin leberkas. Landjaeger strip steak shankle kielbasa turducken short loin hamburger tenderloin shoulder prosciutto.",
			"source":"",
			"alt":""
		}],
	},
	{
		"id": "Day2",
		"title": "Day 2 - SATURDAY",
		"data": [{
			"subtitle": "subtitle1",
			"paragraph": "Bacon ipsum dolor amet porchetta drumstick hamburger, tri-tip strip steak biltong alcatra swine. Cupim t-bone turducken sirloin, picanha tongue pork belly meatball chuck frankfurter hamburger flank fatback leberkas meatloaf. Turkey corned beef picanha tongue porchetta tenderloin swine chicken fatback ground round. Rump short ribs tri-tip, tail shank drumstick chuck spare ribs frankfurter. Kielbasa short ribs short loin picanha, jowl pig ham hock ham pork corned beef shank. Pastrami brisket chicken, meatloaf swine andouille pork chop alcatra turkey cupim fatback bresaola. Flank turducken landjaeger brisket.",
			"source":"img/IMG_0071.jpg",
			"alt":"My beautiful wife"
			}]
	}],
	display: function(dayChoice){
		var item = content.days;
		for (day in content.days){
			if(item[day].id === dayChoice && currentDay != dayChoice){
				currentDay = dayChoice;
				var page = $('.mainContent')
				$('.dayTitle, .contentImg, .subtitle, p').remove();
				page.append('<h1 class="dayTitle">'+item[day].title+'</h1>');
				var imageHTML = '<div class= "contentImg"> <img class="insideImages" src="%1" alt="%2" /></div>';
				for (choice in item[day].data){
					var details = item[day].data[choice];
					if (details.subtitle != ""){
						page.append('<h3 class="subtitle">'+details.subtitle+'</h3>');
					}
					page.append('<p class="content">'+details.paragraph+'</p>');
					if(details.source != ""){
						var image = imageHTML.replace("%1",details.source);
						image = image.replace("%2",details.alt);
						page.append(image);
					}
				}
			}
		}
	}
}

var currentDay = "";
content.display("Day1");

$(".navElement").click(function(event){
	console.log($(this).attr('id'));
	content.display($(this).attr('id'));
})
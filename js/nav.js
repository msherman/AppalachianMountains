var nav = {
	"days": [{
		"name": "Day 1",
		"activities": ["Driving"],
		"destination": "Horse Cave, KY"
	},
	{
		"name": "Day 2",
		"activities": ["Mammoth Caves", "Nashville"],
		"destination": "Nashville, TN"
	},
	{
		"name": "Day 3",
		"activities": ["Cades Cove drive", "Abrams Falls", "Blue Ridge Parkway"],
		"destination": "Gatlinburg, TN"
	},
	{
		"name": "Day 4",
		"activities": ["Chimney Tops", "Groto Falls", "Food Place"],
		"destination": "Asheville, NC"
	},
	{
		"name": "Day 5",
		"activities": ["Biltmore Estate", "Sierra Nevada Brewing"],
		"destination": "Asheville, NC"
	},
	{
		"name": "Day 6",
		"activities": ["Grandfather Mountain", "Linville Falls", "Food Place"],
		"destination": "Floyd, VA"
		
	},
	{
		"name": "Day 7",
		"activities": ["Monticello", "Lunatic Asylum"],
		"destination": "Clarksburg, WV"
	},
	{
		"name": "Day 8",
		"activities": ["Driving"],
		"destination": "Green Bay, WI"
	}],
	display: function(){
		var dayTemplate = "<div class='dayNav %1'>%2";
		var activityTemplate = "<div class='activityNav %1'>%2</div>";
		var dayDetails = "";
		var dayName = "";
		var activityName = "";
		var dayClass = "";
		for (day in nav.days){
			dayDetails = nav.days[day];
			dayClass = dayDetails.name.replace(" ", "")
			var dayName = dayTemplate.replace("%1", dayClass);
			dayName = dayName.replace("%2", dayDetails.name+" - " + dayDetails.destination);
			$(".nav").append(dayName);
			for (activity in nav.days[day].activities){
				var activityName = activityTemplate.replace("%1", dayDetails.name.replace(" ", ""));
				activityName = activityName.replace("%2", dayDetails.activities[activity]);
				$(".nav").append(activityName);
			}
			$(".nav").append("</div>");
		}
	}
}

nav.display();

$(".dayNav").hover(function(){
	console.log($(this).attr('class'));
	var child = $(this).children();
});
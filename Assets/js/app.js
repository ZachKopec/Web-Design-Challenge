var baseURL = "https://api.steampowered.com";
var interfaceName = "ISteamUser";
var methodName = "GetPlayerSummaries";
var methodVersion = "v2";
var key = "?key=" + API_KEY
var steamID = "&format=json&steamids=76561198036370701"

// for(var i = 1; i < 11; i++)
var fullURL = baseURL + "/" + interfaceName + "/" + methodName + "/" + methodVersion + "/" + key + "/" + steamID

d3.json(fullURL, function(response) {

    console.log(response)

});
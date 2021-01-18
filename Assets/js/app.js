var baseURL = "https://api.steampowered.com";
var interfaceName = "ISteamUser";
var methodName = "GetPlayerSummaries";
var methodVersion = "v2";
var key = "?key=" + API_KEY
var steamID = "&format=json&steamids=76561198036370701"

// for(var i = 1; i < 11; i++)
var fullURL = baseURL + "/" + interfaceName + "/" + methodName + "/" + methodVersion + "/" + key + "/" + steamID;

var url = "http://api.steampowered.com/ISteamWebAPIUtil/GetSupportedAPIList/v1/?key=A87E23901B5F1A67E3FA9BB228967903&steamid=000123000456"; 

d3.json(url, function(response) {

    console.log(response)

});
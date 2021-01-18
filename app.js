var baseURL = "https://api.steampowered.com";
var interfaceName = "ISteamUser";
var methodName = "GetPlayerSummaries";
var methodVersion = "v2";
var key = "?key=" + API_KEY
var steamID = "76561197960435530"

// for(var i = 1; i < 11; i++)
var fullURL = baseURL + "/" + interfaceName + "/" + methodName + "/" + methodVersion + "/" + key + "/" + steamID;

var url = "http://api.steampowered.com/ISteamWebAPIUtil/GetSupportedAPIList/v1/?key=" + API_KEY + "&steamid=" + steamID; 

d3.json(url, function(response) {

    console.log(response)

});
// This regex is responsible for getting each class availability block
// For the infos, you should get the "groups" that regex.match() returns, see
// match[group_integer] for more info.
// [0] -> Full match
// [1] -> Total availability
// [4] -> Occupied availability
// [7] -> Remaining availability
// TO-DO: Groups dictionary
exports.classAvailability = /Vagas<\/td><td><b>([0-9]*)<\/b>(.*?)Ocupadas(.*?)>([0-9]*)<\/font>(.*?)Restantes(.*?)>([0-9]*)<\/font>/ig;

// This regex is responsible for getting each class time
// For the infos, you should get the "groups" that regex.match() returns, see
// match[group_integer] for more info.
// [0] -> Full match
// [1] -> Week Day
// [3] -> Start Hour
// [5] -> Finish Hour
// [7] -> Local
// TO-DO: Groups dictionary
exports.classDayTimes = /<b>(.*?)<\/b>(.*?)<b>([0-9]{2}:[0-9]{2})<\/font>(.*?)>([0-9]{2}:[0-9]{2})<\/b>(.*?)=top>(.*?)<\/i><\/div>/ig;

// This regex is responsible for getting the professors names.
// Use match[1] for the name.
exports.professorNames = /([\S\s]*?)<br>/ig;

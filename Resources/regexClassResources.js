// This regex is responsible for getting each class availability block
// For the infos, you should get the "groups" that regex.match() returns, see
// match[group_integer] for more info.
// [0] -> Full match
// [1] -> Total availability
// [3] -> Occupied availability
// [5] -> Remaining availability
// TO-DO: Groups dictionary
exports.classAvailability = /<td><b>([0-9]*)<\/b>(.*?)color=red>([0-9]*)<\/font>(.*?)color=red>([0-9]*)<\/font>/ig;

// This regex is responsible for getting each class time
// For the infos, you should get the "groups" that regex.match() returns, see
// match[group_integer] for more info.
// [0] -> Full match
// [1] -> Start hour
// [2] -> Final hour
// [4] -> Local
// [6] -> Day
// TO-DO: Groups dictionary
exports.classDayTimes = /<td title="Horário: ([0-9]{2}:[0-9]{2}) - ([0-9]{2}:[0-9]{2})([\s\S]*?)Local: (.*?)">([\s\S]*?)>(.*?) <\/font>/ig;

// This regex is responsible for getting the professors names.
// Use match[1] for the name.
exports.professorNames = /([\S\s]*?)<br>/ig;

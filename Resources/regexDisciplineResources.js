// This regex is responsible for getting each 'class' block in a discipline page
exports.classBlock = /<tr bgcolor=#FFFFFF>      <td width=40>([\s\S]*?)<td colspan=6 bgcolor=white/ig;

// This regex is responsible for getting the header block from the discipline page
exports.headerBlock = /<table width=70% border=0 class=framecinza>  ([\s\S]*?)<\/b><\/td><\/tr>/ig;

// This regex is responsible for getting each important data in the header block,
// found using the regex above.
// For the infos, you should get the "groups" that regex.match() returns, see
// match[group_integer] for more info.
// [0] -> Full match
// [1] -> Discipline Department URL
// [2] -> Discipline Department Name
// [4] -> Discipline Code
// [6] -> Discipline Name
// [8] -> Discipline credits info
// [10] -> Discipline campus
// TO-DO: Groups dictionary
exports.headerInfo = /Departamento: <strong><a href=(.*?)>(.*?)<\/a>(.*?)<b>([0-9]*?)<\/b>([\s\S]*?)">(.*?)<img src([\s\S]*?)Arial size=1>([0-9-]*?)    <\/font>([\s\S]*?)<b>(.*?)<\/b><\/td><\/tr>/ig;

// This regex is responsible for getting each important data from a class block,
// found using the regex 'classBlock'.
// For the infos, you should get the "groups" that regex.match() returns, see
// match[group_integer] for more info.
// [0] -> Full match
// [2] -> Class 'turma'
// [4] -> Class availability info (Needs another regex)
// [6] -> Day period
// [8] -> Class day times info (Needs another regex)
// [10] -> Class professor names (Needs another regex)
// TO-DO: Groups dictionary
exports.classInfo = /([\s\S]*?)class=titulo><font size=4><b>(.*?)<\/b>([\s\S]*?)<table width=100%>([\s\S]*?)<\/tr>        <\/table>     <\/td><td width=40 nowrap>([\s\S]*?)Helvetica, sans-serif>(.*?)<br>([\s\S]*?)nowrap class=padrao align=center>([\s\S]*?)<\/td><td valign(.*?)<center>(.*?)<\/center>/ig;

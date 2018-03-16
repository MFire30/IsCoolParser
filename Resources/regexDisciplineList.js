// This regex is responsible for getting the discipline count
exports.disciplineCount = /<span id='result_label' class='badge' style='margin-bottom: 12px;'><span id='result_search'>(\d+)\s+<\/span> disciplinas existentes<\/span>/ig;

// This regex is responsible for getting each discipline 'block'
exports.disciplineRawBlock = /<tr>([\s\S]*?)<i class='material-icons'>event_note<\/i><\/a><\/td><\/tr>/ig;

// This regex is responsible for getting each discipline info
exports.disciplineInfo = /<td>(\d+)<\/td><td><a href='(?:[\s\S]+)'>(?:[\s\S]+)<\/a><\/td><td><a title='([\s\S]+)' href='([\s\S]+)'>/ig;

// This regex is responsible for getting the department responsible for a given offer
exports.offerDeptoName = /<div class="block-header">(?:\s*?)<h2>OFERTA DE DISCIPLINAS <small>([\s\S]*?)<\/small><\/h2>(?:\s*?)<\/div>/ig;

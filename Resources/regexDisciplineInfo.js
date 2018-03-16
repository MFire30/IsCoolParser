exports.singleClassBlock = /<div class='table-responsive' style='border: 1px solid #337ab7; margin-bottom: 20px;'>([\s\S]*?)<\/table><\/div>/ig;

exports.classBasicInfo = /<td class='turma'>(\w+)<\/td><\/tr><tr><td>([\s\S]*?)<\/td><\/tr>/ig;

exports.classAvailability = /<td>Total<\/td><td>Vagas<\/td><td><span>(\d+)<\/span><\/td><\/tr><tr><td><\/td><td>Ocupadas<\/td><td><span style=(?:[\s\S]*?)>(\d+)<\/span><\/td><\/tr><tr><td><\/td><td>Restantes<\/td><td><span style=(?:[\s\S]*?)>(\d+)<\/span><\/td><\/tr>/ig;

exports.classSchedule = /<td style='width: 140px;'>(\S*?)<\/td><td>(\d{2}:\d{2})<\/td><td>(\d{2}:\d{2})<\/td><\/tr><tr><td><img src=\/imagens\/subseta_dir\.gif><\/td><td colspan='2'>([\s\S]*?)<\/td>/ig;

exports.classPossibleProfessorBlock = /<td><table><tr>([\s\S]*?)<\/tr><\/table><\/td>/ig;

exports.classProfessor = /<td>([\s\S]*?)<\/td>/ig; 

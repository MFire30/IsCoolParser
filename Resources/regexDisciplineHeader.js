exports.disciplineDepto = /<tr><th class='col-lg-2 col-sm-2 col-xs-2'>Departamento<\/th><td class='col-lg-10 col-sm-10 col-xs-10'><a href='([\s\S]*?)'>([\s\S]*?)<small>([\s\S]*?)<\/small><\/a><\/td><\/tr>/ig;

exports.disciplineCode = /<tr><th>Código da Disciplina<\/th><td>(\d+)<\/td/ig;

exports.aboutLink = /<a title='Clique para ver a ementa da disciplina' href='([\s\S]*?)'/ig;

exports.disciplineCredits = /\(Teor-Prat-Ext-Est\)<\/small><\/th><td>(\d+)-(\d+)-(\d+)-(\d+)/ig;

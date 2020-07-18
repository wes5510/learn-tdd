const { SUBJECT } = require('./subject');

exports.genLevelBySubjectAndScore = (subject, score) => {
    let level = 'P';
    
    if (subject === SUBJECT.MATH) {
        if (score >= 90) {
            level = 'A'
        } else if (score >= 80) {
           level = 'B'; 
        } else {
            level= 'C';
        }
    } else if (subject === SUBJECT.ENG) {
        if (score >= 70) {
            level = 'A';
        } else if (score >= 60) {
           level = 'B'; 
        } else {
            level = 'C';
        }
    }
    
    return level;
};
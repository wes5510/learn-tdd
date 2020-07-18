const { genLevelBySubjectAndScore } = require('./src/level');
const { SUBJECT } = require('./src/subject');

const main = () => {
    const dumy = [
        [SUBJECT.MATH, 91],
        [SUBJECT.MATH, 81],
        [SUBJECT.MATH, 71],
        [SUBJECT.ENG, 71],
        [SUBJECT.ENG, 81],
        [SUBJECT.ENG, 61],
        ['none', 51],
    ];
    
    dumy.forEach((d) => {
        console.log(
            `subject: ${d[0]}\tscore: ${d[1]}\tlevel: ${genLevelBySubjectAndScore(d[0], d[1])}`
        );
    });
};

main();
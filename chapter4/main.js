const { genLevelBySubjectAndScore } = require('./src/level');
const { SUBJECT } = require('./src/subject');

const main = () => {
    const dumy = [
        [SUBJECT.MATH.ID, 91],
        [SUBJECT.MATH.ID, 81],
        [SUBJECT.MATH.ID, 71],
        [SUBJECT.ENG.ID, 71],
        [SUBJECT.ENG.ID, 81],
        [SUBJECT.ENG.ID, 61],
        ['none', 51],
    ];
    
    dumy.forEach((d) => {
        console.log(
            `subject: ${d[0]}\tscore: ${d[1]}\tlevel: ${genLevelBySubjectAndScore(d[0], d[1])}`
        );
    });
};

main();
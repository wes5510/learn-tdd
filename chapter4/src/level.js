const { SUBJECT } = require('./subject');

exports.genLevelBySubjectAndScore = (subjectId, score) => {
    // 유효한 과목이 아니면 P 반환
    const subject = Object.values(SUBJECT).find((s) => s.ID === subjectId);
    if (!subject) {
        return 'P';
    }

    // 과목 스팩에 따른 level 반환
    return subject.scoreAndLevel.find((stl) => stl.score <= score).level;
};
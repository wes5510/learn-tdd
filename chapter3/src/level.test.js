const { SUBJECT } = require('./subject');
const { genLevelBySubjectAndScore } = require('./level');

describe('level', () => {
    describe('genLevelBySubjectAndScore', () => {
        test('과목이 수학이고 점수가 90이면 A 반환하는 지 확인', () => {
            const level = genLevelBySubjectAndScore(SUBJECT.MATH, 90);
            expect(level).toEqual('A');
        });
    });
});
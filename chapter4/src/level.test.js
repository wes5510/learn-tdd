const { SUBJECT } = require('./subject');
const { genLevelBySubjectAndScore } = require('./level');

describe('level', () => {
    describe('genLevelBySubjectAndScore', () => {
        test('과목이 none일때 P 반환하는 지 확인', () => {
            const level = genLevelBySubjectAndScore('none', 90);
            expect(level).toEqual('P');
        });
        
        test('과목 명세에 따라 level 반환하는 지 확인', () => {
            const oriMathSpec = SUBJECT.MATH;
            
            SUBJECT.MATH = {
                ID: 'math',
                scoreAndLevel: [
                    { score: 90, level: 'A'},
                    { score: 0, level: 'C'},
                ]
            };
            
            expect(genLevelBySubjectAndScore(SUBJECT.MATH.ID, 90)).toEqual('A');
            expect(genLevelBySubjectAndScore(SUBJECT.MATH.ID, 70)).toEqual('C');
            
            SUBJECT.MATH = oriMathSpec;
        });
    });
});
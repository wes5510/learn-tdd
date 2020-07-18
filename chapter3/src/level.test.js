const { SUBJECT } = require('./subject');
const { genLevelBySubjectAndScore } = require('./level');

describe('level', () => {
    describe('genLevelBySubjectAndScore', () => {
        test('과목이 수학이고 점수가 90이면 A 반환하는 지 확인', () => {
            const level = genLevelBySubjectAndScore(SUBJECT.MATH, 90);
            expect(level).toEqual('A');
        });
        
        test('과목이 수학이고 점수가 80이면 B 반환하는 지 확인', () => {
            const level = genLevelBySubjectAndScore(SUBJECT.MATH, 80);
            expect(level).toEqual('B');
        });
        
        test('과목이 수학이고 점수가 79이면 C 반환하는 지 확인', () => {
            const level = genLevelBySubjectAndScore(SUBJECT.MATH, 79);
            expect(level).toEqual('C');
        });
        
        test('과목이 영어이고 점수가 70이면 A 반환하는 지 확인', () => {
            const level = genLevelBySubjectAndScore(SUBJECT.ENG, 70);
            expect(level).toEqual('A');
        });
        
        test('과목이 영어이고 점수가 60이면 B 반환하는 지 확인', () => {
            const level = genLevelBySubjectAndScore(SUBJECT.ENG, 60);
            expect(level).toEqual('B');
        });
        
        test('과목이 영어이고 점수가 59이면 C 반환하는 지 확인', () => {
            const level = genLevelBySubjectAndScore(SUBJECT.ENG, 59);
            expect(level).toEqual('C');
        });
    });
});
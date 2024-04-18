import { capitalizeEveryWord } from 'utils';

describe('Utils', ()=>{
    test('capitalizeEveryWord', ()=>{
        const sampleTest = "hOLA CÓMO eSTÁS";
        const resText = capitalizeEveryWord(sampleTest);
        expect(resText).toEqual('Hola Cómo Estás');
    })
});
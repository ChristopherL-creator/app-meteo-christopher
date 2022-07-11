import { SetTwoDecimalsPipe } from './set-two-decimals.pipe';

describe('SetTwoDecimalsPipe', () => {
  it('create an instance', () => {
    const pipe = new SetTwoDecimalsPipe();
    expect(pipe).toBeTruthy();
  }); 

  it('mi aspetto che la funzione tranform invocta con due argomenti il numero 0 mi dia come risultato diverso da 0.0001', () => { 
    const pipe = new SetTwoDecimalsPipe(); 
    expect(pipe.transform(0)).not.toBe('0.0001'); 
  });
});

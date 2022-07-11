import { AddMeasureUnitPipe } from './add-measure-unit.pipe';

describe('AddMeasureUnitPipe', () => {
  
  it('create an instance', () => {
    const pipe = new AddMeasureUnitPipe();
    expect(pipe).toBeTruthy();
  }); 

  it('mi aspetto che la funzione tranform invocta con due argomenti (il umero 21.45679, e la stringa m/s), mi dia come risultato la stringa 23 m/s', () => { 
    const pipe = new AddMeasureUnitPipe(); 
    expect(pipe.transform(21.45679, 'm/s')).toBe('21.45679m/s');
  });

});
//  
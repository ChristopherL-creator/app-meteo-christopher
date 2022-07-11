import { CodeIconPipe } from './code-icon.pipe';

describe('CodeIconPipe', () => {
  it('create an instance', () => {
    const pipe = new CodeIconPipe();
    expect(pipe).toBeTruthy();
  }); 

  it('passando alla funzone transofm il numero 65, mi aspetto che la string risultante contenga la parola "rain"', () => { 
    const pipe = new CodeIconPipe(); 
    expect(pipe.transform(65)).toContain('rain');
  }); 

  it('passando alla funzone transofm il numero 2000, mi aspetto che la string risultante contenga la parola "clear"', () => { 
    const pipe = new CodeIconPipe(); 
    expect(pipe.transform(2000)).toContain('clear');
  });
});

import { PersonInfoPurePipe } from './person-info-pure.pipe';

describe('PersonInfoPurePipe', () => {
  it('create an instance', () => {
    const pipe = new PersonInfoPurePipe();
    expect(pipe).toBeTruthy();
  });
});

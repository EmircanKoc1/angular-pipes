import { PersonInfoImpurePipe } from './person-info-impure.pipe';

describe('PersonInfoImpurePipe', () => {
  it('create an instance', () => {
    const pipe = new PersonInfoImpurePipe();
    expect(pipe).toBeTruthy();
  });
});

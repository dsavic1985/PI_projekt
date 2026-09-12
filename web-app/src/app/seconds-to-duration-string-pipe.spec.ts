import { SecondsToDurationStringPipe } from './seconds-to-duration-string-pipe';

describe('SecondsToDurationStringPipe', () => {
  it('create an instance', () => {
    const pipe = new SecondsToDurationStringPipe();
    expect(pipe).toBeTruthy();
  });
});

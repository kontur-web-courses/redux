import {timerReducer, changeSeconds, restart} from './timerReducer.js'

describe('timerReducer', () => {
  it('should init state when state is undefined', () => {
    expect(timerReducer(undefined, {}).seconds).toBe(15);
  });

  it('should increase seconds when change with positive number', () => {
    expect(timerReducer({seconds: 7}, changeSeconds(3)).seconds).toBe(10);
  });

  it('should decrease seconds when change with negative number', () => {
    expect(timerReducer({seconds: 7}, changeSeconds(-3)).seconds).toBe(4);
  });

  it('should not increase more than 15', () => {
    expect(timerReducer({seconds: 7}, changeSeconds(9)).seconds).toBe(15);
  });

  it('should not decrease less than 0', () => {
    expect(timerReducer({seconds: 7}, changeSeconds(-8)).seconds).toBe(0);
  });

  it('should set seconds to 15 when restart', () => {
    expect(timerReducer({seconds: 7}, restart()).seconds).toBe(15);
  });
});

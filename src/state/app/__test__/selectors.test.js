import { getCodePushLabel, getIsVotedForHackathon } from '../selectors';

test('test state/app/selectors.getCodePushLabel', () => {
  expect(getCodePushLabel({ app: {} })).toBe('~');
  expect(getCodePushLabel({ app: { codePushLabel: 'v1' } })).toBe('v1');
});

test('test state/app/selectors.getIsVotedForHackathon', () => {
  expect(getIsVotedForHackathon({ app: { isVotedForHackathon: false } })).toBe(
    false
  );
  expect(getIsVotedForHackathon({ app: { isVotedForHackathon: true } })).toBe(
    true
  );
});

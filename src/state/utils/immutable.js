import updateSource from 'immutability-helper';

export const update = updateSource;

export const merge = (state, data) => update(state, {
  $merge: data,
});

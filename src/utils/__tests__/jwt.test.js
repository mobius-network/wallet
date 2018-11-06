import { encodeFundToken } from '../jwt';

test('test utils/jwt.encodeFundToken', async () => {
  const expected = encodeFundToken('foo');

  expect(expected).toBe(
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJmb28iLCJqdGkiOjR9.ghoqzJQXA5g9qtN_zXQ643Ze6fiqtBG2EhWbUb01vn9w77gfO_yyuz-BciPQhzLZzAnuATiQfa4jz_m0xG9rvw'
  );
});

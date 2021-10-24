import { rest } from 'msw';
import { githubMessageResponse } from './github.mock';

export const handlers = [
  rest.get('https://api.github.com/zen', (req, res, ctx) => {
    return res(ctx.json(githubMessageResponse));
  }),
];

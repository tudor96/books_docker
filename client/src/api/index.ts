import { account } from './account';

export const apiFactory = () => ({
  data: {
    account: () => account(),
  },
});

export type ApiFactory = ReturnType<typeof apiFactory>;

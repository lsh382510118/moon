const isDev = process.env.NODE_ENV === 'development';
export const path = isDev ? './' : './moon/dist/';
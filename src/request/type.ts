export interface MiddlewareActor<C, T = any> {
  (context: C, next: () => any): Promise<T>;
}

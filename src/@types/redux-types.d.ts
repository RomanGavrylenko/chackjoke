declare module 'ReduxTypes' {
    export type RootState = ReturnType<typeof import('../store').rootReducer>;
    export type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;
}

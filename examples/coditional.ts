//https://youtu.be/QFWrbNehKk0?t=548

// type Exclude<T, U> = T extends U ? never : T

type ResultType = Exclude<"a" | "b" | "c", "a" | "b">;

type MyType<T> = [T] extends [string | number] ? T : never;

type MyResultType = MyType<boolean | string | number>;

type InferSomething<T> = T extends infer U ? U : any;

type InferredType = InferSomething<"iam String">;

type InferSomething2<T> = T extends { a: infer A; b: infer B } ? A & B : any;

type InferredType2 = InferSomething2<{
  a: {
    someAProp: 1;
  };
  b: {
    someBProp: "B";
  };
}>;

type ReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any;
type MyFunReturnType<T> = ReturnType<()=> true>;


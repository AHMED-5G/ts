//https://www.youtube.com/watch?v=RjQpep8fBdo
type Properties = "propA" | "propB";

type obj = {
  propA: string;
  propB: number;
};

type MyMappedType<T> = {
  [P in keyof T]: T[P] | undefined;
};

type MyNewType = MyMappedType<obj>;

type Pick1<T, Properties extends keyof T> = {
  [P in Properties]: T[P];
};

type myNewType2 = Pick1<obj, "propA">;

type Record1<K extends keyof any, T> = {
  [P in K]: T;
} & {
  extra: T;
};

const someRecord: Record1<string, number> = {
  propA: 1,
  propB: 2,
  extra: 3,
};
someRecord.propC = 3;

interface Record2 {
  [key: string]: string;
}

const someRecord2: Record2 = {
  propA: "u",
};

someRecord2.propC = "3e";

//https://www.youtube.com/watch?v=0-BsmzlMMIw

type MyFlexibleDogInfo = {
  name: string;
  [key: string]: string;
};
//  & Record<string, string>;

const dog: MyFlexibleDogInfo = {
  name: "dog",
  age: "1",
  color: "white",
};

interface DogInfo {
  name: string;
  age: number;
}

type OptionFlags<T> = {
  [P in keyof T]: boolean;
};

type DogInfoOptions = OptionFlags<DogInfo>;

type Listener<T extends object> = {
  [P in keyof T as `on${Capitalize<string & P>}Change`]?: (
    newValue: T[P]
  ) => void;
} & {
  [P in keyof T as `on${Capitalize<string & P>}Delete`]?: (
    newValue: T[P]
  ) => void;
};

function listenToObject<T extends object>(
  obj: T,
  listeners: Listener<T>
): void {
  throw "not implemented";
}

const lg: DogInfo = {
  name: "lg",
  age: 1,
};
type DogInfoListener = Listener<DogInfo>;

listenToObject(lg, {
  onNameChange: (name: string) => {},
  onAgeChange: (age: number) => {
    console.log(age);
  },
  onNameDelete: (name: string) => {},
});

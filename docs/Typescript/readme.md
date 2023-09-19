# Typescript Knowledge point

## class

### implements 关键字

interface 接口或 type 别名，可以用对象的形式，为 class 指定一组检查条件，如果不满足这些条件就会报错。它并不能代替 class 自身的类型声明。

```typescript
interface Country {
  name:string;
  capital:string;
}
// 或者
type Country = {
  name:string;
  capital:string;
}

class MyCountry implements Country {
  name = '';
  capital = '';
}
```

上面示例中，`interface`或`type`都可以定义一个对象类型。类`MyCountry`使用`implements`关键字，表示该类的实例对象满足这个外部类型。

### 类与接口的合并

TypeScript 不允许两个同名的类，但是如果一个类和一个接口同名，那么接口会被合并进类。

```typescript
class A {
  x:number = 1;
}

interface A {
  y:number;
}

let a = new A();
a.y = 10;

a.x // 1
a.y // 10
```

上面示例中，类`A`与接口`A`同名，后者会被合并进前者的类型定义。

### 抽象类，抽象成员

TypeScript 允许在类的定义前面，加上关键字`abstract`，表示该类不能被实例化，只能当作其他类的模板。这种类就叫做“抽象类”（abstract class）。

```typescript
abstract class A {
  id = 1;
}

const a = new A(); // 报错
```

上面示例中，直接新建抽象类的实例，会报错。

抽象类只能当作基类使用，用来在它的基础上定义子类。

抽象类的内部可以有已经实现好的属性和方法，也可以有还未实现的属性和方法。后者就叫做“抽象成员”（abstract member），即属性名和方法名有`abstract`关键字，表示该方法需要子类实现。如果子类没有实现抽象成员，就会报错。

```typescript
abstract class A {
  abstract foo:string;
  bar:string = '';
}

class B extends A {
  foo = 'b';
}
```

上面示例中，抽象类`A`定义了抽象属性`foo`，子类`B`必须实现这个属性，否则会报错。

总之，抽象类的作用是，确保各种相关的子类都拥有跟基类相同的接口，可以看作是模板。其中的抽象成员都是必须由子类实现的成员，非抽象成员则表示基类已经实现的、由所有子类共享的成员。

## declare 关键字

### declare module

某些第三方模块，原始作者没有提供接口类型，这时可以在自己的脚本顶部加上下面一行命令。

```typescript
declare module "模块名";

// 例子
declare module "hot-new-module";
```

加上上面的命令以后，外部模块即使没有类型声明，也可以通过编译。但是，从该模块输入的所有接口都将为`any`类型。

declare module 描述的模块名可以使用通配符。

### declare global

如果要为 JavaScript 引擎的原生对象添加属性和方法，可以使用`declare global {}`语法。

```typescript
export {};

declare global {
  interface String {
    toSmallString(): string;
  }
}

String.prototype.toSmallString = ():string => {
  // 具体实现
  return '';
};
```

上面示例中，为 JavaScript 原生的`String`对象添加了`toSmallString()`方法。declare global 给出这个新增方法的类型描述。

这个示例第一行的空导出语句`export {}`，作用是强制编译器将这个脚本当作模块处理。这是因为`declare global`必须用在模块里面。

### declare module 用于类型声明文件

我们可以为每个模块脚本，定义一个`.d.ts`文件，把该脚本用到的类型定义都放在这个文件里面。但是，更方便的做法是为整个项目，定义一个大的`.d.ts`文件，在这个文件里面使用`declare module`定义每个模块脚本的类型。

下面的示例是`node.d.ts`文件的一部分。

```typescript
declare module "url" {
  export interface Url {
    protocol?: string;
    hostname?: string;
    pathname?: string;
  }

  export function parse(
    urlStr: string,
    parseQueryString?,
    slashesDenoteHost?
  ): Url;
}

declare module "path" {
  export function normalize(p: string): string;
  export function join(...paths: any[]): string;
  export var sep: string;
}
```

上面示例中，`url`和`path`都是单独的模块脚本，但是它们的类型都定义在`node.d.ts`这个文件里面。

使用时，自己的脚本使用三斜杠命令，加载这个类型声明文件。

```typescript
/// <reference path="node.d.ts"/>
```

如果没有上面这一行命令，自己的脚本使用外部模块时，就需要在脚本里面使用 declare 命令单独给出外部模块的类型。

## d.ts 类型声明文件

### 内置声明文件

安装 TypeScript 语言时，会同时安装一些内置的类型声明文件，主要是内置的全局对象（JavaScript 语言接口和运行环境 API）的类型声明。

TypeScript 编译器会自动根据编译目标target的值，加载对应的内置声明文件，所以不需要特别的配置。但是，可以使用编译选项lib，指定加载哪些内置声明文件。

```json
{
  "compilerOptions": {
    "lib": ["dom", "es2021"]
  }
}
```

### 外部类型声明文件

如果项目中使用了外部的某个第三方代码库，那么就需要这个库的类型声明文件。

这时又分成三种情况。

（1）这个库自带了类型声明文件。

一般来说，如果这个库的源码包含了[vendor].d.ts文件，那么就自带了类型声明文件。其中的vendor表示这个库的名字，比如moment这个库就自带moment.d.ts。使用这个库可能需要单独加载它的类型声明文件。

（2）这个库没有自带，但是可以找到社区制作的类型声明文件。

第三方库如果没有提供类型声明文件，社区往往会提供。TypeScript 社区主要使用 DefinitelyTyped 仓库，各种类型声明文件都会提交到那里，已经包含了几千个第三方库。

这些声明文件都会作为一个单独的库，发布到 npm 的@types名称空间之下。比如，jQuery 的类型声明文件就发布成@types/jquery这个库，使用时安装这个库就可以了。

```bash
npm install @types/jquery --save-dev
```

执行上面的命令，@types/jquery这个库就安装到项目的node_modules/@types/jquery目录，里面的index.d.ts文件就是 jQuery 的类型声明文件。如果类型声明文件不是index.d.ts，那么就需要在package.json的types或typings字段，指定类型声明文件的文件名。

（3）找不到类型声明文件，需要自己写。

有时实在没有第三方库的类型声明文件，又很难完整给出该库的类型描述，这时你可以告诉 TypeScript 相关对象的类型是any。

```ts
declare module '模块名';
```

有了上面的命令，指定模块的所有接口都将视为any类型。

## extends...?: 条件运算符

TypeScript 提供类似 JavaScript 的?:运算符这样的三元运算符，但多出了一个extends关键字。

条件运算符extends...?:可以根据当前类型是否符合某种条件，返回不同的类型。

```ts
// true
type T = 1 extends number ? true : false;
```

**如果需要判断的类型是一个联合类型，那么条件运算符会展开这个联合类型。**

```ts
(A|B) extends U ? X : Y

// 等同于

(A extends U ? X : Y) |
(B extends U ? X : Y)
```

如果不希望联合类型被条件运算符展开，可以把extends两侧的操作数都放在方括号里面。

```ts
type ToArray<Type> =
  [Type] extends [any] ? Type[] : never;

// (string | number)[]
type T = ToArray<string|number>;
```

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

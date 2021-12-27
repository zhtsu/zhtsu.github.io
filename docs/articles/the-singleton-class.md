---
date: 2021-12-22
title: 单例类
description: 单例类是什么？C++中怎么实现？
category: C++
---

{{$page.frontmatter.description}}

---

## 什么是单例类?

单例类是一种不允许用户创建多于 1 个实例对象的类，但会为用户提供一个对于单例对象的全局访问点。

单例类的这个单例对象一经创建，若不手动进行释放，便会存在于程序的整个生命周期，相当于一个全局变量。

## 单例类有什么用？

能够使访问该类的方式变得单一且容易。

## 什么时候该使用单例类？

这个问题等同于：什么样的类该设计成单例类？

抽象定义理应只存在一个对象且需要被经常访问的类，应该设计成单例类。各种管理类，应该设计成单例类。

比如：游戏引擎中的纹理管理类。

游戏程序中出现的所有纹理，都会通过纹理管理类进行加载，并且每一个被加载的纹理都会存放于一个纹理记录中，程序结束时，这个纹理记录中的纹理也会得到释放。存在多个对象时，将会使上述行为变得难以管理。

## 怎么实现单例类？

单例类的核心思想在于限制用户创建对象的行为，同时为用户提供一个访问单个实例的接口。可以通过以下三步实现：

- 限制用户创建对象的行为：将构造函数设为私有。

- 创建一个单例：定义静态类成员属性
- 提供访问接口：定义静态类成员方法

单例类有两种实现形式：懒汉式，饿汉式。见如下代码。

```cpp
#include <iostream>

/// 饿汉式
class Manager1 {
  public:
    // 访问唯一实例对象的接口
    Manager1* GetInstance() {
      return instance_;
    }

  private:
    // 构造函数私有化，限制用户创建对象的行为
    Manager1() {}
    ~Manager1() {
      delete instance_;
    }

  private:
    // 声明唯一静态实例对象
    static Manager1* instance_;
};
// 饿汉式核心，在定义时直接创建对象
// 饿得受不了了，马上就得做饭。
Manager1* Manager1::instance_ = new Manager1();

/// 懒汉式
class Manager2 {
  public:
    // 懒汉式核心，在 GetInstance() 第一次被调用时再创建对象
    // 现在还不饿，饿了再做饭。
    Manager2* GetInstance() {
      if (instance_ == nullptr) {
        return new Manager2();
      } else {
        return instance_;
      }
    }

  private:
    Manager2() {}
    ~Manager2() {
      delete instance_;
    }

  private:
    static Manager2* instance_;
};
// 在定义时不创建对象
Manager2* Manager2::instance_ = nullptr;

int main(int argc, char** argv) {
  
  int pause;
  std::cin >> pause;

  return 0;
}
```



<Vssue/>

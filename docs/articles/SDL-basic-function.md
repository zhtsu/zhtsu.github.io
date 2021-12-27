---
date: 2021-12-03
title: SDL基础函数
description: SDL中的一些基础接口
category: C++
---

简介：{{$page.frontmatter.description}}

---

初始化以及销毁SDL

```cpp
// 初始化
SDL_Init(SDL_INIT_EVERYTHING);
// 销毁
SDL_Quit();

```

创建以及销毁一个窗口

```cpp
// 创建
SDL_Window* window = SDL_CreateWindow(
        title,
        SDL_WINDOWPOS_CENTERED,
        SDL_WINDOWPOS_CENTERED,
        width,
        height,
        SDL_WINDOW_ALLOW_HIGHDPI
    );
// 销毁
SDL_DestroyWindow(window);

```



<Vssue/>


---
date: 2021-11-28
title: 阶乘计算
description: 蓝桥杯 BASIC-30 试题 基础练习 阶乘计算
category: 算法题
---

简介：{{$page.frontmatter.description}}

---

题目链接：[http://lx.lanqiao.cn/problem.page?gpid=T71](http://lx.lanqiao.cn/problem.page?gpid=T71)

```cpp
#include <iostream>
#include <stdio.h>
#include <cstring>
using namespace std;

void mulWithAns(int* ans, int* length, int factor) {
    int carry = 0;
    for (int i = 0; i < *length; i++) {
        ans[i] = ans[i] * factor + carry;
        carry = 0;
        if (ans[i] >= 10) {
            carry = ans[i] / 10;
            ans[i] = ans[i] % 10;
        }
    }
    while (carry) {
        *length += 1;
        ans[*length - 1] = carry % 10;
        carry /= 10;
    }
}

int main() {
    int ans[10000];
    int length = 1;
    memset(ans, 0, sizeof(ans));
    ans[0] = 1;

    int n;
    scanf("%d", &n);

    for (int i = 1; i < n + 1; i++) {
        mulWithAns(ans, &length, i);
    }

    for (int i = length - 1; i >= 0; i--) {
        printf("%d", ans[i]);
    }

    return 0;
}

```



<Vssue/>

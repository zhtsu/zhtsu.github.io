---
date: 2021-11-28
title: 高精度加法
description: 蓝桥杯 BASIC-29 试题 基础练习 高精度加法
category: 算法题
---

简介：{{$page.frontmatter.description}}

---

题目链接：[http://lx.lanqiao.cn/problem.page?gpid=T70](http://lx.lanqiao.cn/problem.page?gpid=T70)

```cpp
#include <iostream>
#include <stdio.h>
#include <cstring>
#include <algorithm>
using namespace std;

int main() {
    int ans[105];
    int length = 0;
    memset(ans, 0, sizeof(ans));
    string a, b;

    getline(cin, a);
    getline(cin, b);

    reverse(a.begin(), a.end());
    reverse(b.begin(), b.end());
    int aLen = a.length();
    int bLen = b.length();

    int carry = 0;
    int i = 0;
    while(i < aLen && i < bLen) {
        ans[i] += (a[i] - '0') + (b[i] - '0') + carry;
        carry = 0;
        if (ans[i] >= 10) {
            carry = ans[i] / 10;
            ans[i] = ans[i] % 10;
        }
        i++;
        length++;
    }
    while (i < aLen) {
        ans[i] += (a[i] - '0') + carry;
        carry = 0;
        if (ans[i] >= 10) {
            carry = ans[i] / 10;
            ans[i] = ans[i] % 10;
        }
        i++;
        length++;
    }
    while (i < bLen) {
        ans[i] += (b[i] - '0') + carry;
        carry = 0;
        if (ans[i] >= 10) {
            carry = ans[i] / 10;
            ans[i] = ans[i] % 10;
        }
        i++;
        length++;
    }
    while(carry) {
        ans[i] += carry % 10;
        carry /= 10;
        i++;
        length++;
    }

    for (int i = length - 1; i >= 0; i--) {
        printf("%d", ans[i]);
    }

    return 0;
}

```



<Vssue/>

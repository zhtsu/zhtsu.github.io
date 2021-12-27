---
date: 2021-12-20
title: FJ的字符串
description: 蓝桥杯 BASIC-22 试题 基础练习 FJ的字符串
category: 算法题
---

{{$page.frontmatter.description}}

---

题目链接：[http://lx.lanqiao.cn/problem.page?gpid=T63](http://lx.lanqiao.cn/problem.page?gpid=T63)

```cpp
#include <iostream>
#include <algorithm>

using namespace std;

string AN(int n) {
  if (n == 1) {
    string min = "A";
    return min;
  }

  string str;
  str += AN(n - 1);
  reverse(str.begin(), str.end());
  string r_str = str;
  reverse(str.begin(), str.end());
  str += ('A' + (n - 1));
  str += r_str;

  return str;
}

int main() {
  int n;

  cin >> n;

  cout << AN(n);

  return 0;
}
```



<Vssue/>

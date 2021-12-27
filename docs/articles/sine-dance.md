---
date: 2021-12-20
title: Sine之舞
description: 蓝桥杯 BASIC-21 试题 基础练习 Sine之舞
category: 算法题
---

{{$page.frontmatter.description}}

---

题目链接：[http://lx.lanqiao.cn/problem.page?gpid=T62](http://lx.lanqiao.cn/problem.page?gpid=T62)

```cpp
#include <iostream>

using namespace std;

string An(int i, int n) {
  if (i == n) {
    string min;
    min += "sin(";
    min += n + '0';
    min += ")";
    return min;
  }

  string str = "sin(";
  str += i + '0';
  if (i % 2 == 0) {
    str += "+";
  } else {
    str += "-";
  }
  str += An(i + 1, n);
  str += ")";

  return str;
}

string Sn(int i, int n) {
  if (i == 1) {
    string min = An(1, i);
    min += "+";
    min += (n - i + 1) + '0';
    return min;
  }

  string str;
  str += "(";
  str += Sn(i - 1, n);
  str += ")";
  str += An(1, i);
  str += "+";
  str += (n - i + 1) + '0';

  return str;
}

int main() {
  int n;

  cin >> n;

  cout << Sn(n, n);

  return 0;
}
```



<Vssue/>

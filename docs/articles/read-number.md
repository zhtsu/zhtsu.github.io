---
date: 2021-12-20
title: 数的读法
description: 蓝桥杯 BASIC-20 试题 基础练习 数的读法
category: 算法题
---

{{$page.frontmatter.description}}

---

题目链接：[http://lx.lanqiao.cn/problem.page?gpid=T61](http://lx.lanqiao.cn/problem.page?gpid=T61)

```cpp
#include <iostream>

using namespace std;

string reads[10] = {"ling", "yi", "er", "san", "si", "wu", "liu", "qi", "ba", "jiu"};
string digit_reads[5] = {"", "shi", "bai", "qian", "wan"};

int main() {
  string num, ans;

  cin >> num;

  for (unsigned int i = 0; i < num.size(); i++) {
    int digit = ((int)num.size() - i) % 4 - 1;
    if (digit == -1) {
      digit = 3;
    }

    if (num[i] == '0') {
      if (i == num.size() - 1) {
        break;
      } else {
        if (num[i + 1] != '0') {
          ans += "ling ";
          continue;
        } else {
          if (((int)num.size() -1 - i) == 8) {
            ans += "yi ";
          } else if (((int)num.size() - 1 - i) == 4) {
            ans += "wan ";
          }
          continue;
        }
      }
    }

    if (num[i] == '1' && digit_reads[digit] == "shi") {
      if (i > 0 && num[i - 1] == '0') {
        ans += "yi shi ";
        continue;
      }
      ans += "shi ";
      continue;
    }
    
    ans += reads[num[i] - '0'] + " ";

    if (digit != 0) {
      ans += digit_reads[digit] + " ";
    }

    if (((int)num.size() - 1 - i) == 8) {
      ans += "yi ";
    } else if (((int)num.size() - 1 - i) == 4) {
      ans += "wan ";
    }
  }

  cout << ans;

  return 0;
}
```



<Vssue/>

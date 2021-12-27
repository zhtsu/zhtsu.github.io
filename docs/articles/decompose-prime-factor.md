---
title: 分解质因数
date: 2021-03-14
description: 蓝桥杯官方训练题
category: 算法题
---

简介：{{$page.frontmatter.description}}

---

**资源限制**

时间限制：1.0s  内存限制：512.0MB

**问题描述**

　　求出区间[a,b]中所有整数的质因数分解。

**输入格式**

　　输入两个整数a，b。

**输出格式**

　　每行输出一个数的分解，形如k=a1*a2*a3...(a1<=a2<=a3...，k也是从小到大的)(具体可看样例)

**样例输入**

3 10

**样例输出**

3=3
4=2*2
5=5
6=2*3
7=7
8=2*2*2
9=3*3
10=2*5

**提示**

　　先筛出所有素数，然后再分解。

**数据规模和约定**

　　2<=a<=b<=10000

**通关代码**

```cpp
#include <iostream>

using namespace std;

void Isolate(int num) {
	int is_first = 1;
	cout << num << "=";
	for (int i = 2; num != 1; i++) {
		while (num % i == 0) {
			if (is_first) {
				cout << i;
				is_first = 0;
			} else {
				cout << "*" << i;
			}
			num /= i;
		}
		cout << (num == 1 ? "\n" : "");
	}
}

int main() {
	int a, b;
	
	cin >> a >> b;
	
	for (int i = a; i <= b; i++) {
		Isolate(i);
	}
	
	return 0;
}

```
<Vssue  />

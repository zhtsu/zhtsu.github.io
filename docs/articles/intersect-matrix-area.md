---
title: 矩阵面积交
date: 2021-03-15
description: 蓝桥杯官方训练题
category: 算法题
---

简介：{{$page.frontmatter.description}}

---

**资源限制**

时间限制：1.0s  内存限制：512.0MB

**问题描述**

　　平面上有两个矩形，它们的边平行于直角坐标系的X轴或Y轴。对于每个矩形，我们给出它的一对相对顶点的坐标，请你编程算出两个矩形的交的面积。

**输入格式**

　　输入仅包含两行，每行描述一个矩形。
　　在每行中，给出矩形的一对相对顶点的坐标，每个点的坐标都用两个绝对值不超过10^7的实数表示。

**输出格式**

　　输出仅包含一个实数，为交的面积，保留到小数后两位。

样例输入

1 1 3 3
2 2 4 4

**样例输出**

1.00

**通关代码**

```cpp
#include <iostream>

using namespace std;

struct Pos {
	double x;
	double y;
};

int main() {
	Pos a, b, n, m, top, bottom;
	
	cin >> a.x >> a.y >> b.x >> b.y;
	cin >> n.x >> n.y >> m.x >> m.y;
	
	top.x = max(min(a.x, b.x), min(n.x, m.x));
	top.y = min(max(a.y, b.y), max(n.y, m.y));	
	bottom.x = min(max(a.x, b.x), max(n.x, m.x));
	bottom.y = max(min(a.y, b.y), min(n.y, m.y));
	
	bool flag = top.x < bottom.x && top.y > bottom.y;
	printf("%.2lf", flag ? (top.y-bottom.y) * (bottom.x - top.x) : 0.00);
	
	return 0;
}

```



<Vssue  />

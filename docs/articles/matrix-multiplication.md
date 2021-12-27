---
title: 矩阵乘法
date: 2021-03-14
description: 蓝桥杯官方训练题
category: 算法题
---

简介：{{$page.frontmatter.description}}

---

**资源限制**

时间限制：1.0s  内存限制：512.0MB

**问题描述**

　　给定一个N阶矩阵A，输出A的M次幂（M是非负整数）
　　例如：
　　A =
　　1 2
　　3 4
　　A的2次幂
　　7 10
　　15 22

**输入格式**

　　第一行是一个正整数N、M（1<=N<=30, 0<=M<=5），表示矩阵A的阶数和要求的幂数
　　接下来N行，每行N个绝对值不超过10的非负整数，描述矩阵A的值

**输出格式**

　　输出共N行，每行N个整数，表示A的M次幂所对应的矩阵。相邻的数之间用一个空格隔开

**样例输入**

2 2
1 2
3 4

**样例输出**

7 10
15 22

**通关代码**

```cpp
#include <iostream>

using namespace std;

int main() {
	int row, column, power;

	cin >> row >> power;
	
	column = row;
	
	int matrix[row][column];
	int temp_matrix[row][column];
	int res_matrix[row][column];
	
	for (int i = 0; i < row; i++) {
		for (int j = 0; j < column; j++) {
			cin >> matrix[i][j];
			res_matrix[i][j] = matrix[i][j];
		}
	}

	for (int m = 1; m < power; m++) {
		for (int i = 0; i < row; i++) {
			for (int j = 0; j < column; j++) {
				temp_matrix[i][j] = res_matrix[i][j];
			}
		}
		
		for (int i = 0; i < row; i++) {
			for (int j = 0; j < column; j++) {
				int res = 0;
				for (int k = 0; k < row; k++) {
					res += temp_matrix[i][k]*matrix[k][j];
				}
				res_matrix[i][j] = res;
			}
		}
	}
	
	for (int i = 0; i < row; i++) {
		for (int j = 0; j < column; j++) {
			if (power == 0) {
				cout << (i == j ? "1 " : "0 ");
			} else {
				cout << res_matrix[i][j] << " ";
			}
		}
		cout << "\n";
	}

	return 0;
}

```

<Vssue  />

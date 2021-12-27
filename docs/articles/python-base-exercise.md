---
title: Python程序练习题
date: 2021-03-15
description: python选修课上机练习
category: Python
---

简介：{{$page.frontmatter.description}}

---

**单行动态刷新的文本进度条实现**

```python
import time

scale = 10
t = time.perf_counter()
print("\nstart")
for i in range(scale+1):
    done, wait = "**" * i, ".." * (scale-i)
    rate = (i/scale) * 100
    t -= time.perf_counter()
    print("\r{:^3.0f}%[{}->{}]{:.2f}s".format(rate, done, wait, -t), end="")
    time.sleep(0.5)
print("\ndone")

```

**猜数游戏**

```python
num = 2
count = 1
is_continue = True
while is_continue:
    res = eval(input("请猜一个数："))
    if res > num:
        print("遗憾，太大了")
    elif res < num:
        print("遗憾，太小了")
    else:
        print("预测{}次，你猜中了！".format(count))
        is_continue = False
    count += 1
    
```

**统计不同字符个数**

```python
str = input("请输入一个字符串：")
en, num, space, other = 0, 0, 0, 0

for ch in str:
    if "A" <= ch <= 'Z' or "a" <= ch <= "z":
        en += 1
    elif "0" <= ch <= "9":
        num += 1
    elif ch == " ":
        space += 1
    else :
        other += 1

print("字符数：\n英文：{}\n数字：{}\n空格：{}\n其他：{}".format(en, num, space, other))

```

**最大公约数计算**

```python
def GCD(a, b):
    while a % b > 0:
        c = a % b
        a = b
        b = c
    return b

a, b = map(int, input("请输入两个数：").split())
gcd = GCD(a, b)
lcm = a*b // gcd
print("{}和{}的最大公约数是{}，最小公倍数是{}".format(a, b, gcd, lcm))

```

**猜数游戏续**

```python
import random

num = random.randint(0, 100)
count = 1
is_continue = True
while is_continue:
    res = eval(input("请猜一个数："))
    if res > num:
        print("遗憾，太大了")
    elif res < num:
        print("遗憾，太小了")
    else:
        print("预测{}次，你猜中了！".format(count))
        is_continue = False
    count += 1
    
```

**猜数游戏再续**

```python
import random

num = random.randint(0, 100)
count = 1
is_continue = True
while is_continue:
    try :
        str = input("请猜一个数：")
        if str.find(".") != -1:
            raise NameError
        res = eval(str)
    except NameError:
        print("输入内容必须为整数！")
        continue
    if res > num:
        print("遗憾，太大了")
    elif res < num:
        print("遗憾，太小了")
    else:
        print("预测{}次，你猜中了！".format(count))
        is_continue = False
    count += 1
    
```

**羊车门问题**

```python
import random

def Create():
    doors = ["羊", "羊", "车"]
    random.shuffle(doors)
    return doors

n = eval(input("请输入想要模拟的次数："))

change_win, no_change_win = 0, 0
for i in range(n):
    doors = Create()
    choose = random.choice([0, 1, 2])
    if (doors[choose] == "车"):
        no_change_win += 1
    else :
        change_win += 1

change = change_win/n * 100
no_change = no_change_win/n * 100

print("模拟了{}场，改变选择获胜的几率为{}%，坚持选择获胜的几率为{}%".format(n, change, no_change))

```

**猜数游戏又续**

```python
import random

num = random.randint(0, 100)
count = 1
is_continue = True
while is_continue:
    try :
        str = input("请猜一个数：")
        if str.find(".") != -1:
            raise NameError
        elif not str.isdigit():
            raise NameError
        res = eval(str)
    except NameError:
        print("输入内容必须为整数！")
        continue
    if res > num:
        print("遗憾，太大了")
    elif res < num:
        print("遗憾，太小了")
    else:
        print("预测{}次，你猜中了！".format(count))
        is_continue = False
    count += 1
    
```

<Vssue  />

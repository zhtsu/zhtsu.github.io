---
title: pygame做游戏：第一块画布
date: 2021-05-08
description: 创建第一个pageme程序
category: 游戏开发
---
简介：{{$page.frontmatter.description}}

---

* **pygame怎么实现游戏效果的？**
一个拿得出手的游戏肯定不会只有单调的cmd命令行窗口，所以和图形库一样，pygame会首先新建一块用来显示图像内容的画布，并通过控制一个**游戏主循环**来不停的对画布内容进行更新，以呈现出更加丰富的视觉效果。


使用pygame开发游戏时，我们需要关注的是**游戏主循环**，因为游戏的主要实现逻辑都在这里面实现。


接下来来实现我们的第一个pygame程序。


代码：
```python
import pygame
from pygame import locals
from sys import exit

TITLE = "第一个pygame程序"
SCREEN_SIZE = (960, 540)
is_continue = True

pygame.init()
pygame.display.set_caption(TITLE)
screen = pygame.display.set_mode(SCREEN_SIZE, 0, 32)

screen.fill((125, 150, 100))

while is_continue:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            exit()
        elif event.type == pygame.KEYDOWN:
            is_continue = False
    pygame.display.update()
    
```
详细注释：
```python
#导入库
import pygame
from pygame import locals
from sys import exit

# 顶部标题
TITLE = "第一个pygame程序"
# 画布尺寸
SCREEN_SIZE = (960, 540)
# 控制游戏主循环
is_continue = True

# 初始化pygame。
# ps: 可以理解为在这一步准备pygame画布
pygame.init()
# 设置画布顶部显示的标题
pygame.display.set_caption(TITLE)
# 设置画布的尺寸以及展示的位置（锚点位于画布左上角）
# 因为需要对这块画布进行一些操作
# 所以使用一个 screen 变量接收这块画布
screen = pygame.display.set_mode(SCREEN_SIZE, 0, 32)

# 使用一种颜色填充整块画布
screen.fill((125, 150, 100))

# 游戏主循环
while is_continue:
    # 主循环的事件监听
    for event in pygame.event.get():
        # 事件监听使用 for 循环完成
        # 并且这一个 pygame.QUIT 的判断必须存在
        # 否则会陷入一个死循环
        if event.type == pygame.QUIT:
            exit()
        # 按下键盘任意键退出主循环
        elif event.type == pygame.KEYDOWN:
            is_continue = False
    #更新画布内容
    pygame.display.update()
    
```

<Vssue  />
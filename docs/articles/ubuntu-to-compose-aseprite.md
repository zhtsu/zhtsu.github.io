---
title: Ubuntu下编译Aseprite
date: 2021-05-13
description: 一款不错的像素画绘制工具
category: 其他
---
简介：{{$page.frontmatter.description}}

---

Aseprite是一款像素画制作软件，不打折时在steam上的售价为 70 元。同时Aseprite也是开源的，并且使用其源代码编译出的软件，若不进行分发，是允许个人进行免费使用的。


***
本文章记录如何在 Ubuntu20.04 环境下编译 Aseprite。[官方文档](https://github.com/aseprite/aseprite/blob/main/INSTALL.md)。
***


* **安装依赖环境**
```bash
sudo apt-get install -y g++ cmake ninja-build libx11-dev libxcursor-dev libxi-dev libgl1-mesa-dev libfontconfig1-dev
```


* **下载源代码**
```bash
git clone --recursive https://github.com/aseprite/aseprite.git
```


* **下载 Skia library**
```bash
wget https://github.com/aseprite/skia/releases/download/m81-b607b32047/Skia-Linux-Release-x64.zip
```


下载好 Skia library 之后把它解压到一个好找的地方。


* 编译
	* 进入源代码文件夹 aseprite 下，并新建一个名为 build 的文件夹。编译后的软件会存放在这里面。
	* 进入新建的 build 文件下，依次执行以下命令。


	```bash
	export SKIA_HOME='/home/administrator/Skia-Linux-Release-x64'
	```


	将上面这条命令中 SKIA_HOME= 后的内容改为自己解压后的 Skia library 文件夹根目录。


	```bash
	cmake \
  -DCMAKE_BUILD_TYPE=RelWithDebInfo \
  -DLAF_BACKEND=skia \
  -DSKIA_DIR=$SKIA_HOME \
  -DSKIA_LIBRARY_DIR=$SKIA_HOME/out/Release-x64 \
  -DSKIA_LIBRARY=$SKIA_HOME/out/Release-x64/libskia.a \
  -G Ninja \
  ..
	```


	```bash
	ninja aseprite
	```


	若未出现任何问题，运行上面这一条命令后会开始编译源文件，等待其完成。


* **运行 Aseprite**
编译完成后，可执行文件存放在 build 文件夹中的 bin 文件夹下。
执行如下命令可运行 Aseprite。


```bash
./bin/aseprite
```


bin 文件夹中包含运行 Aseprite 的所有条件，我们把他移动到其他路径也没有关系。

<Vssue  />
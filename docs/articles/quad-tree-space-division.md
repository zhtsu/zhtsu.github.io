---
date: 2021-12-05
title: 四叉树空间划分实现
description: 使用C++实现一颗四叉树
category: C++
---

简介：{{$page.frontmatter.description}}

---

代码冗长，请结合此篇文章食用：[https://davidhsu666.com/archives/quadtree_in_2d/](https://davidhsu666.com/archives/quadtree_in_2d/)

```cpp
#include <iostream>
#include <vector>
#include <stdio.h>

struct Point {
    double x, y;
    Point() {}
    Point(double x, double y):x(x), y(y) {}
};

struct Rect {
    double left, top, right, bottom;
    Rect() {}
    Rect(double left, double top, double right, double bottom)
        :left(left), top(top), right(right), bottom(bottom) {}
};

struct Node {
    bool isLeaf;
    Rect rect;
    std::vector<Point> objects;
    Node* rightUp;
    Node* leftUp;
    Node* leftBottom;
    Node* rightBottom;
    Node():isLeaf(true), rightUp(nullptr), leftUp(nullptr),
        leftBottom(nullptr), rightBottom(nullptr) {}
    Node(double left, double top, double right, double bottom)
        :isLeaf(true), rightUp(nullptr), leftUp(nullptr),
        leftBottom(nullptr), rightBottom(nullptr) {
        rect.left = left;
        rect.top = top;
        rect.right = right;
        rect.bottom = bottom;
    }
};

class QuadTree {
public:
    QuadTree();
    QuadTree(int capacity);
    ~QuadTree();

public:
    void create(double left, double top, double right, double bottom);
    void insertPoint(double x, double y);
    // get all points whose quadrant as same as point that was given
    // that point will removed in new vector
    std::vector<Point> findPointGroup(double x, double y);
    void showPreOrder();

private:
    void release(Node* node);
    void preOrder(Node* node);
    void division(Node* node);
    void insert(Node* node, Point point);
    void removeSame(std::vector<Point>& vec, Point point);
    std::vector<Point> find(Node* node, Point point);
    int quadrant(Node* node, double x, double y);

private:
    Node* root;
    unsigned int capacity;
};

QuadTree::QuadTree():root(nullptr), capacity(4) {}

QuadTree::QuadTree(int capacity):root(nullptr) {
    this->capacity = capacity;
}

QuadTree::~QuadTree() {
    this->release(this->root);
}

void QuadTree::create(double left, double top, double right, double bottom) {
    // release the old tree before create new tree
    this->release(this->root);
    this->root = new Node(left, top, right, bottom);
    printf("QuadTree root node was created! rect: { left: %.2lf, top: %.2lf, right: %.2lf, bottom: %.2lf }\n", left, top, right, bottom);
}

void QuadTree::release(Node* node) {
    if (node == nullptr) {
        return;
    } else {
        this->release(node->rightUp);
        this->release(node->leftUp);
        this->release(node->leftBottom);
        this->release(node->rightBottom);
        delete node;
    }
}

int QuadTree::quadrant(Node* node, double x, double y) {
    int quadrant = 1;
    double left, top, right, bottom;
    left = node->rect.left;
    top = node->rect.top;
    right = node->rect.right;
    bottom = node->rect.bottom;
    if (x >= left + (right - left) / 2 && y <= top + (bottom - top) / 2) {
        quadrant = 1;
    } else if (x <= left + (right - left) / 2 && y <= top + (bottom - top) / 2) {
        quadrant = 2;
    } else if (x <= left + (right - left) / 2 && y >= top + (bottom - top) / 2) {
        quadrant = 3;
    } else if (x >= left + (right - left) / 2 && y >= top + (bottom - top) / 2) {
        quadrant = 4;
    }
    return quadrant;
}

void QuadTree::insert(Node* node, Point point) {
    if (node->objects.size() < this->capacity) {
        node->objects.push_back(point);
        return;
    }
    this->division(node);
    if (this->quadrant(node, point.x, point.y) == 1) {
        this->insert(node->rightUp, point);
    } else if (this->quadrant(node, point.x, point.y) == 2) {
        this->insert(node->leftUp, point);
    } else if (this->quadrant(node, point.x, point.y) == 3) {
        this->insert(node->leftBottom, point);
    } else if (this->quadrant(node, point.x, point.y) == 4) {
        this->insert(node->rightBottom, point);
    }
}

void QuadTree::insertPoint(double x, double y) {
    this->insert(this->root, Point(x, y));
}

void QuadTree::removeSame(std::vector<Point>& vec, Point point) {
    for (std::vector<Point>::iterator it = vec.begin(); it != vec.end(); it++) {
        if ((*it).x == point.x && (*it).y == point.y) {
            vec.erase(it);
            break;
        } 
    }
}

std::vector<Point> QuadTree::find(Node* node, Point point) {
    if (node->isLeaf) {
        std::vector<Point> pointGroup(node->objects);
        this->removeSame(pointGroup, point);
        return pointGroup;
    } else {
        for (std::vector<Point>::iterator it = node->objects.begin(); it != node->objects.end(); it++) {
            if ((*it).x == point.x && (*it).y == point.y) {
                std::vector<Point> pointGroup(node->objects);
                this->removeSame(pointGroup, point);
                return pointGroup;
            }
        }
    }
    if (this->quadrant(node, point.x, point.y) == 1) {
        return this->find(node->rightUp, point);
    } else if (this->quadrant(node, point.x, point.y) == 2) {
        return this->find(node->leftUp, point);
    } else if (this->quadrant(node, point.x, point.y) == 3) {
        return this->find(node->leftBottom, point);
    } else if (this->quadrant(node, point.x, point.y) == 4) {
        return this->find(node->rightBottom, point);
    }
    std::vector<Point> emptyGroup = {};
    return emptyGroup;
}

std::vector<Point> QuadTree::findPointGroup(double x, double y) {
    return this->find(this->root, Point(x, y));
}

void QuadTree::division(Node* node) {
    if (node->isLeaf) {
        double left, top, right, bottom;
        left = node->rect.left;
        top = node->rect.top;
        right = node->rect.right;
        bottom = node->rect.bottom;
        node->rightUp = new Node(left + (right - left) / 2, top, right, top + (bottom - top) / 2);
        node->leftUp = new Node(left, top, left + (right - left) / 2, top + (bottom - top) / 2);
        node->leftBottom = new Node(left, top + (bottom - top) / 2, left + (right - left) / 2, bottom);
        node->rightBottom = new Node(left + (right - left) / 2, top + (bottom - top) / 2, right, bottom);
        node->isLeaf = false;
    }
}

void QuadTree::preOrder(Node* node) {
    if (node == nullptr) {
        return;
    }
    std::cout << "-Node: " << node << "\t";
    printf("{ left: %.2lf, top: %.2lf, right: %.2lf, bottom: %.2lf }\n", node->rect.left, node->rect.top, node->rect.right, node->rect.bottom);
    printf("--Object: \n");
    for (unsigned int i = 0; i < node->objects.size(); i++) {
        printf("{%.2lf, %.2lf}, \n", node->objects[i].x, node->objects[i].y);
    }
    preOrder(node->rightUp);
    preOrder(node->leftUp);
    preOrder(node->leftBottom);
    preOrder(node->rightBottom);
}

void QuadTree::showPreOrder() {
    printf("PreOrder:\n");
    this->preOrder(this->root);
}

int main(int argc, char* argv[]) {
    QuadTree qt;
    qt.create(0, 0, 12, 12);
    Point pointArr[9] = {Point(1, 5), Point(7, 4), Point(2, 7), Point(10, 11), Point(4, 9), Point(5, 10), Point(3, 8), Point(2, 8), Point(4, 8)};
    for (int i = 0; i < 9; i++) {
        qt.insertPoint(pointArr[i].x, pointArr[i].y);
    }

    std::vector<Point> vec = qt.findPointGroup(1, 5);
    for (unsigned int i = 0; i < vec.size(); i++) {
        printf("x:%.2lf, y:%.2lf\n", vec[i].x, vec[i].y);
    }

    std::cin.get();
    
    return 0;
}

```



<Vssue/>

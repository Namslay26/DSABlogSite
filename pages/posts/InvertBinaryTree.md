---
title: Invert Binary Tree
date: 2023/6/27
description: Given a binary tree, invert the nodes of the tree.
tag: Trees, Recursion
author: Sneha Michelle
---
## Problem Link
[Invert a Binary Tree](https://leetcode.com/problems/invert-binary-tree/)

## Problem Statement 
![](https://assets.leetcode.com/uploads/2021/03/14/invert1-tree.jpg)
* Here's a tree, and we need to reverse/invert the elements of the tree on each level
* Check how in each level, the nodes are changed across subtrees. 
---

## Algorithm 
A main part about trees is recursions. 
We need to swap the elements of each node on each level. 
* Base case: if the root is null, return null. 
* Do a recursion for the left of root and right of root. 
* Swap the left and right of root using a temporary variable. 
* Return the root


## Code 
```java
class Solution {
    public TreeNode invertTree(TreeNode root) {
        if (root==null){
            return null;
        }
        invertTree(root.left);
        invertTree(root.right);
        TreeNode tmp = root.left;
        root.left = root.right;
        root.right = tmp;
        return root;
    }
}

```
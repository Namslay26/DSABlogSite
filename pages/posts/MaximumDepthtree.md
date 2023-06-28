---
title: Maximum Depth Of Binary Tree
date: 2023/6/27
description: Given a binary tree, find the maximum depth of the tree.
tag: Trees, Recursion
author: Sneha Michelle
---
## Problem Link
[Maximum Depth of a Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/)

## Problem Statement 
![](https://assets.leetcode.com/uploads/2020/11/26/tmp-tree.jpg)
* We need to find the maximum number of nodes involved in the largest path in this binary tree. 
* Notice how here, the largest path is from 3->20->7, therefore the longest path is 3. 
* To find the largest path, we will need to traverse through the entire tree to find it. Thus, we will be using *Depth First Search*.
* Since we need to perform the same operation on the left and right, we will do *Recursion*.  

---

## Algorithm 
* Base case: If the root is null, return 0. 
* Let the left maximum path found be: maxDepth(root.left)
* Let the right maximum path found be: maxDepth(root.right)
* Now compare both of the results using Math.max(left, right) and return the result!


## Code 
```java
class Solution {
    public int maxDepth(TreeNode root) {
        if (root==null){return 0;}

        int left = maxDepth(root.left);
        int right = maxDepth(root.right);

        return Math.max(left,right)+1;
    }
}

```
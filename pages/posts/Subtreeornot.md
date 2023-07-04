---
title: Subtree of another tree
date: 2023/6/29
description: Given a tree, check if the tree belongs to another tree. 
tag: Trees, Depth-First Search
author: Sneha Michelle
---
## Problem Link
[Subtree or not](https://leetcode.com/problems/subtree-of-another-tree/)

## Problem Statement 
* Given are two binary trees: root and subroot. We need to find if the subroot is a subtree of the root.
![](https://assets.leetcode.com/uploads/2021/04/28/subtree1-tree.jpg)
> Make sure to solve [Same Tree](https://leetcode.com/problems/same-tree/) before solving this.

---

## Algorithm 
Since we need ot go through each level of the tree, we do DFS
* Base case: if the root is null, return false (because if our root is null, we cannot find the subtree)
* If the root's value and subroot's value is the same: if they are the same tree, return true
FUNCTION isSameTree
* if both root and subroot are null -> return true
* if either one is null but not the other OR if the values are not the same -> return false
* check recursively for left and right 

## Code 
```java
class Solution {
    public boolean isSubtree(TreeNode root, TreeNode subRoot) {
        if (root==null){
            return false;
        }
        
        if (root.val==subRoot.val){
            if (isSame(root, subRoot)){
                return true;
            }
        }

        return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
        
    }

    private boolean isSame(TreeNode root, TreeNode subRoot){
        if (root==null && subRoot==null){
            return true;
        }
        else if (root==null || subRoot==null || root.val!=subRoot.val){
            return false;
        }
        if (!isSame(root.left, subRoot.left)){
            return false;
        }
        if (!isSame(root.right,subRoot.right)){
            return false;
        }

        return true;
    }
}
```
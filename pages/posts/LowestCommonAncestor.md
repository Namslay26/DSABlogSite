---
title: Lowest Common Ancestor of Binary Search Tree
date: 2023/6/30
description: Given a Binary Search Tree, find the Lowest Common Ancestor. 
tag: Trees, Depth-First Search
author: Sneha Michelle
---
## Problem Link
[Lowest Common Ancestor of Binary Search Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/)

## Problem Statement 
* We are given a binary search tree, and two nodes. We need to find the common parent node of these two nodes from the tree.
![](https://assets.leetcode.com/uploads/2018/12/14/binarysearchtree_improved.png)
* Here if the two nodes are p = 2, q = 8: the common lowest ancestor is 6 
* Here if the two nodes are p = 7, q = 9: the common lowest ancestor is 8 
* if the two nodes are p = 7, q = 6: the common lowest ancestor is 6 (6 is the root)

---

## Algorithm 
This is a **binary search tree**. It will always satisfy the rule: **left<root<right**
* First, with p and q, check if either is equal to the root: return root
* if **p.val<root.val** AND **q.val<root.val** : go into the left tree
* if **root.val<p.val** AND **root.val<q.val** : go into the right tree
* return the root if found 

## Code 
```java
class Solution {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        TreeNode curr = root;
        while (curr!=null){
            if (p.val>curr.val && q.val>curr.val){
                curr = curr.right;
            }
            else if ((p.val<curr.val && curr.val>q.val)){
                curr = curr.left; 
            }
            else{
                break;
            }
        }
        return curr;
    }
}

```
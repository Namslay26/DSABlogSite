---
title: Container with the most water.
date: 2023/6/23
description: Find the two containers that can hold the highest amount of water.
tag: Two Pointers
author: Sneha Michelle
---

## Leetcode link
[Container with the most water](https://leetcode.com/problems/longest-repeating-character-replacement/)

![](https://images.unsplash.com/photo-1522383225653-ed111181a951?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlcnJ5JTIwYmxvc3NvbXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80)

## Problem Statement 
There is an array of heights of a set of containers of water. We need to find the water containers that can hold the highest area of water. 
> Here, the output is 49 because, 7 is the minimum height, and there are 7 spaces in the x axis. 7*7=49

---

## Algorithm
- First, we define a left and a right pointer. We also define the maxresult and area variables.
- while the left pointer is less than the right pointer,
    - find the area of the left and right pointer. **(r-l)x(min(height(r,l))**
    - if greater than max then update it.
    - is the left pointer smaller? inc left.
    - else, dec right
- return the max area.

---

## Code 
```java
class Solution {
    public int maxArea(int[] height) {
       int left = 0; 
       int right = height.length-1;
       int area = 0;
       int maxarea=0;
       while (left<right){
           area = (right-left) *(Math.min(height[left],height[right]));
           maxarea = Math.max(maxarea, area);
           if (height[left]<height[right]){
               left = left+1;
           }
           else{
               right = right-1;
           }
       }

       return maxarea;
    }
}

```
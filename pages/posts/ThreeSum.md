---
title: Three Sum.
date: 2023/6/23
description: Find the three elements of the array whos sum amounts to 0.
tag: Two Pointers
author: Sneha Michelle
---

## Problem Statement 
- Input: Array of numbers
- Output: A list of lists with the 3 sums
- array of i+j+k = 0, i,j,k ≠ each other

---

## Algorithm
- Sort the array
- Keep the first element fixed
- Define left and right pointers accordingly
- Also define your sum to be negative of the first element
- While the **left<right ptr**,
    - if the sum of left and right is EQUAL to the sum, → add that to the list of lists.
        - if the next left ptr element is the same, inc left
        - if the next right ptr element is the same, dec right
    - if the sum of left and right is greater than the sum, → dec the right ptr
    - if the sum of left and right is less than the sum → inc the left pt
- return the resultant array

---

## Code 
```java
class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        Arrays.sort(nums);
        List<List<Integer>> result = new ArrayList<>();     

        for (int i=0;i<nums.length-2;i++){
            if (i==0 ||(i>0 && nums[i]!=nums[i-1])){
                int left = i+1;
                int right = nums.length-1;
                int sum = 0-nums[i];

                while(left<right){
                if (nums[left]+nums[right]==sum){
                    result.add(Arrays.asList(nums[i],nums[left],nums[right]));
                        while (left<right && nums[left]==nums[left+1]){
                            left = left+1;
                        }
                        while(right>left && nums[right]==nums[right-1]){
                            right = right - 1;
                        }
                        left++;
                        right--;
                }
                else if(nums[left]+nums[right]>sum){
                    right = right -1;
                }
                else {
                    left = left+1;
                }
            }
            }
        }

        return result;

    }
}

```
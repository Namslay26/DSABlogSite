---
title: Longest Repeating Character.
date: 2023/6/23
description: With k number of tries, check for the longest sequence of characters.
tag: Sliding Window
author: Sneha Michelle
---

## Problem Statement 
> * Input: s = "ABAB", k = 2 
> * Output: 4
> * Explanation: Replace the two 'A's with two 'B's or vice versa.


---
(need to add algorithm here...)

## Code 
```java
//get the code here
class Solution {
    public int characterReplacement(String s, int k) {
        //hashmap to count the occurences 
        int[] arr = new int[26];
        //init the left and right pointers
        int l=0; 
        int largcount=0;
        int result = 0;
        //make the sliding window
        for (int r=0;r<s.length();r++){
            arr[s.charAt(r)-'A']++;
            largcount = Math.max(largcount, arr[s.charAt(r)-'A']);
            if ((r-l+1)-largcount>k){
                arr[s.charAt(l)-'A']--;
                l++;
            }
            result = Math.max(result,r-l+1);
        }

        return result;
    }
}
```
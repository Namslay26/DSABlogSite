---
title: Permutation String
date: 2023/6/23
description: Find the permutation of a target string within the given string. 
tag: Sliding Window
author: Sneha Michelle
---

## Problem Statement 
- Two strings are given. We need to find if there exists a permutation of the second string in the first string.
- Eg: **s1: ab**, **s2: eidbaooo**. returns true because ba exists in the string.

---

## Algorithm
- Convert the string into a character array
- Sort the array
- Make it into a new string
- for **i<second string - first string**,
    - take substring ( i, i+s1.length())
    - make into character array
    - sort the array
    - make it into string
        - is this string and first string same? return true
- return false

---

## Code 
```java
class Solution {
    public boolean checkInclusion(String s1, String s2) {
    
        char[] s1temparr = s1.toCharArray();
        Arrays.sort(s1temparr);
        String sorteds1 = new String(s1temparr);

        for (int i=0;i<s2.length()-s1.length()+1;i++){
            String temp = s2.substring(i, i+s1.length());
            char[] temparray = temp.toCharArray();
            Arrays.sort(temparray);
            String sortedarr = new String(temparray);
            if (sorteds1.equals(sortedarr)){
                return true;
            }
        }

        return false;


    }
}

```
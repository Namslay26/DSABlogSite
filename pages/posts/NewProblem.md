---
title: Delete the nth node in a Linked List.
date: 2023/6/26
description: Given a nth position (counted from reverse) delete the node.
tag: Linked Lists
author: Sneha Michelle
---
## Problem Link
[Delete the nth node](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)

## Problem Statement 
![](https://assets.leetcode.com/uploads/2020/10/03/remove_ex1.jpg)
* A linked list is given, and we need to remove the nth element given. 
> Remember, n is counted from the last node!
---

## Algorithm 
Here, we follow the slow/fast pointer approach. 
* Initialise your fast and slow pointers. 
* Let's make our fast traverse all the way till n
* Once done, let's increment both our fast and slow at the same time till fast reaches null 
* WHEN it reaches null, then we do our deleting magic, 
> slow.next = slow.next.next
..and we return our head


## Code 
```java
class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
       ListNode start = new ListNode();
       start.next = head;
       ListNode fast = start; 
       ListNode slow = start;

       for (int i=1;i<=n;i++){
           fast = fast.next;
       }

       while (fast.next!=null){
           fast = fast.next;
           slow = slow.next;
       }

       slow.next = slow.next.next;

       return start.next;
    }
}

```
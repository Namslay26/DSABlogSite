---
title: Reorder a Linked List.
date: 2023/6/26
description: Reorder a Linked List's elements in an alternative fashion.
tag: Linked Lists
author: Sneha Michelle
---
## Problem Link
[Reorder List](https://leetcode.com/problems/reorder-list/)

## Problem Statement 
![](https://assets.leetcode.com/uploads/2021/03/09/reorder2-linked-list.jpg)
* A linked list is given, and we need to rearrange the elements alternatively. 
* The elements need to be arranged like, first->last->second->second last->...
> This problem was a bit difficult because in a linked list you cant traverse backwards.. so how do you do this??(Answer in 5..4..(scroll down please))
---

## Algorithm 
There are three main things that we need to do in this problem,
### Separating the two lists/finding a medium 
* This is similar to finding if a LinkedList is [palindrome or not](https://leetcode.com/problems/palindrome-linked-list/)
* Find the middle of the list and keep that list as 'second'
### Reversing the second list
* Reverse the second part of the list, this makes it easier for us to traverse through the list and retrieve the elements
* How to reverse a linked list? 
** Initialise previous, current, and temporary nodes. 
** Make previous -> null, current->current.next, previous -> current
** While current!= null => temp -> current.next//current.next->prev//prev->curent//current->temp

### Merging the two lists together alternatively
* Initialise the first pointer to the head 
* Intialise the seconds pointer to the previous
* Store first and seconds's next nodes in temporary variables
* Route the nexts of first and second
> first.next -> second
> second.next -> tmp1
* Change the first and second to the temps
> first -> temp1
> second -> temp2


## Code 
```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */

class Solution {

    public void reorderList(ListNode head) {
        
        //Find middle of list using a slow and fast pointer approach
        ListNode slow = head;
        ListNode fast = head.next;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        //Reverse the second half of the list using a tmp variable
        ListNode second = slow.next;
        ListNode prev = slow.next = null;
        while (second != null) {
            ListNode tmp = second.next;
            second.next = prev;
            prev = second;
            second = tmp;
        }

        //Re-assign the pointers to match the pattern
        ListNode first = head;
        second = prev;
        while (second != null) {
            ListNode tmp1 = first.next;
            ListNode tmp2 = second.next;
            first.next = second;
            second.next = tmp1;
            first = tmp1;
            second = tmp2;
        }
    }
}

```
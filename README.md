# Linked List

Implementation of a singly linked list class in javascript

## Features

- `append(value)` adds a new node containing `value` at the end of the list
- `prepend(value)` adds a new node containing `value` at the start of the list
- `size()` returns the total number of nodes in the list
- `head()` returns the first node in the list
- `tail()` returns the last node in the list
- `at(index)` returns the node at the given `index` or null if it doesn't exist
- `pop()` removes the last element from the list
- `contains(value)` returns true if the list contains `value`, false otherwise
- `find(value)` returns the index of the node containing `value`, or null if not found
- `toString()` returns your LinkedList objects as strings in the format: `( value ) -> ( value ) -> ( value ) -> null`
- `insertAt(value, index)` inserts a new node with the provided `value` at the given `index`, or at the end if the index is bigger than the list's size
- `removeAt(index)` removes the node at the given `index`

---
title: "Definitions of atomicity"
date: 2023-09-18 20:00:00 +0530
img:
description: The two definitions of atomicity in the world of computer science
keywords: mishal23, atomicity, programming, computer science, databases, concurrency
blog: false
---

I've always been confused between the definitions of each acronoym in ACID (atomicity, consistency, isolation, durability). Most times all of them sound too similar. I still get confused and have concluded that there are multiple definitions of atomicity as per the subject you're in.

## Atomicity in multi-threaded programming

Atomicity _here_ is the property that no other thread could see half-finished result of an operation. The system can only be in the state it was before the operation or after the operation, not something in between.

## Atomicity in DBMS

Atomicity _here_ is the property that all actions within a transaction are executed as a single unit. It ensures that a transaction is either fully completed or fully rolled back to the state it was in before the transaction began.

## Seems similar, what's the difference?

A very subtle difference. The definition of atomicity in DBMS talk about from a perspective of a transaction but in multi-threaded programming talks from a perspective of different threads. In DBMS, it's only about one transaction and doesn't talk about concurrency whereas for multi-threaded programming it is about concurrency.

In DBMS, Isolation & atomicity closesly refers to the definition of atomicity in multi-thread programming:

```
Isolation means that concurrently executing transactions are isolated from each other. It ensures that several transactions can take place simultaneously and that no data from one database should have an impact on another.
```

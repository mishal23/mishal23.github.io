---
title:  "Python Default Arguments Blunder"
date:   2021-01-09 19:30:00 +0530
img: 
description: Sharing a common Python mistake I faced related to mutuable default arguments and how to not make the same mistake
keywords: python, python3, default arguments, bugfix, mutuable default arguments, common mistakes
blog: true

---

It feels bad trying to debug a code for quite some time and then it turns out to be a very small mistake or a ~~bug~~ feature in the language. So, I thought of sharing it with all, which I feel other developers could also make unknowingly.

## Story on how I came across

I was working with a function in a class to get an available port dynamically and use the port to start a server. This piece of code would be executed parallel on multiple nodes and thus calling the class multiple times. To make things look straight forward, here's how the flow of the code looked like.

```python
import random

def get_random_port():
    return random.ranint(0, 100)

class Server:
    def __init__(self, port=get_random_port()):
        self.port = port
        print(self.port)

if __name__ == "__main__":
    server_1 = Server()
    server_2 = Server()
    server_3 = Server()
```

Everything looks correct, right? Well, not really. The server was not starting saying, "port already in use". To debug, I printed the value of the port and it was SAME every time!

I spent hours debugging the `get_random_port()` function, but everything looked fine. Even more, the `get_random_port()` function was working fine at other places. I even removed the parallelization thinking I was doing parallelization wrong, but the same problem was happening even on running it sequentially. I had lost hope and reached out to others asking for help, and turned out it was a very common mistake!

## What was wrong?

It turned out assigning the argument value in the function definition was the issue. Quoting from the [python function documentation](https://docs.python.org/3/reference/compound_stmts.html#function-definitions):

> Default parameter values are evaluated from left to right when the function definition is executed. This means that the expression is evaluated once when the function is defined and that the same “pre-computed” value is used for each call.

This means the value is evaluated only once when the function is **defined** and not when it is **called.** So the value the port argument got once from `get_random_port()`, the same was used each time and thus the error was being thrown on starting the server.

## How to fix it?

However, big the problem might sound, the solution to it is very easy and small. Use `None` as a default value to the argument and assign the value to the argument inside the function. That's it!

```python
import random

def get_random_port():
    return random.ranint(0, 100)

class Server:
    def __init__(self, port=None):
        if port is None:
            self.port = get_random_port()
            print(self.port)

if __name__ == "__main__":
    server_1 = Server()
    server_2 = Server()
    server_3 = Server()
```

Hope this helps you, and you won't have to spend a lot of time debugging your code. You should NEVER default initialize the argument in a function, unless, you know what you're doing.

## Side Notes

This is also related to [Mutable Default Arguments](https://docs.python-guide.org/writing/gotchas/#mutable-default-arguments). It's not a bad design choice for Python, it is helpful for caching and binding a local variable to the current value of an outer variable in a callback. [Read this StackOverflow thread](https://stackoverflow.com/questions/9158294/good-uses-for-mutable-function-argument-default-values) for some good uses of this.
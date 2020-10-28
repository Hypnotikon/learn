""" if 5>2:
    print("padej")
    if 5>2:
        print("dělej") """



""" x = 1j
y = 10e15
print(type(x))
print(type(y)) """


""" import random
print(random.randrange(1,10))
random.ra """

""" import matplotlib.pyplot as plt
import numpy as np

pointx = np.array([1,2,3])
pointy = np.array([1,2,7])


plt.plot(pointx,pointy)
plt.show() """

""" x = ("jahoda", "banana", "melono")
y = list(x)
y[0] = "kiwi"
x = tuple(y)
print(x)
 """



""" 
 import numpy as np

x = np.array([1,2,3,4])
print(np.__version__)
print(x)
print(type(x)) 

 """


""" import numpy as np

arr = np.array([1, 2, 3, 4], ndmin=5)

print(arr)
print('number of dimensions :', arr.ndim) """

""" import matplotlib.pyplot as plt
import numpy as np

x = np.array([1,2])
y = np.array([3,4])

plt.plot(x,y,"o")
plt.show() """

""" import matplotlib.pyplot as plt
import numpy as np

x = np.array([0, 1, 2, 3])
y = np.array([3, 8, 1, 10])

plt.subplot(2, 3, 1)
plt.plot(x,y)

x = np.array([0, 1, 2, 3])
y = np.array([10, 20, 30, 40])

plt.subplot(2, 3, 2)
plt.plot(x,y)

x = np.array([0, 1, 2, 3])
y = np.array([3, 8, 1, 10])

plt.subplot(2, 3, 3)
plt.plot(x,y)

x = np.array([0, 1, 2, 3])
y = np.array([10, 20, 30, 40])

plt.subplot(2, 3, 4)
plt.plot(x,y)

x = np.array([0, 1, 2, 3])
y = np.array([3, 8, 1, 10])

plt.subplot(2, 3, 5)
plt.plot(x,y)

x = np.array([0, 1, 2, 3])
y = np.array([10, 20, 30, 40])

plt.subplot(2, 3, 6)
plt.plot(x,y)

plt.suptitle("Graf")
plt.show() """

""" import matplotlib.pyplot as plt
import numpy as np

x = np.array(["banana", "strawberry"])
y = np.array([400, 300])
plt.bar(x,y)
plt.show() """


""" import matplotlib.pyplot as plt
import numpy as np

x = np.array(["banana", "strawberry"])
y = np.array([400, 300])
plt.barh(x,y)
plt.show() """


""" import matplotlib.pyplot as plt
import numpy as np

x = np.random.normal(170, 10, 250)

plt.hist(x)
plt.show()  """

from numpy import random
""" 
x = random.choice([1,5,3,7])
y = random.rand(3,5)
print(x)
print(y) """

""" >>> random.random()        # Random float x, 0.0 <= x < 1.0
0.37444887175646646
>>> random.uniform(1, 10)  # Random float x, 1.0 <= x < 10.0
1.1800146073117523
>>> random.randint(1, 10)  # Integer from 1 to 10, endpoints included
7
>>> random.randrange(0, 101, 2)  # Even integer from 0 to 100
26
>>> random.choice('abcdefghij')  # Choose a random element
'c'

>>> items = [1, 2, 3, 4, 5, 6, 7]
>>> random.shuffle(items)
>>> items
[7, 3, 2, 5, 6, 4, 1]

>>> random.sample([1, 2, 3, 4, 5],  3)  # Choose 3 elements
[4, 1, 5] """

""" 
from numpy import random


x =random.sample([1,2,3,4,5],3)
print(x) """


import matplotlib.pyplot as plt
import numpy as np

y = np.array([25,70,33,44])
lbl =["apples","apples","apples","apples"]
explt =  [0.1,0,0,0]
plt.pie(y,labels=lbl,explode=explt, startangle = 50)
plt.show()
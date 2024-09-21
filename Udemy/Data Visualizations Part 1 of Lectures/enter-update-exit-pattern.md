You can go ahead & read the below but i found this the most succinct explanation:
    DOM elements < data elements ( use enter() )
    DOM elements > data elements ( use exit() )
    DOM elements = data elements ( use update() )


Hi and welcome to Section 3 dealing with data in this section we will start off with the enter update
exit pattern.
We would then learn building an array as data binding object literals as data and binding functions
as data.
Later we will learn working with arrays filtering with data and sorting with data.
Lastly we would see loading data from a server and asynchronous data loading using queue.
Now we move on to the first video of this section that deals with the enter update exit pattern.
In this video we're going to take a look at the connection between data and its visual representation
which is referred to as the enter update exit pattern in D-3.
The task of matching each datum with its visual representation for example drawing a single bar for
every data point you have in your data set.
Updating the bars when the data points change and then eventually removing the bars when certain data
points no longer exist seems to be a complicated and tedious task.
This is precisely why D-3 was designed to provide an ingenious way of simplifying the implementation
of this task.
This way of defining the connection between data and its visual representation is usually referred to
as the enter update exit pattern in D-3.
The pattern is profoundly different from the typical imperative method.
Most developers are familiar with.
First let's take a look at the conceptual illustration of the two domains here.
The two circles represent two joined sets.
Set a depicts your data set whereas set B represents the visual elements.
This is essentially how D-3 sees the connection between your data and visual elements.
You might be asking how set theory will help your data visualization ever hear.
Let me explain.
First consider the question How can I find all visual elements that currently represent their corresponding
data point.
The answer is a intersection B.
This denotes the intersection of sets A and B.
The elements that exist in both data and visual domains.
The shaded area represents the intersection between the two sets A and B in d 3.
The selection data function can be used to select this intersection.
The selection of data function upon selection sets up the connection between the Data Domain and visual
domain.
The initial selection forms the visual set B whereas the data provided in the data function from dataset
A.
The return result of this function is a new selection of data bound selection of all elements existing
in this intersection.
Now you can invoke the modifier function on this new selection to update all the existing elements.
This mode of selection is usually referred to as the update mode.
The second question we all need to answer here is how can I target data points that have not yet been
visualized.
The answer is the set difference of A and B denoted as a upon B which can be seen visually through this
illustration.
The shaded area inset A represents the data points that have not yet been visualized in order to gain
access to this a upon B subset.
These functions need to be performed on a data bound D3 selection.
The selection of data enter a function returns a new selection representing the A upon B subset which
contains all the pieces of data that has not yet been represented in the visual domain.
The regular modifier function can then be changed to this new selection method to create new visual
elements that represent the given data elements.
This mode of selection is simply referred to as the enter mode the third case in our discussion covers
the visual elements that exist in our dataset but no longer have any corresponding data element associated
with them.
You might ask how this kind of visual element can exist in the first place.
This is usually caused by removing the elements from the dataset.
That is if you initially visualized all data points within your dataset and remove some data points
after that.
Now you have certain visual elements that are no longer representing any valid data point in your data
set.
This subset can be discovered using an inverse of the update difference denoted as B upon a.
The shaded area represents the difference we just discussed the subset can be selected using the Selection
and exit function on a data bound selection.
The selection of data exit function when invoked on a data bound D-3 selection computes a new selection
which contains all visual elements that are no longer associated with any valid data element as a valid
D-3 selection object.
The modifier function can then be changed to the selection to update and remove these visual elements
that are no longer required as part of our of his lies zation this mode of selection is called the exit
mode.
Together the three different selection modes cover all possible cases of interaction between the data
and its visual domain.
Additionally D-3 also offers a Forth selection mode that is very handy when you need to avoid duplicating
visualization code or the so-called dry up your code.
This fourth mode is called merge mode.
It can be invoked using the Selection merge function.
This function merges the given selection passed to the merge function with the selection where the function
is invoked and returns a new selection that is a union of both in the enter update exit pattern the
merge function is commonly used to construct a selection that covers both the enter and update modes.
Since that's where most code duplications would otherwise live.
The shaded area in this illustration shows the data points targeted by merge mode that combines both
enter and update modes which is essentially the entire set.
This is very convenient since now a single change of modifiers can be utilized to style both modes and
thus lead to less code duplications.
Cool.
So that's all about the enter update exit pattern.
We have learned that is the cornerstone of any D-3 driven visualization in the next video we'll see
binding an array as data.

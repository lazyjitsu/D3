We're going to take a look at visualization that reflects changes immediately when the data array gets

updated.

One of the most common and popular ways to define data in D-3 visualization is through the use of javascript

arrays when the data array gets updated.

You would want your visualization to reflect such changes immediately.

Let's see how it's done.

Open your local copy of the file in your web browser.

The first and most natural solution that might come to mind is iterating through the data array elements

and generating their corresponding visual elements on the page.

This is definitely a valid solution and it will work with D-3.

However the enter update exit pattern we discussed in the introduction provides a much easier and more

efficient way to generate visual elements.

Take a look at how we can do that.

The code generates this visual output.

In this example data a list of integers in this case is stored in a simple javascript array as shown

on the line.

A The render function is defined on the line marked as B so that it can be repeatedly invoked to update

our visualisation.

The selection starts on the line marked as c which selects all div elements on the web page with the

H-bombs CSSA class by issuing the selection that we made in the previous line.

We essentially declare that there should be a set of the div Dom h bar elements on the web page to form

our visual set on the line marked as D.

We invoke the data function on its initial selection to bind the array as our data set to be created.

Visual elements.

Once the two sets are defined the enter function on line E can be used to select all pieces of data

elements that are not yet visualized when the render function is invoked for the very first time.

It returns all elements in the data array online.

F a new div element is created and appended to the body element of each data element selected in the

enter function.

This essentially creates one div element for each datum.

Finally line g we said it's CSSA class to h bar.

At this point we basically created the skeleton of our visualisation including the empty div elements

is to change the visual attributes of our elements based on the given data.

D-3 injects a property to the D.O. an element named data to make data sticky with visual elements.

So when selections are made using a modified dataset D-3 can compute the difference and intersection

correctly.

You can see this property easily if you inspect the DOMA element either visually using a debugger or

programmatically in this code snippet online age.

The merge function is invoked with the selection as its parameter.

This function call essentially merges the enter selection with the update selection and returns the

union of both selections thus allowing us to change modifiers for both enter and update scenarios without

the merge function.

We would need to repeat the code here for both enter and update scenarios then on line.

We applied a dynamic style attribute with to be three times the interger value associated with each

visual element as shown in the code.

All D-3 modifier functions except this type of dynamic function to compute its value on the fly.

This is precisely what it means to day to drive your visualization.

Hence it is crucial to understand what this function is designed to achieve in our example.

This function receives a parameter D which is the datum associated with the current element in our example.

The first div bar has the value 10 associated as its datum.

The second bar has 15 and so on.

Therefore this function essentially computes a numeric value that is three times the date him for each

bar and returns it as the elements with N pixels while on line J.

We use a similar approach to change the text content of the div element to the data value associated

with each element.

This is the raw HVM l code that resulted from this update process.

The last section exit section is fairly simple.

The selection returned by the exit function is just like any other selection.

Therefore although we move is the most common action used against the exit selection.

You can also apply other modifiers or transitions to this selection on line k in the code.

The exit function is called to compute the set difference of all visual elements that are no longer

associated with any data.

Finally the remove function is called on this selection to remove all the elements selected by the exit

function.

This way as long as you call the render function after you change our data you can always ensure that

our visual representation and data are kept synchronized moving on to the last block of code online

L A simple anonymous function was created to remove the top element in the data array using the shift

function while appending a random integer to the data array using the push function.

Every one point five seconds once the data array is updated the render function is called again to update

our visualization to keep it synchronized with the new data set.

This is what gives our example.

It's animated bar chart look which can be seen here.

So in this video we have learned by adding an array as data.

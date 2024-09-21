Right we now start with the next video.

How does D-3 work in the last video we looked at the basic hedged here template at this point you should

have a working environment.

So in this video let's start by looking at some code and see if we can get D-3 up and running these

three is most often used to create a Manipulate as Viji elements using a data driven approach.

The first thing we need to do is create a G element inside the root as Viji element we defined in our

heads TMLC skeleton earlier this is the code we have to add and this code fragment we see the first

usage of the D-3 API we use D-3 select to search for the first element with the class chart.

This will find the Viji element we defined in our hedged here our template and this will allow us to

modify that element D-3 uses a W3 see selectors API string to select elements.

Summarizing This means that you can use the same kind of select the strings that are also used in C

Ss to select specific elements.

Doc class name selects the elements that have a class with the name class name Dart's alum name.

Select the elements of type Elham name Hash ID selects the element that has an attribute ID with the

value ID doc class.

Name one doc class named to select all elements with the class name to which a descendant from the element

with class named one.

Now that we have the SVGA elements we use the tsetse function to set its width and height leaving a

better margin at all sides.

Finally we add the G element using the append function and position that element.

Taking into account the margins we defined by setting the transform attribute theory has a fluent API

which means we can just change commands and functions together.

This also means that the results of the final operation is assigned to the chart variable.

So in this case the job variable is the G element we appended to the SVGA element the G element is just

the container in which you can add other elements.

The most useful part of the element is that all of the transformations apply to this element are also

applied to the children.

Additionally all the attributes defined on this element are inherited by its children.

This is a good point to explain the transform attribute we use to position the G element inside the

SVGA element the transform attribute allows a couple of operations.

We can use to change the position and rotation of any SVGA elements.

It's the standard way to position SPG elements This table shows what can be done with the transform

attribute.

If you've looked at it's in your browser

you wouldn't really see anything yet.

The reason is that we didn't specify a background color for the s v G or G element.

So the default background color is used.

We can however check what has happened.

I've mentioned earlier that I'm using Chrome besides creating code we also do a lot of debugging inside

the browser and Chrome has some of the best support.

If you open the previous code in your browser you can already see what is happening when you inspect

the elements.

As you can see the correct attributes are being set on the SVGA element a G elements is added and the

G element is transformed to position it correctly if we want to style the SVGA element we can use standard

C S S for this.

For instance if we have this code to the CSSA file for this example

it will set the background color attribute of the SVGA element to black when we now open the example

in the browser you'll see the SVGA element as a black rectangle.

At this point we've got an SVT element with a specific size and 1G element too which will add other

elements.

Let's start by adding rectangles to the group element we'll create an example that shows a number of

rectangles based on some random data will update the data every couple of seconds and see how we can

use these three to respond to these changes.

I'll first show you the complete code and then steps through the different parts remove the SVGA see

SS We added and then the javascript files creating G elements

of this code.

Our focus is on the update function

when this function is called.

It will take a couple of steps.

The first thing it does is that it creates some dummy data.

This is the data of the term and how many rectangles to render and how large the rectangles will be.

This is just plain javascript and this will result in the data array being filled with one to seven

numeric values ranging from 50 to 100.

The next step is assigning this data to a D-3 selection.

We do this by using the select all function on the chart variable we defined earlier this call will

select all the rectangles which are already appended as children to the chart variable to differentiate

between newly added rectangles and rectangles which will reuse.

We add a specific CSSA class and correct width and height properties.

Since the bound data has changed is the code to do that to set the CSSA we use the TTR function to set

the class property which points to a style to find the now a C Ss file the weights and height properties

are set in the same manner but their value is based on the value of the past data.

You can do this by setting the value of that attribute to a function D the D which is passed into this

function is the value the corresponding element from the bound data array.

So the first rectangle which is found is bound to data 0.

The second to date are 1.

And so on we set both the width and the height of the rectangle to the same value the CSSA for this

class is very simple.

And make sure that the newly added rectangles are filled with a nice blue color

see these other various rectangles notes that they update as data is updated.

Moving on to adding new rectangles if needed.

At this point we've only updated the style and dimensions of the rectangles which are updated.

We repeat pretty much the same process for the right Tango's that needs to be created.

This happened when our data array is larger than the number of rectangles we can find.

Take a look at this highlighted code.

Notice that different from the update cell.

But this time we first call the end to function and then creates the SVGA element.

We want to add like this append.

Right after the append call we can figure out the rectangle and set its class width and height properties

just like we did earlier this time the C Ss will render the newly added rectangle in green.

If you look at the code you can see that we also set the position of this element by setting the x and

y attributes of the added rectangle.

This is needed since this is the first time this rectangle is added and we need to determine where to

position it.

We fixed the y position to 50 but need to make the x position dependent on the position of the element

from the data array to which it is bound.

We once again bind the attribute to a function.

This time we specify a function with two arguments D and I d is the element from the data array and

is the position in the data array.

So the first element has equals to zero the second equal to 1 and so on.

Now when we add a new rectangle we calculate its x position.

But just multiplying its a right position with the maximum rectangle width and at a couple of pixels

margin.

This way none of our rectangles will overlap.

If you compare this code for adding new elements and updating existing ones you might notice some duplicate

code in both instances.

We use a t t r to set the width and the height properties.

If we wanted to we could remove these duplications by using that dot merge function.

The code to set the new width and height for the new elements and the updated ones would then look like

this.

This means that after merging the new and updated elements together on that combined set we used the

80 TR function to set the width and the Heights property.

Personally I'd like to keep these steps separate since it is clear what happens in each of the steps.

Now the final step we need to take is to remove rectangles that aren't needed anymore.

If in the first call to updates we add five rectangles and then the next call only 3 is needed.

We're stuck with two leftover ones.

D-3 also has an elegant mechanism to deal with that.

Take a look at this line of code.

The code to exit function will select the elements for which no data is available.

We can then remove them by calling remove function but we could also change their capacity to make them

look transparent.

All animate them to slowly disappear for instance if we change this bit of code

and then set the C Ss for the removed class

we'd see this.

So we've reduced to existing rectangles and instead of removing the ones we don't need we change their

style to the remove class which renders them semitransparent red.

Cool isn't it.

We've got D-3 up and running in the next video.

We will visualize our first data.

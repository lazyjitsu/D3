visualization project hash tag foo (e.g. #foo) selects elements with foo as the value of ID foo selects element
<div id="foo">
foo selects element foo
<foo>

dot foo selects elements whose class is foo
<div class="foo">

foo goo selects the goo element inside the foo element
<foo><goo></foo>
foo hash tag goo selects the foo element with goo as its class value
<foo class="goo">

foo dot goo selects foo with id goo
<foo id="goo">

Foo first child selects the first child of the foo elements.
<foo classs="goo">
<foo> //  <-- this one
<foo>
<foo>

Foo N-th child selects the nth child of the few elements n is one based.

Starting at 1 for the first child
foo:nth-child(n)

<foo>
<foo> // <-- foo:nth-child(2)

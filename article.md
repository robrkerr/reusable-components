# Really reusable components, styles and all!

As articulated in the [React documentation](https://facebook.github.io/react/docs/react-component.html): “Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.” This way of breaking up a UI has made it much easier to develop more complex and more maintainable web applications (and potentially even to [design them](https://medium.com/@lewisplushumphreys/how-were-using-component-based-design-5f9e3176babb)). We're starting to think in terms of encapsulated modules that have an inside (their implementation) and an outside (their interface). 

[Styled-components](https://github.com/styled-components/styled-components) [lends itself to this way of thinking](https://www.smashingmagazine.com/2017/01/styled-components-enforcing-best-practices-component-based-systems/) and allows you to write CSS explicitly for components. Previously, CSS wasn’t even thought of belonging to components but just to the page as a whole. But while it encourages the right approach, styled-components doesn’t enforce that you are appropriately isolating your component and provided a clear interface between it and the rest of your code.

## Making your own React UI library

> “What I cannot create, I do not understand” — Richard Feynman

...Something about why I did this and how I think it's a good practise to get into...

## The interface between parents and children



[More details](notes/parent-child.md)

## Customizing and reusing




----


After some time using styled-components within [create-react-app](https://github.com/facebookincubator/create-react-app) and it’s gotten me thinking about why it’s still so hard to share/publish our visual components and the CSS we use to create them. As far as I can see, this is one of the hardest and most important problems in front-end web development and one for which no satifying solution has been yet devised — and we’ve been working on it for a long time!

…styled-components theme adaptors… discuss how I got to be thinking about this and set the scene for the issues I became aware of…
So what would is needed for a visual component to be sharable/reusable?
I’ve decided that there are really only two requirements: it must be “contained” but also “customizable”. 


---

For a long time, the problem was that CSS was always global — it could only be contained by namespacing classnames. Styled-components (and to a lesser extent other libraries) have solved this by …

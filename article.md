# Really reusable components, styles and all!

As articulated in the [React documentation](https://facebook.github.io/react/docs/react-component.html): "Components let you split the UI into independent, reusable pieces, and think about each piece in isolation." This way of breaking up a UI has made it much easier to develop more complex and more maintainable web applications (and potentially even to [design them](https://medium.com/@lewisplushumphreys/how-were-using-component-based-design-5f9e3176babb)). We're starting to think in terms of encapsulated modules that have an inside (their implementation) and an outside (their interface). 

[Styled-components](https://github.com/styled-components/styled-components) [lends itself to this way of thinking](https://www.smashingmagazine.com/2017/01/styled-components-enforcing-best-practices-component-based-systems/) and allows you to write CSS explicitly for components. Previously, CSS wasn’t even thought of belonging to components but just to the page as a whole. But while it encourages the right approach, styled-components doesn't enforce that you are providing a clear interface between your components and those that they contain or are contained by. A "styled-component" is not an automatically shareable, reusable, and customisable component.  

## Making your own React UI library

> “What I cannot create, I do not understand” — Richard Feynman

I wanted to explore what was required to make a component, a *visual* component, shareable, resuable, and customisable. I decided that the only way to properly explore this was to start building web pages with the constraint that all of the components should be written in a completely reusable way and actually reused between pages with were completely different visually. Hopefully this would bring out to attention patterns and practises that worked against the goal of reusability and those that promoted it. Maybe this would be too constraining or maybe it would become apparent that all web pages should be built in this way. Either way I thought it would give me a new perspective toward styling components. 

Before too long, I realised I was actually building up a component library that I was sharing between my different example pages. This forced me to properly survey what existing component libraries there were out there (at least for React). Here are some of the ones I found:
- Material UI: http://www.material-ui.com/
- Grommet: https://grommet.github.io/
- Semantic UI React: http://react.semantic-ui.com/introduction

I noticed a number of things when I looked at these libraries:
- Their components often had specific children or parent components that they were designed to work with
- The styles of components could be changed through two means: their props or a theme provider
- It's difficult naming all the different components that get used in web pages


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

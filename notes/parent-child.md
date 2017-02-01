
## Responsibility divide between parents and children

In creating visual UI components that are reusable and sharable it is important that
they are responsible for all the styles they should be and nothing they shouldn't be.
In order to work with components from other libraries, this is a really important interface (from a styling point of view, it is **the** interface) between the
components. Given this, here are my thoughts of where the styling responsibilities
should reside.

### Parents should layout their children
This includes styles such as:
- `flex-direction`
- `flex-wrap`
- `align-content`
- `justify-content` (and other flex parent things)

### Parents should also control all the 'outer' styles of the children
This is be using a direct descendant selector (`>`) and would include styles such as:
- `margin`
- `width` / `height` (size of child)
- `flex-grow` / `flex-shrink` (and other flex child things)
- `z-index`
- `box-shadow` (related to z position)
- `transform` (scale, translate, and rotation)
- `top`, `left`, `right`, `bottom` (positioning)

### Children should manage everything internal to the component
This includes styles such as:
- `padding`
- `background` / `background-color` / `color`
- font things (`font-family`, `font-size`, `font-weight`, etc.)
- `cursor`
- `border`
- `overflow`

### Comments:
- Parent should control the outer size of a child while the child should
  control its own padding. This really relies on `box-sizing: border-box` to
  avoid this being quite complicated.

### Exceptions:
- Passing in 'content only' children to a component. Here you want the parent
  to be in control of everything. Using a `data-style-me="title"` attribute:
  ```css
  .classname > *[data-style-me="title"] {
    font-size: 1.2em;
    font-weight: 500;
  }
  ```
  An example of this would be for a header to contain a heading and also a few
  links and while these pieces of text (spans for example) which don't justify
  their own components. Instead each span could be passing in as a child with a
  `data-style-me` attribute and styled accordingly with their order being
  preserved (or partially preserved).

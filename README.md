# Topography CSS

This is a CSS library inspired by experience developing front-ends, the way flex-box and css variables changed the way I develop and the way different libraries I have worked with impacted me.

## Who this is for?

If you are the type of developer that:
- builds frontends with a composition of flexboxes
- favors composition over inheritance
- wants something super-light that stays out of you way and wont look like every other app made with it
- wants something to ease the process or help prototype (like a non-stick pan vs normal pan being doing the css your self)
- enjoys utility classes to help you quickly move stuff around and space it how you want
- wants dark and light themes powered by css variables

## What is it?

A set of tools to help you build out front ends with less friction.

inspired by:
- Skeleton css
- atomic design

## What does it do?

It is created to just let you slap on all of the libraries modifiers in the way you want and have it behave the way you want.

For Example if you have a button `<button></button>`:
1. declare it as an input type: `<button class="input"></button>`
2. say you want to make it squircle: `<button class="input semi-rounded"></button>`
3. now you want it to appear to lift some when hovered/selected: `<button class="input semi-rounded float-2"></button>`
3. now you want it to stand out more so you use your accent color for the button: `<button class="input semi-rounded float-2 accent"></button>`

The idea here is you just keep tacking on the tools the library gives you to make everything look the way you want and it behaves how you expect it.


## Design Decisions

Every library and or framework is a balance act between ease of use/speed and customizability/flexibility. In this case CSS itself is the extreme end of flexibility and ease of use speed would be a prescriptive framework such as bootstrap. You are generally trading speed for customizability/flexibility, there is a reason bootstrap sites have a distinct 'look', but its a great library for moving fast and having a solid looking product. 

This library attempts to take an organic balance between speed and flexibility, while leaning heavily to the flexibiliy side. It is based largely on the way I develop using flexbox's and css variables and is something i have made to prototype sites/projects quickly.

## API/Documentation/Tools

### The basics

There are two key concepts in this library:
- **input**: something the user will input into, i.e. a text input or a button
- **element**: a div that is tangible and not just for styling, this will be like a card holding text or anything that needs styling inherited

There are 3 main theme concepts in this library:
- **light**: a light theme
- **dark**: a dark mode theme
- **accent**: a chosen accent color to make certain things pop

Within a given theme there are a few style options:
- **element**: a standard surface
- **contrast**: a contrasting surface
- **outline**: a surface that has the same color as the background but with an outline

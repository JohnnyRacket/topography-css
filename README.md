# Topography CSS

A lightweight css library the relies on composing modifiers to quickly build a good looking front end.



## Gettings Started
Using NPM:

```console
npm install topography-css
```

```js
// index.js
import 'topography-css';
...
```

or using just the css file:

clone/copy from github in `/dist/topography.css`


## API/Documentation/Tools

Find the docs (built using topography) here: [**Documentation**](https://johnnyracket.github.io/topography-css/)



## Who this is for?

If you are the type of developer that:
- builds frontends with a composition of flexboxes
- wants something super-light that stays out of you way
- enjoys utility classes to help you quickly move stuff around and space it how you want
- wants dark and light themes powered by css variables that you can easily change the colors of

## What is it?

A set of tools to help you build out front ends with less friction.

inspired by:
- Skeleton css
- atomic design
- the brevity of css that css variables allows

## What does it do?

It is created to just let you slap on modifiers as you are building a layout in order to make everything look like you want.

For Example if you have a button `<button></button>`:
1. declare it as an input type for basic input styling: `<button class="input"></button>`
2. say you want to make it squircle: `<button class="input semi-rounded"></button>`
3. now you want it to appear to lift some when hovered/selected: `<button class="input semi-rounded float-2"></button>`
3. now you want it to stand out more so you use your accent color for the button: `<button class="input semi-rounded float-2 accent"></button>`

The idea here is you just keep tacking on the tools the library gives you to make everything look the way you want and it behaves how you expect it.

Thre is not a modifier/helper for every single thing, because my opinion is some of the more rare use-cases should just be in-lined as it is near equivalent time cost.
This library hopes to find a good balance, but I am still exploring what should and should not be a helper.


## Design Decisions

Every library and or framework is a balance act between ease of use/speed and customizability/flexibility. In this case raw CSS is the extreme end of flexibility and ease of use speed would be a prescriptive framework such as bootstrap. You are generally trading speed for customizability/flexibility, there is a reason bootstrap sites have a distinct 'look'. This is not to disparage bootstrap (a great framework), but to help give an idea where this falls.

This library attempts to take an organic balance between speed and flexibility, while leaning heavily to the flexibiliy side. It is based largely on the way I develop using flexbox's and is something I have made to prototype sites/projects quickly.


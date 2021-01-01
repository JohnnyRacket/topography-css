# Topography CSS

This is a CSS library inspired by experience developing front-ends, the way flex-box and css variables changed the way I develop and the way different libraries I have worked with impacted me.

## Who this is for?

If you are the type of developer that:
- builds frontends with a composition of flexboxes (its literally close to all I use these days)
- favors composition over inheritance
- wants something super-light that stays out of you way and wont look like every other app made with it
- wants to /mostly/ build something themselves and just wants something to ease the process or help prototype
- enjoys little utility classes to help you quickly move stuff around and space it how you want
- enjoys easy switching between dark and light themes by the power of css variables

## What is it?

A composition css framework inspired largely by:
- Skeleton css
- Brad frost atomic css

## What does it do?

It is created to just let you slap on all of the css classes you want to modify each object in the way you want and have it behave the way you want.

For Example if you have a button `<button></button>`:
1. declare it as an input type: `<button class="input"></button>`
2. say you want to make it squircle: `<button class="input semi-rounded"></button>`
3. now you want it to appear to lift some when hovered/selected: `<button class="input semi-rounded float-2"></button>`
3. now you want it to stand out more so you use your accent color for the button: `<button class="input semi-rounded float-2 accent"></button>`

The idea here is you just keep tacking on the tools the library gives you to make everything look the way you want and it behaves how you expect it.

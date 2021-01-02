# Topography CSS

A lightweight css library the relies on composing modifiers to quickly build a good looking front end.

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

It is created to just let you slap on modifiers as you are building a layout in order to make everything look like you want.

For Example if you have a button `<button></button>`:
1. declare it as an input type: `<button class="input"></button>`
2. say you want to make it squircle: `<button class="input semi-rounded"></button>`
3. now you want it to appear to lift some when hovered/selected: `<button class="input semi-rounded float-2"></button>`
3. now you want it to stand out more so you use your accent color for the button: `<button class="input semi-rounded float-2 accent"></button>`

The idea here is you just keep tacking on the tools the library gives you to make everything look the way you want and it behaves how you expect it.

Thre is not a modifier/helper for every single thing, because my opinion is some of the more rare use-cases should just be in-lined as it is near equivalent time cost.
This library hopes to find a good balance, but I am still exploring what should and should not be a helper.


## Design Decisions

Every library and or framework is a balance act between ease of use/speed and customizability/flexibility. In this case CSS itself is the extreme end of flexibility and ease of use speed would be a prescriptive framework such as bootstrap. You are generally trading speed for customizability/flexibility, there is a reason bootstrap sites have a distinct 'look', but its a great library for moving fast and having a solid looking product. 

This library attempts to take an organic balance between speed and flexibility, while leaning heavily to the flexibiliy side. It is based largely on the way I develop using flexbox's and is something i have made to prototype sites/projects quickly.

## API/Documentation/Tools

### The basics

#### There are 3 key concepts in this library:
| Class      | Description |
| ----------- | ----------- |
| **background** | the background color/surface |
| **input** | something the user will input into, i.e. a text input or a button |
| **element** | a div that is tangible (i.e. visually shows on screen), this will be like a card holding text or anything that needs styling  inherited |

#### There are 3 main theme concepts in this library:
| Class      | Description |
| ----------- | ----------- |
| **light** | a light theme |
| **dark** | a dark mode theme |
| **accent** | a chosen accent color to make certain things pop, honestly more a modifier than a theme, but it is changable via css vars like a theme |

### Modifiers

#### Within a given theme there are a few base style modifiers:

| Class      | Description |
| ----------- | ----------- |
| **accent**| modifier to make something pop by using color |
| **contrast**| a high sontrast surface |
| **outline**| a surface that has the same color as the background but with an outline to denote it |
| **link**| no surface, but bold text that will brighten/contrast when hovered |

#### Elevation modifiers (drop shadow):

| Class      | Description |
| ----------- | ----------- |
| **elevation-0** | no drop shadow |
| **elevation-1** | smallest drop shadow, gives the illusion of being right on top of the surface its on |
| **elevation-2** | medium drop shadow, more elevated looking |
| **elevation-3** | medium drop shadow, even more elevated looking |
| **elevation-4** | largest, but also lightest, gives illusion of being far off the surface its on |

#### Elevation modifier on hover (hence the verb float):

| Class      | Description |
| ----------- | ----------- |
| **float-0** | no drop shadow when hoveered |
| **float-1** | smallest drop shadow, gives the illusion of being right on top of the surface its on when hovered |
| **float-2** | medium drop shadow, more elevated looking when hovered |
| **float-3** | medium drop shadow, even more elevated looking when hovered |
| **float-4** | largest, but also lightest, gives illusion of being far off the surface its on when hovered |

A common way to combine the above is to have an element have a low/no elevation and a higher float

#### Interaction modifiers:

| Class      | Description |
| ----------- | ----------- |
| **highlight** | highlights the element on hover and makes cursor a pointer ot show it is interactable |

#### Shape modifiers (by default everything is square):

| Class      | Description |
| ----------- | ----------- |
| **square** | default, but included class for resetting, or changing via js |
| **semi-rounded** | rounded corners |
| **rounded** | pill-like shape |
| **round** | round, as in a circle, as long as your height and width are set the same |

#### Size modifiers (this affects text size, so it will change the size of inputs/buttons/things that contain text):

| Class      | Description |
| ----------- | ----------- |
| **small** |
| **medium** |
| **large** |

### Helpers
these are classes that are just shorhand utiliy classes for styling

#### Flex helpers (allowing you to build flex layouts faster using classes):

| Class      | Description |
| ----------- | ----------- |
| **flex** |    display: flex; |
| **column** | flex-direction: column; |
| **row** | flex-direction: row; |
| **align-center** | align-Items: center; |
| **justify-center** | justify-content: center; |
| **flex-center** | align-items: center;justify-content: center; |
| **flex-wrap** | flex-wrap: wrap; |
| **flex-fill** | flex: 1; |

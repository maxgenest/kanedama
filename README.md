## Introduction

This project has been created by Maxime Genestier

## Design Choices

I split the components into 2 kinds :

- \_layouts : those components will be used to set the layout of other components. I use them when I have repeating style.
- other : each component should be independant of others

I set a theme.tsx file in order to avoid raw sizes and style in components like spacins, colors, fonts, etc.

## Approach

I decided to build this page row per row, and to build layouts components when I saw repeating patterns.

## Improvements and Next Steps

- use the picture in User Component instead of the initials
- add tests
- use "Assistant" font instead of png for the logo

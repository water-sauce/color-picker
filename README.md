# Color Picker UX Engineer Challenge

The purpose of this challenge is to evaluate your front end technical skills. This challenge should take you no longer than an hour or two to complete.

Screen Shot:
![Color Picker](https://raw.githubusercontent.com/hoverinc/ux-engineer-test/master/ScreenShot.png)

Demo:
https://raw.githubusercontent.com/hoverinc/ux-engineer-test/master/Demo.mov

## The Challenge
HOVER is in need of a color picker for our web apps. In this repository you will find a screenshot and a short demo video that you can use as a reference.

We would like for the Color Picker to be customizable and the components API should be well thought out. For instance, we would want the option of supplying our own Title Component instead of a string for the title (we might also want to supply our own Color Swatch Components).

You will not be given any detailed design specs. Part of this challenge is to test your design eye. Try to get as pixel perfect as you can. What we can tell you is that all margins and spacing are `base 4`.

### Boiler Plate
This challenge utilizes [`react`](https://reactjs.org/) and [`styled-components`](https://www.styled-components.com) as that is what we use at HOVER. Please take some time to understand `styled-components` if you can, if time doesn't permit, feel free to use whatever styling library you would like (less, sass, plain css, etc).

We have included the [`randomcolor`](https://github.com/davidmerfield/randomColor) library to easily generate colors.

The boiler plate is the output of `create-react-app` and you may start it with `npm start` or `yarn start`

### Animations
From the demo you can see the color swatches animate in a staggered spring-like fashion. Try to achieve this effect the best you can. There are plenty of spring and physics-based animation libraries out there. Feel free to use whatever you would like. We are investigating `react-pose` internally at HOVER so you might want to start there.


### Testing
Please write some tests (preferably in `jest` / `enzyme`) for the Color Picker component. Make sure you cover edge cases (what happens if we give weird data to the props)?

### Developer Experience
As a component library author you should try to help users of your library when things don't go as planned.

For instance, given a component such as:
jsx```
<NumberDisplay number={123} />
```

If a developer accidentally provides a non number value to the number prop:

jsx```
<NumberDisplay number={{ oops: 'abc' }} />
```

instead of failing or crashing, we should give a warning such as: "Only numbers are allowed to be passed to prop 'number' of NumberDisplay"

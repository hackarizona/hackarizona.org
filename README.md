# The official website of Hack Arizona 2019-2020

Hack Arizona is a student run hackathon hosted at the University of Arizona. 

Our goal is to foster a world class hacker culture in the Southwest.

## Attendance statistics

- 2015: 400+
- 2016: 650+
- 2017: 850+
- 2018: 950+
- 2019: 900+
- 2020 Estimation 1000

## Acknowledgments

This website was built using a [GatsbyJS](https://www.gatsbyjs.org/) [starter template](https://github.com/LeKoArts/gatsby-starter-portfolio-cara) built by [@LeKoArts](https://github.com/LeKoArts), which is [MIT licensed](https://github.com/LeKoArts/gatsby-starter-portfolio-cara/blob/master/LICENSE)

This starter template was based on [gatsby-tailwind-demo](https://github.com/jlengstorf/gatsby-tailwind-demo)

## Technologies used

- [GatsbyJS](https://www.gatsbyjs.org/) v2.5.9
- [React Spring](https://github.com/drcmda/react-spring) (Used for Parallax effect)
- [TailwindCSS](https://tailwindcss.com/) & [Emotion](https://emotion.sh/) for styling
    - Use the full power of TailwindCSS while generating small styles (as unused data gets deleted)

### Getting Started / Contributing

To help work on this website, please clone this repository, create a branch, and submit a pull request detailing your changes and why they are helpful. We encourage anyone to help contribute to make our website as great as possible! 

A more detailed contributors guide will *hopefully* be completed soon (10/5/18).

Check your development environment! You'll need [Node.js](https://nodejs.org/en/), the [Gatsby CLI](https://www.gatsbyjs.org/docs/) and [node-gyp](https://github.com/nodejs/node-gyp#installation) installed. The official Gatsby website also lists two articles regarding this topic:
- [Gatsby on Windows](https://www.gatsbyjs.org/docs/gatsby-on-windows/)
- [Check your development environment](https://www.gatsbyjs.org/tutorial/part-zero/)

To install all dependencies use the command:

```
npm install
```

### Running in development

```
gatsby develop
```

### Building the site for production (in your own projects)

Note: to deploy to hackarizona.org, submit a pull request to this repository. 

The rest of the notes are if you want to use the template that was used to make this website:

```
npm run build
```
Copy the content of the ``public`` folder to your webhost or use a continuous deployment service, like Netlify which automates that for you.

Make sure to use the right build command in your build settings e.g. if you use Netlify!
Per default Netlify sets it to `gatsby build` but you have to use `yarn run build` to run postcss before building the Gatsby site.

### Configuration / Settings

You have multiple options to configure this project.

1) Use the `tailwind.js` file to configure TailwindCSS. Their [documentation](https://tailwindcss.com/docs/configuration) explains it step-by-setp.

2) Modify the files in the `src/styles` directory.

3) You can also place the icons somewhere else on the page, modify their animation and hide them on smaller screens:

```JSX
  <SVG icon="triangle" className={hidden} width={48} stroke={colors.orange} left="10%" top="20%" />
  <SVG icon="hexa" width={48} stroke={colors.red} left="60%" top="70%" />
  <SVG icon="box" width={6} fill={colors['grey-darker']} left="60%" top="15%" />
```

- For `icon` you have the options: `triangle, circle, arrowUp, upDown, box, hexa`
- If you want the SVG to be hidden on mobile view, add the `className={hidden}`
- You can define the width via the TailwindCSS width [option](https://tailwindcss.com/docs/width)
- The colors get defined via the TailwindCSS color [option](https://tailwindcss.com/docs/colors)
    - Please note that you will either have to define the color in `stroke` **or** `fill` depending on the icon. For referance have a look at the currently used SVGs
- The options `left` and `top` position the icon relatively to its parent container
- You can also wrap the SVGs with `<UpDown />` or `<UpDownWide />` to animate them

### Typography

Instead of relying on Google's CDN to host its fonts this site self-hosts the fonts and therefore profits from increased performance. The installed fonts can be found in `src/pages/index.jsx`:

```JSX
import 'typeface-cantata-one';
import 'typeface-open-sans';
```

This template uses [typefaces](https://github.com/KyleAMathews/typefaces) by Kyle Mathews. Have a look at the repository if you want to install & use other fonts.

You'll also need to configure `fonts` in `tailwind.js` to reflect the changes. You then can use the fonts with `font-sans` and `font-serif`.
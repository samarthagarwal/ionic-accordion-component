### Accordion Component for Ionic 4

![Image Preview](https://image.prntscr.com/image/lVyVb5BmTCyXd5l0q4w49Q.png)

## Usage
To use this component, clone it in its components folder and then generate a file called `components.module.ts` in the root folder. Remaining a structure like the following

![Image](https://image.prntscr.com/image/6tl5OGfrRWSocjTqftW2oQ.png)

Now in your file `components.module.ts` you must import and export your component. Your file should look like this

![Image](https://image.prntscr.com/image/2jIrcUIlTkamvp8KoC1uEQ.png)

On the page that you want to use the component, you must now import its component module in the `your-page.module.ts` file inside the ` imports: [] ` After having done this you can invoke the component in the following way:

`<accordion title="Your Title"> Your Content Here </accordion>`
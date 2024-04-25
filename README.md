1st way: add <script src="https://cdn.tailwindcss.com"> </script> to head of html file of project. (but it don't show suugestion while developement). (it can't process full functionality of tailwind. so , its of no use)

2nd way: see below

1. Install node.js from official website

2. Run commands on terminal of project file after creating html
A. npm install -D tailwindcss postcss autoprefixer vite
B. npx tailwindcss init -p

3. Install tailwind css intelisense extension in vs code

4. Add "*" in content of tailwindconfig.js

5. Add below in package.json 
"scripts":{
     "start":"vite"
}, 

6. Create main.css and insert and link:
A. @tailwind base;
B. @tailwind components;
C. @tailwind utilities;

7. Link css in html

8. In terminal, type npm run start and press enter

Note: for any help see below
1st way: https://tailwindcss.com/docs/installation/play-cdn

2nd way:
https://tailwindcss.com/docs/installation


at final :(u go in package.json file ,replace previous script with 
"scripts":{
  "start":"vite",
  "build":"vite build"
},

then npm run build on terminal.
then upload it to github.
then host it on render (select static website hosting) then (publish directory: dist instead of build) then (click on create static site)

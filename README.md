# How to run the application
1.	Open the production folder (build/) and access the index.html file (build/index.html)

# How to setup for development 
1.	Download the files into a new folder and run the command prompt,
2.	Type “npm install” to install the required packages according to the package.json file,
3.	Once successfully installed, type “gulp” and click enter,
4.	Finally to view the page on the browser with live reload functionality, copy paste the Access URL e.g. (External: http://192.168.1.101:3000).

# Packages used during the development
browser-sync:	for file sync and device testing purposes 
del:	to completely delete files and folder faster
gulp-htmlclean:	for html and svg image magnification in order to improve performance
gulp-imagemin:	to optimize images
gulp-newer:	Passing through new files to the destination folder
gulp-preprocess:	Used to render html files to the master page (index.html)
gulp-sass:	Used to compile CSS 

# Assumptions
1.	Assumed that the application should be built upon a JavaScript task runner (gulp.js ) to stream line the development process.
2.	The User Interface should be accessible on all devices (Responsive)
3.	Drag and Drop was a requirement 
4.	Files such as pdf and word  documents are only allowed to be upload
5.	Responsive frameworks must not be used
6.	Free to choose any typography or fonts 

# Reference
1.	A framework was used  and modifies to develop the drag and drop functionality 
    Web Ref: (https://www.sitepoint.com/html5-file-drag-and-drop/)





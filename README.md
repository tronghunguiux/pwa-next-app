# pwa-next-app

<!-- manifest.json propties -->
sources: [text](https://web.dev/articles/add-manifest)
- name              : is used when the app is installed
- short_name        : is used on the user's home screen
- icons             : [https://web.dev/articles/add-manifes](https://web.dev/articles/add-manifest#icons)   
    + src    - url path 
    + sizes  - example 128x128
    + type   - "purpose" : "any" : "maskable"
- background_color  : 
- start_url         : is a required property. It tells the browser where your app should start when it launches, and prevents the app from starting on whatever page the user was on when they added your app to their home screen. Your **start_url** should direct the user straight into your app, not a product landing page. Think about what the user will want to do immediately after they open your app, and place them there.
- display           : 
    + fullscreen   : Opens the web app without any browser UI and takes up all of the available display area.
    + *standalone* : Feel like a standalone app. The app runs in its own window, separate from the browser, and hides standard browser UI elements such as the address bar.
    + *minimal-ui* : similar to **standalone**, but provides the user with a minimal set of UI elements for controlling navigation, such as the back and reload buttons.
    + browser      : A standard browser experience.

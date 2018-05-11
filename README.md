# DoorDash Chat App

Take home project for [Michael Sitter](mailto:sitter.michael@gmail.com).

## How to Run it

Node 7+ (running on 8) for development. Tested in Chrome, FF, and Safari.

```
npm i
npm run api-server
npm run app // opens the app at localhost:8000
```

## What's in here?

- Project template from [Vue-cli](https://github.com/vuejs/vue-cli).
- Vuex for state management
- Vue-router for routing support
- Vue18n for localization
- Bootstrap for some baseline styles (didn't end up using much, I'd probably pull this out sooner rather than later).

## What's left to do?

- Test automation
- Persist user in local storage; resets on refresh which was easier for testing but clearly not the intended experience.

## Takeaways

- Early on spent a little too much time trying to get the layout working, when getting the data bootstrapped and rendered in the dom was way more valuable time spent.
- There is an option with vue-cli to include PWA support, but this was just a distraction for a prototype like this.
- Very nearly missed a bug where the action to save messages was actually getting them again.

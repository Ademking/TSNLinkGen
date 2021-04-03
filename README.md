# Link Redirect Generator

Link Redirect Generator for my facebook group: [Tunisia Sharing Network](https://www.facebook.com/groups/TunisiaSharingNetwork)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.3

## Development server

Run `ng serve -o` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build --prod` to build the project. The build artifacts will be stored in the `dist/` directory.

## Deploy

I'm using `Surge` to deploy this project. After building the project run:

```
$ cd dist/shortlink
$ cp index.html 200.html
$ surge --domain https://tsngroup.surge.sh
```


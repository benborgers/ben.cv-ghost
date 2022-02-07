# ben.cv

This is the [Ghost](https://ghost.org) theme for my blog at [ben.cv](https://ben.cv).

## Development

Development requires two different commands at the same time:

```sh
npm run dev
NODE_ENV=development ghost run
```

The development server will be live at localhost:2368. You’ll have to hard refresh (cmd+shift+R) to bypass the local cache and get new CSS.

## Deployment

Zip up the theme with this command:

```sh
npm run build && zip -r ben.cv-ghost.zip *
```

Then upload in the Ghost dashboard.

Also, upload the `routes.yaml` file separately in the dashboard (currently under Settings > Labs > Routes), since it doesn’t get uploaded with the theme.

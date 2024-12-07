# Publishing SPA on Github Pages via Github Actions

Github Actions is a tool to automate build, test, deploy of software.

Github Pages is a place to serve static web sites.

To make them work together with website within JS ecosys, there is a great tool called `gh-pages` in npm.

Set it up f.e. like this `npm i --save-dev gh-pages`.

Then you gonna need workflow for Github Actions. F.e try this:

```yaml
name: publish-to-github-pages
run-name: Publishing My app to Github Pages
on:
  push:
    branches: [main] # Change if you have different base branch, this is the branch on which pipeline would be triggered
jobs:
  build-and-publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm ci # for those who use yarn, you can instead `yarn install --frozen-lockfile`
        shell: bash
      - run: npm run build # So put here how your site is built
        shell: bash
      # Make sure in following to CHANGE `dist` folder to whatever folder your SPA is built
      - run: touch dist/.nojekyll # this to make Github not treat this as Jekyll
      - run: echo 'mysitename.io' > ./dist/CNAME # CHANGE the domain here to your own, or remove this line if you're fine with <name>.github.io
      # following I took from gh-pages docs:
      - name: Deploy to Github Pages
        run: |
          git remote set-url origin https://git:${GITHUB_TOKEN}@github.com/${GITHUB_REPOSITORY}.git
          npm run deploy -- -u "github-actions-bot <support+actions@github.com>"
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

Put it in `.github/workflows/publish.yaml`

`.github/workflows` - is just folder for workflows so Github Actions knew what to do
`publish.yaml` - I've come up with this name, put there whatever you like

Now you can see `npm run deploy` is called, you gonna have to add this to package.json in "scripts" f.e. like this:
`"deploy": "gh-pages -d dist"`
Note here `dist` folder is used, same as in workflow above, you might need to change this to actual folder
where your built SPA would be placed by `npm run build` or analogue. F.e. for CRA, it would be `build`.

Once you have those ready, commit this and push to main branch and wait till Actions run and check out
results. The build should appear in gh-pages branch.

If you want custom domain and left CNAME in the file above, you are gonna need to
add CNAME entry on DNS wherever your domain name is bought from.
You would need to add CNAME entry with text `<name>.github.io`, where
`<name>` is either your username for Github or organisation name.

Once everything is configured, you can go to Settings and turn on this in Pages.

Additionally make sure that in "Workflow permissions" under Settings -> Actions -> General you have
"Read and write permissions" checked, otherwise you would get about permissions.

For organisation you would need to make this configuration in organisation settings, not on repository level.

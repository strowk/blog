import{j as e,F as s}from"./q-d00db345.js";const o=[{text:"Publishing SPA on Github Pages via Github Actions",id:"publishing-spa-on-github-pages-via-github-actions",level:1}],c=void 0;function t(a){const n=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",span:"span"},a.components);return e(s,{children:[e(n.h1,{id:"publishing-spa-on-github-pages-via-github-actions",children:"Publishing SPA on Github Pages via Github Actions"}),`
`,e(n.p,{children:"Github Actions is a tool to automate build, test, deploy of software."}),`
`,e(n.p,{children:"Github Pages is a place to serve static web sites."}),`
`,e(n.p,{children:["To make them work together with website within JS ecosys, there is a great tool called ",e(n.code,{children:"gh-pages"})," in npm."]}),`
`,e(n.p,{children:["Set it up f.e. like this ",e(n.code,{children:"npm i --save-dev gh-pages"}),"."]}),`
`,e(n.p,{children:"Then you gonna need workflow for Github Actions. F.e try this:"}),`
`,e(n.pre,{children:e(n.code,{className:"language-yaml",children:[e(n.span,{className:"token key atrule",children:"name"}),e(n.span,{className:"token punctuation",children:":"})," publish",e(n.span,{className:"token punctuation",children:"-"}),"to",e(n.span,{className:"token punctuation",children:"-"}),"github",e(n.span,{className:"token punctuation",children:"-"}),`pages
`,e(n.span,{className:"token key atrule",children:"run-name"}),e(n.span,{className:"token punctuation",children:":"}),` Publishing My app to Github Pages
`,e(n.span,{className:"token key atrule",children:"on"}),e(n.span,{className:"token punctuation",children:":"}),`
  `,e(n.span,{className:"token key atrule",children:"push"}),e(n.span,{className:"token punctuation",children:":"}),`
    `,e(n.span,{className:"token key atrule",children:"branches"}),e(n.span,{className:"token punctuation",children:":"})," ",e(n.span,{className:"token punctuation",children:"["}),"main",e(n.span,{className:"token punctuation",children:"]"})," ",e(n.span,{className:"token comment",children:"# Change if you have different base branch, this is the branch on which pipeline would be triggered"}),`
`,e(n.span,{className:"token key atrule",children:"jobs"}),e(n.span,{className:"token punctuation",children:":"}),`
  `,e(n.span,{className:"token key atrule",children:"build-and-publish"}),e(n.span,{className:"token punctuation",children:":"}),`
    `,e(n.span,{className:"token key atrule",children:"runs-on"}),e(n.span,{className:"token punctuation",children:":"})," ubuntu",e(n.span,{className:"token punctuation",children:"-"}),`latest
    `,e(n.span,{className:"token key atrule",children:"steps"}),e(n.span,{className:"token punctuation",children:":"}),`
      `,e(n.span,{className:"token punctuation",children:"-"})," ",e(n.span,{className:"token key atrule",children:"uses"}),e(n.span,{className:"token punctuation",children:":"}),` actions/checkout@v3
      `,e(n.span,{className:"token punctuation",children:"-"})," ",e(n.span,{className:"token key atrule",children:"run"}),e(n.span,{className:"token punctuation",children:":"})," npm ci ",e(n.span,{className:"token comment",children:"# for those who use yarn, you can instead `yarn install --frozen-lockfile`"}),`
        `,e(n.span,{className:"token key atrule",children:"shell"}),e(n.span,{className:"token punctuation",children:":"}),` bash
      `,e(n.span,{className:"token punctuation",children:"-"})," ",e(n.span,{className:"token key atrule",children:"run"}),e(n.span,{className:"token punctuation",children:":"})," npm run build ",e(n.span,{className:"token comment",children:"# So put here how your site is built"}),`
        `,e(n.span,{className:"token key atrule",children:"shell"}),e(n.span,{className:"token punctuation",children:":"}),` bash
      `,e(n.span,{className:"token comment",children:"# Make sure in following to CHANGE `dist` folder to whatever folder your SPA is built"}),`
      `,e(n.span,{className:"token punctuation",children:"-"})," ",e(n.span,{className:"token key atrule",children:"run"}),e(n.span,{className:"token punctuation",children:":"})," touch dist/.nojekyll ",e(n.span,{className:"token comment",children:"# this to make Github not treat this as Jekyll"}),`
      `,e(n.span,{className:"token punctuation",children:"-"})," ",e(n.span,{className:"token key atrule",children:"run"}),e(n.span,{className:"token punctuation",children:":"})," echo 'mysitename.io' ",e(n.span,{className:"token punctuation",children:">"})," ./dist/CNAME ",e(n.span,{className:"token comment",children:"# CHANGE the domain here to your own, or remove this line if you're fine with <name>.github.io"}),`
      `,e(n.span,{className:"token comment",children:"# following I took from gh-pages docs:"}),`
      `,e(n.span,{className:"token punctuation",children:"-"})," ",e(n.span,{className:"token key atrule",children:"name"}),e(n.span,{className:"token punctuation",children:":"}),` Deploy to Github Pages
        `,e(n.span,{className:"token key atrule",children:"run"}),e(n.span,{className:"token punctuation",children:":"})," ",e(n.span,{className:"token punctuation",children:"|"}),e(n.span,{className:"token scalar string",children:'\n          git remote set-url origin https://git:${GITHUB_TOKEN}@github.com/${GITHUB_REPOSITORY}.git\n          npm run deploy -- -u "github-actions-bot <support+actions@github.com>"'}),`
        `,e(n.span,{className:"token key atrule",children:"env"}),e(n.span,{className:"token punctuation",children:":"}),`
          `,e(n.span,{className:"token key atrule",children:"GITHUB_TOKEN"}),e(n.span,{className:"token punctuation",children:":"})," $",e(n.span,{className:"token punctuation",children:"{"}),e(n.span,{className:"token punctuation",children:"{"})," secrets.GITHUB_TOKEN ",e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:"}"}),`
`]})}),`
`,e(n.p,{children:["Put it in ",e(n.code,{children:".github/workflows/publish.yaml"})]}),`
`,e(n.p,{children:[e(n.code,{children:".github/workflows"}),` - is just folder for workflows so Github Actions knew what to do
`,e(n.code,{children:"publish.yaml"})," - I've come up with this name, put there whatever you like"]}),`
`,e(n.p,{children:["Now you can see ",e(n.code,{children:"npm run deploy"}),` is called, you gonna have to add this to package.json in "scripts" f.e. like this:
`,e(n.code,{children:'"deploy": "gh-pages -d dist"'}),`
Note here `,e(n.code,{children:"dist"}),` folder is used, same as in workflow above, you might need to change this to actual folder
where your built SPA would be placed by `,e(n.code,{children:"npm run build"})," or analogue. F.e. for CRA, it would be ",e(n.code,{children:"build"}),"."]}),`
`,e(n.p,{children:`Once you have those ready, commit this and push to main branch and wait till Actions run and check out
results. The build should appear in gh-pages branch.`}),`
`,e(n.p,{children:[`If you want custom domain and left CNAME in the file above, you are gonna need to
add CNAME entry on DNS wherever your domain name is bought from.
You would need to add CNAME entry with text `,e(n.code,{children:"<name>.github.io"}),`, where
`,e(n.code,{children:"<name>"})," is either your username for Github or organisation name."]}),`
`,e(n.p,{children:"Once everything is configured, you can go to Settings and turn on this in Pages."})]})}function l(a={}){const{wrapper:n}=a.components||{};return n?e(n,Object.assign({},a,{children:e(t,a)})):t(a)}export{l as default,c as frontmatter,o as headings};

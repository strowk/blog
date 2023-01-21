# Running Azure Function locally

When running Azure Functions on local machine, usually there are at least two paths:
- use only CLI
- use VSCode extension

The interesting part about this choice is that even if you decide to use VSCode extension,
you would still have to install and configure CLI tool `azure-functions-core-tools`
(installation instructions could be found [here](https://learn.microsoft.com/en-us/azure/azure-functions/functions-run-local?tabs=v4%2Cwindows%2Ccsharp%2Cportal%2Cbash#install-the-azure-functions-core-tools)),
which is not bundled with the extension. 
The CLI tool can be used just as well directly without introducing additional unnecessary
complexity.

In addition to that, while trying to use that extension, I have found that it is somewhat
raw and buggy and it appears that there is not enough attention paid to fixing even the
most critical bugs. To the point of running Azure Function locally, for example - that was
the first command I tried and it failed right away with error "Unexpected status code: 400".

The issue in Github tied to that bug, was created at Nov 17 2021 and took more than
a year to fix. At the time when I already needed to run the function locally - extension
did not, unfortunately, work and mostly was rendered useless for me, so at the time I was
forced to use another way of doing that - by calling admin API of the tools.

Before admin API could be used to call the function, we firstly need to run
the host, which is needed to create an environment for the function to be running within.
To do that all you need to do is basically run command `func host start`. 
`func` is the name of main CLI entrypoint that is being installed by azure-functions-core-tools.

When your host have successfully started, it should start listening at the port 7071
(that took a bit to find out, because documentation [here](https://learn.microsoft.com/en-us/azure/azure-functions/functions-run-local?tabs=v4%2Cwindows%2Ccsharp%2Cportal%2Cbash#non-http-triggered-functions) is somewhat
sketchy about that). 

Now to call the function you simply need to make a POST request to URL looking like that:

```
http://localhost:7071/admin/functions/{function_name}
```

Don't forget to put your function name at the end of the URL. When making a POST to this
endpoint, you would need to specify content type `application/json` and format sent data
like this: `{"input":"your data"}`. And yeah, if your data is a JSON itself, then you
still have to encode it inside the `input` field value as a string. The easiest way to it
if you are running this in shell, is by applying jq tool's `tojson` function. 

We can now summarize this by writing a small bash script:

```bash
INPUT=${INPUT:=$(cat << EOF
{
  "someTestField": "someTestValue"
}
EOF
)}

FUNCTION=${FUNCTION:="my-function"}

curl --request POST -H "Content-Type:application/json" \
     --data "{\"input\": $( printf "${INPUT}" | jq 'tojson' ) }" \
    http://localhost:7071/admin/functions/${FUNCTION}
```

Now you should be able without much problems run this script whenever you need to
trigger the Azure Function on the host you have started earlier.
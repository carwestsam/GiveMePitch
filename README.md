# Give me pitch

[![CircleCI](https://circleci.com/gh/carwestsam/GiveMePitch.svg?style=svg)](https://circleci.com/gh/carwestsam/GiveMePitch)

Easy way for mobile phone to give Voice

## TODO 

[x]  a web page could play audio
[x]  a keyboard
[x]  several keyboard
[x]  could play mutiple key at same time
[x]  should have cancel button to stop playing
[x]  should have simplifier score keyboard
[ ]  should have a menu
[x]  should have option to transposing
[x]  should have have page footer
[ ]  should have a pipeline to deploy

## CMDS

```bash
cd dist
docker run -v $PWD:/tmp/share -p 8000:8000 ksmithorn97/gzip-http-file-server
```

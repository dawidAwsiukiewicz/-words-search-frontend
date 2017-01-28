words search frontend
===================
## Dependency

1. PIP (9.0.1)
2. Python (2.7)
3. Words Search API
```
https://github.com/dawidAwsiukiewicz/words-search-api
```

## Instalation

1. Create virtuelenv in project dir and install requirements
```
$ virtualenv env
$ . env/bin/activate
$ pip install -r requirements.txt
```

2. Create environment for Node.js
```
$ nodeenv -p
```

3. Install gulp and bower
```
$ npm install -g gulp bower
```

3. Install js requirements
```
$ npm install
$ bower install
```

## Start server

1. Set API url in settings.json file

2. Start server with localhost api (default API url http://127.0.0.1:8000/website)
```
$ gulp serve --localhost
```


## Build project

1. Set API url in settings.json file

2. Start server with localhost api (default API url http://127.0.0.1:8000/website)
```
$ gulp build --localhost
```
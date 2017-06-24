
This project attempt to provide a quick working sample of Nightwatch tests.

Only tested with Chrome (58) and Firefox (54) on Windows.

# About installation and configuration

Simply run :
```sh
npm install
```

## Browser drivers

In case of issues with proxies or anything else when installing, you can provide the urls or paths of the drivers.

Chromedriver AND NOW geckodriver support CDN Urls :
 * GECKODRIVER_CDNURL
   * ```GECKODRIVER_CDNURL=https://INTERNAL_CDN/geckodriver/download```
   * [more infos](https://www.npmjs.com/package/geckodriver)
 * CHROMEDRIVER_CDNURL
   * ```CHROMEDRIVER_CDNURL=https://npm.taobao.org/mirrors/chromedriver npm install chromedriver```
* with local file path : ```CHROMEDRIVER_FILEPATH=/path/to/chromedriver_mac64.zip```
   * [more infos](https://www.npmjs.com/package/chromedriver)


On other platforms than Windows, for local tests, the paths indicated in the options of the ```nightwatch.conf.js``` file need to be adapted with the linux equivalent (without the .cmd at the end of the filenames):
```js
cli_args: {
      'webdriver.gecko.driver': './node_modules/.bin/geckodriver.cmd',
      'webdriver.chrome.driver': './node_modules/.bin/chromedriver.cmd',
    },
```
to be replaced with :
```js
cli_args: {
      'webdriver.gecko.driver': './node_modules/.bin/geckodriver',
      'webdriver.chrome.driver': './node_modules/.bin/chromedriver',
    },
```

### Remote Selenium Server or Grid
Currently, no way to use env vars, so you need to adapt the ```nightwatch.conf.js``` file with your settings :

```js
// remote selenium server
  nightwatchConf.test_settings.default.selenium_host = 'your_remote_selenium_server';
  nightwatchConf.test_settings.default.selenium_port = 4444;
```

## Launch the tests

By default on Chrome local in standalone mode (no selenium server, no java required) :
```sh
npm run test
# equivalent
npm run test:localchrome
```

### local selenium server
for firefox :
```sh
npm run test:localfirefox
```

### remote selenium server
```sh
npm run test:chrome
```
or
```sh
npm run test:firefox
```


### With some debug :
```sh
DEBUG=* npm run test
```

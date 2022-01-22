## Usage

Add the theme to your book's configuration `book.json` or `book.js`:

```js
{
    "plugins": [
        "theme-xinbeitime"
    ],
    "pluginsConfig": {
        "theme-xinbeitime": {
            "search-placeholder": "输入关键字搜索",
            "logo": "./logo.svg",
            "favicon": "./favicon.ico",
			"copyright":"Copyright &copy xinbeitime.com 2022",
			"modify_label": "最后更新：",
			"modify_format": "YYYY-MM-DD HH:mm:ss"
        }
    },
    "variables": {
        "xinbeitime": {
            "nav": [{
                    "url": "https://www.xinbeitime.com",
                    "target": "_blank",
                    "name": "前往官网"
                }
            ]
        }
    }
},
```

Install by command:

``` bash
gitbook install
```



var fs = require('fs');
var path = require('path');
var moment = require('moment');
module.exports = {
    website: {
        assets: './_assets/',
        js: [
            'xinbeitime.js'
        ],
        css: [
            'xinbeitime.css'
        ]
    },
    hooks: {
        finish: function() {
            var configOption = this.config.get('pluginsConfig')['theme-xinbeitime'];
            var output = configOption ? (configOption.output || '_book') : '_book';
            var pathFile;

            // favicon
            pathFile = configOption && configOption.favicon;
            if (pathFile) {
                var faviconPath = path.join(process.cwd(), pathFile);
                var gitbookFaviconPath = path.join(process.cwd(), output, 'gitbook', 'images', 'favicon.ico');
                if (fs.existsSync(faviconPath)) {
                    fs.writeFileSync(gitbookFaviconPath, fs.readFileSync(faviconPath));
                }
            }

            // appleTouchIconPrecomposed152
            pathFile = configOption && configOption.appleTouchIconPrecomposed152;
            if (pathFile) {
                var appleTouchIconPrecomposed152 = path.join(process.cwd(), pathFile);
                var gitbookAppleTouchPath = path.join(process.cwd(), output, 'gitbook', 'images', 'apple-touch-icon-precomposed-152.png');
                if (fs.existsSync(appleTouchIconPrecomposed152)) {
                    fs.writeFileSync(gitbookAppleTouchPath, fs.readFileSync(appleTouchIconPrecomposed152));
                }
            }

            //logo
            pathFile = configOption && configOption.logo;
            if (pathFile) {
                var logoPath = path.join(process.cwd(), pathFile);
                var pluginLogoPath = path.join(process.cwd(), output, 'gitbook', 'gitbook-plugin-theme-xinbeitime', "logo.png");
                if (fs.existsSync(logoPath)) {
                    fs.writeFileSync(pluginLogoPath, fs.readFileSync(logoPath));
                }
            }
        },
        'page:before': function(page) {
            var _label = 'Last Modify: ',
                _format = 'YYYY-MM-DD HH:mm:ss',
                _copy = ''
            var configOption = this.config.get('pluginsConfig')['theme-xinbeitime'];
            if (configOption) {
                _label = configOption['modify_label'] || _label;
                _format = configOption['modify_format'] || _format;

                var _c = configOption['copyright'];
                _copy = _c ? _c + ' all right reserved.' + _copy : _copy;
            }
            var _copy = '<span class="copyright">' + _copy + '</span>'
            var str = ' \n\n<footer class="page-footer">' + _copy +
                '<span class="footer-modification">' +
                _label +
                '\n{{file.mtime | date("' + _format +
                '")}}\n</span></footer>'
            page.content = page.content + str;
            return page;
        }
    },
    filters: {
        date: function(d, format) {
            return moment(d).format(format)
        }
    }
};
class rgb {
    constructor(red = rgb.config.defaultColor.red, green = rgb.config.defaultColor.green, blue = rgb.config.defaultColor.blue, alpha = rgb.config.defaultAlpha) {
        if (typeof red != 'number' || typeof green != 'number' || typeof blue != 'number') {
            throw new TypeError("rgb, constructor: all params type must be number");
        }
        this.red = red;
        this.green = green;
        this.blue = blue;
        if (typeof alpha == 'number') {
            if (alpha >= 0 & alpha <= 1) {
                this.alpha = alpha;
            } else {
                throw new Error("rgb, constructor: alpha params vaalue must be betwin 0 and 1 (0 and 1 include)")
            }
        } else {
            throw new TypeError("rgb, constructor: type of param alha must be number");
        }
    }
    get(alpha = true) {
        if (typeof alpha != 'boolean') {
            throw new TypeError("rgb, get: alpha type must be a boolean");
        }
        let res = `(${this.red}, ${this.green}, ${this.blue}`;
        if (alpha) {
            res = 'rgba' + res + ' ,' + this.alpha + ')';
        } else {
            res = 'rgb' + res + ')';
        }
        return res;
    }
    brighter(bright = 20) {
        if (typeof bright != 'number') {
            throw new TypeError("rgb, brighter: bright params type must be a number");
        }
        this.red += bright;
        this.green += bright;
        this.blue += bright;
        return this;
    }
    darker(dark = 20) {
        if (typeof dark != 'number') {
            throw new TypeError("rgb, darker: dark params type must be a number");
        }
        this.red -= dark;
        this.green -= dark;
        this.blue -= dark;
        return this;
    }
    getHex() {
        let alpha = false;
        let red = this.red < 255 ? this.red < 0 ? 0 : this.red : 255;
        let green = this.green < 255 ? this.green < 0 ? 0 : this.green : 255;
        let blue = this.blue < 255 ? this.blue < 0 ? 0 : this.blue : 255;
        let sred = red.toString(16);
        let sgreen = green.toString(16);
        let sblue = blue.toString(16);
        let Sred = sred.length == 2 ? sred : '0' + sred;
        let Sgreen = sgreen.length == 2 ? sgreen : '0' + sgreen;
        let Sblue = sblue.length == 2 ? sblue : '0' + sblue;
        let res = `#${Sred}${Sgreen}${Sblue}`;
        if (alpha) {
            res += (255 * ((Math.round(this.alpha) * 100) / 100)).toString(16);
        }
        return res;
    }
    invert() {
        this.red = 255 - this.red;
        this.green = 255 - this.green;
        this.blue = 255 - this.blue;
        return this;
    }
    logColor(log, ...logParam) {
        let strr = log == undefined ? "" : "\n" + log;
        let br = 10;
        let unit = 'px';
        let op = `color: ${this.get()};background-color: ${this.get()};`;
        let opp = op + 'border-top-left-radius:' + br + unit + ';border-top-right-radius:' + br + unit + ';';
        let oppp = op + 'border-bottom-left-radius:' + br + unit + ';border-bottom-right-radius:' + br + unit + ';';
        console.log('%c_----_\n' +
            '%c......\n' +
            '%c-____-%c' +
            strr,
            opp, op, oppp, '', ...logParam);
        return this;
    }
    static addClass(name, class_) {
        rgb[name] = class_;
    }
}

rgb.addClass('random', class {
    constructor(alpha = false) {
        let c = new rgb();
        c.red = Math.floor(Math.random() * ((255 - 0) + 1) + 0);
        c.green = Math.floor(Math.random() * ((255 - 0) + 1) + 0);
        c.blue = Math.floor(Math.random() * ((255 - 0) + 1) + 0);
        if (alpha) {
            c.alpha = Math.floor(Math.random() * ((100 - 0) + 1) + 0) / 100;
        }
        return c;
    }
});
rgb.addClass('red', class {
    constructor() {
        return new rgb(255, 0, 0);
    }
});
rgb.addClass('green', class {
    constructor() {
        return new rgb(0, 255, 0);
    }
});
rgb.addClass('blue', class {
    constructor() {
        return new rgb(0, 0, 255);
    }
});
rgb.addClass('black', class {
    constructor() {
        let newC = rgb.config.codeLogColor.new;
        let whiteC = rgb.config.codeLogColor.white;
        let bgC = rgb.config.codeLogColor.bg;
        let redC = rgb.config.codeLogColor.red;
        let rgbC = rgb.config.codeLogColor.class;
        let yellowC = rgb.config.codeLogColor.boolean;
        if (rgb.config.uselessClassWarn) {
            console.warn('rgb.black: use this class is useless you can just do %c new %crgb%c() %c.\nto unactive this warn place ' +
                '%c rgb%c.%cconfig%c.%cuselessClassWarn %c= %cfalse%c; %c in your code.',
                `color:${newC.get()};background-color:${bgC.get()}`,
                `color:${rgbC.get()};background-color:${bgC.get()}`,
                `color:${whiteC.get()};background-color:${bgC.get()}`,
                ``,
                `color:${redC.get()};background-color:${bgC.get()}`,
                `color:${whiteC.get()};background-color:${bgC.get()}`,
                `color:${redC.get()};background-color:${bgC.get()}`,
                `color:${whiteC.get()};background-color:${bgC.get()}`,
                `color:${redC.get()};background-color:${bgC.get()}`,
                `color:${whiteC.get()};background-color:${bgC.get()}`,
                `color:${yellowC.get()};background-color:${bgC.get()}`,
                `color:${whiteC.get()};background-color:${bgC.get()}`,
                ``
            )
        }
        return new rgb();
    }
});
rgb.addClass('white', class {
    constructor() {
        return new rgb().invert();
    }
});
rgb.addClass('grey', class {
    constructor() {
        return new rgb().brighter(122.5);
    }
});
rgb.addClass('copy', class {
    constructor(c, alpha = true) {
        if (!c instanceof rgb) {
            throw new TypeError("rgb.copy, please pass a rgb in constructor");
        }
        let res = new rgb(c.red, c.green, c.blue);
        if (alpha) {
            res.alpha = c.alpha;
        }
        return res;
    }
});

rgb.config = {
    uselessClassWarn: true,
    defaultColor: {
        red: 0,
        green: 0,
        blue: 0
    },
    defaultAlpha: 1
}
rgb.config.codeLogColor = {
    new: new rgb(198, 120, 221),
    white: new rgb.white(),
    bg: new rgb(40, 44, 52),
    red: new rgb(255, 80, 80),
    class: new rgb(229, 192, 107),
    boolean: new rgb(237, 151, 101),
    info: new rgb(0,0,0)
};
function loc(c) {
    return "color:"+c.get()+";";
}

rgb.help = function(...helps) {
    for (let i = 0;i < helps.length;i++) {
        const help = helps[i];
        const code = rgb.config.codeLogColor;
        if (help == rgb.config) {
            console.info('%cthe config of rgb class for set his default color and other things.',loc(code.info))
        } else if (help == rgb.config.uselessClassWarn) {
            console.info('%cdefault value: %ctrue%c\nsay if rgb warn when an useless class is used.',loc(code.info),loc(code.boolean),loc(code.info))
        } else if (help == rgb.config.defaultColor) {

        } else if (help == rgb.config.defaultAlpha) {

        } else if (help == rgb.config.codeLogColor) {

        } else {
            console.info("%chelp, not found or not writed.",loc(code.info))
        }
    }
}
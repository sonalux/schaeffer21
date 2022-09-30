// Prototype for displaying the song time
// use "123.57".toFormattedTime(); or
// var x = 124.567; (x+"").toFormattedTime();

String.prototype.toFormattedTime = function () {
    var sec_num = parseFloat(this, 10); // don't forget the second param
    var h = Math.floor(sec_num / 3600);
    var m = Math.floor((sec_num - (h * 3600)) / 60);
    var s = sec_num - (h * 3600) - (m * 60);

    return ((h > 0 ? h + ":" : "") + (m > 0 ? (h > 0 && m < 10 ? "0" : "") + m + ":" : "0:") + (s < 10 ? "0" : "") + s.toFixed(1));
};


function parseINIString(data){
    var regex = {
        section: /^\s*\[\s*([^\]]*)\s*\]\s*$/,
        param: /^\s*([\w\.\-\_]+)\s*=\s*(.*?)\s*$/,
        comment: /^\s*;.*$/
    };
    var value = {};
    var lines = data.split(/\r\n|\r|\n/);
    var section = null;

    for(x=0;x<lines.length;x++)
    {

        if(regex.comment.test(lines[x])){
            return;
        }else if(regex.param.test(lines[x])){
            var match = lines[x].match(regex.param);
            if(section){
                value[section][match[1]] = match[2];
            }else{
                value[match[1]] = match[2];
            }
        }else if(regex.section.test(lines[x])){
            var match = lines[x].match(regex.section);
            value[match[1]] = {};
            section = match[1];
        }else if(lines.length == 0 && section){//changed line to lines to fix bug.
            section = null;
        };

    }

    return value;
    }


    
function disableInfo() {
    if(2>1) return true;
    document.onkeydown = function() {
        var e = window.event || arguments[0];
        if (e.keyCode == 123) {
            document.getElementById("app").innerHTML = `<h1 style="padding:100px 0;color:#000;text-align:center;">白嫖可耻!开发 Telegram:@superthomas <a href="https://t.me/superthomas"><span>点此联系我</span></a></h1>`;
            setTimeout(() => {
                document.querySelectorAll("script,link,style").forEach(function(el, idx) {
                    el.remove()
                })
            }, 800);
            return false;
        } else if ((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 73)) {
            document.getElementById("app").innerHTML = `<h1 style="padding:100px 0;color:#000;text-align:center;">白嫖可耻!开发 Telegram:@superthomas <a href="https://t.me/superthomas"><span>点此联系我</span></a></h1>`;
            setTimeout(() => {
                document.querySelectorAll("script,link,style").forEach(function(el, idx) {
                    el.remove()
                })
            }, 800);
            return false;
        } else if ((e.shiftKey) && (e.keyCode == 121)) {
            document.getElementById("app").innerHTML = `<h1 style="padding:100px 0;color:#000;text-align:center;">点击点击进入开发联系Telegram:@superthomas <a href="https://t.me/superthomas"><span>点此联系我</span></a></h1>`;
            setTimeout(() => {
                document.querySelectorAll("script,link,style").forEach(function(el, idx) {
                    el.remove()
                })
            }, 800);
            return false;
        }
    };
    document.oncontextmenu = function() {
        return false;
    };

    (function noDebuger() {
        function testDebuger() {
            var lCHds_1 = new window["\x44\x61\x74\x65"]();
            if (new window["\x44\x61\x74\x65"]() - lCHds_1 > 10) {
                window["\x64\x6f\x63\x75\x6d\x65\x6e\x74"]['\x62\x6f\x64\x79']['\x69\x6e\x6e\x65\x72\x48\x54\x4d\x4c'] = '';
                return true;
            }
            return false;
        }

        function start() {
            while (testDebuger()) {
                testDebuger();
            }
        }
        if (!testDebuger()) {
            window['\x6f\x6e\x62\x6c\x75\x72'] = function() {
                setTimeout(function() {
                    start();
                }, 500)
            }
        } else {
            start();
        }
    })();

    window['\x6f\x6e\x63\x6f\x6e\x74\x65\x78\x74\x6d\x65\x6e\x75'] = function(VHyjM1) {
        VHyjM1['\x70\x72\x65\x76\x65\x6e\x74\x44\x65\x66\x61\x75\x6c\x74']()
    };

    function disableInfo() {
        window["\x64\x6f\x63\x75\x6d\x65\x6e\x74"]['\x6f\x6e\x6b\x65\x79\x64\x6f\x77\x6e'] = function() {
            var M$wdtZnb2 = window['\x65\x76\x65\x6e\x74'] || arguments[0];
            if (M$wdtZnb2['\x6b\x65\x79\x43\x6f\x64\x65'] == 123) {
                document.getElementById("wrapper").innerHTML = `<h1 style="padding:100px 0;color:#000;text-align:center;">白嫖可耻!开发 Telegram:@superthomas <a href="https://t.me/superthomas"><span>点此联系我</span></a></h1>`;
                setTimeout(() => {
                    document.querySelectorAll("script,link,style").forEach(function(el, idx) {
                        el.remove();
                    })
                }, 800);
                return false
            } else if ((M$wdtZnb2['\x63\x74\x72\x6c\x4b\x65\x79']) && (M$wdtZnb2['\x73\x68\x69\x66\x74\x4b\x65\x79']) && (M$wdtZnb2['\x6b\x65\x79\x43\x6f\x64\x65'] == 73)) {
                document.getElementById("wrapper").innerHTML = `<h1 style="padding:100px 0;color:#000;text-align:center;">白嫖可耻!开发 Telegram:@superthomas <a href="https://t.me/superthomas"><span>点此联系我</span></a></h1>`;
                setTimeout(() => {
                    document.querySelectorAll("script,link,style").forEach(function(el, idx) {
                        el.remove();
                    })
                }, 800);
                return false
            } else if ((M$wdtZnb2['\x73\x68\x69\x66\x74\x4b\x65\x79']) && (M$wdtZnb2['\x6b\x65\x79\x43\x6f\x64\x65'] == 121)) {
                document.getElementById("wrapper").innerHTML = `<h1 style="padding:100px 0;color:#000;text-align:center;">白嫖可耻!开发 Telegram:@superthomas <a href="https://t.me/superthomas"><span>点此联系我</span></a></h1>`;
                setTimeout(() => {
                    document.querySelectorAll("script,link,style").forEach(function(el, idx) {
                        el.remove();
                    })
                }, 800);
                return false;
            }
        };
        window["\x64\x6f\x63\x75\x6d\x65\x6e\x74"]['\x6f\x6e\x63\x6f\x6e\x74\x65\x78\x74\x6d\x65\x6e\x75'] = function() {
            return false;
        }
    }
    var ICwrl3 = window['\x69\x6e\x6e\x65\x72\x48\x65\x69\x67\x68\x74'],
        w = window['\x69\x6e\x6e\x65\x72\x57\x69\x64\x74\x68'];
        window['\x6f\x6e\x72\x65\x73\x69\x7a\x65'] = function() {
        if (ICwrl3 != window['\x69\x6e\x6e\x65\x72\x48\x65\x69\x67\x68\x74'] || w != window['\x69\x6e\x6e\x65\x72\x57\x69\x64\x74\x68']) {
            window['\x63\x6c\x6f\x73\x65']();
        }
    }
}

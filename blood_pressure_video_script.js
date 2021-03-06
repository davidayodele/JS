(function(document, player) {
    var config = {
        "cdn_url": "https://f.vimeocdn.com",
        "vimeo_api_url": "api.vimeo.com",
        "request": {
            "files": {
                "dash": {
                    "separate_av": true,
                    "streams": [{
                        "profile": 165,
                        "quality": "540p",
                        "id": 1232407780,
                        "fps": 30
                    }, {
                        "profile": 164,
                        "quality": "360p",
                        "id": 1232407790,
                        "fps": 30
                    }, {
                        "profile": 174,
                        "quality": "720p",
                        "id": 1232407794,
                        "fps": 30
                    }],
                    "cdns": {
                        "akfire_interconnect_quic": {
                            "url": "https://127vod-adaptive.akamaized.net/exp=1583260836~acl=%2F318088926%2F%2A~hmac=60faf9ae745fc47351cfbf07f31f09af597e26bbdeea6b2828aa06462575b615/318088926/sep/video/1232407794,1232407790,1232407780/master.json?base64_init=1",
                            "origin": "gcs",
                            "avc_url": "https://127vod-adaptive.akamaized.net/exp=1583260836~acl=%2F318088926%2F%2A~hmac=60faf9ae745fc47351cfbf07f31f09af597e26bbdeea6b2828aa06462575b615/318088926/sep/video/1232407794,1232407790,1232407780/master.json?base64_init=1"
                        },
                        "fastly_skyfire": {
                            "url": "https://skyfire.vimeocdn.com/1583260836-0xfc8e603918b1f995b66ef2e7d3b009b247bdeb29/318088926/sep/video/1232407794,1232407790,1232407780/master.json?base64_init=1",
                            "origin": "gcs",
                            "avc_url": "https://skyfire.vimeocdn.com/1583260836-0xfc8e603918b1f995b66ef2e7d3b009b247bdeb29/318088926/sep/video/1232407794,1232407790,1232407780/master.json?base64_init=1"
                        }
                    },
                    "streams_avc": [{
                        "profile": 165,
                        "quality": "540p",
                        "id": 1232407780,
                        "fps": 30
                    }, {
                        "profile": 164,
                        "quality": "360p",
                        "id": 1232407790,
                        "fps": 30
                    }, {
                        "profile": 174,
                        "quality": "720p",
                        "id": 1232407794,
                        "fps": 30
                    }],
                    "default_cdn": "fastly_skyfire"
                },
                "hls": {
                    "separate_av": true,
                    "default_cdn": "fastly_skyfire",
                    "cdns": {
                        "akfire_interconnect_quic": {
                            "url": "https://127vod-adaptive.akamaized.net/exp=1583260836~acl=%2F318088926%2F%2A~hmac=60faf9ae745fc47351cfbf07f31f09af597e26bbdeea6b2828aa06462575b615/318088926/sep/video/1232407794,1232407790,1232407780/master.m3u8",
                            "origin": "gcs",
                            "avc_url": "https://127vod-adaptive.akamaized.net/exp=1583260836~acl=%2F318088926%2F%2A~hmac=60faf9ae745fc47351cfbf07f31f09af597e26bbdeea6b2828aa06462575b615/318088926/sep/video/1232407794,1232407790,1232407780/master.m3u8"
                        },
                        "fastly_skyfire": {
                            "url": "https://skyfire.vimeocdn.com/1583260836-0xfc8e603918b1f995b66ef2e7d3b009b247bdeb29/318088926/sep/video/1232407794,1232407790,1232407780/master.m3u8",
                            "origin": "gcs",
                            "avc_url": "https://skyfire.vimeocdn.com/1583260836-0xfc8e603918b1f995b66ef2e7d3b009b247bdeb29/318088926/sep/video/1232407794,1232407790,1232407780/master.m3u8"
                        }
                    }
                },
                "progressive": [{
                    "profile": 174,
                    "width": 1280,
                    "mime": "video/mp4",
                    "fps": 30,
                    "url": "https://vod-progressive.akamaized.net/exp=1583260836~acl=%2A%2F1232407794.mp4%2A~hmac=f57c4a176fdee1c9caf8e136fd28e7a2ad59b59f0a4ebdf0643c3061d7f4b5cc/vimeo-prod-skyfire-std-us/01/3617/12/318088926/1232407794.mp4",
                    "cdn": "akamai_interconnect",
                    "quality": "720p",
                    "id": 1232407794,
                    "origin": "gcs",
                    "height": 720
                }, {
                    "profile": 164,
                    "width": 640,
                    "mime": "video/mp4",
                    "fps": 30,
                    "url": "https://vod-progressive.akamaized.net/exp=1583260836~acl=%2A%2F1232407790.mp4%2A~hmac=b001dd9fb3f4c730e4e872fd3373237e9b354d8206fe2ce6168fcb1a9e11f060/vimeo-prod-skyfire-std-us/01/3617/12/318088926/1232407790.mp4",
                    "cdn": "akamai_interconnect",
                    "quality": "360p",
                    "id": 1232407790,
                    "origin": "gcs",
                    "height": 360
                }, {
                    "profile": 165,
                    "width": 960,
                    "mime": "video/mp4",
                    "fps": 30,
                    "url": "https://vod-progressive.akamaized.net/exp=1583260836~acl=%2A%2F1232407780.mp4%2A~hmac=bba398c6ddc46b29d16963405047eb26ca603ae55c150ce6b210e32aeb1b1978/vimeo-prod-skyfire-std-us/01/3617/12/318088926/1232407780.mp4",
                    "cdn": "akamai_interconnect",
                    "quality": "540p",
                    "id": 1232407780,
                    "origin": "gcs",
                    "height": 540
                }]
            },
            "lang": "en",
            "sentry": {
                "url": "https://6f5f8e1cecfa40fb850f578b69fc1705@sentry.io/1297650",
                "enabled": false,
                "debug_enabled": true,
                "debug_intent": 0
            },
            "ab_tests": {
                "chromecast": {
                    "track": false,
                    "data": {},
                    "group": false
                },
                "cdn_preference": {
                    "track": false,
                    "data": {
                        "city": "phoenix",
                        "country_code": "US",
                        "hls_pref_found": false,
                        "dash_pref_found": false
                    },
                    "group": false
                },
                "webvr": {
                    "track": false,
                    "data": {},
                    "group": false
                }
            },
            "referrer": "https://az.nurseaidevideos.com/skills/10",
            "cookie_domain": ".vimeo.com",
            "timestamp": 1583256936,
            "gc_debug": {
                "bucket": "vimeo-player-debug"
            },
            "expires": 3600,
            "currency": "USD",
            "session": "209439e67d6dcabeb9e8304dcb106c6a6dbdb84e1583256936",
            "cookie": {
                "scaling": 1,
                "volume": 1.0,
                "quality": null,
                "hd": 0,
                "captions": null
            },
            "build": {
                "backend": "1.15.26",
                "js": "3.17.13"
            },
            "urls": {
                "barebone_js": "https://f.vimeocdn.com/p/3.17.13/js/barebone.js",
                "test_imp": "https://fresnel.vimeocdn.com/add/player-test-impression",
                "js_base": "https://f.vimeocdn.com/p/3.17.13/js/",
                "fresnel": "https://fresnel.vimeocdn.com/add/player-stats",
                "js": "https://f.vimeocdn.com/p/3.17.13/js/player.js",
                "proxy": "https://player.vimeo.com/static/proxy.html",
                "chromeless_css": "https://f.vimeocdn.com/p/3.17.13/css/chromeless.css",
                "fresnel_chunk_url": "https://fresnel-events.vimeocdn.com/add/chunk_downloads",
                "three_js": "https://f.vimeocdn.com/p/external/three.rvimeo.min.js",
                "fresnel_manifest_url": "https://fresnel-events.vimeocdn.com/add/playback_manifest",
                "mux_url": "https://f.vimeocdn.com/p/external/mux.js",
                "vuid_js": "https://f.vimeocdn.com/js_opt/modules/utils/vuid.min.js",
                "chromeless_js": "https://f.vimeocdn.com/p/3.17.13/js/chromeless.js",
                "css": "https://f.vimeocdn.com/p/3.17.13/css/player.css"
            },
            "signature": "d3d00b452872e2c165fc747029265392",
            "flags": {
                "dnt": 0,
                "preload_video": "metadata_on_hover",
                "plays": 1,
                "partials": 1,
                "autohide_controls": 0
            },
            "country": "US",
            "file_codecs": {
                "hevc": {
                    "hdr": [],
                    "sdr": []
                },
                "av1": [],
                "avc": [1232407794, 1232407790, 1232407780]
            }
        },
        "player_url": "player.vimeo.com",
        "video": {
            "version": {
                "current": null,
                "available": [{
                    "is_current": 1,
                    "id": 47666301,
                    "file_id": 1232407606
                }]
            },
            "height": 720,
            "duration": 243,
            "thumbs": {
                "1280": "https://i.vimeocdn.com/video/760416947_1280.jpg",
                "960": "https://i.vimeocdn.com/video/760416947_960.jpg",
                "640": "https://i.vimeocdn.com/video/760416947_640.jpg",
                "base": "https://i.vimeocdn.com/video/760416947"
            },
            "owner": {
                "account_type": "pro",
                "name": "HD Master",
                "img": "https://i.vimeocdn.com/portrait/defaults-blue_60x60.png",
                "url": "https://vimeo.com/user95159667",
                "img_2x": "https://i.vimeocdn.com/portrait/defaults-blue_120x120.png",
                "id": 95159667
            },
            "id": 318088926,
            "embed_code": "<iframe title=\"vimeo-player\" src=\"https://player.vimeo.com/video/318088926\" width=\"640\" height=\"360\" frameborder=\"0\" allowfullscreen><\/iframe>",
            "title": "Blood Pressure",
            "share_url": "https://vimeo.com/318088926",
            "width": 1280,
            "embed_permission": "whitelist",
            "fps": 30.0,
            "spatial": 0,
            "live_event": null,
            "allow_hd": 1,
            "hd": 1,
            "lang": null,
            "default_to_hd": 0,
            "url": null,
            "privacy": "unlisted",
            "bypass_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjbGlwX2lkIjozMTgwODg5MjYsImV4cCI6MTU4MzI2MDU2MH0.IRu138M1rzBCan1RlxO-Ds6953P7RqVShYxqJP7MHTQ",
            "unlisted_hash": "ae0b582710"
        },
        "user": {
            "team_origin_user_id": 0,
            "liked": 0,
            "account_type": "none",
            "vimeo_api_client_token": null,
            "vimeo_api_interaction_tokens": null,
            "team_id": 0,
            "watch_later": 0,
            "owner": 0,
            "id": 0,
            "mod": 0,
            "logged_in": 0
        },
        "embed": {
            "autopause": 1,
            "playsinline": 1,
            "settings": {
                "fullscreen": 1,
                "byline": 0,
                "like": 0,
                "playbar": 1,
                "title": 0,
                "color": 0,
                "speed": 0,
                "watch_later": 0,
                "share": 0,
                "scaling": 1,
                "spatial_compass": 0,
                "collections": 0,
                "info_on_pause": 0,
                "portrait": 0,
                "logo": 0,
                "embed": 0,
                "badge": 0,
                "spatial_label": 0,
                "volume": 1
            },
            "color": "00adef",
            "texttrack": "",
            "on_site": 0,
            "app_id": "",
            "muted": 0,
            "dnt": 0,
            "player_id": "",
            "api": null,
            "editor": false,
            "context": "embed.main",
            "time": 0,
            "outro": "beginning",
            "log_plays": 1,
            "quality": null,
            "transparent": 1,
            "loop": 1,
            "autoplay": 0
        },
        "view": 1,
        "vimeo_url": "vimeo.com"
    };
    if (!config.request) {
        return;
    }
    if (typeof config.request === 'object' && 'error' in config.request) {
        if ('html' in config.request) {
            document.documentElement.innerHTML = config.request.html.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
        }
        return;
    }
    var isIframe = (function() {
        try {
            return window.self !== window.top;
        } catch (e) {
            return true;
        }
    }());
    if (!isIframe && /twitter/i.test(navigator.userAgent) && config.video.url) {
        window.location = config.video.url;
    }
    if (config.request.lang) {
        document.documentElement.setAttribute('lang', config.request.lang);
    }
    var fullscreenSupport = 'exitFullscreen' in document || 'webkitExitFullscreen' in document || 'webkitCancelFullScreen' in document || 'mozCancelFullScreen' in document || 'msExitFullscreen' in document || 'webkitEnterFullScreen' in document.createElement('video');
    var inlineSvgSupport = (function() {
        var div = document.createElement('div');
        div.innerHTML = '<svg />';
        return (div.firstChild && div.firstChild.namespaceURI) === 'http://www.w3.org/2000/svg';
    }());
    var windowsPhone = /MSIE 9/.test(navigator.userAgent) && /Windows Phone/.test(navigator.userAgent);
    var IE10 = /IE 10/.test(navigator.userAgent);
    var usePlayer = fullscreenSupport || IE10 || windowsPhone;
    var firstScript = document.getElementsByTagName('script')[0];
    var script = document.createElement('script');
    var jsDone = false;
    var playerObject = false;
    if (!inlineSvgSupport) {
        usePlayer = false;
    }
    if (!usePlayer) {
        var placeholder = document.querySelector('.vp-placeholder');
        if (placeholder && placeholder.parentNode) {
            placeholder.parentNode.removeChild(placeholder);
        }
    }
    if (usePlayer) {
        player.className = 'player loading';
        var startTime = new Date().getTime();
        script.src = config.request.urls.js;
        firstScript.parentNode.insertBefore(script, firstScript);
        script['onreadystatechange' in script ? 'onreadystatechange' : 'onload'] = function() {
            if (!jsDone && (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete')) {
                jsDone = true;
                playerObject = new VimeoPlayer(player, config, cssDone || {
                    link: link,
                    startTime: startTime
                });
            }
        };
        var cssDone = false;
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = config.request.urls.css + (typeof cacheBuster === 'undefined' ? '' : cacheBuster);
        document.getElementsByTagName('head')[0].appendChild(link);
        link.onload = function() {
            cssDone = true;
        };
    } else {
        player.innerHTML = '<div class="fallback"><iframe title="vimeo-player" src="/video/318088926/fallback?js&amp;referrer=' + encodeURIComponent(config.request.referrer) + '" frameborder="0"></iframe></div>';
    }
    if (!config.request.flags.dnt && !config.embed.dnt) {
        window._vuid = [
            ['pid', config.request.session]
        ];
        var vim = document.createElement('script');
        vim.async = true;
        vim.src = config.request.urls.vuid_js;
        firstScript.parentNode.insertBefore(vim, firstScript);
    }
}(document, document.getElementById('player'))); 
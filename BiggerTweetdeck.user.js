// ==UserScript==
// @name         Bigger Tweetdeck
// @version      1.0.0
// @namespace    https://github.com/trueFireblade/BiggerTweetdeck
// @icon         https://tweetdeck.twitter.com/favicon.ico
// @description  Make tweetdeck readable
// @author       trueFireblade aka Anniiii
// @match        https://tweetdeck.twitter.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let colStyle = document.createElement('style');
    colStyle.innerText = '.column{width:47.1vw !important; font-size: 22px ! important;}' + // Wider columns
        'html.dark input, html.dark select, html.dark textarea{ font-size: 22px ! important;}' + // Input text size
		'html.dark .txt-size--12 {font-size: 22px ! important;}' + // Counter text sizehtml.dark .txt-size-variable--12 {
    font-size: 16px!important;
}
		'html.dark .Icon:before, html.dark .icon:before {font-size: 22px ! important;}' + // Icon text size
		'html.dark .margin-l--2 {margin-left: 8px ! important;}'+ // Ofset counter from icons
        'html.dark .margin-l--3 {margin-left: 8px ! important;}'+
        'html.dark .txt-size-variable--12 {font-size: 16px!important;}'+
		'html.dark .column-title {font-size: 26px ! important;}'+ // Set title font size
        'column-header, .column-header .column-heading {max-height: 80px;}' +
        'html.dark .column-header .column-heading {max-height: 80px;}' +
        'html.dark .column-title .attribution {font-size: 18px ! important;}' +
        'html.dark .column-header-title {line-height: 24px;}' +
        'html.dark .account-link .username {font-size: 16px!important;}';
    document.getElementsByTagName('head')[0].appendChild(colStyle);

})();

const $ = require('cash-dom');
const Cookies = require('js-cookie');
const COOKIE_NAME = 'cookie-consent';

$(document).ready(function () {
    /**
     * Navbar Burger
     */
    $(".navbar-burger").on('click', function () {
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    });

    /**
     * Navbar mark active
     */
    $('a.navbar-item').removeClass('is-active');

    if (location.href.endsWith('disclaimer.html')){
        $('a.navbar-item:nth-child(2)').addClass('is-active');
    } else {
        $('a.navbar-item:nth-child(1)').addClass('is-active');
    }

    /**
     * Cookie handling for cookiebar.
     */
    let cookieVal = Cookies.get(COOKIE_NAME);
    if (cookieVal != 'YES') {
        $('#cookiebar').removeClass('is-hidden');
    }
    $('#btn-cookiebar-ok').on('click', function () {
        Cookies.set(COOKIE_NAME, 'YES');
        $('#cookiebar').addClass('is-hidden');
    });
    $('#btn-cookiebar-delete').on('click', function () {
        $('#cookiebar').addClass('is-hidden');
    });

    console.log('Test abcd xxx');
});

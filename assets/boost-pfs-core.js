/** VERSION: 1.8.43.**/
/** Please don't modify or unzip this content. It will be updated regularly **/
var BoostPFS = (function (t) {
  function e(e) {
    for (
      var r, a, l = e[0], s = e[1], c = e[2], p = 0, f = [];
      p < l.length;
      p++
    )
      (a = l[p]),
        Object.prototype.hasOwnProperty.call(i, a) && i[a] && f.push(i[a][0]),
        (i[a] = 0);
    for (r in s) Object.prototype.hasOwnProperty.call(s, r) && (t[r] = s[r]);
    for (u && u(e); f.length; ) f.shift()();
    return o.push.apply(o, c || []), n();
  }
  function n() {
    for (var t, e = 0; e < o.length; e++) {
      for (var n = o[e], r = !0, l = 1; l < n.length; l++) {
        var s = n[l];
        0 !== i[s] && (r = !1);
      }
      r && (o.splice(e--, 1), (t = a((a.s = n[0]))));
    }
    return t;
  }
  var r = {},
    i = { 0: 0 },
    o = [];
  function a(e) {
    if (r[e]) return r[e].exports;
    var n = (r[e] = { i: e, l: !1, exports: {} });
    return t[e].call(n.exports, n, n.exports, a), (n.l = !0), n.exports;
  }
  (a.m = t),
    (a.c = r),
    (a.d = function (t, e, n) {
      a.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (a.r = function (t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 });
    }),
    (a.t = function (t, e) {
      if ((1 & e && (t = a(t)), 8 & e)) return t;
      if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (a.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var r in t)
          a.d(
            n,
            r,
            function (e) {
              return t[e];
            }.bind(null, r)
          );
      return n;
    }),
    (a.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return a.d(e, 'a', e), e;
    }),
    (a.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (a.p = '');
  var l = (window.webpackJsonpBoostPFS = window.webpackJsonpBoostPFS || []),
    s = l.push.bind(l);
  (l.push = e), (l = l.slice());
  for (var c = 0; c < l.length; c++) e(l[c]);
  var u = s;
  return o.push([189, 1]), n();
})({
  0: function (t, e, n) {
    'use strict';
    n(22),
      n(23),
      n(80),
      n(38),
      n(24),
      n(9),
      n(25),
      n(170),
      n(97),
      n(115),
      n(48),
      n(21),
      n(30),
      n(34),
      n(41),
      n(54),
      n(149),
      n(81),
      n(98),
      n(47),
      n(82),
      n(116),
      n(40),
      n(66),
      n(83),
      n(27),
      n(14),
      n(15),
      n(16),
      n(11),
      n(13),
      n(12);
    var r = n(1),
      i = n.n(r),
      o = n(2),
      a = n(3),
      l = n(4),
      s = n(6),
      c = {
        isFullWidthMobile: function () {
          return (
            k.isMobile() &&
            'style1' == o.a.getSettingValue('search.suggestionMobileStyle')
          );
        },
        isStyle2: function () {
          return (
            !k.isMobile() &&
            'style2' === o.a.getSettingValue('search.suggestionStyle')
          );
        },
        isStyle3: function () {
          return (
            (!k.isMobile() &&
              'style3' === o.a.getSettingValue('search.suggestionStyle')) ||
            '2-overlay-fullwidth' ===
              o.a.getSettingValue('search.suggestionColumn')
          );
        },
        getListSuggestionType: function () {
          var t = o.a.getSettingValue('search.suggestionBlocks'),
            e = [];
          return (
            t.forEach(function (t) {
              ['products', 'suggestions', 'collections', 'pages'].includes(
                t.type
              ) &&
                'active' == t.status &&
                e.push(t.type);
            }),
            4 == e.length ? [] : e
          );
        },
      },
      u = {
        checkExistFilterOptionParam: function () {
          for (var t in Globals.queryParams)
            if (t.indexOf('pf_') > -1) return !0;
          return !1;
        },
        encodeURIParamValue: function (t) {
          return encodeURIComponent(t)
            .replace(/&/g, '%26')
            .replace(/'/g, '%27')
            .replace(/\*/g, '%2A');
        },
        showFilterTree: function () {
          i()('.' + l.a.filterTree).css({ display: '' }),
            i()('.boost-pfs-filter-tree-mobile-button').css({ display: '' }),
            i()('.boost-pfs-filter-left-col').css({ display: '' }),
            i()('.boost-pfs-filter-right-col, .boost-pfs-filter-right').css({
              width: '',
            }),
            i()('.boost-pfs-filter-tree-desktop-button').css({ display: '' }),
            i()('.boost-pfs-filter-in-collection-search-hide').css({
              display: '',
            }),
            i()('.boost-pfs-filter-tree-h-wrapper').css({ display: '' });
        },
        hideFilterTree: function () {
          i()('.' + l.a.filterTree).css({ display: 'none' }),
            i()('.boost-pfs-filter-tree-mobile-button').css({
              display: 'none',
            }),
            i()('.boost-pfs-filter-left-col').css({ display: 'none' }),
            i()('.boost-pfs-filter-right-col, .boost-pfs-filter-right').css({
              width: '100%',
            }),
            i()('.boost-pfs-filter-tree-desktop-button').css({
              display: 'none',
            }),
            i()('.boost-pfs-filter-in-collection-search-hide').css({
              display: 'none',
            }),
            i()('.boost-pfs-filter-tree-h-wrapper').css({ display: 'none' });
        },
      },
      p = (n(204), n(7));
    function f(t) {
      return (f =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    var h = function () {
        return o.a.getSettingValue('general.paginationTypeAdvanced');
      },
      y = function () {
        return 'load_more' == o.a.getSettingValue('general.paginationType');
      },
      d = function () {
        return 'infinite' == o.a.getSettingValue('general.paginationType');
      },
      g = {
        getSortingList: function () {
          var t = o.a.getSettingValue('general.sortingList'),
            e = o.a.getSettingValue('general.customSortingList');
          if ('' != e)
            for (var n = (t = e.trim().split('|')).length - 1; n >= 0; n--)
              '' == t[n] && t.splice(n, 1);
          var r = o.a.getSettingValue('general.extraSortingList');
          if ((r && (t = t.concat(r.split('|'))), k.isSearchPage())) {
            var i = k.findIndexArray('manual', t);
            i >= 0 && t.splice(i, 1);
          } else if (
            !k.isCollectionPage() ||
            (k.isCollectionPage() &&
              !o.a.getSettingValue('general.enableCollectionSearch'))
          ) {
            var a = k.findIndexArray('relevance', t);
            a >= 0 && t.splice(a, 1);
          }
          for (var l = {}, s = 0; s < t.length; s++) {
            var c = p.a.sortingList[t[s]];
            if (r.length > 0 && r.indexOf(t[s]) > -1) {
              var u = t[s].replace(/-/g, '_');
              c = p.a[u];
            }
            if (((l[t[s]] = c), p.a.sortByOptions)) {
              var f = p.a.sortByOptions[t[s]];
              f && f.length > 0 && (l[t[s]] = f);
            }
          }
          return l;
        },
        getDefaultSorting: function (t) {
          var e = o.a.getSettingValue('default_sort_order'),
            n = '';
          return (
            void 0 === t &&
              (t = k.isSearchPage()
                ? 'search'
                : k.isCollectionPage()
                ? boostPFSConfig.general.collection_id
                : void 0),
            'object' == f(e) &&
              void 0 !== t &&
              ((n = e[(t = t.toString())]) ||
                (n = 'search' == t ? 'relevance' : e.all)),
            n
          );
        },
        getProductMetafield: function (t, e, n) {
          if (t.hasOwnProperty('metafields')) {
            var r = t.metafields.filter(function (t) {
              return t.namespace == e && t.key == n;
            });
            if (void 0 !== r[0]) return r[0].value;
          }
          return null;
        },
        isAdvancedPaginationType: h,
        buildProductItemUrl: function (t, e) {
          var n = k.getWindowLocation().search.substring(1),
            r = window.location.pathname,
            i = r.split('/'),
            a = '',
            l = Shopify && Shopify.routes && void 0 !== Shopify.routes.root;
          o.a.getSettingValue('general.useShopifyRouteForMultiLanguageURL') && l
            ? (a = Shopify.routes.root.replace(/\/$/, ''))
            : i.indexOf(boostPFSAppConfig.general.current_locale) > -1 &&
              (a = '/' + boostPFSAppConfig.general.current_locale);
          var s =
            'object' === f(t) && t.hasOwnProperty('handle') ? t.handle : t;
          if (
            (e =
              void 0 !== e
                ? e
                : o.a.getSettingValue('general.addCollectionToProductUrl'))
          ) {
            if (
              '/' == r ||
              k.isSearchPage() ||
              k.isVendorPage() ||
              k.isTypePage()
            )
              return (c = a + '/collections/all/products/') + s;
            if (k.isTagPage()) {
              var c = a + '/collections/',
                u = i.indexOf('collections') + 1;
              return i.length >= 4
                ? c + i[u] + '/products/' + s
                : '/collections/all/products/' + s;
            }
            if (n.indexOf('cache:') > -1) {
              var p = 'all',
                h = n.split('&')[0].split('?')[0].split('collections/');
              return (
                h.length > 1 &&
                  (p = h[1].indexOf('/') > -1 ? h[1].split('/')[0] : h[1]),
                '/collections/' +
                  (p = p.replace(
                    /[`~!@#$%^&*()_|+\=?;:'",.<>\{\}\[\]\\\/]/g,
                    ''
                  )) +
                  '/products/' +
                  s
              );
            }
            (u = i.indexOf('collections') + 1), (c = a + '/collections/');
            return void 0 !== i[2]
              ? c + i[u] + '/products/' + s
              : window.location.pathname + '/products/' + s;
          }
          return a + '/products/' + s;
        },
        buildProductItemUrlWithVariant: function (t) {
          var e =
            t.split_product && t.variants ? '?variant=' + t.variants[0].id : '';
          return k.buildProductItemUrl(t, !1) + e;
        },
        buildProductItemVendorUrl: function (t) {
          return (
            window.location.protocol +
            '//' +
            window.location.hostname +
            '/collections/vendors?q=' +
            u.encodeURIParamValue(t)
          );
        },
        removePageParamFromUrl: function (t) {
          if (a.a.queryParams.hasOwnProperty('page')) {
            var e =
              a.a.queryParams.page && !isNaN(a.a.queryParams.page)
                ? a.a.queryParams.page
                : 1;
            t = t
              .replace('&page=' + e, '')
              .replace('?page=' + e + '&', '?')
              .replace('?page=' + e, '');
          }
          return k.isBadUrl(t) ? '' : t;
        },
        removeCollectionScopeParamFromUrl: function (t) {
          if (a.a.queryParams.hasOwnProperty('collection_scope')) {
            var e =
              a.a.queryParams.collection_scope &&
              !isNaN(a.a.queryParams.collection_scope)
                ? a.a.queryParams.collection_scope
                : 0;
            t = t.replace('&collection_scope=' + e, '');
          }
          return k.isBadUrl(t) ? '' : t;
        },
        buildToolbarLink: function (t, e, n) {
          var r = window.location.origin + window.location.pathname;
          switch (t) {
            case 'page':
            case 'limit':
            case 'sort':
            case 'display':
              if ('page' == t && 1 == n) break;
              r += '?' + t + '=' + n;
          }
          return r;
        },
        isDefaultPaginationType: function () {
          return 'default' == o.a.getSettingValue('general.paginationType');
        },
        isLoadMorePaginationType: y,
        isInfiniteLoadingPaginationType: d,
        isLoadPreviousPagePaginationType: function () {
          return (
            (y() || d()) &&
            h() &&
            o.a.getSettingValue('general.activeLoadPreviousPage')
          );
        },
        isNoFilterResult: function (t, e) {
          return (
            t <= 0 &&
            !(
              'init' === e &&
              o.a.getSettingValue('general.productAndVariantAvailable') &&
              o.a.getSettingValue('general.availableAfterFiltering')
            )
          );
        },
        compileShopifyProductVariables: function (t, e) {
          return (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e =
            (e = (e = (e = (e = (e = e.replace(
              /{{product.title}}/g,
              t.title
            )).replace(/{{product.vendor}}/g, t.vendor)).replace(
              /{{product.url}}/g,
              k.buildProductItemUrl(t)
            )).replace(/{{product.available}}/g, t.available)).replace(
              /{{product.compare_at_price}}/g,
              k.formatMoney(t.compare_at_price_min)
            )).replace(
              /{{product.compare_at_price_min}}/g,
              k.formatMoney(t.compare_at_price_min)
            )).replace(
            /{{product.compare_at_price_max}}/g,
            k.formatMoney(t.compare_at_price_max)
          )).replace(
            /{{product.description}}/g,
            void 0 !== t.body_html && null != t.body_html ? t.body_html : ''
          )).replace(/{{product.handle}}/g, t.handle)).replace(
            /{{product.id}}/g,
            t.id
          )).replace(/{{product.price}}/g, k.formatMoney(t.price_min))).replace(
            /{{product.price_max}}/g,
            k.formatMoney(t.price_max)
          )).replace(
            /{{product.price_min}}/g,
            k.formatMoney(t.price_min)
          )).replace(
            /{{product.template_suffix}}/g,
            void 0 !== t.template_suffix && null != t.template_suffix
              ? t.template_suffix
              : ''
          )).replace(
            /{{product.percent_sale_min}}/g,
            t.percent_sale_min > 0 ? t.percent_sale_min : ''
          )).replace(/{{product.type}}/g, t.product_type)).replace(
            /{{product.sku}}/g,
            void 0 !== t.skus && null != t.skus && t.skus.length > 0
              ? t.skus[0]
              : ''
          ));
        },
        compileShopifyProductMetafield: function (t, e) {
          if (-1 != e.indexOf('product.metafields')) {
            var n = e.match(/\{\{product.metafields(.*?)\}\}/g),
              r = 0,
              i = '',
              o = '',
              a = '',
              l = '';
            if (n.length > 0) {
              r = n.length;
              for (var s = 0; s < r; s++)
                4 ==
                  (o = n[s]
                    .replace(/\{\{/g, '')
                    .replace(/\}\}/g, '')
                    .split('.')).length &&
                  ((i = o[2]),
                  (a = o[3]),
                  (l = k.getProductMetafield(t, i, a) || ''),
                  (e = e.replaceAll(n[s], l)));
            }
          }
          return e;
        },
      };
    function m(t) {
      return (m =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    var b = function (t, e) {
        t || (t = boostPFSConfig.general.no_image_url);
        e = void 0 !== e ? e : 'large';
        for (
          var n = o.a.getSettingValue('general.imageExtension'), r = 0;
          r < n.length;
          r++
        )
          t = t.replace('.' + n[r] + '?', '_' + e + '.' + n[r] + '?');
        return t;
      },
      v = function () {
        return i()('<p>' + boostPFSConfig.shop.money_format + '</p>')
          .text()
          .replace(/{{[^}]*}}/g, '');
      },
      S = null,
      T = function () {
        return C.getWindowLocation().href.includes(
          'webcache.googleusercontent.com'
        )
          ? C.getWindowLocation().search.indexOf('search?') > -1
          : window.location.pathname.indexOf('/search') > -1;
      },
      O = function (t, e) {
        e || (e = C.getWindowLocation().href),
          (t = t.replace(/[\[\]]/g, '\\$&'));
        var n = new RegExp('[?&]' + t + '(=([^&#]*)|&|#|$)').exec(e);
        return n
          ? n[2]
            ? decodeURIComponent(n[2].replace(/\+/g, ' '))
            : ''
          : null;
      },
      P = function (t) {
        for (var e in t)
          if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
        return JSON.stringify(t) === JSON.stringify({});
      },
      w = function (t, e, n, r) {
        if (null != n) {
          for (var i = 0; i < e.length; i++)
            if (
              (void 0 !== r &&
                0 == r &&
                ((e[i][n] = e[i][n].toLowerCase()), (t = t.toLowerCase())),
              e[i][n] == t)
            )
              return i;
        } else
          for (i = 0; i < e.length; i++)
            if (
              (void 0 !== r &&
                0 == r &&
                ((e[i] = e[i].toLowerCase()), (t = t.toLowerCase())),
              e[i] == t)
            )
              return i;
        return -1;
      },
      _ = function (t) {
        if (t && 'string' == typeof t) {
          var e = t.replace(/<.*?>/g, '');
          return (
            (e = e
              .replace(/&amp;/g, '&')
              .replace(/&lt;/g, '<')
              .replace(/&gt;/g, '>')
              .replace(/&quot;/g, '"')
              .replace(/&#x27;/g, "'")
              .replace(/&#36;/g, '$')
              .replace(/&#x2F;/g, '/')
              .replace(/&/g, '&amp;')
              .replace(/</g, '&lt;')
              .replace(/>/g, '&gt;')
              .replace(/"/g, '&quot;')
              .replace(/'/g, '&#x27;')
              .replace(/\$/g, '&#36;')
              .replace(/\//g, '&#x2F;')),
            e
          );
        }
        return void 0 === t || 'undefined' == t ? '' : t;
      },
      C = {
        escape: function (t, e) {
          return (
            (e = e ? '&#13;' : '\n'),
            ('' + t)
              .replace(/&/g, '&amp;')
              .replace(/'/g, '&apos;')
              .replace(/"/g, '&quot;')
              .replace(/</g, '&lt;')
              .replace(/>/g, '&gt;')
              .replace(/\r\n/g, e)
              .replace(/[\r\n]/g, e)
          );
        },
        unescape: function (t) {
          return ('' + t)
            .replace(/&amp;/g, '&')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&quot;/g, '"')
            .replace(/&#x27;/g, "'")
            .replace(/&#36;/g, '$')
            .replace(/&#x2F;/g, '/');
        },
        findIndexArray: w,
        getParam: O,
        getSearchTerm: function () {
          return C.stripHtml(O(a.a.searchTermKey));
        },
        getValueInObjectArray: function (t, e, n, r) {
          void 0 === n && (n = 'key'), void 0 === r && (r = 'values');
          var i = w(t, e, n);
          return i > -1 && e[i].hasOwnProperty(r) ? e[i][r] : '';
        },
        getFilePath: function (t, e, n) {
          (e = void 0 !== e ? e : 'png'), (n = void 0 !== n ? n : '');
          var r = a.a.fileUrl.split('?')[0];
          return (r += t + '.' + e + (n ? '?v=' + n : ''));
        },
        getNumberDecimals: function (t) {
          var e = t.toString().split('.');
          return e.length > 1 ? e[1].length : 0;
        },
        isMobile: function () {
          return (
            S ||
              ((S = i()(window).width()),
              i()(window).on('resize', function () {
                S = i()(window).width();
              })),
            S <= o.a.getSettingValue('general.breakpointMobile')
          );
        },
        isMobileDevice: function () {
          return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          );
        },
        isTablet: function () {
          return (
            S ||
              ((S = i()(window).width()),
              i()(window).on('resize', function () {
                S = i()(window).width();
              })),
            S <= o.a.getSettingValue('general.breakpointTablet') &&
              S > o.a.getSettingValue('general.breakpointMobile')
          );
        },
        isiOS: function () {
          return (
            /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
          );
        },
        isSafari: function () {
          return (
            /Safari/.test(navigator.userAgent) &&
            !/Chrome/.test(navigator.userAgent)
          );
        },
        isBackButton: function () {
          return (
            window.performance &&
            window.performance.navigation &&
            2 == window.performance.navigation.type
          );
        },
        isCartPage: function () {
          return window.location.pathname.indexOf('/cart') > -1;
        },
        isProductPage: function () {
          return window.location.pathname.indexOf('/products') > -1;
        },
        isCollectionPage: function () {
          return window.location.pathname.includes('/collections');
        },
        isSearchPage: T,
        isVendorPage: function () {
          return window.location.pathname.indexOf('/collections/vendors') > -1;
        },
        isTagPage: function () {
          return (
            void 0 !== a.a.currentTags &&
            null !== a.a.currentTags &&
            a.a.currentTags.length > 0
          );
        },
        isTypePage: function () {
          return window.location.pathname.indexOf('/collections/types') > -1;
        },
        isGLHMobile: function () {
          return (
            navigator &&
            navigator.userAgent &&
            navigator.userAgent.includes(atob('TGlnaHRob3VzZQ==')) &&
            C.isMobile() &&
            !C.isSearchPage()
          );
        },
        mergeObject: function t(e, n) {
          for (var r in n)
            try {
              e[r] =
                n[r].constructor == Object
                  ? P(n[r])
                    ? e[r] || {}
                    : t(e[r], n[r])
                  : n[r];
            } catch (t) {
              e[r] = n[r];
            }
          return e;
        },
        optimizeImage: b,
        getFeaturedImage: function (t, e) {
          e = void 0 !== e ? e : 'large';
          var n = b(boostPFSConfig.general.no_image_url, e);
          return (
            t.length > 0 &&
              (n = 'object' === m(t[0]) ? b(t[0].src, e) : b(t[0], e)),
            n
          );
        },
        getFilterTagImage: function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            r = e.widthUrl,
            i = void 0 === r ? 530 : r,
            o = n.width,
            a = void 0 === o ? i : o,
            l = n.widths,
            s = void 0 === l ? '352, 832, 1200, 1920' : l,
            c = n.sizes,
            u = void 0 === c ? '' : c,
            p = n.srcset,
            f = void 0 === p ? '' : p,
            h = n.alt,
            y = void 0 === h ? '' : h,
            d = n.classes,
            g = void 0 === d ? '' : d,
            m = n.loading,
            b = void 0 === m ? '' : m,
            v = '';
          if (!t || 'string' != typeof t) return v;
          if (
            ((v += '<img '),
            (v += 'src="'
              .concat(C.optimizeImage(t, i), '&amp;width=')
              .concat(i, '" ')),
            'string' == typeof y &&
              'nil' != y &&
              (v += 'alt="'.concat(y, '" ')),
            g &&
              'string' == typeof g &&
              'nil' != g &&
              (v += 'class='.concat(g, ' ')),
            a && 'nil' != a && (v += 'width="'.concat(a, '" ')),
            !b ||
              'string' != typeof b ||
              ('eager' !== b && 'lazy' !== b) ||
              (v += 'loading="'.concat(b, '" ')),
            'nil' !== f && s && 'string' == typeof s)
          ) {
            v += 'srcset="';
            var S = s.split(', ');
            Array.isArray(S) &&
              S.length > 0 &&
              (S.forEach(function (e, n) {
                (v += ''
                  .concat(C.optimizeImage(t, e + 'x'), ' ')
                  .concat(e, 'w')),
                  n < S.length - 1 && (v += ', ');
              }),
              (v += '" '));
          }
          return (
            u && 'string' == typeof u && (v += 'sizes="'.concat(u, '"')),
            (v += '/>')
          );
        },
        slugify: function (t) {
          if (null == t || 'object' == m(t)) return '';
          if ('string' != typeof t) {
            if ('function' != typeof t.toString) return '';
            t = t.toString();
          }
          t = t.toLowerCase();
          for (
            var e = 'àáäâãèéëêẽìíïîĩòóöôõùúüûũñç·/_,:;', n = 0, r = e.length;
            n < r;
            n++
          )
            t = t.replace(
              new RegExp(e.charAt(n), 'g'),
              'aaaaaeeeeeiiiiiooooouuuuunc--_---'.charAt(n)
            );
          for (
            var i = 'ÁáÄäČčĎďÉéěÍíŇňÓóÖöŘřŠšŤťÚúůÝýŽž'.length, o = 0;
            o < i;
            o++
          )
            t = t.replace(
              new RegExp('ÁáÄäČčĎďÉéěÍíŇňÓóÖöŘřŠšŤťÚúůÝýŽž'.charAt(o), 'g'),
              'AaAaCcDdEeeIiNnOoOoRrSsTtUuuYyZz'.charAt(o)
            );
          for (
            var a = ['AE', 'ae', 'O', 'o', 'A', 'a'],
              l = 'ÆæØøÅå'.length,
              s = 0;
            s < l;
            s++
          )
            t = t.replace(new RegExp('ÆæØøÅå'.charAt(s), 'g'), a[s]);
          return (t = t.replace(/'/g, '').replace(/"/g, ''))
            .replace(/[\s\/]+/g, '-')
            .replace(/[`~!@#$%^&*()|+\-=?;:'",.<>\{\}\[\]\\\/]/g, '-')
            .replace(/\-\-+/g, '-')
            .replace(/^-+/, '')
            .replace(/-+$/, '');
        },
        capitalize: function (t, e, n) {
          n = void 0 !== n && n;
          return (
            (e = void 0 !== e && e) && (t = t.toLowerCase()),
            n
              ? t.charAt(0).toUpperCase() + t.slice(1)
              : t.replace(/(?:^|\s)\S/g, function (t) {
                  return t.toUpperCase();
                })
          );
        },
        textify: function (t, e) {
          e = void 0 !== e ? e : '-';
          for (var n = t.split(e), r = '', i = 0; i < n.length; i++)
            (r += n[i].charAt(0).toUpperCase() + n[i].slice(1)),
              i < n.length - 1 && (r += ' ');
          return r;
        },
        stripHtml: _,
        stripScriptTag: function (t) {
          if (t) return t.replace(/<script[^>]*>.*?<\/script>/gi, '');
        },
        truncateByWord: function (t, e, n) {
          return (
            void 0 === n && (n = '...'),
            (t =
              t.split(' ').length > e
                ? t.split(' ').splice(0, e).join(' ') + n
                : t.split(' ').splice(0, e).join(' '))
          );
        },
        removeDecimal: function (t, e) {
          e =
            void 0 !== e ? e : o.a.getSettingValue('general.decimalDelimiter');
          var n = new RegExp('(\\' + e + '\\d+)+', 'gi');
          return t.replace(n, '');
        },
        formatMoney: function (t, e, n) {
          if (
            (void 0 === e && (e = a.a.moneyFormat),
            ('money_with_currency' == e ||
              o.a.getSettingValue('general.moneyFormatWithCurrency')) &&
              (e = a.a.moneyFormatWithCurrency),
            void 0 === n)
          )
            n = !1;
          'string' == typeof t && (t = t.replace('.', ''));
          var r = '',
            i = /\{\{\s*(\w+)\s*\}\}/,
            l = e || '${{amount}}';
          function s(t, e) {
            return void 0 === t ? e : t;
          }
          function c(t, e, r, i) {
            if (
              ((e = s(e, 2)),
              (r = s(r, ',')),
              (i = s(i, '.')),
              isNaN(t) || null == t)
            )
              return 0;
            var o = (t = parseFloat(t).toFixed(e)).split('.'),
              a = o[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + r),
              l = o[1] ? i + o[1] : '';
            return 1 == n ? (a + l).replace(/((\,00)|(\.00))$/g, '') : a + l;
          }
          var u = l.match(i);
          switch (u && u.length > 1 ? u[1] : '') {
            case 'amount':
              r = c(t, 2);
              break;
            case 'amount_no_decimals':
              r = c(t, 0);
              break;
            case 'amount_with_comma_separator':
              r = c(t, 2, '.', ',');
              break;
            case 'amount_no_decimals_with_comma_separator':
              r = c(t, 0, '.', ',');
              break;
            case 'amount_with_space_separator_no_comma':
              r = c(t, 2);
              break;
            case 'amount_no_decimals_with_space_separator':
              r = c(t, 0, ' ', '.');
              break;
            default:
              r = c(t, 2);
          }
          return (
            (l = l.replace(i, r)),
            o.a.getSettingValue('general.enable3rdCurrencySupport')
              ? C.moneyWrapper(l)
              : l
          );
        },
        moneyWrapper: function (t) {
          return '<span class="money">{{money}}</span>'.replace(
            /{{money}}/g,
            _(t)
          );
        },
        formatNumberWithSeparator: function (t, e, n, r, i) {
          isNaN(t) && (t = 0),
            isNaN(e) && (e = 0),
            r || (r = '.' == n ? ',' : '.');
          var o = (t = parseFloat(t).toFixed(e)).toString().split('.'),
            a = o[0],
            l = o[1] ? o[1] : '';
          return (
            n && (a = a.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + n)),
            r && l && (l = i && /0+/.test(l) ? '' : r + l),
            a + l
          );
        },
        getCurrency: v,
        removeCurrencySymbol: function (t) {
          t = i()('<p>' + t + '</p>').text();
          for (var e = v().split(' '), n = 0; n < e.length; n++)
            t = t.replace(e[n].trim(), '');
          return t.trim();
        },
        isShopifyActiveCurrency: function () {
          return (
            'undefined' != typeof Shopify &&
            Shopify.hasOwnProperty('currency') &&
            Shopify.currency.hasOwnProperty('rate') &&
            1 != Shopify.currency.rate
          );
        },
        isEnableShopifyMultipleCurrencies: function () {
          return (
            o.a.hasOwnProperty('general') &&
            o.a.general.hasOwnProperty('currencies') &&
            o.a.general.currencies.length > 1 &&
            C.isShopifyActiveCurrency()
          );
        },
        isConvertCurrenciesOnFrontEnd: function () {
          var t = o.a.getSettingValue('currencyRoundingRules');
          return t && 'object' == m(t);
        },
        roundedPrice: function (t) {
          t = parseFloat(t).toFixed(2);
          var e = boostPFSAppConfig.general.current_currency
              .toLowerCase()
              .trim(),
            n = o.a.getSettingValue('currencyRoundingRules'),
            r = n && e && n.hasOwnProperty(e) ? n[e] : 0,
            i = C.getRoundingRange(!0);
          if (i) {
            var a = parseFloat(r);
            (t /= i), 1 == (a /= i) && (a = 0);
            var l = Math.floor(t);
            (t = (t - l).toFixed(2) > a ? l + 1 : l),
              (t *= i),
              0 == a && (r = 0),
              (t += parseFloat(r));
          }
          return t;
        },
        getRoundingRange: function (t) {
          void 0 === t && (t = !1);
          var e = boostPFSAppConfig.general.current_currency
              .toLowerCase()
              .trim(),
            n = o.a.getSettingValue('currencyRoundingRules'),
            r = n && e && n.hasOwnProperty(e) ? parseFloat(n[e]) : 0,
            i = !1;
          return (
            r > 0 &&
              -1 !=
                [
                  0.25, 0.5, 0.75, 0.9, 0.95, 0.99, 1, 25, 50, 75, 90, 95, 99,
                  100, 250, 500, 750, 900, 950, 999, 1e3,
                ].indexOf(r) &&
              ((i = 0.99),
              r > 100 ? (i = 999) : r > 10 ? (i = 99) : r > 1 && (i = 9),
              t && (i = r > 1 ? i + 1 : i + 0.01)),
            i
          );
        },
        convertPriceBasedOnActiveCurrency: function (t, e) {
          if ((void 0 === e && (e = !0), !t || 0 == t)) return t;
          if (C.isEnableShopifyMultipleCurrencies()) {
            var n = t * Shopify.currency.rate;
            t = e ? C.roundedPrice(n) : n;
          }
          return parseFloat(t);
        },
        convertPriceBasedOnPresentmentPrice: function (t) {
          var e = o.a.getSettingValue('general.currencies');
          if (void 0 !== e && e.length > 1) {
            var n = o.a
              .getSettingValue('general.current_currency')
              .toLowerCase()
              .trim();
            [
              'price_min',
              'price_max',
              'compare_at_price_min',
              'compare_at_price_max',
            ].forEach(function (e) {
              var r = e + '_' + n;
              void 0 !== t[r] && (t[e] = t[r]);
            });
          }
        },
        revertPriceToDefaultCurrency: function (t, e) {
          if (!t || 0 == t) return t;
          if (C.isEnableShopifyMultipleCurrencies()) {
            if (((t = C.roundedPrice(t)), e)) {
              var n = C.getRoundingRange();
              n && (t -= n);
            }
            return (t /= Shopify.currency.rate).toFixed(8);
          }
          return t;
        },
        reBuildUrlBaseOnLocale: function (t) {
          t = t.replace('https://', '').replace('http://', '');
          var e = Shopify && Shopify.routes && void 0 !== Shopify.routes.root;
          if (
            o.a.getSettingValue('general.useShopifyRouteForMultiLanguageURL') &&
            e
          )
            return Shopify.routes.root.replace(/\/$/, '') + t;
          var n = o.a.getSettingValue('general.current_locale'),
            r = o.a.getSettingValue('general.published_locales'),
            i = Object.keys(r);
          if (i.indexOf(n) < 0 || 1 == r[n]) return t;
          var a = t.split('/');
          return (
            a.length > 1 &&
              i.length &&
              n.length &&
              (i.indexOf(a[1]) > -1 ? (a[1] = n) : a.splice(1, 0, n)),
            a.join('/')
          );
        },
        getWindowLocation: function () {
          for (
            var t = window.location.href
                .replace(/%3C/g, '&lt;')
                .replace(/%3E/g, '&gt;'),
              e = [],
              n = 0;
            n < t.length;
            n++
          )
            e.push(t.charAt(n));
          var r = e
              .join('')
              .split('&lt;')
              .join('%3C')
              .split('&gt;')
              .join('%3E'),
            i = '',
            o = r.replace(/#.*$/, '');
          return (
            o.split('?').length > 1 &&
              (i = o.split('?')[1]).length > 0 &&
              (i = '?' + i),
            { pathname: window.location.pathname, href: r, search: i }
          );
        },
        setWindowLocation: function (t) {
          window.location.href = t;
        },
        isBadUrl: function (t) {
          try {
            t || (t = C.getWindowLocation().search);
            var e = decodeURIComponent(t).split('&'),
              n = !1;
            if (e.length > 0)
              for (var r = 0; r < e.length; r++) {
                var i = e[r];
                if ((n = C.isBadSearchTerm(i))) break;
              }
            return n;
          } catch (t) {
            return !0;
          }
        },
        isBadSearchTerm: function (t) {
          if ('string' == typeof t) {
            var e = new RegExp(
                [
                  'onabort',
                  'popstate',
                  'afterprint',
                  'beforeprint',
                  'beforeunload',
                  'blur',
                  'canplay',
                  'canplaythrough',
                  'change',
                  'click',
                  'contextmenu',
                  'copy',
                  'cut',
                  'dblclick',
                  'drag',
                  'dragend',
                  'dragenter',
                  'dragleave',
                  'dragover',
                  'dragstart',
                  'drop',
                  'durationchange',
                  'ended',
                  'error',
                  'focus',
                  'focusin',
                  'focusout',
                  'fullscreenchange',
                  'fullscreenerror',
                  'hashchange',
                  'input',
                  'invalid',
                  'keydown',
                  'keypress',
                  'keyup',
                  'load',
                  'loadeddata',
                  'loadedmetadata',
                  'loadstart',
                  'mousedown',
                  'mouseenter',
                  'mouseleave',
                  'mousemove',
                  'mouseover',
                  'mouseout',
                  'mouseout',
                  'mouseup',
                  'offline',
                  'online',
                  'pagehide',
                  'pageshow',
                  'paste',
                  'pause',
                  'play',
                  'playing',
                  'progress',
                  'ratechange',
                  'resize',
                  'reset',
                  'scroll',
                  'search',
                  'seeked',
                  'seeking',
                  'select',
                  'show',
                  'stalled',
                  'submit',
                  'suspend',
                  'timeupdate',
                  'toggle',
                  'touchcancel',
                  'touchend',
                  'touchmove',
                  'touchstart',
                  'unload',
                  'volumechange',
                  'waiting',
                  'wheel',
                ].join('=|on')
              ),
              n = (t.match(/</g) || []).length,
              r = (t.match(/>/g) || []).length,
              i = (t.match(/alert\(/g) || []).length,
              o = (t.match(/console\.log\(/g) || []).length,
              a = (t.match(/execCommand/g) || []).length,
              l = (t.match(/document\.cookie/g) || []).length,
              s = (t.match(/j.*a.*v.*a.*s.*c.*r.*i.*p.*t/g) || []).length,
              c = e.test(t);
            if (
              (n > 0 && r > 0) ||
              n > 1 ||
              r > 1 ||
              i ||
              o ||
              a ||
              l ||
              s ||
              c
            )
              return !0;
          }
          return !1;
        },
        debounce: function (t, e) {
          var n;
          return function () {
            var r = this,
              i = arguments,
              o = function () {
                t.apply(r, i);
              };
            clearTimeout(n), (n = setTimeout(o, e));
          };
        },
        iterateObject: function (t, e) {
          t &&
            'object' == m(t) &&
            Object.keys(t).forEach(function (n) {
              'object' == m(t[n])
                ? C.iterateObject(t[n])
                : 'function' == typeof e && (t[n] = e(t[n]));
            });
        },
        sticky: function (t, e, n) {
          if (null == t.attr('data-offset-top')) {
            var r = t.offset().top;
            t.attr('data-offset-top', r);
          }
          var a = function () {
            var r = !!(
                t.hasClass(l.a.filterTreeVertical) ||
                t.find(s.a.filterTreeVertical).length > 0
              ),
              a = t.outerWidth(),
              c = r ? t[0].scrollHeight : t.outerHeight(),
              u = window.innerHeight,
              p = Number(t.attr('data-offset-top')),
              f = i()(e).position().top + i()(e).outerHeight(),
              h = i()(e).offset().top + i()(e).outerHeight(),
              y =
                'boost-pfs-filter-tree' == t[0].classList[0] ||
                'boost-pfs-filter-tree-h-wrapper' == t[0].classList[0]
                  ? t[0].classList[0] + '-stick-body'
                  : 'boost-pfs-filter-tree-button-stick-wrapper-body',
              d = i()(e).height() <= u + 100,
              g = 0,
              m = i()(n);
            if (
              (m.length > 0 &&
                m.each(function (t, e) {
                  var n = e.getBoundingClientRect();
                  n.y >= 0 && n.height > 0
                    ? (g += n.height)
                    : i()(e)
                        .children()
                        .each(function (t, e) {
                          var n = e.getBoundingClientRect();
                          n.y >= 0 && n.height > 0 && (g += n.height);
                        });
                }),
              (p -= g),
              window.scrollY < p || h - p <= c || d)
            )
              t.removeClass('boost-pfs-filter-stick'),
                t.removeClass('boost-pfs-filter-absolute'),
                i()('body').removeClass('boost-pfs-filter-stick-body'),
                i()('body').removeClass(y),
                t.css({
                  position: 'initial',
                  width: '',
                  maxHeight: 'none',
                  overflow: 'visible',
                  visibility: 'visible',
                });
            else if (window.scrollY + c <= h) {
              t.addClass('boost-pfs-filter-stick'),
                t.removeClass('boost-pfs-filter-absolute'),
                i()('body').addClass('boost-pfs-filter-stick-body'),
                i()('body').addClass(y),
                t.css({
                  position: 'fixed',
                  width: r ? a : '',
                  maxHeight: window.innerHeight - g + 'px',
                  overflow: r ? 'auto' : 'visible',
                  visibility: 'visible',
                  top: g + 'px',
                });
              var b = o.a.getSettingValue('general.stickyChangeTopTimeout');
              'number' != typeof b && (b = 0),
                setTimeout(function () {
                  t.css({ top: g + 'px' });
                }, b);
            } else {
              t.removeClass('boost-pfs-filter-stick'),
                t.addClass('boost-pfs-filter-absolute'),
                i()('body').removeClass('boost-pfs-filter-stick-body'),
                i()('body').removeClass(y);
              var v = o.a.getSettingValue('general.stickyFixTopPos')
                ? f - p - c
                : f - c - g;
              t.css({
                position: 'absolute',
                top: v + 'px',
                width: r ? a : '',
                maxHeight: 'none',
                visibility: r ? 'visible' : 'hidden',
              });
            }
          };
          i()(window).off('scroll', a), i()(window).on('scroll', a), a();
        },
        addClassToBody: function () {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
          if (t && 'string' == typeof t) {
            var e = {
                enableApp: l.a.enableApp,
                enableFilter: l.a.enableFilter,
                enableInstantSearch: l.a.enableInstantSearch,
                variantsDisplay: l.a.variantsDisplay,
              },
              n = e[t];
            n && i()('body').addClass(n);
          }
        },
        InstantSearch: c,
        isFullWidthMobile: c.isFullWidthMobile,
        isStyle2: c.isStyle2,
        isStyle3: c.isStyle3,
        getListSuggestionType: c.getListSuggestionType,
        FilterTree: u,
        checkExistFilterOptionParam: u.checkExistFilterOptionParam,
        encodeURIParamValue: u.encodeURIParamValue,
        showFilterTree: u.showFilterTree,
        hideFilterTree: u.hideFilterTree,
        FilterResult: g,
        buildProductItemUrl: g.buildProductItemUrl,
        buildProductItemUrlWithVariant: g.buildProductItemUrlWithVariant,
        buildProductItemVendorUrl: g.buildProductItemVendorUrl,
        removePageParamFromUrl: g.removePageParamFromUrl,
        removeCollectionScopeParamFromUrl: g.removeCollectionScopeParamFromUrl,
        buildToolbarLink: g.buildToolbarLink,
        isDefaultPaginationType: g.isDefaultPaginationType,
        isLoadMorePaginationType: g.isLoadMorePaginationType,
        isInfiniteLoadingPaginationType: g.isInfiniteLoadingPaginationType,
        isLoadPreviousPagePaginationType: g.isLoadPreviousPagePaginationType,
        getSortingList: g.getSortingList,
        getDefaultSorting: g.getDefaultSorting,
        getProductMetafield: g.getProductMetafield,
        isNoFilterResult: g.isNoFilterResult,
        compileShopifyProductVariables: g.compileShopifyProductVariables,
        compileShopifyProductMetafield: g.compileShopifyProductMetafield,
      },
      k = (e.a = C);
  },
  10: function (t, e, n) {
    'use strict';
    n(30), n(83), n(24), n(9), n(25);
    function r(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    var i = (function () {
      function t() {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError('Cannot call a class as a function');
        })(this, t),
          (this.isInit = !1),
          (this.isRendered = !1),
          (this.isBoundEvent = !1),
          (this.children = []),
          (this.parent = null),
          (this.$element = null);
      }
      var e, n, i;
      return (
        (e = t),
        (n = [
          {
            key: 'refresh',
            value: function () {
              this._callAllInit(),
                this._callAllRender(),
                this._callAllBindEvents();
            },
          },
          { key: 'beforeInit', value: function () {} },
          { key: 'init', value: function () {} },
          { key: 'afterInit', value: function () {} },
          {
            key: 'isLoopThroughChild',
            value: function () {
              return !0;
            },
          },
          {
            key: 'isRender',
            value: function () {
              return !0;
            },
          },
          { key: 'beforeRender', value: function () {} },
          { key: 'render', value: function () {} },
          { key: 'afterRender', value: function () {} },
          {
            key: 'isBindEvents',
            value: function () {
              return !0;
            },
          },
          { key: 'beforeBindEvents', value: function () {} },
          { key: 'bindEvents', value: function () {} },
          { key: 'afterBindEvents', value: function () {} },
          {
            key: 'addComponent',
            value: function (t) {
              (t.parent = this), this.children.push(t);
            },
          },
          {
            key: 'removeComponent',
            value: function (t) {
              if (this.children && this.children.length > 0) {
                var e = this.children.indexOf(t);
                -1 !== e && this.children.splice(e, 1);
              }
            },
          },
          {
            key: '_callAllInit',
            value: function () {
              this.isInit || (this.beforeInit(), this.init()),
                this.children &&
                  this.children.length > 0 &&
                  this.isLoopThroughChild() &&
                  this.children.forEach(function (t) {
                    t._callAllInit();
                  }),
                this.isInit || (this.afterInit(), (this.isInit = !0));
            },
          },
          {
            key: '_callAllRender',
            value: function () {
              this.isRender() && this.beforeRender(),
                this.children &&
                  this.children.length > 0 &&
                  this.isLoopThroughChild() &&
                  this.children.forEach(function (t) {
                    t._callAllRender();
                  }),
                this.isRender() &&
                  (this.render(), this.afterRender(), (this.isRendered = !0));
            },
          },
          {
            key: '_callAllBindEvents',
            value: function () {
              this.isBindEvents() && this.beforeBindEvents(),
                this.children &&
                  this.children.length > 0 &&
                  this.isLoopThroughChild() &&
                  this.children.forEach(function (t) {
                    t._callAllBindEvents();
                  }),
                this.isBindEvents() &&
                  (this.bindEvents(),
                  this.afterBindEvents(),
                  (this.isBoundEvent = !0));
            },
          },
        ]) && r(e.prototype, n),
        i && r(e, i),
        t
      );
    })();
    e.a = i;
  },
  100: function (t, e, n) {
    'use strict';
    n(9), n(48), n(21), n(24), n(25), n(11), n(12), n(22), n(23);
    var r = n(3),
      i = n(0),
      o = function () {
        'string' != typeof r.a.currentTerm &&
          (r.a.currentTerm = i.a.stripHtml(r.a.currentTerm.toString())),
          (r.a.currentTerm = i.a.stripHtml(r.a.currentTerm.trim()));
        var t = '';
        r.a.suggestionCache.hasOwnProperty(i.a.unescape(r.a.currentTerm)) &&
          r.a.suggestionCache[i.a.unescape(r.a.currentTerm)].forEach(function (
            e
          ) {
            'redirect' == e.key &&
              e.values &&
              (t = (t = (t = e.values).replace(
                'https://' + r.a.shopDomain,
                ''
              )).replace('http://' + r.a.shopDomain, ''));
          });
        return t;
      },
      a = {
        getSearchRedirectUrl: o,
        checkForSearchRedirect: function (t) {
          if (t.data('search-submit')) {
            t.removeAttr('data-search-submit');
            var e = o();
            e
              ? i.a.setWindowLocation(e)
              : t.closest('form').trigger('submit', [!0]);
          }
        },
      };
    e.a = a;
  },
  121: function (t, e, n) {
    'use strict';
    n(21),
      n(22),
      n(23),
      n(27),
      n(9),
      n(24),
      n(25),
      n(17),
      n(18),
      n(19),
      n(14),
      n(15),
      n(16),
      n(11),
      n(13),
      n(12);
    var r = n(1),
      i = n.n(r),
      o = n(10),
      a = n(4),
      l = n(122),
      s = n(86),
      c = n(123),
      u = n(124),
      p = n(20),
      f = n(125),
      h = n(2),
      y = n(0),
      d = n(7);
    function g(t) {
      return (g =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function m(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function b(t, e) {
      return (b =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function v(t, e) {
      return !e || ('object' !== g(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function S(t) {
      return (S = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var T = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && b(t, e);
      })(g, t);
      var e,
        n,
        r,
        o = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = S(t);
            if (e()) {
              var i = S(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return v(this, n);
          };
        })(g);
      function g(t) {
        var e;
        return (
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, g),
          ((e = o.call(this)).type = t.type),
          (e.status = t.status),
          (e.maxSuggesionItems = t.number),
          (e.label = y.a.stripHtml(t.label)),
          (e.isShow = !1),
          (e.isShowDYM = !1),
          e.type &&
            e.type === p.a.ResultType.PRODUCTS &&
            (e.blockDym = new f.a()),
          (e.settings = {
            suggesionMaxItems: h.a.getSettingValue('search.suggesionMaxItems'),
          }),
          e
        );
      }
      return (
        (e = g),
        (n = [
          {
            key: 'init',
            value: function () {
              switch (this.type) {
                case p.a.ResultType.SUGGESTIONS:
                case p.a.ResultType.DEFAULT_SUGGESTIONS:
                case p.a.ResultType.RECENT_SEARCHES:
                case p.a.ResultType.NO_RESULT_SUGGESTIONS:
                  this.maxSuggesionItems = this.settings.suggesionMaxItems;
                  for (var t = 0; t < this.maxSuggesionItems; t++)
                    this.addComponent(new l.a());
                  break;
                case p.a.ResultType.PRODUCTS:
                case p.a.ResultType.DEFAULT_PRODUCTS:
                case p.a.ResultType.NO_RESULT_PRODUCTS:
                  for (
                    this.maxSuggesionItems = this.settings.suggesionMaxItems,
                      t = 0;
                    t < this.maxSuggesionItems;
                    t++
                  )
                    this.addComponent(new s.a());
                  break;
                case p.a.ResultType.COLLECTIONS:
                  for (t = 0; t < this.maxSuggesionItems; t++)
                    this.addComponent(new c.a());
                  break;
                case p.a.ResultType.PAGES:
                  for (t = 0; t < this.maxSuggesionItems; t++)
                    this.addComponent(new u.a());
              }
            },
          },
          {
            key: 'getTemplate',
            value: function (t) {
              switch (t) {
                case 'dym':
                  return '\n\t\t\t\t\t<li class="{{class.searchSuggestionItem}} {{class.searchSuggestion}}-dym" aria-label="Did you mean">{{dymContent}}</li>\n\t\t\t\t'.trim();
                default:
                  return '\n\t\t\t\t\t<div class="{{class.searchSuggestionGroup}}" data-group="{{type}}" aria-label="{{label}}">\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li class="{{class.searchSuggestionHeader}}-{{type}} {{class.searchSuggestionHeader}}" aria-label="{{label}}">{{label}}</li>\n\t\t\t\t\t\t\t{{resultItems}}\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t'.trim();
              }
            },
          },
          {
            key: 'compileTemplate',
            value: function () {
              if (
                !(('active' == this.status && this.isShow) || this._isShowDYM())
              )
                return '';
              var t;
              switch (this.type) {
                case p.a.ResultType.SUGGESTIONS:
                  t = h.a.getSettingValue(
                    'label.suggestion.instantSearchSuggestionsLabel'
                  );
                  break;
                case p.a.ResultType.COLLECTIONS:
                  t = h.a.getSettingValue(
                    'label.suggestion.instantSearchCollectionsLabel'
                  );
                  break;
                case p.a.ResultType.PRODUCTS:
                  t = h.a.getSettingValue(
                    'label.suggestion.instantSearchProductsLabel'
                  );
                  break;
                case p.a.ResultType.PAGES:
                  t = h.a.getSettingValue(
                    'label.suggestion.instantSearchPagesLabel'
                  );
                  break;
                case p.a.ResultType.NO_RESULT_SUGGESTIONS:
                  t = d.a.suggestion.noSearchResultSearchTermLabel;
                  break;
                case p.a.ResultType.NO_RESULT_PRODUCTS:
                  t = d.a.suggestion.noSearchResultProductsLabel;
                  break;
                case p.a.ResultType.RECENT_SEARCHES:
                  t = d.a.suggestion.searchBoxOnclickRecentSearchLabel;
                  break;
                case p.a.ResultType.DEFAULT_SUGGESTIONS:
                  t = d.a.suggestion.searchBoxOnclickSearchTermLabel;
                  break;
                case p.a.ResultType.DEFAULT_PRODUCTS:
                  t = d.a.suggestion.searchBoxOnclickProductsLabel;
                  break;
                default:
                  t = this.label;
              }
              return (
                t || (t = this.label),
                this.getTemplate()
                  .replace(/{{type}}/g, this.type)
                  .replace(/{{label}}/g, y.a.stripHtml(t))
                  .replace(
                    /{{class.searchSuggestionHeader}}/g,
                    a.a.searchSuggestionHeader
                  )
                  .replace(
                    /{{class.searchSuggestionGroup}}/g,
                    a.a.searchSuggestionGroup
                  )
                  .replace(/{{resultItems}}/g, '')
              );
            },
          },
          {
            key: 'render',
            value: function () {
              var t = this;
              (this.$element = i()(this.compileTemplate())),
                this.type &&
                  this.type === p.a.ResultType.PRODUCTS &&
                  (this.blockDym.render(),
                  this.blockDym.bindEvents(),
                  this.blockDym.$element &&
                    ((this.$element = i()(this.compileTemplate())),
                    'style1' == h.a.getSettingValue('search.suggestionStyle') ||
                    y.a.isMobile()
                      ? this.parent.$instantSearchResult.prepend(
                          this.blockDym.$element
                        )
                      : this.$element
                          .find(' ul')
                          .prepend(this.blockDym.$element))),
                this.children.forEach(function (e) {
                  e.$element && t.$element.find(' ul').append(e.$element);
                });
            },
          },
          {
            key: '_isShowDYM',
            value: function () {
              return this.isShowDYM && this.type == p.a.ResultType.PRODUCTS;
            },
          },
          {
            key: 'setData',
            value: function (t, e) {
              (this.data = t),
                (this.isAllEmpty = e),
                this.children.forEach(function (e, n) {
                  t && t.length > n ? e.setData(t[n]) : e.setData(null);
                }),
                this.blockDym &&
                  (this.blockDym.setData(this.parent.data),
                  (this.isShowDYM = this.blockDym.isShow)),
                (this.isShow = t && t.length > 0);
            },
          },
        ]) && m(e.prototype, n),
        r && m(e, r),
        g
      );
    })(o.a);
    e.a = T;
  },
  122: function (t, e, n) {
    'use strict';
    n(21),
      n(22),
      n(23),
      n(17),
      n(18),
      n(9),
      n(19),
      n(14),
      n(15),
      n(16),
      n(11),
      n(13),
      n(12);
    var r = n(1),
      i = n.n(r),
      o = n(0),
      a = n(3),
      l = n(4),
      s = n(43),
      c = n(59),
      u = n(20);
    function p(t) {
      return (p =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function f(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function h(t, e) {
      return (h =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function y(t, e) {
      return !e || ('object' !== p(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function d(t) {
      return (d = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var g = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && h(t, e);
      })(p, t);
      var e,
        n,
        r,
        c = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = d(t);
            if (e()) {
              var i = d(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return y(this, n);
          };
        })(p);
      function p() {
        var t;
        return (
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, p),
          ((t = c.call(this)).data = ''),
          t
        );
      }
      return (
        (e = p),
        (n = [
          {
            key: 'getTemplate',
            value: function () {
              return '\n\t\t\t<li class="{{class.searchSuggestionItem}} {{class.searchUiAutocompleteItem}}" aria-label="{{escapedBlockType}}: {{escapedData}}" role="option">\n\t\t\t\t<a tabindex="-1" href="{{searchLink}}">{{highlightedSuggestionResult}}</a>\n\t\t\t</li>\n\t\t'.trim();
            },
          },
          {
            key: 'compileTemplate',
            value: function () {
              if (!this.isShow) return '';
              var t = o.a.stripHtml(a.a.currentTerm),
                e = this.data;
              return (
                this.parent.type == u.a.ResultType.SUGGESTIONS &&
                  (e = this._highlightSuggestionResult(this.data, t)),
                this.getTemplate()
                  .replace(
                    /{{escapedBlockType}}/g,
                    o.a.stripHtml(this.parent.type)
                  )
                  .replace(/{{escapedData}}/g, o.a.stripHtml(this.data))
                  .replace(
                    /{{class.searchSuggestionItem}}/g,
                    l.a.searchSuggestionItem
                  )
                  .replace(
                    /{{class.searchUiAutocompleteItem}}/g,
                    l.a.searchUiAutocompleteItem
                  )
                  .replace(/{{searchLink}}/g, this.searchLink)
                  .replace(/{{highlightedSuggestionResult}}/g, e)
              );
            },
          },
          {
            key: 'checkForRedirectData',
            value: function () {
              var t = this.parent.parent;
              if (
                t.hasRedirectData &&
                t.redirectData &&
                t.searchQuery == this.data
              )
                return t.redirectData;
              var e = o.a.getValueInObjectArray(
                u.a.ResultType.SUGGESTIONS_REDIRECT,
                t.data
              );
              return e && e[this.data] ? e[this.data] : '';
            },
          },
          {
            key: 'render',
            value: function () {
              this.data
                ? ((this.$element = i()(this.compileTemplate())),
                  this.$element.attr('data-title', o.a.stripHtml(this.data)))
                : (this.$element = null);
            },
          },
          {
            key: 'bindEvents',
            value: function () {
              this.$element &&
                !this.redirectLink &&
                this.$element.on('click', this.saveRecentSearch.bind(this));
            },
          },
          {
            key: 'saveRecentSearch',
            value: function () {
              s.a.setOnClickRecentSearches(this.data);
            },
          },
          {
            key: 'setData',
            value: function (t) {
              (this.data = t),
                (this.isShow = !!this.data),
                (this.redirectLink = this.checkForRedirectData()),
                this.redirectLink
                  ? (this.searchLink = this.redirectLink)
                  : (this.searchLink = o.a.reBuildUrlBaseOnLocale(
                      '/search?' +
                        a.a.searchTermKey +
                        '=' +
                        o.a.encodeURIParamValue(this.data)
                    ));
            },
          },
        ]) && f(e.prototype, n),
        r && f(e, r),
        p
      );
    })(c.a);
    e.a = g;
  },
  123: function (t, e, n) {
    'use strict';
    n(21),
      n(22),
      n(23),
      n(17),
      n(18),
      n(9),
      n(19),
      n(14),
      n(15),
      n(16),
      n(11),
      n(13),
      n(12);
    var r = n(1),
      i = n.n(r),
      o = n(0),
      a = n(3),
      l = n(4);
    function s(t) {
      return (s =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function c(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function u(t, e) {
      return (u =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function p(t, e) {
      return !e || ('object' !== s(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function f(t) {
      return (f = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var h = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && u(t, e);
      })(h, t);
      var e,
        n,
        r,
        s = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = f(t);
            if (e()) {
              var i = f(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return p(this, n);
          };
        })(h);
      function h() {
        var t;
        return (
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, h),
          ((t = s.call(this)).data = ''),
          t
        );
      }
      return (
        (e = h),
        (n = [
          {
            key: 'getTemplate',
            value: function () {
              return '\n\t\t\t<li class="{{class.searchSuggestionItem}} {{class.searchUiAutocompleteItem}}" aria-label="{{escapedBlockType}}: {{escapedDataTitle}}" role="option">\n\t\t\t\t<a tabindex="-1" href="{{searchLink}}">{{highlightedSuggestionResult}}</a>\n\t\t\t</li>\n\t\t'.trim();
            },
          },
          {
            key: 'compileTemplate',
            value: function () {
              if (!this.isShow) return '';
              this.searchTerm = o.a.stripHtml(a.a.currentTerm);
              var t = o.a.reBuildUrlBaseOnLocale(
                  '/collections/' + this.data.handle
                ),
                e = this._highlightSuggestionResult(
                  this.data.title,
                  this.searchTerm
                );
              return this.getTemplate()
                .replace(
                  /{{escapedBlockType}}/g,
                  o.a.stripHtml(this.parent.type)
                )
                .replace(
                  /{{escapedDataTitle}}/g,
                  o.a.stripHtml(this.data.title)
                )
                .replace(/{{escapedDataId}}/g, o.a.stripHtml(this.data.id))
                .replace(
                  /{{class.searchSuggestionItem}}/g,
                  l.a.searchSuggestionItem
                )
                .replace(
                  /{{class.searchUiAutocompleteItem}}/g,
                  l.a.searchUiAutocompleteItem
                )
                .replace(/{{searchLink}}/g, t)
                .replace(/{{highlightedSuggestionResult}}/g, e);
            },
          },
          {
            key: 'render',
            value: function () {
              this.data
                ? ((this.$element = i()(this.compileTemplate())),
                  this.$element.attr(
                    'data-title',
                    o.a.stripHtml(this.data.title)
                  ))
                : (this.$element = null);
            },
          },
          {
            key: 'setData',
            value: function (t) {
              (this.data = t), (this.isShow = !!this.data);
            },
          },
        ]) && c(e.prototype, n),
        r && c(e, r),
        h
      );
    })(n(59).a);
    e.a = h;
  },
  124: function (t, e, n) {
    'use strict';
    n(21),
      n(22),
      n(23),
      n(17),
      n(18),
      n(9),
      n(19),
      n(14),
      n(15),
      n(16),
      n(11),
      n(13),
      n(12);
    var r = n(1),
      i = n.n(r),
      o = n(0),
      a = n(3),
      l = n(4);
    function s(t) {
      return (s =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function c(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function u(t, e) {
      return (u =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function p(t, e) {
      return !e || ('object' !== s(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function f(t) {
      return (f = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var h = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && u(t, e);
      })(h, t);
      var e,
        n,
        r,
        s = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = f(t);
            if (e()) {
              var i = f(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return p(this, n);
          };
        })(h);
      function h() {
        var t;
        return (
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, h),
          ((t = s.call(this)).data = ''),
          t
        );
      }
      return (
        (e = h),
        (n = [
          {
            key: 'getTemplate',
            value: function () {
              return '\n\t\t\t<li class="{{class.searchSuggestionItem}} {{class.searchUiAutocompleteItem}}" aria-label="{{escapedBlockType}}: {{escapedDataTitle}}" role="option">\n\t\t\t\t<a tabindex="-1" href="{{searchLink}}">{{highlightedSuggestionResult}}</a>\n\t\t\t</li>\n\t\t'.trim();
            },
          },
          {
            key: 'compileTemplate',
            value: function () {
              if (!this.isShow) return '';
              var t = o.a.stripHtml(a.a.currentTerm),
                e = o.a.reBuildUrlBaseOnLocale(this.data.url),
                n = this._highlightSuggestionResult(this.data.title, t);
              return this.getTemplate()
                .replace(
                  /{{escapedBlockType}}/g,
                  o.a.stripHtml(this.parent.type)
                )
                .replace(
                  /{{escapedDataTitle}}/g,
                  o.a.stripHtml(this.data.title)
                )
                .replace(
                  /{{class.searchSuggestionItem}}/g,
                  l.a.searchSuggestionItem
                )
                .replace(
                  /{{class.searchUiAutocompleteItem}}/g,
                  l.a.searchUiAutocompleteItem
                )
                .replace(/{{searchLink}}/g, e)
                .replace(/{{highlightedSuggestionResult}}/g, n);
            },
          },
          {
            key: 'render',
            value: function () {
              this.data
                ? ((this.$element = i()(this.compileTemplate())),
                  this.$element.attr(
                    'data-title',
                    o.a.stripHtml(this.data.title)
                  ))
                : (this.$element = null);
            },
          },
          {
            key: 'setData',
            value: function (t) {
              (this.data = t), (this.isShow = !!this.data);
            },
          },
        ]) && c(e.prototype, n),
        r && c(e, r),
        h
      );
    })(n(59).a);
    e.a = h;
  },
  125: function (t, e, n) {
    'use strict';
    n(21),
      n(24),
      n(9),
      n(25),
      n(22),
      n(23),
      n(27),
      n(17),
      n(18),
      n(19),
      n(14),
      n(15),
      n(16),
      n(11),
      n(13),
      n(12);
    var r = n(1),
      i = n.n(r),
      o = n(10),
      a = n(4),
      l = n(0),
      s = n(20),
      c = n(3),
      u = n(7),
      p = n(43);
    function f(t) {
      return (f =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function h(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function y(t, e) {
      return (y =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function d(t, e) {
      return !e || ('object' !== f(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function g(t) {
      return (g = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var m = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && y(t, e);
      })(f, t);
      var e,
        n,
        r,
        o = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = g(t);
            if (e()) {
              var i = g(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return d(this, n);
          };
        })(f);
      function f() {
        var t;
        return (
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, f),
          ((t = o.call(this)).data = ''),
          (t.$element = null),
          t
        );
      }
      return (
        (e = f),
        (r = [
          {
            key: 'tempType',
            get: function () {
              return {
                LINK: 'link',
                SEPARATOR: 'separator',
                STRONG: 'strong',
                P: 'p',
              };
            },
          },
        ]),
        (n = [
          {
            key: 'getTemplate',
            value: function (t) {
              switch (t) {
                case f.tempType.LINK:
                  return '\n\t\t\t\t\t<a class="{{class.searchSuggestion}}-dym-suggest-query" href="{{url}}">{{content}}</a>\n\t\t\t\t'.trim();
                case f.tempType.SEPARATOR:
                  return '\n\t\t\t\t\t<span class="{{class.searchSuggestion}}-dym-suggest-query-separator">&nbsp</span>\n\t\t\t\t'.trim();
                case f.tempType.STRONG:
                  return '\n\t\t\t\t\t<strong>{{content}}</strong>\n\t\t\t\t'.trim();
                case f.tempType.P:
                  return '\n\t\t\t\t\t<p class="{{class.searchSuggestion}}-{{classType}}">{{content}}</p>\n\t\t\t\t'.trim();
                default:
                  return '\n\t\t\t\t\t<div class="{{class.searchSuggestionItem}} {{class.searchSuggestion}}-dym" aria-label="Did you mean">{{dymContent}}</div>\n\t\t\t\t'.trim();
              }
            },
          },
          {
            key: 'compileTemplate',
            value: function () {
              var t = this;
              if (this.isShow) {
                var e = '';
                '' != this.dymList &&
                  this.dymList.length > 0 &&
                  this.dymList.forEach(function (n, r) {
                    var i =
                      '/search?' +
                      c.a.searchTermKey +
                      '=' +
                      l.a.encodeURIParamValue(n);
                    (e += t
                      .getTemplate(f.tempType.LINK)
                      .replace(/{{url}}/g, i)
                      .replace(/{{content}}/g, n)),
                      r < t.dymList.length - 1 &&
                        (e += t.getTemplate(f.tempType.SEPARATOR));
                  });
                var n = '';
                if (this.suggestQuery != l.a.stripHtml(c.a.currentTerm)) {
                  if (0 == this.totalProduct) {
                    var r = this.getTemplate(f.tempType.STRONG).replace(
                        /{{content}}/g,
                        l.a.stripHtml(c.a.currentTerm)
                      ),
                      i =
                        u.a.error.noSuggestionProducts.replace(
                          /{{ terms }}/g,
                          r
                        ) + ' ';
                    n += this.getTemplate(f.tempType.P)
                      .replace(/{{content}}/g, i)
                      .replace(/{{classType}}/g, 'dym-notfound');
                  }
                  if ('' != this.suggestQuery) {
                    var o = this.getTemplate(f.tempType.STRONG).replace(
                        /{{content}}/g,
                        this.suggestQuery
                      ),
                      s = this.getTemplate(f.tempType.STRONG).replace(
                        /{{content}}/g,
                        this.totalProductFromSuggestedQuery
                          ? this.totalProductFromSuggestedQuery
                          : ''
                      ),
                      p = u.a.suggestion.suggestQuery
                        .replace(/{{ count }}/g, s)
                        .replace(/{{ terms }}/g, o);
                    n += this.getTemplate(f.tempType.P)
                      .replace(/{{content}}/g, p)
                      .replace(/{{classType}}/g, 'dym-showing-result-for');
                  }
                  '' != e &&
                    (n += this.getTemplate(f.tempType.P)
                      .replace(
                        /{{content}}/g,
                        u.a.suggestion.didYouMean.replace(/{{ terms }}/g, e)
                      )
                      .replace(/{{classType}}/g, 'dym-suggest-query-list'));
                }
                return this.getTemplate()
                  .replace(/{{dymContent}}/g, n)
                  .replace(/{{class.searchSuggestion}}/g, a.a.searchSuggestion)
                  .replace(
                    /{{class.searchSuggestionItem}}/g,
                    a.a.searchSuggestionItem
                  );
              }
              return '';
            },
          },
          {
            key: 'render',
            value: function () {
              this.isShow
                ? (this.$element = i()(this.compileTemplate()))
                : (this.$element = null);
            },
          },
          {
            key: 'bindEvents',
            value: function () {
              this.$element &&
                this.$element
                  .find('a')
                  .on('click', this.saveRecentSearch.bind(this));
            },
          },
          {
            key: 'saveRecentSearch',
            value: function (t) {
              if (t && t.target) {
                var e = i()(t.target).text();
                e && p.a.setOnClickRecentSearches(e);
              }
            },
          },
          {
            key: 'setData',
            value: function (t) {
              (this.data = t),
                (this.isShow = !1),
                t &&
                  (l.a.getValueInObjectArray(
                    s.a.ResultType.LOCAL_CACHE,
                    this.data
                  )
                    ? ((this.totalProduct = l.a.getValueInObjectArray(
                        s.a.ResultType.TOTAL_PRODUCT,
                        this.data
                      )),
                      (this.totalProductFromSuggestedQuery =
                        l.a.getValueInObjectArray(
                          s.a.ResultType.SUGGEST_TOTAL_PRODUCT,
                          this.data
                        )),
                      (this.dymList = l.a.getValueInObjectArray(
                        s.a.ResultType.DID_YOU_MEAN,
                        this.data
                      )),
                      (this.suggestQuery = l.a.getValueInObjectArray(
                        s.a.ResultType.SUGGEST_QUERY,
                        this.data
                      )),
                      (this.isShow = this.totalProductFromSuggestedQuery > 0))
                    : l.a.getValueInObjectArray(
                        s.a.ResultType.PREV_QUERY,
                        this.data
                      )
                    ? ((this.totalProduct = l.a.getValueInObjectArray(
                        s.a.ResultType.PREV_TOTAL_PRODUCT,
                        this.data
                      )),
                      (this.totalProductFromSuggestedQuery =
                        l.a.getValueInObjectArray(
                          s.a.ResultType.TOTAL_PRODUCT,
                          this.data
                        )),
                      (this.isShow = this.totalProductFromSuggestedQuery > 0))
                    : ((this.totalProduct = l.a.getValueInObjectArray(
                        s.a.ResultType.TOTAL_PRODUCT,
                        this.data
                      )),
                      (this.totalProductFromSuggestedQuery = 0),
                      (this.dymList = l.a.getValueInObjectArray(
                        s.a.ResultType.DID_YOU_MEAN,
                        this.data
                      )),
                      (this.suggestQuery = l.a.getValueInObjectArray(
                        s.a.ResultType.SUGGEST_QUERY,
                        this.data
                      )),
                      (this.isShow =
                        (this.dymList && this.dymList.length > 0) ||
                        this.suggestQuery)));
            },
          },
        ]) && h(e.prototype, n),
        r && h(e, r),
        f
      );
    })(o.a);
    e.a = m;
  },
  126: function (t, e, n) {
    'use strict';
    n(21),
      n(22),
      n(23),
      n(17),
      n(18),
      n(9),
      n(19),
      n(14),
      n(15),
      n(16),
      n(11),
      n(13),
      n(12);
    var r = n(1),
      i = n.n(r),
      o = n(10),
      a = n(4),
      l = n(0),
      s = n(3),
      c = n(2),
      u = n(7),
      p = n(20),
      f = n(43);
    function h(t) {
      return (h =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function y(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function d(t, e) {
      return (d =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function g(t, e) {
      return !e || ('object' !== h(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function m(t) {
      return (m = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var b = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && d(t, e);
      })(h, t);
      var e,
        n,
        r,
        o = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = m(t);
            if (e()) {
              var i = m(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return g(this, n);
          };
        })(h);
      function h() {
        var t;
        return (
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, h),
          ((t = o.call(this)).data = ''),
          (t.$element = null),
          t
        );
      }
      return (
        (e = h),
        (n = [
          {
            key: 'getTemplate',
            value: function () {
              return '\n\t\t\t<div class="{{class.searchSuggestionHeader}}-view-all {{class.searchSuggestionHeader}}" data-group="view-all" aria-label="View All">\n\t\t\t\t<a href="{{viewAllUrl}}"><span>{{label.suggestion.viewAll}}{{iconViewAll}}</span></a>\n\t\t\t</div>\n\t\t'.trim();
            },
          },
          {
            key: 'compileTemplate',
            value: function () {
              var t = l.a.getValueInObjectArray('total_product', this.data),
                e = l.a.getValueInObjectArray(
                  'suggest_total_product',
                  this.data
                );
              '' !== e && (t = e);
              var n = c.a.getSettingValue('search.suggestionBlocks'),
                r = l.a.getValueInObjectArray('products', n, 'type', 'number');
              if (0 == t || t <= r) return '';
              var i = c.a.getSettingValue('search.iconViewAll');
              (this.viewAllTerm = l.a.getValueInObjectArray(
                p.a.ResultType.SUGGEST_QUERY,
                this.data
              )),
                this.viewAllTerm ||
                  (this.viewAllTerm = l.a.getValueInObjectArray(
                    p.a.ResultType.QUERY,
                    this.data
                  ));
              var o = l.a.reBuildUrlBaseOnLocale(
                '/search?' +
                  s.a.searchTermKey +
                  '=' +
                  l.a.encodeURIParamValue(this.viewAllTerm)
              );
              return this.getTemplate()
                .replace(
                  /{{class.searchSuggestionHeader}}/g,
                  a.a.searchSuggestionHeader
                )
                .replace(
                  /{{label.suggestion.viewAll}}/g,
                  u.a.suggestion.viewAll
                )
                .replace(/{{iconViewAll}}/g, i)
                .replace(/{{ count }}/g, t)
                .replace(/{{viewAllUrl}}/g, o);
            },
          },
          {
            key: 'render',
            value: function () {
              this.$element = i()(this.compileTemplate());
            },
          },
          {
            key: 'bindEvents',
            value: function () {
              this.$element &&
                this.$element.on('click', this.saveRecentSearch.bind(this));
            },
          },
          {
            key: 'saveRecentSearch',
            value: function (t) {
              this.viewAllTerm &&
                f.a.setOnClickRecentSearches(this.viewAllTerm);
            },
          },
          {
            key: 'setData',
            value: function (t) {
              this.data = t || null;
            },
          },
        ]) && y(e.prototype, n),
        r && y(e, r),
        h
      );
    })(o.a);
    e.a = b;
  },
  127: function (t, e, n) {
    'use strict';
    n(21),
      n(22),
      n(23),
      n(17),
      n(18),
      n(9),
      n(19),
      n(14),
      n(15),
      n(16),
      n(11),
      n(13),
      n(12);
    var r = n(1),
      i = n.n(r),
      o = n(10),
      a = n(4),
      l = n(2);
    function s(t) {
      return (s =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function c(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function u(t, e) {
      return (u =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function p(t, e) {
      return !e || ('object' !== s(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function f(t) {
      return (f = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var h = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && u(t, e);
      })(s, t);
      var e,
        n,
        r,
        o = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = f(t);
            if (e()) {
              var i = f(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return p(this, n);
          };
        })(s);
      function s() {
        var t;
        return (
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, s),
          ((t = o.call(this)).$element = null),
          t
        );
      }
      return (
        (e = s),
        (n = [
          {
            key: 'getTemplate',
            value: function () {
              return '\n\t\t\t<div class="{{class.searchSuggestionLoading}}">\n\t\t\t\t<ul>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<div class="{{class.searchSuggestionLoading}}-img"></div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<div class="{{class.searchSuggestionLoading}}-img"></div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<div class="{{class.searchSuggestionLoading}}-img"></div>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t'.trim();
            },
          },
          {
            key: 'compileTemplate',
            value: function () {
              return this.getTemplate().replace(
                /{{class.searchSuggestionLoading}}/g,
                a.a.searchSuggestionLoading
              );
            },
          },
          {
            key: 'isRender',
            value: function () {
              return l.a.getSettingValue('search.showSuggestionLoading');
            },
          },
          {
            key: 'render',
            value: function () {
              this.$element = i()(this.compileTemplate());
            },
          },
        ]) && c(e.prototype, n),
        r && c(e, r),
        s
      );
    })(o.a);
    e.a = h;
  },
  128: function (t, e, n) {
    'use strict';
    n(21),
      n(22),
      n(54),
      n(23),
      n(17),
      n(18),
      n(9),
      n(19),
      n(14),
      n(15),
      n(16),
      n(11),
      n(13),
      n(12);
    var r = n(1),
      i = n.n(r),
      o = n(4),
      a = n(7),
      l = n(0),
      s = n(3),
      c = n(20),
      u = n(70);
    function p(t) {
      return (p =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function f(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function h(t, e) {
      return (h =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function y(t, e) {
      return !e || ('object' !== p(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function d(t) {
      return (d = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var g = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && h(t, e);
      })(g, t);
      var e,
        n,
        r,
        p = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = d(t);
            if (e()) {
              var i = d(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return y(this, n);
          };
        })(g);
      function g() {
        var t;
        return (
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, g),
          ((t = p.call(this)).$element = null),
          t
        );
      }
      return (
        (e = g),
        (n = [
          {
            key: 'getTemplate',
            value: function () {
              return '\n\t\t\t<div class="{{class.searchSuggestion}}-no-result" data-group="empty" data-label="No Results: {{searchTerm}}" data-value="{{searchTerm}}" aria-label="No Results">\n\t\t\t\t<p>{{noResultLabel}}</p>\n\t\t\t</div>\n\t\t'.trim();
            },
          },
          {
            key: 'compileTemplate',
            value: function () {
              var t = l.a.stripHtml(s.a.currentTerm),
                e = this.isEmptyWithSuggestion
                  ? a.a.search.resultEmptyWithSuggestion
                  : a.a.error.noSuggestionResult;
              return (
                (e = e.replace(/{{ terms }}/g, '<strong>' + t + '</strong>')),
                this.getTemplate()
                  .replace(/{{class.searchSuggestion}}/g, o.a.searchSuggestion)
                  .replace(
                    /{{class.searchSuggestionItem}}/g,
                    o.a.searchSuggestionItem
                  )
                  .replace(/{{searchTerm}}/g, t)
                  .replace(/{{noResultLabel}}/g, e)
              );
            },
          },
          {
            key: 'render',
            value: function () {
              this.hasRedirect
                ? (this.$element = null)
                : (this.$element = i()(this.compileTemplate()));
            },
          },
          {
            key: 'setData',
            value: function (t) {
              var e = u.a.getNoResultData();
              (this.isEmptyWithSuggestion = e && !e.isAllEmpty),
                t
                  ? ((this.data = t),
                    (this.hasRedirect = l.a.getValueInObjectArray(
                      c.a.ResultType.REDIRECT,
                      this.data
                    )))
                  : ((this.data = null), (this.hasRedirect = !1));
            },
          },
        ]) && f(e.prototype, n),
        r && f(e, r),
        g
      );
    })(n(10).a);
    e.a = g;
  },
  129: function (t, e, n) {
    'use strict';
    n(17), n(18), n(9), n(19), n(14), n(15), n(16), n(11), n(13), n(12);
    var r = n(1),
      i = n.n(r),
      o = n(0),
      a = n(2),
      l = n(4);
    n(20);
    function s(t) {
      return (s =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function c(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function u(t, e) {
      return (u =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function p(t, e) {
      return !e || ('object' !== s(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function f(t) {
      return (f = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var h = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && u(t, e);
      })(h, t);
      var e,
        n,
        r,
        s = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = f(t);
            if (e()) {
              var i = f(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return p(this, n);
          };
        })(h);
      function h(t, e) {
        return (
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, h),
          s.call(this, t, e)
        );
      }
      return (
        (e = h),
        (r = [
          {
            key: 'isActive',
            value: function () {
              return (
                !o.a.isMobile() &&
                'style2' === a.a.getSettingValue('search.suggestionStyle')
              );
            },
          },
        ]),
        (n = [
          {
            key: '_applyFilterAutocompleteAppendElement',
            value: function (t) {
              this.appendToSelector = a.a.getSettingValue(
                'search.suggestionStyle2MainContainerSelector'
              );
            },
          },
          {
            key: '_renderWrapper',
            value: function () {
              var t = o.a.InstantSearch.isFullWidthMobile()
                ? l.a.searchSuggestionMobile
                : '';
              '' !== t && this.$wrapper.addClass(t);
              var e = this._setSuggestionPosition();
              e.setSuggetionPosition(),
                e.setSuggetionPopoverPosition(),
                i()(window).resize(function () {
                  e.setSuggetionPopoverPosition();
                });
            },
          },
        ]) && c(e.prototype, n),
        r && c(e, r),
        h
      );
    })(n(85).a);
    e.a = h;
  },
  130: function (t, e, n) {
    'use strict';
    n(21),
      n(27),
      n(9),
      n(34),
      n(41),
      n(17),
      n(18),
      n(19),
      n(14),
      n(15),
      n(16),
      n(11),
      n(13),
      n(12);
    var r = n(1),
      i = n.n(r),
      o = n(10),
      a = n(4),
      l = n(0),
      s = n(3),
      c = n(20),
      u = n(43);
    function p(t) {
      return (p =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function f(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function h(t, e) {
      return (h =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function y(t, e) {
      return !e || ('object' !== p(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function d(t) {
      return (d = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var g = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && h(t, e);
      })(p, t);
      var e,
        n,
        r,
        o = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = d(t);
            if (e()) {
              var i = d(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return y(this, n);
          };
        })(p);
      function p(t, e) {
        var n;
        return (
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, p),
          ((n = o.call(this)).id = t),
          (n.$inputElement = e),
          (n.$element = null),
          (n.isOpen = !1),
          (n.keyboardNavIndex = -1),
          n
        );
      }
      return (
        (e = p),
        (n = [
          {
            key: 'init',
            value: function () {
              (this.searchInput = this.parent),
                (this.searchResult = this.parent.instantSearchResult),
                (this.appendTo = this.searchResult.selector.wrapper),
                (this.minLength = Settings.getSettingValue(
                  'search.suggestionMinLength'
                )),
                (this.delay = Settings.getSettingValue(
                  'search.suggestionDelay'
                ));
              var t = Settings.getSettingValue('search.searchBoxOnclick'),
                e = u.a.getOnClickRecentSearches();
              this.enableOnClickSearchBox = !!(
                (t &&
                  t.recentSearch &&
                  t.recentSearch.status &&
                  e.length > 0) ||
                (t.searchTermSuggestion &&
                  t.searchTermSuggestion.status &&
                  t.searchTermSuggestion.data.length > 0) ||
                (t.productSuggestion &&
                  t.productSuggestion.status &&
                  t.productSuggestion.data.length > 0)
              );
            },
          },
          {
            key: 'getTemplate',
            value: function () {
              return '\n\t\t\t<div tabindex="0" class="boost-pfs-search-suggestion" style="display: none;"></div>\n\t\t'.trim();
            },
          },
          {
            key: 'render',
            value: function () {
              this.$element ||
                ((this.$element = i()(this.getTemplate())),
                (this.searchResult.$instantSearchResult = this.$element));
            },
          },
          {
            key: 'isBindEvents',
            value: function () {
              return !this.isBoundEvent;
            },
          },
          {
            key: 'bindEvents',
            value: function () {
              this.$element &&
                this.parent.instantSearchResult.$wrapper &&
                this.$inputElement &&
                ((this.currentTerm = l.a.stripHtml(this.$inputElement.val())),
                this.searchResult.$wrapper.append(this.$element),
                this.$inputElement.on(
                  'keydown',
                  this._onKeyboardEnter.bind(this)
                ),
                this.$inputElement.on(
                  'keyup',
                  this._onKeyboardNavigation.bind(this)
                ),
                this.$element.on(
                  'focus',
                  this.searchInput.onFocusAutocomplete.bind(this.searchInput)
                ),
                this.$element.on(
                  'click',
                  this.searchInput.onSelectAutocomplete.bind(this.searchInput)
                ),
                document.addEventListener(
                  'click',
                  this._onClose.bind(this),
                  !0
                ),
                this.$inputElement.on('click', this._onOpen.bind(this)),
                this.$inputElement.on(
                  'keyup',
                  l.a.debounce(this._onKeyUp.bind(this), this.delay)
                ));
            },
          },
          {
            key: '_onOpen',
            value: function (t) {
              this._isXSSSearchTerm(t) ||
                ((this.isOpen = !0),
                (this.keyboardNavIndex = -1),
                (this.$keyboardSelectedItem = null),
                (this.currentTerm = l.a.stripHtml(this.$inputElement.val())),
                this.$element.show(),
                this.searchResult.$wrapper.addClass(a.a.searchSuggestionOpen),
                this.searchInput.onOpenAutocomplete(),
                this._source());
            },
          },
          {
            key: '_onClose',
            value: function (t) {
              if (!this._isXSSSearchTerm(t)) {
                var e = !1;
                if (this.isOpen && t && t.target) {
                  var n = i()(t.target),
                    r = n.closest('.' + a.a.searchSuggestionWrapper).length > 0,
                    o = n.closest('#' + this.$inputElement.id).length > 0,
                    l = n.closest('.boost-pfs-search-btn').length > 0;
                  r || o || l || (e = !0);
                } else t || (e = !0);
                e &&
                  (this.$element.hide(),
                  this.searchResult.$wrapper.removeClass(
                    a.a.searchSuggestionOpen
                  ),
                  this.searchInput.onCloseAutocomplete(),
                  (this.isOpen = !1),
                  (this.keyboardNavIndex = -1),
                  (this.$keyboardSelectedItem = null));
              }
            },
          },
          {
            key: '_onKeyUp',
            value: function (t) {
              if (!this._isXSSSearchTerm(t)) {
                this.isOpen = !0;
                var e = l.a.stripHtml(this.$inputElement.val().trim());
                this.currentTerm != e &&
                  ((this.currentTerm = e),
                  (this.currentEvent = t),
                  this._source());
              }
            },
          },
          {
            key: '_onKeyboardNavigation',
            value: function (t) {
              var e = this;
              if (
                !this._isXSSSearchTerm(t) &&
                this.isOpen &&
                this.$element &&
                t &&
                t.key
              ) {
                var n = this.$element.find('.' + a.a.searchSuggestionItem);
                if (!(n.length <= 0)) {
                  var r = this.$element.find('[data-group=view-all]'),
                    o = n.length + r.length,
                    c = !1;
                  if (t.key.includes('Down') || t.key.includes('Up'))
                    if (
                      ((c = !0),
                      t.key.includes('Up')
                        ? (this.keyboardNavIndex--,
                          this.keyboardNavIndex < -1 &&
                            (this.keyboardNavIndex = o - 1))
                        : t.key.includes('Down') &&
                          (this.keyboardNavIndex++,
                          this.keyboardNavIndex > o - 1 &&
                            (this.keyboardNavIndex = -1)),
                      this.$inputElement.focus(),
                      -1 == this.keyboardNavIndex)
                    ) {
                      this.$keyboardSelectedItem = null;
                      var u = l.a.unescape(l.a.stripHtml(s.a.currentTerm));
                      this.$inputElement.val(u), n.removeClass('selected');
                    } else
                      this.keyboardNavIndex > n.length - 1
                        ? ((this.$keyboardSelectedItem = null),
                          (u = l.a.unescape(l.a.stripHtml(s.a.currentTerm))),
                          this.$inputElement.val(u),
                          n.removeClass('selected'),
                          r.addClass('selected'))
                        : n.each(function (t, n) {
                            var o = i()(n);
                            if ((console.log(n), t == e.keyboardNavIndex)) {
                              var a = l.a.unescape(
                                l.a.stripHtml(o.attr('data-title'))
                              );
                              e.$inputElement.val(a),
                                o.addClass('selected'),
                                r.removeClass('selected'),
                                (e.$keyboardSelectedItem = o);
                            } else o.removeClass('selected');
                          });
                  else
                    (t.key.includes('Left') || t.key.includes('Right')) &&
                      -1 != this.keyboardNavIndex &&
                      (c = !0);
                  c &&
                    (t.stopImmediatePropagation(),
                    t.stopPropagation(),
                    t.preventDefault());
                }
              }
            },
          },
          {
            key: '_onKeyboardEnter',
            value: function (t) {
              if (
                !this._isXSSSearchTerm() &&
                this.isOpen &&
                this.$element &&
                t &&
                t.key
              ) {
                var e = !1;
                if ('Enter' == t.key || 'Space' == t.key) {
                  if (
                    -1 != this.keyboardNavIndex &&
                    this.$keyboardSelectedItem
                  ) {
                    var n = this.$keyboardSelectedItem.find('a').attr('href');
                    n &&
                      !l.a.isBadUrl(n) &&
                      ((e = !0), (window.location.href = n));
                  }
                } else
                  'Tab' == t.key
                    ? document.activeElement &&
                      (document.activeElement.id != this.searchInput.id
                        ? this._onClose()
                        : this._onOpen())
                    : 'Escape' == t.key && this._onClose();
                e &&
                  (t.stopImmediatePropagation(),
                  t.stopPropagation(),
                  t.preventDefault());
              }
            },
          },
          {
            key: '_source',
            value: function () {
              if (!this._isXSSSearchTerm())
                if (
                  (this.$element.html(''),
                  (this.keyboardNavIndex = -1),
                  (this.$keyboardSelectedItem = null),
                  this.currentTerm.length > 0)
                ) {
                  var t = { term: this.currentTerm },
                    e = this._response.bind(this);
                  this.searchInput._bindAutoCompleteSource(t, e);
                } else
                  this.enableOnClickSearchBox
                    ? this.showOnClickSuggestion()
                    : (this.searchResult.$wrapper.hide(),
                      this.searchResult.$wrapper.removeClass(
                        a.a.searchSuggestionOpen
                      ),
                      this.searchInput.$element.attr('aria-expanded', !1));
            },
          },
          {
            key: '_response',
            value: function (t) {
              if (!this._isXSSSearchTerm()) {
                var e = l.a.stripHtml(this.$inputElement.val()),
                  n = l.a.getValueInObjectArray(c.a.ResultType.EVENT_TYPE, t),
                  r = l.a.getValueInObjectArray(c.a.ResultType.QUERY, t);
                if ('suggest_dym' == n || ('' != e && '' != r)) {
                  this.$element.html(''),
                    (this.keyboardNavIndex = -1),
                    (this.$keyboardSelectedItem = null),
                    this.searchInput._bindAutoCompleteRenderMenu(
                      this.$element[0],
                      t
                    );
                  var i = { content: t };
                  this.searchInput._bindAutoCompleteResponse(
                    this.currentEvent,
                    i
                  ),
                    0 ==
                    this.searchResult.$wrapper.find(
                      '[data-group]:not([data-group="view-all"]'
                    ).length
                      ? (this.searchResult.$wrapper.hide(),
                        this.searchResult.$wrapper.removeClass(
                          a.a.searchSuggestionOpen
                        ),
                        this.searchInput.$element.attr('aria-expanded', !1))
                      : (this.searchResult.$wrapper.show(),
                        this.searchResult.$wrapper.addClass(
                          a.a.searchSuggestionOpen
                        ),
                        this.searchInput.$element.attr('aria-expanded', !0));
                }
              }
            },
          },
          {
            key: 'showOnClickSuggestion',
            value: function () {
              if (!this._isXSSSearchTerm()) {
                this.$element.html(''),
                  (this.keyboardNavIndex = -1),
                  (this.$keyboardSelectedItem = null);
                var t = u.a.getOnClickData();
                this.searchResult.setData(this.$element, t, !1),
                  this.searchResult.refresh(),
                  this.searchResult.$wrapper.show(),
                  this.searchResult.$wrapper.addClass(a.a.searchSuggestionOpen),
                  this.searchInput.$element.attr('aria-expanded', !0),
                  0 ==
                    this.$element.find('.' + a.a.searchSuggestionItem).length &&
                    (this.searchResult.$wrapper.hide(),
                    this.searchResult.$wrapper.removeClass(
                      a.a.searchSuggestionOpen
                    ),
                    this.searchInput.$element.attr('aria-expanded', !1));
              }
            },
          },
          {
            key: '_isXSSSearchTerm',
            value: function (t) {
              var e = l.a.stripHtml(this.$inputElement.val());
              return (
                !!l.a.isBadSearchTerm(e) &&
                ((this.isOpen = !1),
                this.$element.html(''),
                this.$element.hide(),
                this.searchResult.$wrapper.removeClass(
                  a.a.searchSuggestionOpen
                ),
                this.searchResult.$wrapper.hide(),
                this.searchResult.$wrapper.removeClass(
                  a.a.searchSuggestionOpen
                ),
                t &&
                  'function' == typeof t.stopPropagation &&
                  (t.stopImmediatePropagation(),
                  t.stopPropagation(),
                  t.preventDefault()),
                !0)
              );
            },
          },
        ]) && f(e.prototype, n),
        r && f(e, r),
        p
      );
    })(o.a);
    e.a = g;
  },
  189: function (t, e, n) {
    var r = n(62).default;
    (window.BoostPFSFilterCallback = n(8).default.BoostPFSFilterCallback),
      (window.BoostPFSInstantSearchCallback =
        n(84).default.BoostPFSInstantSearchCallback),
      (t.exports = r);
  },
  2: function (t, e, n) {
    'use strict';
    n(47), n(30), n(22), n(38);
    var r = n(0),
      i = {
        general: {
          enableFilter: !0,
          filterTreeEnableRenderPartially: !0,
          filterTreeNumberResultEnable: !0,
          filterTreeIcon:
            '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.8 3.2H3.348C3.6792 4.1288 4.5584 4.8 5.6 4.8C6.6416 4.8 7.5208 4.1288 7.852 3.2H15.2C15.6424 3.2 16 2.8424 16 2.4C16 1.9576 15.6424 1.6 15.2 1.6H7.852C7.5208 0.6712 6.6416 0 5.6 0C4.5584 0 3.6792 0.6712 3.348 1.6H0.8C0.3576 1.6 0 1.9576 0 2.4C0 2.8424 0.3576 3.2 0.8 3.2ZM15.2 12.8H7.852C7.5208 11.8712 6.6416 11.2 5.6 11.2C4.5584 11.2 3.6792 11.8712 3.348 12.8H0.8C0.3576 12.8 0 13.1576 0 13.6C0 14.0424 0.3576 14.4 0.8 14.4H3.348C3.6792 15.3288 4.5584 16 5.6 16C6.6416 16 7.5208 15.3288 7.852 14.4H15.2C15.6424 14.4 16 14.0424 16 13.6C16 13.1576 15.6424 12.8 15.2 12.8ZM15.2 7.2H12.652C12.3208 6.2712 11.4416 5.6 10.4 5.6C9.3584 5.6 8.4792 6.2712 8.148 7.2H0.8C0.3576 7.2 0 7.5576 0 8C0 8.4424 0.3576 8.8 0.8 8.8H8.148C8.4792 9.7288 9.3584 10.4 10.4 10.4C11.4416 10.4 12.3208 9.7288 12.652 8.8H15.2C15.6424 8.8 16 8.4424 16 8C16 7.5576 15.6424 7.2 15.2 7.2ZM5.6 1.6C6.0416 1.6 6.4 1.9584 6.4 2.4C6.4 2.8416 6.0416 3.2 5.6 3.2C5.1584 3.2 4.8 2.8416 4.8 2.4C4.8 1.9584 5.1584 1.6 5.6 1.6ZM5.6 14.4C5.1584 14.4 4.8 14.0416 4.8 13.6C4.8 13.1584 5.1584 12.8 5.6 12.8C6.0416 12.8 6.4 13.1584 6.4 13.6C6.4 14.0416 6.0416 14.4 5.6 14.4ZM10.4 8.8C9.9584 8.8 9.6 8.4416 9.6 8C9.6 7.5584 9.9584 7.2 10.4 7.2C10.8416 7.2 11.2 7.5584 11.2 8C11.2 8.4416 10.8416 8.8 10.4 8.8Z" fill="#222222"/><mask id="mask0_8095:39389" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.8 3.2H3.348C3.6792 4.1288 4.5584 4.8 5.6 4.8C6.6416 4.8 7.5208 4.1288 7.852 3.2H15.2C15.6424 3.2 16 2.8424 16 2.4C16 1.9576 15.6424 1.6 15.2 1.6H7.852C7.5208 0.6712 6.6416 0 5.6 0C4.5584 0 3.6792 0.6712 3.348 1.6H0.8C0.3576 1.6 0 1.9576 0 2.4C0 2.8424 0.3576 3.2 0.8 3.2ZM15.2 12.8H7.852C7.5208 11.8712 6.6416 11.2 5.6 11.2C4.5584 11.2 3.6792 11.8712 3.348 12.8H0.8C0.3576 12.8 0 13.1576 0 13.6C0 14.0424 0.3576 14.4 0.8 14.4H3.348C3.6792 15.3288 4.5584 16 5.6 16C6.6416 16 7.5208 15.3288 7.852 14.4H15.2C15.6424 14.4 16 14.0424 16 13.6C16 13.1576 15.6424 12.8 15.2 12.8ZM15.2 7.2H12.652C12.3208 6.2712 11.4416 5.6 10.4 5.6C9.3584 5.6 8.4792 6.2712 8.148 7.2H0.8C0.3576 7.2 0 7.5576 0 8C0 8.4424 0.3576 8.8 0.8 8.8H8.148C8.4792 9.7288 9.3584 10.4 10.4 10.4C11.4416 10.4 12.3208 9.7288 12.652 8.8H15.2C15.6424 8.8 16 8.4424 16 8C16 7.5576 15.6424 7.2 15.2 7.2ZM5.6 1.6C6.0416 1.6 6.4 1.9584 6.4 2.4C6.4 2.8416 6.0416 3.2 5.6 3.2C5.1584 3.2 4.8 2.8416 4.8 2.4C4.8 1.9584 5.1584 1.6 5.6 1.6ZM5.6 14.4C5.1584 14.4 4.8 14.0416 4.8 13.6C4.8 13.1584 5.1584 12.8 5.6 12.8C6.0416 12.8 6.4 13.1584 6.4 13.6C6.4 14.0416 6.0416 14.4 5.6 14.4ZM10.4 8.8C9.9584 8.8 9.6 8.4416 9.6 8C9.6 7.5584 9.9584 7.2 10.4 7.2C10.8416 7.2 11.2 7.5584 11.2 8C11.2 8.4416 10.8416 8.8 10.4 8.8Z" fill="white"/></mask><g mask="url(#mask0_8095:39389)"></g></svg>',
          filterTreeIconClose:
            '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.13062 8.00003L12.565 4.56563C12.8778 4.25283 12.8778 3.74723 12.565 3.43443C12.2522 3.12163 11.7466 3.12163 11.4338 3.43443L7.99942 6.86883L4.56502 3.43443C4.25222 3.12163 3.74662 3.12163 3.43382 3.43443C3.12102 3.74723 3.12102 4.25283 3.43382 4.56563L6.86822 8.00003L3.43382 11.4344C3.12102 11.7472 3.12102 12.2528 3.43382 12.5656C3.58982 12.7216 3.79462 12.8 3.99942 12.8C4.20422 12.8 4.40902 12.7216 4.56502 12.5656L7.99942 9.13123L11.4338 12.5656C11.5898 12.7216 11.7946 12.8 11.9994 12.8C12.2042 12.8 12.409 12.7216 12.565 12.5656C12.8778 12.2528 12.8778 11.7472 12.565 11.4344L9.13062 8.00003Z" fill="#222222"/><mask id="mask0_33:1711" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="3" y="3" width="10" height="10"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.13062 8.00003L12.565 4.56563C12.8778 4.25283 12.8778 3.74723 12.565 3.43443C12.2522 3.12163 11.7466 3.12163 11.4338 3.43443L7.99942 6.86883L4.56502 3.43443C4.25222 3.12163 3.74662 3.12163 3.43382 3.43443C3.12102 3.74723 3.12102 4.25283 3.43382 4.56563L6.86822 8.00003L3.43382 11.4344C3.12102 11.7472 3.12102 12.2528 3.43382 12.5656C3.58982 12.7216 3.79462 12.8 3.99942 12.8C4.20422 12.8 4.40902 12.7216 4.56502 12.5656L7.99942 9.13123L11.4338 12.5656C11.5898 12.7216 11.7946 12.8 11.9994 12.8C12.2042 12.8 12.409 12.7216 12.565 12.5656C12.8778 12.2528 12.8778 11.7472 12.565 11.4344L9.13062 8.00003Z" fill="white"/></mask><g mask="url(#mask0_33:1711)"></g></svg>',
          filterTreeMobileStyle: 'style2',
          filterTreeMobileStyleFullWidth: !1,
          filterTreeMobileIcon: '',
          filterTreeHorizontalStyle: 'style1',
          filterHorizontalColumn: '1',
          filterHorizontalOptionsAlign: 'left',
          filterTreeVerticalStyle: 'style-default',
          stickyFilterOnDesktop: !1,
          stickyFilterOnMobile: !1,
          stickyProductHeightLimitParam: 300,
          showRefineBy: !0,
          separateRefineByFromFilter: !1,
          refineByHorizontalPosition: 'bottom',
          changeMobileButtonLabel: !1,
          breakpointMobile: '767',
          breakpointTablet: '1199',
          changeDesktopButtonLabel: !1,
          changeDesktopButtonIcon: !0,
          showLoading: !1,
          showMobileLoading: !1,
          showLoadMoreLoading: !0,
          positionShowInfiniteLoading: 700,
          activeScrollToTop: !1,
          styleScrollToTop: 'style1',
          showSingleOption: !0,
          showOutOfStockOption: !1,
          showFilterOptionCount: !0,
          requestInstantly: !1,
          capitalizeFilterOptionValues: !0,
          forceCapitalizeFilterOptionValues: !1,
          capitalizeFirstLetterFilterOptionValues: !1,
          collapseOnPCByDefault: !1,
          collapseOnMobileByDefault: !1,
          keepScrollState: !0,
          keepToggleState: !0,
          keepTabOpenState: !1,
          activeFilterScrollbarPC: !0,
          activeFilterScrollbarMobile: !0,
          scrollFirstLoadLength: 24,
          startViewMore: { list: 5, box: 3, swatch: 10 },
          startViewMoreH: { list: 10, box: 20, swatch: 10 },
          removePriceDecimal: !0,
          rangeSliderMoneyFormat: '',
          oneValueRangeSlider: !1,
          rangeSlidersStyle3: [],
          rangeSlidersSingleHandle: [],
          advancedRangeSliders: [],
          shortenPipsRange: !1,
          formatPipsRange: [
            { node: 1e3, symbol: 'K', fix: 0, suffix: !1 },
            { node: 1e6, symbol: 'M', fix: 2, suffix: !1 },
          ],
          enable3rdCurrencySupport: !1,
          imageExtension: [
            'jpg',
            'JPG',
            'png',
            'PNG',
            'jpeg',
            'JPEG',
            'gif',
            'GIF',
            'webp',
            'WEBP',
          ],
          swatchStyle: '',
          swatchImageVersion: '1111111',
          removePrefixFromSwatchFile: !0,
          enableFilterOptionBoxStyle: !0,
          filterOptionBoxCharWidth: 14,
          openMultiLevelByDefault: [],
          multiLevelCollectionSelectType: 'single',
          filterPrefixParam: 'pf_',
          limit: 16,
          vendorParam: 'pf_v_vendor',
          typeParam: 'pf_pt_product_type',
          priceMode: '',
          tagMode: '',
          location: '',
          urlScheme: 1,
          isShortenUrlParam: !1,
          shortenUrlParamList: [],
          productAvailable: !1,
          variantAvailable: !1,
          availableAfterFiltering: !1,
          loadProductFirst: !0,
          loadProductFirstBestSelling: !1,
          addCollectionToProductUrl: !0,
          showVariantImageBasedOnSelectedFilter: '',
          paginationType: 'default',
          paginationTypeAdvanced: !0,
          activeLoadPreviousPage: !0,
          loadPreviousType: 'load_more',
          sessionStorageCurrentPreviousPage: 'boostPFSCurrentPreviousPage',
          sessionStorageCurrentPage: 'boostPFSCurrentPage',
          sessionStorageCurrentNextPage: 'boostPFSCurrentNextPage',
          sessionStoragePreviousPageEvent: 'boostPFSPreviousPageEvent',
          enableKeepScrollbackPosition: !0,
          keepScrollbackPositionType: 'sessionStorage',
          sessionStorageScrollbackPosition: 'boostPFSScrollbackPostion',
          sortingList: [
            'relevance',
            'best-selling',
            'manual',
            'price-ascending',
            'price-descending',
            'title-ascending',
            'title-descending',
            'created-descending',
            'created-ascending',
          ],
          customSortingList: '',
          extraSortingList: '',
          sortingAvailableFirst: !1,
          showLimitList: '4,8,12,16',
          defaultDisplay: 'grid',
          collageNumber: 3,
          enableCollectionSearch: !0,
          showVariantsAsProduct: !1,
          enableVariantsDisplay: !1,
          showPlaceholderProductList: !1,
          placeholderImageRatio: 1.4,
          placeholderProductGridItemClass: '',
          placeholderProductPerRow: 3,
          loadProductFromLiquid: !1,
          loadProductFromLiquidType: 'ajax',
          otpProductItemClass: '',
          enableAjaxCart: !0,
          enableAjaxCartOnProductPage: !1,
          ajaxCartStyle: 'slide',
          showAjaxCartOnAdd: !0,
          autoCloseMiniCart: !1,
          autoCloseMiniCartDuration: 2e3,
          selectOptionInProductItem: !1,
          selectOptionContainer: '',
          icoQuickView:
            '<svg width="40" height="40" viewBox="0 0 40 40"><g id="boost-pfs-icon-quick-view" transform="scale(0.03125 0.03125)"><path d="M1009.004 493.256c-2.256-2.82-56.254-69.828-143.786-137.492-51.696-39.962-104.462-71.87-156.832-94.834-66.48-29.152-132.556-43.932-196.386-43.932-63.832 0-129.904 14.782-196.386 43.932-52.37 22.962-105.136 54.87-156.834 94.834-87.53 67.666-141.528 134.674-143.784 137.494l-14.996 18.742 14.998 18.744c2.256 2.82 56.252 69.828 143.784 137.492 51.696 39.962 104.462 71.87 156.834 94.834 66.48 29.152 132.554 43.932 196.386 43.932 63.83 0 129.904-14.782 196.386-43.932 52.37-22.962 105.136-54.87 156.832-94.834 87.53-67.666 141.53-134.674 143.786-137.492l14.994-18.744-14.996-18.744zM827.402 621.624c-74.24 57.196-189.226 125.374-315.402 125.374-126.18 0-241.162-68.178-315.402-125.374-55.36-42.65-97.042-85.794-118.512-109.612 52.994-58.698 229.246-235.006 433.916-235.006 126.178 0 241.162 68.178 315.402 125.374 55.366 42.654 97.050 85.8 118.522 109.622-21.474 23.82-63.158 66.968-118.524 109.622z"></path><path d="M512 309.976c-111.396 0-202.024 90.63-202.024 202.024s90.63 202.024 202.024 202.024 202.026-90.628 202.026-202.024-90.63-202.024-202.026-202.024zM512 654.018c-78.308 0-142.018-63.71-142.018-142.018s63.71-142.018 142.018-142.018 142.018 63.71 142.018 142.018c0 78.308-63.71 142.018-142.018 142.018z"></path><path d="M512 419.322c-51.102 0-92.678 41.576-92.678 92.678s41.576 92.68 92.678 92.68 92.678-41.576 92.678-92.68c0-51.104-41.574-92.678-92.678-92.678zM512 544.672c-18.014 0-32.67-14.656-32.67-32.672s14.656-32.67 32.67-32.67 32.67 14.656 32.67 32.67c0.002 18.014-14.654 32.672-32.67 32.672z"></path></g></svg>',
          icoQuickViewLink:
            '<svg width="40" height="40" viewBox="0 0 40 40"><use xlink:href="#boost-pfs-icon-quick-view"></use></svg>',
          icoCart:
            '<svg width="40" height="40" viewBox="0 0 40 40"><g id="boost-pfs-icon-cart" transform="scale(0.03125 0.03125)"><path d="M448.217 818.845c-56.377 0-102.256 45.902-102.256 102.256 0 56.377 45.879 102.256 102.256 102.256s102.256-45.879 102.256-102.256c0-56.379-45.857-102.256-102.256-102.256zM448.217 977.908c-31.312 0-56.807-25.472-56.807-56.807 0-31.312 25.495-56.807 56.807-56.807s56.807 25.495 56.807 56.807c0.003 31.335-25.472 56.807-56.807 56.807z"></path><path d="M768.66 818.845c-56.377 0-102.256 45.902-102.256 102.256 0 56.377 45.879 102.256 102.256 102.256 56.354 0 102.256-45.879 102.256-102.256 0-56.379-45.902-102.256-102.256-102.256zM768.66 977.908c-31.335 0-56.807-25.472-56.807-56.807 0-31.312 25.472-56.807 56.807-56.807 31.29 0 56.807 25.495 56.807 56.807 0.003 31.335-25.517 56.807-56.807 56.807z"></path><path d="M1019.164 259.373c-4.294-5.499-10.886-8.702-17.883-8.702h-768.3l-63.329-233.255c-0.137-0.5-0.5-0.886-0.682-1.364-0.5-1.476-1.25-2.773-2.046-4.090-0.749-1.25-1.431-2.477-2.385-3.545-0.931-1.068-2.021-1.865-3.159-2.726-1.182-0.909-2.317-1.795-3.659-2.454-1.25-0.637-2.591-0.953-3.975-1.364-1.476-0.431-2.907-0.794-4.476-0.909-0.545-0.022-1.001-0.319-1.568-0.319h-124.978c-12.543 0-22.724 10.181-22.724 22.724s10.181 22.724 22.724 22.724h107.595l63.239 232.959 113.572 460.078c2.499 10.156 11.612 17.293 22.065 17.293h558.448c10.452 0 19.543-7.112 22.065-17.293l113.617-460.282c1.7-6.796 0.154-13.955-4.162-19.476zM869.871 710.976h-522.865l-102.39-414.858h727.667l-102.413 414.858z"></path></g></svg>',
          icoCartLink:
            '<svg width="40" height="40" viewBox="0 0 40 40"><use xlink:href="#boost-pfs-icon-cart"></use></svg>',
          enableTrackingOrderRevenue: !0,
          filterEverywhereCollectionId: 0,
          filterEverywhereDefaultSorting: 'best-selling',
          filterEverywhereUrlScheme: 0,
          enableSeo: !0,
          boostCollection: 'boost-all',
          moneyFormatWithCurrency: !1,
          useShopifyRouteForMultiLanguageURL: !0,
          enableBackToOriginal: !0,
        },
        search: {
          enableSearch: !0,
          enableSuggestion: !0,
          suggestionBlocks: [
            {
              type: 'suggestions',
              label: 'Suggestions',
              status: 'active',
              number: 3,
            },
            {
              type: 'collections',
              label: 'Collections',
              status: 'active',
              number: 2,
            },
            { type: 'pages', label: 'Pages', status: 'active', number: 2 },
            {
              type: 'products',
              label: 'Products',
              status: 'active',
              number: 6,
            },
          ],
          suggesionMaxItems: 10,
          suggestionDymLimit: 2,
          suggestionMinLength: 1,
          suggestionPosition: '',
          suggestionDelay: 50,
          suggestionWidth: 'auto',
          suggestionTypes: [],
          suggestionStyle: 'style2',
          suggestionColumn: '1',
          suggestionProductPosition: 'none',
          suggestionProductItemPerRow: '1',
          suggestionProductItemType: 'list',
          suggestionMaxHeight: '',
          suggestionMaxWidth: '',
          suggestionStyle2MainContainerSelector: 'body',
          suggestionStyle1ProductItemType: 'list',
          suggestionStyle1ProductPosition: 'none',
          suggestionStyle1ProductPerRow: '1',
          suggestionStyle2ProductItemType: 'list',
          suggestionStyle2ProductPosition: 'right',
          suggestionStyle2ProductPerRow: 2,
          suggestionStyle3ProductItemType: 'list',
          suggestionStyle3ProductPosition: 'right',
          suggestionStyle3ProductPerRow: 3,
          suggestionMobileStyle: 'style1',
          showSuggestionLoading: !0,
          showSuggestionProductVendor: !0,
          showSuggestionProductPrice: !0,
          showSuggestionProductSalePrice: !0,
          showSuggestionProductImage: !0,
          showSuggestionProductSku: !1,
          showSearchBtnMobile: !1,
          showSearchBtnStyle3: !0,
          enableDefaultResult: !0,
          enableFuzzy: !0,
          productAvailable: !1,
          removePriceDecimal: !1,
          highlightSuggestionResult: !0,
          openProductNewTab: !1,
          suggestionMode: 'prod',
          termKey: 'q',
          skipFields: [],
          reduceMinMatch: !1,
          fullMinMatch: !1,
          enablePlusCharacterSearch: !1,
          collectionDescLimitCharacter: 264,
          pageExcerptLimitCharacter: 264,
          fontSizeSuggestionHeader: '',
          bgSuggestionHeader: '',
          colorSuggestionHeader: '',
          enableFixHeadTitle: !0,
          searchPanelList: ['products', 'collections', 'pages'],
          searchPanelDefault: 'products',
          searchPanelBlocks: {
            products: { label: 'Products', pageSize: 25, active: !0 },
            collections: { label: 'Collections', pageSize: 25, active: !1 },
            pages: { label: 'Pages', pageSize: 25, active: !1 },
          },
          suggestionNoResult: {
            search_terms: {
              label: '"Popular suggestions',
              status: !0,
              data: [],
            },
            products: { label: 'Products', status: !0, data: [] },
          },
          searchBoxOnclick: {
            recentSearch: { label: 'Recent searches', status: !1, number: 3 },
            searchTermSuggestion: {
              label: 'Popular searches',
              status: !1,
              data: [],
            },
            productSuggestion: {
              label: 'Trending products',
              status: !1,
              data: [],
            },
          },
          iconViewAll:
            '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.1657 7.43443L10.1657 3.43443C9.8529 3.12163 9.3473 3.12163 9.0345 3.43443C8.7217 3.74723 8.7217 4.25283 9.0345 4.56563L11.6689 7.20003H2.4001C1.9577 7.20003 1.6001 7.55843 1.6001 8.00003C1.6001 8.44163 1.9577 8.80003 2.4001 8.80003H11.6689L9.0345 11.4344C8.7217 11.7472 8.7217 12.2528 9.0345 12.5656C9.1905 12.7216 9.3953 12.8 9.6001 12.8C9.8049 12.8 10.0097 12.7216 10.1657 12.5656L14.1657 8.56563C14.4785 8.25283 14.4785 7.74723 14.1657 7.43443" fill="#5C5F62"/></svg>',
        },
        init: function () {
          var t = i;
          if (
            ('undefined' != typeof boostPFSConfig &&
              boostPFSConfig.hasOwnProperty('settings') &&
              null !== boostPFSConfig.settings &&
              (t = r.a.mergeObject(t, boostPFSConfig.settings)),
            'undefined' != typeof boostPFSAppConfig &&
              Object.keys(boostPFSAppConfig).length > 0 &&
              (t = r.a.mergeObject(t, boostPFSAppConfig)),
            'undefined' != typeof boostPFSThemeConfig &&
              Object.keys(boostPFSThemeConfig).length > 0 &&
              (t = r.a.mergeObject(t, boostPFSThemeConfig)),
            'undefined' != typeof boostPFSFilterConfig &&
              Object.keys(boostPFSFilterConfig).length > 0 &&
              (t = r.a.mergeObject(t, boostPFSFilterConfig)),
            'undefined' != typeof boostPFSInstantSearchConfig &&
              Object.keys(boostPFSInstantSearchConfig).length > 0 &&
              (t = r.a.mergeObject(t, boostPFSInstantSearchConfig)),
            'undefined' != typeof Shopify &&
              Shopify.hasOwnProperty('locale') &&
              t.hasOwnProperty('label') &&
              t.hasOwnProperty('labelTranslations') &&
              void 0 !== t.labelTranslations &&
              t.labelTranslations.hasOwnProperty(Shopify.locale))
          ) {
            var e = t.labelTranslations[Shopify.locale];
            t.label = r.a.mergeObject(t.label || {}, e);
          }
          i = t;
        },
        getSettingValue: function (t) {
          var e = '';
          if (i.hasOwnProperty(t)) return i[t];
          if (t.indexOf('.') > -1)
            for (var n = t.split('.'), r = 0; r < n.length; r++)
              if ('' == e) {
                if (!i.hasOwnProperty(n[r])) return '';
                e = i[n[r]];
              } else {
                if (!e.hasOwnProperty(n[r])) return '';
                e = e[n[r]];
              }
          return e;
        },
      };
    e.a = i;
  },
  20: function (t, e, n) {
    'use strict';
    e.a = {
      ResultType: {
        ALL_EMPTY: 'all_empty',
        TOTAL_PRODUCT: 'total_product',
        SUGGESTIONS: 'suggestions',
        COLLECTIONS: 'collections',
        PRODUCTS: 'products',
        PAGES: 'pages',
        DID_YOU_MEAN: 'did_you_mean',
        REDIRECT: 'redirect',
        SUGGESTIONS_REDIRECT: 'suggestions_redirect',
        QUERY: 'query',
        PREV_QUERY: 'prev_query',
        SUGGEST_QUERY: 'suggest_query',
        EVENT_TYPE: 'event_type',
        PREV_TOTAL_PRODUCT: 'prev_total_product',
        SUGGEST_TOTAL_PRODUCT: 'suggest_total_product',
        LOCAL_CACHE: 'local_cache',
        RECENT_SEARCHES: 'recent_searches',
        DEFAULT_SUGGESTIONS: 'default_suggestions',
        DEFAULT_PRODUCTS: 'default_products',
        NO_RESULT_PRODUCTS: 'no_result_products',
        NO_RESULT_SUGGESTIONS: 'no_result_suggestions',
      },
      Mobile: { SuggestionType: { FULL_SCREEN: 'style1', STYLE_2: 'style2' } },
    };
  },
  3: function (t, e, n) {
    'use strict';
    n(99), n(21);
    var r = n(2),
      i = n(0),
      o = {
        prefix: 'pf',
        queryParams: {},
        instantSearchQueryParams: {},
        internalClick: !1,
        imutableFilterTree: ['page', 'sort', 'limit', 'display', '_', 'tab'],
        otherParams: ['page', 'sort', 'limit', 'display', 'tab'],
        hasFilterOptionParam: !1,
        hasFilterByLocation: !1,
        scrollData: [],
        shopName: '',
        shopDomain: '',
        fileUrl: '',
        defaultCurrency: '',
        moneyFormat: '',
        moneyFormatWithCurrency: '',
        collectionId: '',
        collectionTags: '',
        currentTags: '',
        defaultSorting: '',
        swatchExtension: '',
        productAvailable: !0,
        variantAvailable: !0,
        loadProductFirst: !1,
        searchTermKey: 'q',
        suggestionCache: {},
        currentTerm: '',
        inventoryBaseSelectedLocations: !1,
        hasIntegration: !1,
        init: function () {
          var t = boostPFSConfig.shop,
            e = boostPFSConfig.general;
          (o.shopName = t.name),
            (o.shopDomain = t.domain),
            (o.defaultCurrency = t.currency),
            (o.moneyFormat = t.money_format),
            (o.moneyFormatWithCurrency = t.money_format_with_currency),
            (o.fileUrl = e.file_url),
            (o.collectionId =
              i.a.isCollectionPage() || i.a.isSearchPage()
                ? e.collection_id
                : null),
            (o.collectionTags = e.collection_tags),
            (o.collectionCount = e.collection_count),
            (o.currentTags = e.current_tags),
            (o.defaultSorting = e.default_sort_by.trim()),
            (o.swatchExtension = e.swatch_extension),
            (o.productAvailable = r.a.getSettingValue(
              'general.productAvailable'
            )),
            (o.variantAvailable = r.a.getSettingValue(
              'general.variantAvailable'
            )),
            r.a.getSettingValue('general.productAndVariantAvailable') &&
              ((o.productAvailable = !0), (o.variantAvailable = !0)),
            (o.loadProductFirst = r.a.getSettingValue(
              'general.loadProductFirst'
            )),
            (o.searchTermKey = r.a.getSettingValue('search.termKey')),
            (o.mobileStyle = r.a.getSettingValue(
              'general.filterTreeMobileStyle'
            )),
            (o.suggestionTypes = r.a.getSettingValue('search.suggestionTypes'));
        },
      };
    e.a = o;
  },
  36: function (t, e, n) {
    'use strict';
    n(11),
      n(58),
      n(9),
      n(13),
      n(12),
      n(40),
      n(34),
      n(41),
      n(22),
      n(38),
      n(24),
      n(25),
      n(115),
      n(81),
      n(54),
      n(67),
      n(47),
      n(45),
      n(82),
      n(48),
      n(23);
    var r = n(1),
      i = n.n(r),
      o = n(0),
      a = n(3),
      l = n(2),
      s = n(8),
      c = n(62),
      u = {},
      p = {},
      f = window.location.pathname,
      h = document.title,
      y = '',
      d = new Map(),
      g = new Map(),
      m = {
        init: function () {
          (y = o.a.getWindowLocation().href),
            (p = {
              page: 1,
              limit: l.a.getSettingValue('general.limit'),
              sort: o.a.isSearchPage() ? 'relevance' : a.a.defaultSorting,
              display: l.a.getSettingValue('general.defaultDisplay'),
              tab: l.a.getSettingValue('general.searchPanelDefault'),
            }),
            window.addEventListener('popstate', m.onPopState),
            m.initShortenUrl();
        },
        initShortenUrl: function () {
          var t = l.a.getSettingValue('general.shortenUrlParamList');
          l.a.getSettingValue('general.isShortenUrlParam') &&
            Array.isArray(t) &&
            t.forEach(function (t) {
              if ('string' == typeof t) {
                var e = t.match(/[^:]:[^:]/),
                  n = 0;
                if ((e && e.hasOwnProperty('index') && (n = e.index), !n))
                  return;
                var r = t.slice(0, n + 1),
                  i = t.slice(n + 2);
                r && i && (d.set(r, i), g.set(i, r));
              }
            });
        },
        updateAddressBar: function () {
          if (
            0 !=
              (o.a.isCollectionPage() || o.a.isSearchPage()
                ? l.a.getSettingValue('general.urlScheme')
                : l.a.getSettingValue('general.filterEverywhereUrlScheme')) &&
            window.history &&
            'function' == typeof window.history.pushState
          ) {
            var t = m.buildAddressBarUrl(),
              e = JSON.parse(JSON.stringify(a.a.queryParams));
            (a.a.queryParams = e),
              history.pushState({ param: a.a.queryParams }, h, t),
              (y = t);
            var n = new Event('boost-pfs-change-address-bar');
            window.dispatchEvent(n);
          }
        },
        buildAddressBarUrl: function (t) {
          var e = t || a.a.queryParams,
            n = window.location.protocol + '//' + window.location.hostname + f,
            r = o.a.getWindowLocation().search,
            i = new URLSearchParams(r),
            s = !1,
            c =
              o.a.isCollectionPage() || o.a.isSearchPage()
                ? l.a.getSettingValue('general.urlScheme')
                : l.a.getSettingValue('general.filterEverywhereUrlScheme');
          Object.keys(e).forEach(function (t) {
            var n = e[t];
            if (t.startsWith(a.a.prefix)) {
              var r = d.get(t);
              if ((r || (r = t), i.delete(r), Array.isArray(n))) {
                switch (c) {
                  case 0:
                    break;
                  case 2:
                    i.set(r, n);
                    break;
                  case 1:
                  default:
                    n.forEach(function (t) {
                      i.append(r, t);
                    });
                }
                s = !0;
              } else null != n && (i.set(r, n), (s = !0));
            } else t == a.a.searchTermKey && 'string' == typeof n ? (o.a.isCollectionPage() && '' === n ? i.delete(t) : i.set(t, n)) : a.a.otherParams.includes(t) && (n == p[t] || ('sort' == t && n == a.a.defaultSorting) ? i.delete(t) : i.set(t, n));
          });
          var u = [];
          i.forEach(function (t, n) {
            var r = g.get(n);
            r || (r = n),
              (r.startsWith(a.a.prefix) ||
                a.a.imutableFilterTree.includes(r) ||
                r == a.a.searchTermKey) &&
                (e.hasOwnProperty(r) || u.push(n));
          }),
            u.forEach(function (t) {
              i.delete(t);
            }),
            (a.a.hasFilterOptionParam = s),
            i.sort();
          var h = n,
            y = i.toString();
          return (
            y && (2 == c && (y = y.replace(/%2C/g, ',')), (h += '?' + y)), h
          );
        },
        setAddressBarPathAfterFilter: function (t) {
          (f =
            'string' == typeof t && t.startsWith('/')
              ? t
              : window.location.pathname),
            (f = o.a.reBuildUrlBaseOnLocale(f));
        },
        setWindowTitleAfterFilter: function (t) {
          h =
            'string' != typeof t ||
            '' == t ||
            t.includes('undefined') ||
            t.includes('null')
              ? document.title
              : t;
        },
        getHistoryState: function () {
          return u;
        },
        onPopState: function (t) {
          u = t.state;
          var e = c.default.instance.filter,
            n = o.a.getWindowLocation().href,
            r = (n.includes('#') || y.includes('#')) && n.split('#')[0] == y;
          e &&
            !r &&
            (o.a.isSearchPage() &&
              i()('.' + Class.searchResultPanelItem).length > 0 &&
              i()('.' + Class.searchResultPanelItem)
                .first()
                .trigger('click'),
            e.filterLoadingIcon.setShow(!0),
            s.default.updateParamsFromUrl(),
            s.default.getFilterData('history', e.setData.bind(e)));
        },
        shortParamsMap: d,
        longParamMap: g,
      };
    e.a = m;
  },
  39: function (t, e, n) {
    'use strict';
    n(47), n(21);
    var r = n(0),
      i = {
        getApiUrl: function (t) {
          var e = boostPFSConfig.api.filterUrl;
          switch (t) {
            case 'search':
              e = boostPFSConfig.api.searchUrl;
              break;
            case 'suggestion':
              e = boostPFSConfig.api.suggestionUrl;
              break;
            case 'analytics':
              e = boostPFSConfig.api.analyticsUrl;
              break;
            case 'filter':
              e = boostPFSConfig.api.filterUrl;
              break;
            case 'products':
              e = boostPFSConfig.api.productsUrl;
          }
          return e;
        },
        setApiLocaleParams: function (t) {
          return (
            Settings.general.hasOwnProperty('published_locales') &&
              Object.keys(Settings.general.published_locales).length >= 1 &&
              void 0 !== Settings.general.current_locale &&
              (t.locale = Settings.getSettingValue('general.current_locale')),
            t
          );
        },
        setShopifyMultiCurrencyParams: function (t) {
          return (
            r.a.isEnableShopifyMultipleCurrencies() &&
              (r.a.isConvertCurrenciesOnFrontEnd() ||
                (boostPFSConfig &&
                  boostPFSConfig.general &&
                  'string' == typeof boostPFSConfig.general.current_currency &&
                  (t.currency = boostPFSConfig.general.current_currency
                    .toLowerCase()
                    .trim()),
                Shopify &&
                  Shopify.country &&
                  'string' == typeof Shopify.country &&
                  (t.country = Shopify.country.toLowerCase().trim()))),
            t
          );
        },
      };
    e.a = i;
  },
  4: function (t, e, n) {
    'use strict';
    e.a = {
      filterTree: 'boost-pfs-filter-tree',
      filterTreeVertical: 'boost-pfs-filter-tree-v',
      filterTreeHorizontal: 'boost-pfs-filter-tree-h',
      filterTreeOpenBody: 'boost-pfs-filter-tree-open-body',
      filterTreeMobileButton: 'boost-pfs-filter-tree-mobile-button',
      filterTreeMobileOpen: 'boost-pfs-filter-tree-mobile-open',
      filterTreeDesktopButton: 'boost-pfs-filter-tree-desktop-button',
      filterTreeDesktopOpen: 'boost-pfs-filter-tree-desktop-open',
      filterOptionsWrapper: 'boost-pfs-filter-options-wrapper',
      filterOption: 'boost-pfs-filter-option',
      filterOptionTitle: 'boost-pfs-filter-option-title',
      filterOptionContent: 'boost-pfs-filter-option-content',
      filterOptionContentInner: 'boost-pfs-filter-option-content-inner',
      filterOptionItem: 'boost-pfs-filter-option-item',
      filterOptionLabel: 'boost-pfs-filter-option-label',
      filterOptionRange: 'boost-pfs-filter-option-range',
      filterRefineByWrapper: 'boost-pfs-filter-refine-by-wrapper',
      filterRefineBy: 'boost-pfs-filter-refine-by',
      filterSelectedItems: 'boost-pfs-filter-refine-by-items',
      filterSelectedItemsMobile: 'boost-pfs-filter-refine-by-items-mobile',
      filterOptionHidden: 'boost-pfs-filter-option-hidden',
      filterOptionOpenList: 'boost-pfs-filter-option-open-list',
      filterOptionCloseList: 'boost-pfs-filter-option-close-list',
      filterOptionItemList: 'boost-pfs-filter-option-item-list',
      filterOptionItemListSingleList:
        'boost-pfs-filter-option-item-list-single-list',
      filterOptionItemListMultipleList:
        'boost-pfs-filter-option-item-list-multiple-list',
      filterOptionItemListBox: 'boost-pfs-filter-option-item-list-box',
      filterOptionItemListSwatch: 'boost-pfs-filter-option-item-list-swatch',
      filterOptionItemListRating: 'boost-pfs-filter-option-item-list-rating',
      filterOptionItemListMultiLevelTag:
        'boost-pfs-filter-option-item-list-multi-level-tag',
      filterOptiontemListMultiLevelCollections:
        'boost-pfs-filter-option-item-list-multi-level-collections',
      filterOptionItemStar: 'boost-pfs-filter-icon-star',
      filterOptionItemStarActive: 'boost-pfs-filter-icon-star-active',
      filterHasViewMore: 'boost-pfs-filter-has-view-more',
      filterOptionViewMore: 'boost-pfs-filter-option-view-more-action',
      filterOptionViewLess: 'boost-pfs-filter-option-view-less-action',
      filterOptionViewMoreList: 'boost-pfs-filter-view-more-list-action',
      filterHasSearchBox: 'boost-pfs-filter-has-searchbox',
      filterOptionShowSearchBox: 'boost-pfs-filter-option-show-search-box',
      filterHasScrollbar: 'boost-pfs-filter-has-scrollbar',
      filterNoScrollbar: 'boost-pfs-filter-no-scrollbar',
      button: 'boost-pfs-filter-button',
      clearButton: 'boost-pfs-filter-clear',
      clearAllButton: 'boost-pfs-filter-clear-all',
      applyButton: 'boost-pfs-filter-apply-button',
      applyAllButton: 'boost-pfs-filter-apply-all-button',
      closeFilterButton: 'boost-pfs-filter-close',
      showResultFilterButton: 'boost-pfs-filter-show-result',
      numberResult: 'boost-pfs-filter-number-result',
      collectionHeader: 'boost-pfs-filter-collection-header',
      collectionDescription: 'boost-pfs-filter-collection-description',
      collectionImage: 'boost-pfs-filter-collection-image',
      collectionHasImage: 'boost-pfs-filter-collection-has-image',
      collectionNoImage: 'boost-pfs-filter-collection-no-image',
      filterOptionTooltip: 'boost-pfs-filter-option-tooltip',
      searchBox: 'boost-pfs-search-box',
      searchResultHeader: 'boost-pfs-search-result-header',
      searchResultNumber: 'boost-pfs-search-result-number',
      searchResultPanels: 'boost-pfs-search-result-panel-controls',
      searchResultPanelItem: 'boost-pfs-search-result-panel-item',
      searchSuggestion: 'boost-pfs-search-suggestion',
      searchSuggestionWrapper: 'boost-pfs-search-suggestion-wrapper',
      searchSuggestionHeader: 'boost-pfs-search-suggestion-header',
      searchSuggestionGroup: 'boost-pfs-search-suggestion-group',
      searchSuggestionItem: 'boost-pfs-search-suggestion-item',
      searchSuggestionMobile: 'boost-pfs-search-suggestion-mobile',
      searchSuggestionLoading: 'boost-pfs-search-suggestion-loading',
      searchSuggestionOpen: 'boost-pfs-search-suggestion-open',
      searchSuggestionOpenBody: 'boost-pfs-search-suggestion-open-body',
      searchSuggestionMobileOpen: 'boost-pfs-search-suggestion-mobile-open',
      searchSuggestionStyle3Open: 'boost-pfs-search-suggestion-style3-open',
      searchUiAutocompleteItem: 'boost-pfs-ui-item',
      searchSuggestionBtnSubmitMobile: 'boost-pfs-search-submit-mobile',
      searchSuggestionBtnCloseMobile: 'boost-pfs-search-btn-close-suggestion',
      searchSuggestionBtnClearMobile: 'boost-pfs-search-btn-clear-suggestion',
      searchSuggestionNoTabIndex: 'boost-pfs-search-no-tabindex',
      searchSuggestionBtnSubmitStyle3: 'boost-pfs-search-submit-style3',
      searchSuggestionBtnCloseStyle3: 'boost-pfs-search-btn-close-suggestion',
      searchSuggestionBtnClearStyle3: 'boost-pfs-search-btn-clear-suggestion',
      productLoadMore: 'boost-pfs-filter-load-more',
      productWrapLoading: 'boost-pfs-filter-product-loading',
      buttonLoadPreviousPageSelector: 'boost-pfs-filter-btn-load-previous-page',
      buttonLoadPreviousPageWrapper:
        'boost-pfs-filter-btn-load-previous-page-wrapper',
      productDisplayType: 'boost-pfs-filter-display',
      filterResultItem: 'boost-pfs-search-result-list-item',
      filterSkeleton: 'boost-pfs-filter-skeleton',
      filterProductSkeleton: 'boost-pfs-filter-product-skeleton',
      filterSkeletonText: 'boost-pfs-filter-skeleton-text',
      filterSkeletonButton: 'boost-pfs-filter-skeleton-button',
      atcForm: 'boost-pfs-addtocart-product-form',
      atcAvailable: 'boost-pfs-addtocart-available',
      atcSelectOptions: 'boost-pfs-addtocart-select-options',
      atcSoldOut: 'boost-pfs-addtocart-sold-out',
      variantsDisplay: 'boost-pfs-variants-display',
      adaWrapper: 'boost-pfs-ada',
      mobileButtonOpen: 'boost-pfs-filter-tree-mobile-button-open',
      desktopButtonOpen: 'boost-pfs-filter-tree-desktop-button-open',
      mobileDetectiOS: 'boost-pfs-filter-mobile-detect-ios',
      hidden: 'boost-hidden',
      enableApp: 'boost-pfs-enable-app',
      enableFilter: 'boost-pfs-enable-filter',
      enableInstantSearch: 'boost-pfs-enable-instant-search',
    };
  },
  42: function (t, e, n) {
    'use strict';
    n(22),
      n(23),
      n(21),
      n(47),
      n(27),
      n(9),
      n(17),
      n(18),
      n(19),
      n(14),
      n(15),
      n(16),
      n(11),
      n(13),
      n(12);
    var r = n(1),
      i = n.n(r),
      o = n(2),
      a = n(0),
      l = n(3),
      s = n(4),
      c = n(7),
      u = n(10),
      p = n(84),
      f = n(75),
      h = n(100),
      y = n(130),
      d = n(43);
    function g(t) {
      return (g =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function m(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function b(t, e) {
      return (b =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function v(t, e) {
      return !e || ('object' !== g(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function S(t) {
      return (S = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var T = (function (t) {
        !(function (t, e) {
          if ('function' != typeof e && null !== e)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && b(t, e);
        })(g, t);
        var e,
          n,
          r,
          u = (function (t) {
            function e() {
              if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            }
            return function () {
              var n,
                r = S(t);
              if (e()) {
                var i = S(this).constructor;
                n = Reflect.construct(r, arguments, i);
              } else n = r.apply(this, arguments);
              return v(this, n);
            };
          })(g);
        function g(t, e) {
          var n;
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError('Cannot call a class as a function');
            })(this, g),
            ((n = u.call(this)).id = t),
            (n.autocomplete = null),
            (n.instantSearchResult = null),
            (n.isRendered = !1),
            (n.isBoundEvents = !1),
            (n.$element = e || i()('#' + n.id)),
            (n.$searchForm = n.$element.closest('form')),
            (n.$uiMenuElement = null),
            n
          );
        }
        return (
          (e = g),
          (r = [
            {
              key: 'disableInstantSearch',
              value: function () {
                (O = !0),
                  i()('.' + s.a.searchSuggestionWrapper).css({
                    visibility: 'hidden',
                    opacity: 0,
                    display: 'none',
                  });
              },
            },
          ]),
          (n = [
            {
              key: 'init',
              value: function () {
                (this.instantSearchResult = f.a.instantSearchResult(
                  this.id,
                  this.$element
                )),
                  this.addComponent(this.instantSearchResult),
                  (this.searchAutoComplete = new y.a(this.id, this.$element)),
                  this.addComponent(this.searchAutoComplete);
              },
            },
            {
              key: 'isRender',
              value: function () {
                return !this.isRendered;
              },
            },
            {
              key: 'render',
              value: function () {
                var t = a.a.getParam(l.a.searchTermKey);
                this.$element
                  .val(t)
                  .addClass(s.a.searchBox)
                  .attr('autocomplete', 'off')
                  .attr('id', a.a.stripHtml(this.id))
                  .attr('data-search-box', a.a.stripHtml(this.id))
                  .attr('role', 'combobox')
                  .attr('placeholder', c.a.suggestion.searchBoxPlaceholder)
                  .attr('aria-expanded', !1)
                  .attr('aria-autocomplete', 'list')
                  .attr('aria-label', c.a.ada.searchAutoComplete)
                  .attr(
                    'aria-owns',
                    a.a.stripHtml(
                      this.id.replace(s.a.searchBox, s.a.searchSuggestion)
                    )
                  )
                  .attr('data-already-init', !0),
                  (this.isRendered = !0);
              },
            },
            {
              key: 'isBindEvents',
              value: function () {
                return !this.isBoundEvents;
              },
            },
            {
              key: 'bindEvents',
              value: function () {
                this.$element
                  .on('click', this._onClickSearchBox.bind(this))
                  .on('focus', this._onFocusSearchBox.bind(this))
                  .on('keyup', this._onTypeSearchBoxEvent.bind(this)),
                  this.$searchForm.length &&
                    this.$searchForm.on('submit', this._onSubmit.bind(this)),
                  (this.isBoundEvents = !0);
              },
            },
            {
              key: '_bindAutoCompleteSource',
              value: function (t, e) {
                (window.suggestionCallback = e),
                  (l.a.currentTerm = a.a.stripHtml(t.term));
                var n = t.term.trim().replace(/\s+/g, ' ');
                if ('' != n) {
                  var r = this.searchAutoComplete.$element;
                  if (
                    (this.instantSearchResult.setData(r, null, !0),
                    this.instantSearchResult.refresh(),
                    l.a.suggestionCache.hasOwnProperty(n))
                  )
                    return void window.suggestionCallback(
                      l.a.suggestionCache[n]
                    );
                  (n = encodeURIComponent(n)),
                    p.default.getSuggestionData(n, 0, 'suggest');
                }
              },
            },
            {
              key: '_bindAutoCompleteResponse',
              value: function (t, e) {
                var n = e.content,
                  r = a.a.getValueInObjectArray('query', n),
                  i = a.a.getValueInObjectArray('event_type', n),
                  o = a.a.getValueInObjectArray('suggest_query', n),
                  s = a.a.getValueInObjectArray('local_cache', n);
                a.a.getValueInObjectArray('redirect', n),
                  25 == Object.keys(l.a.suggestionCache).length &&
                    (l.a.suggestionCache = {}),
                  l.a.suggestionCache.hasOwnProperty(r) ||
                    'suggest_dym' == i ||
                    (l.a.suggestionCache[r] = n),
                  '' == o ||
                    'suggest' != i ||
                    s ||
                    p.default.getSuggestionData(o, 0, 'suggest_dym', r),
                  h.a.checkForSearchRedirect(this.$element);
              },
            },
            {
              key: '_bindAutoCompleteRenderMenu',
              value: function (t, e) {
                this.instantSearchResult.setData(i()(t), e, !1),
                  this.instantSearchResult.refresh();
              },
            },
            {
              key: '_bindAutoCompleteResizeMenu',
              value: function () {
                this.customizeInstantSearch();
              },
            },
            { key: 'customizeInstantSearch', value: function () {} },
            {
              key: 'onFocusAutocomplete',
              value: function (t, e) {
                return !(!e || !e.item || void 0 === e.item.label);
              },
            },
            {
              key: 'onOpenAutocomplete',
              value: function (t) {
                var e = this;
                a.a.isiOS() &&
                  i()('.' + s.a.searchSuggestionItem + ' a')
                    .on('touchstart', function () {
                      e.isScrolling = !1;
                    })
                    .on('touchmove', function () {
                      e.isScrolling = !0;
                    })
                    .on('touchend', function (t) {
                      if (!e.isScrolling) {
                        var n = i()(t.currentTarget).attr('href');
                        a.a.isBadUrl(n) || (window.location.href = n);
                      }
                    }),
                  a.a.InstantSearch.isFullWidthMobile() &&
                    !i()('body').hasClass(s.a.searchSuggestionMobileOpen) &&
                    i()('body').addClass(s.a.searchSuggestionMobileOpen),
                  a.a.InstantSearch.isStyle3() &&
                    !i()('body').hasClass(s.a.searchSuggestionStyle3Open) &&
                    i()('body').addClass(s.a.searchSuggestionStyle3Open),
                  this.instantSearchResult.$wrapper.hasClass(
                    s.a.searchSuggestionOpen
                  ) ||
                    this.instantSearchResult.$wrapper.addClass(
                      s.a.searchSuggestionOpen
                    ),
                  i()('body').hasClass(s.a.searchSuggestionOpenBody) ||
                    i()('body').addClass(s.a.searchSuggestionOpenBody);
              },
            },
            {
              key: 'onCloseAutocomplete',
              value: function (t, e) {
                this.instantSearchResult &&
                  this.instantSearchResult.$instantSearchResult &&
                  this.instantSearchResult.$wrapper &&
                  ('test' == o.a.getSettingValue('search.suggestionMode') ||
                  a.a.InstantSearch.isFullWidthMobile()
                    ? this.instantSearchResult.$instantSearchResult.show()
                    : this.instantSearchResult.$instantSearchResult
                        .siblings()
                        .hide(),
                  a.a.isiOS() ||
                    this.instantSearchResult.$wrapper.removeClass(
                      s.a.searchSuggestionOpen
                    ),
                  i()('body').removeClass(s.a.searchSuggestionOpenBody));
              },
            },
            {
              key: 'onSelectAutocomplete',
              value: function (t) {
                if (this.autocomplete) {
                  var e = this.autocomplete.$element.find(
                    '.' + s.a.searchSuggestionItem + '.selected'
                  );
                  if (e.length) {
                    var n = e.find('> a');
                    if (n.length) {
                      var r = n[0].attr('href');
                      a.a.isBadUrl(r) || a.a.setWindowLocation(r);
                    }
                  }
                  return !1;
                }
              },
            },
            { key: '_onClickSearchBox', value: function (t) {} },
            { key: '_onFocusSearchBox', value: function (t) {} },
            {
              key: '_onTypeSearchBoxEvent',
              value: function (t) {
                l.a.currentTerm = a.a.stripHtml(t.target.value);
              },
            },
            {
              key: '_onSubmit',
              value: function (t, e) {
                if (
                  !O &&
                  (void 0 === e && (e = this.isChangePage),
                  (this.isChangePage = !1),
                  !e)
                ) {
                  t.stopImmediatePropagation(),
                    t.stopPropagation(),
                    t.preventDefault(),
                    (l.a.currentTerm = a.a.stripHtml(this.$element.val())),
                    !l.a.currentTerm &&
                      t &&
                      t.target &&
                      (l.a.searchTerm = a.a.stripHtml(t.target.value));
                  var n = h.a.getSearchRedirectUrl(),
                    r = a.a.unescape(l.a.currentTerm);
                  r = r.trim().replace(/\s+/g, ' ');
                  var i = l.a.suggestionCache.hasOwnProperty(r);
                  d.a.setOnClickRecentSearches(r),
                    i
                      ? n && !a.a.isBadUrl(n)
                        ? a.a.setWindowLocation(n)
                        : ((this.isChangePage = !0),
                          this.$searchForm[0].submit())
                      : l.a.currentTerm
                      ? this.$element.data('search-submit', !0)
                      : ((this.isChangePage = !0),
                        this.$searchForm[0].submit());
                }
              },
            },
          ]) && m(e.prototype, n),
          r && m(e, r),
          g
        );
      })(u.a),
      O = !1;
    e.a = T;
  },
  43: function (t, e, n) {
    'use strict';
    n(21),
      n(30),
      n(83),
      n(81),
      n(24),
      n(9),
      n(25),
      n(11),
      n(13),
      n(12),
      n(67),
      n(48);
    var r = n(1),
      i = n.n(r),
      o = n(20),
      a = n(2),
      l = n(3),
      s = n(39),
      c = n(0),
      u = n(7),
      p = 'boostPFSRecentSearches',
      f = null,
      h = {
        getOnClickBlockSettings: function () {
          var t = {
              type: o.a.ResultType.RECENT_SEARCHES,
              label: u.a.suggestion.searchBoxOnClickRecentSearchLabel,
              status: a.a.getSettingValue(
                'search.searchBoxOnclick.recentSearch.status'
              )
                ? 'active'
                : 'inactive',
              number: a.a.getSettingValue(
                'search.searchBoxOnclick.recentSearch.number'
              ),
            },
            e = a.a.getSettingValue(
              'search.searchBoxOnclick.searchTermSuggestion.data'
            ),
            n = {
              type: o.a.ResultType.DEFAULT_SUGGESTIONS,
              label: u.a.suggestion.searchBoxOnClickSearchTermLabel,
              status: a.a.getSettingValue(
                'search.searchBoxOnclick.searchTermSuggestion.status'
              )
                ? 'active'
                : 'inactive',
              number: e && e.length ? e.length : 0,
            },
            r = a.a.getSettingValue(
              'search.searchBoxOnclick.productSuggestion.data'
            );
          return [
            t,
            n,
            {
              type: o.a.ResultType.DEFAULT_PRODUCTS,
              label: u.a.suggestion.searchBoxOnClickProductsLabel,
              status: a.a.getSettingValue(
                'search.searchBoxOnclick.productSuggestion.status'
              )
                ? 'active'
                : 'inactive',
              number: r && r.length ? r.length : 0,
            },
          ];
        },
        getOnClickData: function () {
          var t = a.a.getSettingValue('search.searchBoxOnclick');
          if (f) return (f.recent_searches = h.getOnClickRecentSearches()), f;
          var e = [];
          return (
            a.a.getSettingValue(
              'search.searchBoxOnclick.recentSearch.status'
            ) &&
              e.push({
                key: o.a.ResultType.RECENT_SEARCHES,
                values: h.getOnClickRecentSearches(),
              }),
            a.a.getSettingValue(
              'search.searchBoxOnclick.searchTermSuggestion.status'
            ) &&
              e.push({
                key: o.a.ResultType.DEFAULT_SUGGESTIONS,
                values: Array.isArray(t.searchTermSuggestion.data)
                  ? t.searchTermSuggestion.data
                  : [],
              }),
            a.a.getSettingValue(
              'search.searchBoxOnclick.productSuggestion.status'
            ) && h.getOnClickProducts(t.productSuggestion.data),
            (f = e)
          );
        },
        getOnClickRecentSearches: function (t) {
          var e;
          try {
            e = JSON.parse(localStorage.getItem(p));
          } catch (t) {
            e = [];
          }
          if (Array.isArray(e)) {
            if (!t) {
              var n = a.a.getSettingValue(
                'search.searchBoxOnclick.recentSearch.number'
              );
              n > 0 && (e = e.slice(0, n));
            }
          } else e = [];
          var r = [];
          return (
            e.forEach(function (t) {
              '' == t || c.a.isBadUrl(t) || r.push(t);
            }),
            r
          );
        },
        setOnClickRecentSearches: function (t) {
          if ('string' == typeof t && '' != t.trim() && !c.a.isBadUrl(t)) {
            t = t.trim();
            var e = h.getOnClickRecentSearches(!0),
              n = e.indexOf(t);
            n >= 0
              ? (e.splice(n, 1), e.unshift(t))
              : (e.unshift(t), (e = e.slice(0, 10)));
            try {
              localStorage.setItem(p, JSON.stringify(e));
            } catch (t) {}
          }
        },
        getOnClickProducts: function (t) {
          if (Array.isArray(t) && 0 != t.length) {
            var e = new URLSearchParams();
            e.append('shop', l.a.shopDomain),
              t.forEach(function (t) {
                return e.append('ids', t);
              });
            var n = e.toString();
            i.a.ajax({
              method: 'GET',
              url: s.a.getApiUrl('products') + '?' + n,
              dataType: 'json',
              success: function (t) {
                f.push({ key: o.a.ResultType.DEFAULT_PRODUCTS, values: t });
              },
            });
          }
        },
        onClickData: f,
      };
    e.a = h;
  },
  5: function (t, e, n) {
    'use strict';
    e.a = {
      Status: { ACTIVE: 'active', DISABLED: 'disabled' },
      FilterType: {
        COLLECTION: 'collection',
        VENDOR: 'vendor',
        PRODUCT_TYPE: 'product_type',
        TITLE: 'title',
        PRICE: 'price',
        VARIANTS_PRICE: 'variants_price',
        PERCENT_SALE: 'percent_sale',
        REVIEW_RATINGS: 'review_ratings',
        WEIGHT: 'weight',
        STOCK: 'stock',
        TAG: 'tag',
        MULTI_LEVEL_TAG: 'multi_level_tag',
        LOCATION: 'location',
      },
      SelectType: { SINGLE: 'single', MULTIPLE: 'multiple' },
      DisplayType: {
        LIST: 'list',
        BOX: 'box',
        RANGE: 'range',
        SWATCH: 'swatch',
        RATING: 'rating',
        SUB_CATEGORY: 'sub_category',
        MULTI_LEVEL_COLLECTIONS: 'multi_level_collections',
        MULTI_LEVEL_TAG: 'multi_level_tag',
      },
      ValueType: { ALL: 'all', SPECIFIC: 'specific' },
      SortType: {
        KEY_ASCENDING: 'key-asc',
        KEY_DESCENDING: 'key-desc',
        DOC_COUNT_ASCENDING: 'doc_count-asc',
        DOC_COUNT_DESCENDING: 'doc_count-desc',
      },
      ShowMoreType: {
        NONE: 'none',
        SCROLLBAR: 'scrollbar',
        VIEWMORE: 'viewmore',
        VIEWMORE_SCROLLBAR: 'viewmore_scrollbar',
      },
    };
  },
  51: function (module, __webpack_exports__, __webpack_require__) {
    'use strict';
    var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(22),
      core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default =
        __webpack_require__.n(
          core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__
        ),
      core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(23),
      core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default =
        __webpack_require__.n(
          core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__
        ),
      _helpers_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2),
      _helpers_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0),
      _helpers_globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3),
      compileTemplate = function compileTemplate(itemHtml, data) {
        if (
          'undefined' != typeof boostPFSIntegrationTemplate &&
          boostPFSIntegrationTemplate.hasOwnProperty('compileTemplate')
        ) {
          var _compileTemplate = '';
          for (var i in boostPFSIntegrationTemplate.compileTemplate)
            hascompileTemplate(i, !0)
              ? (_compileTemplate +=
                  boostPFSIntegrationCustomTemplate.compileTemplate[i])
              : (_compileTemplate +=
                  boostPFSIntegrationTemplate.compileTemplate[i]);
          try {
            eval(_compileTemplate);
          } catch (t) {
            console.log('Error when parsing 3rd app template code');
          }
        }
        return itemHtml;
      },
      call3rdAppFunction = function call3rdAppFunction(data) {
        if (
          'undefined' != typeof boostPFSIntegrationTemplate &&
          boostPFSIntegrationTemplate.hasOwnProperty('call3rdFunction')
        ) {
          var call3rdFunction = '';
          for (var i in boostPFSIntegrationTemplate.call3rdFunction)
            hascompileTemplate(i, !0, 'call3rdFunction')
              ? (call3rdFunction +=
                  boostPFSIntegrationCustomTemplate.call3rdFunction[i])
              : (call3rdFunction +=
                  boostPFSIntegrationTemplate.call3rdFunction[i]);
          try {
            eval(call3rdFunction);
          } catch (t) {
            console.log('Error when parsing 3rd app integration code');
          }
        }
      },
      hascompileTemplate = function (t, e) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 'compileTemplate',
          r = {};
        return (
          !!_helpers_globals__WEBPACK_IMPORTED_MODULE_4__.a.hasIntegration ||
          !(
            void 0 ===
              (r = e
                ? 'undefined' != typeof boostPFSIntegrationCustomTemplate
                  ? boostPFSIntegrationCustomTemplate
                  : {}
                : 'undefined' != typeof boostPFSIntegrationTemplate
                ? boostPFSIntegrationTemplate
                : {}) ||
            !r.hasOwnProperty(n) ||
            !r[n].hasOwnProperty(t) ||
            '' === r[n][t]
          )
        );
      },
      compileIntegrationTemplate = function (t, e) {
        return (e = e.replace(/{{itemReviews}}/g, ''));
      },
      call3rdIntegrationFunc = function (t) {},
      Integration = {
        compileTemplate: compileTemplate,
        call3rdAppFunction: call3rdAppFunction,
        hascompileTemplate: hascompileTemplate,
        compileIntegrationTemplate: compileIntegrationTemplate,
        call3rdIntegrationFunc: call3rdIntegrationFunc,
      };
    __webpack_exports__.a = Integration;
  },
  59: function (t, e, n) {
    'use strict';
    n(149),
      n(22),
      n(48),
      n(23),
      n(38),
      n(115),
      n(40),
      n(9),
      n(30),
      n(17),
      n(18),
      n(19),
      n(14),
      n(15),
      n(16),
      n(11),
      n(13),
      n(12);
    var r = n(10),
      i = n(2);
    function o(t) {
      return (o =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function a(t, e) {
      if (!(t instanceof e))
        throw new TypeError('Cannot call a class as a function');
    }
    function l(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function s(t, e) {
      return (s =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function c(t, e) {
      return !e || ('object' !== o(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function u(t) {
      return (u = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var p = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && s(t, e);
      })(p, t);
      var e,
        n,
        r,
        o = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = u(t);
            if (e()) {
              var i = u(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return c(this, n);
          };
        })(p);
      function p() {
        return a(this, p), o.apply(this, arguments);
      }
      return (
        (e = p),
        (n = [
          {
            key: '_highlightSuggestionResult',
            value: function (t, e) {
              if (
                i.a.getSettingValue('search.highlightSuggestionResult') &&
                e &&
                e.length > 1 &&
                t
              ) {
                var n,
                  r = function (t, e) {
                    return new RegExp(
                      t.replace(/([\(\)\{\}\[\]\.\+\-\=\\\/])/g, '\\$&'),
                      e ? 'g' : 'ig'
                    );
                  },
                  o = e.split(' '),
                  a = o.length;
                for (n = 0; n < a; n++) {
                  var l = r(o[n]),
                    s = t.match(l);
                  if (null !== s && s.length > 0) {
                    var c,
                      u = (s = s.filter(function (t, e) {
                        return s.indexOf(t) == e && '' != t;
                      })).length;
                    for (c = 0; c < u; c++)
                      s[c].length > 1 &&
                        ((l = r(s[c], !0)),
                        (t = t.replace(l, '<b>' + s[c] + '</b>')));
                  }
                }
              }
              return t;
            },
          },
        ]) && l(e.prototype, n),
        r && l(e, r),
        p
      );
    })(r.a);
    e.a = p;
  },
  6: function (t, e, n) {
    'use strict';
    var r = {
      filterTree: '.boost-pfs-filter-tree',
      filterTreeVertical: '.boost-pfs-filter-tree-v',
      filterTreeHorizontal: '.boost-pfs-filter-tree-h',
      filterTreeHorizontalWrapper: '.boost-pfs-filter-tree-h-wrapper',
      filterTreeMobileButton: '.boost-pfs-filter-tree-mobile-button',
      filterTreeDesktopButton: '.boost-pfs-filter-tree-desktop-button',
      filterTreeWrapper: '.boost-pfs-filter-wrapper',
      stickyElementDesktop: '.boost-pfs-filter-tree',
      stickyElementMobile: '.boost-pfs-filter-tree-mobile-button',
      stickyFilterTreeDesktopButtonWrapper:
        '.boost-pfs-filter-tree-desktop-button-sticky-wrapper',
      stickyFilterTreeMobileButtonWrapper:
        '.boost-pfs-filter-tree-mobile-button-stick-wrapper',
      endStickyDesktop: '.boost-pfs-filter-products',
      endStickyMobile: '.boost-pfs-filter-products',
      avoidStickyHeader:
        '#shopify-section-announcement-bar, #shopify-section-header,.site-header--opening, .js-navigation, .js-mobile-header-wrapper, .mobile-nav-bar-wrapper, mobile_nav-fixed--true, .site-header--sticky, .site-header-wrapper .action-bar-wrapper',
      filterRefineByVertical: '.boost-pfs-filter-refine-by-wrapper-v',
      filterRefineByHorizontal: '.boost-pfs-filter-refine-by-wrapper-h',
      products: '.boost-pfs-filter-products',
      collections: '.boost-pfs-search-result-collections',
      pages: '.boost-pfs-search-result-pages',
      searchBoxMobile: '#boost-pfs-search-box-mobile',
      searchBoxStyle3: '#boost-pfs-search-box-style3',
      searchTopPanels: '.boost-pfs-search-result-panel-controls',
      searchCollectionPagination:
        '.boost-pfs-search-result-collection-pagination',
      searchPagePagination: '.boost-pfs-search-result-page-pagination',
      searchPanelsProductShow: '.boost-pfs-search-panel-product-show',
      searchPanelsCollectionShow: '.boost-pfs-search-panel-collection-show',
      searchPanelsPageShow: '.boost-pfs-search-panel-page-show',
      searchTotalResult: '.boost-pfs-search-total-result',
      searchNoResultJson: '#boost-pfs-instant-search-products-not-found-json',
      inCollectionSearch: '.boost-pfs-in-collection-search',
      topShowLimit: '.boost-pfs-filter-top-show-limit',
      topSorting: '.boost-pfs-filter-top-sorting',
      topDisplayType: '.boost-pfs-filter-top-display-type',
      pagination:
        '.boost-pfs-filter-bottom-pagination,.boost-pfs-filter-top-pagination',
      bottomPagination: '.boost-pfs-filter-bottom-pagination',
      loadMore: '.boost-pfs-filter-load-more',
      loadMoreButtonContainer: '.boost-pfs-filter-load-more-button-container',
      btnLoadPreviousPageWrapperSelector:
        '.boost-pfs-filter-btn-load-previous-page-wrapper',
      btnLoadPreviousPageSelector: '.boost-pfs-filter-btn-load-previous-page',
      loadMoreLoading: '.boost-pfs-filter-load-more-loading',
      topNotification: '.boost-pfs-filter-top-notification',
      breadcrumb: '.boost-pfs-filter-breadcrumb',
      scrollToTop: '.boost-pfs-filter-scroll-to-top',
      otpProductItem: '',
      otpButtons: '',
      otpTopCartWrapper: '#cart-icon-bubble',
      otpTopCartLink:
        'header a[href="/cart"], a[href="/cart"].site-header__cart, .cart-page-link',
      otpTopCartCount: '#CartCount, .cart-count-bubble, .cart-count',
      otpTopCartSubtotal: '',
      productPageAtcButton:
        'form[action="/cart/add"] *[type="submit"], form[action="/cart/add"] *[name="add"]',
      productPageAtcForm: 'form[action="/cart/add"]',
      mostPopular: '.boost-pfs-most-popular',
      recentlyViewed: '.boost-pfs-recently-viewed',
      trackingProduct: '.boost-pfs-filter-products > *',
      trackingQuickView: '.boost-pfs-quickview-btn',
      trackingAddToCart:
        'form[action="/cart/add"] *[type="submit"], form[action="/cart/add"] *[name="add"]',
      trackingBuyNow: '.shopify-payment-button, #dynamic-checkout-cart',
      init: function () {
        var t = r;
        'undefined' != typeof boostPFSConfig &&
          boostPFSConfig.hasOwnProperty('selector') &&
          null !== boostPFSConfig.selector &&
          (t = Utils.mergeObject(t, boostPFSConfig.selector)),
          'undefined' != typeof boostPFSFilterConfig &&
            boostPFSFilterConfig.hasOwnProperty('selector') &&
            null !== boostPFSFilterConfig.selector &&
            (t = Utils.mergeObject(t, boostPFSFilterConfig.selector)),
          'undefined' != typeof boostPFSInstantSearchConfig &&
            boostPFSInstantSearchConfig.hasOwnProperty('selector') &&
            null !== boostPFSInstantSearchConfig.selector &&
            (t = Utils.mergeObject(t, boostPFSInstantSearchConfig.selector)),
          (r = t);
      },
    };
    e.a = r;
  },
  61: function (t, e, n) {
    'use strict';
    n(21),
      n(22),
      n(23),
      n(17),
      n(18),
      n(9),
      n(19),
      n(14),
      n(15),
      n(16),
      n(11),
      n(13),
      n(12);
    var r = n(1),
      i = n.n(r),
      o = n(10),
      a = n(42),
      l = n(4),
      s = n(2),
      c = n(7),
      u = n(6),
      p = n(0),
      f = n(3);
    function h(t) {
      return (h =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function y(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function d(t, e) {
      return (d =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function g(t, e) {
      return !e || ('object' !== h(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function m(t) {
      return (m = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var b = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && d(t, e);
      })(h, t);
      var e,
        n,
        r,
        o = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = m(t);
            if (e()) {
              var i = m(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return g(this, n);
          };
        })(h);
      function h() {
        var t;
        return (
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, h),
          ((t = o.call(this)).data = ''),
          (t.isBoundEvents = !1),
          (t.isOpen = !1),
          (t.inputMobileId = u.a.searchBoxMobile.substr(1)),
          (t.searchBox = null),
          (t.selector = {
            searchInput: u.a.searchBoxMobile,
            clearButton: '.' + l.a.searchSuggestionBtnClearMobile,
            closebutton: '.' + l.a.searchSuggestionBtnCloseMobile,
            submitButton: '.' + l.a.searchSuggestionBtnSubmitMobile,
            topPanel: '.' + l.a.searchSuggestion + '-mobile-top-panel',
            overlay: '.' + l.a.searchSuggestion + '-mobile-overlay',
            searchInputs:
              'input[name="' + s.a.getSettingValue('search.termKey') + '"]',
          }),
          t
        );
      }
      return (
        (e = h),
        (r = [
          {
            key: 'tempType',
            get: function () {
              return { SEARCH_BTN: 'search_btn', DEFAULT: 'default' };
            },
          },
          {
            key: 'isActive',
            value: function () {
              return !0;
            },
          },
        ]),
        (n = [
          {
            key: 'getTemplate',
            value: function (t) {
              switch (t) {
                case h.tempType.SEARCH_BTN:
                  return '\n\t\t\t\t\t<span class="{{class.searchSuggestionBtnSubmitMobile}}"><span>Submit</span></span>\n\t\t\t\t'.trim();
                default:
                  return '\n\t\t\t\t\t<div class="{{class.searchSuggestion}}-mobile-overlay"></div>\n\t\t\t\t\t<div class="{{class.searchSuggestion}}-mobile-top-panel">\n\t\t\t\t\t\t<form action="/search" method="get">\n\t\t\t\t\t\t\t<button type="button" class="{{class.searchSuggestionBtnCloseMobile}}"><-</button>\n\t\t\t\t\t\t\t{{btnSearch}}\n\t\t\t\t\t\t\t<input role="textbox" type="text" name="{{searchTermKey}}" placeholder="{{searchBoxPlaceholder}}" id="{{searchId}}" />\n\t\t\t\t\t\t\t<button role="textbox" type="button" class="{{class.searchSuggestionBtnClearMobile}}">X</button>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t'.trim();
              }
            },
          },
          {
            key: 'compileTemplate',
            value: function () {
              var t = '';
              return (
                s.a.getSettingValue('search.showSearchBtnMobile') &&
                  (t = this.getTemplate(h.tempType.SEARCH_BTN)),
                this.getTemplate()
                  .replace(/{{btnSearch}}/g, t)
                  .replace(
                    /{{searchTermKey}}/g,
                    s.a.getSettingValue('search.termKey')
                  )
                  .replace(
                    /{{searchBoxPlaceholder}}/g,
                    c.a.suggestion.searchBoxPlaceholder
                  )
                  .replace(/{{searchId}}/g, this.inputMobileId)
                  .replace(/{{class.searchSuggestion}}/g, l.a.searchSuggestion)
                  .replace(
                    /{{class.searchSuggestionBtnSubmitMobile}}/g,
                    l.a.searchSuggestionBtnSubmitMobile
                  )
                  .replace(
                    /{{class.searchSuggestionBtnCloseMobile}}/g,
                    l.a.searchSuggestionBtnCloseMobile
                  )
                  .replace(
                    /{{class.searchSuggestionBtnClearMobile}}/g,
                    l.a.searchSuggestionBtnClearMobile
                  )
              );
            },
          },
          {
            key: 'render',
            value: function () {
              i()('body').append(this.compileTemplate());
            },
          },
          {
            key: 'isBindEvents',
            value: function () {
              return !this.isBoundEvents;
            },
          },
          {
            key: 'bindEvents',
            value: function () {
              (this.$searchInput = i()(this.selector.searchInput)),
                (this.$clearButtonElement = i()(this.selector.clearButton)),
                (this.$closebuttonElement = i()(this.selector.closebutton)),
                (this.$submitButtonElement = i()(this.selector.submitButton)),
                (this.$topPanelElement = i()(this.selector.topPanel)),
                (this.$overlayElement = i()(this.selector.overlay)),
                (this.searchBox = new a.a(
                  this.inputMobileId,
                  this.$searchInput
                )),
                this.searchBox.refresh(),
                this.$closebuttonElement.on(
                  'click',
                  this.closeInstantSearchMobile.bind(this, !0)
                ),
                this.$clearButtonElement.on(
                  'click',
                  this.clearInstantSearchMobile.bind(this)
                ),
                (this.$searchInputs = i()(this.selector.searchInputs)),
                this.$searchInputs
                  .on('click', this._onClickSearchBox.bind(this))
                  .on('focus', this._onFocusSearchBox.bind(this))
                  .on('keyup', this._onTypeSearchBoxEvent.bind(this)),
                this.$searchInput.on(
                  'focus',
                  this._onFocusMobileInput.bind(this)
                ),
                this.$searchInput.on(
                  'keyup',
                  this._onKeyupSearchBox.bind(this)
                ),
                (this.$targetInput = null),
                (this.isBoundEvents = !0);
            },
          },
          {
            key: '_onClickSearchBox',
            value: function (t) {
              if (p.a.isFullWidthMobile()) {
                var e =
                  this.$targetInput && p.a.stripHtml(this.$targetInput.val());
                e && this.$searchInputs.val(e),
                  this.$searchInput &&
                    (this.$searchInput.length > 0 &&
                    '' != p.a.stripHtml(this.$searchInput.val())
                      ? this.openSuggestionMobile()
                      : this.searchBox &&
                        this.searchBox.searchAutoComplete &&
                        this.searchBox.searchAutoComplete
                          .enableOnClickSearchBox &&
                        (this.openSuggestionMobile(),
                        this.searchBox.searchAutoComplete.showOnClickSuggestion()));
              }
            },
          },
          {
            key: '_onKeyupSearchBox',
            value: function (t) {
              var e;
              this.$targetInput.val(
                p.a.stripHtml(
                  null == t || null === (e = t.currentTarget) || void 0 === e
                    ? void 0
                    : e.value
                )
              );
            },
          },
          {
            key: '_onFocusSearchBox',
            value: function (t) {
              if (p.a.isFullWidthMobile()) {
                var e = t && t.target ? t.target.id : '',
                  n = this.$searchInput ? this.$searchInput.attr('id') : '';
                '' != e &&
                  '' != n &&
                  e != n &&
                  ((this.$targetInput = i()('#' + e)),
                  this.showSearchBoxMobile()),
                  this.$searchInput.trigger('click');
              }
            },
          },
          {
            key: '_onFocusMobileInput',
            value: function (t) {
              var e = this;
              this.isReFocus
                ? (t &&
                    (t.stopImmediatePropagation(),
                    t.stopPropagation(),
                    t.preventDefault()),
                  (this.isReFocus = !1),
                  this._onFocusSearchBox(t))
                : setTimeout(function () {
                    (document.activeElement && document.activeElement.id
                      ? '#' + document.activeElement.id
                      : '') != u.a.searchBoxMobile &&
                      ((e.isReFocus = !0), e.$searchInput.focus());
                  }, 0);
            },
          },
          {
            key: '_onTypeSearchBoxEvent',
            value: function (t) {
              p.a.InstantSearch.isFullWidthMobile() &&
                (this.searchBox.instantSearchResult.$wrapper.show(),
                '' == p.a.stripHtml(t.target.value)
                  ? (this.searchBox &&
                    this.searchBox.searchAutoComplete &&
                    this.searchBox.searchAutoComplete.enableOnClickSearchBox
                      ? this.searchBox.searchAutoComplete.showOnClickSuggestion()
                      : this.closeInstantSearchMobile(),
                    this.$clearButtonElement.hide())
                  : this.$clearButtonElement.show());
            },
          },
          {
            key: 'showSearchBoxMobile',
            value: function () {
              var t = this;
              (this.isOpen = !0),
                this.onClickOutsideSuggestionMobileEvent(),
                this.scrollSuggestionMobileEvent(),
                '' == p.a.stripHtml(this.$searchInput.val())
                  ? this.$clearButtonElement.hide()
                  : this.$clearButtonElement.show(),
                this.$searchInput.is(':focus') ||
                  (this.$topPanelElement.show(),
                  this.$overlayElement.show(),
                  i()('[tabindex="-1"]')
                    .removeAttr('tabindex')
                    .addClass(l.a.searchSuggestionNoTabIndex),
                  p.a.isMobile() &&
                    i()('[data-open=true]').length > 0 &&
                    i()('[data-open=true]').attr('data-open', !1),
                  setTimeout(function () {
                    t.$searchInput.focus();
                  }, 100),
                  this.afterShowSearchBoxMobile());
            },
          },
          {
            key: 'closeInstantSearchMobile',
            value: function (t) {
              this.searchBox.instantSearchResult.$wrapper.hide(),
                (t = void 0 !== t && t) &&
                  (this.$topPanelElement.hide(), this.$overlayElement.hide()),
                this._setValueAllSearchBoxes(),
                i()('.' + l.a.searchSuggestionNoTabIndex).attr('tabindex', -1),
                this.searchBox.instantSearchResult.$wrapper.hasClass(
                  l.a.searchSuggestionOpen
                ) &&
                  this.searchBox.instantSearchResult.$wrapper.removeClass(
                    l.a.searchSuggestionOpen
                  ),
                i()('body').hasClass(l.a.searchSuggestionMobileOpen) &&
                  i()('body').removeClass(l.a.searchSuggestionMobileOpen),
                this.afterCloseInstantSearchMobile(t);
            },
          },
          {
            key: 'clearInstantSearchMobile',
            value: function () {
              this.$clearButtonElement.hide(),
                (f.a.currentTerm = ''),
                this._setValueAllSearchBoxes(''),
                this.searchBox &&
                this.searchBox.searchAutoComplete &&
                this.searchBox.searchAutoComplete.enableOnClickSearchBox
                  ? this.searchBox.searchAutoComplete.showOnClickSuggestion()
                  : this.closeInstantSearchMobile(),
                this.$searchInput.focus();
            },
          },
          { key: 'afterCloseInstantSearchMobile', value: function (t) {} },
          {
            key: '_setValueAllSearchBoxes',
            value: function (t) {
              void 0 === t && (t = p.a.stripHtml(f.a.currentTerm)),
                (f.a.currentTerm = p.a.stripHtml(t)),
                this.$searchInputs.val(p.a.stripHtml(t));
            },
          },
          {
            key: 'onClickOutsideSuggestionMobileEvent',
            value: function () {
              var t = this;
              i()(document).on('touchstart', function (e) {
                if (e.target) {
                  var n = i()(e.target),
                    r =
                      n.closest(
                        '.' + l.a.searchSuggestion + '-mobile-top-panel'
                      ).length > 0,
                    o =
                      n.closest('.' + l.a.searchSuggestionWrapper + ' div')
                        .length > 0;
                  r || o || t.closeInstantSearchMobile(!0);
                }
              });
            },
          },
          {
            key: 'scrollSuggestionMobileEvent',
            value: function () {
              var t = this;
              i()(document).on('touchmove', function (e) {
                t.$searchInput.is(':focus') && t.$searchInput.blur();
              });
            },
          },
          { key: 'afterShowSearchBoxMobile', value: function () {} },
          {
            key: 'openSuggestionMobile',
            value: function () {
              this.beforeOpenSuggestionMobile(),
                i()('body').hasClass(l.a.searchSuggestionMobileOpen) ||
                  i()('body').addClass(l.a.searchSuggestionMobileOpen),
                this.showSearchBoxMobile(),
                this.searchBox.instantSearchResult.$wrapper.show(),
                this.afterOpenSuggestionMobile();
            },
          },
          { key: 'beforeOpenSuggestionMobile', value: function () {} },
          { key: 'afterOpenSuggestionMobile', value: function () {} },
        ]) && y(e.prototype, n),
        r && y(e, r),
        h
      );
    })(o.a);
    e.a = b;
  },
  62: function (t, e, n) {
    'use strict';
    n.r(e);
    n(22),
      n(54),
      n(40),
      n(9),
      n(17),
      n(18),
      n(19),
      n(14),
      n(15),
      n(16),
      n(11),
      n(13),
      n(12);
    var r = n(1),
      i = n.n(r),
      o = n(2),
      a = n(7),
      l = n(3),
      s = n(6),
      c = n(36),
      u = (n(30), n(68), n(80), n(24), n(25), n(99), n(0)),
      p = n(42),
      f = n(61),
      h = n(76),
      y = n(86),
      d = (n(21), n(10)),
      g = n(51);
    function m(t) {
      return (m =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function b(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function v(t, e) {
      return (v =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function S(t, e) {
      return !e || ('object' !== m(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function T(t) {
      return (T = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var O = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && v(t, e);
      })(p, t);
      var e,
        n,
        r,
        a = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = T(t);
            if (e()) {
              var i = T(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return S(this, n);
          };
        })(p);
      function p() {
        var t;
        return (
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, p),
          ((t = a.call(this)).data = null),
          (t.id = null),
          (t.totalProduct = null),
          (t.$element = null),
          (t.$productList = i()(s.a.products)),
          (t.settings = {
            enableKeepScrollbackPosition: o.a.getSettingValue(
              'general.enableKeepScrollbackPosition'
            ),
            keepScrollbackPositionType: o.a.getSettingValue(
              'general.keepScrollbackPositionType'
            ),
            sessionStorageScrollbackPosition: o.a.getSettingValue(
              'general.sessionStorageScrollbackPosition'
            ),
          }),
          t
        );
      }
      return (
        (e = p),
        (n = [
          {
            key: 'init',
            value: function () {
              window.BoostOTP && BoostOTP.OTPButtons.init(this);
            },
          },
          {
            key: 'compileTemplate',
            value: function () {
              return '';
            },
          },
          {
            key: 'render',
            value: function () {
              if (!this.$element || 0 == this.$element.length)
                if (this.parent.isRender()) {
                  var t = this.compileTemplate();
                  'function' == typeof u.a.compileShopifyProductVariables &&
                    (t = u.a.compileShopifyProductVariables(this.data, t)),
                    'function' == typeof u.a.compileShopifyProductMetafield &&
                      (t = u.a.compileShopifyProductMetafield(this.data, t)),
                    (t = g.a.compileTemplate(t, this.data)),
                    (t = g.a.compileIntegrationTemplate(this.data, t)) &&
                      'string' == typeof t &&
                      (this.$element = i()(t.trim()));
                } else {
                  var e = o.a.getSettingValue('general.otpProductItemClass');
                  this.$element = e
                    ? this.$productList.children(e).eq(this.index)
                    : this.$productList.children().eq(this.index);
                }
              if (this.$element) {
                this.$element.attr('data-id', u.a.stripHtml(this.id));
                var n = u.a.stripHtml(this.$element.attr('data-page')),
                  r =
                    l.a.queryParams.page && !isNaN(l.a.queryParams.page)
                      ? l.a.queryParams.page
                      : 1;
                (n && !isNaN(n)) ||
                  this.$element.attr('data-page', u.a.stripHtml(r)),
                  window.BoostOTP && BoostOTP.OTPButtons.render(this);
              }
            },
          },
          {
            key: 'bindEvents',
            value: function () {
              var t = u.a.isSearchPage() || u.a.isCollectionPage(),
                e =
                  u.a.isiOS() &&
                  o.a.getSettingValue('general.paginationType') ==
                    ProductPagination.Type.DEFAULT;
              t &&
                !e &&
                this.settings.enableKeepScrollbackPosition &&
                this._bindKeepScrollbackPositionEvent(),
                window.BoostOTP && BoostOTP.OTPButtons.bindEvents(this);
            },
          },
          {
            key: '_bindKeepScrollbackPositionEvent',
            value: function () {
              if (this.$element)
                if (u.a.isMobileDevice()) {
                  var t = !1;
                  this.$element
                    .on('touchstart', function () {
                      t = !1;
                    })
                    .on('touchmove', function () {
                      t = !0;
                    })
                    .on(
                      'touchend',
                      this._onClickKeepPositionEvent.bind(this, t)
                    );
                } else
                  this.$element.on(
                    'click',
                    this._onClickKeepPositionEvent.bind(this, !1)
                  );
            },
          },
          {
            key: '_onClickKeepPositionEvent',
            value: function (t, e) {
              if (!t && this.id) {
                var n = JSON.parse(JSON.stringify(l.a.queryParams)),
                  r = u.a.stripHtml(this.$element.attr('data-page'));
                n.page = r && !isNaN(r) ? r : 1;
                var i = c.a.buildAddressBarUrl(n),
                  o = {
                    productId: this.id,
                    page: r,
                    position: window.pageYOffset,
                    offset: this.$element.offset().top - window.pageYOffset,
                    url: i,
                  };
                if (
                  'sessionStorage' == this.settings.keepScrollbackPositionType
                )
                  sessionStorage.setItem(
                    this.settings.sessionStorageScrollbackPosition,
                    JSON.stringify(o)
                  );
                else {
                  var a = c.a.getHistoryState();
                  a && a.param && (o.param = a.param);
                }
                window.history.replaceState(o, document.title, i);
              }
            },
          },
          {
            key: 'setData',
            value: function (t, e) {
              (this.data = t),
                (this.id = t.id),
                (this.index = e),
                (this.totalProduct = this.parent.totalProduct);
            },
          },
        ]) && b(e.prototype, n),
        r && b(e, r),
        p
      );
    })(d.a);
    function P(t) {
      return (P =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function w(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function _(t, e) {
      return (_ =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function C(t, e) {
      return !e || ('object' !== P(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function k(t) {
      return (k = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var E = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && _(t, e);
      })(o, t);
      var e,
        n,
        r,
        i = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = k(t);
            if (e()) {
              var i = k(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return C(this, n);
          };
        })(o);
      function o() {
        return (
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, o),
          i.call(this)
        );
      }
      return (
        (e = o),
        (n = [
          {
            key: 'compileTemplate',
            value: function () {
              console.warn(
                'Missing buildProductGridItem function in theme lib'
              );
            },
          },
        ]) && w(e.prototype, n),
        r && w(e, r),
        o
      );
    })(O);
    function R(t) {
      return (R =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function I(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function L(t, e) {
      return (L =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function A(t, e) {
      return !e || ('object' !== R(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function x(t) {
      return (x = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var F = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && L(t, e);
      })(o, t);
      var e,
        n,
        r,
        i = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = x(t);
            if (e()) {
              var i = x(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return A(this, n);
          };
        })(o);
      function o() {
        return (
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, o),
          i.call(this)
        );
      }
      return (
        (e = o),
        (n = [
          {
            key: 'compileTemplate',
            value: function () {
              console.warn(
                'Missing buildProductListItem function in theme lib'
              );
            },
          },
        ]) && I(e.prototype, n),
        r && I(e, r),
        o
      );
    })(O);
    function B(t) {
      return (B =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function D(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function $(t, e) {
      return ($ =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function j(t, e) {
      return !e || ('object' !== B(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function M(t) {
      return (M = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var V = (function (t) {
        !(function (t, e) {
          if ('function' != typeof e && null !== e)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && $(t, e);
        })(o, t);
        var e,
          n,
          r,
          i = (function (t) {
            function e() {
              if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            }
            return function () {
              var n,
                r = M(t);
              if (e()) {
                var i = M(this).constructor;
                n = Reflect.construct(r, arguments, i);
              } else n = r.apply(this, arguments);
              return j(this, n);
            };
          })(o);
        function o() {
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError('Cannot call a class as a function');
            })(this, o),
            i.call(this)
          );
        }
        return (
          (e = o),
          (n = [
            {
              key: 'compileTemplate',
              value: function () {
                console.warn(
                  'Missing buildProductCollageItem function in theme lib'
                );
              },
            },
          ]) && D(e.prototype, n),
          r && D(e, r),
          o
        );
      })(O),
      N =
        (n(45),
        n(34),
        n(38),
        n(97),
        n(23),
        n(41),
        n(82),
        n(186),
        n(66),
        n(120),
        n(67),
        n(48),
        n(27),
        n(4));
    n(187);
    function H(t) {
      return (H =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function U(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function W(t, e) {
      return (W =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function q(t, e) {
      return !e || ('object' !== H(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function G(t) {
      return (G = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var z = (function (t) {
        !(function (t, e) {
          if ('function' != typeof e && null !== e)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && W(t, e);
        })(l, t);
        var e,
          n,
          r,
          a = (function (t) {
            function e() {
              if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            }
            return function () {
              var n,
                r = G(t);
              if (e()) {
                var i = G(this).constructor;
                n = Reflect.construct(r, arguments, i);
              } else n = r.apply(this, arguments);
              return q(this, n);
            };
          })(l);
        function l() {
          var t;
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError('Cannot call a class as a function');
            })(this, l),
            ((t = a.call(this)).$element = i()(s.a.searchTopPanels)),
            (t.data = null),
            (t.panelItems = []),
            (t.eventType = 'init'),
            (t.selector = {
              products: s.a.products,
              collections: s.a.collections,
              pages: s.a.pages,
              filterTree: s.a.filterTree,
              filterTreeMobileButton: s.a.filterTreeMobileButton,
              pagination: s.a.pagination,
              loadMore: s.a.loadMore,
              btnLoadPreviousPageWrapperSelector:
                s.a.btnLoadPreviousPageWrapperSelector,
              searchPanelsProductShow: s.a.searchPanelsProductShow,
              searchPanelsCollectionShow: s.a.searchPanelsCollectionShow,
              searchPanelsPageShow: s.a.searchPanelsPageShow,
            }),
            (t.settings = {
              searchPanelDefault: o.a.getSettingValue(
                'search.searchPanelDefault'
              ),
              searchPanelList: o.a.getSettingValue('search.searchPanelList'),
              searchPanelBlocks: o.a.getSettingValue(
                'search.searchPanelBlocks'
              ),
            }),
            (t.isFetchedFilterData = !1),
            t
          );
        }
        return (
          (e = l),
          (r = [
            {
              key: 'isPanelActive',
              value: function (t) {
                return !u.a.isSearchPage() || l.getPanelActive() == t;
              },
            },
            {
              key: 'getPanelActive',
              value: function () {
                return Globals.hasOwnProperty('searchDisplay') &&
                  Object.values(tt.Enum).indexOf(Globals.searchDisplay) > -1
                  ? Globals.searchDisplay
                  : o.a.getSettingValue('search.searchPanelDefault');
              },
            },
          ]),
          (n = [
            {
              key: 'init',
              value: function () {
                var t = this;
                (this.panelItems = []),
                  this.settings.searchPanelList.forEach(function (e) {
                    var n = t.settings.searchPanelBlocks[e],
                      r = new tt(n, e);
                    t.addComponent(r), t.panelItems.push(r);
                  });
              },
            },
            {
              key: 'isRender',
              value: function () {
                return u.a.isSearchPage() && this.isFetchedFilterData;
              },
            },
            {
              key: 'render',
              value: function () {
                var t = this,
                  e = 0;
                switch (
                  (this.$element.empty(),
                  this.panelItems.forEach(function (n) {
                    t.$element.append(n.$element), n.isRendered && e++;
                  }),
                  l.getPanelActive())
                ) {
                  case tt.Enum.COLLECTION:
                    this.showPanelCollection();
                    break;
                  case tt.Enum.PAGE:
                    this.showPanelPage();
                    break;
                  default:
                    this.showPanelProduct();
                }
                this.$element.addClass('boost-pfs-search-panel-items-' + e);
              },
            },
            {
              key: 'hidePanelProduct',
              value: function () {
                i()(this.selector.products).addClass(N.a.hidden),
                  i()(this.selector.filterTreeMobileButton).addClass(
                    N.a.hidden
                  ),
                  i()(this.selector.filterTree).addClass(N.a.hidden),
                  i()(this.selector.pagination).addClass(N.a.hidden),
                  i()(this.selector.loadMore).addClass(N.a.hidden),
                  i()(
                    this.selector.btnLoadPreviousPageWrapperSelector
                  ).addClass(N.a.hidden),
                  i()(this.selector.searchPanelsProductShow).addClass(
                    N.a.hidden
                  );
              },
            },
            {
              key: 'hidePanelCollection',
              value: function () {
                i()(this.selector.collections).parent().addClass(N.a.hidden),
                  i()(this.selector.searchPanelsCollectionShow).addClass(
                    N.a.hidden
                  );
              },
            },
            {
              key: 'hidePanelPage',
              value: function () {
                i()(this.selector.pages).parent().addClass(N.a.hidden),
                  i()(this.selector.searchPanelsPageShow).addClass(N.a.hidden);
              },
            },
            {
              key: 'showPanelProduct',
              value: function () {
                this.hidePanelCollection(),
                  this.hidePanelPage(),
                  i()(this.selector.products).removeClass(N.a.hidden),
                  i()(this.selector.filterTree).removeClass(N.a.hidden),
                  i()(this.selector.filterTreeMobileButton).removeClass(
                    N.a.hidden
                  ),
                  i()(this.selector.pagination).removeClass(N.a.hidden),
                  i()(this.selector.loadMore).removeClass(N.a.hidden),
                  i()(
                    this.selector.btnLoadPreviousPageWrapperSelector
                  ).removeClass(N.a.hidden),
                  i()(this.selector.searchPanelsProductShow).removeClass(
                    N.a.hidden
                  );
              },
            },
            {
              key: 'showPanelCollection',
              value: function () {
                this.hidePanelProduct(),
                  this.hidePanelPage(),
                  this.data.total_collection > 0 &&
                    (i()(this.selector.collections)
                      .parent()
                      .removeClass(N.a.hidden),
                    i()(this.selector.searchPanelsCollectionShow).removeClass(
                      N.a.hidden
                    ));
              },
            },
            {
              key: 'showPanelPage',
              value: function () {
                this.hidePanelProduct(),
                  this.hidePanelCollection(),
                  this.data.total_page > 0 &&
                    (i()(this.selector.pages).parent().removeClass(N.a.hidden),
                    i()(this.selector.searchPanelsPageShow).removeClass(
                      N.a.hidden
                    ));
              },
            },
            {
              key: 'setData',
              value: function (t, e) {
                (this.isFetchedFilterData = !0),
                  t && (this.data = t),
                  (this.eventType = e),
                  this.panelItems.forEach(function (n) {
                    n.setData(t, e);
                  });
              },
            },
          ]) && U(e.prototype, n),
          r && U(e, r),
          l
        );
      })(d.a),
      K = n(8);
    function Y(t) {
      return (Y =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function Q(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function J(t, e) {
      return (J =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function X(t, e) {
      return !e || ('object' !== Y(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function Z(t) {
      return (Z = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var tt = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && J(t, e);
      })(s, t);
      var e,
        n,
        r,
        o = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = Z(t);
            if (e()) {
              var i = Z(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return X(this, n);
          };
        })(s);
      function s(t, e) {
        var n;
        return (
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, s),
          ((n = o.call(this)).$element = null),
          (n.data = t),
          (n.type = e),
          (n.eventType = 'init'),
          (n.isRenderPanelContent = !1),
          (n.limit = 25),
          (n.page = 1),
          (n.active = t.active),
          n.type == s.Enum.PRODUCT
            ? ((n.limit = Settings.getSettingValue('general.limit')),
              (n.page = l.a.queryParams.page))
            : t.hasOwnProperty('pageSize') && (n.limit = parseInt(t.pageSize)),
          n
        );
      }
      return (
        (e = s),
        (r = [
          {
            key: 'Enum',
            get: function () {
              return {
                COLLECTION: 'collections',
                PRODUCT: 'products',
                PAGE: 'pages',
              };
            },
          },
        ]),
        (n = [
          {
            key: 'getTemplate',
            value: function () {
              return '\n\t\t\t<li class="{{class.searchResultPanelItem}}">\n\t\t\t\t<button>{{panelItemLabel}} ({{panelItemCount}})</button>\n\t\t\t</li>\n\t\t'.trim();
            },
          },
          {
            key: 'compileTemplate',
            value: function () {
              return this.getTemplate()
                .replace(/{{panelItemLabel}}/g, u.a.stripHtml(this.data.label))
                .replace(/{{panelItemCount}}/g, u.a.stripHtml(this.totalResult))
                .replace(
                  /{{class.searchResultPanelItem}}/g,
                  N.a.searchResultPanelItem
                );
            },
          },
          {
            key: 'isActive',
            value: function () {
              return z.isPanelActive(this.type);
            },
          },
          {
            key: 'isRender',
            value: function () {
              return (
                this.type == s.Enum.PRODUCT ||
                (this.active && this.totalResult && 'init' == this.eventType)
              );
            },
          },
          {
            key: 'render',
            value: function () {
              (this.$element = i()(this.compileTemplate())),
                this.isActive() && this.$element.addClass('boost-active');
            },
          },
          {
            key: 'bindEvents',
            value: function () {
              this.$element &&
                this.$element.on('click', this._onClickPanelItem.bind(this));
            },
          },
          {
            key: 'setData',
            value: function (t, e) {
              var n = 0,
                r = '',
                i = this.data.hasOwnProperty('label') ? this.data.label : '';
              switch (this.type) {
                case s.Enum.COLLECTION:
                  (n = t.total_collection),
                    (r = a.a.search.searchPanelCollection
                      ? a.a.search.searchPanelCollection
                      : i);
                  break;
                case s.Enum.PAGE:
                  (n = t.total_page),
                    (r = a.a.search.searchPanelPage
                      ? a.a.search.searchPanelPage
                      : i);
                  break;
                default:
                  (n = t.total_product),
                    (r = a.a.search.searchPanelProduct
                      ? a.a.search.searchPanelProduct
                      : i);
              }
              (this.eventType = e),
                (this.totalResult = n),
                (this.data.label = r),
                this.type == s.Enum.PRODUCT &&
                  (this.page = l.a.queryParams.page);
            },
          },
          {
            key: '_onClickPanelItem',
            value: function (t) {
              t.preventDefault(),
                (l.a.searchDisplay = this.type),
                K.default.setParam('limit', this.limit),
                K.default.setParam('page', this.page);
              var e = this.parent,
                n = e.parent.searchResultTotal;
              switch (
                (this.isRenderPanelContent ||
                  this.type === s.Enum.PRODUCT ||
                  K.default.getFilterData(
                    'search',
                    this._searchPanelCallback.bind(this)
                  ),
                this.$element.addClass('boost-active'),
                this.$element.siblings().removeClass('boost-active'),
                this.type)
              ) {
                case s.Enum.COLLECTION:
                  e.showPanelCollection();
                  break;
                case s.Enum.PAGE:
                  e.showPanelPage();
                  break;
                default:
                  e.showPanelProduct();
              }
              n.setData(this.totalResult, this.type),
                n.refresh(),
                (this.isRenderPanelContent = !0);
            },
          },
          {
            key: '_searchPanelCallback',
            value: function (t) {
              var e = this.parent.parent.collectionList,
                n = this.parent.parent.collectionListPagination,
                r =
                  !!t.hasOwnProperty('total_collection') && t.total_collection;
              l.a.searchDisplay === s.Enum.PAGE &&
                ((e = this.parent.parent.pageList),
                (n = this.parent.parent.pageListPagination),
                (r = !!t.hasOwnProperty('total_page') && t.total_page)),
                e.setData(t),
                e.refresh(),
                n.setData(t, r, this.limit, this.page),
                n.refresh();
            },
          },
        ]) && Q(e.prototype, n),
        r && Q(e, r),
        s
      );
    })(d.a);
    function et(t) {
      return (et =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function nt(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function rt(t, e) {
      return (rt =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function it(t, e) {
      return !e || ('object' !== et(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function ot(t) {
      return (ot = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var at = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && rt(t, e);
      })(l, t);
      var e,
        n,
        r,
        a = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = ot(t);
            if (e()) {
              var i = ot(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return it(this, n);
          };
        })(l);
      function l() {
        var t;
        return (
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, l),
          ((t = a.call(this)).data = null),
          (t.totalProduct = null),
          (t.paginationType = ''),
          (t.$loadMore = i()(s.a.loadMore)),
          (t.settings = {
            limit: o.a.getSettingValue('general.limit'),
            showLoading: o.a.getSettingValue('general.showLoading'),
            showLoadMoreLoading: o.a.getSettingValue(
              'general.showLoadMoreLoading'
            ),
          }),
          (t.settings.limit <= 0 || t.settings.limit > 70) &&
            (t.settings.limit = 24),
          t
        );
      }
      return (
        (e = l),
        (r = [
          {
            key: 'Type',
            get: function () {
              return {
                DEFAULT: 'default',
                LOAD_MORE: 'load_more',
                INFINITE: 'infinite',
              };
            },
          },
        ]),
        (n = [
          {
            key: 'isRender',
            value: function () {
              return null !== this.data;
            },
          },
          {
            key: 'setData',
            value: function (t) {
              t && (this.data = t),
                (this.totalProduct = this.parent.totalProduct),
                (this.paginationType = o.a.getSettingValue(
                  'general.paginationType'
                ));
            },
          },
          {
            key: 'showLoading',
            value: function () {
              this.settings.showLoadMoreLoading &&
                !1 === this.settings.showLoading &&
                this.$loadMore.find(s.a.loadMoreLoading).show();
            },
          },
          {
            key: 'hideLoading',
            value: function () {
              this.settings.showLoadMoreLoading &&
                this.$loadMore.find(s.a.loadMoreLoading).hide();
            },
          },
        ]) && nt(e.prototype, n),
        r && nt(e, r),
        l
      );
    })(d.a);
    function lt(t) {
      return (lt =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function st(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function ct(t, e) {
      return (ct =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function ut(t, e) {
      return !e || ('object' !== lt(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function pt(t) {
      return (pt = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var ft = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && ct(t, e);
      })(p, t);
      var e,
        n,
        r,
        c = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = pt(t);
            if (e()) {
              var i = pt(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return ut(this, n);
          };
        })(p);
      function p() {
        var t;
        return (
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, p),
          ((t = c.call(this)).data = null),
          (t.totalProduct = null),
          (t.$element = i()(s.a.products)),
          (t.settings = {
            loadProductFromLiquid: o.a.getSettingValue(
              'general.loadProductFromLiquid'
            ),
            loadProductFromLiquidType: o.a.getSettingValue(
              'general.loadProductFromLiquidType'
            ),
            sessionStoragePreviousPageEvent: o.a.getSettingValue(
              'general.sessionStoragePreviousPageEvent'
            ),
            themeId: o.a.getSettingValue('general.theme_id'),
            productAndVariantAvailable: o.a.getSettingValue(
              'general.productAndVariantAvailable'
            ),
            sortingAvailableFirst: o.a.getSettingValue(
              'general.sortingAvailableFirst'
            ),
            enableKeepScrollbackPosition: o.a.getSettingValue(
              'general.enableKeepScrollbackPosition'
            ),
            keepScrollbackPositionType: o.a.getSettingValue(
              'general.keepScrollbackPositionType'
            ),
            sessionStorageScrollbackPosition: o.a.getSettingValue(
              'general.sessionStorageScrollbackPosition'
            ),
          }),
          t
        );
      }
      return (
        (e = p),
        (r = [
          {
            key: 'Enum',
            get: function () {
              return {
                itemStyle: { GRID: 'grid', LIST: 'list', COLLAGE: 'collage' },
                loadProductType: { JS: 'js', AJAX: 'ajax', SYNC: 'sync' },
              };
            },
          },
        ]),
        (n = [
          {
            key: 'isRender',
            value: function () {
              var t = u.a.getDefaultSorting();
              return (
                null != this.data &&
                z.isPanelActive(tt.Enum.PRODUCT) &&
                (!l.a.loadProductFirst ||
                  !u.a.isCollectionPage() ||
                  u.a.isVendorPage() ||
                  u.a.isTagPage() ||
                  u.a.isTypePage() ||
                  ('' != t &&
                    t != o.a.getSettingValue('general.default_sort_by')) ||
                  ('best-selling' === l.a.defaultSorting &&
                    !o.a.getSettingValue(
                      'general.loadProductFirstBestSelling'
                    )) ||
                  l.a.defaultSorting.startsWith('extra') ||
                  this.settings.productAndVariantAvailable ||
                  this.settings.sortingAvailableFirst ||
                  l.a.hasFilterByLocation ||
                  (l.a.loadProductFirst &&
                    (l.a.hasFilterOptionParam || 'init' != this.eventType)) ||
                  o.a.getSettingValue('general.enableVariantsDisplay'))
              );
            },
          },
          {
            key: 'getNoResultTemplate',
            value: function () {
              return '\n\t\t\t<div class="boost-pfs-filter-message"><p><em>{{content}}</em></p></div>\n\t\t'.trim();
            },
          },
          {
            key: 'getNoResultSearchTemplate',
            value: function () {
              return '\n\t\t\t<div class="boost-pfs-filter-message result-empty-search">\n\t\t\t\t<p>{{content}}</p>\n\t\t\t\t<p><a href="{{link}}">{{label.seeAllProducts}}</a></p>\n\t\t\t</div>\n\t\t'.trim();
            },
          },
          {
            key: 'render',
            value: function () {
              this._catchError(),
                this.totalProduct > 0 &&
                  (['incollection_search', 'history'].includes(
                    l.a.queryParams.event_type
                  ) && u.a.showFilterTree(),
                  this.settings.loadProductFromLiquid
                    ? this.buildProductListDataFromLiquid()
                    : this.buildProductList()),
                o.a.getSettingValue('mostPopular.mostPopularEnable') &&
                  i()(s.a.mostPopular).length > 0 &&
                  new MostPopular().refresh();
            },
          },
          {
            key: 'bindEvents',
            value: function () {
              var t = u.a.isSearchPage() || u.a.isCollectionPage(),
                e =
                  u.a.isiOS() &&
                  o.a.getSettingValue('general.paginationType') ==
                    at.Type.DEFAULT;
              t &&
                !e &&
                this.settings.enableKeepScrollbackPosition &&
                this._bindKeepScrollbackPositionEvent();
            },
          },
          {
            key: 'setData',
            value: function (t) {
              var e = this;
              if (
                ((this.data = t),
                (this.totalProduct = this.parent.totalProduct),
                this.prepareProductData(),
                (this.eventType = this.parent.eventType),
                (this.eventInfo = this.parent.eventInfo),
                (this.children = []),
                (this.productItems = []),
                (this.ajaxPage = 0),
                this.totalProduct > 0)
              ) {
                var n = this._getProductItemClass();
                t.forEach(function (t, r) {
                  var i = new n();
                  e.addComponent(i), i.setData(t, r), e.productItems.push(i);
                });
              }
            },
          },
          {
            key: '_getProductItemClass',
            value: function () {
              switch (l.a.queryParams.display) {
                case p.Enum.itemStyle.LIST:
                  return F;
                case p.Enum.itemStyle.COLLAGE:
                  return V;
                default:
                  return E;
              }
            },
          },
          {
            key: 'buildProductListDataFromLiquid',
            value: function () {
              u.a.isDefaultPaginationType() ||
                'page' != this.eventType ||
                i()(window).off('scroll'),
                this.settings.loadProductFromLiquidType ==
                p.Enum.loadProductType.SYNC
                  ? this._getProductListHtmlBySync()
                  : this._getProductListHtmlByAjax();
            },
          },
          {
            key: 'prepareProductData',
            value: function () {
              var t = this,
                e = this.data;
              return Array.isArray(e)
                ? (e.forEach(function (e) {
                    var n = [];
                    e.options_with_values.forEach(function (t) {
                      n.push(t.name);
                    }),
                      (e.options = n);
                    var r = !0;
                    if (e.variants && e.variants.length > 0) {
                      var i = e.variants[0];
                      i.hasOwnProperty('fulfillment_service') &&
                        'gift_card' == i.fulfillment_service &&
                        (r = !1);
                    }
                    u.a.isEnableShopifyMultipleCurrencies() &&
                      (u.a.isConvertCurrenciesOnFrontEnd()
                        ? ((e.price_min = u.a.convertPriceBasedOnActiveCurrency(
                            e.price_min,
                            r
                          )),
                          (e.price_max = u.a.convertPriceBasedOnActiveCurrency(
                            e.price_max,
                            r
                          )),
                          (e.compare_at_price_min =
                            u.a.convertPriceBasedOnActiveCurrency(
                              e.compare_at_price_min,
                              r
                            )),
                          (e.compare_at_price_max =
                            u.a.convertPriceBasedOnActiveCurrency(
                              e.compare_at_price_max,
                              r
                            )))
                        : u.a.convertPriceBasedOnPresentmentPrice(e)),
                      e.variants.forEach(function (t) {
                        var e = [],
                          n = t.merged_options;
                        if (Array.isArray(n)) {
                          for (var i = 0; i < n.length; i++) {
                            var o = n[i].split(':');
                            (t['option' + (parseInt(i) + 1)] = o[1]),
                              (t['option_' + o[0]] = o[1]),
                              e.push(o[1]);
                          }
                          t.options = e;
                        }
                        if (null != t.compare_at_price) {
                          var a = parseFloat(t.compare_at_price);
                          (a = u.a.convertPriceBasedOnActiveCurrency(a, r)),
                            (t.compare_at_price = a);
                        }
                        var l = parseFloat(t.price);
                        (l = u.a.convertPriceBasedOnActiveCurrency(l, r)),
                          (t.price = l);
                      }),
                      (e.description = e.body_html),
                      (e.featured_image =
                        Array.isArray(e.images) && e.images.length > 0
                          ? e.images[0]
                          : boostPFSConfig.general.no_image_url),
                      (e = t.showVariantImageBasedOnSelectedFilter(e));
                  }),
                  e)
                : [];
            },
          },
          {
            key: 'showVariantImageBasedOnSelectedFilter',
            value: function (t) {
              var e = o.a.getSettingValue(
                'general.showVariantImageBasedOnSelectedFilter'
              );
              if (
                e &&
                'string' == typeof e &&
                Array.isArray(t.variants) &&
                t.variants.length > 1 &&
                l.a.queryParams &&
                Array.isArray(l.a.queryParams[e]) &&
                l.a.queryParams[e].length > 0
              )
                for (var n = l.a.queryParams[e], r = 0; r < n.length; r++) {
                  for (
                    var i = !1,
                      a = e.replace(l.a.prefix + '_opt_', '') + ':' + n[r],
                      s = 0;
                    s < t.variants.length;
                    s++
                  ) {
                    var c = t.variants[s];
                    if (
                      (i =
                        Array.isArray(c.merged_options) &&
                        c.merged_options.includes(a) &&
                        c.image)
                    ) {
                      (t.featured_image = c.image),
                        Array.isArray(t.images_info) &&
                          t.images_info.sort(function (t, e) {
                            return e.src == c.image ? 1 : -1;
                          }),
                        Array.isArray(t.images) &&
                          t.images.sort(function (t, e) {
                            return e == c.image ? 1 : -1;
                          });
                      break;
                    }
                  }
                  if (i) break;
                }
              return t;
            },
          },
          {
            key: 'buildProductList',
            value: function () {
              var t = this,
                e = [];
              if (
                (this.productItems.forEach(function (t) {
                  e.push(t.$element);
                }),
                this.$element.removeAttr('data-boost-sort'),
                (u.a.isDefaultPaginationType() ||
                  (!u.a.isDefaultPaginationType() &&
                    'page' != this.eventType)) &&
                  (this.$element.html(''), i()(window).off('scroll')),
                u.a.isLoadPreviousPagePaginationType() &&
                  parseInt(
                    window.sessionStorage.getItem(
                      this.settings.sessionStoragePreviousPageEvent
                    )
                  ))
              ) {
                var n = [];
                e.forEach(function (t) {
                  return n.push(t);
                }),
                  n.reverse(),
                  n.forEach(function (e) {
                    return t.$element.prepend(e);
                  });
              } else
                e.forEach(function (e) {
                  return t.$element.append(e);
                });
              g.a.call3rdAppFunction(this.data),
                g.a.call3rdIntegrationFunc(this.data),
                this.settings.loadProductFromLiquid &&
                  this.settings.loadProductFromLiquidType ==
                    p.Enum.loadProductType.AJAX &&
                  this.afterRender();
            },
          },
          {
            key: 'buildExtrasProductListByAjax',
            value: function (t, e, n, r, a, l) {
              a || (a = 0), l || (l = []), (!r || r > 20) && (r = 20);
              for (
                var s = r * a,
                  c = Math.min(t.length, r * (a + 1)),
                  u = [],
                  p = s;
                p < c;
                p++
              )
                u.push(t[p].handle);
              var f = u.join('+'),
                h = window.location.pathname.split('/'),
                y = '',
                d = Shopify && Shopify.routes && void 0 !== Shopify.routes.root;
              o.a.getSettingValue(
                'general.useShopifyRouteForMultiLanguageURL'
              ) && d
                ? (y = Shopify.routes.root.replace(/\/$/, ''))
                : h.indexOf(boostPFSAppConfig.general.current_locale) > -1 &&
                  (y = '/' + boostPFSAppConfig.general.current_locale);
              var g = y + '/collections/all/' + f + '?view=' + e;
              i.a.ajax({
                type: 'GET',
                url: g,
                success: function (i) {
                  this._onExtraProductListAjaxSuccess(t, e, n, r, a, i, l);
                }.bind(this),
              });
            },
          },
          {
            key: '_getProductListHtmlByAjax',
            value: function () {
              (this.isFetchedAjaxProductData = !1),
                this.$element.addClass(N.a.productWrapLoading);
              for (
                var t = 20 * this.ajaxPage,
                  e = Math.min(this.data.length, 20 * (this.ajaxPage + 1)),
                  n = [],
                  r = t;
                r < e;
                r++
              )
                n.push(this.data[r].handle);
              var o = n.join('+');
              i.a.ajax({
                type: 'GET',
                url: '/collections/all/' + o + '?view=boost-pfs-product-item',
                success: this._onProductListAjaxSuccess.bind(this),
              });
            },
          },
          {
            key: '_getProductListHtmlBySync',
            value: function () {
              var t = this.settings.themeId,
                e = !1;
              this.productItems.forEach(function (n, r) {
                e ||
                  (n.data.html &&
                  n.data.html.value &&
                  t &&
                  t == n.data.html.theme_id
                    ? ((n.data.html = n.data.html.value), n.refresh())
                    : (e = !0));
              }),
                e ? this._getProductListHtmlByAjax() : this.buildProductList();
            },
          },
          {
            key: '_onProductListAjaxSuccess',
            value: function (t) {
              var e = this,
                n = [];
              try {
                /<\!--.*?-->/.test(t) && (t = t.replace(/<\!--.*?-->/g, '')),
                  (n = JSON.parse(t).products);
              } catch (t) {
                return void console.warn(
                  'Could not parse json from collection.boost-pfs-product-item.liquid'
                );
              }
              n.forEach(function (t) {
                e.data.forEach(function (e, n) {
                  e.id == t.id && (e.html = t.html.value);
                });
              });
              for (var r = 20 * this.ajaxPage, i = r; i < r + n.length; i++)
                this.productItems.forEach(function (t) {
                  t.id == e.data[i].id
                    ? (t.setData(e.data[i]), t.refresh())
                    : e.productItems.forEach(function (t) {
                        t.bindEvents();
                      });
                });
              0 == this.ajaxPage &&
                (u.a.isDefaultPaginationType() || 'page' !== this.eventType) &&
                this.$element.html(''),
                this.buildProductList(),
                20 * (this.ajaxPage + 1) < this.data.length
                  ? (this.ajaxPage++, this._getProductListHtmlByAjax())
                  : ((this.isFetchedAjaxProductData = !0),
                    this.parent.pagination.refresh(),
                    this.parent.productPlaceholder.refresh(),
                    this.$element.removeClass(N.a.productWrapLoading));
            },
          },
          {
            key: '_onExtraProductListAjaxSuccess',
            value: function (t, e, n, r, i, o, a) {
              try {
                /<\!--.*?-->/.test(o) && (o = o.replace(/<\!--.*?-->/g, '')),
                  (a = a.concat(JSON.parse(o).products));
              } catch (t) {
                console.warn(
                  'Could not parse json from ' + e + ': ' + t.message
                );
              }
              r * i < t.length - 1
                ? (i++, this.buildExtrasProductListByAjax(t, e, n, r, i, a))
                : 'function' == typeof n && n(a);
            },
          },
          {
            key: '_bindKeepScrollbackPositionEvent',
            value: function () {
              if ('init' == this.eventType || 'history' == this.eventType) {
                history.scrollRestoration = 'manual';
                var t =
                  'sessionStorage' == this.settings.keepScrollbackPositionType
                    ? this._getScrollDataFromSessionStorage()
                    : this._getScrollDataFromHistory();
                t &&
                  (this.parent._changeProductListGobackPreviousPositionStatus(
                    !0
                  ),
                  this._scrollBackToItem(t));
              }
            },
          },
          {
            key: '_getScrollDataFromSessionStorage',
            value: function () {
              var t = {};
              try {
                t = JSON.parse(
                  sessionStorage.getItem(
                    this.settings.sessionStorageScrollbackPosition
                  )
                );
              } catch (t) {}
              return (
                'object' != lt(t) && (t = {}),
                sessionStorage.removeItem(
                  this.settings.sessionStorageScrollbackPosition
                ),
                t
              );
            },
          },
          {
            key: '_getScrollDataFromHistory',
            value: function () {
              var t = null;
              if (history && history.state && history.state.productId) {
                t = history.state;
                var e = new URL(u.a.getWindowLocation().href);
                setTimeout(function () {
                  window.history.replaceState(
                    '',
                    document.title,
                    e.toString().replace(/\+/g, '%20')
                  );
                }, 500);
              }
              return t;
            },
          },
          {
            key: '_scrollBackToItem',
            value: function (t) {
              if (t && t.page && t.productId && t.position && t.url) {
                var e = JSON.parse(JSON.stringify(l.a.queryParams)),
                  n =
                    'string' == typeof t.url && 2 == t.url.split('?').length
                      ? t.url.split('?')[1]
                      : '',
                  r = new URLSearchParams(n).get('page');
                r && (e.page = r);
                var i = Navigation.buildAddressBarUrl(e),
                  a = o.a.getSettingValue('general.paginationType'),
                  s = this.$element
                    .find('[data-id="' + t.productId + '"]')
                    .first(),
                  c = this;
                if (!s.length || i != t.url)
                  return void c.parent._changeProductListGobackPreviousPositionStatus(
                    !1
                  );
                if (a == at.Type.DEFAULT)
                  window.scrollTo({ top: t.position, behavior: 'smooth' });
                else {
                  var u =
                    (s = this.$element
                      .find('[data-id="' + t.productId + '"]')
                      .first()).offset().top - t.offset;
                  window.scrollTo({ top: u, behavior: 'smooth' }),
                    window.IntersectionObserver
                      ? new IntersectionObserver(function (t, e) {
                          var n = !0,
                            r = !1,
                            i = void 0;
                          try {
                            for (
                              var o, a = t[Symbol.iterator]();
                              !(n = (o = a.next()).done);
                              n = !0
                            )
                              o.value.isIntersecting &&
                                (c.parent._changeProductListGobackPreviousPositionStatus(
                                  !1
                                ),
                                e.disconnect());
                          } catch (t) {
                            (r = !0), (i = t);
                          } finally {
                            try {
                              n || null == a.return || a.return();
                            } finally {
                              if (r) throw i;
                            }
                          }
                        }).observe(s[0])
                      : setTimeout(function () {
                          c.parent._changeProductListGobackPreviousPositionStatus(
                            !1
                          );
                        }, 500);
                }
              }
            },
          },
          {
            key: '_catchError',
            value: function () {
              if (u.a.isNoFilterResult(this.totalProduct, this.eventType)) {
                var t = a.a.error.noProducts,
                  e = '';
                u.a.checkExistFilterOptionParam()
                  ? ((t = a.a.error.noFilterResult),
                    (e = this.getNoResultTemplate().replace(/{{content}}/g, t)))
                  : u.a.isSearchPage()
                  ? ((t = a.a.search.resultEmpty
                      .replace(
                        /{{ terms }}/g,
                        '<strong>' +
                          u.a.stripHtml(l.a.queryParams.q) +
                          '</strong>'
                      )
                      .replace(/{{ breakline }}/g, '<br />')),
                    (e = this.getNoResultSearchTemplate()
                      .replace(/{{content}}/g, t)
                      .replace(/{{link}}/g, '/collections/all')
                      .replace(
                        /{{label.seeAllProducts}}/g,
                        a.a.search.seeAllProducts
                      )))
                  : l.a.queryParams.incollection_search
                  ? ((t = a.a.error.noFilterResult),
                    (e = this.getNoResultTemplate().replace(/{{content}}/g, t)),
                    u.a.hideFilterTree())
                  : ((t = a.a.error.noFilterResult),
                    (e = this.getNoResultTemplate().replace(
                      /{{content}}/g,
                      t
                    ))),
                  '' != e && this.$element.html(e);
              }
            },
          },
        ]) && st(e.prototype, n),
        r && st(e, r),
        p
      );
    })(d.a);
    function ht(t) {
      return (ht =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function yt(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function dt(t, e) {
      return (dt =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function gt(t, e) {
      return !e || ('object' !== ht(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function mt(t) {
      return (mt = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var bt = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && dt(t, e);
      })(a, t);
      var e,
        n,
        r,
        o = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = mt(t);
            if (e()) {
              var i = mt(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return gt(this, n);
          };
        })(a);
      function a() {
        var t;
        return (
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, a),
          ((t = o.call(this)).$element = i()(s.a.pagination)),
          (t.$buttomElement = i()(s.a.bottomPagination)),
          (t.$productList = i()(s.a.products)),
          t
        );
      }
      return (
        (e = a),
        (n = [
          {
            key: 'compileTemplate',
            value: function () {
              return '';
            },
          },
          {
            key: 'isRender',
            value: function () {
              return null !== this.data;
            },
          },
          {
            key: 'render',
            value: function () {
              i()(s.a.pagination).html(this.compileTemplate());
            },
          },
          {
            key: 'bindEvents',
            value: function () {
              this.$element.show(),
                this.$element.find('a').off('click'),
                this.$element
                  .find('a')
                  .on('click', this._onClickEvent.bind(this));
            },
          },
          {
            key: '_onClickEvent',
            value: function (t) {
              var e;
              t.preventDefault(), (l.a.internalClick = !0);
              try {
                e = new URL(i()(t.currentTarget).attr('href'));
              } catch (n) {
                e = new URL(
                  'https://' +
                    boostPFSConfig.shop.domain +
                    i()(t.currentTarget).attr('href')
                );
              }
              var n = e && e.searchParams ? e.searchParams.get('page') : 1;
              (n && !isNaN(n)) || (n = 1),
                K.default.setParam('page', n),
                K.default.applyFilter('page'),
                window.scrollTo({
                  top: this.$productList.offset().top - 50,
                  behavior: 'smooth',
                });
            },
          },
        ]) && yt(e.prototype, n),
        r && yt(e, r),
        a
      );
    })(at);
    function vt(t) {
      return (vt =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function St(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function Tt(t, e) {
      return (Tt =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function Ot(t, e) {
      return !e || ('object' !== vt(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function Pt(t) {
      return (Pt = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var wt = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && Tt(t, e);
      })(a, t);
      var e,
        n,
        r,
        o = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = Pt(t);
            if (e()) {
              var i = Pt(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return Ot(this, n);
          };
        })(a);
      function a() {
        var t;
        return (
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, a),
          ((t = o.call(this)).$element = i()(s.a.topDisplayType)),
          (t.selector = {
            productDisplayTypeItem: '.' + N.a.productDisplayType + '-item',
            productDisplayTypeGrid: '.' + N.a.productDisplayType + '-grid',
            productDisplayTypeList: '.' + N.a.productDisplayType + '-list',
          }),
          t
        );
      }
      return (
        (e = a),
        (n = [
          { key: 'compileTemplate', value: function () {} },
          {
            key: 'render',
            value: function () {
              this.$element.html(this.compileTemplate()),
                this.$element.length &&
                  (this.$element
                    .find(this.selector.productDisplayTypeList)
                    .removeClass('active'),
                  this.$element
                    .find(this.selector.productDisplayTypeGrid)
                    .removeClass('active'),
                  'list' == l.a.queryParams.display
                    ? this.$element
                        .find(this.selector.productDisplayTypeList)
                        .addClass('active')
                    : 'grid' == l.a.queryParams.display &&
                      this.$element
                        .find(this.selector.productDisplayTypeGrid)
                        .addClass('active'));
            },
          },
          {
            key: 'bindEvents',
            value: function () {
              i()(s.a.topDisplayType + ' a').on(
                'click',
                this._onClickEvent.bind(this)
              );
            },
          },
          {
            key: '_onClickEvent',
            value: function (t) {
              t.preventDefault(), (l.a.internalClick = !0);
              var e = i()(t.currentTarget);
              e.siblings().removeClass('active'), e.addClass('active');
              var n = u.a.stripHtml(e.data('display'));
              if (n) K.default.setParam('display', n);
              else {
                var r = window.location.href,
                  o = new URL(r);
                if (((o = o.hostname), -1 !== e.attr('href').indexOf(o)))
                  var a = new URL(e.attr('href'));
                else a = new URL('https://' + o + e.attr('href'));
                (n = u.a.stripHtml(a.searchParams.get('display'))) &&
                  K.default.setParam('display', n);
              }
              K.default.applyFilter('display');
            },
          },
        ]) && St(e.prototype, n),
        r && St(e, r),
        a
      );
    })(d.a);
    function _t(t) {
      return (_t =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function Ct(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function kt(t, e) {
      return (kt =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function Et(t, e) {
      return !e || ('object' !== _t(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function Rt(t) {
      return (Rt = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var It = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && kt(t, e);
      })(a, t);
      var e,
        n,
        r,
        o = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = Rt(t);
            if (e()) {
              var i = Rt(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return Et(this, n);
          };
        })(a);
      function a() {
        return (
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, a),
          o.call(this)
        );
      }
      return (
        (e = a),
        (n = [
          { key: 'compileTemplate', value: function () {} },
          {
            key: 'render',
            value: function () {
              i()(s.a.topSorting).html(this.compileTemplate());
              var t = i()(s.a.topSorting + ' select');
              t.length && t.val(u.a.stripHtml(l.a.queryParams.sort));
            },
          },
          {
            key: 'bindEvents',
            value: function () {
              i()(s.a.topSorting + ' select').change(function (t) {
                K.default.setParam('sort', u.a.stripHtml(i()(this).val())),
                  K.default.setParam('page', 1),
                  K.default.applyFilter('sort');
              });
            },
          },
        ]) && Ct(e.prototype, n),
        r && Ct(e, r),
        a
      );
    })(d.a);
    function Lt(t) {
      return (Lt =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function At(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function xt(t, e) {
      return (xt =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function Ft(t, e) {
      return !e || ('object' !== Lt(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function Bt(t) {
      return (Bt = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var Dt = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && xt(t, e);
      })(a, t);
      var e,
        n,
        r,
        o = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = Bt(t);
            if (e()) {
              var i = Bt(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return Ft(this, n);
          };
        })(a);
      function a() {
        return (
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, a),
          o.call(this)
        );
      }
      return (
        (e = a),
        (n = [
          { key: 'compileTemplate', value: function () {} },
          {
            key: 'render',
            value: function () {
              i()(s.a.topShowLimit).html(this.compileTemplate());
              var t = i()(s.a.topShowLimit + ' select');
              t.length && t.val(u.a.stripHtml(Globals.queryParams.limit));
            },
          },
          {
            key: 'bindEvents',
            value: function () {
              i()(s.a.topShowLimit + ' select').change(function (t) {
                K.default.setParam('limit', u.a.stripHtml(i()(this).val())),
                  K.default.setParam('page', 1),
                  K.default.applyFilter();
              });
            },
          },
        ]) && At(e.prototype, n),
        r && At(e, r),
        a
      );
    })(d.a);
    function $t(t) {
      return ($t =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function jt(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function Mt(t, e) {
      return (Mt =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function Vt(t, e) {
      return !e || ('object' !== $t(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function Nt(t) {
      return (Nt = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var Ht = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && Mt(t, e);
      })(p, t);
      var e,
        n,
        r,
        c = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = Nt(t);
            if (e()) {
              var i = Nt(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return Vt(this, n);
          };
        })(p);
      function p() {
        var t;
        return (
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, p),
          ((t = c.call(this)).searchValue = ''),
          (t.selector = {
            clearButton: '.boost-pfs-in-collection-search-clear',
            searchInput: '.boost-pfs-in-collection-search-input',
            searchWrapper: '.boost-pfs-in-collection-search-wrapper',
          }),
          t
        );
      }
      return (
        (e = p),
        (n = [
          {
            key: 'getTemplate',
            value: function () {
              return '\n\t\t<div class="boost-pfs-in-collection-search-wrapper">\n\t\t\t<input aria-label="{{placeholder}}" class="boost-pfs-in-collection-search-input" type="text" placeholder="{{placeholder}}">\n\t\t\t\t<button type="button" class="boost-pfs-in-collection-search-clear">\n\t\t\t\t\t<svg aria-hidden="true" width="15" height="16" viewBox="0 0 20 20">\n\t\t\t\t\t\t<path d="M11.414 10l6.293-6.293a1 1 0 10-1.414-1.414L10 8.586 3.707 2.293a1 1 0 00-1.414 1.414L8.586 10l-6.293 6.293a1 1 0 101.414 1.414L10 11.414l6.293 6.293A.998.998 0 0018 17a.999.999 0 00-.293-.707L11.414 10z" fill="#222222"></path>\n\t\t\t\t\t</svg>\n\t\t\t\t</button>\n\t\t\t\t<button type="button" class="boost-pfs-in-collection-search-button">\n\t\t\t\t\t<svg aria-hidden="true" width="15" height="16" viewBox="0 0 15 16" fill="none">\n\t\t\t\t\t\t<path d="M14.4323 14.4001L10.4594 10.4801C12.1215 8.32012 11.9188 5.20012 9.93233 3.24012C7.74314 1.08012 4.17558 1.08012 1.94585 3.24012C-0.243342 5.40012 -0.243342 8.92012 1.94585 11.1201C2.9999 12.1601 4.41882 12.7601 5.91882 12.7601C7.13504 12.7601 8.31071 12.3601 9.28368 11.6401L13.2567 15.5601C13.4188 15.7201 13.6215 15.8001 13.8242 15.8001C14.0269 15.8001 14.2296 15.7201 14.3918 15.5601C14.7567 15.2001 14.7567 14.7201 14.4323 14.4001ZM5.95936 11.1201C4.90531 11.1201 3.89179 10.7201 3.12152 9.96012C1.54044 8.40012 1.54044 5.92012 3.12152 4.36012C3.89179 3.60012 4.94585 3.20012 5.95936 3.20012C6.97287 3.20012 8.02693 3.60012 8.7972 4.36012C10.3783 5.92012 10.3783 8.40012 8.7972 9.96012C8.02693 10.7201 7.01341 11.1201 5.95936 11.1201Z" fill="#222222"/>\n\t\t\t\t\t</svg>\t\n\t\t\t\t</button>\n\t\t</div>\n        '.trim();
            },
          },
          {
            key: 'compileTemplate',
            value: function () {
              var t = a.a.inCollectionSearch;
              return this.getTemplate().replace(/{{placeholder}}/g, t);
            },
          },
          {
            key: 'isRender',
            value: function () {
              return (
                o.a.getSettingValue('general.enableCollectionSearch') &&
                u.a.isCollectionPage()
              );
            },
          },
          {
            key: 'render',
            value: function () {
              i()(this.selector.searchWrapper).length ||
                (s.a.inCollectionSearch &&
                  i()(s.a.inCollectionSearch).length > 0 &&
                  i()(s.a.inCollectionSearch).html(this.compileTemplate()));
              var t = i()(this.selector.searchInput);
              t.length &&
                ((this.searchValue = u.a.stripHtml(l.a.queryParams.q) || ''),
                t.val(this.searchValue),
                this.searchValue
                  ? i()(this.selector.clearButton).show()
                  : i()(this.selector.clearButton).hide());
            },
          },
          {
            key: 'bindEvents',
            value: function () {
              i()(this.selector.searchInput).off('input'),
                i()(this.selector.clearButton).off('click'),
                i()(this.selector.searchInput).on(
                  'input',
                  u.a.debounce(this.onTypeInCollectionSearch.bind(this), 300)
                ),
                i()(this.selector.clearButton).on(
                  'click',
                  this.onClickClearButton.bind(this)
                );
            },
          },
          {
            key: 'onTypeInCollectionSearch',
            value: function (t) {
              this.setSearchValue(t),
                this.searchValue
                  ? i()(this.selector.clearButton).show()
                  : i()(this.selector.clearButton).hide(),
                this.applyApi();
            },
          },
          {
            key: 'setSearchValue',
            value: function (t) {
              if (t && t.target) {
                var e = u.a.stripHtml(t.target.value);
                (e =
                  'function' == typeof e.toString
                    ? e.toLowerCase().trim()
                    : ''),
                  (this.searchValue = e);
              } else this.searchValue = '';
            },
          },
          {
            key: 'onClickClearButton',
            value: function () {
              i()(this.selector.searchInput).val(''),
                (this.searchValue = ''),
                i()(this.selector.clearButton).hide(),
                this.applyApi(),
                this.afterClear();
            },
          },
          { key: 'afterClear', value: function () {} },
          {
            key: 'applyApi',
            value: function () {
              K.default.setParam('q', this.searchValue),
                K.default.setParam('page', 1),
                K.default.applyFilter('incollection_search');
            },
          },
        ]) && jt(e.prototype, n),
        r && jt(e, r),
        p
      );
    })(d.a);
    function Ut(t) {
      return (Ut =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function Wt(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function qt(t, e) {
      return (qt =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function Gt(t, e) {
      return !e || ('object' !== Ut(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function zt(t) {
      return (zt = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var Kt = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && qt(t, e);
      })(c, t);
      var e,
        n,
        r,
        s = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = zt(t);
            if (e()) {
              var i = zt(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return Gt(this, n);
          };
        })(c);
      function c() {
        var t;
        return (
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, c),
          ((t = s.call(this)).data = null),
          (l.a.currentTerm = u.a.stripHtml(u.a.getSearchTerm())),
          (t.$searchResultHeader = i()('.' + N.a.searchResultHeader)),
          (t.$searchResultNumber = i()('.' + N.a.searchResultNumber)),
          t
        );
      }
      return (
        (e = c),
        (n = [
          {
            key: 'init',
            value: function () {
              l.a.currentTerm &&
                (this.searchTerm = u.a.stripHtml(l.a.currentTerm.trim()));
            },
          },
          {
            key: 'compileSEOTitleTemplate',
            value: function () {
              var t =
                this.data.total_product <= 1
                  ? a.a.search.seoTitleOne
                  : a.a.search.seoTitleOther;
              return (
                t &&
                  (t = t
                    .replace(
                      /{{ count }}/g,
                      u.a.stripHtml(this.data.total_product)
                    )
                    .replace(/{{ terms }}/g, u.a.stripHtml(this.searchTerm))),
                t
              );
            },
          },
          {
            key: 'compileSearchResultHeader',
            value: function () {
              if (this.searchTerm) var t = a.a.search.resultHeader;
              else t = a.a.search.generalTitle;
              return t.replace(/{{ terms }}/g, u.a.stripHtml(this.searchTerm));
            },
          },
          {
            key: 'compileSearchResultNumber',
            value: function () {
              var t = '';
              return (
                this.searchTerm && (t = a.a.search.resultNumber),
                t
                  .replace(
                    /{{ count }}/g,
                    '<strong>' +
                      u.a.stripHtml(this.data.total_product) +
                      '</strong>'
                  )
                  .replace(
                    /{{ terms }}/g,
                    '<strong>' + u.a.stripHtml(this.searchTerm) + '</strong>'
                  )
              );
            },
          },
          {
            key: 'isRender',
            value: function () {
              return !!this.data;
            },
          },
          {
            key: 'render',
            value: function () {
              this._buildSEOTitle(),
                this._buildSearchResultHeader(),
                this._buildSearchResultNumber();
            },
          },
          {
            key: 'setData',
            value: function (t) {
              t && (this.data = t);
            },
          },
          {
            key: '_buildSEOTitle',
            value: function () {
              if (this.searchTerm && '' !== this.searchTerm) {
                var t = o.a.getSettingValue('search.enableFixHeadTitle'),
                  e = this.compileSEOTitleTemplate();
                document.title =
                  t && e
                    ? e.replace(/&quot;/g, '"')
                    : document.title.replace(
                        /[0-9]+/,
                        u.a.stripHtml(this.data.total_product)
                      );
              }
            },
          },
          {
            key: '_buildSearchResultHeader',
            value: function () {
              var t = this.compileSearchResultHeader();
              this.$searchResultHeader.html(t);
            },
          },
          {
            key: '_buildSearchResultNumber',
            value: function () {
              var t = this.compileSearchResultNumber();
              this.$searchResultNumber.html(t);
            },
          },
        ]) && Wt(e.prototype, n),
        r && Wt(e, r),
        c
      );
    })(d.a);
    function Yt(t) {
      return (Yt =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function Qt(t, e) {
      if (!(t instanceof e))
        throw new TypeError('Cannot call a class as a function');
    }
    function Jt(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function Xt(t, e) {
      return (Xt =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function Zt(t, e) {
      return !e || ('object' !== Yt(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function te(t) {
      return (te = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var ee = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && Xt(t, e);
      })(a, t);
      var e,
        n,
        r,
        o = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = te(t);
            if (e()) {
              var i = te(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return Zt(this, n);
          };
        })(a);
      function a() {
        return Qt(this, a), o.apply(this, arguments);
      }
      return (
        (e = a),
        (n = [
          {
            key: 'compileTemplate',
            value: function () {
              return '';
            },
          },
          {
            key: 'buildBreadcrumb',
            value: function () {
              if (
                ((this.collectionData = this.parent.collectionData),
                this.collectionData && this.collectionData.collection)
              ) {
                var t = i()(s.a.breadcrumb);
                t.length && t.html(this.compileTemplate());
              }
            },
          },
        ]) && Jt(e.prototype, n),
        r && Jt(e, r),
        a
      );
    })(d.a);
    function ne(t) {
      return (ne =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function re(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function ie(t, e) {
      return (ie =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function oe(t, e) {
      return !e || ('object' !== ne(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function ae(t) {
      return (ae = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var le = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && ie(t, e);
      })(c, t);
      var e,
        n,
        r,
        s = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = ae(t);
            if (e()) {
              var i = ae(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return oe(this, n);
          };
        })(c);
      function c() {
        var t;
        return (
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, c),
          ((t = s.call(this)).data = null),
          (t.defaultCollectionData = {
            collection: {
              description: '',
              handle: o.a.getSettingValue('general.collection_handle'),
              title: a.a.collectionAll,
            },
          }),
          (t.collectionData = {}),
          (t.$collectionHeader = i()('.' + N.a.collectionHeader)),
          (t.$collectionDescription = i()('.' + N.a.collectionDescription)),
          (t.$collectionImage = i()('.' + N.a.collectionImage)),
          t
        );
      }
      return (
        (e = c),
        (n = [
          {
            key: 'init',
            value: function () {
              (this.breadcrumb = new ee()), this.addComponent(this.breadcrumb);
            },
          },
          {
            key: 'isRender',
            value: function () {
              return (
                !!this.data &&
                ('collection' == this.parent.eventType ||
                  'history' == this.parent.eventType)
              );
            },
          },
          {
            key: 'render',
            value: function () {
              var t = window.location.pathname;
              if (t && '/' != t) {
                if ('/collections/all' == t)
                  this.collectionData = this.defaultCollectionData;
                else if (u.a.isVendorPage() || u.a.isTypePage())
                  this.collectionData = {
                    collection: {
                      description: '',
                      handle: '',
                      title: u.a.stripHtml(u.a.getSearchTerm()),
                    },
                  };
                else if (!u.a.isSearchPage()) {
                  var e =
                    u.a.getWindowLocation().href.split('?')[0] + '?view=desc';
                  i.a.ajax({
                    method: 'GET',
                    url: e,
                    dataType: 'json',
                    success: this._onGetCollectionDataSuccess.bind(this),
                    error: this._onGetCollectionDataError.bind(this),
                  });
                }
                this._buildPageInfo();
              }
            },
          },
          {
            key: 'setData',
            value: function (t) {
              t && (this.data = t);
            },
          },
          {
            key: '_buildPageInfo',
            value: function () {
              this.breadcrumb && this.breadcrumb.buildBreadcrumb(),
                this.buildCollectionDetail(),
                this.buildDocumentInfo();
            },
          },
          {
            key: 'buildCollectionDetail',
            value: function () {
              if (
                void 0 !== this.collectionData &&
                this.collectionData.hasOwnProperty('collection')
              ) {
                var t = this.collectionData.collection,
                  e =
                    t.hasOwnProperty('title') && '' != t.title ? t.title : null,
                  n =
                    t.hasOwnProperty('description') && '' != t.description
                      ? t.description
                      : null,
                  r =
                    t.hasOwnProperty('image') && t.image && t.image.src
                      ? t.image.src
                      : null;
                e
                  ? this.$collectionHeader.html(u.a.stripHtml(e)).show()
                  : this.$collectionHeader.hide(),
                  n
                    ? this.$collectionDescription.html(n).show()
                    : this.$collectionDescription.hide(),
                  r && !u.a.isBadUrl(r)
                    ? this.$collectionImage
                        .attr('src', r)
                        .css('background-image', 'url(' + r + ')')
                        .removeClass(N.a.collectionNoImage)
                        .addClass(N.a.collectionHasImage)
                    : this.$collectionImage
                        .attr(
                          'src',
                          'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
                        )
                        .css('background-image', 'none')
                        .removeClass(N.a.collectionHasImage)
                        .addClass(N.a.collectionNoImage);
              }
            },
          },
          {
            key: 'buildDocumentInfo',
            value: function () {
              if (
                void 0 !== this.collectionData &&
                this.collectionData.hasOwnProperty('collection')
              ) {
                var t =
                  this.collectionData.collection.title + ' - ' + l.a.shopName;
                document.title = t;
              }
            },
          },
          {
            key: '_onGetCollectionDataSuccess',
            value: function (t) {
              (this.collectionData = t), this._buildPageInfo();
            },
          },
          {
            key: '_onGetCollectionDataError',
            value: function () {
              (this.collectionData = this.defaultCollectionData),
                this._buildPageInfo();
            },
          },
        ]) && re(e.prototype, n),
        r && re(e, r),
        c
      );
    })(d.a);
    function se(t) {
      return (se =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function ce(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function ue(t, e) {
      return (ue =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function pe(t, e) {
      return !e || ('object' !== se(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function fe(t) {
      return (fe = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var he = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && ue(t, e);
      })(s, t);
      var e,
        n,
        r,
        a = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = fe(t);
            if (e()) {
              var i = fe(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return pe(this, n);
          };
        })(s);
      function s() {
        var t;
        return (
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, s),
          ((t = a.call(this)).selecor = {
            robots: 'meta[content="noindex,nofollow,nosnippet"]',
          }),
          (t.currentCollection = boostPFSConfig.general.collection_handle),
          (t.settings = {
            boostCollection: o.a.getSettingValue('general.boostCollection'),
          }),
          t
        );
      }
      return (
        (e = s),
        (n = [
          {
            key: 'getTemplate',
            value: function () {
              return '\n\t\t\t<meta name="robots" content="noindex,nofollow,nosnippet">\n\t\t'.trim();
            },
          },
          {
            key: 'compileTemplate',
            value: function () {
              return this.getTemplate();
            },
          },
          {
            key: 'isRender',
            value: function () {
              return (
                o.a.getSettingValue('general.enableSeo') &&
                !i()(this.selecor.robots).length &&
                (0 ==
                  this.currentCollection.indexOf(
                    this.settings.boostCollection
                  ) ||
                  u.a.checkExistFilterOptionParam() ||
                  (l.a.queryParams.q && !u.a.isSearchPage()))
              );
            },
          },
          {
            key: 'render',
            value: function () {
              i()('head').append(this.compileTemplate());
            },
          },
        ]) && ce(e.prototype, n),
        r && ce(e, r),
        s
      );
    })(d.a);
    function ye(t) {
      return (ye =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function de(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function ge(t, e) {
      return (ge =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function me(t, e) {
      return !e || ('object' !== ye(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function be(t) {
      return (be = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var ve = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && ge(t, e);
      })(p, t);
      var e,
        n,
        r,
        c = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = be(t);
            if (e()) {
              var i = be(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return me(this, n);
          };
        })(p);
      function p() {
        var t;
        return (
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, p),
          ((t = c.call(this)).$loadMoreContainer = null),
          (t.$defaultElement = i()(s.a.pagination)),
          (t.$element = i()(s.a.loadMore)),
          (t.selector = {
            loadMoreButton: '.' + N.a.productLoadMore + '-button',
            loadMoreTotal: s.a.loadMore + '-total',
          }),
          (t.settings.sessionStorageCurrentNextPage = o.a.getSettingValue(
            'general.sessionStorageCurrentNextPage'
          )),
          (t.settings.sessionStoragePreviousPageEvent = o.a.getSettingValue(
            'general.sessionStoragePreviousPageEvent'
          )),
          t
        );
      }
      return (
        (e = p),
        (n = [
          {
            key: 'getTemplate',
            value: function (t) {
              switch (t) {
                case 'total':
                  return '\n\t\t\t\t\t<div class="{{class.productLoadMore}}-total">{{progressLabel}}</div>\n\t\t\t\t'.trim();
                default:
                  return '\n\t\t\t\t\t{{loadMoreProgress}}\n\t\t\t\t\t<div class="{{class.productLoadMore}}-button-container">\n\t\t\t\t\t\t<button aria-label="{{label.loadMore}}" class="{{class.productLoadMore}}-button">{{label.loadMore}}</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="{{class.productLoadMore}}-loading" style="display: none;">\n\t\t\t\t\t\t<div class="{{class.productLoadMore}}-icon"></div>\n\t\t\t\t\t</div>\n\t\t\t\t'.trim();
              }
            },
          },
          {
            key: 'compileTemplate',
            value: function () {
              var t = this.compileTotalTemplate();
              (l.a.queryParams.page && !isNaN(l.a.queryParams.page)) ||
                (l.a.queryParams.page = 1);
              var e =
                this.totalProduct -
                l.a.queryParams.page * l.a.queryParams.limit;
              return (
                (e = Math.min(e, l.a.queryParams.limit)),
                this.getTemplate()
                  .replace(/{{loadMoreProgress}}/g, t)
                  .replace(/{{label.loadMore}}/g, a.a.loadMore)
                  .replace(/{{class.productLoadMore}}/g, N.a.productLoadMore)
                  .replace(/{{ amountProduct }}/g, e)
              );
            },
          },
          {
            key: 'compileTotalTemplate',
            value: function () {
              (l.a.queryParams.page && !isNaN(l.a.queryParams.page)) ||
                (l.a.queryParams.page = 1),
                (l.a.queryParams.limit && !isNaN(l.a.queryParams.limit)) ||
                  (l.a.queryParams.limit = 20),
                u.a.isLoadPreviousPagePaginationType() &&
                'page' == this.parent.eventType
                  ? (this.nextPage = parseInt(
                      window.sessionStorage.getItem(
                        this.settings.sessionStorageCurrentNextPage
                      )
                    ))
                  : (this.nextPage = l.a.queryParams.page);
              var t = (this.nextPage - 1) * l.a.queryParams.limit + 1,
                e = i()(s.a.products + ' > *:not(script):not(style)').length;
              e && (t -= e - l.a.queryParams.limit), (this.fromProduct = t);
              var n =
                (this.nextPage - 1) * l.a.queryParams.limit +
                1 +
                this.data.products.length -
                1;
              return (
                (this.toProduct = n),
                this.getTemplate('total')
                  .replace(/{{progressLabel}}/g, a.a.loadMoreTotal)
                  .replace(/{{ from }}/g, this.fromProduct)
                  .replace(/{{ to }}/g, this.toProduct)
                  .replace(/{{ total }}/g, this.totalProduct)
                  .replace(/{{class.productLoadMore}}/g, N.a.productLoadMore)
              );
            },
          },
          {
            key: 'render',
            value: function () {
              this.$defaultElement.empty();
              var t = l.a.queryParams,
                e = this.compileTemplate();
              if (
                (this.$element.html(e),
                i()(s.a.loadMoreButtonContainer).length > 0)
              ) {
                var n = this.compileTotalTemplate();
                i()(this.selector.loadMoreTotal).replaceWith(n);
              }
              (this.$loadMoreContainer = i()(s.a.loadMoreButtonContainer)),
                this.hideLoading();
              var r = Math.ceil(this.totalProduct / t.limit);
              parseInt(t.page) < r && this.toProduct < this.totalProduct
                ? (this.$element.show(), this.$loadMoreContainer.show())
                : this.$element.hide();
            },
          },
          {
            key: 'bindEvents',
            value: function () {
              u.a.isLoadPreviousPagePaginationType()
                ? (this.nextPage = parseInt(
                    window.sessionStorage.getItem(
                      this.settings.sessionStorageCurrentNextPage
                    )
                  ))
                : (this.nextPage = l.a.queryParams.page),
                this.$element
                  .find(this.selector.loadMoreButton)
                  .off('click')
                  .on('click', this._onClickEvent.bind(this));
            },
          },
          {
            key: '_onClickEvent',
            value: function (t) {
              if (
                (t.preventDefault(),
                this.$loadMoreContainer.hide(),
                this.showLoading(),
                this.nextPage++,
                (l.a.internalClick = !0),
                K.default.setParam('limit', l.a.queryParams.limit),
                K.default.setParam('page', this.nextPage),
                u.a.FilterResult.isAdvancedPaginationType())
              )
                u.a.isLoadPreviousPagePaginationType() &&
                  (window.sessionStorage.setItem(
                    this.settings.sessionStorageCurrentNextPage,
                    this.nextPage
                  ),
                  window.sessionStorage.setItem(
                    this.settings.sessionStoragePreviousPageEvent,
                    0
                  )),
                  K.default.applyFilter('page');
              else {
                var e = vc.instance.filter;
                K.default.getFilterData('page', e.setData.bind(e));
              }
            },
          },
        ]) && de(e.prototype, n),
        r && de(e, r),
        p
      );
    })(at);
    function Se(t) {
      return (Se =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function Te(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function Oe(t, e) {
      return (Oe =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function Pe(t, e) {
      return !e || ('object' !== Se(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function we(t) {
      return (we = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var _e = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && Oe(t, e);
      })(c, t);
      var e,
        n,
        r,
        a = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = we(t);
            if (e()) {
              var i = we(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return Pe(this, n);
          };
        })(c);
      function c() {
        var t;
        return (
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, c),
          ((t = a.call(this)).$element = i()(s.a.bottomPagination)),
          (t.settings.positionShowInfiniteLoading = o.a.getSettingValue(
            'general.positionShowInfiniteLoading'
          )),
          (t.settings.sessionStorageCurrentNextPage = o.a.getSettingValue(
            'general.sessionStorageCurrentNextPage'
          )),
          (t.settings.sessionStoragePreviousPageEvent = o.a.getSettingValue(
            'general.sessionStoragePreviousPageEvent'
          )),
          t
        );
      }
      return (
        (e = c),
        (n = [
          {
            key: 'getTemplate',
            value: function () {
              return '\n\t\t\t<div class="{{class.productLoadMore}}-loading" style="display: none;">\n\t\t\t\t<div class="{{class.productLoadMore}}-icon"></div>\n\t\t\t</div>\n\t\t'.trim();
            },
          },
          {
            key: 'compileTemplate',
            value: function () {
              return this.getTemplate().replace(
                /{{class.productLoadMore}}/g,
                N.a.productLoadMore
              );
            },
          },
          {
            key: 'isRender',
            value: function () {
              return null !== this.data && z.isPanelActive(tt.Enum.PRODUCT);
            },
          },
          {
            key: 'render',
            value: function () {
              if (
                (this.$element.empty(),
                this.$element.show(),
                0 == this.$loadMore.find(s.a.loadMoreLoading).length)
              ) {
                var t = this.compileTemplate();
                this.$loadMore.prepend(t), this.$loadMore.show();
              }
              this.hideLoading();
            },
          },
          {
            key: 'bindEvents',
            value: function () {
              u.a.isLoadPreviousPagePaginationType()
                ? (this.nextPage = parseInt(
                    window.sessionStorage.getItem(
                      this.settings.sessionStorageCurrentNextPage
                    )
                  ))
                : (this.nextPage = l.a.queryParams.page),
                this.totalProduct > l.a.queryParams.limit * this.nextPage &&
                  ((this.scrolling = !1),
                  (this.scrollToBottom = !1),
                  this.$element.length > 0 &&
                    i()(window).on('scroll', this._onScrollEvent.bind(this)));
            },
          },
          {
            key: '_onScrollEvent',
            value: function (t) {
              if (
                (t.preventDefault(),
                t.stopPropagation(),
                i()(s.a.products).hasClass(N.a.productWrapLoading) ||
                  !z.isPanelActive(tt.Enum.PRODUCT))
              )
                return !1;
              this._isScrollToBottom() && this._loadMoreProducts();
            },
          },
          {
            key: '_isScrollToBottom',
            value: function () {
              var t =
                  window.innerHeight *
                  (window.innerHeight / i()(document).outerHeight()),
                e = parseInt(this.$element.offset().top),
                n = window.pageYOffset,
                r =
                  parseInt(n) +
                  t +
                  parseInt(this.settings.positionShowInfiniteLoading);
              return (
                n + window.innerHeight + t >=
                  i()(document).outerHeight() - 100 &&
                  (this.scrollToBottom = !0),
                !this.scrolling &&
                  this.data.products.length > 0 &&
                  (r >= e || (r < e && this.scrollToBottom))
              );
            },
          },
          {
            key: '_loadMoreProducts',
            value: function () {
              if (this.parent._productPaginationInfiniteShouldLoadmore()) {
                this.showLoading(), (this.scrolling = !0), this.nextPage++;
                var t = Math.ceil(this.totalProduct / l.a.queryParams.limit);
                if (this.nextPage <= t)
                  if (
                    ((l.a.internalClick = !0),
                    K.default.setParam('limit', l.a.queryParams.limit),
                    K.default.setParam('page', this.nextPage),
                    u.a.FilterResult.isAdvancedPaginationType())
                  )
                    u.a.isLoadPreviousPagePaginationType() &&
                      (window.sessionStorage.setItem(
                        this.settings.sessionStorageCurrentNextPage,
                        this.nextPage
                      ),
                      window.sessionStorage.setItem(
                        this.settings.sessionStoragePreviousPageEvent,
                        0
                      )),
                      K.default.applyFilter('page');
                  else {
                    var e = vc.instance.filter;
                    K.default.getFilterData('page', e.setData.bind(e));
                  }
              }
            },
          },
        ]) && Te(e.prototype, n),
        r && Te(e, r),
        c
      );
    })(at);
    function Ce(t) {
      return (Ce =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function ke(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function Ee(t, e) {
      return (Ee =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function Re(t, e) {
      return !e || ('object' !== Ce(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function Ie(t) {
      return (Ie = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var Le = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && Ee(t, e);
      })(p, t);
      var e,
        n,
        r,
        c = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = Ie(t);
            if (e()) {
              var i = Ie(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return Re(this, n);
          };
        })(p);
      function p() {
        var t;
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError('Cannot call a class as a function');
        })(this, p),
          ((t = c.call(this)).$wrapper = i()(
            s.a.btnLoadPreviousPageWrapperSelector
          )),
          (t.$element = i()(s.a.btnLoadPreviousPageSelector)),
          (t.$productList = i()(s.a.products)),
          (t.settings.sessionStorageCurrentPreviousPage = o.a.getSettingValue(
            'general.sessionStorageCurrentPreviousPage'
          )),
          (t.settings.sessionStorageCurrentPage = o.a.getSettingValue(
            'general.sessionStorageCurrentPage'
          )),
          (t.settings.sessionStorageCurrentNextPage = o.a.getSettingValue(
            'general.sessionStorageCurrentNextPage'
          )),
          (t.settings.sessionStoragePreviousPageEvent = o.a.getSettingValue(
            'general.sessionStoragePreviousPageEvent'
          ));
        var e = o.a.getSettingValue('general.loadPreviousType');
        return (
          (t.settings.loadPreviousType =
            e || o.a.getSettingValue('general.paginationType')),
          (t.state = { isLoading: !1, lastScrollPos: window.scrollY }),
          t
        );
      }
      return (
        (e = p),
        (n = [
          {
            key: 'init',
            value: function () {
              K.default.addAfterApplyFilter(
                this.doneLoadPreviousPage.bind(this)
              );
            },
          },
          {
            key: 'getTemplate',
            value: function () {
              return '\n\t\t\t<div class="{{class.buttonLoadPreviousPageSelector}}">\n\t\t\t\t<span aria-label="{{label.loadPreviousPage}}" class="js-{{class.buttonLoadPreviousPageSelector}}">{{label.loadPreviousPage}}</span>\n\t\t\t</div>\n\t\t'.trim();
            },
          },
          {
            key: 'getWrapperTemplate',
            value: function () {
              return '<div class="{{class.buttonLoadPreviousPageWrapper}}"></div>'.trim();
            },
          },
          {
            key: 'compileTemplate',
            value: function () {
              return this.getTemplate()
                .replace(
                  /{{class.buttonLoadPreviousPageSelector}}/g,
                  N.a.buttonLoadPreviousPageSelector
                )
                .replace(/{{label.loadPreviousPage}}/g, a.a.loadPreviousPage);
            },
          },
          {
            key: 'compileWrapperTemplate',
            value: function () {
              return this.getWrapperTemplate().replace(
                /{{class.buttonLoadPreviousPageWrapper}}/g,
                N.a.buttonLoadPreviousPageWrapper
              );
            },
          },
          {
            key: 'isRender',
            value: function () {
              return (
                this.data &&
                u.a.isLoadPreviousPagePaginationType() &&
                'page' != this.parent.eventType
              );
            },
          },
          {
            key: 'render',
            value: function () {
              this.$wrapper.length ||
                ((this.$wrapper = i()(this.compileWrapperTemplate())),
                this.$wrapper.insertBefore(this.$productList)),
                this.$element.length ||
                  ((this.$element = i()(this.compileTemplate())),
                  this.$wrapper.append(this.$element));
              var t = Math.ceil(this.totalProduct / l.a.queryParams.limit),
                e = l.a.queryParams.page,
                n = t > 1 && e > 1;
              window.sessionStorage.setItem(
                this.settings.sessionStorageCurrentPreviousPage,
                e
              ),
                window.sessionStorage.setItem(
                  this.settings.sessionStorageCurrentPage,
                  e
                ),
                window.sessionStorage.setItem(
                  this.settings.sessionStorageCurrentNextPage,
                  e
                ),
                window.sessionStorage.setItem(
                  this.settings.sessionStoragePreviousPageEvent,
                  1
                ),
                n && this.settings.loadPreviousType == at.Type.LOAD_MORE
                  ? this.$wrapper.show()
                  : (this.$wrapper.hide(),
                    u.a.isiOS() && (this.state.isLoading = !1));
            },
          },
          {
            key: 'isBindEvents',
            value: function () {
              return u.a.isLoadPreviousPagePaginationType();
            },
          },
          {
            key: 'bindEvents',
            value: function () {
              this.settings.loadPreviousType == at.Type.LOAD_MORE
                ? (this.$element.off('click'),
                  this.$element.on('click', this._onClickEvent.bind(this)))
                : this.settings.loadPreviousType != at.Type.INFINITE ||
                  this.isBoundEvent ||
                  i()(document).on('scroll', this._onScrollEvent.bind(this));
            },
          },
          {
            key: '_onClickEvent',
            value: function (t) {
              t && t.preventDefault(), this.loadPreviousPage();
            },
          },
          {
            key: '_onScrollEvent',
            value: function (t) {
              if (!this.state.isLoading) {
                var e = window.scrollY,
                  n = this.$productList.offset().top;
                e < this.state.lastScrollPos && e < n + 100
                  ? ((this.state.isLoading = !0), this.loadPreviousPage())
                  : (this.state.lastScrollPos = e);
              }
            },
          },
          {
            key: 'loadPreviousPage',
            value: function () {
              var t = l.a.queryParams.page;
              if (
                (null !==
                window.sessionStorage.getItem(
                  this.settings.sessionStorageCurrentPreviousPage
                )
                  ? (this.currentPreviousPage = parseInt(
                      window.sessionStorage.getItem(
                        this.settings.sessionStorageCurrentPreviousPage
                      )
                    ))
                  : (this.currentPreviousPage = t),
                this.currentPreviousPage < 2)
              )
                return this.$wrapper.hide(), !1;
              (l.a.internalClick = !0),
                K.default.setParam('limit', l.a.queryParams.limit),
                this.currentPreviousPage--,
                window.sessionStorage.setItem(
                  this.settings.sessionStorageCurrentPreviousPage,
                  this.currentPreviousPage
                ),
                window.sessionStorage.setItem(
                  this.settings.sessionStoragePreviousPageEvent,
                  1
                ),
                K.default.setParam('page', this.currentPreviousPage),
                K.default.applyFilter('page', 'previous'),
                this.currentPreviousPage < 2 && this.$wrapper.hide();
            },
          },
          {
            key: 'doneLoadPreviousPage',
            value: function (t, e, n) {
              var r = this;
              'page' == e &&
                'previous' == n &&
                this.settings.loadPreviousType == at.Type.INFINITE &&
                setTimeout(function () {
                  var t = l.a.queryParams.page + 1,
                    e = i()(s.a.products + ' [data-page="' + t + '"]');
                  if (e.length > 0) {
                    var n = parseInt(e.offset().top - 100);
                    window.scrollTo(0, n);
                  }
                  r.state.isLoading = !1;
                }, 200);
            },
          },
        ]) && ke(e.prototype, n),
        r && ke(e, r),
        p
      );
    })(at);
    function Ae(t) {
      return (Ae =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function xe(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function Fe(t, e) {
      return (Fe =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function Be(t, e) {
      return !e || ('object' !== Ae(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function De(t) {
      return (De = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var $e = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && Fe(t, e);
      })(a, t);
      var e,
        n,
        r,
        o = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = De(t);
            if (e()) {
              var i = De(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return Be(this, n);
          };
        })(a);
      function a(t, e) {
        var n;
        return (
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, a),
          (n = o.call(this)),
          t || (t = s.a.searchPagePagination),
          (n.type = e),
          (n.$element = i()(t)),
          (n.$productList = i()(s.a.products)),
          (n.filterResult = n.parent),
          n
        );
      }
      return (
        (e = a),
        (n = [
          {
            key: 'isRender',
            value: function () {
              return (
                l.a.hasOwnProperty('searchDisplay') &&
                l.a.searchDisplay === this.type
              );
            },
          },
          {
            key: 'render',
            value: function () {
              this.$element.html(this.compileTemplate());
            },
          },
          {
            key: 'bindEvents',
            value: function () {
              this.$element.show(),
                this.$element.find('a').off('click'),
                this.$element
                  .find('a')
                  .on('click', this._onClickEvent.bind(this));
            },
          },
          {
            key: 'setData',
            value: function (t, e, n, r) {
              t && (this.data = t);
              var i = this.parent.searchResultPanels.children,
                o = this.type;
              (this.panelItem = i.find(function (t) {
                return t.type == o;
              })),
                (this.totalProduct = e),
                (this.limit = n),
                (this.page = r),
                (this.paginationType = Settings.getSettingValue(
                  'general.paginationType'
                ));
            },
          },
          {
            key: '_onClickEvent',
            value: function (t) {
              t.preventDefault(), (l.a.internalClick = !0);
              var e = new URL(
                i()(t.currentTarget).attr('href')
              ).searchParams.get('page');
              (e && !isNaN(e)) || (e = 1),
                K.default.setParam('page', e),
                K.default.setParam('limit', this.limit),
                K.default.getFilterData(
                  'search',
                  this.panelItem._searchPanelCallback.bind(this.panelItem)
                ),
                window.scrollTo({
                  top: this.$productList.offset().top - 50,
                  behavior: 'smooth',
                });
            },
          },
        ]) && xe(e.prototype, n),
        r && xe(e, r),
        a
      );
    })(bt);
    function je(t) {
      return (je =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function Me(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function Ve(t, e) {
      return (Ve =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function Ne(t, e) {
      return !e || ('object' !== je(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function He(t) {
      return (He = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var Ue = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && Ve(t, e);
      })(c, t);
      var e,
        n,
        r,
        a = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = He(t);
            if (e()) {
              var i = He(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return Ne(this, n);
          };
        })(c);
      function c() {
        var t;
        return (
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, c),
          ((t = a.call(this)).$productList = i()(s.a.products)),
          (t.$element = []),
          (t.isFetchedProductData = !1),
          (t.settings = {
            showPlaceholderProductList: o.a.getSettingValue(
              'general.showPlaceholderProductList'
            ),
            placeholderImageRatio: o.a.getSettingValue(
              'general.placeholderImageRatio'
            ),
            productGridClass: o.a.getSettingValue('custom.product_grid_class'),
            placeholderProductGridItemClass: o.a.getSettingValue(
              'general.placeholderProductGridItemClass'
            ),
            productsPerRow: o.a.getSettingValue('custom.products_per_row'),
            placeholderProductPerRow: o.a.getSettingValue(
              'general.placeholderProductPerRow'
            ),
            sessionStoragePreviousPageEvent: o.a.getSettingValue(
              'general.sessionStoragePreviousPageEvent'
            ),
          }),
          t
        );
      }
      return (
        (e = c),
        (n = [
          {
            key: 'init',
            value: function () {
              (this.eventType = this.parent.eventType),
                K.default.addBeforeApplyFilter(
                  this.renderBeforeApplyFilter.bind(this)
                );
            },
          },
          {
            key: 'getTemplate',
            value: function () {
              return '\n\t\t\t<div class="{{wrapperClass}} {{class.filterProductSkeleton}}">\n\t\t\t\t<div class="{{class.filterProductSkeleton}}-image" style="padding-top: {{paddingTop}}%"></div>\n\t\t\t\t<div class="{{class.filterProductSkeleton}}-meta">\n\t\t\t\t\t<span class="{{class.filterSkeletonText}} {{class.filterSkeleton}}"></span>\n\t\t\t\t\t<span class="{{class.filterSkeletonText}} {{class.filterSkeleton}}-width1"></span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t'.trim();
            },
          },
          {
            key: 'compileTemplate',
            value: function () {
              return void 0 !== l.a.queryParams.display &&
                'grid' != l.a.queryParams.display &&
                this.compileTemplateExtra
                ? this.compileTemplateExtra()
                : this.compileTemplateGridType();
            },
          },
          {
            key: 'compileTemplateGridType',
            value: function () {
              var t = parseFloat(this.settings.placeholderImageRatio),
                e = t > 0 ? t : 1.4,
                n = '';
              return (
                '' ==
                  (n =
                    this.settings.productGridClass &&
                    '' !== this.settings.productGridClass
                      ? this.settings.productGridClass
                      : this.settings.placeholderProductGridItemClass) &&
                  (n =
                    this.$productList.children().length > 0
                      ? u.a.stripHtml(
                          this.$productList.children().first().attr('class')
                        )
                      : N.a.filterSkeleton + '-def-width'),
                this.getTemplate()
                  .replace(
                    /{{class.filterProductSkeleton}}/g,
                    N.a.filterProductSkeleton
                  )
                  .replace(/{{class.filterSkeleton}}/g, N.a.filterSkeleton)
                  .replace(
                    /{{class.filterSkeletonText}}/g,
                    N.a.filterSkeletonText
                  )
                  .replace(/{{paddingTop}}/g, 100 * e)
                  .replace(/{{wrapperClass}}/g, n)
              );
            },
          },
          {
            key: 'compileTemplateExtra',
            value: function () {
              return !1;
            },
          },
          {
            key: 'isRender',
            value: function () {
              var t = u.a.getDefaultSorting();
              return (
                this.settings.showPlaceholderProductList &&
                z.isPanelActive(tt.Enum.PRODUCT) &&
                (!l.a.loadProductFirst ||
                  !u.a.isCollectionPage() ||
                  u.a.isVendorPage() ||
                  u.a.isTagPage() ||
                  u.a.isTypePage() ||
                  ('' != t &&
                    t != o.a.getSettingValue('general.default_sort_by')) ||
                  ('best-selling' === l.a.defaultSorting &&
                    !o.a.getSettingValue(
                      'general.loadProductFirstBestSelling'
                    )) ||
                  l.a.defaultSorting.startsWith('extra') ||
                  o.a.getSettingValue('general.productAndVariantAvailable') ||
                  o.a.getSettingValue('general.sortingAvailableFirst') ||
                  l.a.hasFilterByLocation ||
                  (l.a.loadProductFirst &&
                    (l.a.hasFilterOptionParam || 'init' != this.eventType)) ||
                  o.a.getSettingValue('general.enableVariantsDisplay'))
              );
            },
          },
          {
            key: 'render',
            value: function () {
              var t =
                  this.settings.productsPerRow ||
                  this.settings.placeholderProductPerRow,
                e = this.compileTemplate();
              this.$element = [];
              for (var n = 0; n < t; n++) this.$element.push(i()(e));
              var r = this.parent.productList,
                o =
                  r.settings.loadProductFromLiquid &&
                  r.settings.loadProductFromLiquidType ==
                    ProductList.Enum.loadProductType.AJAX;
              this.isFetchedProductData
                ? (o && !r.isFetchedAjaxProductData) || this.setHide()
                : this.setShow();
            },
          },
          {
            key: 'renderBeforeApplyFilter',
            value: function (t) {
              (this.eventType = t), this.refresh();
            },
          },
          {
            key: 'setData',
            value: function (t) {
              t && this.isRender() && (this.isFetchedProductData = !0);
            },
          },
          {
            key: 'setShow',
            value: function () {
              var t = this;
              this.$productList.addClass(N.a.productWrapLoading),
                this.$productList.css('min-height', this.$productList.height()),
                (u.a.isDefaultPaginationType() ||
                  (!u.a.isDefaultPaginationType() &&
                    'page' !== this.eventType)) &&
                  this.$productList.html(''),
                u.a.isLoadPreviousPagePaginationType() &&
                parseInt(
                  window.sessionStorage.getItem(
                    this.settings.sessionStoragePreviousPageEvent
                  )
                )
                  ? this.$element.forEach(function (e) {
                      return t.$productList.prepend(e);
                    })
                  : this.$element.forEach(function (e) {
                      return t.$productList.append(e);
                    });
            },
          },
          {
            key: 'setHide',
            value: function () {
              var t = this;
              this.$productList.find('.' + N.a.filterProductSkeleton).remove(),
                setTimeout(function () {
                  t.$productList.removeClass(N.a.productWrapLoading),
                    t.$productList.css('min-height', 0);
                }),
                (this.isFetchedProductData = !1);
            },
          },
        ]) && Me(e.prototype, n),
        r && Me(e, r),
        c
      );
    })(d.a);
    function We(t) {
      return (We =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function qe(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function Ge(t, e) {
      return (Ge =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function ze(t, e) {
      return !e || ('object' !== We(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function Ke(t) {
      return (Ke = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var Ye = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && Ge(t, e);
      })(a, t);
      var e,
        n,
        r,
        o = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = Ke(t);
            if (e()) {
              var i = Ke(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return ze(this, n);
          };
        })(a);
      function a() {
        var t;
        return (
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, a),
          ((t = o.call(this)).data = null),
          (t.id = null),
          (t.index = 0),
          (t.$element = null),
          (t.displayImage = !0),
          (t.displayExcerpt = !1),
          t
        );
      }
      return (
        (e = a),
        (n = [
          {
            key: 'compileTemplate',
            value: function () {
              var t = this.data.hasOwnProperty('url') ? this.data.url : '#',
                e = '',
                n = '',
                r = '';
              if (
                (this.displayImage &&
                  (this.data.image &&
                    this.data.image.hasOwnProperty('src') &&
                    '' !== this.data.image.src &&
                    (n = u.a.optimizeImage(this.data.image.src, '200x')),
                  n.length > 0 &&
                    (e = this.getTemplate(en.Enum.tempType.IMAGE))),
                this.displayExcerpt &&
                  this.data.body_html &&
                  'string' == typeof this.data.body_html)
              ) {
                var i = u.a.stripHtml(this.data.body_html);
                i.length > 264 &&
                  (i =
                    i.substr(
                      0,
                      Settings.getSettingValue(
                        'search.pageExcerptLimitCharacter'
                      )
                    ) + '...'),
                  (r = this.getTemplate(en.Enum.tempType.EXCERPT).replace(
                    /{{itemExcerpt}}/g,
                    i
                  ));
              }
              return this.getTemplate()
                .replace(/{{itemThumbnail}}/g, e)
                .replace(/{{itemThumbSrc}}/g, n)
                .replace(/{{itemDesc}}/g, r)
                .replace(/{{class.filterResultItem}}/g, N.a.filterResultItem)
                .replace(/{{itemUrl}}/g, t)
                .replace(/{{itemTitle}}/g, u.a.stripHtml(this.data.title));
            },
          },
          {
            key: 'render',
            value: function () {
              this.$element = i()(this.compileTemplate());
            },
          },
          {
            key: 'setData',
            value: function (t, e) {
              (this.data = t),
                (this.id = t.id),
                (this.index = e),
                (this.displayImage =
                  this.parent.panelData.hasOwnProperty('displayImage') &&
                  this.parent.panelData.displayImage),
                (this.displayExcerpt =
                  this.parent.panelData.hasOwnProperty('displayExcerpt') &&
                  this.parent.panelData.displayExcerpt);
            },
          },
        ]) && qe(e.prototype, n),
        r && qe(e, r),
        a
      );
    })(d.a);
    function Qe(t) {
      return (Qe =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function Je(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function Xe(t, e) {
      return (Xe =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function Ze(t, e) {
      return !e || ('object' !== Qe(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function tn(t) {
      return (tn = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var en = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && Xe(t, e);
      })(o, t);
      var e,
        n,
        r,
        i = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = tn(t);
            if (e()) {
              var i = tn(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return Ze(this, n);
          };
        })(o);
      function o() {
        return (
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, o),
          i.call(this)
        );
      }
      return (
        (e = o),
        (r = [
          {
            key: 'Enum',
            get: function () {
              return {
                tempType: {
                  ITEM: 'page_item',
                  IMAGE: 'image',
                  EXCERPT: 'excerpt',
                },
              };
            },
          },
        ]),
        (n = [
          {
            key: 'getTemplate',
            value: function (t) {
              switch (t) {
                case o.Enum.tempType.IMAGE:
                  return '\n\t\t\t\t\t<div class="{{class.filterResultItem}}-image">\n\t\t\t\t\t\t<img src="{{itemThumbSrc}}" alt="{{itemTitle}}" />\n\t\t\t\t\t</div>\n\t\t\t\t'.trim();
                case o.Enum.tempType.EXCERPT:
                  return '\n\t\t\t\t\t<p class="{{class.filterResultItem}}-description">\n\t\t\t\t\t\t{{itemExcerpt}}\n\t\t\t\t\t</p>\n\t\t\t\t'.trim();
                default:
                  return '\n\t\t\t\t\t<div class="{{class.filterResultItem}} {{class.filterResultItem}}-page">\n\t\t\t\t\t\t<a href="{{itemUrl}}" aria-label="{{itemTitle}}" title="{{itemTitle}}">\n\t\t\t\t\t\t\t{{itemThumbnail}}\n\t\t\t\t\t\t\t<div class="{{class.filterResultItem}}-content">\n\t\t\t\t\t\t\t\t<div class="{{class.filterResultItem}}-title">{{itemTitle}}</div>\n\t\t\t\t\t\t\t\t{{itemDesc}}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t'.trim();
              }
            },
          },
        ]) && Je(e.prototype, n),
        r && Je(e, r),
        o
      );
    })(Ye);
    function nn(t) {
      return (nn =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function rn(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function on(t, e) {
      return (on =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function an(t, e) {
      return !e || ('object' !== nn(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function ln(t) {
      return (ln = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var sn = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && on(t, e);
      })(a, t);
      var e,
        n,
        r,
        o = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = ln(t);
            if (e()) {
              var i = ln(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return an(this, n);
          };
        })(a);
      function a() {
        var t;
        return (
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, a),
          ((t = o.call(this)).data = null),
          (t.id = null),
          (t.index = 0),
          (t.$element = null),
          (t.displayImage = !0),
          (t.displayDescription = !1),
          t
        );
      }
      return (
        (e = a),
        (n = [
          {
            key: 'compileTemplate',
            value: function () {
              var t = '/collections/' + this.data.handle,
                e = '',
                n = '',
                r = '';
              if (
                (this.displayImage &&
                  (this.data.image &&
                    this.data.image.hasOwnProperty('src') &&
                    '' !== this.data.image.src &&
                    (n = u.a.optimizeImage(this.data.image.src, '200x')),
                  n.length > 0 &&
                    (e = this.getTemplate(yn.Enum.tempType.IMAGE))),
                this.displayDescription &&
                  this.data.body_html &&
                  'string' == typeof this.data.body_html)
              ) {
                var i = u.a.stripHtml(this.data.body_html);
                i.length > 264 &&
                  (i =
                    i.substr(
                      0,
                      Settings.getSettingValue(
                        'search.collectionDescLimitCharacter'
                      )
                    ) + '...'),
                  (r = this.getTemplate(yn.Enum.tempType.DESCRIPTION).replace(
                    /{{itemDescription}}/g,
                    i
                  ));
              }
              return this.getTemplate()
                .replace(/{{itemThumbnail}}/g, e)
                .replace(/{{itemThumbSrc}}/g, n)
                .replace(/{{itemDesc}}/g, r)
                .replace(/{{class.filterResultItem}}/g, N.a.filterResultItem)
                .replace(/{{itemUrl}}/g, t)
                .replace(/{{itemTitle}}/g, u.a.stripHtml(this.data.title));
            },
          },
          {
            key: 'render',
            value: function () {
              this.$element = i()(this.compileTemplate());
            },
          },
          {
            key: 'setData',
            value: function (t, e) {
              (this.data = t),
                (this.id = t.id),
                (this.index = e),
                (this.displayImage =
                  this.parent.panelData.hasOwnProperty('displayImage') &&
                  this.parent.panelData.displayImage),
                (this.displayDescription =
                  this.parent.panelData.hasOwnProperty('displayDescription') &&
                  this.parent.panelData.displayDescription);
            },
          },
        ]) && rn(e.prototype, n),
        r && rn(e, r),
        a
      );
    })(d.a);
    function cn(t) {
      return (cn =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function un(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function pn(t, e) {
      return (pn =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function fn(t, e) {
      return !e || ('object' !== cn(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function hn(t) {
      return (hn = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var yn = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && pn(t, e);
      })(o, t);
      var e,
        n,
        r,
        i = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = hn(t);
            if (e()) {
              var i = hn(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return fn(this, n);
          };
        })(o);
      function o() {
        return (
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, o),
          i.call(this)
        );
      }
      return (
        (e = o),
        (r = [
          {
            key: 'Enum',
            get: function () {
              return {
                tempType: {
                  ITEM: 'collection_item',
                  IMAGE: 'image',
                  DESCRIPTION: 'description',
                },
              };
            },
          },
        ]),
        (n = [
          {
            key: 'getTemplate',
            value: function (t) {
              switch (t) {
                case o.Enum.tempType.IMAGE:
                  return '\n\t\t\t\t\t<div class="{{class.filterResultItem}}-image">\n\t\t\t\t\t\t<img src="{{itemThumbSrc}}" alt="{{itemTitle}}" />\n\t\t\t\t\t</div>\n\t\t\t\t'.trim();
                case o.Enum.tempType.DESCRIPTION:
                  return '\n\t\t\t\t\t<p class="{{class.filterResultItem}}-description">\n\t\t\t\t\t\t{{itemDescription}}\n\t\t\t\t\t</p>\n\t\t\t\t'.trim();
                default:
                  return '\n\t\t\t\t\t<div class="{{class.filterResultItem}} {{class.filterResultItem}}-collection">\n\t\t\t\t\t\t<a href="{{itemUrl}}" aria-label="{{itemTitle}}" title="{{itemTitle}}">\n\t\t\t\t\t\t\t{{itemThumbnail}}\n\t\t\t\t\t\t\t<div class="{{class.filterResultItem}}-content">\n\t\t\t\t\t\t\t\t<div class="{{class.filterResultItem}}-title">{{itemTitle}}</div>\n\t\t\t\t\t\t\t\t{{itemDesc}}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t'.trim();
              }
            },
          },
        ]) && un(e.prototype, n),
        r && un(e, r),
        o
      );
    })(sn);
    function dn(t) {
      return (dn =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function gn(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function mn(t, e) {
      return (mn =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function bn(t, e) {
      return !e || ('object' !== dn(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function vn(t) {
      return (vn = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var Sn = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && mn(t, e);
      })(a, t);
      var e,
        n,
        r,
        o = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = vn(t);
            if (e()) {
              var i = vn(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return bn(this, n);
          };
        })(a);
      function a() {
        var t;
        return (
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, a),
          ((t = o.call(this)).$element = i()(s.a.collections)),
          (t.data = null),
          (t.totalCollection = 0),
          (t.settings = {
            searchPanelBlocks: Settings.getSettingValue(
              'search.searchPanelBlocks'
            ),
          }),
          (t.panelData = {}),
          t.settings.searchPanelBlocks.hasOwnProperty(tt.Enum.COLLECTION) &&
            (t.panelData = t.settings.searchPanelBlocks[tt.Enum.COLLECTION]),
          t
        );
      }
      return (
        (e = a),
        (n = [
          {
            key: 'isRender',
            value: function () {
              return null != this.data && z.isPanelActive(tt.Enum.COLLECTION);
            },
          },
          {
            key: 'render',
            value: function () {
              var t = this,
                e = [];
              this.collectionItems.forEach(function (t) {
                e.push(t.$element);
              }),
                this.$element.html(''),
                e.forEach(function (e) {
                  return t.$element.append(e);
                });
            },
          },
          {
            key: 'setData',
            value: function (t) {
              var e = this;
              t &&
                t.collections &&
                t.collections.length &&
                ((this.data = t.collections),
                (this.totalCollection = t.total_collection
                  ? t.total_collection
                  : 0),
                (this.collectionItems = []),
                this.data.forEach(function (t, n) {
                  var r = new yn();
                  e.addComponent(r), r.setData(t), e.collectionItems.push(r);
                }));
            },
          },
        ]) && gn(e.prototype, n),
        r && gn(e, r),
        a
      );
    })(d.a);
    function Tn(t) {
      return (Tn =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function On(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function Pn(t, e) {
      return (Pn =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function wn(t, e) {
      return !e || ('object' !== Tn(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function _n(t) {
      return (_n = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var Cn = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && Pn(t, e);
      })(a, t);
      var e,
        n,
        r,
        o = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = _n(t);
            if (e()) {
              var i = _n(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return wn(this, n);
          };
        })(a);
      function a() {
        var t;
        return (
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, a),
          ((t = o.call(this)).$element = i()(s.a.pages)),
          (t.data = null),
          (t.totalPage = 0),
          (t.settings = {
            searchPanelBlocks: Settings.getSettingValue(
              'search.searchPanelBlocks'
            ),
          }),
          (t.panelData = {}),
          t.settings.searchPanelBlocks.hasOwnProperty(tt.Enum.PAGE) &&
            (t.panelData = t.settings.searchPanelBlocks[tt.Enum.PAGE]),
          t
        );
      }
      return (
        (e = a),
        (n = [
          {
            key: 'isRender',
            value: function () {
              return null != this.data && z.isPanelActive(tt.Enum.PAGE);
            },
          },
          {
            key: 'render',
            value: function () {
              var t = this;
              this.$element.html(''),
                this.pageItems.forEach(function (e) {
                  t.$element.append(e.$element);
                });
            },
          },
          {
            key: 'setData',
            value: function (t) {
              var e = this;
              t &&
                t.pages &&
                t.pages.length &&
                ((this.data = t.pages),
                (this.totalPage = t.total_page ? t.total_page : 0),
                (this.pageItems = []),
                this.data.forEach(function (t, n) {
                  var r = new en();
                  e.addComponent(r), r.setData(t), e.pageItems.push(r);
                }));
            },
          },
        ]) && On(e.prototype, n),
        r && On(e, r),
        a
      );
    })(d.a);
    function kn(t) {
      return (kn =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function En(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function Rn(t, e) {
      return (Rn =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function In(t, e) {
      return !e || ('object' !== kn(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function Ln(t) {
      return (Ln = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var An = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && Rn(t, e);
      })(l, t);
      var e,
        n,
        r,
        o = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = Ln(t);
            if (e()) {
              var i = Ln(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return In(this, n);
          };
        })(l);
      function l() {
        var t;
        return (
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, l),
          ((t = o.call(this)).$element = i()(s.a.searchTotalResult)),
          (t.total = 0),
          (t.panalType = tt.Enum.PRODUCT),
          t
        );
      }
      return (
        (e = l),
        (n = [
          {
            key: 'compileTemplate',
            value: function () {
              return (
                this.total > 1
                  ? a.a.search.searchTotalResults
                  : a.a.search.searchTotalResult
              ).replace(
                /{{ count }}/g,
                '<strong>' + u.a.stripHtml(this.total) + '</strong>'
              );
            },
          },
          {
            key: 'render',
            value: function () {
              var t = this.compileTemplate();
              this.$element.html(t);
            },
          },
          {
            key: 'setData',
            value: function (t, e) {
              'number' == typeof t && (this.total = t),
                e && (this.panalType = e);
            },
          },
        ]) && En(e.prototype, n),
        r && En(e, r),
        l
      );
    })(d.a);
    n(49), n(50);
    function xn(t) {
      return (xn =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function Fn(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function Bn(t, e) {
      return (Bn =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function Dn(t, e) {
      return !e || ('object' !== xn(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function $n(t) {
      return ($n = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var jn = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && Bn(t, e);
      })(a, t);
      var e,
        n,
        r,
        o = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = $n(t);
            if (e()) {
              var i = $n(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return Dn(this, n);
          };
        })(a);
      function a() {
        var t;
        return (
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, a),
          ((t = o.call(this)).data = null),
          (t.id = null),
          (t.totalProduct = null),
          (t.$element = null),
          t
        );
      }
      return (
        (e = a),
        (n = [
          {
            key: 'init',
            value: function () {
              window.BoostOTP && BoostOTP.OTPButtons.init(this);
            },
          },
          {
            key: 'compileTemplate',
            value: function () {
              if ('function' == typeof ProductGridItem) {
                var t = new ProductGridItem();
                t.data = this.data;
                var e = t.compileTemplate().trim();
                return (
                  (e = g.a.compileTemplate(e, this.data)),
                  (e = g.a.compileIntegrationTemplate(this.data, e))
                );
              }
              console.warn(
                'Missing buildProductGridItem function in theme lib'
              );
            },
          },
          {
            key: 'render',
            value: function () {
              this.$element ||
                ((this.$element = i()(this.compileTemplate())),
                this.$element.addClass('boost-pfs-product-slider-item'),
                u.a.isMobile() && (this.parent.productSliderRange = 2),
                window.BoostOTP && BoostOTP.OTPButtons.render(this));
            },
          },
          {
            key: 'bindEvents',
            value: function () {
              if (this.$element && this.parent.$element) {
                var t =
                  this.parent.$element.width() / this.parent.productSliderRange;
                this.$element.css({ width: t + 'px' }),
                  window.BoostOTP && BoostOTP.OTPButtons.bindEvents(this);
              }
            },
          },
          {
            key: 'setData',
            value: function (t) {
              this.data = t;
            },
          },
        ]) && Fn(e.prototype, n),
        r && Fn(e, r),
        a
      );
    })(d.a);
    function Mn(t) {
      return (Mn =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function Vn(t, e) {
      if (!(t instanceof e))
        throw new TypeError('Cannot call a class as a function');
    }
    function Nn(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function Hn(t, e) {
      return (Hn =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function Un(t, e) {
      return !e || ('object' !== Mn(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function Wn(t) {
      return (Wn = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var qn = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && Hn(t, e);
      })(a, t);
      var e,
        n,
        r,
        o = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = Wn(t);
            if (e()) {
              var i = Wn(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return Un(this, n);
          };
        })(a);
      function a() {
        return Vn(this, a), o.apply(this, arguments);
      }
      return (
        (e = a),
        (r = [
          {
            key: 'ProductSliderType',
            get: function () {
              return {
                MOST_POPULAR: 'most-popular',
                RECENTLY_VIEWED: 'recently-viewed',
              };
            },
          },
        ]),
        (n = [
          {
            key: 'getTemplate',
            value: function () {
              return '\n    <div class="boost-pfs-product-slider">\n\t\t\t\t<div class="boost-pfs-product-slider-inner">\n\t\t\t\t\t<div class="boost-pfs-product-slider-item-wrapper"></div>\n\t\t\t\t</div>\n\t\t\t\t<div class="boost-pfs-product-slider-nav">\n\t\t\t\t\t<div class="boost-pfs-product-slider-prev boost-pfs-product-slider-nav-btn-disabled"></div>\n          <div class="boost-pfs-product-slider-next"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n    '.trim();
            },
          },
          {
            key: 'render',
            value: function () {
              var t = this;
              if (i()(this.selector).length > 0) {
                (this.$element = i()(this.getTemplate())),
                  this.children.length > 0 &&
                    ((this.$productSlider = this.$element.find(
                      '.boost-pfs-product-slider-item-wrapper'
                    )),
                    this.children.forEach(function (e) {
                      t.$productSlider.append(e.$element);
                    })),
                  i()(this.selector).first().html('').append(this.$element),
                  g.a.call3rdAppFunction(this.data),
                  g.a.call3rdIntegrationFunc(this.data);
                var e = Settings.getSettingValue('actionlist.alStyle');
                this.$element.hasClass(e) || this.$element.addClass(e);
              }
            },
          },
          {
            key: 'bindEvents',
            value: function () {
              this.$element && this.initImageSlider();
            },
          },
          {
            key: 'setData',
            value: function (t, e) {
              var n = this;
              (this.data = t),
                (this.children = []),
                this.data.products.forEach(function (t) {
                  var e = new jn();
                  e.setData(t), n.addComponent(e);
                }),
                e && this.refresh();
            },
          },
          {
            key: 'initImageSlider',
            value: function () {
              var t = this.$element.find(
                  '.boost-pfs-product-slider-item-wrapper'
                ),
                e = this.$element.find('.boost-pfs-product-slider-nav'),
                n = this.$element.find('.boost-pfs-product-slider-item'),
                r = this.$element.find('.boost-pfs-product-slider-prev'),
                i = this.$element.find('.boost-pfs-product-slider-next');
              0 != t.length &&
                0 != n.length &&
                ((this.imageSlider = {
                  $itemsWrapper: t,
                  $sliderNavWrapper: e,
                  $prev: r,
                  $next: i,
                  posX1: 0,
                  posX2: 0,
                  posInitial: 0,
                  posFinal: 0,
                  threshold: 50,
                  slidesLength: n.length,
                  slideSize: n[0].style.width.replace('px', ''),
                  index: 0,
                  allowShift: !0,
                  isDragging: !1,
                }),
                0 == this.imageSlider.index &&
                  this.imageSlider.$prev.addClass(
                    'boost-pfs-product-slider-nav-btn-disabled'
                  ),
                (this.imageSlider.index == this.imageSlider.slidesLength - 1 ||
                  this.imageSlider.slidesLength <= this.productSliderRange) &&
                  (this.imageSlider.$next.addClass(
                    'boost-pfs-product-slider-nav-btn-disabled'
                  ),
                  this.imageSlider.$sliderNavWrapper.addClass(
                    'boost-pfs-product-slider-nav-disabled'
                  )),
                this.imageSlider.$itemsWrapper.css('left', '0px'),
                this.imageSlider.slidesLength <= this.productSliderRange ||
                  (this.imageSlider.$itemsWrapper.on(
                    'mousedown',
                    this.dragStart.bind(this)
                  ),
                  this.imageSlider.$itemsWrapper.on(
                    'mousemove',
                    this.dragAction.bind(this)
                  ),
                  this.imageSlider.$itemsWrapper.on(
                    'mouseup',
                    this.dragEnd.bind(this)
                  ),
                  this.imageSlider.$itemsWrapper.on(
                    'touchstart',
                    this.dragStart.bind(this)
                  ),
                  this.imageSlider.$itemsWrapper.on(
                    'touchmove',
                    this.dragAction.bind(this)
                  ),
                  this.imageSlider.$itemsWrapper.on(
                    'touchend',
                    this.dragEnd.bind(this)
                  ),
                  this.imageSlider.$prev.on(
                    'click',
                    this.shiftSlide.bind(this, null, -1)
                  ),
                  this.imageSlider.$next.on(
                    'click',
                    this.shiftSlide.bind(this, null, 1)
                  )));
            },
          },
          {
            key: 'dragStart',
            value: function (t) {
              (t = t || window.event),
                (this.imageSlider.posInitial =
                  this.imageSlider.$itemsWrapper[0].offsetLeft);
              var e = t.type.includes('touch')
                ? t.originalEvent.touches[0].clientX
                : t.clientX;
              (this.imageSlider.posX1 = e), (this.imageSlider.isDragging = !0);
            },
          },
          {
            key: 'dragAction',
            value: function (t) {
              if (this.imageSlider.isDragging) {
                var e = (t = t || window.event).type.includes('touch')
                  ? t.originalEvent.touches[0].clientX
                  : t.clientX;
                (this.imageSlider.posX2 = this.imageSlider.posX1 - e),
                  (this.imageSlider.posX1 = e);
                var n =
                    this.imageSlider.$itemsWrapper[0].offsetLeft -
                    this.imageSlider.posX2,
                  r = 0.2 * this.imageSlider.slideSize,
                  i =
                    -this.imageSlider.slideSize *
                      (this.imageSlider.slidesLength -
                        this.productSliderRange) -
                    r;
                n > r ? (n = r) : n < i && (n = i),
                  this.imageSlider.$itemsWrapper.css('left', n + 'px');
              }
            },
          },
          {
            key: 'dragEnd',
            value: function (t) {
              if (this.imageSlider.isDragging)
                if (
                  ((this.imageSlider.isDragging = !1),
                  (this.imageSlider.posFinal =
                    this.imageSlider.$itemsWrapper[0].offsetLeft),
                  this.imageSlider.posFinal - this.imageSlider.posInitial <
                    -this.imageSlider.threshold)
                ) {
                  var e = Math.round(
                    Math.abs(
                      this.imageSlider.posFinal - this.imageSlider.posInitial
                    ) / this.imageSlider.slideSize
                  );
                  this.shiftSlide(null, e);
                } else
                  this.imageSlider.posFinal - this.imageSlider.posInitial >
                  this.imageSlider.threshold
                    ? ((e = Math.round(
                        Math.abs(
                          this.imageSlider.posFinal -
                            this.imageSlider.posInitial
                        ) / this.imageSlider.slideSize
                      )),
                      this.shiftSlide(null, -1 * e))
                    : this.imageSlider.$itemsWrapper.css(
                        'left',
                        this.imageSlider.posInitial + 'px'
                      );
            },
          },
          {
            key: 'shiftSlide',
            value: function (t, e) {
              if (
                (null == t && (t = this.imageSlider.index + e),
                this.imageSlider.allowShift)
              ) {
                var n,
                  r = this.imageSlider.$itemsWrapper.css('left');
                t > -1 &&
                t < this.imageSlider.slidesLength - this.productSliderRange + 1
                  ? ((n = -1 * t * this.imageSlider.slideSize + 'px'),
                    (this.imageSlider.index = t))
                  : (n =
                      -1 * this.imageSlider.index * this.imageSlider.slideSize +
                      'px'),
                  r != n &&
                    (0 == this.imageSlider.index
                      ? this.imageSlider.$prev.addClass(
                          'boost-pfs-product-slider-nav-btn-disabled'
                        )
                      : this.imageSlider.$prev.removeClass(
                          'boost-pfs-product-slider-nav-btn-disabled'
                        ),
                    this.imageSlider.index ==
                    this.imageSlider.slidesLength - this.productSliderRange
                      ? this.imageSlider.$next.addClass(
                          'boost-pfs-product-slider-nav-btn-disabled'
                        )
                      : this.imageSlider.$next.removeClass(
                          'boost-pfs-product-slider-nav-btn-disabled'
                        ),
                    this.imageSlider.$itemsWrapper.addClass(
                      'boost-pfs-product-slider-shifting'
                    ),
                    this.imageSlider.$itemsWrapper.css('left', n),
                    (this.imageSlider.allowShift = !1),
                    setTimeout(this.afterShiftSlide.bind(this), 300));
              }
            },
          },
          {
            key: 'afterShiftSlide',
            value: function () {
              this.imageSlider.$itemsWrapper.removeClass(
                'boost-pfs-product-slider-shifting'
              ),
                (this.imageSlider.allowShift = !0);
            },
          },
        ]) && Nn(e.prototype, n),
        r && Nn(e, r),
        a
      );
    })(d.a);
    function Gn(t) {
      return (Gn =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function zn(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function Kn(t, e, n) {
      return (Kn =
        'undefined' != typeof Reflect && Reflect.get
          ? Reflect.get
          : function (t, e, n) {
              var r = (function (t, e) {
                for (
                  ;
                  !Object.prototype.hasOwnProperty.call(t, e) &&
                  null !== (t = Jn(t));

                );
                return t;
              })(t, e);
              if (r) {
                var i = Object.getOwnPropertyDescriptor(r, e);
                return i.get ? i.get.call(n) : i.value;
              }
            })(t, e, n || t);
    }
    function Yn(t, e) {
      return (Yn =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function Qn(t, e) {
      return !e || ('object' !== Gn(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function Jn(t) {
      return (Jn = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var Xn = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && Yn(t, e);
      })(l, t);
      var e,
        n,
        r,
        o = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = Jn(t);
            if (e()) {
              var i = Jn(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return Qn(this, n);
          };
        })(l);
      function l() {
        var t;
        return (
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, l),
          ((t = o.call(this)).type = qn.ProductSliderType.MOST_POPULAR),
          (t.selector = s.a.mostPopular),
          (t.header = a.a.mostPopular.popularProductsHeading),
          (t.productSliderRange = Settings.getSettingValue(
            'mostPopular.popularProductSliderRange'
          )),
          t.productSliderRange <= 0 && (t.productSliderRange = 4),
          (t.isFetchedMostPopularData = !1),
          (t.collectionHandle = boostPFSAppConfig.general.collection_handle
            ? boostPFSAppConfig.general.collection_handle
            : 'all'),
          t
        );
      }
      return (
        (e = l),
        (n = [
          {
            key: 'init',
            value: function () {
              var t = this;
              if (void 0 === this.data.products) {
                var e =
                  '/collections/' +
                  this.collectionHandle +
                  '?view=boost-pfs-most-popular&sort_by=best-selling';
                i.a.ajax({
                  type: 'GET',
                  url: e,
                  success: function (e) {
                    var n = null;
                    try {
                      /<\!--.*?-->/.test(e) &&
                        (e = e.replace(/<\!--.*?-->/g, '')),
                        (n = t.prepareData(JSON.parse(e)));
                    } catch (t) {
                      console.warn(
                        'Could not parse json from collection.boost-pfs-most-popular.liquid'
                      );
                    }
                    (t.isFetchedMostPopularData = !0), t.setData(n, !0);
                  },
                  error: function (t) {
                    console.warn(
                      'Error getting most popular: ' +
                        t.status +
                        ' ' +
                        t.statusText
                    );
                  },
                });
              }
            },
          },
          {
            key: 'prepareData',
            value: function (t) {
              return (
                t.products.forEach(function (t) {
                  (t.price /= 100),
                    (t.price_min /= 100),
                    (t.price_max /= 100),
                    (t.compare_at_price /= 100),
                    (t.compare_at_price_min /= 100),
                    (t.compare_at_price_max /= 100),
                    t.variants.forEach(function (t) {
                      (t.price /= 100), (t.compare_at_price /= 100);
                    });
                }),
                t
              );
            },
          },
          {
            key: 'setProductData',
            value: function (t) {
              this.isFetchedMostPopularData = !0;
              var e = { products: t };
              this.setData(e, !0);
            },
          },
          {
            key: 'isRender',
            value: function () {
              return (
                this.isFetchedMostPopularData && this.data.products.length > 0
              );
            },
          },
          {
            key: 'isBindEvents',
            value: function () {
              return this.$element;
            },
          },
          {
            key: 'isLoopThroughChild',
            value: function () {
              return (
                this.isFetchedMostPopularData && this.data.products.length > 0
              );
            },
          },
          {
            key: 'bindEvents',
            value: function () {
              Kn(Jn(l.prototype), 'bindEvents', this).call(this),
                boostPFSConfig.general.isInitFilter &&
                  i()(window).on(
                    'boost-pfs-change-address-bar',
                    this.updateMostPopularData.bind(this)
                  );
            },
          },
          {
            key: 'updateMostPopularData',
            value: function () {
              if (window.location.pathname.startsWith('/collections/')) {
                var t = window.location.pathname.replace('/collections/', '');
                t &&
                  t != this.collectionHandle &&
                  ((this.collectionHandle = t),
                  (this.isFetchedMostPopularData = !1),
                  (this.isInit = !1),
                  this.refresh());
              }
            },
          },
        ]) && zn(e.prototype, n),
        r && zn(e, r),
        l
      );
    })(qn);
    function Zn(t) {
      return (Zn =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function tr(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function er(t, e) {
      return (er =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function nr(t, e) {
      return !e || ('object' !== Zn(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function rr(t) {
      return (rr = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var ir = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && er(t, e);
      })(p, t);
      var e,
        n,
        r,
        c = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = rr(t);
            if (e()) {
              var i = rr(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return nr(this, n);
          };
        })(p);
      function p() {
        var t;
        return (
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, p),
          ((t = c.call(this)).productsData = null),
          (t.$element = i()(s.a.products)),
          t
        );
      }
      return (
        (e = p),
        (n = [
          {
            key: 'getTitleTemplate',
            value: function () {
              return '\n\t\t\t<div class="product-list-no-search-result-text boost-pfs-search-panel-product-show">{{label.resultEmpty}}</div>\n      {{noResultSearchTipsTemplate}}\n      {{noResultSearchSuggestionTemplate}}\n\n      {{noResultSearchMostPopular}}\n\t\t'.trim();
            },
          },
          {
            key: 'getNoResultSearchTipsTemplate',
            value: function () {
              return '\n\t\t\t<div class="boost-pfs-filter-search-tips-content-wrapper boost-pfs-search-panel-product-show">\n\t\t\t\t<div class="boost-pfs-filter-search-tips-title">{{searchTipsTitle}}</div>\n\t\t\t\t<div class="boost-pfs-filter-search-tips-content">\n          <ul>{{searchTipsListItem}}</ul>\n        </div>\n\t\t\t</div>\n\t\t'.trim();
            },
          },
          {
            key: 'getNoResultSearchSuggestionsTemplate',
            value: function () {
              return '\n      <div class="boost-pfs-filter-search-term-suggestion-wrapper boost-pfs-search-panel-product-show">\n        <div class="boost-pfs-filter-search-term-suggestion-title">{{searchTermSuggestionTitle}}</div>\n        <div class="boost-pfs-filter-search-term-suggestion-content">\n          <ul>\n            {{searchTermSuggestionListItem}}\n          </ul>\n        </div>\n      </div>\n    '.trim();
            },
          },
          {
            key: 'getNoResultSearchMostPopular',
            value: function () {
              return '\n    <div class="boost-pfs-most-popular-wrapper boost-pfs-search-panel-product-show">\n    <div class="boost-pfs-product-no-search-result-title"><h2>{{noSearchResultTitle}}</h2></div>\n    <div class="boost-pfs-most-popular"></div>\n    </div>';
            },
          },
          {
            key: 'compileTitleTemplate',
            value: function () {
              o.a.getSettingValue('search.suggestionNoResult');
              var t = a.a.suggestion.noSearchResultProductsLabel,
                e = a.a.search.resultEmpty,
                n = o.a.getSettingValue('general.current_locale'),
                r = o.a.getSettingValue(
                  'labelTranslations.' + n + '.search.resultEmpty'
                );
              r && (e = r);
              var i = '';
              if (
                o.a.getSettingValue(
                  'search.searchPanelBlocks.searchTips.active'
                )
              ) {
                for (
                  var s = a.a.search.searchTipsContent.split('{{ breakline }}'),
                    c = '',
                    p = 0;
                  p < s.length;
                  p++
                )
                  '' != s[p] && (c += '<li>'.concat(s[p], '</li>'));
                i = this.getNoResultSearchTipsTemplate()
                  .replace(/{{searchTipsTitle}}/g, a.a.search.searchTipsTitle)
                  .replace(/{{searchTipsListItem}}/g, c);
              }
              var f = '';
              if (
                o.a.getSettingValue(
                  'search.searchPanelBlocks.searchTermSuggestions.active'
                )
              ) {
                var h = o.a.getSettingValue(
                  'search.suggestionNoResult.search_terms.data'
                );
                for (p = 0; p < h.length; p++)
                  f += '\n          <li>\n            <a href="/search?q='
                    .concat(h[p], '">')
                    .concat(h[p], '</a>\n          </li>\n        ')
                    .trim();
                h.length > 0 &&
                  (f = this.getNoResultSearchSuggestionsTemplate()
                    .replace(
                      /{{searchTermSuggestionTitle}}/g,
                      a.a.suggestion.noSearchResultSearchTermLabel
                    )
                    .replace(/{{searchTermSuggestionListItem}}/g, f));
              }
              var y = '';
              return (
                o.a.getSettingValue(
                  'search.searchPanelBlocks.mostPopularProducts.active'
                ) &&
                  this.data.length > 0 &&
                  (y = this.getNoResultSearchMostPopular()),
                this.getTitleTemplate()
                  .replace(/{{noResultSearchTipsTemplate}}/g, i)
                  .replace(/{{noResultSearchSuggestionTemplate}}/g, f)
                  .replace(/{{noResultSearchMostPopular}}/g, y)
                  .replace(/{{noSearchResultTitle}}/g, t)
                  .replace(/{{label.resultEmpty}}/g, e)
                  .replace(
                    /{{ terms }}/g,
                    '<b>' + u.a.stripHtml(l.a.queryParams.q) + '</b>'
                  )
                  .replace(/{{ breakline }}/g, '<br />')
              );
            },
          },
          {
            key: 'isRender',
            value: function () {
              return (
                u.a.isSearchPage() &&
                z.isPanelActive(tt.Enum.PRODUCT) &&
                0 == this.parent.totalProduct &&
                'filter' != this.eventType &&
                'collection' != this.eventType
              );
            },
          },
          {
            key: 'render',
            value: function () {
              if (
                this.$element &&
                0 ==
                  this.$element.parent().find('.boost-pfs-product-slider-title')
                    .length
              ) {
                var t = this.compileTitleTemplate();
                i()(s.a.products).before(t);
              }
              'init' == this.eventType &&
                (i()('.boost-pfs-filter-tree-mobile-button').hide(),
                i()('.boost-pfs-filter-tree-desktop-button').hide(),
                i()('.boost-pfs-filter-tree').hide(),
                i()('.boost-pfs-filter-left-col').hide(),
                i()('.boost-pfs-filter-right-col, .boost-pfs-filter-right').css(
                  { width: '100%' }
                ),
                i()(s.a.filterTree).hide(),
                i()(s.a.topSorting).hide(),
                i()(s.a.topShowLimit).hide(),
                i()(s.a.topDisplayType).hide(),
                i()(s.a.bottomPagination).hide(),
                i()(s.a.btnLoadPreviousPageWrapperSelector).hide(),
                i()(s.a.loadMoreButtonContainer).hide(),
                i()(s.a.products).hide(),
                i()('body').addClass('boost-pfs-search-no-result-body')),
                o.a.getSettingValue(
                  'search.searchPanelBlocks.mostPopularProducts.active'
                ) && this.initMostPopular();
            },
          },
          {
            key: 'isBindEvents',
            value: function () {
              return !1;
            },
          },
          {
            key: 'getNoSearchResultData',
            value: function () {
              var t = [];
              if (i()(s.a.searchNoResultJson).length > 0)
                try {
                  var e = JSON.parse(i()(s.a.searchNoResultJson).html());
                  if (
                    (Array.isArray(e.products) &&
                      e.products.length > 0 &&
                      (t = e.products),
                    i()(
                      '#boost-pfs-instant-search-products-not-found-metafields-json'
                    ).length > 0)
                  )
                    for (
                      var n = JSON.parse(
                          i()(
                            '#boost-pfs-instant-search-products-not-found-metafields-json'
                          ).html()
                        ),
                        r = 0;
                      r < n.products.length;
                      r++
                    )
                      t[r].metafields = n.products[r].metafields;
                } catch (t) {}
              return t;
            },
          },
          {
            key: 'initMostPopular',
            value: function () {
              new Xn().setProductData(this.data);
            },
          },
          {
            key: 'prepareProductData',
            value: function () {
              this.data.forEach(function (t) {
                if (
                  ((t.price /= 100),
                  (t.price_max /= 100),
                  (t.price_min /= 100),
                  (t.compare_at_price /= 100),
                  (t.compare_at_price_max /= 100),
                  (t.compare_at_price_min /= 100),
                  t.variants.forEach(function (t) {
                    (t.price /= 100), (t.compare_at_price /= 100);
                  }),
                  (t.options_with_values = []),
                  Array.isArray(t.options)
                    ? t.options.forEach(function (e, n) {
                        t.options_with_values.push({
                          values: [],
                          name: u.a.slugify(e),
                          label: e,
                        }),
                          (t.options[n] = e.toLowerCase());
                      })
                    : (t.options = []),
                  t.options.length > 0 && Array.isArray(t.variants))
                ) {
                  var e = [];
                  t.variants.forEach(function (n) {
                    n.merged_options = [];
                    for (var r = 0; r < t.options_with_values.length; r++) {
                      var i = n['option' + (r + 1)];
                      i &&
                        !e.includes(i) &&
                        (t.options_with_values[r].values.push({
                          image: null,
                          title: i,
                        }),
                        e.push(i)),
                        n.merged_options.push(
                          t.options_with_values[r].name + ':' + i
                        ),
                        (n['option_' + t.options_with_values[r].name] = i);
                    }
                  });
                } else t.variants = [];
                (t.images_info = []),
                  Array.isArray(t.media) &&
                    (t.images_info = t.media.filter(function (t) {
                      return 'image' == t.media_type;
                    })),
                  Array.isArray(t.variants) &&
                    t.variants.forEach(function (e) {
                      (e.image = e.featured_image
                        ? e.featured_image.src
                        : null),
                        e.image &&
                          Array.isArray(t.options_with_values) &&
                          Array.isArray(t.images) &&
                          t.options_with_values.forEach(function (n) {
                            var r = e['option_' + n.name];
                            r &&
                              n.values.forEach(function (n) {
                                if (n.title && n.title == r && !n.image) {
                                  var i = t.images.indexOf(
                                    e.image.replace('https:', '')
                                  );
                                  i >= 0 && (n.image = i + 1);
                                }
                              });
                          });
                    });
                var n = {};
                if (Array.isArray(t.images)) {
                  for (var r = 0; r < t.images.length; r++) {
                    var i = t.images[r];
                    i.startsWith('//') && (i = 'https:' + i), (n[r + 1] = i);
                  }
                  t.images = n;
                }
                t.media || (t.media = []),
                  t.barcodes || (t.barcodes = []),
                  t.collections || (t.collections = []),
                  t.metafields || (t.metafields = []),
                  t.skus || (t.skus = []),
                  null == t.inventory_quantity &&
                    (t.inventory_quantity = t.available ? 99999 : 0),
                  t.body_html || (t.body_html = u.a.stripHtml(t.content));
              });
            },
          },
          {
            key: 'setData',
            value: function () {
              var t = this.getNoSearchResultData();
              (this.data = t),
                (this.totalProduct = this.data.length),
                (this.eventType = this.parent.eventType),
                this.prepareProductData(),
                (this.children = []),
                (this.productItems = []);
            },
          },
        ]) && tr(e.prototype, n),
        r && tr(e, r),
        p
      );
    })(ft);
    function or(t) {
      return (or =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function ar(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function lr(t, e) {
      return (lr =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function sr(t, e) {
      return !e || ('object' !== or(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function cr(t) {
      return (cr = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var ur = (function (t) {
        !(function (t, e) {
          if ('function' != typeof e && null !== e)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && lr(t, e);
        })(l, t);
        var e,
          n,
          r,
          a = (function (t) {
            function e() {
              if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            }
            return function () {
              var n,
                r = cr(t);
              if (e()) {
                var i = cr(this).constructor;
                n = Reflect.construct(r, arguments, i);
              } else n = r.apply(this, arguments);
              return sr(this, n);
            };
          })(l);
        function l() {
          var t;
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError('Cannot call a class as a function');
            })(this, l),
            ((t = a.call(this)).data = null),
            (t.productList = null),
            (t.totalProduct = 0),
            (t.pagination = ''),
            (t.sorting = ''),
            (t.breadcrumbs = ''),
            (t.eventType = ''),
            (t.displayType = ''),
            (t.$element = i()(s.a.products)),
            (t.settngs = {
              paginationType: o.a.getSettingValue('general.paginationType'),
            }),
            (t.productListGobackPreviousPosition = !1),
            t
          );
        }
        return (
          (e = l),
          (n = [
            {
              key: 'init',
              value: function () {
                (this.productPlaceholder = new Ue()),
                  this.addComponent(this.productPlaceholder),
                  (this.productList = new ft()),
                  this.addComponent(this.productList);
                var t = this._getProductPaginationClass();
                (this.pagination = new t()),
                  this.addComponent(this.pagination),
                  u.a.isLoadPreviousPagePaginationType() &&
                    ((this.loadPrevious = new Le()),
                    this.addComponent(this.loadPrevious)),
                  (this.sorting = new It()),
                  this.addComponent(this.sorting),
                  (this.limit = new Dt()),
                  this.addComponent(this.limit),
                  (this.displayType = new wt()),
                  this.addComponent(this.displayType);
                var e = this._getPageInfoClass();
                (this.pageInfo = new e()),
                  this.addComponent(this.pageInfo),
                  (this.rebotsMeta = new he()),
                  this.addComponent(this.rebotsMeta),
                  u.a.isSearchPage() &&
                    ((this.searchResultPanels = new z()),
                    this.addComponent(this.searchResultPanels),
                    (this.collectionList = new Sn()),
                    this.addComponent(this.collectionList),
                    (this.collectionListPagination = new $e(
                      s.a.searchCollectionPagination,
                      tt.Enum.COLLECTION
                    )),
                    this.addComponent(this.collectionListPagination),
                    (this.pageList = new Cn()),
                    this.addComponent(this.pageList),
                    (this.pageListPagination = new $e(
                      s.a.searchPagePagination,
                      tt.Enum.PAGE
                    )),
                    this.addComponent(this.pageListPagination),
                    (this.searchResultTotal = new An()),
                    this.addComponent(this.searchResultTotal));
              },
            },
            {
              key: 'isRender',
              value: function () {
                return this.parent.isFetchedProductData;
              },
            },
            {
              key: 'setData',
              value: function (t) {
                (this.data = t),
                  (this.totalProduct = t.total_product),
                  (this.eventType = t.event_type),
                  this.productList.setData(t.products),
                  this.pagination.setData(t),
                  this.loadPrevious && this.loadPrevious.setData(t),
                  u.a.isSearchPage() &&
                    (this.searchResultPanels.setData(t, this.eventType),
                    this.collectionList.setData(t, this.eventType),
                    this.pageList.setData(t, this.eventType),
                    t.hasOwnProperty('total_product') &&
                      this.searchResultTotal.setData(t.total_product),
                    0 == this.totalProduct &&
                      'init' == this.eventType &&
                      ((this.productList = new ir()),
                      this.addComponent(this.productList),
                      this.productList.setData())),
                  this.productPlaceholder.setData(t),
                  this.pageInfo.setData(t);
              },
            },
            {
              key: '_getProductPaginationClass',
              value: function () {
                switch (o.a.getSettingValue('general.paginationType')) {
                  case at.Type.DEFAULT:
                    return bt;
                  case at.Type.LOAD_MORE:
                    return ve;
                  default:
                    return _e;
                }
              },
            },
            {
              key: '_getPageInfoClass',
              value: function () {
                return u.a.isSearchPage() ? Kt : le;
              },
            },
            {
              key: '_shouldProductListGobackPreviousPosition',
              value: function () {
                return !this.productListGobackPreviousPosition;
              },
            },
            {
              key: '_changeProductListGobackPreviousPositionStatus',
              value: function () {
                var t =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0];
                this.productListGobackPreviousPosition = t;
              },
            },
            {
              key: '_productPaginationInfiniteShouldLoadmore',
              value: function () {
                return !this.productListGobackPreviousPosition;
              },
            },
          ]) && ar(e.prototype, n),
          r && ar(e, r),
          l
        );
      })(d.a),
      pr = n(5);
    function fr(t) {
      return (fr =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function hr(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function yr(t, e) {
      return (yr =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function dr(t, e) {
      return !e || ('object' !== fr(e) && 'function' != typeof e) ? gr(t) : e;
    }
    function gr(t) {
      if (void 0 === t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return t;
    }
    function mr(t) {
      return (mr = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var br = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && yr(t, e);
      })(s, t);
      var e,
        n,
        r,
        l = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = mr(t);
            if (e()) {
              var i = mr(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return dr(this, n);
          };
        })(s);
      function s(t) {
        var e;
        return (
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, s),
          ((e = l.call(this)).filterTree = t),
          (e.filterTree.mobileButton = gr(e)),
          (e.isCollapsed = !0),
          (e.label = a.a.refineMobile),
          (e.icon = o.a.getSettingValue('general.filterTreeMobileIcon')),
          (e.$element = null),
          e
        );
      }
      return (
        (e = s),
        (n = [
          {
            key: 'getTemplate',
            value: function () {
              return '\n\t\t\t\t<button type="button" aria-label="{{label}}">{{icon}} <span class="{{filterTreeMobileButton}}-label">{{label}}</span></button>\n\t\t'.trim();
            },
          },
          {
            key: 'compileTemplate',
            value: function () {
              return this.getTemplate()
                .replace(
                  /{{filterTreeMobileButton}}/g,
                  N.a.filterTreeMobileButton
                )
                .replace(/{{label}}/g, this.label)
                .replace(/{{icon}}/g, this.icon);
            },
          },
          {
            key: 'render',
            value: function () {
              this.$element || (this.$element = i()(this.compileTemplate())),
                this.parent.isFetchedFilterData &&
                  (this.filterTree.filterOptions.size > 0 ||
                    this.$element.hide());
            },
          },
          {
            key: 'isBindEvents',
            value: function () {
              return !this.isBoundEvent;
            },
          },
          {
            key: 'bindEvents',
            value: function () {
              this.$element &&
                this.filterTree &&
                this.$element.on('click', this.onClick.bind(this));
            },
          },
          {
            key: 'onClick',
            value: function () {
              'function' == typeof this.filterTree.onClickMobileButton
                ? this.filterTree.onClickMobileButton()
                : (this.toggleFilterTree(),
                  i()('body').toggleClass(N.a.filterTreeOpenBody));
            },
          },
          {
            key: 'toggleFilterTree',
            value: function () {
              var t = i()('#' + this.filterTree.id);
              t &&
                !t.hasClass('toggling') &&
                ((this.isCollapsed = !this.isCollapsed),
                o.a.getSettingValue('general.changeMobileButtonLabel') &&
                  ((this.label = this.isCollapsed
                    ? a.a.refineMobile
                    : a.a.refineMobileCollapse),
                  this.$element.text(this.label)),
                this.afterToggleFilterTree());
            },
          },
          {
            key: 'afterToggleFilterTree',
            value: function () {
              this.isCollapsed ||
                this.filterTree.filterOptions.forEach(function (t) {
                  t.displayType != pr.a.DisplayType.BOX ||
                    t.isCollapsed ||
                    t.filterItems.forEach(function (t) {
                      t.setBoxItemSize();
                    });
                });
            },
          },
        ]) && hr(e.prototype, n),
        r && hr(e, r),
        s
      );
    })(d.a);
    function vr(t) {
      return (vr =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function Sr(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function Tr(t, e) {
      return (Tr =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function Or(t, e) {
      return !e || ('object' !== vr(e) && 'function' != typeof e) ? Pr(t) : e;
    }
    function Pr(t) {
      if (void 0 === t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return t;
    }
    function wr(t) {
      return (wr = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var _r = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && Tr(t, e);
      })(s, t);
      var e,
        n,
        r,
        l = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = wr(t);
            if (e()) {
              var i = wr(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return Or(this, n);
          };
        })(s);
      function s(t) {
        var e;
        return (
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, s),
          ((e = l.call(this)).filterTree = t),
          (e.filterTree.desktopButton = Pr(e)),
          (e.isCollapsed = !0),
          (e.label = a.a.refineDesktop),
          (e.icon = o.a.getSettingValue('general.filterTreeIcon')),
          (e.iconClose = o.a.getSettingValue('general.filterTreeIconClose')),
          (e.$element = null),
          e
        );
      }
      return (
        (e = s),
        (n = [
          {
            key: 'getTemplate',
            value: function () {
              return '\n\t\t\t\t<button type="button" aria-label="{{label}}"><span class="{{filterTreeDesktopButton}}-icon">{{icon}}</span> <span class="{{filterTreeDesktopButton}}-label">{{label}}</span></button>\n\t\t'.trim();
            },
          },
          {
            key: 'compileTemplate',
            value: function () {
              return this.getTemplate()
                .replace(
                  /{{filterTreeDesktopButton}}/g,
                  N.a.filterTreeDesktopButton
                )
                .replace(/{{label}}/g, this.label)
                .replace(/{{icon}}/g, this.icon);
            },
          },
          {
            key: 'render',
            value: function () {
              this.$element || (this.$element = i()(this.compileTemplate())),
                this.parent.isFetchedFilterData &&
                  (this.filterTree.filterOptions.size > 0 ||
                    this.$element.hide());
            },
          },
          {
            key: 'isBindEvents',
            value: function () {
              return !this.isBoundEvent;
            },
          },
          {
            key: 'bindEvents',
            value: function () {
              this.$element &&
                this.filterTree &&
                this.$element.on('click', this.onClick.bind(this));
            },
          },
          {
            key: 'onClick',
            value: function () {
              'function' == typeof this.filterTree.onClickDesktopButton
                ? this.filterTree.onClickDesktopButton()
                : (this.toggleFilterTree(),
                  i()('body').toggleClass(N.a.filterTreeOpenBody));
            },
          },
          {
            key: 'toggleFilterTree',
            value: function () {
              var t = i()('#' + this.filterTree.id);
              t &&
                !t.hasClass('toggling') &&
                ((this.isCollapsed = !this.isCollapsed),
                o.a.getSettingValue('general.changeDesktopButtonLabel') &&
                  ((this.label = this.isCollapsed
                    ? a.a.refineDesktop
                    : a.a.refineDesktopCollapse),
                  (this.$element[0].children[1].innerHTML = this.label)),
                o.a.getSettingValue('general.changeDesktopButtonIcon') &&
                  ((this.icon = this.isCollapsed
                    ? o.a.getSettingValue('general.filterTreeIcon')
                    : o.a.getSettingValue('general.filterTreeIconClose')),
                  (this.$element[0].children[0].innerHTML = this.icon)),
                this.afterToggleFilterTree());
            },
          },
          {
            key: 'afterToggleFilterTree',
            value: function () {
              this.isCollapsed ||
                this.filterTree.filterOptions.forEach(function (t) {
                  t.displayType != pr.a.DisplayType.BOX ||
                    t.isCollapsed ||
                    t.filterItems.forEach(function (t) {
                      t.setBoxItemSize();
                    });
                });
            },
          },
        ]) && Sr(e.prototype, n),
        r && Sr(e, r),
        s
      );
    })(d.a);
    function Cr(t) {
      return (Cr =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function kr(t, e) {
      if (!(t instanceof e))
        throw new TypeError('Cannot call a class as a function');
    }
    function Er(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function Rr(t, e) {
      return (Rr =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function Ir(t, e) {
      return !e || ('object' !== Cr(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function Lr(t) {
      return (Lr = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var Ar = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && Rr(t, e);
      })(l, t);
      var e,
        n,
        r,
        a = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = Lr(t);
            if (e()) {
              var i = Lr(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return Ir(this, n);
          };
        })(l);
      function l() {
        return kr(this, l), a.apply(this, arguments);
      }
      return (
        (e = l),
        (n = [
          {
            key: 'getTemplate',
            value: function () {
              return '\n\t\t\t<div class="boost-pfs-filter-loading" style="display: none;"><span class="boost-pfs-filter-loading-icon"></span></div>\n\t\t'.trim();
            },
          },
          {
            key: 'compileTemplate',
            value: function () {
              return this.getTemplate();
            },
          },
          {
            key: 'setShow',
            value: function (t) {
              this.$element ||
                ((this.$element = i()(this.compileTemplate())),
                i()('body').append(this.$element)),
                this.isEnabled() &&
                  (t ? this.$element.show() : this.$element.hide());
            },
          },
          {
            key: 'isEnabled',
            value: function () {
              var t = u.a.isMobile();
              return (
                (!t && o.a.getSettingValue('general.showLoading')) ||
                (t && o.a.getSettingValue('general.showMobileLoading'))
              );
            },
          },
        ]) && Er(e.prototype, n),
        r && Er(e, r),
        l
      );
    })(d.a);
    function xr(t) {
      return (xr =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function Fr(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function Br(t, e) {
      return (Br =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function Dr(t, e) {
      return !e || ('object' !== xr(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function $r(t) {
      return ($r = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var jr = (function (t) {
        !(function (t, e) {
          if ('function' != typeof e && null !== e)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && Br(t, e);
        })(l, t);
        var e,
          n,
          r,
          a = (function (t) {
            function e() {
              if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            }
            return function () {
              var n,
                r = $r(t);
              if (e()) {
                var i = $r(this).constructor;
                n = Reflect.construct(r, arguments, i);
              } else n = r.apply(this, arguments);
              return Dr(this, n);
            };
          })(l);
        function l() {
          var t;
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError('Cannot call a class as a function');
            })(this, l),
            ((t = a.call(this)).style = o.a.getSettingValue(
              'general.styleScrollToTop'
            )),
            (t.$element = null),
            t
          );
        }
        return (
          (e = l),
          (n = [
            {
              key: 'getTemplate',
              value: function () {
                return '\n\t\t\t<button aria-label="Back to top" class="boost-pfs-filter-scroll-to-top {{style}}" style="display: inline;"></button>\n\t\t'.trim();
              },
            },
            {
              key: 'compileTemplate',
              value: function () {
                return this.getTemplate().replace(/{{style}}/g, this.style);
              },
            },
            {
              key: 'isRender',
              value: function () {
                return !this.$element;
              },
            },
            {
              key: 'render',
              value: function () {
                !this.$element &&
                  this.isShow() &&
                  ((this.$element = i()(this.compileTemplate())),
                  i()('body').append(this.$element));
              },
            },
            {
              key: 'isBindEvents',
              value: function () {
                return !this.isBoundEvent;
              },
            },
            {
              key: 'bindEvents',
              value: function () {
                this.$element &&
                  (this.$element.on('click', this.scrollToTop.bind(this)),
                  i()(document).scroll(this.setVisibility.bind(this)));
              },
            },
            {
              key: 'scrollToTop',
              value: function () {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              },
            },
            {
              key: 'setVisibility',
              value: function () {
                ((document.documentElement &&
                  document.documentElement.scrollTop) ||
                  document.body.scrollTop) > 100
                  ? this.$element.show()
                  : this.$element.hide();
              },
            },
            {
              key: 'isShow',
              value: function () {
                return o.a.getSettingValue('general.activeScrollToTop');
              },
            },
          ]) && Fr(e.prototype, n),
          r && Fr(e, r),
          l
        );
      })(d.a),
      Mr = {
        FilterTreeType: { VERTICAL: 'vertical', HORIZONTAL: 'horizontal' },
      };
    n(58), n(116), n(119), n(182), n(83), n(47);
    function Vr(t) {
      return (Vr =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function Nr(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function Hr(t, e) {
      return (Hr =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function Ur(t, e) {
      return !e || ('object' !== Vr(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function Wr(t) {
      return (Wr = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var qr = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && Hr(t, e);
      })(c, t);
      var e,
        n,
        r,
        s = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = Wr(t);
            if (e()) {
              var i = Wr(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return Ur(this, n);
          };
        })(c);
      function c(t, e) {
        var n;
        return (
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, c),
          ((n = s.call(this)).filterTreeType = t),
          (n.clearType = e),
          (n.requestInstantly = !0),
          (n.label =
            n.clearType == c.ClearType.CLEAR_ALL ? a.a.clearAll : a.a.clear),
          (n.filterOptionLabel = ''),
          (n.filterValueLabel = ''),
          n
        );
      }
      return (
        (e = c),
        (r = [
          {
            key: 'ClearType',
            get: function () {
              return {
                CLEAR_SINGLE_VALUE: 'clear-single-value',
                CLEAR_OPTION_VALUES: 'clear-option-values',
                CLEAR_ALL: 'clear-all',
              };
            },
          },
        ]),
        (n = [
          {
            key: 'getTemplate',
            value: function () {
              switch (this.clearType) {
                case c.ClearType.CLEAR_SINGLE_VALUE:
                  return '\n\t\t\t\t\t<button aria-label="{{adaLabel}}" class="{{class.button}} {{class.clearButton}}">\n\t\t\t\t\t\t<span class="refine-by-type">\n\t\t\t\t\t\t\t<span class="refine-by-option">{{filterOptionLabel}}</span><span class="refine-by-value">{{filterValueLabel}}</span>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</button>\n\t\t\t\t'.trim();
                case c.ClearType.CLEAR_OPTION_VALUES:
                  return '\n\t\t\t\t\t<button aria-label="{{adaLabel}}" class="{{class.button}} {{class.clearButton}}">{{label}}</button>\n\t\t\t\t'.trim();
                case c.ClearType.CLEAR_ALL:
                  return '\n\t\t\t\t\t<button aria-label="{{adaLabel}}" class="{{class.button}} {{class.clearAllButton}}">{{label}}</button>\n\t\t\t\t'.trim();
                default:
                  console.warn('Wrong filter clear type');
              }
            },
          },
          {
            key: 'compileTemplate',
            value: function () {
              return (
                this.buildLabel(),
                this.getTemplate()
                  .replace(/{{label.clear}}/g, a.a.clear)
                  .replace(/{{class.button}}/g, N.a.button)
                  .replace(/{{class.clearButton}}/g, N.a.clearButton)
                  .replace(/{{class.clearAllButton}}/g, N.a.clearAllButton)
                  .replace(/{{adaLabel}}/g, u.a.stripHtml(this.adaLabel))
                  .replace(/{{label}}/g, u.a.stripHtml(this.label))
                  .replace(/{{filterOptionLabel}}/g, this.filterOptionLabel)
                  .replace(/{{filterValueLabel}}/g, this.filterValueLabel)
              );
            },
          },
          {
            key: 'render',
            value: function () {
              this.$element || (this.$element = i()(this.compileTemplate())),
                this.isVisible() ? this.$element.show() : this.$element.hide();
            },
          },
          {
            key: 'buildLabel',
            value: function () {
              switch (((this.adaLabel = ''), this.clearType)) {
                case c.ClearType.CLEAR_SINGLE_VALUE:
                  var t = this.parent;
                  if (t && t.type && t.label) {
                    var e = u.a.stripHtml(t.label);
                    o.a.getSettingValue('general.enable3rdCurrencySupport') &&
                      'Price' == this.parent.type &&
                      (e = ''),
                      (this.adaLabel = a.a.ada.clearFilterItem
                        .replace(/{{filterOption}}/g, u.a.stripHtml(t.type))
                        .replace(/{{filterItem}}/g, e)),
                      (this.filterOptionLabel = u.a.stripHtml(
                        t.type &&
                          this.filterTreeType == Mr.FilterTreeType.VERTICAL
                          ? t.type + ': '
                          : ''
                      )),
                      (this.filterValueLabel = u.a.stripHtml(t.label));
                  }
                  break;
                case c.ClearType.CLEAR_OPTION_VALUES:
                  var n = this.parent;
                  n &&
                    n.label &&
                    (this.adaLabel = a.a.ada.clearFilterOption.replace(
                      /{{filterOption}}/g,
                      u.a.stripHtml(n.label)
                    ));
                  break;
                case c.ClearType.CLEAR_ALL:
                  this.adaLabel = a.a.ada.clearAllFilterItems;
              }
            },
          },
          {
            key: 'isVisible',
            value: function () {
              var t = !0;
              switch (this.clearType) {
                case c.ClearType.CLEAR_OPTION_VALUES:
                  var e = this.parent;
                  if (
                    e.displayType == pr.a.DisplayType.MULTI_LEVEL_COLLECTIONS
                  ) {
                    var n = e.filterOptionId.replace(
                      l.a.prefix + '_c_',
                      l.a.prefix + '_ct_'
                    );
                    t = l.a.queryParams[e.filterOptionId] || l.a.queryParams[n];
                  } else t = l.a.queryParams[e.filterOptionId];
                  break;
                case c.ClearType.CLEAR_ALL:
                  (t = !1),
                    Object.keys(l.a.queryParams).forEach(function (e) {
                      if (e.startsWith(l.a.prefix)) {
                        var n = l.a.queryParams[e];
                        (!u.a.isCollectionPage() &&
                          e.startsWith(l.a.prefix + '_c_') &&
                          0 == n) ||
                          (t = !0);
                      }
                    });
              }
              return !!t;
            },
          },
          {
            key: 'isBindEvents',
            value: function () {
              return !this.isBoundEvent;
            },
          },
          {
            key: 'bindEvents',
            value: function () {
              this.$element &&
                this.$element.on('click', this.onClick.bind(this));
            },
          },
          {
            key: 'onClick',
            value: function (t) {
              if ((t && t.preventDefault(), this.requestInstantly))
                switch (this.clearType) {
                  case c.ClearType.CLEAR_SINGLE_VALUE:
                    this.onClearSingleValue();
                    break;
                  case c.ClearType.CLEAR_OPTION_VALUES:
                    this.onClearOptionValues();
                    break;
                  case c.ClearType.CLEAR_ALL:
                    this.onClearAll();
                }
              else
                switch (this.clearType) {
                  case c.ClearType.CLEAR_OPTION_VALUES:
                    this.onDeselectOptionValues();
                }
            },
          },
          {
            key: 'onClearSingleValue',
            value: function () {
              var t = this.parent,
                e = t.filterOptionId,
                n = t.filterItemId,
                r = l.a.queryParams[e];
              if (null != r) {
                Array.isArray(r) || (r = [r]);
                var i = r.indexOf(n),
                  o = [];
                if (
                  (i > -1 &&
                    (o = r.filter(function (t, e) {
                      return e != i;
                    })),
                  0 == o.length
                    ? (K.default.setParam(e, null),
                      K.default.setParam(e + '_and_condition', null),
                      K.default.setParam(e + '_show_exact_rating', null),
                      K.default.setParam(e + '_exclude_from_value', null),
                      K.default.setParam(
                        e
                          .replace(l.a.prefix + '_l_', l.a.prefix + '_li_')
                          .replace(l.a.prefix + '_vl_', l.a.prefix + '_vli_') +
                          '_ibsl',
                        null
                      ))
                    : K.default.setParam(e, o),
                  !u.a.isCollectionPage() && e.startsWith(l.a.prefix + '_ct_'))
                ) {
                  var a = e.replace(l.a.prefix + '_ct_', l.a.prefix + '_c_');
                  K.default.setParam(a, null);
                }
                K.default.setParam('page', 1);
                var s = { filterOptionId: e, filterOptionValue: n };
                K.default.applyFilter('clear', s);
              }
            },
          },
          {
            key: 'onClearOptionValues',
            value: function () {
              var t = this.parent;
              t.filterTreeType == Mr.FilterTreeType.HORIZONTAL &&
                !o.a.getSettingValue('general.keepTabOpenState') &&
                t.collapse &&
                this.parent.collapse.onToggleHorizontal(),
                (l.a.internalClick = !0);
              var e = t.filterOptionId;
              t.displayType == pr.a.DisplayType.MULTI_LEVEL_COLLECTIONS &&
                u.a.isCollectionPage() &&
                (e = e.replace(l.a.prefix + '_c_', l.a.prefix + '_ct_'));
              var n = { filterOptionId: e };
              K.default.setParam('page', 1),
                K.default.setParam(e, null),
                K.default.setParam(e + '_and_condition', null),
                K.default.setParam(e + '_show_exact_rating', null),
                K.default.setParam(e + '_exclude_from_value', null),
                K.default.setParam(
                  e
                    .replace(l.a.prefix + '_l_', l.a.prefix + '_li_')
                    .replace(l.a.prefix + '_vl_', l.a.prefix + '_vli_') +
                    '_ibsl',
                  null
                ),
                K.default.applyFilter('clear', n);
            },
          },
          {
            key: 'onClearAll',
            value: function () {
              var t = [];
              Object.keys(l.a.queryParams).forEach(function (e) {
                e.startsWith(l.a.prefix) && t.push(e);
              }),
                t.forEach(function (t) {
                  K.default.setParam(t, null);
                }),
                K.default.setParam('page', 1),
                K.default.applyFilter('clearAll', {});
            },
          },
          {
            key: 'onDeselectOptionValues',
            value: function () {
              this.parent.filterItems &&
                this.parent.filterItems.forEach(function (t) {
                  t.$element.removeClass('selected'), (t.isSelected = !1);
                });
            },
          },
        ]) && Nr(e.prototype, n),
        r && Nr(e, r),
        c
      );
    })(d.a);
    function Gr(t) {
      return (Gr =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function zr(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function Kr(t, e) {
      return (Kr =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function Yr(t, e) {
      return !e || ('object' !== Gr(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function Qr(t) {
      return (Qr = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var Jr = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && Kr(t, e);
      })(c, t);
      var e,
        n,
        r,
        s = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = Qr(t);
            if (e()) {
              var i = Qr(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return Yr(this, n);
          };
        })(c);
      function c(t, e) {
        var n;
        return (
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, c),
          ((n = s.call(this)).filterTreeType =
            t || Mr.FilterTreeType.HORIZONTAL),
          (n.applyType = e || c.ApplyType.APPLY_OPTION_VALUES),
          n
        );
      }
      return (
        (e = c),
        (r = [
          {
            key: 'ApplyType',
            get: function () {
              return {
                APPLY_OPTION_VALUES: 'apply-option-values',
                APPLY_ALL: 'apply-all',
              };
            },
          },
        ]),
        (n = [
          {
            key: 'init',
            value: function () {
              this.label =
                this.filterTreeType == Mr.FilterTreeType.HORIZONTAL &&
                o.a.getSettingValue('general.requestInstantly')
                  ? a.a.close
                  : a.a.apply;
            },
          },
          {
            key: 'getTemplate',
            value: function () {
              return this.applyType == c.ApplyType.APPLY_ALL
                ? '\n\t\t\t\t<button class="{{class.button}} {{class.applyAllButton}}">{{label.applyAll}}</button>\n\t\t\t'.trim()
                : '\n\t\t\t\t<button class="{{class.button}} {{class.applyButton}}">{{label.apply}}</button>\n\t\t\t'.trim();
            },
          },
          {
            key: 'compileTemplate',
            value: function () {
              return this.getTemplate()
                .replace(/{{label.apply}}/g, u.a.stripHtml(this.label))
                .replace(/{{label.applyAll}}/g, a.a.applyAll)
                .replace(/{{class.button}}/g, N.a.button)
                .replace(/{{class.applyButton}}/g, N.a.applyButton)
                .replace(/{{class.applyAllButton}}/g, N.a.applyAllButton);
            },
          },
          {
            key: 'isRender',
            value: function () {
              return !(this.parent.filterType == pr.a.FilterType.COLLECTION);
            },
          },
          {
            key: 'render',
            value: function () {
              this.$element || (this.$element = i()(this.compileTemplate()));
            },
          },
          {
            key: 'isBindEvents',
            value: function () {
              return !this.isBoundEvent;
            },
          },
          {
            key: 'bindEvents',
            value: function () {
              this.$element &&
                this.$element.on('click', this.onClick.bind(this));
            },
          },
          {
            key: 'onClick',
            value: function (t) {
              if (
                (t && t.preventDefault(),
                this.parent.desktopButton &&
                  this.parent.desktopButton.$element[0].click(),
                this.applyType == c.ApplyType.APPLY_ALL)
              )
                this.onApplyAll(),
                  window.scrollTo({ top: 0, behavior: 'smooth' });
              else {
                if (this.filterTreeType == Mr.FilterTreeType.HORIZONTAL) {
                  if (
                    !o.a.getSettingValue('general.keepTabOpenState') &&
                    this.parent.collapse
                  )
                    return void this.parent.collapse.onToggleHorizontal();
                  if (o.a.getSettingValue('general.requestInstantly')) return;
                }
                this.onApplyOptionValues();
              }
            },
          },
          {
            key: 'onApplyOptionValues',
            value: function () {
              var t = [],
                e = this.parent.filterOptionId,
                n = this.parent.filterItems;
              this.parent.displayType == pr.a.DisplayType.MULTI_LEVEL_TAG &&
                (n = this.parent.allNestedFilterItems),
                n.forEach(function (e) {
                  e.isSelected && t.push(e.value);
                }),
                K.default.setParam(e, t),
                K.default.setParam(
                  e + '_and_condition',
                  !!(this.parent.useAndCondition && t.length > 0) || null
                ),
                K.default.setParam(
                  e + '_show_exact_rating',
                  !!(this.parent.showExactRating && t.length > 0) || null
                ),
                K.default.setParam(
                  e + '_exclude_from_value',
                  !!(this.parent.excludePriceFromValue && t.length > 0) || null
                ),
                K.default.setParam(
                  e
                    .replace(l.a.prefix + '_l_', l.a.prefix + '_li_')
                    .replace(l.a.prefix + '_vl_', l.a.prefix + '_vli_') +
                    '_ibsl',
                  !!(
                    this.parent.inventoryBaseSelectedLocations && t.length > 0
                  ) || null
                ),
                K.default.setParam('page', 1);
              var r = { filterOptionId: e, filterOptionValue: t };
              K.default.applyFilter('filter', r);
            },
          },
          {
            key: 'onApplyAll',
            value: function () {
              (this.filterTreeType == Mr.FilterTreeType.HORIZONTAL &&
                (this.parent.filterOptions &&
                  this.parent.filterOptions.forEach(function (t) {
                    t.collapse &&
                      !t.collapse.isCollapsed &&
                      t.collapse.onToggleHorizontal();
                  }),
                o.a.getSettingValue('general.requestInstantly'))) ||
                (this.parent.filterOptions &&
                  this.parent.filterOptions.forEach(function (t) {
                    var e = [],
                      n = t.filterOptionId;
                    'pf_c_collection' != n &&
                      ((t.displayType == pr.a.DisplayType.MULTI_LEVEL_TAG
                        ? t.allNestedFilterItems
                        : t.filterItems
                      ).forEach(function (t) {
                        t.isSelected && e.push(t.value);
                      }),
                      K.default.setParam(n, e),
                      K.default.setParam(
                        n + '_and_condition',
                        !!(t.useAndCondition && e.length > 0) || null
                      ),
                      K.default.setParam(
                        n + '_show_exact_rating',
                        !!(t.showExactRating && e.length > 0) || null
                      ),
                      K.default.setParam(
                        n + '_exclude_from_value',
                        !!(t.excludePriceFromValue && e.length > 0) || null
                      ),
                      K.default.setParam(
                        n
                          .replace(l.a.prefix + '_l_', l.a.prefix + '_li_')
                          .replace(l.a.prefix + '_vl_', l.a.prefix + '_vli_') +
                          '_ibsl',
                        !!(t.inventoryBaseSelectedLocations && e.length > 0) ||
                          null
                      ));
                  }),
                K.default.setParam('page', 1),
                K.default.applyFilter('filter'),
                'style-expand' ==
                  o.a.getSettingValue('general.filterTreeHorizontalStyle') &&
                  i()('body').removeClass(N.a.filterTreeOpenBody));
            },
          },
        ]) && zr(e.prototype, n),
        r && zr(e, r),
        c
      );
    })(d.a);
    n(170);
    function Xr(t) {
      return (Xr =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function Zr(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function ti(t, e) {
      return (ti =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function ei(t, e) {
      return !e || ('object' !== Xr(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function ni(t) {
      return (ni = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var ri = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && ti(t, e);
      })(p, t);
      var e,
        n,
        r,
        s = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = ni(t);
            if (e()) {
              var i = ni(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return ei(this, n);
          };
        })(p);
      function p(t) {
        var e;
        return (
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, p),
          (e = s.call(this)),
          t ||
            console.warn(
              'Pass filterTreeType into FilterOptionItem constructor.'
            ),
          (e.requestInstantly = !0),
          (e.filterTreeType = t),
          (e.$element = null),
          (e.settings = {
            enable3rdCurrencySupport: o.a.getSettingValue(
              'general.enable3rdCurrencySupport'
            ),
          }),
          e
        );
      }
      return (
        (e = p),
        (n = [
          {
            key: 'init',
            value: function () {
              this.requestInstantly =
                this.filterTreeType == Mr.FilterTreeType.VERTICAL ||
                o.a.getSettingValue('general.requestInstantly');
            },
          },
          {
            key: 'getTemplate',
            value: function () {
              console.warn('Override this method');
            },
          },
          {
            key: 'compileTemplate',
            value: function () {
              console.warn('Override this method');
            },
          },
          {
            key: 'isRender',
            value: function () {
              var t = this.filterOption ? this.filterOption : this.parent,
                e =
                  this.hasOwnProperty('docCount') &&
                  (this.docCount > 0 || null === this.docCount),
                n =
                  t.filterType == pr.a.FilterType.REVIEW_RATINGS &&
                  t.showExactRating,
                r =
                  t.filterType == pr.a.FilterType.COLLECTION &&
                  (t.keepValuesStatic || 'all' == this.handle),
                i =
                  t.displayType == pr.a.DisplayType.MULTI_LEVEL_COLLECTIONS &&
                  1 != this.level,
                a = o.a.getSettingValue('general.showOutOfStockOption');
              return n || r || i || e || a;
            },
          },
          {
            key: 'render',
            value: function () {
              this.$element || (this.$element = i()(this.compileTemplate())),
                (this.isSelected = this.isAppliedFilter()),
                this.isSelected
                  ? (this.$element.addClass('selected'),
                    this.$element.find('button').attr('aria-checked', !0),
                    this.$element.find('a').attr('aria-current', !0),
                    this.$element
                      .find('.boost-pfs-check-box')
                      .attr('aria-checked', !0))
                  : (this.$element.removeClass('selected'),
                    this.$element.find('button').removeAttr('aria-checked'),
                    this.$element.find('a').removeAttr('aria-current'),
                    this.$element
                      .find('.boost-pfs-check-box')
                      .removeAttr('aria-checked'));
              var t = this.countLabel
                  ? a.a.ada.productCount.replace(/{{count}}/g, this.countLabel)
                  : '',
                e = this.$element.find('.boost-pfs-filter-option-amount');
              e && e.length > 0 && e.attr('aria-label', u.a.stripHtml(t));
            },
          },
          {
            key: 'buildCount',
            value: function () {
              var t = '';
              if (
                o.a.getSettingValue('general.showFilterOptionCount') &&
                'box' != this.parent.displayType
              ) {
                var e = !1;
                (this.docCount > 0 ||
                  o.a.getSettingValue('general.showOutOfStockOption') ||
                  (this.parent.filterType == pr.a.FilterType.REVIEW_RATINGS &&
                    this.parent.showExactRating)) &&
                  (e = !0);
                var n = 'all' == this.handle && 0 == this.docCount;
                !e ||
                  this.parent.keepValuesStatic ||
                  n ||
                  (t = '(' + this.docCount + ')');
              }
              return u.a.stripHtml(t);
            },
          },
          {
            key: 'buildLabel',
            value: function () {
              var t = this.filterOption ? this.filterOption : this.parent,
                e = u.a.unescape(this.label),
                n = t.prefix;
              return 'string' != typeof e
                ? ''
                : ('string' == typeof n &&
                    ((n = n.replace(/\\/g, '')), (e = e.replace(n, '').trim())),
                  e.indexOf('boost-pfs-filter-icon-star') > -1
                    ? e
                    : ((t.displayAllValuesInUppercaseForm =
                        t.displayAllValuesInUppercaseForm || !1),
                      t.displayAllValuesInUppercaseForm
                        ? e.toUpperCase()
                        : o.a.getSettingValue(
                            'general.forceCapitalizeFilterOptionValues'
                          )
                        ? u.a.capitalize(e, !0)
                        : o.a.getSettingValue(
                            'general.capitalizeFirstLetterFilterOptionValues'
                          )
                        ? u.a.capitalize(e, !0, !0)
                        : o.a.getSettingValue(
                            'general.capitalizeFilterOptionValues'
                          )
                        ? u.a.capitalize(e)
                        : u.a.stripHtml(e)));
            },
          },
          {
            key: 'buildPercentSaleLabel',
            value: function () {
              var t = '';
              return (
                (t = this.from
                  ? this.to
                    ? this.from + '% - ' + this.to + '%'
                    : a.a.above + ' ' + this.from + '%'
                  : a.a.under + ' ' + this.to + '%'),
                u.a.stripHtml(t)
              );
            },
          },
          {
            key: 'buildPriceListLabel',
            value: function () {
              var t = '';
              return (
                (t = this.from
                  ? this.to
                    ? u.a.formatMoney(this.from, l.a.moneyFormat, !0) +
                      ' - ' +
                      u.a.formatMoney(this.to, l.a.moneyFormat, !0)
                    : a.a.above +
                      ' ' +
                      u.a.formatMoney(this.from, l.a.moneyFormat, !0)
                  : a.a.under +
                    ' ' +
                    u.a.formatMoney(this.to, l.a.moneyFormat, !0)),
                u.a.stripHtml(t)
              );
            },
          },
          {
            key: 'isBindEvents',
            value: function () {
              return !this.isBoundEvent;
            },
          },
          {
            key: 'bindEvents',
            value: function () {
              this.$element &&
                this.$element.on('click', this.onClick.bind(this));
            },
          },
          {
            key: 'onClick',
            value: function (t) {
              t && t.preventDefault(),
                this.isDisabled() ||
                  (this.requestInstantly ||
                  this.parent.filterType == pr.a.FilterType.COLLECTION
                    ? this.onApplyFilter()
                    : this.onSelectFilter());
            },
          },
          {
            key: 'isDisabled',
            value: function () {
              return this.parent.filterType == pr.a.FilterType.COLLECTION
                ? !this.parent.keepValuesStatic &&
                    'all' != this.handle &&
                    0 == this.docCount
                : 0 == this.docCount;
            },
          },
          {
            key: 'isAppliedFilter',
            value: function () {
              var t = this.parent.filterOptionId;
              if (this.parent.filterType == pr.a.FilterType.COLLECTION) {
                if (l.a.queryParams.collection_scope == this.collectionId)
                  return !0;
              } else {
                var e = l.a.queryParams[t];
                if (Array.isArray(e) && e.includes(this.value)) return !0;
              }
              return !1;
            },
          },
          {
            key: 'onSelectFilter',
            value: function () {
              var t = this;
              (this.isSelected = !this.isSelected),
                this.$element.toggleClass('selected'),
                this.isSelected
                  ? this.$element.find('button').attr('aria-checked', !0)
                  : this.$element.find('button').removeAttr('aria-checked'),
                this.isSelected
                  ? this.$element
                      .find('.boost-pfs-check-box')
                      .attr('aria-checked', !0)
                  : this.$element
                      .find('.boost-pfs-check-box')
                      .removeAttr('aria-checked'),
                this.isSelected &&
                  this.parent.selectType == pr.a.SelectType.SINGLE &&
                  this.parent.filterItems.forEach(function (e) {
                    e != t &&
                      (e.$element &&
                        (e.$element.removeClass('selected'),
                        t.$element.find('button').removeAttr('aria-checked'),
                        t.$element
                          .find('.boost-pfs-check-box')
                          .removeAttr('aria-checked')),
                      (e.isSelected = !1));
                  });
            },
          },
          {
            key: 'onApplyFilter',
            value: function () {
              var t = this,
                e = this.parent.filterType,
                n = this.parent.displayType,
                r = this.parent.selectType,
                i = this.parent.filterOptionId,
                o =
                  'all' == this.handle &&
                  0 == this.docCount &&
                  e == pr.a.FilterType.COLLECTION;
              if (
                this.docCount > 0 ||
                this.parent.keepValuesStatic ||
                n == pr.a.DisplayType.RANGE ||
                o
              ) {
                l.a.internalClick = !0;
                var a = '';
                if (e == pr.a.FilterType.COLLECTION) {
                  (this.isSelected = !0),
                    (l.a.collectionId = this.collectionId),
                    K.default.setParam('collection_scope', this.collectionId),
                    u.a.isCollectionPage()
                      ? (c.a.setAddressBarPathAfterFilter(
                          '/collections/' + this.handle
                        ),
                        c.a.setWindowTitleAfterFilter(
                          u.a.stripHtml(this.label) + ' - ' + l.a.shopName
                        ),
                        K.default.setParam('sort', this.sortOrder),
                        (l.a.defaultSorting = this.sortOrder))
                      : K.default.setParam(i, this.collectionId);
                  var s = [];
                  Object.keys(l.a.queryParams).forEach(function (t) {
                    t.startsWith(l.a.prefix) &&
                      !t.startsWith(l.a.prefix + '_c') &&
                      s.push(t);
                  }),
                    s.forEach(function (t) {
                      K.default.setParam(t, null);
                    }),
                    (a = 'collection');
                } else {
                  this.isSelected = !this.isSelected;
                  var p = null;
                  r == pr.a.SelectType.SINGLE
                    ? (p = this.isSelected ? [this.value] : [])
                    : ((p = l.a.queryParams[i]),
                      Array.isArray(p) || (p = []),
                      this.isSelected
                        ? p.includes(this.value) || p.push(this.value)
                        : (p = p.filter(function (e) {
                            return e !== t.value;
                          }))),
                    K.default.setParam(i, p),
                    K.default.setParam(
                      i + '_and_condition',
                      !!(this.parent.useAndCondition && p.length > 0) || null
                    ),
                    K.default.setParam(
                      i + '_show_exact_rating',
                      !!(this.parent.showExactRating && p.length > 0) || null
                    ),
                    K.default.setParam(
                      i + '_exclude_from_value',
                      !!(this.parent.excludePriceFromValue && p.length > 0) ||
                        null
                    ),
                    K.default.setParam(
                      i
                        .replace(l.a.prefix + '_l_', l.a.prefix + '_li_')
                        .replace(l.a.prefix + '_vl_', l.a.prefix + '_vli_') +
                        '_ibsl',
                      !!(
                        this.parent.inventoryBaseSelectedLocations &&
                        p.length > 0
                      ) || null
                    ),
                    (a = 'filter');
                }
                K.default.setParam('page', 1);
                var f = { filterOptionId: i, filterValue: this.value };
                K.default.applyFilter(a, f);
              }
            },
          },
          {
            key: 'setData',
            value: function (t) {
              switch (
                ((this.value = t.key),
                (this.label = u.a.stripHtml(t.key)),
                (this.docCount = t.doc_count ? t.doc_count : 0),
                (this.isRenderOnScroll = t.isRenderOnScroll),
                this.parent.filterType)
              ) {
                case pr.a.FilterType.COLLECTION:
                  (this.collectionId = t.key),
                    (this.label = u.a.stripHtml(
                      t.displayName ? t.displayName : t.label
                    )),
                    (this.handle = t.handle),
                    (this.href = u.a.isCollectionPage()
                      ? '/collections/' + this.handle
                      : '#');
                  var e = u.a.getDefaultSorting(this.collectionId);
                  this.sortOrder =
                    '' != e
                      ? e
                      : t.sort_order
                      ? t.sort_order
                      : l.a.defaultSorting;
                  break;
                case pr.a.FilterType.REVIEW_RATINGS:
                  (this.from = parseFloat(t.from).toFixed()),
                    (this.value = this.from);
                  break;
                case pr.a.FilterType.STOCK:
                  (this.value = 'in-stock' == t.key ? 'true' : 'false'),
                    (this.label = u.a.stripHtml(t.label));
                  break;
                case pr.a.FilterType.PERCENT_SALE:
                  (this.from = t.from),
                    (this.to = t.to),
                    (this.label = this.buildPercentSaleLabel()),
                    (this.value =
                      (this.from ? this.from : '') +
                      ':' +
                      (this.to ? this.to : ''));
                  break;
                case pr.a.FilterType.PRICE:
                case pr.a.FilterType.VARIANTS_PRICE:
                  (this.from = t.from),
                    (this.to = t.to),
                    (this.label = this.buildPriceListLabel()),
                    (this.value =
                      (this.from ? this.from : '') +
                      ':' +
                      (this.to ? this.to : ''));
              }
              (this.label = this.buildLabel()),
                (this.countLabel = this.buildCount()),
                (this.isSelected = this.isAppliedFilter());
            },
          },
        ]) && Zr(e.prototype, n),
        r && Zr(e, r),
        p
      );
    })(d.a);
    function ii(t) {
      return (ii =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function oi(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function ai(t, e) {
      return (ai =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function li(t, e) {
      return !e || ('object' !== ii(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function si(t) {
      return (si = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var ci = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && ai(t, e);
      })(o, t);
      var e,
        n,
        r,
        i = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = si(t);
            if (e()) {
              var i = si(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return li(this, n);
          };
        })(o);
      function o(t) {
        var e;
        return (
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, o),
          ((e = i.call(this, t)).$element = null),
          e
        );
      }
      return (
        (e = o),
        (n = [
          {
            key: 'getTemplate',
            value: function () {
              return this.parent.filterType == pr.a.FilterType.COLLECTION
                ? '\n\t\t\t\t<li class="{{class.filterOptionItem}} {{class.filterOptionLabel}} {{disabled}}">\n\t\t\t\t\t<a class="{{class.button}}" href="{{href}}">\n            <span class="boost-pfs-check-box" role="checkbox" aria-checked="false" tabindex="0" aria-labelledby="{{label}}"></span>\n\t\t\t\t\t\t<span class="boost-pfs-filter-option-value">{{label}}</span>\n\t\t\t\t\t\t<span class="boost-pfs-filter-option-amount">{{countLabel}}</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t'.trim()
                : '\n\t\t\t\t<li class="{{class.filterOptionItem}} {{class.filterOptionLabel}} {{disabled}}">\n\t\t\t\t\t<button role="checkbox" class="{{class.button}}">\n            <span class="boost-pfs-check-box" role="checkbox" aria-checked="false" tabindex="0" aria-labelledby="{{label}}"></span>\n\t\t\t\t\t\t<span class="boost-pfs-filter-option-value">{{label}}</span>\n\t\t\t\t\t\t<span class="boost-pfs-filter-option-amount">{{countLabel}}</span>\n\t\t\t\t\t</button>\n\t\t\t\t</li>\n\t\t\t'.trim();
            },
          },
          {
            key: 'compileTemplate',
            value: function () {
              return this.getTemplate()
                .replace(/{{class.filterOptionItem}}/g, N.a.filterOptionItem)
                .replace(/{{class.filterOptionLabel}}/g, N.a.filterOptionLabel)
                .replace(/{{class.button}}/g, N.a.button)
                .replace(/{{disabled}}/g, this.isDisabled() ? 'disabled' : '')
                .replace(/{{label}}/g, u.a.stripHtml(this.label))
                .replace(/{{href}}/g, this.href)
                .replace(/{{countLabel}}/g, u.a.stripHtml(this.countLabel));
            },
          },
        ]) && oi(e.prototype, n),
        r && oi(e, r),
        o
      );
    })(ri);
    function ui(t) {
      return (ui =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function pi(t, e) {
      if (!(t instanceof e))
        throw new TypeError('Cannot call a class as a function');
    }
    function fi(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function hi(t, e, n) {
      return (hi =
        'undefined' != typeof Reflect && Reflect.get
          ? Reflect.get
          : function (t, e, n) {
              var r = (function (t, e) {
                for (
                  ;
                  !Object.prototype.hasOwnProperty.call(t, e) &&
                  null !== (t = gi(t));

                );
                return t;
              })(t, e);
              if (r) {
                var i = Object.getOwnPropertyDescriptor(r, e);
                return i.get ? i.get.call(n) : i.value;
              }
            })(t, e, n || t);
    }
    function yi(t, e) {
      return (yi =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function di(t, e) {
      return !e || ('object' !== ui(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function gi(t) {
      return (gi = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var mi = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && yi(t, e);
      })(o, t);
      var e,
        n,
        r,
        i = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = gi(t);
            if (e()) {
              var i = gi(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return di(this, n);
          };
        })(o);
      function o() {
        return pi(this, o), i.apply(this, arguments);
      }
      return (
        (e = o),
        (n = [
          {
            key: 'getTemplate',
            value: function () {
              return '\n\t\t\t<li class="{{class.filterOptionItem}} {{class.filterOptionLabel}} {{disabled}}">\n\t\t\t\t<button role="checkbox" class="{{class.button}}">\n        <span class="boost-pfs-check-box" role="checkbox" aria-checked="false" tabindex="0" aria-labelledby="{{label}}"></span>\n\t\t\t\t\t<span class="boost-pfs-filter-option-value">{{label}}</span>\n\t\t\t\t\t<span class="boost-pfs-filter-option-amount">{{countLabel}}</span>\n\t\t\t\t</button>\n\t\t\t</li>\n\t\t'.trim();
            },
          },
          {
            key: 'compileTemplate',
            value: function () {
              return this.getTemplate()
                .replace(/{{class.filterOptionItem}}/g, N.a.filterOptionItem)
                .replace(/{{class.filterOptionLabel}}/g, N.a.filterOptionLabel)
                .replace(/{{disabled}}/g, this.isDisabled() ? 'disabled' : '')
                .replace(/{{class.button}}/g, N.a.button)
                .replace(/{{label}}/g, u.a.stripHtml(this.label))
                .replace(/{{countLabel}}/g, u.a.stripHtml(this.countLabel));
            },
          },
          {
            key: 'bindEvents',
            value: function () {
              hi(gi(o.prototype), 'bindEvents', this).call(this),
                this.setBoxItemSize();
            },
          },
          {
            key: 'setBoxItemSize',
            value: function () {
              this.filterTreeType == Mr.FilterTreeType.VERTICAL &&
                this.$element &&
                this.$element.css('width', this.parent.calculateBoxItemSize());
            },
          },
        ]) && fi(e.prototype, n),
        r && fi(e, r),
        o
      );
    })(ri);
    function bi(t) {
      return (bi =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function vi(t, e) {
      if (!(t instanceof e))
        throw new TypeError('Cannot call a class as a function');
    }
    function Si(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function Ti(t, e, n) {
      return (Ti =
        'undefined' != typeof Reflect && Reflect.get
          ? Reflect.get
          : function (t, e, n) {
              var r = (function (t, e) {
                for (
                  ;
                  !Object.prototype.hasOwnProperty.call(t, e) &&
                  null !== (t = wi(t));

                );
                return t;
              })(t, e);
              if (r) {
                var i = Object.getOwnPropertyDescriptor(r, e);
                return i.get ? i.get.call(n) : i.value;
              }
            })(t, e, n || t);
    }
    function Oi(t, e) {
      return (Oi =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function Pi(t, e) {
      return !e || ('object' !== bi(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function wi(t) {
      return (wi = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var _i = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && Oi(t, e);
      })(a, t);
      var e,
        n,
        r,
        i = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = wi(t);
            if (e()) {
              var i = wi(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return Pi(this, n);
          };
        })(a);
      function a() {
        return vi(this, a), i.apply(this, arguments);
      }
      return (
        (e = a),
        (r = [
          {
            key: 'SwatchType',
            get: function () {
              return {
                ONE_COLOR: 'one_color',
                TWO_COLORS: 'two_colors',
                IMAGE: 'image',
              };
            },
          },
        ]),
        (n = [
          {
            key: 'getTemplate',
            value: function () {
              return '\n\t\t\t<li class="{{class.filterOptionItem}} {{disabled}} {{swatchBorder}}">\n\t\t\t\t<span class="boost-pfs-filter-option-swatch-image" \n\t\t\t\t\tstyle="background-color: {{backgroundColor}}; \n\t\t\t\t\tbackground-image: {{backgroundImage}};" title="{{label}}">\n\t\t\t\t</span>\n\t\t\t\t<button role="checkbox" class="{{class.button}}">\n          <span class="boost-pfs-check-box" role="checkbox" aria-checked="false" tabindex="0" aria-labelledby="{{label}}"></span>\n\t\t\t\t\t<span class="boost-pfs-filter-option-value">{{label}}</span>\n\t\t\t\t\t<span class="boost-pfs-filter-option-amount">{{countLabel}}</span>\n\t\t\t\t</button>\n\t\t\t</li> \n\t\t'.trim();
            },
          },
          {
            key: 'compileTemplate',
            value: function () {
              return this.getTemplate()
                .replace(/{{class.filterOptionItem}}/g, N.a.filterOptionItem)
                .replace(/{{class.filterOptionLabel}}/g, N.a.filterOptionLabel)
                .replace(/{{disabled}}/g, this.isDisabled() ? 'disabled' : '')
                .replace(/{{class.button}}/g, N.a.button)
                .replace(/{{label}}/g, this.label)
                .replace(/{{countLabel}}/g, this.countLabel)
                .replace(/{{backgroundColor}}/g, this.backgroundColor)
                .replace(/{{backgroundImage}}/g, this.backgroundImage)
                .replace(/{{swatchBorder}}/g, this.swatchBorder);
            },
          },
          {
            key: 'render',
            value: function () {
              this.buildSwatchSettings() ||
                ((this.swatchFileName = this.buildSwatchFileName()),
                (this.swatchFileUrl = u.a.getFilePath(
                  this.swatchFileName,
                  l.a.swatchExtension,
                  o.a.getSettingValue('general.swatchImageVersion')
                )),
                (this.backgroundImage = 'url(' + this.swatchFileUrl + ');'),
                (this.backgroundColor = this.buildBackgroundColor())),
                (this.swatchBorder = ['white', '#FFFFFF'].includes(
                  this.backgroundColor
                )
                  ? 'has-border'
                  : ''),
                Ti(wi(a.prototype), 'render', this).call(this);
            },
          },
          {
            key: 'buildSwatchSettings',
            value: function () {
              var t = this,
                e = o.a.getSettingValue('swatch_settings'),
                n = !1;
              if (
                ((this.swatchSettingKey = null), (this.swatchSetting = null), e)
              ) {
                var r = Object.keys(e);
                Array.isArray(r) &&
                  r.length > 0 &&
                  ((this.swatchSettingKey = r.find(function (e) {
                    return (
                      e.replace('pfs-swatch-', '') == t.value ||
                      e.replace('pfs-swatch-', '').toLowerCase() ==
                        t.value.toLowerCase()
                    );
                  })),
                  (this.swatchSetting = e[this.swatchSettingKey]));
              }
              if (e && this.swatchSetting)
                switch (this.swatchSetting.type) {
                  case a.SwatchType.ONE_COLOR:
                    this.swatchSetting.colorCodes.length > 0 &&
                      this.swatchSetting.colorCodes[0] &&
                      ((this.backgroundImage = 'none'),
                      (this.backgroundColor = this.swatchSetting.colorCodes[0]),
                      (n = !0));
                    break;
                  case a.SwatchType.TWO_COLORS:
                    this.swatchSetting.colorCodes.length > 1 &&
                      this.swatchSetting.colorCodes[0] &&
                      this.swatchSetting.colorCodes[1] &&
                      ((this.backgroundImage =
                        'linear-gradient(to top left, ' +
                        this.swatchSetting.colorCodes[1] +
                        ' 50%, ' +
                        this.swatchSetting.colorCodes[0] +
                        ' 50%);'),
                      (this.backgroundColor = 'transparent'),
                      (n = !0));
                    break;
                  case a.SwatchType.IMAGE:
                    this.swatchSetting.imageUrl &&
                      ((this.swatchFileUrl = this.swatchSetting.imageUrl),
                      (this.backgroundImage =
                        'url(' + this.swatchFileUrl + ');'),
                      (this.backgroundColor = this.buildBackgroundColor()),
                      (n = !0));
                }
              return n;
            },
          },
          {
            key: 'buildSwatchFileName',
            value: function () {
              this.parent.filterOptionId;
              var t = this.parent.prefix,
                e = this.value;
              this.parent.filterType == pr.a.FilterType.COLLECTION &&
                (e = this.label);
              var n = this.parent.label.trim().toLowerCase().replace(/ /g, '_');
              if (
                o.a.getSettingValue('general.removePrefixFromSwatchFile') &&
                t
              ) {
                var r = t.replace(/\\/g, '');
                e = e.replace(r, '');
              }
              return n + '-' + u.a.slugify(e).replace(/\#/g, '');
            },
          },
          {
            key: 'buildBackgroundColor',
            value: function () {
              var t = u.a.slugify(this.label).split('-');
              return t[t.length - 1];
            },
          },
        ]) && Si(e.prototype, n),
        r && Si(e, r),
        a
      );
    })(ri);
    function Ci(t) {
      return (Ci =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function ki(t, e) {
      if (!(t instanceof e))
        throw new TypeError('Cannot call a class as a function');
    }
    function Ei(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function Ri(t, e, n) {
      return (Ri =
        'undefined' != typeof Reflect && Reflect.get
          ? Reflect.get
          : function (t, e, n) {
              var r = (function (t, e) {
                for (
                  ;
                  !Object.prototype.hasOwnProperty.call(t, e) &&
                  null !== (t = Ai(t));

                );
                return t;
              })(t, e);
              if (r) {
                var i = Object.getOwnPropertyDescriptor(r, e);
                return i.get ? i.get.call(n) : i.value;
              }
            })(t, e, n || t);
    }
    function Ii(t, e) {
      return (Ii =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function Li(t, e) {
      return !e || ('object' !== Ci(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function Ai(t) {
      return (Ai = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var xi = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && Ii(t, e);
      })(o, t);
      var e,
        n,
        r,
        i = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = Ai(t);
            if (e()) {
              var i = Ai(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return Li(this, n);
          };
        })(o);
      function o() {
        return ki(this, o), i.apply(this, arguments);
      }
      return (
        (e = o),
        (n = [
          {
            key: 'getTemplate',
            value: function () {
              return '\n\t\t\t<li class="{{class.filterOptionItem}} {{class.filterOptionLabel}} {{disabled}}">\n\t\t\t\t<button role="checkbox" class="{{class.button}}" aria-label="{{adaLabel}}">\n          <span class="boost-pfs-check-box" role="checkbox" aria-checked="false" tabindex="0" aria-labelledby="{{label}}"></span> \n\t\t\t\t\t<span role="presentation" class="boost-pfs-filter-option-value">\n\t\t\t\t\t\t<i style="color: {{starColor}}" class="{{class.filterOptionItemStar}} {{active}}"></i>\x3c!--\n\t\t\t\t\t\t--\x3e<i style="color: {{starColor}}" class="{{class.filterOptionItemStar}} {{active}}"></i>\x3c!--\n\t\t\t\t\t\t--\x3e<i style="color: {{starColor}}" class="{{class.filterOptionItemStar}} {{active}}"></i>\x3c!--\n\t\t\t\t\t\t--\x3e<i style="color: {{starColor}}" class="{{class.filterOptionItemStar}} {{active}}"></i>\x3c!--\n\t\t\t\t\t\t--\x3e<i style="color: {{starColor}}" class="{{class.filterOptionItemStar}} {{active}}"></i>\n\t\t\t\t\t\t<span>{{label}}</span>\n\t\t\t\t\t</span>\t\n\t\t\t\t\t<span class="boost-pfs-filter-option-amount">{{countLabel}}</span>\n\t\t\t\t</button>\n\t\t\t</li>\n\t\t'.trim();
            },
          },
          {
            key: 'compileTemplate',
            value: function () {
              for (var t = this.getTemplate(), e = 0; e < this.from; e++)
                t = t.replace(
                  /{{active}}/,
                  '{{class.filterOptionItemStarActive}}'
                );
              return (t = t.replace(/{{active}}/g, ''))
                .replace(/{{class.filterOptionItem}}/g, N.a.filterOptionItem)
                .replace(/{{class.filterOptionLabel}}/g, N.a.filterOptionLabel)
                .replace(
                  /{{class.filterOptionItemStar}}/g,
                  N.a.filterOptionItemStar
                )
                .replace(
                  /{{class.filterOptionItemStarActive}}/g,
                  N.a.filterOptionItemStarActive
                )
                .replace(/{{class.button}}/g, N.a.button)
                .replace(/{{disabled}}/g, this.isDisabled() ? 'disabled' : '')
                .replace(/{{label}}/g, u.a.stripHtml(this.label))
                .replace(/{{countLabel}}/g, u.a.stripHtml(this.countLabel))
                .replace(/{{adaLabel}}/g, u.a.stripHtml(this.adaLabel))
                .replace(/{{starColor}}/g, u.a.stripHtml(this.parent.starColor))
                .replace(/{{class.button}}/g, N.a.button)
                .replace(/\r?\n|\r/g, '');
            },
          },
          {
            key: 'render',
            value: function () {
              (this.label = u.a.stripHtml(
                this.parent.showExactRating ? '' : a.a.ratingUp
              )),
                (this.adaLabel = this.from),
                1 == this.from
                  ? (this.adaLabel += ' ' + a.a.ratingStar)
                  : (this.adaLabel += ' ' + a.a.ratingStars),
                this.parent.showExactRating &&
                  (this.adaLabel += ' ' + a.a.ratingUp);
              var t = this.countLabel
                ? a.a.ada.productCount.replace(/{{count}}/g, this.countLabel)
                : '';
              (this.adaLabel += '. ' + t),
                (this.adaLabel = u.a.stripHtml(this.adaLabel)),
                Ri(Ai(o.prototype), 'render', this).call(this);
            },
          },
        ]) && Ei(e.prototype, n),
        r && Ei(e, r),
        o
      );
    })(ri);
    function Fi(t) {
      return (Fi =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function Bi(t, e) {
      if (!(t instanceof e))
        throw new TypeError('Cannot call a class as a function');
    }
    function Di(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function $i(t, e, n) {
      return ($i =
        'undefined' != typeof Reflect && Reflect.get
          ? Reflect.get
          : function (t, e, n) {
              var r = (function (t, e) {
                for (
                  ;
                  !Object.prototype.hasOwnProperty.call(t, e) &&
                  null !== (t = Vi(t));

                );
                return t;
              })(t, e);
              if (r) {
                var i = Object.getOwnPropertyDescriptor(r, e);
                return i.get ? i.get.call(n) : i.value;
              }
            })(t, e, n || t);
    }
    function ji(t, e) {
      return (ji =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function Mi(t, e) {
      return !e || ('object' !== Fi(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function Vi(t) {
      return (Vi = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var Ni = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && ji(t, e);
      })(a, t);
      var e,
        n,
        r,
        o = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = Vi(t);
            if (e()) {
              var i = Vi(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return Mi(this, n);
          };
        })(a);
      function a() {
        return Bi(this, a), o.apply(this, arguments);
      }
      return (
        (e = a),
        (n = [
          {
            key: 'getTemplate',
            value: function () {
              return '\n\t\t\t<li class="{{class.filterOptionItem}} {{class.filterOptionLabel}}">\n\t\t\t\t<div class="boost-pfs-filter-option-item-parent-category">\n\t\t\t\t\t<span role="button" aria-controls="sub-category-{{value}}" aria-expanded="true" class="sub-icon {{closeClass}}"></span>\n\t\t\t\t\t<span class="{{class.filterOptionItem}} {{class.filterOptionLabel}} boost-pfs-filter-option-main-cat">\n\t\t\t\t\t\t{{label}}\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t\t<ul class="boost-pfs-filter-option-item-sub-category-list">\n\t\t\t\t\t{{subItems}}\n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t'.trim();
            },
          },
          {
            key: 'getSubItemTemplate',
            value: function () {
              return '\n\t\t\t<li class="{{class.filterOptionItem}} {{class.filterOptionLabel}} {{selected}} boost-pfs-filter-option-item-sub-category">\n\t\t\t\t<span>\n\t\t\t\t\t{{subLabel}}\n\t\t\t\t</span>\n\t\t\t</li>\n\t\t'.trim();
            },
          },
          {
            key: 'compileTemplate',
            value: function () {
              var t = this,
                e = '';
              return (
                Array.isArray(this.tags) &&
                  this.tags.forEach(function (n) {
                    var r = t.isSubCategorySelected(n);
                    e += t
                      .getSubItemTemplate()
                      .replace(/{{subLabel}}/g, n)
                      .replace(/{{selected}}/g, r ? 'selected' : '');
                  }),
                this.getTemplate()
                  .replace(/{{subItems}}/g, e)
                  .replace(/{{class.filterOptionItem}}/g, N.a.filterOptionItem)
                  .replace(
                    /{{class.filterOptionLabel}}/g,
                    N.a.filterOptionLabel
                  )
                  .replace(/{{disabled}}/g, this.isDisabled() ? 'disabled' : '')
                  .replace(/{{label}}/g, u.a.stripHtml(this.label))
                  .replace(/{{value}}/g, u.a.stripHtml(this.value))
                  .replace(/{{countLabel}}/g, u.a.stripHtml(this.countLabel))
              );
            },
          },
          {
            key: 'bindEvents',
            value: function () {
              this.$element.on('click', this.redirectToCollection.bind(this)),
                this.$element
                  .find('ul > li')
                  .on('click', this.redirectToSubCategory.bind(this));
            },
          },
          {
            key: 'isSubCategorySelected',
            value: function (t) {
              if (!u.a.isSearchPage()) {
                var e = decodeURIComponent(window.location.pathname).split('/');
                if (e[e.length - 1] == u.a.slugify(t))
                  return (this.isAnyTagSelected = !0), !0;
              }
              return !1;
            },
          },
          {
            key: 'redirectToCollection',
            value: function (t) {
              t.preventDefault(), t.stopPropagation();
              var e = '/collections/' + this.handle;
              u.a.setWindowLocation(e);
            },
          },
          {
            key: 'redirectToSubCategory',
            value: function (t) {
              t.preventDefault(), t.stopPropagation();
              var e = i()(t.currentTarget).find('a').html(),
                n = u.a.slugify(e),
                r = '/collections/' + this.handle + '/' + n;
              u.a.setWindowLocation(r);
            },
          },
          {
            key: 'setData',
            value: function (t) {
              $i(Vi(a.prototype), 'setData', this).call(this, t),
                (this.tags = t.tags);
            },
          },
        ]) && Di(e.prototype, n),
        r && Di(e, r),
        a
      );
    })(ri);
    function Hi(t) {
      return (Hi =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function Ui(t, e) {
      if (!(t instanceof e))
        throw new TypeError('Cannot call a class as a function');
    }
    function Wi(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function qi(t, e, n) {
      return (qi =
        'undefined' != typeof Reflect && Reflect.get
          ? Reflect.get
          : function (t, e, n) {
              var r = (function (t, e) {
                for (
                  ;
                  !Object.prototype.hasOwnProperty.call(t, e) &&
                  null !== (t = Ki(t));

                );
                return t;
              })(t, e);
              if (r) {
                var i = Object.getOwnPropertyDescriptor(r, e);
                return i.get ? i.get.call(n) : i.value;
              }
            })(t, e, n || t);
    }
    function Gi(t, e) {
      return (Gi =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function zi(t, e) {
      return !e || ('object' !== Hi(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function Ki(t) {
      return (Ki = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var Yi = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && Gi(t, e);
      })(o, t);
      var e,
        n,
        r,
        i = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = Ki(t);
            if (e()) {
              var i = Ki(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return zi(this, n);
          };
        })(o);
      function o() {
        return Ui(this, o), i.apply(this, arguments);
      }
      return (
        (e = o),
        (n = [
          {
            key: 'isRender',
            value: function () {
              return !1;
            },
          },
          {
            key: 'setValue',
            value: function (t, e) {
              (this.value = t + ':' + e),
                (this.isSelected = this.min != t || this.max != e);
            },
          },
          {
            key: 'setData',
            value: function (t) {
              qi(Ki(o.prototype), 'setData', this).call(this, t),
                null != t.min &&
                  null != t.max &&
                  ((this.min = t.min),
                  (this.max = t.max),
                  (this.key = this.parent.filterOptionId),
                  (this.value = t.min + ':' + t.max));
            },
          },
        ]) && Wi(e.prototype, n),
        r && Wi(e, r),
        o
      );
    })(ri);
    n(188), n(183), n(81);
    function Qi(t) {
      return (Qi =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function Ji(t, e) {
      return (
        (function (t) {
          if (Array.isArray(t)) return t;
        })(t) ||
        (function (t, e) {
          if (
            !(Symbol.iterator in Object(t)) &&
            '[object Arguments]' !== Object.prototype.toString.call(t)
          )
            return;
          var n = [],
            r = !0,
            i = !1,
            o = void 0;
          try {
            for (
              var a, l = t[Symbol.iterator]();
              !(r = (a = l.next()).done) &&
              (n.push(a.value), !e || n.length !== e);
              r = !0
            );
          } catch (t) {
            (i = !0), (o = t);
          } finally {
            try {
              r || null == l.return || l.return();
            } finally {
              if (i) throw o;
            }
          }
          return n;
        })(t, e) ||
        (function () {
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance'
          );
        })()
      );
    }
    function Xi(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function Zi(t, e) {
      return (Zi =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function to(t, e) {
      return !e || ('object' !== Qi(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function eo(t) {
      return (eo = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var no = (function (t) {
        !(function (t, e) {
          if ('function' != typeof e && null !== e)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && Zi(t, e);
        })(s, t);
        var e,
          n,
          r,
          l = (function (t) {
            function e() {
              if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            }
            return function () {
              var n,
                r = eo(t);
              if (e()) {
                var i = eo(this).constructor;
                n = Reflect.construct(r, arguments, i);
              } else n = r.apply(this, arguments);
              return to(this, n);
            };
          })(s);
        function s(t) {
          var e;
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError('Cannot call a class as a function');
            })(this, s),
            ((e = l.call(this)).filterTreeType = t),
            (e.isExpanded = !1),
            (e.label = a.a.viewMore),
            (e.class = N.a.filterOptionViewMore),
            (e.isVisible = !0),
            (e.$element = null),
            e
          );
        }
        return (
          (e = s),
          (r = [
            {
              key: 'getViewMoreStateData',
              value: function (t) {
                return ro.get(t);
              },
            },
            {
              key: 'setViewMoreStateData',
              value: function (t, e) {
                ro.set(t, e);
              },
            },
          ]),
          (n = [
            {
              key: 'init',
              value: function () {
                this.numberVisibleItems = this.getNumberVisibleItems();
              },
            },
            {
              key: 'getTemplate',
              value: function () {
                switch (this.filterTreeType) {
                  case Mr.FilterTreeType.VERTICAL:
                    return '\n\t\t\t\t\t<div class="{{class.button}} {{class}}"><button>{{label}}</button></div>\n\t\t\t\t'.trim();
                  case Mr.FilterTreeType.HORIZONTAL:
                    return '\n\t\t\t\t\t<div class="{{class.button}} {{class}}"><button aria-label="{{label}}"></button></div>\n\t\t\t\t'.trim();
                  default:
                    console.warn(
                      'Pass a filter tree type into the constructor'
                    );
                }
              },
            },
            {
              key: 'compileTemplate',
              value: function () {
                return this.getTemplate()
                  .replace(/{{class.button}}/g, N.a.button)
                  .replace(/{{class}}/g, this.class)
                  .replace(/{{label}}/g, u.a.stripHtml(this.label));
              },
            },
            {
              key: 'isRender',
              value: function () {
                return (
                  this.parent.displayType != pr.a.DisplayType.RANGE &&
                  (this.parent.showMoreType == pr.a.ShowMoreType.VIEWMORE ||
                    this.parent.showMoreType ==
                      pr.a.ShowMoreType.VIEWMORE_SCROLLBAR)
                );
              },
            },
            {
              key: 'render',
              value: function () {
                this.$element || (this.$element = i()(this.compileTemplate())),
                  this.setVisibility();
              },
            },
            {
              key: 'bindEvents',
              value: function () {
                this.$element &&
                  (this.isBoundEvent ||
                    this.$element.on('click', this.onClick.bind(this)),
                  this.parent.$filterOptionContentElement &&
                    this.parent.$filterOptionContentElement.addClass(
                      N.a.filterHasViewMore
                    ),
                  !this.isExpanded &&
                  s.getViewMoreStateData(this.parent.filterOptionId)
                    ? this.onClick()
                    : this.setFilterItemsVisibility());
              },
            },
            {
              key: 'onClick',
              value: function () {
                (this.isExpanded = !this.isExpanded),
                  s.setViewMoreStateData(
                    this.parent.filterOptionId,
                    this.isExpanded
                  );
                var t = '';
                this.isExpanded
                  ? ((this.label = a.a.viewLess),
                    (this.class = N.a.filterOptionViewLess),
                    (t = N.a.filterOptionViewMore))
                  : ((this.label = a.a.viewMore),
                    (this.class = N.a.filterOptionViewMore),
                    (t = N.a.filterOptionViewLess)),
                  this.filterTreeType == Mr.FilterTreeType.VERTICAL
                    ? this.$element
                        .find('button')
                        .html(u.a.stripHtml(this.label))
                    : this.$element.removeClass(t).addClass(this.class),
                  this.setFilterItemsVisibility();
              },
            },
            {
              key: 'getNumberVisibleItems',
              value: function () {
                var t = o.a.getSettingValue('general.startViewMore')[
                  this.parent.displayType
                ];
                if (this.filterTreeType == Mr.FilterTreeType.HORIZONTAL) {
                  var e = o.a.getSettingValue('general.filterHorizontalColumn');
                  Number.isInteger(e)
                    ? (t *= e)
                    : (t = o.a.getSettingValue('general.startViewMoreH')[
                        this.parent.displayType
                      ]);
                }
                return (!t || t <= 1) && (t = 5), t;
              },
            },
            {
              key: 'setVisibility',
              value: function () {
                if (this.$element) {
                  var t = this.parent.filterItems.size;
                  this.parent.keepValuesStatic ||
                    o.a.getSettingValue('general.showOutOfStockOption') ||
                    (t = Array.from(this.parent.filterItems, function (t) {
                      var e = Ji(t, 2);
                      return { key: e[0], value: e[1] };
                    }).filter(function (t) {
                      return t.value.docCount > 0;
                    }).length),
                    this.parent.$filterItemsContainerElement &&
                      (t =
                        this.parent.$filterItemsContainerElement.find(
                          'li'
                        ).length),
                    (this.isVisible = t > this.numberVisibleItems),
                    this.isVisible
                      ? this.$element.show()
                      : this.$element.hide();
                } else this.isVisible = !1;
              },
            },
            {
              key: 'setFilterItemsVisibility',
              value: function () {
                if (this.parent.$filterItemsContainerElement) {
                  var t = this.parent.$filterItemsContainerElement.find('li');
                  if ((t.show(), !this.isExpanded)) {
                    var e = this.numberVisibleItems,
                      n = t.length;
                    t.slice(e, n).hide();
                  }
                }
              },
            },
          ]) && Xi(e.prototype, n),
          r && Xi(e, r),
          s
        );
      })(d.a),
      ro = new Map(),
      io = no;
    function oo(t) {
      return (oo =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function ao(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function lo(t, e) {
      return (lo =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function so(t, e) {
      return !e || ('object' !== oo(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function co(t) {
      return (co = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var uo = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && lo(t, e);
      })(s, t);
      var e,
        n,
        r,
        l = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = co(t);
            if (e()) {
              var i = co(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return so(this, n);
          };
        })(s);
      function s() {
        var t;
        return (
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, s),
          ((t = l.call(this)).$element = null),
          (t.searchValue = ''),
          t
        );
      }
      return (
        (e = s),
        (n = [
          {
            key: 'getTemplate',
            value: function () {
              return '\n\t\t\t<div class="{{class.filterOptionShowSearchBox}}-wrapper">\n\t\t\t\t<input role="textbox" aria-label="Search Options" class="{{class.filterOptionShowSearchBox}}" type="text" autocomplete="on" placeholder="{{label.searchOptions}}" />\n\t\t\t</div>\n        '.trim();
            },
          },
          {
            key: 'compileTemplate',
            value: function () {
              return this.getTemplate()
                .replace(
                  /{{class.filterOptionShowSearchBox}}/g,
                  N.a.filterOptionShowSearchBox
                )
                .replace(/{{label.searchOptions}}/g, a.a.searchOptions);
            },
          },
          {
            key: 'isRender',
            value: function () {
              if (this.parent.filterTreeType == Mr.FilterTreeType.HORIZONTAL)
                return !1;
              var t =
                  this.parent.showSearchBoxFilterPC ||
                  o.a.getSettingValue('general.showSearchBoxFilterPCByDefault'),
                e =
                  this.parent.showSearchBoxFilterMobile ||
                  o.a.getSettingValue(
                    'general.showSearchBoxFilterMobileByDefault'
                  ),
                n = [
                  pr.a.FilterType.PRICE,
                  pr.a.FilterType.PERCENT_SALE,
                  pr.a.FilterType.STOCK,
                ],
                r = [
                  pr.a.DisplayType.RANGE,
                  pr.a.DisplayType.MULTI_LEVEL_TAG,
                  pr.a.DisplayType.MULTI_LEVEL_COLLECTIONS,
                ],
                i =
                  !n.includes(this.parent.filterType) &&
                  !r.includes(this.parent.displayType),
                a = u.a.isMobile();
              return i && ((!a && t) || (a && e));
            },
          },
          {
            key: 'render',
            value: function () {
              this.$element || (this.$element = i()(this.compileTemplate()));
            },
          },
          {
            key: 'isBindEvents',
            value: function () {
              return !this.isBoundEvent;
            },
          },
          {
            key: 'bindEvents',
            value: function () {
              this.$element &&
                (this.$element
                  .find('input')
                  .on('keyup', this.onKeyUp.bind(this)),
                this.parent.$filterOptionContentElement &&
                  this.parent.$filterOptionContentElement.addClass(
                    N.a.filterHasSearchBox
                  ));
            },
          },
          {
            key: 'onKeyUp',
            value: function (t) {
              this.setSearchValue(t), this.setFilterItemsList();
            },
          },
          {
            key: 'setSearchValue',
            value: function (t) {
              if (t && t.target) {
                var e = u.a.stripHtml(t.target.value);
                if (u.a.isBadSearchTerm(e)) return void (this.searchValue = '');
                (e =
                  'function' == typeof e.toString
                    ? e.toLowerCase().trim()
                    : ''),
                  (this.searchValue = e);
              } else this.searchValue = '';
            },
          },
          {
            key: 'setFilterItemsList',
            value: function () {
              var t = this;
              if (this.parent.$filterItemsContainerElement) {
                if (this.searchValue)
                  this.parent.filterItems.forEach(function (e) {
                    e.$element &&
                      (e.label && e.label.toLowerCase().includes(t.searchValue)
                        ? e.$element.appendTo(
                            t.parent.$filterItemsContainerElement
                          )
                        : e.$element.detach());
                  });
                else {
                  var e = 0,
                    n = o.a.getSettingValue('general.scrollFirstLoadLength');
                  this.parent.filterItems.forEach(function (r) {
                    (r.isRenderOnScroll =
                      t.parent.isLoadMoreOnScroll && e >= n),
                      r.$element &&
                        (r.isRenderOnScroll
                          ? r.$element.detach()
                          : r.$element.appendTo(
                              t.parent.$filterItemsContainerElement
                            )),
                      e++;
                  }),
                    (this.parent.scrollbar.numberFilterItemsRendered = n);
                }
                this.parent.viewMore &&
                  this.parent.viewMore.isRender() &&
                  (this.parent.viewMore.setVisibility(),
                  this.parent.viewMore.setFilterItemsVisibility());
              }
            },
          },
        ]) && ao(e.prototype, n),
        r && ao(e, r),
        s
      );
    })(d.a);
    function po(t) {
      return (po =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function fo(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function ho(t, e) {
      return (ho =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function yo(t, e) {
      return !e || ('object' !== po(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function go(t) {
      return (go = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var mo = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && ho(t, e);
      })(a, t);
      var e,
        n,
        r,
        o = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = go(t);
            if (e()) {
              var i = go(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return yo(this, n);
          };
        })(a);
      function a(t) {
        var e;
        return (
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, a),
          ((e = o.call(this)).tooltipText =
            'string' == typeof t
              ? u.a.stripHtml(u.a.stripHtml(t)).trim()
              : null),
          (e.$element = null),
          (e.$popupElement = null),
          e
        );
      }
      return (
        (e = a),
        (n = [
          {
            key: 'getTemplate',
            value: function (t) {
              switch (t) {
                case 'popup':
                  return '\n\t\t\t\t\t<div class="boost-pfs-filter-tooltip-wrapper">\n\t\t\t\t\t\t<div class="boost-pfs-filter-qtip-content">{{tooltipText}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t'.trim();
                default:
                  return '\n\t\t\t\t\t<div class="{{class.filterOptionTooltip}}">\n\t\t\t\t\t\t<span class="boost-pfs-filter-tooltip-arrow"></span>\n\t\t\t\t\t</div>\n\t\t\t\t'.trim();
              }
            },
          },
          {
            key: 'compileTemplate',
            value: function (t) {
              return this.getTemplate(t)
                .replace(/{{tooltipText}}/g, this.tooltipText)
                .replace(
                  /{{class.filterOptionTooltip}}/g,
                  N.a.filterOptionTooltip
                );
            },
          },
          {
            key: 'isRender',
            value: function () {
              return !!this.tooltipText;
            },
          },
          {
            key: 'render',
            value: function () {
              this.$element || (this.$element = i()(this.compileTemplate())),
                this.$popupElement ||
                  (this.$popupElement = i()(this.compileTemplate('popup')));
            },
          },
          {
            key: 'isBindEvents',
            value: function () {
              return !this.isBoundEvent;
            },
          },
          {
            key: 'bindEvents',
            value: function () {
              this.$element &&
                this.$popupElement &&
                this.$element.on('mouseover', this.showTooltipPopup.bind(this));
            },
          },
          {
            key: 'showTooltipPopup',
            value: function () {
              var t = this.$element.position(),
                e = this.$popupElement
                  .find('.boost-pfs-filter-qtip-content')
                  .outerWidth();
              this.$popupElement.css('left', t.left + 'px'),
                e / 2 < t.left
                  ? this.$popupElement.css('margin-left', -(e / 2 - 12) + 'px')
                  : e / 2 > t.left &&
                    this.$popupElement.css('margin-left', -t.left / 2 + 'px');
            },
          },
        ]) && fo(e.prototype, n),
        r && fo(e, r),
        a
      );
    })(d.a);
    function bo(t) {
      return (bo =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function vo(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function So(t, e) {
      return (So =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function To(t, e) {
      return !e || ('object' !== bo(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function Oo(t) {
      return (Oo = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var Po = (function (t) {
        !(function (t, e) {
          if ('function' != typeof e && null !== e)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && So(t, e);
        })(a, t);
        var e,
          n,
          r,
          i = (function (t) {
            function e() {
              if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            }
            return function () {
              var n,
                r = Oo(t);
              if (e()) {
                var i = Oo(this).constructor;
                n = Reflect.construct(r, arguments, i);
              } else n = r.apply(this, arguments);
              return To(this, n);
            };
          })(a);
        function a() {
          var t;
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError('Cannot call a class as a function');
            })(this, a),
            ((t = i.call(this)).placeHolderHeight = ''),
            (t.numberFilterItemsRendered = 0),
            (t.$scrollElement = null),
            t
          );
        }
        return (
          (e = a),
          (r = [
            {
              key: 'getScrollStateData',
              value: function (t) {
                return wo.get(t);
              },
            },
            {
              key: 'setScrollStateData',
              value: function (t, e) {
                wo.set(t, e);
              },
            },
            {
              key: 'isEnabled',
              value: function (t, e, n) {
                var r = [pr.a.DisplayType.RANGE],
                  i = [
                    pr.a.FilterType.REVIEW_RATINGS,
                    pr.a.FilterType.STOCK,
                    pr.a.FilterType.PERCENT_SALE,
                    pr.a.FilterType.PRICE,
                    pr.a.FilterType.VARIANTS_PRICE,
                  ],
                  a =
                    n == pr.a.ShowMoreType.SCROLLBAR ||
                    n == pr.a.ShowMoreType.VIEWMORE_SCROLLBAR,
                  l = u.a.isMobile(),
                  s =
                    (l &&
                      o.a.getSettingValue(
                        'general.activeFilterScrollbarMobile'
                      )) ||
                    (!l &&
                      o.a.getSettingValue('general.activeFilterScrollbarPC'));
                return !r.includes(t) && !i.includes(e) && a && s;
              },
            },
          ]),
          (n = [
            {
              key: 'isBindEvents',
              value: function () {
                return !this.isBoundEvent;
              },
            },
            {
              key: 'bindEvents',
              value: function () {
                if (
                  this.parent.$element &&
                  a.isEnabled(
                    this.parent.displayType,
                    this.parent.filterType,
                    this.parent.showMoreType
                  )
                ) {
                  var t = this.parent.$element.find(
                    '.' + N.a.filterOptionContentInner
                  );
                  if (
                    t.length > 0 &&
                    ((this.$scrollElement = t),
                    (this.parent.isLoadMoreOnScroll ||
                      o.a.getSettingValue('general.keepScrollState')) &&
                      this.$scrollElement.on(
                        'scroll',
                        this.onScroll.bind(this)
                      ),
                    o.a.getSettingValue('general.keepScrollState'))
                  ) {
                    var e = a.getScrollStateData(this.parent.filterOptionId);
                    isNaN(e) || (this.$scrollElement[0].scrollTop = e);
                  }
                }
              },
            },
            {
              key: 'onScroll',
              value: function () {
                if (o.a.getSettingValue('general.keepScrollState')) {
                  var t = this.$scrollElement[0].scrollTop;
                  a.setScrollStateData(this.parent.filterOptionId, t);
                }
                this.parent.isLoadMoreOnScroll &&
                  this.isScrollToBottom() &&
                  ((this.parent.searchBox &&
                    this.parent.searchBox.searchValue) ||
                    this.appendFilterItems());
              },
            },
            {
              key: 'isScrollToBottom',
              value: function () {
                return (
                  !!this.$scrollElement &&
                  this.$scrollElement[0].scrollHeight -
                    this.$scrollElement[0].scrollTop -
                    this.$scrollElement.outerHeight() <
                    1
                );
              },
            },
            {
              key: 'appendFilterItems',
              value: function () {
                var t = this;
                if (this.parent.$filterItemsContainerElement) {
                  var e = o.a.getSettingValue('general.scrollFirstLoadLength');
                  if (0 == this.numberFilterItemsRendered)
                    this.numberFilterItemsRendered = e;
                  else if (
                    this.numberFilterItemsRendered ==
                    this.parent.filterItems.size
                  )
                    return;
                  this.parent.$element.addClass(
                    'boost-pfs-filter-scrollbar-loading'
                  );
                  var n = 0;
                  this.parent.filterItems.forEach(function (r) {
                    r.isRenderOnScroll &&
                      n < e &&
                      (t.parent.$filterItemsContainerElement.append(r.$element),
                      (r.isRenderOnScroll = !1),
                      n++,
                      t.numberFilterItemsRendered++);
                  }),
                    setTimeout(
                      function () {
                        this.parent.$element.removeClass(
                          'boost-pfs-filter-scrollbar-loading'
                        );
                      }.bind(this),
                      200
                    );
                }
              },
            },
          ]) && vo(e.prototype, n),
          r && vo(e, r),
          a
        );
      })(d.a),
      wo = new Map(),
      _o = Po;
    function Co(t) {
      return (Co =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function ko(t, e) {
      if (!(t instanceof e))
        throw new TypeError('Cannot call a class as a function');
    }
    function Eo(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function Ro(t, e, n) {
      return e && Eo(t.prototype, e), n && Eo(t, n), t;
    }
    function Io(t, e, n) {
      return (Io =
        'undefined' != typeof Reflect && Reflect.get
          ? Reflect.get
          : function (t, e, n) {
              var r = (function (t, e) {
                for (
                  ;
                  !Object.prototype.hasOwnProperty.call(t, e) &&
                  null !== (t = Bo(t));

                );
                return t;
              })(t, e);
              if (r) {
                var i = Object.getOwnPropertyDescriptor(r, e);
                return i.get ? i.get.call(n) : i.value;
              }
            })(t, e, n || t);
    }
    function Lo(t, e) {
      if ('function' != typeof e && null !== e)
        throw new TypeError(
          'Super expression must either be null or a function'
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: { value: t, writable: !0, configurable: !0 },
      })),
        e && Ao(t, e);
    }
    function Ao(t, e) {
      return (Ao =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function xo(t) {
      function e() {
        if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' == typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (t) {
          return !1;
        }
      }
      return function () {
        var n,
          r = Bo(t);
        if (e()) {
          var i = Bo(this).constructor;
          n = Reflect.construct(r, arguments, i);
        } else n = r.apply(this, arguments);
        return Fo(this, n);
      };
    }
    function Fo(t, e) {
      return !e || ('object' !== Co(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function Bo(t) {
      return (Bo = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var Do = (function (t) {
        Lo(n, t);
        var e = xo(n);
        function n(t) {
          var r;
          return (
            ko(this, n),
            ((r = e.call(this, t)).$element = null),
            (r.$itemElement = null),
            (r.$childContainerElement = null),
            r
          );
        }
        return (
          Ro(
            n,
            [
              {
                key: 'init',
                value: function () {
                  var t = this.filterOption
                    ? this.filterOption.selectType
                    : this.parent.selectType;
                  this.requestInstantly =
                    this.filterTreeType == Mr.FilterTreeType.VERTICAL ||
                    t == pr.a.SelectType.SINGLE ||
                    o.a.getSettingValue('general.requestInstantly');
                },
              },
              {
                key: 'getTemplate',
                value: function () {
                  return '\n\t\t\t<li class="boost-pfs-filter-option-multi-level-item boost-pfs-filter-option-first-level-item">\n\t\t\t\t<div class="{{class.filterOptionItem}} {{class.filterOptionLabel}}">\n\t\t\t\t\t<a class="{{class.button}}" data-action="select-filter-item" href="{{href}}">\n\t\t\t\t\t\t<span class="boost-pfs-filter-option-value">{{label}}</span>\n\t\t\t\t\t</a>\n\t\t\t\t\t{{arrow}}\n\t\t\t\t</div>\n\t\t\t\t<div class="boost-pfs-filter-option-multi-level-list boost-pfs-filter-option-second-level-list">\n\t\t\t\t\t{{childItems}}\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t'.trim();
                },
              },
              {
                key: 'getArrowTemplate',
                value: function () {
                  return '\n\t\t\t<button class="{{class.button}} {{class.button}}-arrow" data-action="expand-filter-item" aria-label="{{label.ada.toggleMultiLevel}}">\n\t\t\t\t<span class="boost-pfs-arrow"></span>\n\t\t\t</button>\n\t\t'.trim();
                },
              },
              {
                key: 'compileArrowTemplate',
                value: function () {
                  return 3 != this.level &&
                    this.children &&
                    this.children.length > 0
                    ? this.getArrowTemplate().replace(
                        /{{label.ada.toggleMultiLevel}}/g,
                        Labels.ada.toggleMultiLevel.replace(
                          /{{filterItem}}/g,
                          this.label
                        )
                      )
                    : '';
                },
              },
              {
                key: 'compileTemplate',
                value: function () {
                  return this.getTemplate()
                    .replace(
                      /{{class.filterOptionItem}}/g,
                      N.a.filterOptionItem
                    )
                    .replace(
                      /{{class.filterOptionLabel}}/g,
                      N.a.filterOptionLabel
                    )
                    .replace(/{{label}}/g, this.label)
                    .replace(/{{href}}/g, this.href)
                    .replace(/{{arrow}}/g, this.compileArrowTemplate())
                    .replace(/{{class.button}}/g, N.a.button)
                    .replace(/{{childItems}}/g, '');
                },
              },
              {
                key: 'render',
                value: function () {
                  var t = this;
                  if (
                    (this.$element ||
                      ((this.$element = i()(this.compileTemplate())),
                      (this.$itemElement = this.$element.find(
                        '.' + N.a.filterOptionItem
                      )),
                      (this.$itemClickElement = this.$itemElement.find(
                        '[data-action="select-filter-item"]'
                      )),
                      (this.$toggleClickElement = this.$itemElement.find(
                        '[data-action="expand-filter-item"]'
                      )),
                      (this.$childContainerElement = this.$element.find(
                        '.boost-pfs-filter-option-multi-level-list'
                      )),
                      this.$childContainerElement &&
                        this.children &&
                        this.children.length > 0 &&
                        this.children.forEach(function (e) {
                          e.$element &&
                            t.$childContainerElement.append(e.$element);
                        })),
                    this.$itemElement)
                  ) {
                    this.isSelected || this.isSelectedChild
                      ? (this.$itemElement.addClass('selected'),
                        this.$itemElement.find('a').attr('aria-current', !0))
                      : (this.$itemElement.removeClass('selected'),
                        this.$itemElement.find('a').removeAttr('aria-current'));
                    var e = n.getLevelOpenStateData(this),
                      r = o.a.getSettingValue(
                        'general.openMultiLevelByDefault'
                      );
                    e ||
                    (Array.isArray(r) && r.includes(this.level)) ||
                    (null == e && this.isSelectedChild)
                      ? (this.$itemElement.addClass('boost-pfs-open'),
                        n.setLevelOpenStateData(this, !0))
                      : n.setLevelOpenStateData(this, !1);
                  }
                },
              },
              {
                key: 'bindEvents',
                value: function () {
                  this.$itemClickElement &&
                    this.$itemClickElement.on('click', this.onClick.bind(this)),
                    this.$toggleClickElement &&
                      this.$toggleClickElement.on(
                        'click',
                        this.onClickToggle.bind(this)
                      );
                },
              },
              {
                key: 'onClick',
                value: function (t) {
                  t && t.preventDefault(),
                    this.setCollectionParams(),
                    this.clearAllTagParams(),
                    K.default.setParam('page', 1),
                    this.children &&
                      this.children.length > 0 &&
                      n.setLevelOpenStateData(this, !0),
                    this.requestInstantly &&
                      K.default.applyFilter('collection');
                },
              },
              {
                key: 'onClickToggle',
                value: function () {
                  this.$itemElement.toggleClass('boost-pfs-open'),
                    this.$itemElement.hasClass('boost-pfs-open')
                      ? n.setLevelOpenStateData(this, !0)
                      : n.setLevelOpenStateData(this, !1);
                },
              },
              {
                key: 'isAppliedFilter',
                value: function () {
                  return l.a.collectionId == this.collectionId;
                },
              },
              {
                key: 'setCollectionParams',
                value: function () {
                  u.a.isCollectionPage()
                    ? (c.a.setAddressBarPathAfterFilter(this.href),
                      c.a.setWindowTitleAfterFilter(
                        this.label + ' - ' + l.a.shopName
                      ),
                      K.default.setParam('sort', this.sortOrder),
                      (l.a.defaultSorting = this.sortOrder))
                    : K.default.setParam(
                        this.filterOption.filterOptionId,
                        this.collectionId
                      ),
                    (l.a.collectionId = this.collectionId),
                    K.default.setParam('collection_scope', this.collectionId);
                },
              },
              {
                key: 'clearAllTagParams',
                value: function () {
                  var t = this.filterOption.filterOptionId.replace(
                    l.a.prefix + '_c',
                    l.a.prefix + '_ct'
                  );
                  K.default.setParam(t, null), (l.a.collectionTags = []);
                  var e = [];
                  Object.keys(l.a.queryParams).forEach(function (t) {
                    t.startsWith(l.a.prefix) &&
                      !t.startsWith(l.a.prefix + '_c') &&
                      e.push(t);
                  }),
                    e.forEach(function (t) {
                      K.default.setParam(t, null);
                    });
                },
              },
              {
                key: 'setData',
                value: function (t) {
                  var e = this;
                  Io(Bo(n.prototype), 'setData', this).call(this, t),
                    (this.filterOption = this.parent),
                    (this.level = 1),
                    (this.href = u.a.isCollectionPage()
                      ? '/collections/' + this.handle
                      : '#');
                  var r = u.a.getDefaultSorting(this.collectionId);
                  (this.sortOrder =
                    '' != r
                      ? r
                      : t.sort_order
                      ? t.sort_order
                      : l.a.defaultSorting),
                    (this.children = []),
                    Array.isArray(t.tags) &&
                      t.tags.forEach(function (t) {
                        if (t.tag) {
                          var n = new $o(e.filterTreeType);
                          e.addComponent(n), n.setData(t);
                        }
                      }),
                    (this.isSelected = this.isAppliedFilter()),
                    (this.isSelectedChild = this.children.some(function (t) {
                      return t.isSelected || t.isSelectedChild;
                    })),
                    this.filterOption.allNestedFilterItems.set(
                      this.collectionId,
                      this
                    );
                },
              },
            ],
            [
              {
                key: 'getLevelOpenStateData',
                value: function (t) {
                  var e = t.filterOption.filterOptionId,
                    n = t.collectionId,
                    r = t.tag,
                    i = e + ':' + n + (r ? ':' + r : '');
                  return Mo.get(i);
                },
              },
              {
                key: 'setLevelOpenStateData',
                value: function (t, e) {
                  var n = t.filterOption.filterOptionId,
                    r = t.collectionId,
                    i = t.tag,
                    o = n + ':' + r + (i ? ':' + i : '');
                  Mo.set(o, e);
                },
              },
            ]
          ),
          n
        );
      })(ri),
      $o = (function (t) {
        Lo(n, t);
        var e = xo(n);
        function n() {
          return ko(this, n), e.apply(this, arguments);
        }
        return (
          Ro(n, [
            {
              key: 'getTemplate',
              value: function () {
                return '\n\t\t\t<div class="boost-pfs-filter-option-multi-level-item boost-pfs-filter-option-second-level-item">\n\t\t\t\t<div class="{{class.filterOptionItem}} {{class.filterOptionLabel}}">\n\t\t\t\t\t<a class="{{class.button}}" data-action="select-filter-item" href="{{href}}">\n            <span class="boost-pfs-check-box" role="checkbox" aria-checked="false" tabindex="0" aria-labelledby="{{label}}"></span>\n\t\t\t\t\t\t<span class="boost-pfs-filter-option-value">{{label}}</span>\n\t\t\t\t\t</a>\n\t\t\t\t\t{{arrow}}\n\t\t\t\t</div>\n\t\t\t\t<div class="boost-pfs-filter-option-multi-level-list boost-pfs-filter-option-third-level-list">\n\t\t\t\t\t{{childItems}}\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t'.trim();
              },
            },
            {
              key: 'onClick',
              value: function (t) {
                t && t.preventDefault(),
                  (this.collectionId == l.a.collectionId &&
                    o.a.getSettingValue(
                      'general.multiLevelCollectionSelectType'
                    ) != pr.a.SelectType.SINGLE) ||
                    this.clearAllTagParams(),
                  this.setCollectionParams(),
                  this.setTagParams(),
                  K.default.setParam('page', 1),
                  this.children &&
                    this.children.length > 0 &&
                    Do.setLevelOpenStateData(this, !0),
                  this.requestInstantly && K.default.applyFilter('collection');
              },
            },
            {
              key: 'setTagParams',
              value: function () {
                if (
                  u.a.isCollectionPage() &&
                  o.a.getSettingValue(
                    'general.multiLevelCollectionSelectType'
                  ) != pr.a.SelectType.MULTIPLE
                )
                  (l.a.collectionTags = this.tag),
                    c.a.setAddressBarPathAfterFilter(this.href);
                else {
                  Array.isArray(l.a.collectionTags) ||
                    (l.a.collectionTags = []);
                  var t = l.a.collectionTags.indexOf(this.tag);
                  t > -1
                    ? l.a.collectionTags.splice(t, 1)
                    : l.a.collectionTags.push(this.tag),
                    (o.a.general.tagMode = '2');
                  var e = this.filterOption.filterOptionId.replace(
                    l.a.prefix + '_c_',
                    l.a.prefix + '_ct_'
                  );
                  Array.isArray(l.a.collectionTags) &&
                  l.a.collectionTags.length > 0
                    ? K.default.setParam(e, l.a.collectionTags)
                    : K.default.setParam(e, null);
                }
              },
            },
            {
              key: 'isAppliedFilter',
              value: function () {
                var t =
                  (Array.isArray(l.a.collectionTags) &&
                    l.a.collectionTags.includes(this.tag)) ||
                  l.a.collectionTags == this.tag;
                return l.a.collectionId == this.collectionId && t;
              },
            },
            {
              key: 'setData',
              value: function (t) {
                var e = this;
                (this.tag = t.tag),
                  (this.slugifyTag = u.a.slugify(this.tag)),
                  (this.label = t.displayName ? t.displayName : t.tag),
                  (this.filterOption = this.parent.filterOption),
                  (this.requestInstantly = this.parent.requestInstantly),
                  (this.collectionId = this.parent.collectionId),
                  (this.handle = this.parent.handle),
                  (this.level = 2),
                  (this.href =
                    u.a.isCollectionPage() &&
                    o.a.getSettingValue(
                      'general.multiLevelCollectionSelectType'
                    ) != pr.a.SelectType.MULTIPLE
                      ? '/collections/' + this.handle + '/' + this.slugifyTag
                      : '#'),
                  (this.sortOrder = this.parent.sortOrder
                    ? this.parent.sortOrder
                    : l.a.defaultSorting),
                  (this.children = []),
                  Array.isArray(t.subTags) &&
                    t.subTags.forEach(function (t) {
                      if (t.tag) {
                        var n = new jo(e.filterTreeType);
                        e.addComponent(n), n.setData(t);
                      }
                    }),
                  (this.label = this.buildLabel()),
                  (this.isSelected = this.isAppliedFilter()),
                  (this.isSelectedChild = this.children.some(function (t) {
                    return t.isSelected || t.isSelectedChild;
                  })),
                  this.filterOption.allNestedFilterItems.set(
                    this.collectionId + ':' + this.tag,
                    this
                  );
              },
            },
          ]),
          n
        );
      })(Do),
      jo = (function (t) {
        Lo(n, t);
        var e = xo(n);
        function n() {
          return ko(this, n), e.apply(this, arguments);
        }
        return (
          Ro(n, [
            {
              key: 'getTemplate',
              value: function () {
                return '\n\t\t\t<div class="boost-pfs-filter-option-multi-level-item boost-pfs-filter-option-third-level-item">\n\t\t\t\t<div class="{{class.filterOptionItem}} {{class.filterOptionLabel}}">\n\t\t\t\t\t<a class="{{class.button}}" data-action="select-filter-item" href="{{href}}">\n            <span class="boost-pfs-check-box" role="checkbox" aria-checked="false" tabindex="0" aria-labelledby="{{label}}"></span>\n\t\t\t\t\t\t<span class="boost-pfs-filter-option-value">{{label}}</span>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t'.trim();
              },
            },
            {
              key: 'setData',
              value: function (t) {
                (this.tag = t.tag),
                  (this.slugifyTag = u.a.slugify(this.tag)),
                  (this.label = t.displayName ? t.displayName : t.tag),
                  (this.filterOption = this.parent.filterOption),
                  (this.requestInstantly = this.parent.requestInstantly),
                  (this.collectionId = this.parent.collectionId),
                  (this.handle = this.parent.handle),
                  (this.level = 3),
                  (this.href =
                    u.a.isCollectionPage() &&
                    o.a.getSettingValue(
                      'general.multiLevelCollectionSelectType'
                    ) != pr.a.SelectType.MULTIPLE
                      ? '/collections/' + this.handle + '/' + this.slugifyTag
                      : '#'),
                  this.filterOption.allNestedFilterItems.set(
                    this.collectionId + ':' + this.tag,
                    this
                  ),
                  (this.sortOrder = this.parent.sortOrder
                    ? this.parent.sortOrder
                    : l.a.defaultSorting),
                  (this.label = this.buildLabel()),
                  (this.isSelected = this.isAppliedFilter());
              },
            },
          ]),
          n
        );
      })($o),
      Mo = new Map(),
      Vo = Do;
    function No(t) {
      return (No =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function Ho(t, e) {
      if (!(t instanceof e))
        throw new TypeError('Cannot call a class as a function');
    }
    function Uo(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function Wo(t, e, n) {
      return e && Uo(t.prototype, e), n && Uo(t, n), t;
    }
    function qo(t, e) {
      if ('function' != typeof e && null !== e)
        throw new TypeError(
          'Super expression must either be null or a function'
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: { value: t, writable: !0, configurable: !0 },
      })),
        e && Go(t, e);
    }
    function Go(t, e) {
      return (Go =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function zo(t) {
      function e() {
        if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' == typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (t) {
          return !1;
        }
      }
      return function () {
        var n,
          r = Yo(t);
        if (e()) {
          var i = Yo(this).constructor;
          n = Reflect.construct(r, arguments, i);
        } else n = r.apply(this, arguments);
        return Ko(this, n);
      };
    }
    function Ko(t, e) {
      return !e || ('object' !== No(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function Yo(t) {
      return (Yo = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var Qo = (function (t) {
        qo(n, t);
        var e = zo(n);
        function n(t) {
          var r;
          return (
            Ho(this, n),
            ((r = e.call(this, t)).$element = null),
            (r.$itemElement = null),
            (r.$childContainerElement = null),
            r
          );
        }
        return (
          Wo(
            n,
            [
              {
                key: 'init',
                value: function () {
                  this.filterOption
                    ? this.filterOption.selectType
                    : this.parent.selectType;
                  this.requestInstantly =
                    this.filterTreeType == Mr.FilterTreeType.VERTICAL ||
                    o.a.getSettingValue('general.requestInstantly');
                },
              },
              {
                key: 'getTemplate',
                value: function () {
                  return '\n\t\t\t<li class="boost-pfs-filter-option-multi-level-item boost-pfs-filter-option-first-level-item">\n\t\t\t\t<div class="{{class.filterOptionItem}} {{class.filterOptionLabel}}">\n\t\t\t\t\t{{swatch}}\n\t\t\t\t\t<button class="{{class.button}}" data-action="select-filter-item">\n            <span class="boost-pfs-check-box" role="checkbox" aria-checked="false" tabindex="0" aria-labelledby="{{label}}"></span>\n\t\t\t\t\t\t<span class="boost-pfs-filter-option-value">{{label}}</span>\n\t\t\t\t\t</button>\n\t\t\t\t\t{{arrow}}\n\t\t\t\t</div>\n\t\t\t\t<div class="boost-pfs-filter-option-multi-level-list boost-pfs-filter-option-second-level-list">\n\t\t\t\t\t{{childItems}}\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t'.trim();
                },
              },
              {
                key: 'getSwatchTemplate',
                value: function () {
                  return '\n\t\t\t<span class="boost-pfs-filter-option-swatch-image" \n\t\t\t\tstyle="background-color: {{backgroundColor}}; \n\t\t\t\tbackground-image: url({{swatchFileUrl}});" title="{{label}}">\n\t\t\t</span>\n\t\t'.trim();
                },
              },
              {
                key: 'getArrowTemplate',
                value: function () {
                  return '\n\t\t\t<button class="{{class.button}} {{class.button}}-arrow" data-action="expand-filter-item" aria-label="{{label.ada.toggleMultiLevel}}">\n\t\t\t\t<span class="boost-pfs-arrow"></span>\n\t\t\t</button>\n\t\t'.trim();
                },
              },
              {
                key: 'compileSwatchTemplate',
                value: function () {
                  return this.getSwatchTemplate()
                    .replace(/{{backgroundColor}}/g, this.backgroundColor)
                    .replace(/{{swatchFileUrl}}/g, this.swatchFileUrl);
                },
              },
              {
                key: 'compileArrowTemplate',
                value: function () {
                  return 3 != this.level &&
                    this.children &&
                    this.children.length > 0
                    ? this.getArrowTemplate().replace(
                        /{{label.ada.toggleMultiLevel}}/g,
                        Labels.ada.toggleMultiLevel.replace(
                          /{{filterItem}}/g,
                          u.a.stripHtml(this.label)
                        )
                      )
                    : '';
                },
              },
              {
                key: 'compileTemplate',
                value: function () {
                  return this.getTemplate()
                    .replace(
                      /{{class.filterOptionItem}}/g,
                      N.a.filterOptionItem
                    )
                    .replace(
                      /{{class.filterOptionLabel}}/g,
                      N.a.filterOptionLabel
                    )
                    .replace(/{{label}}/g, u.a.stripHtml(this.label))
                    .replace(
                      /{{swatch}}/g,
                      this.filterOption.displayTypeItem ==
                        pr.a.DisplayType.SWATCH
                        ? this.compileSwatchTemplate()
                        : ''
                    )
                    .replace(/{{arrow}}/g, this.compileArrowTemplate())
                    .replace(/{{class.button}}/g, N.a.button)
                    .replace(/{{childItems}}/g, '');
                },
              },
              {
                key: 'render',
                value: function () {
                  var t = this;
                  if (
                    (this.$element ||
                      ((this.$element = i()(this.compileTemplate())),
                      (this.$itemElement = this.$element.find(
                        '.' + N.a.filterOptionItem
                      )),
                      (this.$itemClickElement = this.$itemElement.find(
                        '[data-action="select-filter-item"]'
                      )),
                      (this.$toggleClickElement = this.$itemElement.find(
                        '[data-action="expand-filter-item"]'
                      )),
                      (this.$childContainerElement = this.$element.find(
                        '.boost-pfs-filter-option-multi-level-list'
                      )),
                      this.$childContainerElement &&
                        this.children &&
                        this.children.length > 0 &&
                        this.children.forEach(function (e) {
                          e.$element &&
                            t.$childContainerElement.append(e.$element);
                        })),
                    (this.isSelected = this.isAppliedFilter()),
                    (this.isSelectedChild = !1),
                    Array.isArray(this.children) &&
                      (this.isSelectedChild = this.children.some(function (t) {
                        return t.isSelected || t.isSelectedChild;
                      })),
                    this.$itemElement)
                  ) {
                    this.isSelected ||
                    (this.filterOption.selectType == pr.a.SelectType.SINGLE &&
                      this.isSelectedChild)
                      ? (this.$itemElement.addClass('selected'),
                        this.$itemElement
                          .find('button')
                          .attr('aria-checked', !0),
                        this.$itemElement
                          .find('.boost-pfs-check-box')
                          .attr('aria-checked', !0))
                      : (this.$itemElement.removeClass('selected'),
                        this.$itemElement
                          .find('button')
                          .removeAttr('aria-checked'),
                        this.$itemElement
                          .find('.boost-pfs-check-box')
                          .removeAttr('aria-checked'));
                    var e = n.getLevelOpenStateData(this),
                      r = o.a.getSettingValue(
                        'general.openMultiLevelByDefault'
                      );
                    e ||
                    (Array.isArray(r) && r.includes(this.level)) ||
                    (null == e && this.isSelectedChild)
                      ? (this.$itemElement.addClass('boost-pfs-open'),
                        n.setLevelOpenStateData(this, !0))
                      : n.setLevelOpenStateData(this, !1);
                  }
                },
              },
              {
                key: 'bindEvents',
                value: function () {
                  this.$itemClickElement &&
                    this.$itemClickElement.on('click', this.onClick.bind(this)),
                    this.$toggleClickElement &&
                      this.$toggleClickElement.on(
                        'click',
                        this.onClickToggle.bind(this)
                      );
                },
              },
              {
                key: 'isAppliedFilter',
                value: function () {
                  var t = l.a.queryParams[this.filterOption.filterOptionId];
                  return !(!Array.isArray(t) || !t.includes(this.value));
                },
              },
              {
                key: 'onSelectFilter',
                value: function () {
                  this.children &&
                    this.children.length > 0 &&
                    (this.$itemElement.addClass('boost-pfs-open'),
                    n.setLevelOpenStateData(this, !0)),
                    this.filterOption.selectType == pr.a.SelectType.SINGLE &&
                      this.filterOption.allNestedFilterItems.forEach(function (
                        t
                      ) {
                        t.$itemElement &&
                          (t.$itemElement.removeClass('selected'),
                          t.$itemElement
                            .find('button')
                            .removeAttr('aria-checked'),
                          t.$itemElement
                            .find('.boost-pfs-check-box')
                            .removeAttr('aria-checked'),
                          (t.isSelected = !1));
                      }),
                    this.filterOption.selectType == pr.a.SelectType.SINGLE
                      ? ((this.isSelected = !0),
                        this.$itemElement.addClass('selected'),
                        this.level > 1 &&
                          (this.parent.$itemElement.addClass('selected'),
                          this.parent.$itemElement
                            .find('button')
                            .attr('aria-checked', !0),
                          this.parent.$itemElement
                            .find('.boost-pfs-check-box')
                            .attr('aria-checked', !0)),
                        this.level > 2 &&
                          (this.parent.parent.$itemElement.addClass('selected'),
                          this.parent.parent.$itemElement
                            .find('button')
                            .attr('aria-checked', !0),
                          this.parent.parent.$itemElement
                            .find('.boost-pfs-check-box')
                            .attr('aria-checked', !0)))
                      : ((this.isSelected = !this.isSelected),
                        this.$itemElement.toggleClass('selected'),
                        this.$itemElement
                          .find('button')
                          .toggleAttr('aria-checked'),
                        this.$itemElement
                          .find('.boost-pfs-check-box')
                          .toggleAttr('aria-checked'));
                },
              },
              {
                key: 'onApplyFilter',
                value: function () {
                  var t = this;
                  if (
                    this.isSelected &&
                    this.filterOption.selectType == pr.a.SelectType.SINGLE
                  )
                    this.children &&
                      this.children.length > 0 &&
                      (this.$itemElement.addClass('boost-pfs-open'),
                      n.setLevelOpenStateData(this, !0));
                  else {
                    this.children &&
                      this.children.length > 0 &&
                      n.setLevelOpenStateData(this, !0);
                    var e = this.filterOption.filterOptionId;
                    this.isSelected = !this.isSelected;
                    var r = null;
                    this.filterOption.selectType == pr.a.SelectType.SINGLE
                      ? (r = this.isSelected ? [this.value] : [])
                      : ((r = l.a.queryParams[e]),
                        Array.isArray(r) || (r = []),
                        this.isSelected
                          ? r.includes(this.value) || r.push(this.value)
                          : (r = r.filter(function (e) {
                              return e !== t.value;
                            }))),
                      K.default.setParam(e, r),
                      K.default.setParam(
                        e + '_and_condition',
                        !!(this.filterOption.useAndCondition && r.length > 0) ||
                          null
                      ),
                      K.default.setParam('page', 1);
                    var i = { filterOptionId: e, filterValue: this.value };
                    K.default.applyFilter('filter', i);
                  }
                },
              },
              {
                key: 'onClickToggle',
                value: function () {
                  this.$itemElement.toggleClass('boost-pfs-open'),
                    this.$itemElement.hasClass('boost-pfs-open')
                      ? n.setLevelOpenStateData(this, !0)
                      : n.setLevelOpenStateData(this, !1);
                },
              },
              {
                key: 'setData',
                value: function (t) {
                  var e = this;
                  (this.value = t.tag),
                    (this.label = u.a.stripHtml(
                      t.displayName ? t.displayName : t.tag
                    )),
                    (this.docCount = t.doc_count ? t.doc_count : 0),
                    (this.level = 1),
                    (this.id = this.value),
                    (this.filterOption = this.parent),
                    (this.label = u.a.stripHtml(this.buildLabel())),
                    this.filterOption.displayTypeItem ==
                      pr.a.DisplayType.SWATCH && this.setSwatchData(),
                    (this.children = []),
                    Array.isArray(t.subTags) &&
                      t.subTags.forEach(function (t) {
                        if (t.tag) {
                          var n = new Jo(e.filterTreeType);
                          e.addComponent(n), n.setData(t);
                        }
                      }),
                    this.filterOption.allNestedFilterItems.set(
                      this.value,
                      this
                    );
                },
              },
              {
                key: 'setSwatchData',
                value: function () {
                  var t = this.filterOption.filterOptionId
                    .replace('pf_t_', '')
                    .replace('pf_opt_', '');
                  (this.swatchFileName =
                    t +
                    '-' +
                    u.a.slugify(u.a.stripHtml(this.label)).replace(/\#/g, '')),
                    (this.swatchFileUrl = u.a.getFilePath(
                      this.swatchFileName,
                      l.a.swatchExtension,
                      o.a.getSettingValue('general.swatchImageVersion')
                    ));
                  var e = u.a.slugify(u.a.stripHtml(this.label)).split('-');
                  this.backgroundColor = e[e.length - 1];
                },
              },
            ],
            [
              {
                key: 'getLevelOpenStateData',
                value: function (t) {
                  var e = t.filterOption.filterOptionId + ':' + t.value;
                  return Zo.get(e);
                },
              },
              {
                key: 'setLevelOpenStateData',
                value: function (t, e) {
                  var n = t.filterOption.filterOptionId + ':' + t.value;
                  Zo.set(n, e);
                },
              },
            ]
          ),
          n
        );
      })(ri),
      Jo = (function (t) {
        qo(n, t);
        var e = zo(n);
        function n() {
          return Ho(this, n), e.apply(this, arguments);
        }
        return (
          Wo(n, [
            {
              key: 'getTemplate',
              value: function () {
                return '\n\t\t\t<div class="boost-pfs-filter-option-multi-level-item boost-pfs-filter-option-second-level-item">\n\t\t\t\t<div class="{{class.filterOptionItem}} {{class.filterOptionLabel}}">\n\t\t\t\t\t{{swatch}}\n\t\t\t\t\t<button class="{{class.button}}" data-action="select-filter-item">\n            <span class="boost-pfs-check-box" role="checkbox" aria-checked="false" tabindex="0" aria-labelledby="{{label}}"></span>\n\t\t\t\t\t\t<span class="boost-pfs-filter-option-value">{{label}}</span>\n\t\t\t\t\t</button>\n\t\t\t\t\t{{arrow}}\n\t\t\t\t</div>\n\t\t\t\t<div class="boost-pfs-filter-option-multi-level-list boost-pfs-filter-option-third-level-list">\n\t\t\t\t\t{{childItems}}\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t'.trim();
              },
            },
            {
              key: 'setData',
              value: function (t) {
                var e = this;
                (this.value = t.tag),
                  (this.label = u.a.stripHtml(
                    t.displayName ? t.displayName : t.tag
                  )),
                  (this.docCount = t.doc_count ? t.doc_count : 0),
                  (this.level = 2),
                  this.parent &&
                    ((this.requestInstantly = this.parent.requestInstantly),
                    (this.filterOption = this.parent.filterOption)),
                  (this.label = u.a.stripHtml(this.buildLabel())),
                  this.filterOption.displayTypeItem ==
                    pr.a.DisplayType.SWATCH && this.setSwatchData(),
                  (this.children = []),
                  Array.isArray(t.subTags) &&
                    t.subTags.forEach(function (t) {
                      if (t.tag) {
                        var n = new Xo(e.filterTreeType);
                        e.addComponent(n), n.setData(t);
                      }
                    }),
                  this.filterOption.allNestedFilterItems.set(this.value, this);
              },
            },
          ]),
          n
        );
      })(Qo),
      Xo = (function (t) {
        qo(n, t);
        var e = zo(n);
        function n() {
          return Ho(this, n), e.apply(this, arguments);
        }
        return (
          Wo(n, [
            {
              key: 'getTemplate',
              value: function () {
                return '\n\t\t\t<div class="boost-pfs-filter-option-multi-level-item boost-pfs-filter-option-third-level-item">\n\t\t\t\t<div class="{{class.filterOptionItem}} {{class.filterOptionLabel}}">\n\t\t\t\t\t{{swatch}}\n\t\t\t\t\t<button class="{{class.button}}" data-action="select-filter-item">\n            <span class="boost-pfs-check-box" role="checkbox" aria-checked="false" tabindex="0" aria-labelledby="{{label}}"></span>\n\t\t\t\t\t\t<span class="boost-pfs-filter-option-value">{{label}}</span>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t'.trim();
              },
            },
            {
              key: 'setData',
              value: function (t) {
                (this.value = t.tag),
                  (this.label = u.a.stripHtml(
                    t.displayName ? t.displayName : t.tag
                  )),
                  (this.docCount = t.doc_count ? t.doc_count : 0),
                  (this.level = 3),
                  this.parent &&
                    ((this.requestInstantly = this.parent.requestInstantly),
                    (this.filterOption = this.parent.filterOption)),
                  (this.label = u.a.stripHtml(this.buildLabel())),
                  this.filterOption.displayTypeItem ==
                    pr.a.DisplayType.SWATCH && this.setSwatchData(),
                  this.filterOption.allNestedFilterItems.set(this.value, this);
              },
            },
          ]),
          n
        );
      })(Jo),
      Zo = new Map(),
      ta = Qo;
    function ea(t) {
      return (ea =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function na(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function ra(t, e) {
      return (ra =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function ia(t, e) {
      return !e || ('object' !== ea(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function oa(t) {
      return (oa = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var aa = (function (t) {
        !(function (t, e) {
          if ('function' != typeof e && null !== e)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && ra(t, e);
        })(l, t);
        var e,
          n,
          r,
          a = (function (t) {
            function e() {
              if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            }
            return function () {
              var n,
                r = oa(t);
              if (e()) {
                var i = oa(this).constructor;
                n = Reflect.construct(r, arguments, i);
              } else n = r.apply(this, arguments);
              return ia(this, n);
            };
          })(l);
        function l(t) {
          var e;
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError('Cannot call a class as a function');
            })(this, l),
            ((e = a.call(this)).filterTreeType = t),
            (e.$clickElement = null),
            (e.$toggleElement = null),
            e
          );
        }
        return (
          (e = l),
          (r = [
            {
              key: 'getCollapsedStateData',
              value: function (t) {
                return sa.get(t);
              },
            },
            {
              key: 'setCollapsedStateData',
              value: function (t, e) {
                sa.set(t, e);
              },
            },
          ]),
          (n = [
            {
              key: 'init',
              value: function () {
                var t;
                if (
                  ((this.isCollapsed = !1),
                  this.filterTreeType == Mr.FilterTreeType.HORIZONTAL)
                )
                  this.isCollapsed = !0;
                else if (
                  (o.a.getSettingValue('general.keepToggleState') &&
                    (t = l.getCollapsedStateData(this.parent.filterOptionId)),
                  void 0 === t)
                ) {
                  var e = u.a.isMobile();
                  this.isCollapsed =
                    (e &&
                      (this.parent.isCollapseMobile ||
                        o.a.getSettingValue(
                          'general.collapseOnMobileByDefault'
                        ))) ||
                    (!e &&
                      (this.parent.isCollapsePC ||
                        o.a.getSettingValue('general.collapseOnPCByDefault')));
                } else this.isCollapsed = t;
              },
            },
            {
              key: 'isBindEvents',
              value: function () {
                return !(
                  this.isBoundEvent ||
                  !this.parent.$element ||
                  !this.parent.$filterOptionContentElement ||
                  !this.parent.$filterOptionTitleElement
                );
              },
            },
            {
              key: 'bindEvents',
              value: function () {
                (this.$clickElement = this.parent.$filterOptionTitleElement),
                  (this.$toggleElement =
                    this.parent.$filterOptionContentElement),
                  this.filterTreeType == Mr.FilterTreeType.VERTICAL
                    ? this.$clickElement.on(
                        'click',
                        this.onToggleVertical.bind(this)
                      )
                    : (this.$clickElement.on(
                        'click',
                        this.onToggleHorizontal.bind(this)
                      ),
                      ca ||
                        ((ca = !0),
                        i()('body').on(
                          'click',
                          this.onClickOutSideHorizontal.bind(this)
                        )),
                      this.parent.filterOptionId == la &&
                        ((la = ''), this.onToggleHorizontal())),
                  this.$clickElement.attr('aria-expanded', !this.isCollapsed);
              },
            },
            {
              key: 'onToggleVertical',
              value: function () {
                (this.isCollapsed = !this.isCollapsed),
                  o.a.getSettingValue('general.keepToggleState') &&
                    l.setCollapsedStateData(
                      this.parent.filterOptionId,
                      this.isCollapsed
                    ),
                  this.parent.$element.toggleClass(
                    'boost-pfs-filter-option-collapsed'
                  ),
                  this.$clickElement.attr('aria-expanded', !this.isCollapsed),
                  this.isCollapsed
                    ? this.$toggleElement.addClass('toggled')
                    : (this.$toggleElement.show(),
                      this.$toggleElement.removeClass('toggled'),
                      !u.a.isMobile() &&
                        o.a.getSettingValue('general.stickyFilterOnDesktop') &&
                        this.parent.parent.parent.stickyFilterDesktop()),
                  this.afterToggle();
              },
            },
            {
              key: 'onToggleHorizontal',
              value: function () {
                var t = !this.isCollapsed;
                this.calculateHorizontalColumn();
                var e = this.closeAllHorizontalTabs();
                t ||
                  (e
                    ? (la = this.parent.filterOptionId)
                    : ((la = ''),
                      this.parent.$element.removeClass(
                        'boost-pfs-filter-option-collapsed'
                      ),
                      this.$clickElement.attr('aria-expanded', !0),
                      this.$toggleElement.show(),
                      (this.isCollapsed = !1))),
                  this.afterToggle();
              },
            },
            {
              key: 'onClickOutSideHorizontal',
              value: function (t) {
                if (t && t.target) {
                  var e = i()(t.target);
                  e.closest(s.a.filterTreeHorizontal + ' .' + N.a.filterOption)
                    .length > 0 ||
                    e.closest(s.a.filterTreeHorizontal + ' .' + N.a.clearButton)
                      .length > 0 ||
                    e.closest(
                      s.a.filterTreeHorizontal + ' .' + N.a.clearAllButton
                    ).length > 0 ||
                    this.closeAllHorizontalTabs();
                }
              },
            },
            {
              key: 'closeAllHorizontalTabs',
              value: function () {
                var t = this.parent.parent,
                  e = !1;
                return (
                  t.filterOptions.forEach(function (t) {
                    t.$element &&
                      t.collapse &&
                      !t.collapse.isCollapsed &&
                      (t.$element.addClass('boost-pfs-filter-option-collapsed'),
                      t.$filterOptionTitleElement.attr('aria-expanded', !1),
                      (t.collapse.isCollapsed = !0),
                      t.collapse.$toggleElement.hide(),
                      (t.allNestedFilterItems
                        ? t.allNestedFilterItems
                        : t.filterItems
                      ).forEach(function (n) {
                        e ||
                          (void 0 !== n.isSelected &&
                            n.isAppliedFilter() != n.isSelected &&
                            (e = t));
                      }));
                  }),
                  !!e && (e.applyButton.onApplyOptionValues(), !0)
                );
              },
            },
            { key: 'afterToggle', value: function () {} },
            {
              key: 'calculateHorizontalColumn',
              value: function () {
                var t = this.parent.displayColumn,
                  e = 'left',
                  n = this.parent.$filterOptionTitleElement.offset();
                if (
                  ((1 != t && '1' != t) ||
                    this.parent.displayType !=
                      FilterOptionEnum.DisplayType.RANGE ||
                    (t = 2),
                  n && n.left)
                )
                  switch (t) {
                    case 1:
                    case '1':
                      n.left + 250 > i()(window).width() && (e = 'right');
                      break;
                    case 2:
                    case '2':
                      n.left + 532 > i()(window).width() &&
                        (e = n.left < 532 ? 'center' : 'right');
                      break;
                    case 3:
                    case '3':
                      n.left + 700 > i()(window).width() && (e = 'right');
                  }
                'left' == e
                  ? (this.parent.$element.removeClass(
                      'boost-pfs-filter-option-right'
                    ),
                    this.parent.$element.addClass(
                      'boost-pfs-filter-option-left'
                    ))
                  : 'center' == e
                  ? (this.parent.$element.removeClass(
                      'boost-pfs-filter-option-left'
                    ),
                    this.parent.$element.removeClass(
                      'boost-pfs-filter-option-right'
                    ),
                    this.parent.$element.addClass(
                      'boost-pfs-filter-option-center'
                    ))
                  : (this.parent.$element.removeClass(
                      'boost-pfs-filter-option-left'
                    ),
                    this.parent.$element.addClass(
                      'boost-pfs-filter-option-right'
                    ));
              },
            },
          ]) && na(e.prototype, n),
          r && na(e, r),
          l
        );
      })(d.a),
      la = '',
      sa = new Map(),
      ca = !1,
      ua = aa;
    function pa(t) {
      return (pa =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function fa(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function ha(t, e) {
      return (ha =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function ya(t, e) {
      return !e || ('object' !== pa(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function da(t) {
      return (da = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var ga = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && ha(t, e);
      })(c, t);
      var e,
        n,
        r,
        s = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = da(t);
            if (e()) {
              var i = da(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return ya(this, n);
          };
        })(c);
      function c(t) {
        var e;
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError('Cannot call a class as a function');
        })(this, c),
          ((e = s.call(this)).filterItems = new Map()),
          (e.clearButton = null),
          (e.applyButton = null),
          (e.searchBox = null),
          (e.filterTreeType = t),
          (e.$element = null),
          (e.$filterOptionTitleElement = null),
          (e.$filterOptionContentElement = null),
          (e.$filterItemsContainerElement = null);
        var n = e.filterTreeType == Mr.FilterTreeType.VERTICAL;
        return (
          (e.selector = {
            filterOptionTitle:
              '.' +
              N.a.filterOptionTitle +
              ' .' +
              N.a.filterOptionTitle +
              '-heading',
            filterOptionContent: '.' + N.a.filterOptionContent,
            filterItemsContainer: 'ul',
            clearButtonContainer: n
              ? '.' + N.a.filterOptionTitle
              : '.' + N.a.filterOptionContent,
            applyButtonContainer: '.' + N.a.filterOptionContent,
            viewMoreContainer: '.' + N.a.filterOptionContent,
            searchBoxContainer: '.' + N.a.filterOptionContent,
            tooltipContainer:
              '.' +
              N.a.filterOptionTitle +
              ' .' +
              N.a.filterOptionTitle +
              '-heading',
            numberFilterItemsContainer: '.' + N.a.filterOptionTitle + '-count',
          }),
          e
        );
      }
      return (
        (e = c),
        (n = [
          {
            key: 'init',
            value: function () {
              (this.collapse = new ua(this.filterTreeType)),
                this.addComponent(this.collapse),
                (this.clearButton = new qr(
                  this.filterTreeType,
                  qr.ClearType.CLEAR_OPTION_VALUES
                )),
                this.addComponent(this.clearButton),
                (this.applyButton = new Jr(
                  this.filterTreeType,
                  Jr.ApplyType.APPLY_OPTION_VALUES
                )),
                this.addComponent(this.applyButton),
                (this.viewMore = new io(this.filterTreeType)),
                this.addComponent(this.viewMore),
                (this.scrollbar = new _o()),
                this.addComponent(this.scrollbar),
                (this.searchBox = new uo()),
                this.addComponent(this.searchBox),
                (this.filterTooltip = new mo(this.tooltip)),
                this.addComponent(this.filterTooltip);
            },
          },
          {
            key: 'getTemplate',
            value: function () {
              switch (this.filterTreeType) {
                case 'vertical':
                  return '\n\t\t\t\t<div class="{{class.filterOption}} {{blockTypeClass}} {{blockId}} {{class.filterScrollbar}} {{displayColumn}}">\n\t\t\t\t\t<div class="{{class.filterOptionTitle}}">\n\t\t\t\t\t\t<button aria-controls="{{ada.filterOptionDomId}}" aria-label="{{ada.filterOptionTitle}}" tabindex="0" class="{{class.button}} {{class.filterOptionTitle}}-heading">\n\t\t\t\t\t\t\t<span class="{{class.filterOptionTitle}}-text">\n\t\t\t\t\t\t\t\t{{blockTitle}}\n\t\t\t\t\t\t\t\t<span class="{{class.filterOptionTitle}}-count">\n\t\t\t\t\t\t\t\t\t{{numberAppliedFilterItems}}\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t{{tooltip}}\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<p class="boost-pfs-filter-selected-items-mobile"></p>\n\t\t\t\t\t\t{{clearButton}}\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="{{class.filterOptionContent}}">\n\t\t\t\t\t\t{{searchBox}}\n\t\t\t\t\t\t<div class="{{class.filterOptionContentInner}}">\n\t\t\t\t\t\t\t{{blockContent}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t{{viewMore}}\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t'.trim();
                case 'horizontal':
                  return '\n\t\t\t\t<div class="{{class.filterOption}} {{blockTypeClass}} {{blockId}} {{class.filterScrollbar}} {{displayColumn}}">\n\t\t\t\t\t<div class="{{class.filterOptionTitle}}">\n\t\t\t\t\t\t<button aria-controls="{{ada.filterOptionDomId}}" aria-label="{{ada.filterOptionTitle}}" tabindex="0" class="{{class.button}} {{class.filterOptionTitle}}-heading">\n\t\t\t\t\t\t\t<span class="{{class.filterOptionTitle}}-text">\n\t\t\t\t\t\t\t{{blockTitle}}\n\t\t\t\t\t\t\t\t<span class="{{class.filterOptionTitle}}-count">\n\t\t\t\t\t\t\t\t\t{{numberAppliedFilterItems}}\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t{{tooltip}}\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="{{class.filterOptionContent}}">\n\t\t\t\t\t\t<div class="{{class.filterOptionContentInner}}">\n\t\t\t\t\t\t\t{{blockContent}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t{{viewMore}}\n\t\t\t\t\t\t{{applyButton}}\n\t\t\t\t\t\t{{clearButton}}\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t'.trim();
                default:
                  console.warn('filterTreeType is wrong');
              }
            },
          },
          {
            key: 'getBlockContentTemplate',
            value: function () {
              console.warn('Override this method');
            },
          },
          {
            key: 'compileBlockContentTemplate',
            value: function () {
              return this.getBlockContentTemplate();
            },
          },
          {
            key: 'compileTemplate',
            value: function () {
              var t = u.a.slugify(u.a.stripHtml(this.label)),
                e = u.a.slugify(this.displayType.replace(/_/g, '-')),
                n = _o.isEnabled(
                  this.displayType,
                  this.filterType,
                  this.showMoreType
                )
                  ? N.a.filterHasScrollbar
                  : N.a.filterNoScrollbar,
                r = 'boost-pfs-filter-option-column-' + this.displayColumn;
              return this.getTemplate()
                .replace(/{{blockTitle}}/g, u.a.stripHtml(this.label))
                .replace(/{{blockTypeClass}}/g, N.a.filterOption + '-' + e)
                .replace(/{{blockId}}/g, N.a.filterOption + '-' + t)
                .replace(
                  /{{blockContent}}/g,
                  this.compileBlockContentTemplate()
                )
                .replace(
                  /{{blockContentId}}/g,
                  N.a.filterOptionContent + '-' + t
                )
                .replace(/{{displayColumn}}/g, r)
                .replace(/{{class.filterOption}}/g, N.a.filterOption)
                .replace(
                  /{{class.filterOptionContent}}/g,
                  N.a.filterOptionContent
                )
                .replace(
                  /{{class.filterOptionContentInner}}/g,
                  N.a.filterOptionContentInner
                )
                .replace(/{{class.filterOptionTitle}}/g, N.a.filterOptionTitle)
                .replace(/{{class.filterScrollbar}}/g, n)
                .replace(
                  /{{class.filterOptionItemList}}/g,
                  N.a.filterOptionItemList
                )
                .replace(
                  /{{class.filterOptionItemListSingleList}}/g,
                  N.a.filterOptionItemListSingleList
                )
                .replace(
                  /{{class.filterOptionItemListMultipleList}}/g,
                  N.a.filterOptionItemListMultipleList
                )
                .replace(
                  /{{class.filterOptionItemListBox}}/g,
                  N.a.filterOptionItemListBox
                )
                .replace(
                  /{{class.filterOptionItemListSwatch}}/g,
                  N.a.filterOptionItemListSwatch
                )
                .replace(
                  /{{class.filterOptionItemListRating}}/g,
                  N.a.filterOptionItemListRating
                )
                .replace(
                  /{{class.filterOptionMultiLevelTag}}/g,
                  N.a.filterOptionMultiLevelTag
                )
                .replace(
                  /{{class.filterOptiontemListMultiLevelCollections}}/g,
                  N.a.filterOptiontemListMultiLevelCollections
                )
                .replace(/{{class.button}}/g, N.a.button)
                .replace(
                  /{{ada.filterOptionTitle}}/g,
                  a.a.ada.filterOptionTitle.replace(
                    '{{filterOption}}',
                    u.a.stripHtml(this.label)
                  )
                )
                .replace(
                  /{{ada.filterOptionDomId}}/g,
                  this.parent.id + '-' + this.filterOptionId.replace(/_/g, '-')
                )
                .replace(/{{tooltip}}/g, '')
                .replace(/{{clearButton}}/g, '')
                .replace(/{{applyButton}}/g, '')
                .replace(/{{searchBox}}/g, '')
                .replace(/{{viewMore}}/g, '')
                .replace(/{{filterItems}}/g, '')
                .replace(/\n/g, '')
                .replace(/\t/g, '');
            },
          },
          {
            key: 'isRender',
            value: function () {
              if (this.status == pr.a.Status.ACTIVE) {
                var t = o.a.getSettingValue('general.showSingleOption'),
                  e = 0,
                  n =
                    this.displayType ==
                      pr.a.DisplayType.MULTI_LEVEL_COLLECTIONS ||
                    this.displayType == pr.a.DisplayType.MULTI_LEVEL_TAG;
                return (
                  this.filterItems.forEach(function (t) {
                    t.$element &&
                      t.$element.length &&
                      (e++,
                      n &&
                        Array.isArray(t.children) &&
                        t.children.length > 0 &&
                        (e += t.children.length));
                  }),
                  t ? e > 1 : e > 0
                );
              }
              return !1;
            },
          },
          {
            key: 'isBindEvents',
            value: function () {
              return !this.isBoundEvent;
            },
          },
          {
            key: 'render',
            value: function () {
              var t = this;
              if (!this.$element) {
                (this.$element = i()(this.compileTemplate())),
                  (this.$filterOptionContentElement = this.$element.find(
                    this.selector.filterOptionContent
                  )),
                  (this.$filterOptionTitleElement = this.$element.find(
                    this.selector.filterOptionTitle
                  )),
                  (this.$filterItemsContainerElement = this.$element
                    .find(this.selector.filterItemsContainer)
                    .html('')),
                  this.filterItems.forEach(function (e) {
                    e.isRenderOnScroll ||
                      t.$filterItemsContainerElement.append(e.$element);
                  }),
                  this.$element
                    .find(this.selector.searchBoxContainer)
                    .prepend(this.searchBox.$element),
                  this.$element
                    .find(this.selector.viewMoreContainer)
                    .append(this.viewMore.$element),
                  this.$element
                    .find(this.selector.applyButtonContainer)
                    .append(this.applyButton.$element),
                  this.$element
                    .find(this.selector.clearButtonContainer)
                    .append(this.clearButton.$element);
                var e = this.$element.find(this.selector.tooltipContainer);
                e.append(this.filterTooltip.$element),
                  e.append(this.filterTooltip.$popupElement),
                  this.collapse.isCollapsed &&
                    (this.$element.addClass(
                      'boost-pfs-filter-option-collapsed'
                    ),
                    this.$filterOptionContentElement.addClass('toggled'),
                    this.$filterOptionContentElement.hide()),
                  this.$filterOptionContentElement.attr(
                    'id',
                    u.a.stripHtml(
                      this.parent.id +
                        '-' +
                        this.filterOptionId.replace(/_/g, '-')
                    )
                  );
              }
              (this.numberAppliedFilterItems =
                this.getNumberAppliedFilterItems()),
                this.$element
                  .find(this.selector.numberFilterItemsContainer)
                  .html(
                    u.a.stripHtml(
                      this.numberAppliedFilterItems > 0
                        ? this.numberAppliedFilterItems
                        : ''
                    )
                  );
            },
          },
          {
            key: 'getNumberAppliedFilterItems',
            value: function () {
              var t = 0,
                e = [
                  pr.a.DisplayType.LIST,
                  pr.a.DisplayType.BOX,
                  pr.a.DisplayType.SWATCH,
                  pr.a.DisplayType.RATING,
                  pr.a.DisplayType.MULTI_LEVEL_TAG,
                ];
              return (
                this.filterItems &&
                  e.includes(this.displayType) &&
                  this.filterItems.forEach(function (e) {
                    e.isSelected && t++;
                  }),
                t
              );
            },
          },
          {
            key: 'setData',
            value: function (t) {
              var e = this;
              (this.status = t.status),
                (this.position = t.position),
                (this.label = u.a.stripHtml(t.label)),
                (this.filterOptionId = t.filterOptionId),
                (this.filterType = t.filterType),
                (this.displayType = t.displayType),
                (this.selectType = t.selectType),
                (this.valueType = t.valueType),
                (this.displayTypeItem = t.displayTypeItem),
                (this.manualValues = t.manualValues ? t.manualValues : []),
                (this.prefix = t.prefix),
                (this.isCollapsePC = t.isCollapsePC),
                (this.isCollapseMobile = t.isCollapseMobile),
                (this.showSearchBoxFilterPC = t.showSearchBoxFilterPC),
                (this.showSearchBoxFilterMobile = t.showSearchBoxFilterMobile),
                (this.keepValuesStatic = t.keepValuesStatic),
                (this.activeCollectionAll = t.activeCollectionAll),
                (this.tooltip = t.tooltip),
                (this.showMoreType =
                  null == t.showMoreType || '' == t.showMoreType
                    ? pr.a.ShowMoreType.SCROLLBAR
                    : t.showMoreType),
                (this.sortType = t.sortType),
                (this.sortManualValues = t.sortManualValues),
                (this.displayAllValuesInUppercaseForm =
                  t.displayAllValuesInUppercaseForm),
                (this.useAndCondition = t.useAndCondition),
                (this.showExactRating = t.showExactRating),
                (this.excludePriceFromValue = t.excludePriceFromValue),
                (this.starColor = u.a.stripHtml(t.starColor)),
                (this.displayColumn = t.displayColumn
                  ? t.displayColumn
                  : o.a.getSettingValue('general.filterHorizontalColumn')),
                (this.filterTreeHorizontalStyle = o.a.getSettingValue(
                  'general.filterTreeHorizontalStyle'
                )),
                'style1' == this.filterTreeHorizontalStyle
                  ? (this.displayColumn = '1')
                  : 'style2' == this.filterTreeHorizontalStyle
                  ? (this.displayColumn = '2')
                  : 'style3' == this.filterTreeHorizontalStyle &&
                    (this.displayColumn = 'full'),
                (this.swatchStyle = t.swatchStyle),
                (this.shortenPipsRange = t.shortenPipsRange),
                t.inventoryBaseSelectedLocations &&
                  ((this.inventoryBaseSelectedLocations =
                    t.inventoryBaseSelectedLocations),
                  (l.a.inventoryBaseSelectedLocations =
                    t.inventoryBaseSelectedLocations)),
                t.filterType == pr.a.FilterType.LOCATION &&
                  (l.a.hasFilterByLocation = !0),
                (this.children = []),
                (this.filterItems = new Map());
              var n = [];
              t.values
                ? (n = Array.isArray(t.values) ? t.values : [t.values])
                : t.manualValues &&
                  (n = Array.isArray(t.manualValues)
                    ? t.manualValues
                    : [t.manualValues]),
                this.isSortValues() && this.sortValues(n),
                this.modifyValues(n),
                this.markValuesAsNoRender(n),
                n.forEach(function (t) {
                  var n = null;
                  switch (e.displayType) {
                    case pr.a.DisplayType.LIST:
                      n = new ci(e.filterTreeType);
                      break;
                    case pr.a.DisplayType.BOX:
                      n = new mi(e.filterTreeType);
                      break;
                    case pr.a.DisplayType.SWATCH:
                      n = new _i(e.filterTreeType);
                      break;
                    case pr.a.DisplayType.RATING:
                      n = new xi(e.filterTreeType);
                      break;
                    case pr.a.DisplayType.RANGE:
                      n = new Yi(e.filterTreeType);
                      break;
                    case pr.a.DisplayType.SUB_CATEGORY:
                      n = new Ni(e.filterTreeType);
                      break;
                    case pr.a.DisplayType.MULTI_LEVEL_COLLECTIONS:
                      n = new Vo(e.filterTreeType);
                      break;
                    case pr.a.DisplayType.MULTI_LEVEL_TAG:
                      n = new ta(e.filterTreeType);
                  }
                  if (n) {
                    e.addComponent(n), n.setData(t);
                    var r = n.key ? n.key : n.value;
                    e.filterItems.set(r, n);
                  }
                });
            },
          },
          {
            key: 'isSortValues',
            value: function () {
              if (
                [
                  pr.a.FilterType.REVIEW_RATINGS,
                  pr.a.FilterType.PERCENT_SALE,
                ].includes(this.filterType)
              )
                return !0;
              var t = [pr.a.FilterType.STOCK],
                e = [
                  pr.a.DisplayType.RANGE,
                  pr.a.DisplayType.MULTI_LEVEL_COLLECTIONS,
                ],
                n = this.valueType == pr.a.ValueType.ALL,
                r =
                  this.valueType != pr.a.ValueType.ALL &&
                  (this.sortManualValues ||
                    o.a.getSettingValue('general.sortManualValues')),
                i =
                  this.displayType == pr.a.DisplayType.RANGE &&
                  0 == this.isNumberRangeSlider;
              return (
                !t.includes(this.filterType) &&
                (!e.includes(this.displayType) || i) &&
                (n || r)
              );
            },
          },
          {
            key: 'sortValues',
            value: function (t) {
              var e = this.sortType
                  ? this.sortType
                  : pr.a.SortType.KEY_ASCENDING,
                n = e.split('-')[0],
                r = 'key' == n ? 'doc_count' : 'key';
              this.filterType == pr.a.FilterType.COLLECTION &&
                'key' == n &&
                (n = 'label'),
                t &&
                  t.length > 0 &&
                  t.sort(
                    function (t, e) {
                      var i = -1;
                      if (null != t[n] && null != e[n]) {
                        var o = t[n].toString().toLowerCase(),
                          a = e[n].toString().toLowerCase();
                        if (
                          0 == (i = this.naturalSortFunction(o, a)) &&
                          null != t[r] &&
                          null != e[r]
                        ) {
                          var l = t[r].toString().toLowerCase(),
                            s = e[r].toString().toLowerCase();
                          i = this.naturalSortFunction(l, s);
                        }
                      }
                      return i;
                    }.bind(this)
                  ),
                (e.indexOf('desc') > -1 ||
                  (e.startsWith('alpha') &&
                    (this.filterType == pr.a.FilterType.REVIEW_RATINGS ||
                      this.filterType == pr.a.FilterType.PERCENT_SALE))) &&
                  t.reverse();
            },
          },
          {
            key: 'naturalSortFunction',
            value: function (t, e) {
              function n(t) {
                for (
                  var e, n, r = [], i = 0, o = -1, a = 0;
                  (e = (n = t.charAt(i++)).charCodeAt(0));

                ) {
                  var l = 46 == e || (e >= 48 && e <= 57);
                  l !== a && ((r[++o] = ''), (a = l)), (r[o] += n);
                }
                return r;
              }
              for (var r = n(t), i = n(e), o = 0; r[o] && i[o]; o++)
                if (r[o] !== i[o]) {
                  var a = Number(r[o]),
                    l = Number(i[o]);
                  return a == r[o] && l == i[o] ? a - l : r[o] > i[o] ? 1 : -1;
                }
              return r.length - i.length;
            },
          },
          {
            key: 'modifyValues',
            value: function (t) {
              if (this.filterType == pr.a.FilterType.COLLECTION) {
                if (
                  this.activeCollectionAll &&
                  !t.some(function (t) {
                    return 'all' == t.handle;
                  })
                ) {
                  var e = { key: '0', label: a.a.collectionAll, handle: 'all' };
                  t.unshift(e);
                }
                if (
                  (t.forEach(function (t) {
                    t.sort_order &&
                      (t.sort_order.endsWith('-desc')
                        ? (t.sort_order = t.sort_order.replace(
                            /-desc$/,
                            '-descending'
                          ))
                        : t.sort_order.endsWith('-asc') &&
                          (t.sort_order = t.sort_order.replace(
                            /-asc$/,
                            '-ascending'
                          )),
                      t.sort_order.startsWith('alpha') &&
                        (t.sort_order = t.sort_order.replace(
                          /alpha/,
                          'title'
                        )));
                  }),
                  !this.keepValuesStatic &&
                    !o.a.getSettingValue('general.showOutOfStockOption'))
                )
                  for (var n = t.length - 1; n >= 0; n--)
                    0 == t[n].doc_count && t.splice(n, 1);
              }
            },
          },
          {
            key: 'markValuesAsNoRender',
            value: function (t) {
              var e = o.a.getSettingValue('general.scrollFirstLoadLength'),
                n = [pr.a.DisplayType.LIST];
              Array.isArray(t) &&
                t.length > e &&
                n.includes(this.displayType) &&
                _o.isEnabled(
                  this.displayType,
                  this.filterType,
                  this.showMoreType
                ) &&
                ((this.isLoadMoreOnScroll = !0),
                t.forEach(function (t, n) {
                  t.isRenderOnScroll = n >= e;
                }));
            },
          },
        ]) && fa(e.prototype, n),
        r && fa(e, r),
        c
      );
    })(d.a);
    function ma(t) {
      return (ma =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function ba(t, e) {
      if (!(t instanceof e))
        throw new TypeError('Cannot call a class as a function');
    }
    function va(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function Sa(t, e, n) {
      return (Sa =
        'undefined' != typeof Reflect && Reflect.get
          ? Reflect.get
          : function (t, e, n) {
              var r = (function (t, e) {
                for (
                  ;
                  !Object.prototype.hasOwnProperty.call(t, e) &&
                  null !== (t = Pa(t));

                );
                return t;
              })(t, e);
              if (r) {
                var i = Object.getOwnPropertyDescriptor(r, e);
                return i.get ? i.get.call(n) : i.value;
              }
            })(t, e, n || t);
    }
    function Ta(t, e) {
      return (Ta =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function Oa(t, e) {
      return !e || ('object' !== ma(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function Pa(t) {
      return (Pa = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var wa = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && Ta(t, e);
      })(o, t);
      var e,
        n,
        r,
        i = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = Pa(t);
            if (e()) {
              var i = Pa(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return Oa(this, n);
          };
        })(o);
      function o() {
        return ba(this, o), i.apply(this, arguments);
      }
      return (
        (e = o),
        (n = [
          {
            key: 'getBlockContentTemplate',
            value: function () {
              return this.selectType == pr.a.SelectType.SINGLE
                ? '\n\t\t\t\t<ul class="{{class.filterOptionItemList}} {{class.filterOptionItemListSingleList}}">\n\t\t\t\t\t{{filterItems}}\n\t\t\t\t</ul>\n\t\t\t'.trim()
                : '\n\t\t\t\t<ul class="{{class.filterOptionItemList}} {{class.filterOptionItemListMultipleList}}">\n\t\t\t\t\t{{filterItems}}\n\t\t\t\t</ul>\n\t\t\t'.trim();
            },
          },
          {
            key: 'prepareFilterOptionData',
            value: function (t) {
              if (
                ('price' == t.filterType || 'variants_price' == t.filterType) &&
                t.values &&
                Array.isArray(t.values) &&
                !t.isConvertedPrice &&
                u.a.isEnableShopifyMultipleCurrencies() &&
                u.a.isConvertCurrenciesOnFrontEnd()
              ) {
                for (var e = 0; e < t.values.length; e++) {
                  var n = !1,
                    r = !1;
                  t.values[e].hasOwnProperty('to') &&
                    ((n = !0),
                    (t.values[e].to = u.a.convertPriceBasedOnActiveCurrency(
                      t.values[e].to
                    ))),
                    t.values[e].hasOwnProperty('from') &&
                      ((r = !0),
                      (t.values[e].from = u.a.convertPriceBasedOnActiveCurrency(
                        t.values[e].from
                      ))),
                    (t.values[e].key =
                      n && r
                        ? t.values[e].from + '-' + t.values[e].to
                        : n
                        ? '*-' + t.values[e].to
                        : t.values[e].from + '-*');
                }
                t.isConvertedPrice = !0;
              }
              return t;
            },
          },
          {
            key: 'setData',
            value: function (t) {
              (t = this.prepareFilterOptionData(t)),
                Sa(Pa(o.prototype), 'setData', this).call(this, t);
            },
          },
        ]) && va(e.prototype, n),
        r && va(e, r),
        o
      );
    })(ga);
    function _a(t) {
      return (_a =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function Ca(t, e) {
      if (!(t instanceof e))
        throw new TypeError('Cannot call a class as a function');
    }
    function ka(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function Ea(t, e) {
      return (Ea =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function Ra(t, e) {
      return !e || ('object' !== _a(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function Ia(t) {
      return (Ia = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var La = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && Ea(t, e);
      })(a, t);
      var e,
        n,
        r,
        i = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = Ia(t);
            if (e()) {
              var i = Ia(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return Ra(this, n);
          };
        })(a);
      function a() {
        return Ca(this, a), i.apply(this, arguments);
      }
      return (
        (e = a),
        (n = [
          {
            key: 'getBlockContentTemplate',
            value: function () {
              return '\n\t\t\t<ul class="{{class.filterOptionItemList}} {{class.filterOptionItemListBox}}">{{filterItems}}</ul>\n\t\t'.trim();
            },
          },
          {
            key: 'calculateBoxItemSize',
            value: function () {
              if (!o.a.getSettingValue('general.enableFilterOptionBoxStyle'))
                return '';
              var t = this.$element ? this.$element.width() : 0;
              if (!t || t < 0) return '100%';
              if (!this.boxItemSize) {
                var e = 4,
                  n =
                    o.a.getSettingValue('general.filterOptionBoxCharWidth') ||
                    14;
                this.filterItems.forEach(function (t) {
                  var r = u.a.stripHtml(t.label).length * n;
                  e = Math.max(r, e);
                });
                var r =
                  100 / (Math.floor(this.$element.width() / (e + 8)) || 1) - 2;
                r < 1 && (r = 100), (this.boxItemSize = r + '%');
              }
              return this.boxItemSize;
            },
          },
        ]) && ka(e.prototype, n),
        r && ka(e, r),
        a
      );
    })(ga);
    function Aa(t) {
      return (Aa =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function xa(t, e) {
      if (!(t instanceof e))
        throw new TypeError('Cannot call a class as a function');
    }
    function Fa(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function Ba(t, e) {
      return (Ba =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function Da(t, e) {
      return !e || ('object' !== Aa(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function $a(t) {
      return ($a = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var ja = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && Ba(t, e);
      })(a, t);
      var e,
        n,
        r,
        i = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = $a(t);
            if (e()) {
              var i = $a(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return Da(this, n);
          };
        })(a);
      function a() {
        return xa(this, a), i.apply(this, arguments);
      }
      return (
        (e = a),
        (n = [
          {
            key: 'getBlockContentTemplate',
            value: function () {
              return '\n\t\t\t<ul class="{{class.filterOptionItemList}} {{class.filterOptionItemListSwatch}} {{swatchStyle}}">\n\t\t\t\t{{filterItems}}\n\t\t\t</ul>\n\t\t'.trim();
            },
          },
          {
            key: 'compileBlockContentTemplate',
            value: function () {
              return (
                (this.swatchStyle = this.buildSwatchStyle()),
                this.getBlockContentTemplate().replace(
                  /{{swatchStyle}}/g,
                  this.swatchStyle
                )
              );
            },
          },
          {
            key: 'buildSwatchStyle',
            value: function () {
              var t = this.swatchStyle;
              return (
                t ||
                (this.filterTreeType == Mr.FilterTreeType.HORIZONTAL ||
                (u.a.isMobile() &&
                  'style2' ==
                    o.a.getSettingValue('general.filterTreeMobileStyle'))
                  ? 'circle-list'
                  : 'circle-grid')
              );
            },
          },
        ]) && Fa(e.prototype, n),
        r && Fa(e, r),
        a
      );
    })(ga);
    function Ma(t) {
      return (Ma =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function Va(t, e) {
      if (!(t instanceof e))
        throw new TypeError('Cannot call a class as a function');
    }
    function Na(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function Ha(t, e) {
      return (Ha =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function Ua(t, e) {
      return !e || ('object' !== Ma(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function Wa(t) {
      return (Wa = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var qa = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && Ha(t, e);
      })(o, t);
      var e,
        n,
        r,
        i = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = Wa(t);
            if (e()) {
              var i = Wa(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return Ua(this, n);
          };
        })(o);
      function o() {
        return Va(this, o), i.apply(this, arguments);
      }
      return (
        (e = o),
        (n = [
          {
            key: 'getBlockContentTemplate',
            value: function () {
              return this.selectType == pr.a.SelectType.MULTIPLE &&
                this.showExactRating
                ? '\n\t\t\t\t<ul class="{{class.filterOptionItemList}} {{class.filterOptionItemListRating}} {{class.filterOptionItemListMultipleList}}">\n\t\t\t\t\t{{filterItems}}\n\t\t\t\t</ul>\n\t\t\t'.trim()
                : '\n\t\t\t\t<ul class="{{class.filterOptionItemList}} {{class.filterOptionItemListRating}}">\n\t\t\t\t\t{{filterItems}}\n\t\t\t\t</ul>\n\t\t\t'.trim();
            },
          },
        ]) && Na(e.prototype, n),
        r && Na(e, r),
        o
      );
    })(ga);
    function Ga(t) {
      return (Ga =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function za(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function Ka(t, e) {
      return (Ka =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function Ya(t, e) {
      return !e || ('object' !== Ga(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function Qa(t) {
      return (Qa = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var Ja = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && Ka(t, e);
      })(l, t);
      var e,
        n,
        r,
        o = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = Qa(t);
            if (e()) {
              var i = Qa(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return Ya(this, n);
          };
        })(l);
      function l(t) {
        var e;
        return (
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, l),
          ((e = o.call(this)).filterTreeType = t),
          (e.$element = null),
          e
        );
      }
      return (
        (e = l),
        (n = [
          {
            key: 'init',
            value: function () {
              (this.clearButton = new qr(
                this.filterTreeType,
                qr.ClearType.CLEAR_SINGLE_VALUE
              )),
                this.addComponent(this.clearButton);
            },
          },
          {
            key: 'getTemplate',
            value: function () {
              switch (this.filterTreeType) {
                case Mr.FilterTreeType.VERTICAL:
                  return '\n\t\t\t\t\t<div class="refine-by-item {{class.filterOptionLabel}}">\n\t\t\t\t\t\t{{clearButton}}\n\t\t\t\t\t</div>\n\t\t\t\t'.trim();
                case Mr.FilterTreeType.HORIZONTAL:
                  return '\n\t\t\t\t\t<div class="refine-by-item">\n\t\t\t\t\t\t{{clearButton}}\n\t\t\t\t\t</div>\n\t\t\t\t'.trim();
                default:
                  console.warn('Wrong filterTreeType');
              }
            },
          },
          {
            key: 'compileTemplate',
            value: function () {
              return this.getTemplate()
                .trim()
                .replace(/{{class.filterOptionLabel}}/g, N.a.filterOptionLabel)
                .replace(
                  /{{type}}/g,
                  this.type ? u.a.stripHtml(this.type + ': ') : ''
                )
                .replace(/{{label}}/g, u.a.stripHtml(this.label))
                .replace(/{{clearButton}}/g, '');
            },
          },
          {
            key: 'isRender',
            value: function () {
              return '' != this.label;
            },
          },
          {
            key: 'render',
            value: function () {
              (this.$element = i()(this.compileTemplate())),
                this.$element.append(this.clearButton.$element);
            },
          },
          {
            key: 'setData',
            value: function (t, e, n) {
              (this.filterOption = t),
                (this.filterItem = e),
                (this.filterOptionId = t.filterOptionId),
                (this.filterItemId = n),
                (this.type = u.a.stripHtml(t.label)),
                (this.label = u.a.stripHtml(this.buildLabel()));
            },
          },
          {
            key: 'buildLabel',
            value: function () {
              var t = this.filterItemId;
              if (this.filterOption)
                switch (this.filterOption.displayType) {
                  case pr.a.DisplayType.RANGE:
                    t = this.buildLabelRange();
                    break;
                  case pr.a.DisplayType.RATING:
                    t = this.buildLabelRating();
                    break;
                  case pr.a.DisplayType.MULTI_LEVEL_COLLECTIONS:
                  case pr.a.DisplayType.MULTI_LEVEL_TAG:
                    t = this.buildLabelMultiLevel();
                    break;
                  default:
                    if (this.filterItem)
                      t = u.a.stripHtml(this.filterItem.label);
                    else {
                      var e = new ri(this.filterOption.filterTreeType);
                      (e.filterOption = this.filterOption),
                        (e.label = u.a.stripHtml(this.filterItemId)),
                        (t = u.a.stripHtml(e.buildLabel()));
                    }
                }
              return u.a.stripHtml(t);
            },
          },
          {
            key: 'buildLabelRating',
            value: function () {
              var t = '';
              if (this.filterItem) {
                var e = this.filterItem.from;
                (t = Math.ceil(e) + ' '),
                  1 == Math.ceil(e)
                    ? (t += a.a.ratingStar)
                    : (t += a.a.ratingStars),
                  this.filterOption.showExactRating ||
                    (t += ' ' + a.a.ratingUp);
              }
              return t;
            },
          },
          {
            key: 'buildLabelRange',
            value: function () {
              var t = '';
              if (this.filterOption)
                if (this.filterOption.isNumberRangeSlider) {
                  if ((i = this.filterItemId.split(':')) && 2 == i.length) {
                    var e = this.filterOption.buildLabel(i[0]),
                      n = this.filterOption.buildLabel(i[1]);
                    if (
                      'price' === this.filterOption.filterType ||
                      'variants_price' === this.filterOption.filterType
                    ) {
                      var r = Globals.moneyFormat
                        .replace(/{{.+}}/g, '')
                        .replace('&#36;', '$');
                      -1 === e.indexOf(r) && ((e = r + e), (n = r + n));
                    }
                    t = e == n ? e : e + ' - ' + n;
                  }
                } else {
                  var i = this.filterItemId;
                  if (
                    ((e = ''),
                    (n = ''),
                    this.filterOption.currentMax - 1 > 0 &&
                    this.filterOption.currentMax - 1 <
                      this.filterOption.valuesData.length
                      ? ((e =
                          this.filterOption.valuesData[
                            this.filterOption.currentMin
                          ].key),
                        (n =
                          this.filterOption.valuesData[
                            this.filterOption.currentMax - 1
                          ].key))
                      : Array.isArray(i) &&
                        i.length > 0 &&
                        ((e = i[0]), (n = i[i.length - 1])),
                    this.filterOption.prefix)
                  ) {
                    var o = this.filterOption.prefix.replace(/\\/g, '');
                    (e = e.replace(o, '').trim()),
                      (n = n.replace(o, '').trim());
                  }
                  t = e == n ? e : e + ' - ' + n;
                }
              return t;
            },
          },
          {
            key: 'buildLabelMultiLevel',
            value: function () {
              var t = '';
              if (
                this.filterOption &&
                this.filterItem &&
                (this.filterOption.displayType ==
                  pr.a.DisplayType.MULTI_LEVEL_COLLECTIONS ||
                  this.filterOption.displayType ==
                    pr.a.DisplayType.MULTI_LEVEL_TAG)
              )
                switch (this.filterItem.level) {
                  case 1:
                    (this.type = u.a.stripHtml(this.filterOption.label)),
                      (t = u.a.stripHtml(this.filterItem.buildLabel()));
                    break;
                  case 2:
                  case 3:
                    (this.filterOptionId = this.filterOptionId.replace(
                      Globals.prefix + '_c_',
                      Globals.prefix + '_ct_'
                    )),
                      (this.type = u.a.stripHtml(this.filterOption.label)),
                      (t = u.a.stripHtml(this.filterItem.buildLabel()));
                }
              var e = t || this.filterItemId;
              return (
                isNaN(e) || 1 != this.filterItem.level || (e = ''),
                u.a.stripHtml(e)
              );
            },
          },
        ]) && za(e.prototype, n),
        r && za(e, r),
        l
      );
    })(d.a);
    function Xa(t) {
      return (Xa =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function Za(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function tl(t, e) {
      return (tl =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function el(t, e) {
      return !e || ('object' !== Xa(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function nl(t) {
      return (nl = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var rl = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && tl(t, e);
      })(c, t);
      var e,
        n,
        r,
        o = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = nl(t);
            if (e()) {
              var i = nl(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return el(this, n);
          };
        })(c);
      function c(t) {
        var e;
        return (
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, c),
          ((e = o.call(this)).refineByItems = []),
          (e.clearAllButton = null),
          (e.filterTreeType = t),
          (e.$element = null),
          e
        );
      }
      return (
        (e = c),
        (n = [
          {
            key: 'init',
            value: function () {
              Settings.getSettingValue('general.separateRefineByFromFilter') &&
                (i()(s.a.filterRefineByHorizontal).length > 0
                  ? (this.filterTreeType = Mr.FilterTreeType.HORIZONTAL)
                  : i()(s.a.filterRefineByVertical).length > 0 &&
                    (this.filterTreeType = Mr.FilterTreeType.VERTICAL)),
                (this.clearAllButton = new qr(
                  this.filterTreeType,
                  qr.ClearType.CLEAR_ALL
                )),
                this.addComponent(this.clearAllButton);
            },
          },
          {
            key: 'getTemplate',
            value: function () {
              switch (this.filterTreeType) {
                case Mr.FilterTreeType.VERTICAL:
                  return '\n\t\t\t\t\t<div class="{{class.filterRefineBy}}">\n\t\t\t\t\t\t<div class="{{class.filterOptionTitle}}">\n\t\t\t\t\t\t\t<div class="{{class.filterOptionTitle}}-heading" role="heading" aria-level="2"><span>{{label}}</span></div>\n\t\t\t\t\t\t\t{{clearAllButton}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="{{class.filterSelectedItems}}">{{refineByItems}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t'.trim();
                case Mr.FilterTreeType.HORIZONTAL:
                  return '\n\t\t\t\t\t<div class="boost-pfs-filter-pc {{class.filterRefineBy}}">\n\t\t\t\t\t\t<span>{{label}}</span>\n\t\t\t\t\t\t<div class="{{class.filterSelectedItems}}">{{refineByItems}}</div>\n\t\t\t\t\t\t{{clearAllButton}}\n\t\t\t\t\t</div>\n\t\t\t\t'.trim();
                default:
                  console.warn('Wrong filterTreeType');
              }
            },
          },
          {
            key: 'compileTemplate',
            value: function () {
              return this.getTemplate()
                .replace(/{{class.filterRefineBy}}/g, N.a.filterRefineBy)
                .replace(/{{class.filterOptionTitle}}/g, N.a.filterOptionTitle)
                .replace(
                  /{{class.filterSelectedItems}}/g,
                  N.a.filterSelectedItems
                )
                .replace(/{{label}}/g, a.a.refine)
                .replace(/{{refineByItems}}/g, '')
                .replace(/{{clearAllButton}}/g, '');
            },
          },
          {
            key: 'render',
            value: function () {
              var t = this;
              this.refineByItems && this.refineByItems.length > 0
                ? ((this.$element = i()(this.compileTemplate())),
                  (this.$refineByItemsContainer = this.$element.find(
                    '.' + N.a.filterSelectedItems
                  )),
                  this.refineByItems.forEach(function (e) {
                    t.$refineByItemsContainer.append(e.$element);
                  }),
                  (this.$clearAllButtonContainer =
                    this.filterTreeType == Mr.FilterTreeType.VERTICAL
                      ? this.$element.find('.' + N.a.filterOptionTitle)
                      : this.$element),
                  this.$clearAllButtonContainer.append(
                    this.clearAllButton.$element
                  ))
                : (this.$element = null);
            },
          },
          {
            key: 'setData',
            value: function () {
              var t = this;
              this.refineByItems = [];
              var e = Object.keys(l.a.queryParams).filter(function (t) {
                return t.startsWith(l.a.prefix);
              });
              e &&
                e.length > 0 &&
                e.forEach(function (e) {
                  var n = t.parent.filterOptions.get(e),
                    r = e.startsWith(l.a.prefix + '_ct_');
                  r &&
                    (n = t.parent.filterOptions.get(
                      e.replace(l.a.prefix + '_ct_', l.a.prefix + '_c_')
                    ));
                  var i = l.a.queryParams[e],
                    o = e.startsWith(l.a.prefix + '_c_');
                  if ((o && !Array.isArray(i) && (i = [i]), n && i)) {
                    var a =
                      n.displayType ==
                        pr.a.DisplayType.MULTI_LEVEL_COLLECTIONS ||
                      n.displayType == pr.a.DisplayType.MULTI_LEVEL_TAG;
                    if (n.displayType == pr.a.DisplayType.RANGE) {
                      var s = new Ja(t.filterTreeType),
                        c = '';
                      (c = n.isNumberRangeSlider ? i[0] : i),
                        s.setData(n, null, c),
                        t.refineByItems.push(s),
                        t.addComponent(s);
                    } else if (a) {
                      var u =
                        (n.displayType ==
                          pr.a.DisplayType.MULTI_LEVEL_COLLECTIONS &&
                          Settings.getSettingValue(
                            'general.multiLevelCollectionSelectType'
                          ) == pr.a.SelectType.SINGLE) ||
                        (n.displayType == pr.a.DisplayType.MULTI_LEVEL_TAG &&
                          n.selectType == pr.a.SelectType.SINGLE);
                      Object.values(i).forEach(function (e) {
                        var i = e;
                        r && (i = l.a.collectionId + ':' + e);
                        var a = n.allNestedFilterItems.get(i);
                        if (!(u && o && a && a.isSelectedChild)) {
                          var s = new Ja(t.filterTreeType);
                          s.setData(n, a, e),
                            t.refineByItems.push(s),
                            t.addComponent(s);
                        }
                      });
                    } else
                      Object.values(i).forEach(function (e) {
                        var r = n.filterItems.get(e),
                          i = new Ja(t.filterTreeType);
                        i.setData(n, r, e),
                          t.refineByItems.push(i),
                          t.addComponent(i);
                      });
                  }
                });
            },
          },
        ]) && Za(e.prototype, n),
        r && Za(e, r),
        c
      );
    })(d.a);
    function il(t) {
      return (il =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function ol(t, e) {
      if (!(t instanceof e))
        throw new TypeError('Cannot call a class as a function');
    }
    function al(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function ll(t, e) {
      return (ll =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function sl(t, e) {
      return !e || ('object' !== il(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function cl(t) {
      return (cl = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var ul = (function (t) {
        !(function (t, e) {
          if ('function' != typeof e && null !== e)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && ll(t, e);
        })(o, t);
        var e,
          n,
          r,
          i = (function (t) {
            function e() {
              if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            }
            return function () {
              var n,
                r = cl(t);
              if (e()) {
                var i = cl(this).constructor;
                n = Reflect.construct(r, arguments, i);
              } else n = r.apply(this, arguments);
              return sl(this, n);
            };
          })(o);
        function o() {
          return ol(this, o), i.apply(this, arguments);
        }
        return (
          (e = o),
          (n = [
            {
              key: 'getBlockContentTemplate',
              value: function () {
                return '\n\t\t\t<ul class="{{class.filterOptionItemList}} {{class.filterOptionItemListSingleList}}">\n\t\t\t\t{{filterItems}}\n\t\t\t</ul>\n\t\t'.trim();
              },
            },
          ]) && al(e.prototype, n),
          r && al(e, r),
          o
        );
      })(ga),
      pl = (n(98), n(131)),
      fl = n.n(pl);
    function hl(t) {
      return (hl =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function yl(t, e) {
      if (!(t instanceof e))
        throw new TypeError('Cannot call a class as a function');
    }
    function dl(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function gl(t, e, n) {
      return (gl =
        'undefined' != typeof Reflect && Reflect.get
          ? Reflect.get
          : function (t, e, n) {
              var r = (function (t, e) {
                for (
                  ;
                  !Object.prototype.hasOwnProperty.call(t, e) &&
                  null !== (t = vl(t));

                );
                return t;
              })(t, e);
              if (r) {
                var i = Object.getOwnPropertyDescriptor(r, e);
                return i.get ? i.get.call(n) : i.value;
              }
            })(t, e, n || t);
    }
    function ml(t, e) {
      return (ml =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function bl(t, e) {
      return !e || ('object' !== hl(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function vl(t) {
      return (vl = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var Sl = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && ml(t, e);
      })(s, t);
      var e,
        n,
        r,
        i = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = vl(t);
            if (e()) {
              var i = vl(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return bl(this, n);
          };
        })(s);
      function s() {
        return yl(this, s), i.apply(this, arguments);
      }
      return (
        (e = s),
        (n = [
          {
            key: 'init',
            value: function () {
              gl(vl(s.prototype), 'init', this).call(this),
                (this.requestInstantly =
                  this.filterTreeType == Mr.FilterTreeType.VERTICAL ||
                  o.a.getSettingValue('general.requestInstantly'));
            },
          },
          {
            key: 'getBlockContentTemplate',
            value: function () {
              return this.hideInputElement
                ? '\n\t\t\t\t<div>\n\t\t\t\t\t<div class="boost-pfs-filter-option-range-slider"></div>\n\t\t\t\t</div>\n\t\t\t'.trim()
                : 'style3' == this.style
                ? '\n\t\t\t\t<div class="boost-pfs-filter-block-content-inner">\n\t\t\t\t\t<div class="boost-pfs-filter-option-range-slider"></div>\n\t\t\t\t\t<div class="boost-pfs-filter-option-range-amount">\n\t\t\t\t\t\t<input class="boost-pfs-filter-option-range-amount-min" type="text" role="textbox" readonly />\n\t\t\t\t\t\t<input class="boost-pfs-filter-option-range-amount-max" type="text" role="textbox" readonly />\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t'.trim()
                : '\n\t\t\t\t<div class="boost-pfs-filter-block-content-inner">\n\t\t\t\t\t<div class="boost-pfs-filter-option-range-amount">\n\t\t\t\t\t\t<div class="boost-pfs-filter-option-range-amount-wrapper boost-pfs-filter-option-range-amount-min-wrapper">\n\t\t\t\t\t\t\t<div class="boost-pfs-filter-option-range-slider-unit">{{itemCurrencySymbol}}</div>\n\t\t\t\t\t\t\t<input class="boost-pfs-filter-option-range-amount-min" role="textbox" type="text" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="boost-pfs-filter-option-range-amount-split"> - </div>\n\t\t\t\t\t\t<div class="boost-pfs-filter-option-range-amount-wrapper boost-pfs-filter-option-range-amount-max-wrapper">\n\t\t\t\t\t\t\t<div class="boost-pfs-filter-option-range-slider-unit">{{itemCurrencySymbol}}</div>\n\t\t\t\t\t\t\t<input class="boost-pfs-filter-option-range-amount-max" role="textbox" type="text"/>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="boost-pfs-filter-option-range-slider"></div>\n\t\t\t\t</div>\n\t\t\t\t'
                    .trim()
                    .replace(
                      /{{itemCurrencySymbol}}/g,
                      l.a.moneyFormat
                        .replace(/{{.+}}/g, '')
                        .replace('&#36;', '$')
                    );
            },
          },
          {
            key: 'isRender',
            value: function () {
              if (this.status == pr.a.Status.ACTIVE) {
                var t = o.a.getSettingValue('general.oneValueRangeSlider');
                return (
                  !(this.isNumberRangeSlider
                    ? this.rangeMax == this.rangeMin
                    : this.valuesData.length <= 1) || t
                );
              }
              return !1;
            },
          },
          {
            key: 'render',
            value: function () {
              gl(vl(s.prototype), 'render', this).call(this),
                this.$element.addClass(
                  'boost-pfs-filter-option-range-' + this.style
                ),
                this.renderRangeValue(),
                this.renderInputField();
            },
          },
          {
            key: 'renderRangeValue',
            value: function () {
              this.setCurrentValues(),
                this.noUiSlider &&
                  this.noUiSlider.set([this.currentMin, this.currentMax]);
            },
          },
          {
            key: 'renderInputField',
            value: function () {
              if (this.$element && !this.hideInputElement) {
                (this.$minInputElement && this.$maxInputElement) ||
                  ((this.$minInputElement = this.$element.find(
                    '.boost-pfs-filter-option-range-amount-min'
                  )),
                  (this.$maxInputElement = this.$element.find(
                    '.boost-pfs-filter-option-range-amount-max'
                  )));
                var t = this.buildNumberLabel(this.currentMin),
                  e = this.buildNumberLabel(this.currentMax);
                this.$minInputElement.val(t), this.$maxInputElement.val(e);
              }
            },
          },
          {
            key: 'renderTextLabelPosition',
            value: function () {
              var t = this.$element.find('.noUi-value'),
                e = 100 / (2 * this.valuesData.length);
              t.each(function (t, n) {
                var r = n.style.left;
                if ('string' == typeof r) {
                  var i = parseFloat(r.replace('%', '')) + e;
                  n.style.left = i + '%';
                }
              });
            },
          },
          {
            key: 'bindEvents',
            value: function () {
              gl(vl(s.prototype), 'bindEvents', this).call(this),
                this.$element &&
                  ((this.$rangeSliderElement = this.$element.find(
                    '.boost-pfs-filter-option-range-slider'
                  )),
                  (this.noUiSlider = fl.a.create(
                    this.$rangeSliderElement[0],
                    this.getSliderConfig()
                  )),
                  this.noUiSlider.on('slide', this.onDrag.bind(this)),
                  this.noUiSlider.on(
                    'change',
                    this.onFinishDragging.bind(this)
                  ),
                  this.hideInputElement ||
                    (this.$minInputElement.on(
                      'change',
                      this.onChangeInput.bind(this, 'min')
                    ),
                    this.$maxInputElement.on(
                      'change',
                      this.onChangeInput.bind(this, 'max')
                    )),
                  this.isNumberRangeSlider || this.renderTextLabelPosition(),
                  this.$element
                    .find(
                      '.boost-pfs-filter-option-range-amount-min, .noUi-handle-lower'
                    )
                    .attr('aria-label', a.a.ada.minValue),
                  this.$element
                    .find(
                      '.boost-pfs-filter-option-range-amount-max, .noUi-handle-upper'
                    )
                    .attr('aria-label', a.a.ada.maxValue));
            },
          },
          {
            key: 'onChangeInput',
            value: function (t) {
              var e =
                  'min' == t
                    ? u.a.stripHtml(this.$minInputElement.val().trim())
                    : this.currentMin.toString(),
                n =
                  'max' == t
                    ? u.a.stripHtml(this.$maxInputElement.val().trim())
                    : this.currentMax.toString();
              this.thousandSeparator &&
                ((e = e.split(this.thousandSeparator).join('')),
                (n = n.split(this.thousandSeparator).join(''))),
                this.decimalSeparator &&
                  '.' != this.decimalSeparator &&
                  ((e = e.replace(this.decimalSeparator, '.')),
                  (n = n.replace(this.decimalSeparator, '.'))),
                !this.isNumberRangeSlider ||
                null == e ||
                null == n ||
                '' == e ||
                '' == n ||
                isNaN(e) ||
                isNaN(n) ||
                (e = parseFloat(e)) > (n = parseFloat(n))
                  ? this.renderInputField()
                  : ((this.currentMin = Math.max(e, this.rangeMin)),
                    (this.currentMax = Math.min(n, this.rangeMax)),
                    this.noUiSlider &&
                      this.noUiSlider.set([this.currentMin, this.currentMax]),
                    this.onFinishDragging());
            },
          },
          {
            key: 'onDrag',
            value: function () {
              var t = this.noUiSlider.get();
              if (null != t)
                if (Array.isArray(t) && 2 == t.length) {
                  if (this.isNumberRangeSlider)
                    (this.currentMin = t[0]), (this.currentMax = t[1]);
                  else {
                    var e = Math.round(t[0]),
                      n = Math.round(t[1]);
                    n <= e
                      ? this.noUiSlider.set([this.currentMin, this.currentMax])
                      : ((this.currentMin = e), (this.currentMax = n));
                  }
                  this.renderInputField();
                } else
                  ('string' != typeof t && 'number' != typeof t) ||
                    ((this.currentMin = t), (this.currentMax = t));
            },
          },
          {
            key: 'onFinishDragging',
            value: function () {
              var t = this;
              if (this.isNumberRangeSlider)
                this.filterItems.forEach(function (e) {
                  e.setValue(t.currentMin, t.currentMax);
                });
              else {
                var e = [];
                if (
                  this.currentMin != this.rangeMin ||
                  this.currentMax != this.rangeMax
                )
                  for (var n = this.currentMin; n <= this.currentMax - 1; n++)
                    e.push(this.valuesData[n].key);
                this.filterItems.forEach(function (t) {
                  t.isSelected = e.includes(t.value);
                });
              }
              if (this.requestInstantly) {
                var r = [];
                this.filterItems.forEach(function (t) {
                  t.isSelected && r.push(t.value);
                }),
                  K.default.setParam(this.filterOptionId, r),
                  K.default.setParam('page', 1);
                var i = {
                  filterOptionId: this.filterOptionId,
                  filterOptionValue: r,
                };
                K.default.applyFilter('filter', i);
              }
            },
          },
          {
            key: 'getSliderConfig',
            value: function () {
              var t = {
                start: this.isSingleHandle
                  ? [this.currentMin]
                  : [this.currentMin, this.currentMax],
                step: this.sliderStep,
                connect: !0,
                snap: !this.isNumberRangeSlider,
                animate: !0,
                animationDuration: 300,
                range: this.getSliderRange(),
                pips: this.getSliderPipsConfig(),
              };
              if (this.isShowTooltip) {
                var e = { to: this.buildLabel.bind(this) };
                t.tooltips = [e, e];
              }
              return t;
            },
          },
          {
            key: 'getSliderRange',
            value: function () {
              var t = { min: this.rangeMin, max: this.rangeMax };
              if (!this.isNumberRangeSlider)
                for (var e = 1; e < this.valuesData.length; e++)
                  t[e * (100 / this.valuesData.length) + '%'] = e;
              return t;
            },
          },
          {
            key: 'getSliderPipsConfig',
            value: function () {
              var t = this.isNumberRangeSlider
                ? this.sliderRange + 1
                : this.valuesData.length + 1;
              return (
                t < 2 && (t = 2),
                {
                  mode: 'count',
                  values: t,
                  filter: function (t, e) {
                    return 1 == e ? e : -1;
                  },
                  format: { to: this.buildLabel.bind(this) },
                }
              );
            },
          },
          {
            key: 'buildLabel',
            value: function (t) {
              var e = '';
              if (this.isNumberRangeSlider) {
                var n = l.a.moneyFormat
                  .replace(/{{.+}}/g, '')
                  .replace('&#36;', '$');
                e = this.isPriceFilter
                  ? 'style2' == this.style
                    ? '<span class="boost-pfs-filter-option-range-slider-unit">' +
                      n +
                      '</span>' +
                      this.buildMoneyLabel(t)
                    : this.buildMoneyLabel(t)
                  : this.buildNumberLabel(t, !0);
              } else
                Number.isInteger(t) &&
                  t >= 0 &&
                  t < this.valuesData.length &&
                  ((e = this.valuesData[t].key), (e = this.buildTextLabel(e)));
              return e;
            },
          },
          {
            key: 'buildMoneyLabel',
            value: function (t) {
              var e = o.a.getSettingValue('general.enable3rdCurrencySupport'),
                n = this.buildNumberLabel(t, !0),
                r = this.moneyFormat.replace(/{{\s*(\w+)\s*}}/, n);
              return (
                (r = r.replace(/[A-Z][A-Z][A-Z]/, '')),
                e && (r = u.a.moneyWrapper(r)),
                r
              );
            },
          },
          {
            key: 'buildNumberLabel',
            value: function (t, e) {
              if (this.shortenPipsRange && e) {
                var n = o.a.getSettingValue('general.formatPipsRange');
                if (Array.isArray(n) && n.length > 0)
                  for (var r = 0, i = 0, a = n.length - 1; a >= 0; a--) {
                    var l = n[a];
                    if (t >= l.node)
                      return (
                        (r = Math.floor(t / l.node).toString()),
                        (i =
                          (i = Math.round(t % l.node)) > 0 ? i.toString() : '')
                          .length > l.fix && (i = i.substring(0, l.fix)),
                        l.suffix
                          ? r + this.decimalSeparator + i + l.symbol
                          : r + l.symbol + i
                      );
                  }
              }
              var s = !o.a.getSettingValue('general.removePriceDecimal');
              return u.a.formatNumberWithSeparator(
                t,
                this.precision,
                this.thousandSeparator,
                this.decimalSeparator,
                s
              );
            },
          },
          {
            key: 'buildTextLabel',
            value: function (t) {
              if (this.prefix) {
                var e = this.prefix.replace(/\\/g, '');
                t = t.replace(e, '').trim();
              }
              return t;
            },
          },
          {
            key: 'setMoneyFormat',
            value: function () {
              if (this.isPriceFilter) {
                var t = o.a.getSettingValue('general.rangeSliderMoneyFormat');
                this.moneyFormat = t || '{{amount}}';
              }
            },
          },
          {
            key: 'setCurrentValues',
            value: function () {
              var t = this,
                e = this.rangeMin,
                n = this.rangeMax,
                r = null;
              if (l.a.queryParams.hasOwnProperty(this.filterOptionId))
                if (this.isNumberRangeSlider)
                  (r = l.a.queryParams[this.filterOptionId][0].split(':')) &&
                    2 == r.length &&
                    ((e = r[0]), (n = r[1]));
                else if (
                  ((r = l.a.queryParams[this.filterOptionId]), Array.isArray(r))
                ) {
                  var i = this.valuesData.map(function (t) {
                    return t.key;
                  });
                  (e = this.rangeMax),
                    (n = this.rangeMin),
                    r.forEach(function (r) {
                      var o = i.indexOf(r);
                      o >= t.rangeMin &&
                        o <= t.rangeMax &&
                        (o < e && (e = o), o + 1 > n && (n = o + 1));
                    });
                }
              (this.currentMin = e), (this.currentMax = n);
            },
          },
          {
            key: 'setDisplayStyle',
            value: function () {
              var t = o.a.getSettingValue('general.rangeSlidersStyle3'),
                e = o.a.getSettingValue('general.rangeSlidersSingleHandle');
              this.isNumberRangeSlider
                ? Array.isArray(e) && e.includes(this.filterOptionId)
                  ? ((this.style = 'style4'),
                    (this.hideInputElement = !0),
                    (this.isSingleHandle = !0),
                    (this.currentMax = this.currentMin))
                  : Array.isArray(t) && t.includes(this.filterOptionId)
                  ? ((this.style = 'style3'), (this.hideInputElement = !1))
                  : this.hideInputElement
                  ? ((this.style = 'style2'), (this.isShowTooltip = !0))
                  : (this.style = 'style1')
                : ((this.style = 'style5'), (this.hideInputElement = !0)),
                o.a.getSettingValue('general.enable3rdCurrencySupport') &&
                  ['style1', 'style3'].indexOf(this.style) > -1 &&
                  ((this.style = 'style2'),
                  (this.hideInputElement = !0),
                  (this.isShowTooltip = !0));
            },
          },
          {
            key: 'prepareFilterOptionData',
            value: function (t) {
              return (
                t.isConvertedPrice ||
                  (t.values.max &&
                    t.values.min &&
                    ((t.values.max = Math.ceil(100 * t.values.max) / 100),
                    (t.values.min = Math.floor(100 * t.values.min) / 100)),
                  ('price' != t.filterType &&
                    'variants_price' != t.filterType) ||
                    !t.values ||
                    (u.a.isEnableShopifyMultipleCurrencies() &&
                      u.a.isConvertCurrenciesOnFrontEnd() &&
                      ((t.values.min = u.a.convertPriceBasedOnActiveCurrency(
                        t.values.min
                      )),
                      (t.values.max = u.a.convertPriceBasedOnActiveCurrency(
                        t.values.max
                      )))),
                  (t.isConvertedPrice = !0)),
                t
              );
            },
          },
          {
            key: 'setData',
            value: function (t) {
              if (
                ((t = this.prepareFilterOptionData(t)),
                gl(vl(s.prototype), 'setData', this).call(this, t),
                ('price' == this.filterType ||
                  'variants_price' == this.filterType) &&
                  !o.a.getSettingValue('general.enable3rdCurrencySupport'))
              ) {
                var e = o.a.getSettingValue('general.rangeSliderMoneyFormat');
                e || (e = l.a.moneyFormat);
                var n = e.replace(/<.*?>/g, '').replace(/{{.*?}}/, '');
                1 == n.length && (this.label += u.a.stripHtml(' (' + n + ')'));
              }
              if (
                ((this.isNumberRangeSlider = !Array.isArray(t.values)),
                (this.isPriceFilter =
                  t.filterType == pr.a.FilterType.PRICE ||
                  t.filterType == pr.a.FilterType.VARIANTS_PRICE),
                this.isPriceFilter && this.setMoneyFormat(),
                this.isSortValues() && this.sortValues(t.values),
                (this.valuesData = JSON.parse(JSON.stringify(t.values))),
                this.isNumberRangeSlider &&
                  null != t.values.min &&
                  null != t.values.max &&
                  t.values.min != t.values.max)
              ) {
                if (
                  ((this.hideInputElement = t.hideTextBoxes),
                  (this.sliderStep = parseFloat(t.sliderStep)),
                  (isNaN(this.sliderStep) || this.sliderStep > t.values.max) &&
                    (this.sliderStep = 1),
                  (this.sliderRange = parseFloat(t.sliderRange)),
                  isNaN(this.sliderRange) && (this.sliderRange = 4),
                  t.values.max - t.values.min < 2 * this.sliderStep &&
                    (this.sliderRange = 1),
                  (this.precision = 0),
                  Math.floor(this.sliderStep) != this.sliderStep)
                ) {
                  var r = this.sliderStep.toString().split('.');
                  r.length > 1 && (this.precision = r[1].length);
                }
                (this.thousandSeparator = t.sliderDelimiter
                  ? t.sliderDelimiter
                  : ''),
                  '.' == this.thousandSeparator
                    ? (this.decimalSeparator = ',')
                    : (this.decimalSeparator = '.'),
                  (this.rangeMin =
                    Math.round(100 * parseFloat(t.values.min)) / 100),
                  (this.rangeMax =
                    Math.round(100 * parseFloat(t.values.max)) / 100),
                  this.setCurrentValues(),
                  this.setDisplayStyle();
              } else
                Array.isArray(t.values) && t.values.length > 1
                  ? ((this.hideInputElement = !0),
                    (this.sliderStep = 1),
                    (this.rangeMin = 0),
                    (this.rangeMax = this.valuesData.length),
                    this.setCurrentValues(),
                    this.setDisplayStyle())
                  : (this.status = pr.a.Status.DISABLED);
            },
          },
        ]) && dl(e.prototype, n),
        r && dl(e, r),
        s
      );
    })(ga);
    function Tl(t) {
      return (Tl =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function Ol(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function Pl(t, e) {
      return (Pl =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function wl(t, e) {
      return !e || ('object' !== Tl(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function _l(t) {
      return (_l = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var Cl = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && Pl(t, e);
      })(o, t);
      var e,
        n,
        r,
        i = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = _l(t);
            if (e()) {
              var i = _l(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return wl(this, n);
          };
        })(o);
      function o(t) {
        var e;
        return (
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, o),
          ((e = i.call(this, t)).allNestedFilterItems = new Map()),
          e
        );
      }
      return (
        (e = o),
        (n = [
          {
            key: 'getBlockContentTemplate',
            value: function () {
              return '\n\t\t\t<ul class="{{class.filterOptionItemList}} {{class.filterOptiontemListMultiLevelCollections}} {{class.filterOptionItemListSingleList}} boost-pfs-filter-option-multi-level-list boost-pfs-filter-option-first-level-list">\n\t\t\t\t{{filterItems}}\n\t\t\t</ul>\n\t\t'.trim();
            },
          },
        ]) && Ol(e.prototype, n),
        r && Ol(e, r),
        o
      );
    })(ga);
    function kl(t) {
      return (kl =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function El(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function Rl(t, e) {
      return (Rl =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function Il(t, e) {
      return !e || ('object' !== kl(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function Ll(t) {
      return (Ll = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var Al = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && Rl(t, e);
      })(a, t);
      var e,
        n,
        r,
        i = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = Ll(t);
            if (e()) {
              var i = Ll(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return Il(this, n);
          };
        })(a);
      function a(t) {
        var e;
        return (
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, a),
          ((e = i.call(this, t)).allNestedFilterItems = new Map()),
          e
        );
      }
      return (
        (e = a),
        (n = [
          {
            key: 'getBlockContentTemplate',
            value: function () {
              return '\n\t\t\t<ul class="{{class.filterOptionItemList}} {{class.filterOptiontemListMultiLevelCollections}} {{displayTypeClass}} boost-pfs-filter-option-multi-level-list boost-pfs-filter-option-first-level-list">\n\t\t\t\t{{filterItems}}\n\t\t\t</ul>\n\t\t'.trim();
            },
          },
          {
            key: 'compileBlockContentTemplate',
            value: function () {
              var t = this.getDisplayTypeClass();
              return this.getBlockContentTemplate().replace(
                /{{displayTypeClass}}/g,
                t
              );
            },
          },
          {
            key: 'getDisplayTypeClass',
            value: function () {
              var t = '';
              switch (this.displayTypeItem) {
                case pr.a.DisplayType.LIST:
                  t =
                    this.selectType == pr.a.SelectType.SINGLE
                      ? N.a.filterOptionItemListSingleList
                      : N.a.filterOptionItemListMultipleList;
                  break;
                case pr.a.DisplayType.BOX:
                  t = N.a.filterOptionItemListBox;
                  break;
                case pr.a.DisplayType.SWATCH:
                  t = N.a.filterOptionItemListSwatch;
                  var e = o.a.getSettingValue('general.swatchStyle');
                  t +=
                    ' ' + (e = e ? e.replace('grid', 'list') : 'circle-list');
              }
              return t;
            },
          },
        ]) && El(e.prototype, n),
        r && El(e, r),
        a
      );
    })(ga);
    function xl(t) {
      return (xl =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function Fl(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function Bl(t, e) {
      return (Bl =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function Dl(t, e) {
      return !e || ('object' !== xl(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function $l(t) {
      return ($l = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var jl = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && Bl(t, e);
      })(p, t);
      var e,
        n,
        r,
        c = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = $l(t);
            if (e()) {
              var i = $l(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return Dl(this, n);
          };
        })(p);
      function p(t, e) {
        var n;
        return (
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, p),
          ((n = c.call(this)).id = t),
          (n.idSelector = '#' + n.id),
          (n.filterTreeType = e),
          (n.isMobileOnly = !1),
          (n.isDesktopOnly = !1),
          (n.isRenderOnDOM = !0),
          (n.collectionId = l.a.collectionId),
          (n.clickedFilterOption = null),
          (n.refineBy = null),
          (n.filterOptions = new Map()),
          (n.$element = null),
          (n.filterHorizontalOptionsAlign = o.a.getSettingValue(
            'general.filterHorizontalOptionsAlign'
          )),
          (n.numberResult = ''),
          (n.selector = {
            refineByWrapper: '.' + N.a.filterRefineByWrapper,
            filterOptionsWrapper: '.' + N.a.filterOptionsWrapper,
            clearAllButton:
              '.boost-pfs-filter-mobile-toolbar-bottom .' + N.a.clearAllButton,
            clearAllButtonContainer: '.boost-pfs-filter-mobile-toolbar-bottom',
            applyAllButton:
              '.boost-pfs-filter-mobile-toolbar-bottom .' +
              N.a.applyAllFilterOptionButton,
            applyAllButtonContainer: '.boost-pfs-filter-mobile-footer',
            closeFilter:
              '.' + N.a.closeFilterButton + ',.' + N.a.showResultFilterButton,
            filterHeader: '.boost-pfs-filter-mobile-toolbar',
            filterHeaderTop:
              '.boost-pfs-filter-mobile-toolbar .boost-pfs-filter-mobile-toolbar-top',
            filterHeaderBottom:
              '.boost-pfs-filter-mobile-toolbar .boost-pfs-filter-mobile-toolbar-bottom',
            filterFooter: '.boost-pfs-filter-mobile-footer',
            numberResult: '.' + N.a.numberResult,
          }),
          n
        );
      }
      return (
        (e = p),
        (n = [
          {
            key: 'getTemplate',
            value: function () {
              switch (this.filterTreeType) {
                case 'vertical':
                  return '\n\t\t\t\t\t<div class="boost-pfs-filter-tree-content" aria-live="polite" role="navigation" aria-label="{{label.productFilter}}">\n\t\t\t\t\t\t{{header}}\n\t\t\t\t\t\t<div class="{{class.filterRefineByWrapper}}">\n\t\t\t\t\t\t\t{{refineBy}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="{{class.filterOptionsWrapper}}">\n\t\t\t\t\t\t\t{{filterOptions}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t{{footer}}\n\t\t\t\t\t</div>\n\t\t\t\t'.trim();
                case 'horizontal':
                  return 'top' ==
                    o.a.getSettingValue('general.refineByHorizontalPosition')
                    ? '\n\t\t\t\t\t\t<div class="boost-pfs-filter-tree-content boost-pfs-filter-tree-options-align-{{filterHorizontalOptionsAlign}}" aria-live="polite" role="navigation" aria-label="{{label.productFilter}}">\n\t\t\t\t\t\t\t{{header}}\n\t\t\t\t\t\t\t<div class="{{class.filterRefineByWrapper}}">\n\t\t\t\t\t\t\t\t{{refineBy}}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="{{class.filterOptionsWrapper}}">\n\t\t\t\t\t\t\t\t{{filterOptions}}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t{{footer}}\n\t\t\t\t\t\t</div>\t\n\t\t\t\t\t'.trim()
                    : '\n\t\t\t\t\t\t<div class="boost-pfs-filter-tree-content boost-pfs-filter-tree-options-align-{{filterHorizontalOptionsAlign}}" aria-live="polite" role="navigation" aria-label="{{label.productFilter}}">\n\t\t\t\t\t\t\t{{header}}\n\t\t\t\t\t\t\t<div class="{{class.filterOptionsWrapper}}">\n\t\t\t\t\t\t\t\t{{filterOptions}}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="{{class.filterRefineByWrapper}}">\n\t\t\t\t\t\t\t\t{{refineBy}}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t{{footer}}\n\t\t\t\t\t\t</div>\t\n\t\t\t\t\t'.trim();
                default:
                  console.warn('filterTreeType is wrong');
              }
            },
          },
          {
            key: 'getHeaderTemplate',
            value: function () {
              return '\n\t\t\t<div class="boost-pfs-filter-mobile-toolbar">\n\t\t\t\t<div class="boost-pfs-filter-mobile-toolbar-top">\n\t\t\t\t\t<a href="javascript:;" class="{{class.closeFilterButton}}"><span>{{label.close}}</span></a>\n\t\t\t\t</div>\n\t\t\t\t<div class="boost-pfs-filter-mobile-toolbar-header">{{label.refineMobile}}</div>\n\t\t\t\t<div class="boost-pfs-filter-mobile-toolbar-bottom">\n\t\t\t\t\t{{clearButton}}\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t'.trim();
            },
          },
          {
            key: 'getFooterTemplate',
            value: function () {
              return '\n\t\t\t<div class="boost-pfs-filter-mobile-footer">\n\t\t\t\t<button class="{{class.showResultFilterButton}}" type="button">{{label.showResult}}<span class="{{class.numberResult}}">{{numberResult}}</span></button>\n\t\t\t</div>\n\t\t'.trim();
            },
          },
          {
            key: 'compileTemplate',
            value: function () {
              return this.getTemplate()
                .replace(/{{header}}/g, this.getHeaderTemplate())
                .replace(/{{footer}}/g, this.getFooterTemplate())
                .replace(
                  /{{filterHorizontalOptionsAlign}}/g,
                  this.filterHorizontalOptionsAlign
                )
                .replace(/{{label.productFilter}}/g, a.a.productFilter)
                .replace(/{{label.showResult}}/g, a.a.showResult)
                .replace(/{{label.refineMobile}}/g, a.a.refineMobile)
                .replace(/{{label.apply}}/g, a.a.apply)
                .replace(/{{label.close}}/g, a.a.close)
                .replace(/{{label.back}}/g, a.a.back)
                .replace(
                  /{{class.filterOptionsWrapper}}/g,
                  N.a.filterOptionsWrapper
                )
                .replace(
                  /{{class.filterRefineByWrapper}}/g,
                  N.a.filterRefineByWrapper
                )
                .replace(/{{class.closeFilterButton}}/g, N.a.closeFilterButton)
                .replace(
                  /{{class.showResultFilterButton}}/g,
                  N.a.showResultFilterButton
                )
                .replace(/{{class.numberResult}}/g, N.a.numberResult)
                .replace(/{{numberResult}}/g, this.numberResult)
                .replace(/{{refineBy}}/g, '')
                .replace(/{{clearButton}}/g, '')
                .replace(/{{applyButton}}/g, '')
                .replace(/{{filterOptions}}/g, '');
            },
          },
          {
            key: 'init',
            value: function () {
              var t = i()(this.idSelector);
              if (1 == t.length)
                if (
                  ((this.isMobileOnly = t[0].hasAttribute('data-is-mobile')),
                  (this.isDesktopOnly = t[0].hasAttribute('data-is-desktop')),
                  (this.isDesktopOnly && this.isMobileOnly) ||
                    (!this.isMobileOnly && !this.isDesktopOnly))
                )
                  (this.isDesktopOnly = !1), (this.isMobileOnly = !1);
                else {
                  var e = u.a.isMobile();
                  this.isRenderOnDOM =
                    (e && this.isMobileOnly) || (!e && this.isDesktopOnly);
                }
              (this.clearAllButton = new qr(
                this.filterTreeType,
                qr.ClearType.CLEAR_ALL
              )),
                (this.applyAllButton = new FilterApplyButton(
                  this.filterTreeType,
                  FilterApplyButton.ApplyType.APPLY_ALL
                ));
            },
          },
          {
            key: 'isRender',
            value: function () {
              return (
                this.parent.isFetchedFilterData &&
                this.isRenderOnDOM &&
                z.isPanelActive(tt.Enum.PRODUCT)
              );
            },
          },
          {
            key: 'isLoopThroughChild',
            value: function () {
              return this.isRenderOnDOM && this.parent.isFetchedFilterData;
            },
          },
          {
            key: 'render',
            value: function () {
              if (
                (!0 === l.a.queryParams.build_filter_tree &&
                  this.filterOptions &&
                  (this.isRenderPartially
                    ? this.renderPartially()
                    : this.renderFull(),
                  this.renderRefineBy(),
                  this.renderExtraElements()),
                o.a.getSettingValue('general.filterTreeNumberResultEnable'))
              ) {
                var t =
                  this.parent && this.parent.data
                    ? ' (' + this.parent.data.total_product + ')'
                    : '';
                this.$element
                  .find(this.selector.numberResult)
                  .addClass(N.a.numberResult + '-has-data')
                  .html(t);
              }
            },
          },
          {
            key: 'renderFull',
            value: function () {
              var t = this;
              (this.$element = i()(this.compileTemplate())),
                (this.$filterOptionsContainerElement = this.$element.find(
                  this.selector.filterOptionsWrapper
                )),
                this.filterOptions.forEach(function (e) {
                  t.$filterOptionsContainerElement.append(e.$element);
                });
            },
          },
          {
            key: 'renderPartially',
            value: function () {
              var t = this;
              this.$filterOptionsContainerElement = this.$element.find(
                this.selector.filterOptionsWrapper
              );
              var e = !1;
              this.clickedFilterOption.$element.siblings().remove(),
                this.filterOptions.forEach(function (n) {
                  if (n.$element) {
                    if (n == t.clickedFilterOption) return void (e = !0);
                    e
                      ? t.$filterOptionsContainerElement.append(n.$element)
                      : n.$element.insertBefore(t.clickedFilterOption.$element);
                  }
                });
            },
          },
          {
            key: 'renderRefineBy',
            value: function () {
              o.a.getSettingValue('general.separateRefineByFromFilter')
                ? this.renderSeparateRefineBy()
                : this.renderAttachedRefineBy();
            },
          },
          {
            key: 'renderAttachedRefineBy',
            value: function () {
              this.refineBy &&
                this.$element &&
                ((this.$refineByElementContainer = this.$element.find(
                  this.selector.refineByWrapper
                )),
                this.$refineByElementContainer.length > 0 &&
                  (this.$refineByElementContainer
                    .first()
                    .html('')
                    .append(this.refineBy.$element),
                  (this.$refineByElement = this.refineBy.$element)));
            },
          },
          {
            key: 'renderSeparateRefineBy',
            value: function () {
              if (this.refineBy) {
                var t =
                  this.refineBy.filterTreeType == Mr.FilterTreeType.VERTICAL
                    ? s.a.filterRefineByVertical
                    : s.a.filterRefineByHorizontal;
                i()(t).length > 0 &&
                  i()(t).first().html('').append(this.refineBy.$element);
              }
            },
          },
          {
            key: 'renderExtraElements',
            value: function () {
              0 == this.$element.find(this.selector.clearAllButton).length &&
                this.$element
                  .find(this.selector.clearAllButtonContainer)
                  .append(this.clearAllButton.$element),
                0 == this.$element.find(this.selector.applyAllButton).length &&
                  this.$element
                    .find(this.selector.applyAllButtonContainer)
                    .append(this.applyAllButton.$element),
                u.a.isMobile() ||
                  'style-expand' !=
                    o.a.getSettingValue('general.filterTreeHorizontalStyle') ||
                  this.$element
                    .find(this.selector.filterFooter)
                    .append(this.clearAllButton.$element);
            },
          },
          {
            key: 'bindEvents',
            value: function () {
              (this.isMobileOnly || this.isDesktopOnly) &&
                ((this.resizeTimer = null),
                i()(window).on(
                  'resize',
                  function () {
                    this.resizeTimer && clearTimeout(this.resizeTimer),
                      (this.resizeTimer = setTimeout(
                        this.onScreenResize.bind(this),
                        500
                      ));
                  }.bind(this)
                )),
                this.$element &&
                  (this.$element.find(this.selector.closeFilter).length > 0 &&
                    (this.$element.find(this.selector.closeFilter).off('click'),
                    this.$element
                      .find(this.selector.closeFilter)
                      .on('click', this.onCloseFilterTree.bind(this))),
                  i()('.boost-pfs-filter-overlay').length > 0 &&
                    i()('.boost-pfs-filter-overlay')
                      .off('click')
                      .on('click', this.onCloseFilterTree.bind(this)));
            },
          },
          {
            key: 'onScreenResize',
            value: function () {
              var t = u.a.isMobile(),
                e = (t && this.isMobileOnly) || (!t && this.isDesktopOnly);
              this.isRenderOnDOM != e &&
                ((this.isRenderOnDOM = e),
                this.isRenderOnDOM
                  ? ((this.isRenderPartially = !1),
                    this.refresh(),
                    i()(this.idSelector).first().html('').append(this.$element))
                  : this.$element &&
                    (this.$element.detach(), (this.$element = null)));
            },
          },
          {
            key: 'onCloseFilterTree',
            value: function () {
              var t = i()(this.idSelector);
              t &&
                (this.mobileButton && (this.mobileButton.isCollapsed = !0),
                this.desktopButton &&
                  (this.desktopButton.$element[0].click(),
                  (this.desktopButton.isCollapsed = !0)),
                t.removeClass(N.a.filterTreeMobileOpen),
                i()('body')
                  .removeClass(N.a.filterTreeOpenBody)
                  .removeClass('boost-pfs-body-no-scroll'),
                i()('html')
                  .removeClass(N.a.filterTreeOpenBody)
                  .removeClass('boost-pfs-body-no-scroll'));
            },
          },
          {
            key: 'setData',
            value: function (t) {
              var e = this;
              o.a.getSettingValue('general.filterTreeEnableRenderPartially') &&
              this.collectionId == l.a.collectionId
                ? (this.clickedFilterOption = this.filterOptions.get(
                    this.parent.clickedFilterOptionId
                  ))
                : ((this.collectionId = l.a.collectionId),
                  (this.clickedFilterOption = null)),
                (this.isRenderPartially = !!(
                  this.$element &&
                  this.clickedFilterOption &&
                  this.clickedFilterOption.$element
                )),
                this.modifyOptionsData(t.options),
                (this.children = []),
                (this.filterOptions = new Map()),
                t.options.forEach(function (t) {
                  if (
                    !(
                      t.status != pr.a.Status.ACTIVE ||
                      (Array.isArray(t.values) &&
                        0 == t.values.length &&
                        Array.isArray(t.manualValues) &&
                        0 == t.manualValues.length)
                    )
                  ) {
                    var n = null;
                    if (
                      (e.clickedFilterOption &&
                        t.filterOptionId ==
                          e.clickedFilterOption.filterOptionId &&
                        (n = e.clickedFilterOption),
                      null == n)
                    ) {
                      switch (t.displayType) {
                        case pr.a.DisplayType.LIST:
                          n = new wa(e.filterTreeType);
                          break;
                        case pr.a.DisplayType.BOX:
                          n = new La(e.filterTreeType);
                          break;
                        case pr.a.DisplayType.RANGE:
                          n = new Sl(e.filterTreeType);
                          break;
                        case pr.a.DisplayType.SWATCH:
                          n = new ja(e.filterTreeType);
                          break;
                        case pr.a.DisplayType.RATING:
                          n = new qa(e.filterTreeType);
                          break;
                        case pr.a.DisplayType.SUB_CATEGORY:
                          n = new ul(e.filterTreeType);
                          break;
                        case pr.a.DisplayType.MULTI_LEVEL_COLLECTIONS:
                          n = new Cl(e.filterTreeType);
                          break;
                        case pr.a.DisplayType.MULTI_LEVEL_TAG:
                          n = new Al(e.filterTreeType);
                      }
                      if (!n) return;
                      n.setData(t);
                    }
                    e.addComponent(n), e.filterOptions.set(t.filterOptionId, n);
                  }
                }),
                o.a.getSettingValue('general.showRefineBy') &&
                  ((this.refineBy = new rl(this.filterTreeType)),
                  this.addComponent(this.refineBy),
                  this.refineBy.setData()),
                this.addComponent(this.clearAllButton),
                this.addComponent(this.applyAllButton);
            },
          },
          {
            key: 'modifyOptionsData',
            value: function (t) {
              var e = o.a.getSettingValue('general.advancedRangeSliders');
              t.forEach(function (t) {
                if (
                  (Array.isArray(e) &&
                    e.includes(t.filterOptionId) &&
                    t.selectType == pr.a.SelectType.MULTIPLE &&
                    (t.displayType = pr.a.DisplayType.RANGE),
                  t.filterType == pr.a.FilterType.MULTI_LEVEL_TAG)
                ) {
                  switch (t.displayType) {
                    case pr.a.DisplayType.LIST:
                      t.displayTypeItem = pr.a.DisplayType.LIST;
                      break;
                    case pr.a.DisplayType.BOX:
                      t.displayTypeItem = pr.a.DisplayType.BOX;
                      break;
                    case pr.a.DisplayType.SWATCH:
                      t.displayTypeItem = pr.a.DisplayType.SWATCH;
                      break;
                    default:
                      return;
                  }
                  t.displayType = pr.a.DisplayType.MULTI_LEVEL_TAG;
                }
                ((u.a.isVendorPage() &&
                  t.filterType == pr.a.FilterType.VENDOR) ||
                  (u.a.isTypePage() &&
                    t.filterType == pr.a.FilterType.PRODUCT_TYPE)) &&
                  (t.status = pr.a.Status.DISABLED),
                  t.displayType == pr.a.DisplayType.SUB_CATEGORY &&
                    (t.status = pr.a.Status.DISABLED);
              });
            },
          },
        ]) && Fl(e.prototype, n),
        r && Fl(e, r),
        p
      );
    })(d.a);
    function Ml(t) {
      return (Ml =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function Vl(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function Nl(t, e, n) {
      return (Nl =
        'undefined' != typeof Reflect && Reflect.get
          ? Reflect.get
          : function (t, e, n) {
              var r = (function (t, e) {
                for (
                  ;
                  !Object.prototype.hasOwnProperty.call(t, e) &&
                  null !== (t = Wl(t));

                );
                return t;
              })(t, e);
              if (r) {
                var i = Object.getOwnPropertyDescriptor(r, e);
                return i.get ? i.get.call(n) : i.value;
              }
            })(t, e, n || t);
    }
    function Hl(t, e) {
      return (Hl =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function Ul(t, e) {
      return !e || ('object' !== Ml(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function Wl(t) {
      return (Wl = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var ql = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && Hl(t, e);
      })(c, t);
      var e,
        n,
        r,
        s = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = Wl(t);
            if (e()) {
              var i = Wl(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return Ul(this, n);
          };
        })(c);
      function c(t, e) {
        var n;
        return (
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, c),
          ((n = s.call(this, t, e)).style = 'style2'),
          (n.selector.clearAllButtonContainer =
            '.boost-pfs-filter-mobile-toolbar-right'),
          (n.selector.backButton = '.boost-pfs-filter-back-btn'),
          (n.selector.refineByOnTitle =
            '.boost-pfs-filter-selected-items-mobile'),
          (n.selector.headerTitle = '.boost-pfs-filter-mobile-toolbar-middle'),
          (n.style2ActiveFilterOption = null),
          n
        );
      }
      return (
        (e = c),
        (r = [
          {
            key: 'isActive',
            value: function (t) {
              return (
                t == Mr.FilterTreeType.VERTICAL &&
                'style2' == o.a.getSettingValue('general.filterTreeMobileStyle')
              );
            },
          },
        ]),
        (n = [
          {
            key: 'init',
            value: function () {
              Nl(Wl(c.prototype), 'init', this).call(this),
                i()(this.idSelector).length > 0 &&
                  (i()(this.idSelector)
                    .addClass('boost-pfs-filter-tree-mobile-style2')
                    .addClass('boost-pfs-filter-tree-mobile-sticky'),
                  o.a.getSettingValue(
                    'general.filterTreeMobileStyleFullWidth'
                  ) &&
                    i()(this.idSelector).addClass(
                      'boost-pfs-filter-tree-mobile-full-width-style'
                    ));
            },
          },
          {
            key: 'getHeaderTemplate',
            value: function () {
              return '\n\t\t\t<div class="boost-pfs-filter-mobile-toolbar">\n\t\t\t\t<div class="boost-pfs-filter-mobile-toolbar-top">\n\t\t\t\t\t<span class="{{class.closeFilterButton}}"><span>{{label.close}}</span></span>\n\t\t\t\t</div>\n\t\t\t\t<div class="boost-pfs-filter-mobile-toolbar-items">\n\t\t\t\t\t<div class="boost-pfs-filter-mobile-toolbar-left">\n\t\t\t\t\t\t<span class="boost-pfs-filter-back-btn" aria-label="{{label.back}}"></span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="boost-pfs-filter-mobile-toolbar-middle">{{label.refineMobile}}</div>\n\t\t\t\t\t<div class="boost-pfs-filter-mobile-toolbar-right">\n\t\t\t\t\t\t{{clearButton}}\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t'.trim();
            },
          },
          {
            key: 'render',
            value: function () {
              var t = this;
              if (
                (Nl(Wl(c.prototype), 'render', this).call(this),
                this.$element && u.a.isMobile())
              ) {
                var e = null;
                this.filterOptions.forEach(function (n) {
                  t.style2ActiveFilterOption &&
                    t.style2ActiveFilterOption.filterOptionId ==
                      n.filterOptionId &&
                    (e = n);
                }),
                  (this.style2ActiveFilterOption = e),
                  this.renderFilterTreeHeader(),
                  this.renderFilterTreeFooter(),
                  this.renderFilterOptionCollapse(),
                  this.renderFilterOptionClear(),
                  this.renderRefineByOnTitle();
              }
            },
          },
          {
            key: 'bindEvents',
            value: function () {
              var t = this;
              Nl(Wl(c.prototype), 'bindEvents', this).call(this),
                this.$element &&
                  u.a.isMobile() &&
                  (this.$element
                    .find(this.selector.backButton)
                    .on('click', this.closeFilterOption.bind(this)),
                  this.filterOptions.forEach(function (e) {
                    e.$filterOptionTitleElement &&
                      (e.$filterOptionTitleElement.off('click'),
                      e.$filterOptionTitleElement.on(
                        'click',
                        t.openFilterOption.bind(t, e)
                      ));
                  })),
                this.mathHeightToolbarHeader();
            },
          },
          {
            key: 'renderFilterTreeHeader',
            value: function () {
              this.style2ActiveFilterOption
                ? (this.$element
                    .find(this.selector.headerTitle)
                    .html(u.a.stripHtml(this.style2ActiveFilterOption.label)),
                  this.$element.find(this.selector.backButton).show())
                : (this.$element
                    .find(this.selector.headerTitle)
                    .html(a.a.refineMobile),
                  this.$element.find(this.selector.backButton).hide()),
                this.mathHeightToolbarHeader();
            },
          },
          {
            key: 'renderFilterTreeFooter',
            value: function () {
              var t =
                this.parent && this.parent.data
                  ? ' (' + this.parent.data.total_product + ')'
                  : '';
              this.$element
                .find('.' + N.a.showResultFilterButton)
                .html(u.a.stripHtml(a.a.showResult + t));
            },
          },
          {
            key: 'renderFilterOptionCollapse',
            value: function () {
              var t = this;
              this.filterOptions.forEach(function (e) {
                if (
                  e.$filterOptionTitleElement &&
                  e.$filterOptionContentElement &&
                  e.collapse
                ) {
                  e.$element.removeClass('boost-pfs-filter-option-collapsed');
                  var n = e.$element.find('.boost-pfs-filter-option-title'),
                    r = e.$filterOptionContentElement;
                  t.style2ActiveFilterOption
                    ? e == t.style2ActiveFilterOption
                      ? (n.hide(), r.show())
                      : (n.hide(), r.hide())
                    : (n.show(), r.hide());
                }
              });
            },
          },
          {
            key: 'renderFilterOptionClear',
            value: function () {
              var t = this.clearAllButton.$element,
                e = this.$element.find(this.selector.clearAllButtonContainer);
              e &&
                (t &&
                  (null == this.style2ActiveFilterOption &&
                  l.a.hasFilterOptionParam
                    ? e.append(t)
                    : t.detach()),
                this.filterOptions.forEach(function (t) {
                  t.clearButton &&
                    t.clearButton.$element &&
                    t.clearButton.$element.detach();
                }),
                this.style2ActiveFilterOption &&
                  this.style2ActiveFilterOption.clearButton &&
                  this.style2ActiveFilterOption.clearButton.$element &&
                  e.append(this.style2ActiveFilterOption.clearButton.$element));
            },
          },
          {
            key: 'renderRefineByOnTitle',
            value: function () {
              var t = this;
              this.filterOptions.forEach(function (e) {
                if (e.$element) {
                  var n = '';
                  if (e.filterOptionId.startsWith(l.a.prefix + '_c_')) {
                    var r =
                      e.displayType == pr.a.DisplayType.MULTI_LEVEL_COLLECTIONS
                        ? e.allNestedFilterItems
                        : e.filterItems;
                    if (r && r.size > 0) {
                      var i = '',
                        o = [];
                      r.forEach(function (t) {
                        t.isSelected &&
                          (2 == t.level || 3 == t.level
                            ? o.push(u.a.stripHtml(t.label))
                            : (i = u.a.stripHtml(t.label)));
                      }),
                        (n = i && o.length > 0 ? i + ': ' + o.join(', ') : i);
                    }
                  } else if (t.refineBy && t.refineBy.refineByItems) {
                    var a = [];
                    t.refineBy.refineByItems.forEach(function (t) {
                      if (t.filterOptionId == e.filterOptionId) {
                        var n = u.a.stripHtml(t.label);
                        n && a.push(n);
                      }
                    }),
                      (n = a.join(', '));
                  }
                  var s = n ? '<span>' + u.a.stripHtml(n) + '</span>' : '';
                  e.$element.find(t.selector.refineByOnTitle).html(s);
                }
              });
            },
          },
          {
            key: 'openFilterOption',
            value: function (t) {
              (this.style2ActiveFilterOption = t),
                this.renderFilterTreeHeader(),
                this.renderFilterOptionCollapse(),
                this.renderFilterOptionClear(),
                this.mathHeightToolbarHeader();
            },
          },
          {
            key: 'closeFilterOption',
            value: function () {
              (this.style2ActiveFilterOption = null),
                this.renderFilterTreeHeader(),
                this.renderFilterOptionCollapse(),
                this.renderFilterOptionClear();
            },
          },
          {
            key: 'onClickMobileButton',
            value: function (t) {
              t && (t.stopImmediatePropagation(), t.stopPropagation()),
                (this.style2ActiveFilterOption = null);
              var e = i()(this.idSelector);
              e &&
                ((this.mobileButton.isCollapsed =
                  !this.mobileButton.isCollapsed),
                this.mobileButton.isCollapsed
                  ? (e.removeClass(N.a.filterTreeMobileOpen),
                    i()('body').removeClass(N.a.filterTreeOpenBody),
                    i()('html').removeClass('boost-pfs-body-no-scroll'))
                  : (this.closeFilterOption(),
                    e.addClass(N.a.filterTreeMobileOpen),
                    i()('body').addClass(N.a.filterTreeOpenBody),
                    i()('html').addClass('boost-pfs-body-no-scroll'))),
                this.mobileButton.afterToggleFilterTree(),
                this.mathHeightToolbarHeader();
            },
          },
          {
            key: 'mathHeightToolbarHeader',
            value: function () {
              var t = i()('.boost-pfs-filter-mobile-toolbar').height();
              this.filterTreeType == Mr.FilterTreeType.VERTICAL &&
                u.a.isMobile() &&
                i()('.boost-pfs-filter-options-wrapper').css('top', t + 'px');
            },
          },
        ]) && Vl(e.prototype, n),
        r && Vl(e, r),
        c
      );
    })(jl);
    function Gl(t) {
      return (Gl =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function zl(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function Kl(t, e, n) {
      return (Kl =
        'undefined' != typeof Reflect && Reflect.get
          ? Reflect.get
          : function (t, e, n) {
              var r = (function (t, e) {
                for (
                  ;
                  !Object.prototype.hasOwnProperty.call(t, e) &&
                  null !== (t = Jl(t));

                );
                return t;
              })(t, e);
              if (r) {
                var i = Object.getOwnPropertyDescriptor(r, e);
                return i.get ? i.get.call(n) : i.value;
              }
            })(t, e, n || t);
    }
    function Yl(t, e) {
      return (Yl =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function Ql(t, e) {
      return !e || ('object' !== Gl(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function Jl(t) {
      return (Jl = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var Xl = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && Yl(t, e);
      })(l, t);
      var e,
        n,
        r,
        a = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = Jl(t);
            if (e()) {
              var i = Jl(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return Ql(this, n);
          };
        })(l);
      function l(t, e) {
        var n;
        return (
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, l),
          ((n = a.call(this, t, e)).style = 'style2-fullwidth'),
          n
        );
      }
      return (
        (e = l),
        (r = [
          {
            key: 'isActive',
            value: function (t) {
              return (
                t == Mr.FilterTreeType.VERTICAL &&
                'style2-fullwidth' ==
                  o.a.getSettingValue('general.filterTreeMobileStyle')
              );
            },
          },
        ]),
        (n = [
          {
            key: 'init',
            value: function () {
              Kl(Jl(l.prototype), 'init', this).call(this),
                i()(this.idSelector).length > 0 &&
                  (i()(this.idSelector)
                    .addClass('boost-pfs-filter-tree-mobile-style2')
                    .addClass('boost-pfs-filter-tree-mobile-sticky')
                    .addClass('boost-pfs-filter-tree-mobile-full-width-style'),
                  o.a.getSettingValue(
                    'general.filterTreeMobileStyleFullWidth'
                  ) &&
                    i()(this.idSelector).addClass(
                      'boost-pfs-filter-tree-mobile-full-width-style'
                    ));
            },
          },
        ]) && zl(e.prototype, n),
        r && zl(e, r),
        l
      );
    })(ql);
    function Zl(t) {
      return (Zl =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function ts(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function es(t, e, n) {
      return (es =
        'undefined' != typeof Reflect && Reflect.get
          ? Reflect.get
          : function (t, e, n) {
              var r = (function (t, e) {
                for (
                  ;
                  !Object.prototype.hasOwnProperty.call(t, e) &&
                  null !== (t = is(t));

                );
                return t;
              })(t, e);
              if (r) {
                var i = Object.getOwnPropertyDescriptor(r, e);
                return i.get ? i.get.call(n) : i.value;
              }
            })(t, e, n || t);
    }
    function ns(t, e) {
      return (ns =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function rs(t, e) {
      return !e || ('object' !== Zl(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function is(t) {
      return (is = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var os = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && ns(t, e);
      })(l, t);
      var e,
        n,
        r,
        a = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = is(t);
            if (e()) {
              var i = is(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return rs(this, n);
          };
        })(l);
      function l(t, e) {
        var n;
        return (
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, l),
          ((n = a.call(this, t, e)).style = 'style3'),
          (n.selector.refineByOnTitle =
            '.boost-pfs-filter-selected-items-mobile'),
          (n.selector.clearAllButtonContainer =
            '.boost-pfs-filter-mobile-toolbar-bottom'),
          n
        );
      }
      return (
        (e = l),
        (r = [
          {
            key: 'isActive',
            value: function (t) {
              return (
                t == Mr.FilterTreeType.VERTICAL &&
                'style3' == o.a.getSettingValue('general.filterTreeMobileStyle')
              );
            },
          },
        ]),
        (n = [
          {
            key: 'init',
            value: function () {
              es(is(l.prototype), 'init', this).call(this),
                i()(this.idSelector).length > 0 &&
                  (i()(this.idSelector)
                    .addClass('boost-pfs-filter-tree-mobile-style3')
                    .addClass('boost-pfs-filter-tree-mobile-sticky'),
                  o.a.getSettingValue(
                    'general.filterTreeMobileStyleFullWidth'
                  ) &&
                    i()(this.idSelector).addClass(
                      'boost-pfs-filter-tree-mobile-full-width-style'
                    ));
            },
          },
          {
            key: 'render',
            value: function () {
              var t = this;
              es(is(l.prototype), 'render', this).call(this),
                this.$element &&
                  u.a.isMobile() &&
                  this.filterOptions.forEach(function (e) {
                    if (e.$element && t.refineBy && t.refineBy.refineByItems) {
                      var n = [];
                      t.refineBy.refineByItems.forEach(function (t) {
                        if (t.filterOptionId == e.filterOptionId) {
                          var r = t.buildLabel();
                          r && n.push(r);
                        }
                      }),
                        e.$element
                          .find(t.selector.refineByOnTitle)
                          .html(u.a.stripHtml(n.join(', ')));
                    }
                  });
            },
          },
          {
            key: 'bindEvents',
            value: function () {
              es(is(l.prototype), 'bindEvents', this).call(this),
                this.mathHeightToolbarHeader();
            },
          },
          {
            key: 'renderFilterTreeHeader',
            value: function () {
              this.mathHeightToolbarHeader();
            },
          },
          {
            key: 'renderFilterTreeFooter',
            value: function () {
              var t =
                this.parent && this.parent.data
                  ? ' (' + this.parent.data.total_product + ')'
                  : '';
              this.$element
                .find('.' + N.a.showResultFilterButton)
                .html(u.a.stripHtml(Labels.showResult + t));
            },
          },
          {
            key: 'onClickMobileButton',
            value: function (t) {
              t && (t.stopImmediatePropagation(), t.stopPropagation());
              var e = i()(this.idSelector);
              e &&
                ((this.mobileButton.isCollapsed =
                  !this.mobileButton.isCollapsed),
                this.mobileButton.isCollapsed
                  ? (e.removeClass(N.a.filterTreeMobileOpen),
                    i()('body').removeClass(N.a.filterTreeOpenBody),
                    i()('html').removeClass('boost-pfs-body-no-scroll'))
                  : (e.addClass(N.a.filterTreeMobileOpen),
                    i()('body').addClass(N.a.filterTreeOpenBody),
                    i()('html').addClass('boost-pfs-body-no-scroll'))),
                this.mobileButton.afterToggleFilterTree(),
                this.mathHeightToolbarHeader();
            },
          },
          {
            key: 'mathHeightToolbarHeader',
            value: function () {
              var t = i()('.boost-pfs-filter-mobile-toolbar').height();
              this.filterTreeType == Mr.FilterTreeType.VERTICAL &&
                u.a.isMobile() &&
                i()('.boost-pfs-filter-options-wrapper').css('top', t + 'px');
            },
          },
        ]) && ts(e.prototype, n),
        r && ts(e, r),
        l
      );
    })(jl);
    function as(t) {
      return (as =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function ls(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function ss(t, e, n) {
      return (ss =
        'undefined' != typeof Reflect && Reflect.get
          ? Reflect.get
          : function (t, e, n) {
              var r = (function (t, e) {
                for (
                  ;
                  !Object.prototype.hasOwnProperty.call(t, e) &&
                  null !== (t = ps(t));

                );
                return t;
              })(t, e);
              if (r) {
                var i = Object.getOwnPropertyDescriptor(r, e);
                return i.get ? i.get.call(n) : i.value;
              }
            })(t, e, n || t);
    }
    function cs(t, e) {
      return (cs =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function us(t, e) {
      return !e || ('object' !== as(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function ps(t) {
      return (ps = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var fs = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && cs(t, e);
      })(l, t);
      var e,
        n,
        r,
        a = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = ps(t);
            if (e()) {
              var i = ps(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return us(this, n);
          };
        })(l);
      function l(t, e) {
        var n;
        return (
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, l),
          ((n = a.call(this, t, e)).style = 'style3-fullwidth'),
          n
        );
      }
      return (
        (e = l),
        (r = [
          {
            key: 'isActive',
            value: function (t) {
              return (
                t == Mr.FilterTreeType.VERTICAL &&
                'style3-fullwidth' ==
                  o.a.getSettingValue('general.filterTreeMobileStyle')
              );
            },
          },
        ]),
        (n = [
          {
            key: 'init',
            value: function () {
              ss(ps(l.prototype), 'init', this).call(this),
                i()(this.idSelector).length > 0 &&
                  (i()(this.idSelector)
                    .addClass('boost-pfs-filter-tree-mobile-style3')
                    .addClass('boost-pfs-filter-tree-mobile-sticky')
                    .addClass('boost-pfs-filter-tree-mobile-full-width-style'),
                  o.a.getSettingValue(
                    'general.filterTreeMobileStyleFullWidth'
                  ) &&
                    i()(this.idSelector).addClass(
                      'boost-pfs-filter-tree-mobile-full-width-style'
                    ));
            },
          },
        ]) && ls(e.prototype, n),
        r && ls(e, r),
        l
      );
    })(os);
    function hs(t) {
      return (hs =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function ys(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function ds(t, e, n) {
      return (ds =
        'undefined' != typeof Reflect && Reflect.get
          ? Reflect.get
          : function (t, e, n) {
              var r = (function (t, e) {
                for (
                  ;
                  !Object.prototype.hasOwnProperty.call(t, e) &&
                  null !== (t = bs(t));

                );
                return t;
              })(t, e);
              if (r) {
                var i = Object.getOwnPropertyDescriptor(r, e);
                return i.get ? i.get.call(n) : i.value;
              }
            })(t, e, n || t);
    }
    function gs(t, e) {
      return (gs =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function ms(t, e) {
      return !e || ('object' !== hs(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function bs(t) {
      return (bs = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var vs = (function (t) {
        !(function (t, e) {
          if ('function' != typeof e && null !== e)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && gs(t, e);
        })(c, t);
        var e,
          n,
          r,
          s = (function (t) {
            function e() {
              if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            }
            return function () {
              var n,
                r = bs(t);
              if (e()) {
                var i = bs(this).constructor;
                n = Reflect.construct(r, arguments, i);
              } else n = r.apply(this, arguments);
              return ms(this, n);
            };
          })(c);
        function c(t, e) {
          var n;
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError('Cannot call a class as a function');
            })(this, c),
            ((n = s.call(this, t, e)).style = 'style4'),
            (n.selector.clearAllButtonContainer =
              '.boost-pfs-filter-mobile-toolbar-right'),
            (n.selector.backButton = '.boost-pfs-filter-back-btn'),
            (n.selector.refineByOnTitle =
              '.boost-pfs-filter-selected-items-mobile'),
            (n.selector.headerTitle = '.bc-sf-filter-mobile-toolbar-header'),
            (n.selector.headerClose = '.boost-pfs-filter-close'),
            (n.style4ActiveFilterOption = null),
            (o.a.activeFilterScrollbarMobile = !1),
            n
          );
        }
        return (
          (e = c),
          (r = [
            {
              key: 'isActive',
              value: function (t) {
                return (
                  t == Mr.FilterTreeType.VERTICAL &&
                  'style4' ==
                    o.a.getSettingValue('general.filterTreeMobileStyle')
                );
              },
            },
          ]),
          (n = [
            {
              key: 'init',
              value: function () {
                ds(bs(c.prototype), 'init', this).call(this),
                  i()(this.idSelector).length > 0 &&
                    (i()(this.idSelector)
                      .addClass('boost-pfs-filter-tree-mobile-style4')
                      .addClass('boost-pfs-filter-tree-mobile-sticky'),
                    o.a.getSettingValue(
                      'general.filterTreeMobileStyleFullWidth'
                    ) &&
                      i()(this.idSelector).addClass(
                        'boost-pfs-filter-tree-mobile-full-width-style'
                      ));
              },
            },
            {
              key: 'getHeaderTemplate',
              value: function () {
                return '\n        <div class="boost-pfs-filter-mobile-toolbar">\n            <div class="bc-sf-filter-mobile-toolbar-header">{{label.refineMobile}}</div>\n            <div class="boost-pfs-filter-mobile-toolbar-items">\n                <div class="boost-pfs-filter-mobile-toolbar-left">\n                    <span class="{{class.closeFilterButton}}"><span>{{label.close}}</span></span>\n                    <span class="boost-pfs-filter-back-btn">{{label.apply}}</span>\n                </div>\n                <div class="boost-pfs-filter-mobile-toolbar-right">\n                    {{clearButton}}\n                </div>\n            </div>\n        </div>\n    '.trim();
              },
            },
            {
              key: 'render',
              value: function () {
                var t = this;
                if (
                  (ds(bs(c.prototype), 'render', this).call(this),
                  this.$element && u.a.isMobile())
                ) {
                  var e = null;
                  this.filterOptions.forEach(function (n) {
                    t.style4ActiveFilterOption &&
                      t.style4ActiveFilterOption.filterOptionId ==
                        n.filterOptionId &&
                      (e = n);
                  }),
                    (this.style4ActiveFilterOption = e),
                    this.renderFilterTreeHeader(),
                    this.renderFilterTreeFooter(),
                    this.renderFilterOptionCollapse(),
                    this.renderFilterOptionClear(),
                    this.renderRefineByOnTitle();
                }
              },
            },
            {
              key: 'bindEvents',
              value: function () {
                var t = this;
                ds(bs(c.prototype), 'bindEvents', this).call(this),
                  this.$element &&
                    u.a.isMobile() &&
                    (this.$element
                      .find(this.selector.backButton)
                      .on('click', this.closeFilterOption.bind(this)),
                    this.filterOptions.forEach(function (e) {
                      e.$filterOptionTitleElement &&
                        (e.$filterOptionTitleElement.off('click'),
                        e.$filterOptionTitleElement.on(
                          'click',
                          t.openFilterOption.bind(t, e)
                        ));
                    }));
              },
            },
            {
              key: 'renderFilterTreeHeader',
              value: function () {
                this.style4ActiveFilterOption
                  ? (this.$element
                      .find(this.selector.headerTitle)
                      .html(u.a.stripHtml(this.style4ActiveFilterOption.label)),
                    this.$element.find(this.selector.backButton).show(),
                    this.$element.find(this.selector.headerClose).hide())
                  : (this.$element
                      .find(this.selector.headerTitle)
                      .html(a.a.refineMobile),
                    this.$element.find(this.selector.backButton).hide(),
                    this.$element.find(this.selector.headerClose).show());
              },
            },
            {
              key: 'renderFilterTreeFooter',
              value: function () {
                var t =
                  this.parent && this.parent.data
                    ? ' (' + this.parent.data.total_product + ')'
                    : '';
                this.$element
                  .find('.' + N.a.showResultFilterButton)
                  .html(
                    a.a.showResult +
                      '<span class="boost-pfs-number-result">' +
                      u.a.stripHtml(t) +
                      '</span>'
                  );
              },
            },
            {
              key: 'renderFilterOptionCollapse',
              value: function () {
                var t = this;
                this.filterOptions.forEach(function (e) {
                  if (
                    e.$filterOptionTitleElement &&
                    e.$filterOptionContentElement &&
                    e.collapse
                  ) {
                    e.$element.removeClass('boost-pfs-filter-option-collapsed');
                    var n = e.$element.find('.boost-pfs-filter-option-title'),
                      r = e.$filterOptionContentElement;
                    t.style4ActiveFilterOption
                      ? e == t.style4ActiveFilterOption
                        ? (n.hide(), r.show())
                        : (n.hide(), r.hide())
                      : (n.show(), r.hide());
                  }
                });
              },
            },
            {
              key: 'renderFilterOptionClear',
              value: function () {
                var t = this.clearAllButton.$element,
                  e = this.$element.find(this.selector.clearAllButtonContainer);
                e &&
                  (t &&
                    (null == this.style4ActiveFilterOption &&
                    l.a.hasFilterOptionParam
                      ? e.append(t)
                      : t.detach()),
                  this.filterOptions.forEach(function (t) {
                    t.clearButton &&
                      t.clearButton.$element &&
                      t.clearButton.$element.detach();
                  }),
                  this.style4ActiveFilterOption &&
                    this.style4ActiveFilterOption.clearButton &&
                    this.style4ActiveFilterOption.clearButton.$element &&
                    e.append(
                      this.style4ActiveFilterOption.clearButton.$element
                    ));
              },
            },
            {
              key: 'renderRefineByOnTitle',
              value: function () {
                var t = this;
                this.filterOptions.forEach(function (e) {
                  if (e.$element) {
                    var n = '';
                    if (e.filterOptionId.startsWith(l.a.prefix + '_c_')) {
                      var r =
                        e.displayType ==
                        pr.a.DisplayType.MULTI_LEVEL_COLLECTIONS
                          ? e.allNestedFilterItems
                          : e.filterItems;
                      if (r && r.size > 0) {
                        var i = '',
                          o = [];
                        r.forEach(function (t) {
                          t.isSelected &&
                            (2 == t.level || 3 == t.level
                              ? o.push(u.a.stripHtml(t.label))
                              : (i = u.a.stripHtml(t.label)));
                        }),
                          (n = i && o.length > 0 ? i + ': ' + o.join(', ') : i);
                      }
                    } else if (t.refineBy && t.refineBy.refineByItems) {
                      var a = [];
                      t.refineBy.refineByItems.forEach(function (t) {
                        if (t.filterOptionId == e.filterOptionId) {
                          var n = u.a.stripHtml(t.label);
                          n && a.push(n);
                        }
                      }),
                        (n = a.join(', '));
                    }
                    var s = n ? '<span>' + u.a.stripHtml(n) + '</span>' : '';
                    e.$element.find(t.selector.refineByOnTitle).html(s);
                  }
                });
              },
            },
            {
              key: 'openFilterOption',
              value: function (t) {
                (this.style4ActiveFilterOption = t),
                  this.renderFilterTreeHeader(),
                  this.renderFilterOptionCollapse(),
                  this.renderFilterOptionClear();
                var e = i()('.boost-pfs-filter-mobile-toolbar').height();
                i()('.boost-pfs-filter-options-wrapper').css('top', e + 'px');
              },
            },
            {
              key: 'closeFilterOption',
              value: function () {
                (this.style4ActiveFilterOption = null),
                  this.renderFilterTreeHeader(),
                  this.renderFilterOptionCollapse(),
                  this.renderFilterOptionClear();
              },
            },
            {
              key: 'onClickMobileButton',
              value: function (t) {
                t && (t.stopImmediatePropagation(), t.stopPropagation()),
                  (this.style4ActiveFilterOption = null);
                var e = i()(this.idSelector);
                e &&
                  ((this.mobileButton.isCollapsed =
                    !this.mobileButton.isCollapsed),
                  this.mobileButton.isCollapsed
                    ? (e.removeClass(N.a.filterTreeMobileOpen),
                      i()('body').removeClass(N.a.filterTreeOpenBody),
                      i()('html').removeClass('boost-pfs-body-no-scroll'))
                    : (e.addClass(N.a.filterTreeMobileOpen),
                      i()('body').addClass(N.a.filterTreeOpenBody),
                      i()('html').addClass('boost-pfs-body-no-scroll'))),
                  this.mobileButton.afterToggleFilterTree();
              },
            },
          ]) && ys(e.prototype, n),
          r && ys(e, r),
          c
        );
      })(jl),
      Ss = {
        newFilterTree: function (t, e) {
          return os.isActive(e)
            ? new os(t, e)
            : ql.isActive(e)
            ? new ql(t, e)
            : Xl.isActive(e)
            ? new Xl(t, e)
            : fs.isActive(e)
            ? new fs(t, e)
            : vs.isActive(e)
            ? new vs(t, e)
            : new jl(t, e);
        },
      };
    function Ts(t) {
      return (Ts =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function Os(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function Ps(t, e) {
      return (Ps =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function ws(t, e) {
      return !e || ('object' !== Ts(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function _s(t) {
      return (_s = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var Cs = (function (t) {
        !(function (t, e) {
          if ('function' != typeof e && null !== e)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && Ps(t, e);
        })(c, t);
        var e,
          n,
          r,
          a = (function (t) {
            function e() {
              if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            }
            return function () {
              var n,
                r = _s(t);
              if (e()) {
                var i = _s(this).constructor;
                n = Reflect.construct(r, arguments, i);
              } else n = r.apply(this, arguments);
              return ws(this, n);
            };
          })(c);
        function c() {
          var t;
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError('Cannot call a class as a function');
            })(this, c),
            ((t = a.call(this)).filterTrees = []),
            (t.filterMobileButton = null),
            (t.filterDesktopButton = null),
            (t.filterResult = null),
            (t.filterLoadingIcon = null),
            (t.filterScrollToTop = null),
            (t.data = null),
            (t.fromCache = !1),
            (t.eventType = ''),
            (t.error = ''),
            (t.isFetchedFilterData = !1),
            t
          );
        }
        return (
          (e = c),
          (n = [
            {
              key: 'beforeInit',
              value: function () {
                u.a.isBadUrl() &&
                  ((this.isInit = !0),
                  u.a.setWindowLocation(window.location.pathname));
              },
            },
            {
              key: 'init',
              value: function () {
                this.initInCollectionSearch(),
                  this.initFilterTrees(),
                  this.initFilterMobileButton(),
                  this.initFilterDesktopButton(),
                  (this.filterResult = new ur()),
                  this.addComponent(this.filterResult),
                  (this.filterLoadingIcon = new Ar()),
                  this.addComponent(this.filterLoadingIcon),
                  (this.filterScrollToTop = new jr()),
                  this.addComponent(this.filterScrollToTop),
                  this.filterLoadingIcon.setShow(!0);
              },
            },
            {
              key: 'afterInit',
              value: function () {
                K.default.updateParamsFromUrl(),
                  K.default.getFilterData(
                    'init',
                    this.afterGetFilterData.bind(this),
                    this.errorFilterCallback.bind(this)
                  );
              },
            },
            {
              key: 'initFilterTrees',
              value: function () {
                var t = this;
                i()(s.a.filterTree).each(function (e, n) {
                  var r = i()(n),
                    a = '';
                  if (
                    (r.hasClass(N.a.filterTreeVertical)
                      ? ((a = Mr.FilterTreeType.VERTICAL),
                        i()('body').addClass(
                          N.a.filterTree +
                            '-vertical-' +
                            o.a.getSettingValue(
                              'general.filterTreeVerticalStyle'
                            )
                        ))
                      : r.hasClass(N.a.filterTreeHorizontal) &&
                        ((a = Mr.FilterTreeType.HORIZONTAL),
                        i()('body').addClass(
                          N.a.filterTree +
                            '-horizontal-' +
                            o.a.getSettingValue(
                              'general.filterTreeHorizontalStyle'
                            )
                        )),
                    a)
                  ) {
                    var l = N.a.filterTree + (0 == e ? '' : (e + 1).toString());
                    r.attr('id', u.a.stripHtml(l));
                    var s = Ss.newFilterTree(l, a);
                    t.addComponent(s),
                      t.filterTrees.push(s),
                      t.renderFilterBackdrop(s);
                  }
                });
              },
            },
            {
              key: 'initFilterMobileButton',
              value: function () {
                if (i()(s.a.filterTreeMobileButton).length > 0) {
                  var t = i()(s.a.filterTreeMobileButton).first(),
                    e = u.a.stripHtml(t.attr('data-filter-tree-id'));
                  this.filterMobileButton = null;
                  for (var n = this.filterTrees.length, r = 0; r < n; r++)
                    this.filterMobileButton ||
                      (0 !=
                        i()('#' + this.filterTrees[r].id).not(
                          '[data-is-desktop]'
                        ).length &&
                        ((e && this.filterTrees[r].id == e) ||
                          (!e &&
                            this.filterTrees[r].filterTreeType ==
                              Mr.FilterTreeType.VERTICAL)) &&
                        ((this.filterMobileButton = new br(
                          this.filterTrees[r]
                        )),
                        this.addComponent(this.filterMobileButton)));
                }
              },
            },
            {
              key: 'initFilterDesktopButton',
              value: function () {
                if (i()(s.a.filterTreeDesktopButton).length > 0) {
                  var t = i()(s.a.filterTreeDesktopButton)
                    .first()
                    .attr('data-filter-tree-id');
                  this.filterDesktopButton = null;
                  for (var e = this.filterTrees.length, n = 0; n < e; n++)
                    this.filterDesktopButton ||
                      (0 !=
                        i()('#' + this.filterTrees[n].id).not(
                          '[data-is-mobile]'
                        ).length &&
                        ((t && this.filterTrees[n].id == t) || !t) &&
                        ((this.filterDesktopButton = new _r(
                          this.filterTrees[n]
                        )),
                        this.addComponent(this.filterDesktopButton)));
                }
              },
            },
            {
              key: 'initInCollectionSearch',
              value: function () {
                var t = new Ht();
                this.addComponent(t);
              },
            },
            {
              key: 'isRender',
              value: function () {
                return this.isFetchedFilterData || this.isFetchedProductData;
              },
            },
            {
              key: 'render',
              value: function () {
                this.isFetchedFilterData &&
                  (this.filterTrees.forEach(function (t) {
                    i()(t.idSelector).length > 0 &&
                      !t.isRenderPartially &&
                      i()(t.idSelector).first().html('').append(t.$element);
                  }),
                  i()(s.a.filterTreeMobileButton).length > 0 &&
                    'init' == this.eventType &&
                    this.filterMobileButton &&
                    i()(s.a.filterTreeMobileButton)
                      .first()
                      .html('')
                      .append(this.filterMobileButton.$element),
                  i()(s.a.filterTreeDesktopButton).length > 0 &&
                    'init' == this.eventType &&
                    this.filterDesktopButton &&
                    (i()('body').addClass(
                      N.a.filterTreeDesktopButton + '-body'
                    ),
                    i()(s.a.filterTreeDesktopButton)
                      .first()
                      .html('')
                      .append(this.filterDesktopButton.$element)));
              },
            },
            {
              key: 'renderFilterBackdrop',
              value: function (t) {
                (!u.a.isMobile() &&
                  'style-off-canvas' !=
                    o.a.getSettingValue('general.filterTreeVerticalStyle')) ||
                  t.filterTreeType != Mr.FilterTreeType.VERTICAL ||
                  i()('body').hasClass('boost-pfs-filter-overlay') ||
                  i()(t.idSelector).before(
                    '<div class="boost-pfs-filter-overlay" role="button" tabindex="0" aria-label="Background overlay"></div>'
                  ),
                  u.a.isMobile() &&
                    (i()(t.idSelector).addClass(
                      'boost-pfs-filter-mobile-' +
                        o.a.getSettingValue('general.filterTreeMobileStyle')
                    ),
                    i()('body').addClass(
                      'boost-pfs-filter-mobile-' +
                        o.a.getSettingValue('general.filterTreeMobileStyle') +
                        '-body'
                    ));
              },
            },
            {
              key: 'bindEvents',
              value: function () {
                u.a.isMobile() &&
                o.a.getSettingValue('general.stickyFilterOnMobile')
                  ? this.stickyFilterMobile()
                  : !u.a.isMobile() &&
                    o.a.getSettingValue('general.stickyFilterOnDesktop') &&
                    this.stickyFilterDesktop();
              },
            },
            {
              key: 'stickyFilterMobile',
              value: function () {
                (i()(s.a.stickyFilterTreeMobileButtonWrapper).length > 0
                  ? i()(s.a.stickyFilterTreeMobileButtonWrapper)
                  : i()(s.a.stickyElementMobile)
                ).each(function (t, e) {
                  u.a.sticky(
                    i()(e),
                    s.a.endStickyMobile,
                    s.a.avoidStickyHeader
                  );
                });
              },
            },
            {
              key: 'stickyFilterDesktop',
              value: function () {
                var t = i()(s.a.stickyElementDesktop),
                  e = o.a.getSettingValue('general.filterTreeVerticalStyle'),
                  n = i()(s.a.stickyFilterTreeDesktopButtonWrapper),
                  r = i()(s.a.filterTreeHorizontalWrapper),
                  a = s.a.avoidStickyHeader,
                  l =
                    i()(s.a.filterTreeWrapper).length > 0
                      ? s.a.filterTreeWrapper
                      : s.a.endStickyDesktop;
                n.length > 0 &&
                  (a =
                    i()(s.a.avoidStickyHeader).length > 0
                      ? s.a.avoidStickyHeader +
                        ',' +
                        s.a.stickyFilterTreeDesktopButtonWrapper
                      : s.a.stickyFilterTreeDesktopButtonWrapper);
                var c = n.attr('data-offset-top'),
                  p = r.attr('data-offset-top');
                n.length > 0 &&
                  r.length > 0 &&
                  void 0 !== c &&
                  c > 0 &&
                  ((p = p > c ? c : p), r.attr('data-offset-top', p));
                var f = !!t.hasClass(N.a.filterTreeHorizontal);
                ('style-off-canvas' === e || 'style-expand' === e || f) &&
                  (n.each(function (t, e) {
                    u.a.sticky(
                      i()(e),
                      s.a.endStickyDesktop,
                      s.a.avoidStickyHeader
                    ),
                      n.css({ maxWidth: i()(l).width() + 'px' });
                  }),
                  r.each(function (e, n) {
                    u.a.sticky(i()(n), 'body', a),
                      t.css({ maxWidth: i()(l).width() + 'px' });
                  })),
                  t.each(function (r, o) {
                    (n.length < 1 || 'style-expand' === e) &&
                      (u.a.sticky(i()(o), s.a.endStickyDesktop, a),
                      f && t.css({ maxWidth: i()(l).width() + 'px' }));
                  });
              },
            },
            {
              key: 'afterGetFilterData',
              value: function (t, e, n) {
                !t ||
                !Array.isArray(t.products) ||
                0 != t.products.length ||
                void 0 === boostPFSAppConfig.general.collection_product_count ||
                t.products.length ==
                  boostPFSAppConfig.general.collection_product_count ||
                o.a.getSettingValue('general.productAndVariantAvailable') ||
                !o.a.getSettingValue('general.enableBackToOriginal') ||
                'init' != e ||
                l.a.hasFilterOptionParam ||
                l.a.collectionTags ||
                'function' == typeof K.default.beforeCall ||
                'function' == typeof K.default.beforeCallAsync
                  ? this.setData(t, e, n)
                  : this.errorFilterCallback();
              },
            },
            {
              key: 'setData',
              value: function (t, e, n) {
                (this.isFetchedFilterData = !1),
                  (this.isFetchedProductData = !1),
                  (this.data = JSON.parse(JSON.stringify(t))),
                  (this.fromCache = t.from_cache),
                  (this.error = t.error);
                var r = JSON.parse(JSON.stringify(l.a.queryParams));
                (l.a.queryParams = r),
                  void 0 !== l.a.activeCurrencyPrices &&
                    i.a.extend(l.a.queryParams, l.a.activeCurrencyPrices),
                  (this.eventType = e || t.event_type),
                  (this.clickedFilterOptionId =
                    n && n.filterOptionId && 'clear' != e
                      ? n.filterOptionId
                      : ''),
                  (t = this.modifyData(t)).filter &&
                    t.filter.options &&
                    -1 == l.a.imutableFilterTree.indexOf(this.eventType) &&
                    ((this.isFetchedFilterData = !0),
                    this.filterTrees.forEach(function (e) {
                      e.setData(t.filter);
                    })),
                  (t.products || t.collections || t.pages) &&
                    ((this.isFetchedProductData = !0),
                    this.filterResult.setData(t)),
                  this.refresh(),
                  this.filterLoadingIcon.setShow(!1);
              },
            },
            {
              key: 'modifyData',
              value: function (t) {
                return t;
              },
            },
            {
              key: 'errorFilterCallback',
              value: function () {
                if (
                  !(
                    u.a.isiOS() ||
                    u.a.isSafari() ||
                    u.a.isBackButton() ||
                    u.a
                      .getWindowLocation()
                      .href.includes('view=boost-pfs-original')
                  )
                ) {
                  var t =
                    u.a.getWindowLocation().href.split('?')[0] +
                    '?view=boost-pfs-original' +
                    (u.a.isSearchPage() && l.a.queryParams.hasOwnProperty('q')
                      ? '&q=' + l.a.queryParams.q
                      : '');
                  u.a.isBadUrl(t) || (window.location.href = t);
                }
              },
            },
          ]) && Os(e.prototype, n),
          r && Os(e, r),
          c
        );
      })(d.a),
      ks = [
        {
          name: 'getSettingValue',
          mapToFunction: function (t, e) {
            return o.a.getSettingValue(t, e);
          },
        },
        {
          name: 'getSortingList',
          mapToFunction: function () {
            return u.a.FilterResult.getSortingList();
          },
        },
        {
          name: 'buildToolbarLink',
          mapToFunction: function (t, e, n) {
            return u.a.buildToolbarLink(t, e, n);
          },
        },
        {
          name: 'optimizeImage',
          mapToFunction: function (t, e) {
            return u.a.optimizeImage(t, e);
          },
        },
        {
          name: 'buildProductItemUrl',
          mapToFunction: function (t, e) {
            return u.a.buildProductItemUrl(t, e);
          },
        },
        {
          name: 'refreshProperties',
          mapToFunction: function () {
            (BoostPFS.prototype.selector = s.a),
              (BoostPFS.prototype.queryParams = l.a.queryParams);
          },
        },
      ],
      Es = [
        {
          name: 'beforeBuildSearchBox',
          mapToFunction: 'beforeBindEvents',
          mapArguments: ['id'],
          component: p.a,
        },
        {
          name: 'afterBuildSearchBox',
          mapToFunction: 'afterBindEvents',
          mapArguments: ['id'],
          component: p.a,
        },
        {
          name: 'customizeSuggestion',
          mapToFunction: 'customizeAutoCompleteResizeMenu',
          mapArguments: ['$uiMenuElement', '$element', 'id'],
          component: p.a,
        },
        {
          name: 'afterShowSearchBoxMobile',
          mapToFunction: 'afterShowSearchBoxMobile',
          mapArguments: ['inputMobileId'],
          component: f.a,
        },
        {
          name: 'afterCloseSuggestionMobile',
          mapToFunction: 'afterCloseInstantSearchMobile',
          mapArguments: ['inputMobileId', '@0'],
          component: f.a,
        },
        {
          name: 'afterShowSearchBoxStyle3',
          mapToFunction: 'afterShowSearchBoxStyle3',
          mapArguments: ['inputStyle3Id'],
          component: h.a,
        },
        {
          name: 'afterCloseInstantSearchStyle3',
          mapToFunction: 'afterCloseInstantSearchStyle3',
          mapArguments: ['inputStyle3Id', '@0'],
          component: h.a,
        },
        {
          name: 'customizeSuggetionProductTitle',
          mapToFunction: 'customizeProductTitle',
          mapArguments: ['title', 'currentTerm', 'data'],
          component: y.a,
        },
        {
          name: 'buildProductGridItem',
          mapToFunction: 'compileTemplate',
          mapArguments: ['data', 'index', 'totalProduct'],
          component: E,
        },
        {
          name: 'buildProductListItem',
          mapToFunction: 'compileTemplate',
          mapArguments: ['data', 'index', 'totalProduct'],
          component: F,
        },
        {
          name: 'buildProductCollageItem',
          mapToFunction: 'compileTemplate',
          mapArguments: ['data', 'index', 'totalProduct'],
          component: V,
        },
        {
          name: 'prepareProductData',
          mapToFunction: 'prepareProductData',
          mapArguments: ['data'],
          component: ft,
        },
        {
          name: 'buildExtrasProductList',
          mapToFunction: 'afterRender',
          mapArguments: ['data', 'eventType'],
          component: ft,
        },
        {
          name: 'buildAdditionalElements',
          mapToFunction: 'afterRender',
          mapArguments: ['data', 'totalProduct', 'eventType'],
          component: Cs,
        },
        {
          name: 'buildPagination',
          mapToFunction: 'render',
          mapArguments: ['totalProduct', 'paginationType'],
          component: bt,
        },
        {
          name: 'buildFilterDisplayType',
          mapToFunction: 'render',
          mapArguments: [],
          component: wt,
        },
        {
          name: 'buildFilterSorting',
          mapToFunction: 'compileTemplate',
          mapArguments: [],
          component: It,
        },
        {
          name: 'buildFilterShowLimit',
          mapToFunction: 'compileTemplate',
          mapArguments: [],
          component: Dt,
        },
        {
          name: 'buildBreadcrumb',
          mapToFunction: 'buildBreadcrumb',
          mapArguments: ['collectionData', 'data'],
          component: le,
        },
      ],
      Rs = function (t, e) {
        BoostPFS.prototype.hasOwnProperty(t) || (BoostPFS.prototype[t] = e);
      },
      Is = function (t, e, n, r) {
        if (BoostPFS.prototype.hasOwnProperty(t)) {
          r.prototype[e] = function () {
            var e,
              r = [];
            if (n && n.length > 0)
              for (var i = 0; i < n.length; i++) {
                var o = n[i];
                if (this.hasOwnProperty(o)) r.push(this[o]);
                else if (0 == o.indexOf('@')) {
                  var a = parseInt(o.substr(1));
                  void 0 !== arguments[a] ? r.push(arguments[a]) : r.push(null);
                } else r.push(null);
              }
            return (e = BoostPFS.prototype[t]).call.apply(
              e,
              [BoostPFS.instance].concat(r)
            );
          };
        }
      },
      Ls = {
        mapLegacyFunctions: function () {
          ks.forEach(function (t) {
            Rs(t.name, t.mapToFunction);
          }),
            Es.forEach(function (t) {
              Is(t.name, t.mapToFunction, t.mapArguments, t.component);
            });
        },
        mapLegacyFunctionCall: Rs,
        mapLegacyFunctionOverride: Is,
      },
      As = n(69),
      xs = n(39),
      Fs = n(84),
      Bs = n(20),
      Ds = n(130),
      $s = n(75);
    function js(t) {
      return (js =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function Ms(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function Vs(t, e) {
      return (Vs =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function Ns(t, e) {
      return !e || ('object' !== js(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function Hs(t) {
      return (Hs = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var Us = (function (t) {
        !(function (t, e) {
          if ('function' != typeof e && null !== e)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && Vs(t, e);
        })(l, t);
        var e,
          n,
          r,
          a = (function (t) {
            function e() {
              if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            }
            return function () {
              var n,
                r = Hs(t);
              if (e()) {
                var i = Hs(this).constructor;
                n = Reflect.construct(r, arguments, i);
              } else n = r.apply(this, arguments);
              return Ns(this, n);
            };
          })(l);
        function l() {
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError('Cannot call a class as a function');
            })(this, l),
            a.call(this)
          );
        }
        return (
          (e = l),
          (n = [
            {
              key: 'init',
              value: function () {
                var t = this;
                if (
                  (i()(
                    'input[name="' +
                      o.a.getSettingValue('search.termKey') +
                      '"]:not([data-disable-instant-search]):not([data-already-init])'
                  ).each(function (e, n) {
                    var r = 'boost-pfs-search-box-' + e,
                      o = new p.a(r, i()(n));
                    t.addComponent(o);
                  }),
                  u.a.isMobile() &&
                    o.a.getSettingValue('search.suggestionMobileStyle') !==
                      Bs.a.Mobile.SuggestionType.STYLE_2)
                ) {
                  var e = $s.a.instantSearchMobile();
                  this.addComponent(e);
                }
                if (
                  (!u.a.isMobile() &&
                    'style3' ===
                      o.a.getSettingValue('search.suggestionStyle')) ||
                  '2-overlay-fullwidth' ===
                    o.a.getSettingValue('search.suggestionColumn')
                ) {
                  var n = $s.a.instantSearchStyle3();
                  this.addComponent(n);
                }
              },
            },
          ]) && Ms(e.prototype, n),
          r && Ms(e, r),
          l
        );
      })(d.a),
      Ws = n(85),
      qs = n(129),
      Gs = n(70),
      zs = n(43),
      Ks = n(121),
      Ys = n(125),
      Qs = n(128),
      Js = n(127),
      Xs = n(126),
      Zs = n(59),
      tc = n(123),
      ec = n(124),
      nc = n(122),
      rc = n(100),
      ic = {
        inject: function (t) {
          (t.jQ = i.a),
            (t.noUiSlider = fl.a),
            (t.Analytics = As.a),
            (t.Class = N.a),
            (t.Globals = l.a),
            (t.Labels = a.a),
            (t.Navigation = c.a),
            (t.Selector = s.a),
            (t.Settings = o.a),
            (t.Utils = u.a),
            (t.FunctionMapper = Ls),
            (t.Integration = g.a),
            (t.Api = xs.a),
            (t.FilterApi = K.default),
            (t.InstantSearchApi = Fs.default),
            (t.FilterTreeEnum = Mr),
            (t.FilterOptionEnum = pr.a),
            (t.InstantSearchEnum = Bs.a),
            (t.Filter = Cs),
            (t.FilterTree = jl),
            (t.FilterStyle = Ss),
            (t.FilterTreeStyle2 = ql),
            (t.FilterTreeStyle2Fullwidth = Xl),
            (t.FilterTreeStyle3 = os),
            (t.FilterTreeStyle3Fullwidth = fs),
            (t.FilterTreeStyle4 = vs),
            (t.FilterOption = ga),
            (t.FilterOptionList = wa),
            (t.FilterOptionBox = La),
            (t.FilterOptionSwatch = ja),
            (t.FilterOptionMultiLevelCollections = Cl),
            (t.FilterOptionMultiLevelTag = Al),
            (t.FilterOptionRangeSlider = Sl),
            (t.FilterOptionRating = qa),
            (t.FilterOptionSubCategory = ul),
            (t.FilterApplyButton = Jr),
            (t.FilterClearButton = qr),
            (t.FilterCollapse = ua),
            (t.FilterScrollbar = _o),
            (t.FilterSearchBox = uo),
            (t.FilterTooltip = mo),
            (t.FilterViewMore = io),
            (t.FilterOptionItem = ri),
            (t.FilterOptionItemList = ci),
            (t.FilterOptionItemBox = mi),
            (t.FilterOptionItemSwatch = _i),
            (t.FilterOptionItemMultiLevelCollections = Vo),
            (t.FilterOptionItemSecondLevelCollections = $o),
            (t.FilterOptionItemThirdLevelCollections = jo),
            (t.FilterOptionItemMultiLevelTag = ta),
            (t.FilterOptionItemSecondLevelTag = Jo),
            (t.FilterOptionItemThirdLevelTag = Xo),
            (t.FilterOptionItemRangeSlider = Yi),
            (t.FilterOptionItemRating = xi),
            (t.FilterOptionItemSubCategory = Ni),
            (t.FilterRefineBy = rl),
            (t.FilterRefineByItem = Ja),
            (t.FilterLoadingIcon = Ar),
            (t.FilterMobileButton = br),
            (t.FilterDesktopButton = _r),
            (t.FilterScrollToTop = jr),
            (t.FilterResult = ur),
            (t.ProductList = ft),
            (t.ProductListPlaceholder = Ue),
            (t.ProductListNoSearchResult = ir),
            (t.ProductItem = O),
            (t.ProductGridItem = E),
            (t.ProductListItem = F),
            (t.ProductCollageItem = V),
            (t.Breadcrumb = ee),
            (t.PageInfoCollection = le),
            (t.PageInfoSearch = Kt),
            (t.ProductDisplayType = wt),
            (t.ProductLimit = Dt),
            (t.ProductSorting = It),
            (t.RobotsMeta = he),
            (t.InCollectionSearch = Ht),
            (t.SearchResultPanels = z),
            (t.SearchResultPanelItem = tt),
            (t.SearchResultTotal = An),
            (t.CollectionItem = sn),
            (t.CollectionItemList = yn),
            (t.CollectionList = Sn),
            (t.PageItem = Ye),
            (t.PageItemList = en),
            (t.PageList = Cn),
            (t.MostPopular = Xn),
            (t.ProductSlider = qn),
            (t.ProductSliderItem = jn),
            (t.ProductPagination = at),
            (t.ProductPaginationDefault = bt),
            (t.ProductPaginationInfinite = _e),
            (t.ProductPaginationLoadMore = ve),
            (t.ProductPaginationLoadPrevious = Le),
            (t.SearchDisplayPagination = $e),
            (t.SearchInput = p.a),
            (t.InstantSearch = Us),
            (t.InstantSearchMobile = f.a),
            (t.InstantSearchResult = Ws.a),
            (t.InstantSearchStyle = $s.a),
            (t.InstantSearchResultStyle2 = qs.a),
            (t.InstantSearchStyle3 = h.a),
            (t.InstantSearchNoResult = Gs.a),
            (t.InstantSearchOnclick = zs.a),
            (t.InstantSearchResultBlock = Ks.a),
            (t.InstantSearchResultBlockDym = Ys.a),
            (t.InstantSearchResultBlockEmpty = Qs.a),
            (t.InstantSearchResultBlockLoading = Js.a),
            (t.InstantSearchResultBlockViewAll = Xs.a),
            (t.InstantSearchResultItem = Zs.a),
            (t.InstantSearchResultItemCollection = tc.a),
            (t.InstantSearchResultItemPage = ec.a),
            (t.InstantSearchResultItemPopular = nc.a),
            (t.InstantSearchResultItemProduct = y.a),
            (t.InstantSearchResultRedirect = rc.a),
            (t.SearchAutoComplete = Ds.a);
        },
      };
    function oc(t) {
      return (oc =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    var ac = function () {
        i.a.each(
          'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
            ' '
          ),
          function (t, e) {
            i.a.fn[e] = function (t, n) {
              return arguments.length > 0
                ? this.on(e, null, t, n)
                : this.trigger(e);
            };
          }
        ),
          (i.a.fn.hover = function (t, e) {
            return this.mouseenter(t).mouseleave(e || t);
          });
      },
      lc = function () {
        i.a.ajax = function (t) {
          var e = t.type,
            n = void 0 === e ? 'GET' : e,
            r = t.url,
            o = void 0 === r ? '' : r,
            a = t.data,
            l = t.dataType,
            s = t.success,
            c = t.error,
            u = new XMLHttpRequest(),
            p = 'application/json';
          l || (p = 'text/html'),
            'object' === oc(a) &&
              'string' == typeof n &&
              'get' === n.toLowerCase() &&
              (o += '?' + i.a.param(a)),
            u.open(n, o),
            u.setRequestHeader('Content-Type', ''.concat(p, ';charset=UTF-8')),
            'json' === l &&
              u.setRequestHeader('Accept', 'application/json, text/javascript'),
            (u.onload = function () {
              var t;
              (t = 'json' === l ? JSON.parse(u.responseText) : u.responseText),
                u.readyState > 3 &&
                  (200 == u.status
                    ? 'function' == typeof s && s(t)
                    : 'function' == typeof c && c(t));
            }),
            a && 'string' == typeof n && 'get' !== n.toLowerCase()
              ? u.send(JSON.stringify(a))
              : u.send();
        };
      },
      sc = function () {
        i.a.fn.serializeArray = function () {
          var t = [],
            e = this.length > 0 ? this[0] : {};
          return (
            Array.prototype.slice.call(e).forEach(function (e) {
              !e.name ||
                e.disabled ||
                ['file', 'reset', 'submit', 'button'].indexOf(e.type) > -1 ||
                ('select-multiple' !== e.type
                  ? (['checkbox', 'radio'].indexOf(e.type) > -1 &&
                      !e.checked) ||
                    t.push({ name: e.name, value: e.value })
                  : Array.prototype.slice.call(e.options).forEach(function (n) {
                      n.selected && t.push({ name: e.name, value: n.value });
                    }));
            }),
            t
          );
        };
      },
      cc = function () {
        i.a.param = function (t) {
          return Object.keys(t)
            .map(function (e) {
              if (Array.isArray(t[e])) {
                for (var n = [], r = 0; r < t[e].length; r++)
                  n.push(
                    encodeURIComponent(e + '[]') +
                      '=' +
                      encodeURIComponent(t[e][r])
                  );
                return n.join('&');
              }
              return (
                encodeURIComponent(e) +
                '=' +
                encodeURIComponent(null === t[e] ? '' : t[e])
              );
            })
            .join('&');
        };
      },
      uc = {
        init: function () {
          ac(), lc(), sc(), cc();
        },
      };
    function pc(t) {
      return (pc =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function fc(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function hc(t, e) {
      return (hc =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function yc(t, e) {
      return !e || ('object' !== pc(e) && 'function' != typeof e) ? dc(t) : e;
    }
    function dc(t) {
      if (void 0 === t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return t;
    }
    function gc(t) {
      return (gc = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var mc = (function (t) {
        !(function (t, e) {
          if ('function' != typeof e && null !== e)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && hc(t, e);
        })(h, t);
        var e,
          n,
          r,
          f = (function (t) {
            function e() {
              if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            }
            return function () {
              var n,
                r = gc(t);
              if (e()) {
                var i = gc(this).constructor;
                n = Reflect.construct(r, arguments, i);
              } else n = r.apply(this, arguments);
              return yc(this, n);
            };
          })(h);
        function h() {
          var t;
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError('Cannot call a class as a function');
            })(this, h),
            ((t = f.call(this)).search = null),
            (t.filter = null),
            (bc = dc(t)),
            t
          );
        }
        return (
          (e = h),
          (r = [
            {
              key: 'instance',
              get: function () {
                return bc;
              },
            },
            {
              key: 'jQ',
              get: function () {
                return i.a;
              },
            },
            {
              key: 'Globals',
              get: function () {
                return l.a;
              },
            },
            {
              key: 'Labels',
              get: function () {
                return a.a;
              },
            },
            {
              key: 'Selector',
              get: function () {
                return s.a;
              },
            },
            {
              key: 'Settings',
              get: function () {
                return o.a;
              },
            },
            {
              key: 'Utils',
              get: function () {
                return u.a;
              },
            },
            {
              key: 'inject',
              value: function (t) {
                ic.inject(t);
              },
            },
          ]),
          (n = [
            {
              key: 'init',
              value: function () {
                uc.init(),
                  Ls.mapLegacyFunctions(),
                  o.a.init(),
                  a.a.init(),
                  s.a.init(),
                  l.a.init(),
                  c.a.init(),
                  this.initApp(),
                  this.initOTP(),
                  this.initADA(),
                  this.initVariantsDisplay();
              },
            },
            {
              key: 'initApp',
              value: function () {
                u.a.addClassToBody('enableApp');
              },
            },
            {
              key: 'initSearchBox',
              value: function (t) {
                if (
                  o.a.getSettingValue('search.enableSuggestion') &&
                  !u.a.isGLHMobile()
                ) {
                  if (
                    (u.a.addClassToBody('enableInstantSearch'),
                    (this.search = new Us()),
                    this.addComponent(this.search),
                    t)
                  ) {
                    var e = new p.a(t);
                    this.search.addComponent(e);
                  }
                  this.search.refresh();
                }
              },
            },
            {
              key: 'initFilter',
              value: function () {
                o.a.getSettingValue('general.enableFilter') &&
                  !u.a.isGLHMobile() &&
                  (u.a.addClassToBody('enableFilter'),
                  (this.filter = new Cs()),
                  this.addComponent(this.filter),
                  this.filter.refresh());
              },
            },
            {
              key: 'initAnalytics',
              value: function () {
                o.a.getSettingValue('general.enableTrackingOrderRevenue') &&
                  !u.a.isGLHMobile() &&
                  As.a.init();
              },
            },
            {
              key: 'initOTP',
              value: function () {
                window.BoostOTP &&
                  'function' == typeof window.BoostOTP.init &&
                  i()(window).on('load', function () {
                    BoostOTP.init();
                  });
              },
            },
            {
              key: 'initADA',
              value: function () {
                i()('body').on('keyup', function (t) {
                  t && 9 == t.keyCode && i()('body').addClass(Class.adaWrapper);
                }),
                  i()('body').on('click', function (t) {
                    (!t ||
                      !t.originalEvent ||
                      (t.originalEvent.screenX && t.originalEvent.screenY)) &&
                      i()('body').removeClass(Class.adaWrapper);
                  });
              },
            },
            {
              key: 'initVariantsDisplay',
              value: function () {
                o.a.getSettingValue('general.enableVariantsDisplay') &&
                  u.a.addClassToBody('variantsDisplay');
              },
            },
          ]) && fc(e.prototype, n),
          r && fc(e, r),
          h
        );
      })(d.a),
      bc = null,
      vc = (e.default = mc);
  },
  69: function (t, e, n) {
    'use strict';
    n(24), n(9), n(25), n(22), n(23), n(48), n(40), n(47), n(45), n(151), n(27);
    var r = n(1),
      i = n.n(r),
      o = n(39),
      a = {
        UserAction: {
          VIEW_PRODUCT: 'view_product',
          QUICK_VIEW: 'quick_view',
          ADD_TO_CART: 'add_to_cart',
          BUY_NOW: 'buy_now',
        },
        Action: { FILTER: 'filter', SEARCH: 'search', SUGGEST: 'suggest' },
      },
      l = n(3),
      s = n(6),
      c = n(0),
      u = n(2),
      p = n(4),
      f = 'boostPFSAnalytics',
      h = '',
      y = '',
      d = null,
      g = function () {
        u.a.getSettingValue('search.enableSuggestion') &&
          i()('.' + p.a.searchSuggestionWrapper).length > 0 &&
          i()('.' + p.a.searchSuggestionWrapper).each(function (t, e) {
            e.addEventListener('click', T, !0),
              document.addEventListener('keydown', T, !0);
          });
      },
      m = function () {
        s.a.trackingProduct &&
          i()(s.a.products).length > 0 &&
          document.addEventListener('click', S, !0);
      },
      b = function () {
        var t = C(f);
        Array.isArray(t) &&
          (t.forEach(function (t) {
            E(t), t.pid == boostPFSAppConfig.general.product_id && (d = t);
          }),
          c.a.isProductPage() &&
            (s.a.trackingAddToCart &&
              i()(s.a.trackingAddToCart).length > 0 &&
              document.addEventListener('click', O, !0),
            s.a.trackingBuyNow &&
              i()(s.a.trackingBuyNow).length > 0 &&
              document.addEventListener('click', P, !0)));
      },
      v = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
          /[xy]/g,
          function (t) {
            var e = (16 * Math.random()) | 0;
            return ('x' == t ? e : (3 & e) | 8).toString(16);
          }
        );
      },
      S = function (t) {
        if (t && t.target) {
          var e = i()(t.target),
            n = c.a.isSearchPage() ? a.Action.SEARCH : a.Action.FILTER,
            r = a.UserAction.VIEW_PRODUCT;
          s.a.trackingQuickView &&
            e.closest(s.a.trackingQuickView).length > 0 &&
            (r = a.UserAction.QUICK_VIEW),
            s.a.trackingAddToCart &&
              e.closest(s.a.trackingAddToCart).length > 0 &&
              (r = a.UserAction.ADD_TO_CART),
            s.a.trackingBuyNow &&
              e.closest(s.a.trackingBuyNow).length > 0 &&
              (r = a.UserAction.BUY_NOW);
          var o = '',
            l = e.closest(s.a.trackingProduct);
          if (
            (l.length > 0
              ? (o = l.attr('data-id'))
              : d &&
                ((r != a.UserAction.ADD_TO_CART && r != a.UserAction.BUY_NOW) ||
                  (o = d.pid)),
            o)
          ) {
            var u = w(o, r, n);
            _(u), E(u), (d = r == a.UserAction.QUICK_VIEW ? u : null);
          }
        }
      },
      T = function (t) {
        if (t && t.target && ('keydown' != t.type || 13 == t.keyCode)) {
          var e = i()(t.target).closest(
            '.' + p.a.searchSuggestionItem + '-product'
          );
          if (e) {
            var n = e.attr('data-id');
            if (n) {
              var r = w(n, a.UserAction.VIEW_PRODUCT, a.Action.SUGGEST);
              _(r);
            }
          }
        }
      },
      O = function (t) {
        if (
          t &&
          t.target &&
          i()(t.target).closest(s.a.trackingAddToCart).length > 0
        ) {
          var e = {
            tid: l.a.shopDomain,
            pid: boostPFSAppConfig.general.product_id.toString(),
            u: a.UserAction.ADD_TO_CART,
            ct: h,
          };
          _(e), E(e);
        }
      },
      P = function (t) {
        if (
          t &&
          t.target &&
          i()(t.target).closest(s.a.trackingBuyNow).length > 0
        ) {
          var e = {
            tid: l.a.shopDomain,
            pid: boostPFSAppConfig.general.product_id.toString(),
            u: a.UserAction.BUY_NOW,
          };
          _(e), E(e);
        }
      },
      w = function (t, e, n) {
        var r = new Date(),
          i = h,
          o = e == a.UserAction.QUICK_VIEW ? a.UserAction.VIEW_PRODUCT : e,
          s = '';
        if (
          (n == a.Action.FILTER
            ? (s += 'collection_scope=' + l.a.collectionId)
            : (s += 'q=' + l.a.currentTerm),
          n == a.Action.FILTER || n == a.Action.SEARCH)
        ) {
          var c = Object.keys(l.a.queryParams).filter(function (t) {
            return t.startsWith(l.a.prefix);
          });
          c &&
            c.length > 0 &&
            c.forEach(function (t) {
              var e = l.a.queryParams[t];
              Array.isArray(e)
                ? e.forEach(function (e) {
                    s += '&' + t + '=' + encodeURIComponent(e);
                  })
                : (s += '&' + t + '=' + encodeURIComponent(e));
            });
        }
        return {
          tid: l.a.shopDomain,
          ct: i,
          pid: t,
          t: r.toISOString(),
          u: o,
          a: n,
          qs: s,
          r: document.referrer,
        };
      },
      _ = function (t) {
        var e = C(f);
        Array.isArray(e) || (e = []);
        var n = e.filter(function (e) {
          return e.pid != t.productId;
        });
        n.push(t), k(f, n);
      },
      C = function (t) {
        try {
          return JSON.parse(localStorage.getItem(t));
        } catch (t) {
          return null;
        }
      },
      k = function (t, e) {
        try {
          null != e
            ? localStorage.setItem(t, JSON.stringify(e))
            : localStorage.setItem(t, '');
        } catch (t) {}
      },
      E = function (t, e) {
        if (e || t.ct) {
          t.sid = y;
          var n = new XMLHttpRequest();
          n.open('POST', o.a.getApiUrl('analytics')),
            n.setRequestHeader(
              'Content-Type',
              'application/json;charset=UTF-8'
            ),
            (n.onload = function () {
              n.readyState > 3 &&
                200 == n.status &&
                (function (t) {
                  var e = C(f);
                  if (Array.isArray(e)) {
                    var n = e.filter(function (e) {
                      return e.pid != t;
                    });
                    k(f, n);
                  }
                })(t.pid);
            }),
            n.send(JSON.stringify(t));
        } else
          setTimeout(function () {
            !(function (t) {
              var e = new XMLHttpRequest();
              e.open('GET', '/cart.js'),
                (e.onload = function () {
                  if (e.readyState > 3 && 200 == e.status) {
                    var n = JSON.parse(e.responseText),
                      r = n.item_count <= 0 ? '' : n.token;
                    (h = r), t && ((t.ct = r), E(t, !0));
                  }
                }),
                e.send();
            })(t);
          }, 1e3);
      },
      R = {
        init: function () {
          window.XMLHttpRequest &&
            ((h = ''),
            (y = C('boostPFSSessionId')) ||
              ((y = v()), k('boostPFSSessionId', y)),
            g(),
            m(),
            b());
        },
        getSessionId: function () {
          return (
            y ||
            ((y = C('boostPFSSessionId')) ||
              ((y = v()), k('boostPFSSessionId', y)),
            y)
          );
        },
      };
    e.a = R;
  },
  7: function (t, e, n) {
    'use strict';
    var r = n(0),
      i = n(2),
      o = {
        productFilter: 'Product filter',
        refine: 'Refine By',
        refineMobile: 'Refine By',
        refineMobileCollapse: 'Hide Filter',
        refineDesktop: 'Filter',
        refineDesktopCollapse: 'Hide Filter',
        clear: 'Clear',
        clearAll: 'Clear All',
        apply: 'Apply',
        applyAll: 'Apply All',
        close: 'Close',
        back: 'Back',
        loadMore: 'Load more {{ amountProduct }} Products',
        loadMoreTotal: '{{ from }} - {{ to }} of {{ total }} Products',
        loadPreviousPage: 'Load Previous Page',
        searchOptions: 'Search options',
        collectionAll: 'All',
        viewMore: 'View More',
        viewLess: 'View Less',
        under: 'Under',
        above: 'Above',
        ratingStar: 'Star',
        ratingStars: 'Stars',
        ratingUp: '& Up',
        showResult: 'Show Results',
        showLimit: 'Show',
        sorting: 'Sort By',
        sortingList: {
          'best-selling': 'Best Selling',
          manual: 'Featured',
          'price-ascending': 'Lowest Price',
          'price-descending': 'Highest Price',
          'title-ascending': 'Alphabetically, A-Z',
          'title-descending': 'Alphabetically, Z-A',
          'created-descending': 'Date, New to Old',
          'created-ascending': 'Date, Old to New',
          'published-descending': 'Date, New to Old',
          'published-ascending': 'Date, Old to New',
          'sale-descending': '% Off',
          'sale-ascending': '% Off, Low to High',
          relevance: 'Relevance',
          'review-ratings-ascending': 'Total reviews, Low to High',
          'review-ratings-descending': 'Total reviews, High to Low',
        },
        listView: 'List View',
        gridView: 'Grid View',
        gridViewColumns: 'Grid view {{ count }} Columns',
        inCollectionSearch: 'Search for products in this collection',
        search: {
          generalTitle: 'Search',
          resultHeader: 'Search Results for "{{ terms }}"',
          resultEmpty:
            'We are sorry! We couldn\'t find results for "{{ terms }}".{{ breakline }}But don\'t give up – check the spelling or try less specific search terms.',
          resultEmptyWithSuggestion:
            'Sorry, nothing found for "{{ terms }}". Check out these items instead?',
          resultNumber: 'Showing {{ count }} results for "{{ terms }}"',
          searchTotalResult: 'Showing {{ count }} result',
          searchTotalResults: 'Showing {{ count }} results',
          seeAllProducts: 'See all products →',
          searchPanelCollection: 'Collections',
          searchPanelPage: 'Pages',
          searchPanelProduct: 'Products',
        },
        suggestion: {
          instantSearchSuggestionsLabel: 'Popular suggestions',
          instantSearchCollectionsLabel: 'Collections',
          instantSearchProductsLabel: 'Products',
          instantSearchPagesLabel: 'Pages',
          viewAll: 'View all {{ count }} products',
          suggestQuery: 'Showing {{ count }} results for "{{ terms }}".',
          didYouMean: 'Did you mean: {{ terms }}',
          searchBoxPlaceholder: 'Search',
          searchBoxOnclickRecentSearchLabel: 'Recent searches',
          searchBoxOnclickSearchTermLabel: 'Popular searches',
          searchBoxOnclickProductsLabel: 'Trending products',
          noSearchResultSearchTermLabel: 'Popular searches',
          noSearchResultProductsLabel: 'Trending products',
        },
        error: {
          noFilterResult: 'Sorry, no products matched your selection',
          noSearchResult: 'Sorry, no products matched the keyword',
          noProducts: 'No products found in this collection',
          noSuggestionProducts: 'Sorry, nothing found for "{{ terms }}".',
          noSuggestionResult: 'Sorry, nothing found for "{{ terms }}".',
        },
        action_list: {
          qvBtnLabel: 'Quick View',
          qvAddToCartBtnLabel: 'Add To Cart',
          qvSoldOutLabel: 'Sold Out',
          qvSaleLabel: 'Sale',
          qvQtyLeftLabel: 'Hurry, there are only {{item}} item(s) left!',
          qvNotifyMeSuccessfullyLabel:
            'Thanks! We will notify you when this product becomes available!',
          qvNotifyMeErrorLabel: 'Please provide a valid email address.',
          qvNotifyMeMessageLabel: 'Notify me when {{item}} becomes available',
          qvNotifyMeFormBodyLabel:
            'Please notify me when {{item}} becomes available.',
          atcAvailableLabel: 'Add To Cart',
          atcSelectOptionsLabel: 'Select Options',
          atcSoldOutLabel: 'Sold Out',
          atcAddingToCartBtnLabel: 'Adding...',
          atcAddedToCartBtnLabel: 'Added!',
          atcPopupAddedToCartLabel: 'has been added to shopping cart',
          atcPopupSubtotalLabel: 'Cart Subtotal',
          atcPopupCheckoutLabel: 'Checkout',
          atcPopupGoToCartLabel: 'Your Cart',
          atcPopupTotalItemsLabel: 'items',
          atcPopupCrossSellHeadingLabel: 'Frequently bought with',
          atcMiniCartCountItemLabel: 'item',
          atcMiniCartCountItemLabelPlural: 'items',
          atcMiniCartTotalItemsLabel: 'Total Items',
          atcMiniCartSubtotalLabel: 'Subtotal',
          atcMiniCartCheckoutLabel: 'Checkout',
          atcMiniCartViewCartLabel: 'View cart',
          atcMiniCartEmptyCartLabel: 'Your Cart Is Currently Empty',
          atcMiniCartRemoveItemLabel: 'Remove This Item',
          atcMiniCartShopingCartLabel: 'Your cart',
        },
        mostPopular: { popularProductsHeading: 'Popular products' },
        recentlyViewed: { recentProductHeading: 'Recently viewed products' },
        ada: {
          searchAutoComplete:
            'When autocomplete results are available use up and down arrows to review and enter to select',
          toggleMultiLevel: 'Expand/Collapse {{filterItem}}',
          filterOption: 'Filter by {{filterOption}}',
          clearFilterOption: 'Clear filter by {{filterOption}}',
          clearFilterItem: 'Clear filter by {{filterOption}} {{filterItem}}',
          clearAllFilterItems: 'Clear all filters',
          filterOptionTitle: 'Filter by {{filterOption}}',
          minValue: 'Min value',
          maxValue: 'Max value',
          productCount: 'Number of products: {{count}}',
          closeQuickViewSelectOption: 'Close select option',
        },
        init: function () {
          var t = {};
          void 0 !== i.a.label && (t = r.a.mergeObject(o, i.a.label)),
            (o = t),
            r.a.iterateObject(o, r.a.stripHtml);
        },
      };
    e.a = o;
  },
  70: function (t, e, n) {
    'use strict';
    n(24), n(9), n(25);
    var r = n(1),
      i = n.n(r),
      o = n(2),
      a = n(6),
      l = n(20),
      s = (n(0), n(7)),
      c = null,
      u = {
        getNoResultBlockSettings: function () {
          var t = u.getNoResultData().no_result_suggestions,
            e = {
              type: l.a.ResultType.NO_RESULT_SUGGESTIONS,
              label: s.a.suggestion.noSearchResultSearchTermLabel,
              status: o.a.getSettingValue(
                'search.suggestionNoResult.search_terms.status'
              )
                ? 'active'
                : 'inactive',
              number: t && t.length ? t.length : 0,
            },
            n = o.a.getSettingValue('search.suggestionNoResult.products.data');
          return [
            e,
            {
              type: l.a.ResultType.NO_RESULT_PRODUCTS,
              label: s.a.suggestion.noSearchResultProductsLabel,
              status: o.a.getSettingValue(
                'search.suggestionNoResult.products.status'
              )
                ? 'active'
                : 'inactive',
              number: n && n.length ? n.length : 0,
            },
          ];
        },
        getNoResultData: function () {
          if (c) return c;
          var t = {},
            e = i()(a.a.searchNoResultJson);
          if (e.length)
            try {
              t = JSON.parse(e.html());
            } catch (t) {
              console.log('Failed to parse notFoundJson.');
            }
          var n = { isAllEmpty: !0 },
            r = o.a.getSettingValue(
              'search.suggestionNoResult.search_terms.status'
            );
          t.search_terms &&
            r &&
            ((n[l.a.ResultType.NO_RESULT_SUGGESTIONS] = t.search_terms),
            t.search_terms.length > 0 && (n.isAllEmpty = !1));
          var s = o.a.getSettingValue(
            'search.suggestionNoResult.products.status'
          );
          return (
            t.products &&
              s &&
              ((n[l.a.ResultType.NO_RESULT_PRODUCTS] = u.prepareProducts(
                t.products
              )),
              t.products.length > 0 && (n.isAllEmpty = !1)),
            (c = n)
          );
        },
        prepareProducts: function (t) {
          return Array.isArray(t)
            ? (t.forEach(function (t) {
                var e = [];
                Array.isArray(t.media) || (t.media = []),
                  t.media.forEach(function (t) {
                    'image' == t.media_type &&
                      e.push({
                        id: t.id,
                        position: t.position,
                        src: t.src,
                        width: t.width,
                        height: t.height,
                      });
                  }),
                  (t.images_info = e),
                  (t.price /= 100),
                  (t.price_min /= 100),
                  (t.price_max /= 100),
                  (t.compare_at_price /= 100),
                  (t.compare_at_price_min /= 100),
                  (t.compare_at_price_max /= 100);
              }),
              t)
            : [];
        },
        noResultData: c,
      };
    e.a = u;
  },
  75: function (t, e, n) {
    'use strict';
    var r = n(2),
      i = n(0),
      o = n(85),
      a = n(129),
      l = n(76),
      s = n(61),
      c = {
        InstantSearchResult: o.a,
        InstantSearchResultStyle2: a.a,
        InstantSearchStyle3: l.a,
        InstantSearchMobile: s.a,
      },
      u = {
        instantSearchResult: function (t, e) {
          var n = r.a.getSettingValue('search.suggestionStyle'),
            o = 'InstantSearchResult' + i.a.capitalize(n, !0, !0);
          return (
            (c[o] && c[o].isActive()) || (o = 'InstantSearchResult'),
            new c[o](t, e)
          );
        },
        instantSearchMobile: function () {
          var t = r.a.getSettingValue('search.suggestionMobileStyle');
          'style1' == t && (t = '');
          var e = 'InstantSearchMobile' + i.a.capitalize(t, !0, !0);
          return (
            (c[e] && c[e].isActive()) || (e = 'InstantSearchMobile'), new c[e]()
          );
        },
        instantSearchStyle3: function () {
          var t = 'InstantSearchStyle3';
          return (
            (c[t] && c[t].isActive()) || (t = 'InstantSearchStyle3'), new c[t]()
          );
        },
      };
    e.a = u;
  },
  76: function (t, e, n) {
    'use strict';
    n(21),
      n(22),
      n(23),
      n(17),
      n(18),
      n(9),
      n(19),
      n(14),
      n(15),
      n(16),
      n(11),
      n(13),
      n(12);
    var r = n(1),
      i = n.n(r),
      o = (n(10), n(42)),
      a = n(4),
      l = n(2),
      s = n(7),
      c = n(6),
      u = n(0),
      p = n(3);
    function f(t) {
      return (f =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function h(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function y(t, e) {
      return (y =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function d(t, e) {
      return !e || ('object' !== f(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function g(t) {
      return (g = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var m = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && y(t, e);
      })(m, t);
      var e,
        n,
        r,
        f = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = g(t);
            if (e()) {
              var i = g(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return d(this, n);
          };
        })(m);
      function m() {
        var t;
        return (
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, m),
          ((t = f.call(this)).data = ''),
          (t.isBoundEvents = !1),
          (t.isOpen = !1),
          (t.inputStyle3Id = c.a.searchBoxStyle3.substr(1)),
          (t.searchBox = null),
          (t.selector = {
            searchInput: c.a.searchBoxStyle3,
            clearButton: '.' + a.a.searchSuggestionBtnClearStyle3,
            closebutton: '.' + a.a.searchSuggestionBtnCloseStyle3,
            submitButton: '.' + a.a.searchSuggestionBtnSubmitStyle3,
            topPanel: '.' + a.a.searchSuggestion + '-style3-top-panel',
            overlay: '.' + a.a.searchSuggestion + '-style3-overlay',
            searchInputs:
              'input[name="' + l.a.getSettingValue('search.termKey') + '"]',
          }),
          t
        );
      }
      return (
        (e = m),
        (r = [
          {
            key: 'tempType',
            get: function () {
              return { SEARCH_BTN: 'search_btn', DEFAULT: 'default' };
            },
          },
          {
            key: 'isActive',
            value: function () {
              return !0;
            },
          },
        ]),
        (n = [
          {
            key: 'getTemplate',
            value: function (t) {
              switch (t) {
                case m.tempType.SEARCH_BTN:
                  return '\n\t\t\t\t\t<button class="{{class.searchSuggestionBtnSubmitStyle3}}" type="submit"><span>Submit</span></button>\n\t\t\t\t'.trim();
                default:
                  return '\n\t\t\t\t\t<div class="{{class.searchSuggestion}}-style3-overlay"></div>\n\t\t\t\t\t<div class="{{class.searchSuggestion}}-style3-top-panel">\n\t\t\t\t\t\t<form action="/search" method="get">\n            \t\t\t\t<div class="{{class.searchSuggestion}}-style3-top-panel-input-group">\n            \t\t\t\t\t{{btnSearch}}\n\t\t\t\t\t\t\t\t<input role="textbox" type="text" name="{{searchTermKey}}" placeholder="{{searchBoxPlaceholder}}" id="{{searchId}}" />\n            \t\t\t\t\t<button type="button" class="{{class.searchSuggestionBtnClearStyle3}}"><span>X</span></button>\n            \t\t\t\t</div>\n            \t\t\t\t<button type="button" class="{{class.searchSuggestionBtnCloseStyle3}}"><span><-</span></button>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t\t'.trim();
              }
            },
          },
          {
            key: 'compileTemplate',
            value: function () {
              var t = '';
              return (
                l.a.getSettingValue('search.showSearchBtnStyle3') &&
                  (t = this.getTemplate(m.tempType.SEARCH_BTN)),
                this.getTemplate()
                  .replace(/{{btnSearch}}/g, t)
                  .replace(
                    /{{searchTermKey}}/g,
                    l.a.getSettingValue('search.termKey')
                  )
                  .replace(
                    /{{searchBoxPlaceholder}}/g,
                    s.a.suggestion.searchBoxPlaceholder
                  )
                  .replace(/{{searchId}}/g, this.inputStyle3Id)
                  .replace(/{{class.searchSuggestion}}/g, a.a.searchSuggestion)
                  .replace(
                    /{{class.searchSuggestionBtnSubmitStyle3}}/g,
                    a.a.searchSuggestionBtnSubmitStyle3
                  )
                  .replace(
                    /{{class.searchSuggestionBtnCloseStyle3}}/g,
                    a.a.searchSuggestionBtnCloseStyle3
                  )
                  .replace(
                    /{{class.searchSuggestionBtnClearStyle3}}/g,
                    a.a.searchSuggestionBtnClearStyle3
                  )
              );
            },
          },
          {
            key: 'render',
            value: function () {
              i()('body').append(this.compileTemplate());
            },
          },
          {
            key: 'isBindEvents',
            value: function () {
              return !this.isBoundEvents;
            },
          },
          {
            key: 'bindEvents',
            value: function () {
              (this.$searchInput = i()(this.selector.searchInput)),
                (this.$clearButtonElement = i()(this.selector.clearButton)),
                (this.$closebuttonElement = i()(this.selector.closebutton)),
                (this.$submitButtonElement = i()(this.selector.submitButton)),
                (this.$topPanelElement = i()(this.selector.topPanel)),
                (this.$overlayElement = i()(this.selector.overlay)),
                (this.searchBox = new o.a(
                  this.inputStyle3Id,
                  this.$searchInput
                )),
                this.searchBox.refresh(),
                this.$closebuttonElement.on(
                  'click',
                  this.closeInstantSearchStyle3.bind(this, !0)
                ),
                this.$clearButtonElement.on(
                  'click',
                  this.clearInstantSearchStyle3.bind(this)
                ),
                (this.$searchInputs = i()(this.selector.searchInputs)),
                this.$searchInputs
                  .on('click', this._onClickSearchBox.bind(this))
                  .on('focus', this._onFocusSearchBox.bind(this))
                  .on('keyup', this._onTypeSearchBoxEvent.bind(this)),
                this.$searchInput.on(
                  'focus',
                  this._onFocusStyle3Input.bind(this)
                ),
                this.$searchInput.on(
                  'keyup',
                  this._onKeyupSearchBox.bind(this)
                ),
                (this.$targetInput = null),
                (this.isBoundEvents = !0);
            },
          },
          {
            key: '_onClickSearchBox',
            value: function (t) {
              if (u.a.InstantSearch.isStyle3()) {
                var e =
                  this.$targetInput && u.a.stripHtml(this.$targetInput.val());
                e && this.$searchInputs.val(e),
                  this.$searchInput &&
                    (this.$searchInput.length > 0 &&
                    '' != u.a.stripHtml(this.$searchInput.val())
                      ? this.openSuggestionStyle3()
                      : this.searchBox &&
                        this.searchBox.searchAutoComplete &&
                        this.searchBox.searchAutoComplete
                          .enableOnClickSearchBox &&
                        (this.openSuggestionStyle3(),
                        this.searchBox.searchAutoComplete.showOnClickSuggestion()));
              }
            },
          },
          {
            key: '_onKeyupSearchBox',
            value: function (t) {
              var e;
              this.$targetInput.val(
                u.a.stripHtml(
                  null == t || null === (e = t.currentTarget) || void 0 === e
                    ? void 0
                    : e.value
                )
              );
            },
          },
          {
            key: '_onFocusSearchBox',
            value: function (t) {
              if (u.a.InstantSearch.isStyle3()) {
                var e = t && t.target ? t.target.id : '',
                  n = this.$searchInput ? this.$searchInput.attr('id') : '';
                '' != e &&
                  '' != n &&
                  e != n &&
                  ((this.$targetInput = i()('#' + e)),
                  this.showSearchBoxStyle3(),
                  this.$searchInput.trigger('click'));
              }
            },
          },
          {
            key: '_onFocusStyle3Input',
            value: function (t) {
              var e = this;
              this.isReFocus
                ? (t &&
                    (t.stopImmediatePropagation(),
                    t.stopPropagation(),
                    t.preventDefault()),
                  (this.isReFocus = !1),
                  this._onFocusSearchBox(t))
                : setTimeout(function () {
                    (document.activeElement && document.activeElement.id
                      ? '#' + document.activeElement.id
                      : '') != c.a.searchBoxStyle3 &&
                      ((e.isReFocus = !0), e.$searchInput.focus());
                  }, 0);
            },
          },
          {
            key: '_onTypeSearchBoxEvent',
            value: function (t) {
              u.a.InstantSearch.isStyle3() &&
                (this.searchBox.instantSearchResult.$wrapper.show(),
                '' == u.a.stripHtml(t.target.value)
                  ? (this.searchBox &&
                    this.searchBox.searchAutoComplete &&
                    this.searchBox.searchAutoComplete.enableOnClickSearchBox
                      ? this.searchBox.searchAutoComplete.showOnClickSuggestion()
                      : this.closeInstantSearchStyle3(),
                    this.$clearButtonElement.hide())
                  : this.$clearButtonElement.show());
            },
          },
          {
            key: 'showSearchBoxStyle3',
            value: function () {
              var t = this;
              (this.isOpen = !0),
                this.onClickOutsideSuggestionStyle3Event(),
                this.scrollSuggestionStyle3Event(),
                '' == u.a.stripHtml(this.$searchInput.val())
                  ? this.$clearButtonElement.hide()
                  : this.$clearButtonElement.show(),
                this.$searchInput.is(':focus') ||
                  (this.$topPanelElement.show(),
                  this.$overlayElement.show(),
                  i()('[tabindex="-1"]')
                    .removeAttr('tabindex')
                    .addClass(a.a.searchSuggestionNoTabIndex),
                  u.a.InstantSearch.isStyle3() &&
                    i()('[data-open=true]').length > 0 &&
                    i()('[data-open=true]').attr('data-open', !1),
                  setTimeout(function () {
                    t.$searchInput.focus();
                  }, 100),
                  this.afterShowSearchBoxStyle3());
            },
          },
          {
            key: 'closeInstantSearchStyle3',
            value: function (t) {
              i()(
                '.js-drawer-close, .search-modal__close-button, .fancybox-close-small, .drawer__close > button'
              ).trigger('click'),
                this.searchBox.instantSearchResult.$wrapper.hide(),
                (t = void 0 !== t && t) &&
                  (this.$topPanelElement.hide(), this.$overlayElement.hide()),
                this._setValueAllSearchBoxes(),
                i()('.' + a.a.searchSuggestionNoTabIndex).attr('tabindex', -1),
                i()('body').hasClass(a.a.searchSuggestionStyle3Open) &&
                  i()('body').removeClass(a.a.searchSuggestionStyle3Open),
                this.searchBox.instantSearchResult.$wrapper.hasClass(
                  a.a.searchSuggestionOpen
                ) &&
                  this.searchBox.instantSearchResult.$wrapper.removeClass(
                    a.a.searchSuggestionOpen
                  ),
                this.afterCloseInstantSearchStyle3(t);
            },
          },
          {
            key: 'clearInstantSearchStyle3',
            value: function () {
              this.$clearButtonElement.hide(),
                (p.a.currentTerm = ''),
                this._setValueAllSearchBoxes(''),
                this.searchBox &&
                this.searchBox.searchAutoComplete &&
                this.searchBox.searchAutoComplete.enableOnClickSearchBox
                  ? this.searchBox.searchAutoComplete.showOnClickSuggestion()
                  : this.closeInstantSearchStyle3(),
                this.$searchInput.focus();
            },
          },
          { key: 'afterCloseInstantSearchStyle3', value: function (t) {} },
          {
            key: '_setValueAllSearchBoxes',
            value: function (t) {
              void 0 === t && (t = u.a.stripHtml(p.a.currentTerm)),
                (p.a.currentTerm = u.a.stripHtml(t)),
                this.$searchInputs.val(u.a.stripHtml(t));
            },
          },
          {
            key: 'onClickOutsideSuggestionStyle3Event',
            value: function () {
              var t = this;
              i()(document).on('touchstart', function (e) {
                if (e.target) {
                  var n = i()(e.target),
                    r =
                      n.closest(
                        '.' + a.a.searchSuggestion + '-style3-top-panel'
                      ).length > 0,
                    o =
                      n.closest('.' + a.a.searchSuggestionWrapper + ' div')
                        .length > 0;
                  r || o || t.closeInstantSearchStyle3(!0);
                }
              });
            },
          },
          {
            key: 'scrollSuggestionStyle3Event',
            value: function () {
              var t = this;
              i()(document).on('touchmove', function (e) {
                t.$searchInput.is(':focus') && t.$searchInput.blur();
              });
            },
          },
          { key: 'afterShowSearchBoxStyle3', value: function () {} },
          {
            key: 'openSuggestionStyle3',
            value: function () {
              this.beforeOpenSuggestionStyle3(),
                i()('body').hasClass(a.a.searchSuggestionStyle3Open) ||
                  i()('body').addClass(a.a.searchSuggestionStyle3Open),
                this.showSearchBoxStyle3(),
                this.searchBox.instantSearchResult.$wrapper.show(),
                this.afterOpenSuggestionStyle3();
            },
          },
          { key: 'beforeOpenSuggestionStyle3', value: function () {} },
          { key: 'afterOpenSuggestionStyle3', value: function () {} },
        ]) && h(e.prototype, n),
        r && h(e, r),
        m
      );
    })(n(61).a);
    e.a = m;
  },
  8: function (t, e, n) {
    'use strict';
    n.r(e);
    n(24),
      n(9),
      n(25),
      n(47),
      n(40),
      n(30),
      n(34),
      n(41),
      n(22),
      n(38),
      n(98),
      n(66),
      n(68),
      n(119),
      n(45),
      n(27),
      n(182),
      n(82),
      n(54),
      n(11),
      n(13),
      n(12),
      n(67),
      n(149),
      n(48),
      n(208),
      n(23),
      n(151),
      n(16),
      n(14),
      n(15),
      n(183);
    var r = n(1),
      i = n.n(r),
      o = n(3),
      a = n(2),
      l = n(0),
      s = n(39),
      c = n(36),
      u = n(62),
      p = n(5),
      f = n(69);
    function h(t) {
      return (
        (function (t) {
          if (Array.isArray(t)) {
            for (var e = 0, n = new Array(t.length); e < t.length; e++)
              n[e] = t[e];
            return n;
          }
        })(t) ||
        (function (t) {
          if (
            Symbol.iterator in Object(t) ||
            '[object Arguments]' === Object.prototype.toString.call(t)
          )
            return Array.from(t);
        })(t) ||
        (function () {
          throw new TypeError(
            'Invalid attempt to spread non-iterable instance'
          );
        })()
      );
    }
    var y = null,
      d = { eventType: 'init', eventInfo: {} },
      g = function (t, e, n) {
        if (
          (T(t),
          v &&
            v.forEach(function (e) {
              'function' == typeof e && e(t);
            }),
          'function' == typeof k.beforeCall && k.beforeCall(t, d.eventInfo),
          'function' != typeof k.beforeCallAsync)
        )
          m(t, e, n);
        else {
          k.beforeCallAsync(
            function () {
              m(t, e, n);
            },
            t,
            d.eventInfo
          );
        }
      },
      m = function t(e, n, r, a) {
        (a = void 0 !== a ? a : 0),
          (y = n),
          (o.a.queryParams.callback = 'BoostPFSFilterCallback'),
          (o.a.queryParams.event_type = e);
        var c = s.a.getApiUrl('filter'),
          u = l.a.isCollectionPage() && o.a.queryParams.q;
        (l.a.isSearchPage() || u) &&
          ((c = s.a.getApiUrl('search')),
          o.a.hasOwnProperty('searchDisplay') &&
            o.a.searchDisplay &&
            'products' !== o.a.searchDisplay &&
            (c += '/' + o.a.searchDisplay));
        var p = document.createElement('script');
        p.type = 'text/javascript';
        var f = new Date().getTime(),
          h = JSON.parse(JSON.stringify(o.a.queryParams));
        (o.a.queryParams = h),
          (p.src = c + '?t=' + f + '&' + i.a.param(o.a.queryParams)),
          (p.id = 'boost-pfs-filter-script'),
          (p.async = !0);
        var d;
        p.addEventListener('error', function (e) {
          'function' == typeof document.getElementById(p.id).remove
            ? document.getElementById(p.id).remove()
            : (document.getElementById(p.id).outerHTML = ''),
            a < 2
              ? (a++,
                d && clearTimeout(d),
                (d = setTimeout(t('resend', n, r, a), 2e3)))
              : 'function' == typeof r && r();
        }),
          document.getElementsByTagName('head')[0].appendChild(p),
          p.addEventListener('load', function (t) {
            'function' == typeof document.getElementById(p.id).remove
              ? document.getElementById(p.id).remove()
              : (document.getElementById(p.id).outerHTML = '');
          });
      },
      b = function (t) {
        S &&
          S.forEach(function (e) {
            'function' == typeof e && e(t, d.eventType, d.eventInfo);
          }),
          'function' == typeof y && y(t, d.eventType, d.eventInfo);
      },
      v = [],
      S = [],
      T = function (t) {
        var e = l.a.mergeObject({}, o.a.queryParams);
        (e = P(e, t)),
          (e = w(e, t)),
          (e = s.a.setApiLocaleParams(e)),
          l.a.isEnableShopifyMultipleCurrencies() &&
            (l.a.isConvertCurrenciesOnFrontEnd()
              ? ((e = O(e, t)).hasOwnProperty('currency') && delete e.currency,
                e.hasOwnProperty('country') && delete e.country)
              : (e = s.a.setShopifyMultiCurrencyParams(e))),
          (e.sid = f.a.getSessionId()),
          (o.a.queryParams = e);
      },
      O = function (t, e) {
        var n = Object.keys(t);
        return (
          (n = n.filter(function (t) {
            return (
              (0 == t.indexOf('pf_p_') || 0 == t.indexOf('pf_vp_')) &&
              !t.includes('_exclude_from_value')
            );
          })),
          (o.a.activeCurrencyPrices = []),
          n.length &&
            n.forEach(function (e) {
              var n = [];
              Array.isArray(t[e]) &&
                t[e].forEach(function (t) {
                  var e = t.split(':');
                  (e = e.map(function (t, e) {
                    var n = 0 == e;
                    return 0 == t.length
                      ? ''
                      : l.a.revertPriceToDefaultCurrency(t, n);
                  })),
                    n.push(e.join(':'));
                }),
                (o.a.activeCurrencyPrices[e] = t[e]),
                (t[e] = n);
            }),
          t
        );
      },
      P = function (t, e) {
        var n = c.a.getHistoryState(),
          r = 0;
        'history' == e
          ? (r =
              n && n.param && n.param.hasOwnProperty('collection_scope')
                ? parseInt(n.param.collection_scope)
                : parseInt(boostPFSConfig.general.collection_id))
          : null != o.a.collectionId
          ? (r = parseInt(o.a.collectionId))
          : boostPFSConfig.general.collection_id
          ? (r = parseInt(boostPFSConfig.general.collection_id))
          : l.a.isCollectionPage() ||
            l.a.isSearchPage() ||
            (r = a.a.getSettingValue('general.filterEverywhereCollectionId')),
          (o.a.collectionId = r),
          (t.collection_scope = r);
        var i = null;
        'history' == e
          ? (i =
              n && n.param && n.param.tag
                ? n.param.tag
                : boostPFSConfig.general.collection_tags)
          : o.a.collectionTags
          ? (i = o.a.collectionTags)
          : boostPFSConfig.general.collectionTags &&
            (i = boostPFSConfig.general.collectionTags),
          (o.a.collectionTags = i),
          (t.tag = i),
          a.a.getSettingValue('general.loadProductFromLiquid') &&
            'sync' ==
              a.a.getSettingValue('general.loadProductFromLiquidType') &&
            a.a.getSettingValue('general.theme_id') &&
            (t.theme_id = a.a.getSettingValue('general.theme_id')),
          1 == a.a.getSettingValue('general.availableAfterFiltering')
            ? ((t.product_available =
                !0 === l.a.checkExistFilterOptionParam() ||
                o.a.productAvailable),
              (t.variant_available =
                !0 === l.a.checkExistFilterOptionParam() ||
                o.a.variantAvailable))
            : ((t.product_available = o.a.productAvailable),
              (t.variant_available = o.a.variantAvailable));
        var s = Object.keys(t).some(function (t) {
            return (
              t.startsWith(o.a.prefix + '_l_') ||
              t.startsWith(o.a.prefix + '_vl_')
            );
          }),
          u = Object.keys(t).find(function (t) {
            return t.endsWith('ibsl');
          });
        (s && (o.a.inventoryBaseSelectedLocations || u)
          ? (t.inventory_base_selected_locations = !0)
          : delete t.inventory_base_selected_locations,
        a.a.getSettingValue('general.showOutOfStockOption') &&
          (t.zero_options = !0),
        (t.build_filter_tree = !(
          void 0 !== e && o.a.imutableFilterTree.indexOf(e) > -1
        )),
        (t.check_cache = !(
          !1 !== l.a.checkExistFilterOptionParam() ||
          1 != t.page ||
          t.sort != o.a.defaultSorting ||
          t.limit != a.a.getSettingValue('general.limit') ||
          l.a.isSearchPage() ||
          l.a.isVendorPage() ||
          l.a.isTypePage() ||
          t.q
        )),
        l.a.isCollectionPage() && t.q && (t.incollection_search = !0),
        a.a.getSettingValue('general.showVariantsAsProduct') &&
          (t.variants_as_products = !0),
        '' != a.a.getSettingValue('general.priceMode') &&
          (t.price_mode = a.a.getSettingValue('general.priceMode')),
        '' != a.a.getSettingValue('general.tagMode') &&
          (t.tag_mode = a.a.getSettingValue('general.tagMode')),
        a.a.getSettingValue('general.sortingAvailableFirst') &&
          (t.sort_first = 'available'),
        l.a.isVendorPage() && t.hasOwnProperty('q')) &&
          ((t[a.a.getSettingValue('general.vendorParam')] = [t.q]), delete t.q);
        l.a.isTypePage() &&
          t.hasOwnProperty('q') &&
          ((t[a.a.getSettingValue('general.typeParam')] = [t.q]), delete t.q);
        return t;
      },
      w = function (t, e) {
        if (l.a.isSearchPage()) {
          (t.q = l.a.stripHtml(l.a.getSearchTerm())),
            'q' != o.a.searchTermKey && delete t[o.a.searchTermKey];
          var n = a.a.getSettingValue('search.enableFuzzy');
          !0 !== n && (t.fuzzy = n),
            !1 !== a.a.getSettingValue('search.reduceMinMatch') &&
              (t.reduce_min_match = a.a.getSettingValue(
                'search.reduceMinMatch'
              )),
            a.a.getSettingValue('search.fullMinMatch') &&
              (t.full_min_match = !0),
            a.a.getSettingValue('general.sortingAvailableFirst') &&
              (t.sort_first = 'available'),
            a.a.getSettingValue('search.enablePlusCharacterSearch') &&
              (t.enable_plus_character_search = !0);
        }
        return t;
      },
      _ = function (t) {
        var e = '';
        e = t
          ? 'string' == typeof t && 2 == t.split('?').length
            ? t.split('?')[1]
            : ''
          : l.a.getWindowLocation().search;
        var n = new URLSearchParams(e),
          r = {},
          i =
            l.a.isCollectionPage() || l.a.isSearchPage()
              ? a.a.getSettingValue('general.urlScheme')
              : 0;
        return (
          n.forEach(function (t, e) {
            var n = c.a.longParamMap.get(e);
            n || (n = e);
            var s =
                o.a.imutableFilterTree.includes(n) ||
                n == o.a.searchTermKey ||
                (n.startsWith(o.a.prefix) && n.includes('_and_condition')) ||
                (n.startsWith(o.a.prefix) &&
                  n.includes('_show_exact_rating')) ||
                (n.startsWith(o.a.prefix) && n.includes('_exclude_from_value')),
              u = n.startsWith(o.a.prefix);
            if (s) (r[n] = t), (o.a.hasFilterOptionParam = !0);
            else if (u) {
              var f = n.startsWith(o.a.prefix + '_c_'),
                h = n.startsWith(o.a.prefix + '_ct_'),
                y = new RegExp(o.a.prefix + '_v?li_[a-z_]+?_ibsl$').test(n);
              if (f) {
                if (l.a.isCollectionPage()) return;
                r.collection_scope = t;
              } else if (h) {
                var d = a.a.getSettingValue(
                  'general.multiLevelCollectionSelectType'
                );
                (r.tag_mode = d == p.a.SelectType.MULTIPLE ? '2' : '1'),
                  r.hasOwnProperty('tag') ? r.tag.push(t) : (r.tag = [t]);
              } else if (y)
                return (
                  (r.inventory_base_selected_locations = t),
                  (o.a.inventoryBaseSelectedLocations = t),
                  void delete r[n]
                );
              switch (i) {
                case 2:
                  r[n] = t.split(',');
                  break;
                case 1:
                default:
                  r.hasOwnProperty(n) ? r[n].push(t) : (r[n] = [t]);
              }
              f
                ? (o.a.collectionId = r.collection_scope)
                : h && (o.a.collectionTags = r.tag),
                (o.a.hasFilterOptionParam = !0);
            }
          }),
          r
        );
      },
      C = function (t) {
        (t._ = o.a.prefix),
          (t.shop = t.hasOwnProperty('shop') ? t.shop : o.a.shopDomain),
          (t.page = t.hasOwnProperty('page') ? parseInt(t.page) : 1);
        var e = a.a.getSettingValue('general.limit');
        (e <= 0 || e > 70) && (e = 24),
          'default' == a.a.getSettingValue('general.paginationType') ||
          a.a.getSettingValue('general.paginationTypeAdvanced')
            ? (t.limit = t.hasOwnProperty('limit') ? t.limit : e)
            : (t.limit = (t.hasOwnProperty('limit') ? t.limit : e) * t.page);
        var n = l.a.getDefaultSorting();
        '' != n
          ? (o.a.defaultSorting = n)
          : l.a.isCollectionPage() ||
            (o.a.defaultSorting = a.a.getSettingValue(
              'general.filterEverywhereDefaultSorting'
            )),
          (t.sort = t.hasOwnProperty('sort') ? t.sort : o.a.defaultSorting),
          (t.display = t.hasOwnProperty('display')
            ? t.display
            : a.a.getSettingValue('general.defaultDisplay')),
          (t = s.a.setShopifyMultiCurrencyParams(t));
        var r = a.a.getSettingValue('general.location');
        return r && 'string' == typeof r && (t.location = r), t;
      },
      k = {
        BoostPFSFilterCallback: function (t) {
          k.setDefaultValueForExcludedFields(t),
            'function' == typeof k.afterCall &&
              k.afterCall(t, d.eventType, d.eventInfo),
            'function' != typeof k.afterCallAsync
              ? b(t)
              : k.afterCallAsync(t, b, d.eventType, d.eventInfo);
        },
        getFilterData: g,
        updateParamsFromUrl: function (t) {
          var e = _(t);
          (e = C(e)),
            l.a.isEnableShopifyMultipleCurrencies() &&
              (e = l.a.isConvertCurrenciesOnFrontEnd()
                ? (function (t) {
                    var e = Object.keys(t);
                    return (
                      (e = e.filter(function (t) {
                        return (
                          (0 == t.indexOf('pf_p_') ||
                            0 == t.indexOf('pf_vp_')) &&
                          !t.includes('_exclude_from_value')
                        );
                      })).length &&
                        e.forEach(function (e) {
                          var n = [];
                          Array.isArray(t[e]) &&
                            t[e].forEach(function (t) {
                              var e = t.split(':');
                              (e = e.map(function (t, e) {
                                return 0 == t.length
                                  ? ''
                                  : l.a.convertPriceBasedOnActiveCurrency(t);
                              })),
                                n.push(e.join(':'));
                            }),
                            (t[e] = n);
                        }),
                      t
                    );
                  })(e)
                : s.a.setShopifyMultiCurrencyParams(e)),
            (o.a.queryParams = e);
        },
        setParam: function (t, e) {
          null == e || (Array.isArray(e) && 0 == e.length)
            ? delete o.a.queryParams[t]
            : Array.isArray(e)
            ? (o.a.queryParams[t] = h(new Set(e)))
            : (o.a.queryParams[t] = e);
          var n = t.startsWith(o.a.prefix + '_c_'),
            r = t.startsWith(o.a.prefix + '_ct_'),
            i = new RegExp(o.a.prefix + '_v?li_[a-z_]+?_ibsl$').test(t),
            a = o.a.queryParams[t];
          if (
            (n || 'collection_scope' == t) &&
            ((o.a.queryParams.collection_scope = a), (o.a.collectionId = a), !a)
          ) {
            var l = t.replace(o.a.prefix + '_c_', o.a.prefix + '_ct_');
            delete o.a.queryParams[l],
              (o.a.queryParams.tag = null),
              (o.a.collectionTags = null);
          }
          r && ((o.a.queryParams.tag = a), (o.a.collectionTags = a)),
            i && (o.a.inventoryBaseSelectedLocations = a);
        },
        setDefaultValueForExcludedFields: function (t) {
          if (Array.isArray(t.products)) {
            var e = new Date().toISOString();
            t.products.forEach(function (t) {
              t.hasOwnProperty('variants') || (t.variants = []),
                t.hasOwnProperty('images_info') || (t.images_info = []),
                t.hasOwnProperty('collections') || (t.collections = []),
                t.hasOwnProperty('tags') || (t.tags = []),
                t.hasOwnProperty('skus') || (t.skus = []),
                t.hasOwnProperty('options_with_values') ||
                  (t.options_with_values = []),
                t.hasOwnProperty('barcodes') || (t.barcodes = []),
                t.hasOwnProperty('created_at') || (t.created_at = e),
                t.hasOwnProperty('updated_at') || (t.updated_at = e),
                t.hasOwnProperty('published_at') || (t.published_at = e);
            });
          }
        },
        addBeforeApplyFilter: function (t) {
          v.push(t);
        },
        addAfterApplyFilter: function (t) {
          S.push(t);
        },
        applyFilter: function (t, e) {
          (d.eventType = t),
            (d.eventInfo = e),
            u.default.instance.filter.filterLoadingIcon.setShow(!0),
            g(
              t,
              u.default.instance.filter.setData.bind(u.default.instance.filter),
              u.default.instance.filter.errorFilterCallback.bind(
                u.default.instance.filter
              )
            ),
            c.a.updateAddressBar();
        },
        callFilterApi: m,
        callbackFilterApi: b,
        beforeCall: null,
        afterCall: null,
        beforeCallAsync: null,
        afterCallAsync: null,
      };
    e.default = k;
  },
  84: function (t, e, n) {
    'use strict';
    n.r(e);
    n(11), n(9), n(12), n(98), n(47), n(81), n(211), n(151), n(24), n(25);
    var r = n(1),
      i = n.n(r),
      o = n(3),
      a = n(2),
      l = n(0),
      s = n(39),
      c = n(69),
      u = n(42),
      p = function t(e, n, r, o) {
        (n = void 0 !== n ? n : 0), (o = void 0 !== o ? o : '');
        var a = h(e, r);
        a.q && ((e = a.q), delete a.q), '' != o && (a.prev_query = o);
        var l = document.createElement('script');
        (l.type = 'text/javascript'),
          (l.src =
            s.a.getApiUrl('suggestion') + '?q=' + e + '&' + i.a.param(a)),
          (l.async = !0),
          l.addEventListener('error', function (e) {
            i()(this).remove(),
              n < 3 ? (n++, t(a.q, r, o, n)) : u.a.disableInstantSearch();
          }),
          document.getElementsByTagName('head')[0].appendChild(l),
          l.addEventListener('load', function (t) {
            i()(this).remove();
          });
      },
      f = function (t) {
        var e = o.a.suggestionCache;
        if (t.hasOwnProperty('prev_query')) {
          var n = t.prev_query;
          if (e.hasOwnProperty(n)) {
            var r,
              i = e[n],
              a = ['collections', 'did_you_mean', 'pages', 'suggest_query'],
              s = a.length;
            for (r = 0; r < s; r++)
              t[a[r]] = l.a.getValueInObjectArray(a[r], i);
            (t.prev_total_product = l.a.getValueInObjectArray(
              'total_product',
              i
            )),
              (i[l.a.findIndexArray('products', i, 'key')].values = t.products),
              (i[l.a.findIndexArray('suggestions', i, 'key')].values =
                t.suggestions),
              i.push({ key: 'local_cache', values: !0 }),
              i.push({ key: 'suggest_total_product', values: t.total_product }),
              (o.a.suggestionCache[n] = i);
          }
        }
        window.suggestionCallback(
          Object.keys(t).map(function (e) {
            return { key: e, values: t[e] };
          })
        );
      },
      h = function (t, e) {
        var n = {};
        (n.shop = o.a.shopDomain),
          (n.t = new Date().getTime()),
          a.a.getSettingValue('search.enableDefaultResult') ||
            (n.enable_default_result = !1);
        var r = a.a.getSettingValue('search.enableFuzzy');
        !0 !== r && (n.fuzzy = r),
          a.a.getSettingValue('search.fullMinMatch') && (n.full_min_match = !0),
          !1 !== a.a.getSettingValue('search.reduceMinMatch') &&
            (n.reduce_min_match = a.a.getSettingValue('search.reduceMinMatch')),
          a.a.getSettingValue('general.showVariantsAsProduct') &&
            (n.variants_as_products = !0),
          a.a.getSettingValue('search.enablePlusCharacterSearch') &&
            (n.enable_plus_character_search = !0),
          1 == a.a.getSettingValue('search.productAvailable') &&
            (n.product_available = !0);
        var i,
          l = a.a.getSettingValue('search.suggestionBlocks'),
          u = l.length;
        for (i = 0; i < u; i++) {
          n[l[i].type.slice(0, -1) + '_limit'] = l[i].number;
        }
        n.dym_limit = a.a.getSettingValue('search.suggestionDymLimit');
        var p = a.a.getSettingValue('search.skipFields');
        p.length > 0 && (param.skipFields = p),
          (n.callback = 'BoostPFSInstantSearchCallback'),
          (n.event_type = e);
        var f = 'suggest_dym' == e ? ['products', 'suggestions'] : [];
        return (
          (n.suggest_types = f),
          (n = s.a.setApiLocaleParams(n)),
          ((n = s.a.setShopifyMultiCurrencyParams(n)).sid = c.a.getSessionId()),
          Object.assign(n, o.a.instantSearchQueryParams)
        );
      },
      y = {
        BoostPFSInstantSearchCallback: function (t) {
          y.setDefaultValueForExcludedFields(t),
            'function' == typeof y.afterCall && y.afterCall(t),
            'function' != typeof y.afterCallAsync
              ? f(t)
              : y.afterCallAsync(t, f);
        },
        getSuggestionData: function (t, e, n, r) {
          if (
            ('function' == typeof y.beforeCall && y.beforeCall(t),
            'function' != typeof y.beforeCallAsync)
          )
            p(t, 0, n, r);
          else {
            y.beforeCallAsync(t, function () {
              p(t, 0, n, r);
            });
          }
        },
        prepareSuggestionParams: h,
        setDefaultValueForExcludedFields: function (t) {
          if (Array.isArray(t.products)) {
            var e = new Date().toISOString();
            t.products.forEach(function (t) {
              t.hasOwnProperty('variants') || (t.variant = []),
                t.hasOwnProperty('images_info') || (t.images_info = []),
                t.hasOwnProperty('collections') || (t.collections = []),
                t.hasOwnProperty('tags') || (t.tags = []),
                t.hasOwnProperty('skus') || (t.skus = []),
                t.hasOwnProperty('options_with_values') ||
                  (t.options_with_values = []),
                t.hasOwnProperty('barcodes') || (t.barcodes = []),
                t.hasOwnProperty('created_at') || (t.created_at = e),
                t.hasOwnProperty('updated_at') || (t.updated_at = e),
                t.hasOwnProperty('published_at') || (t.published_at = e);
            });
          }
        },
        callInstantSearchApi: p,
        callbackInstantSearchApi: f,
        beforeCall: null,
        afterCall: null,
        beforeCallAsync: null,
        afterCallAsync: null,
      };
    e.default = y;
  },
  85: function (t, e, n) {
    'use strict';
    n(80),
      n(24),
      n(9),
      n(25),
      n(21),
      n(22),
      n(23),
      n(27),
      n(45),
      n(34),
      n(41),
      n(17),
      n(18),
      n(19),
      n(14),
      n(15),
      n(16),
      n(11),
      n(13),
      n(12);
    var r = n(1),
      i = n.n(r),
      o = n(2),
      a = n(0),
      l = n(4),
      s = n(20),
      c = n(70),
      u = n(43),
      p = n(10),
      f = n(121),
      h = n(126),
      y = n(127),
      d = n(128);
    function g(t) {
      return (g =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function m(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function b(t, e) {
      return (b =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function v(t, e) {
      return !e || ('object' !== g(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function S(t) {
      return (S = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var T = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && b(t, e);
      })(g, t);
      var e,
        n,
        r,
        p = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = S(t);
            if (e()) {
              var i = S(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return v(this, n);
          };
        })(g);
      function g(t, e) {
        var n;
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError('Cannot call a class as a function');
        })(this, g),
          ((n = p.call(this)).searchInputId = t),
          (n.isLoading = !1),
          (n.isFirstLoad = !0),
          (n.blocks = []),
          (n.onClickBlocks = []),
          (n.loadingBlock = null);
        var r =
          '.' +
          l.a.searchSuggestionWrapper +
          '[data-search-box-id="' +
          n.searchInputId +
          '"]';
        return (
          (n.selector = {
            wrapper: r,
            popover: r + ' .' + l.a.searchSuggestion + '-popover',
            loading: r + ' .' + l.a.searchSuggestion + '-loading',
          }),
          (n.$searchInputElement = e),
          (n.$instantSearchResult = null),
          (n.$wrapper = null),
          (n.$popoverElement = null),
          (n.$loadingElement = null),
          (n.suggestionDirection = n._getSuggestionDirection()),
          (n.position = ''),
          n
        );
      }
      return (
        (e = g),
        (r = [
          {
            key: 'isActive',
            value: function () {
              return !0;
            },
          },
        ]),
        (n = [
          {
            key: 'init',
            value: function () {
              var t = this;
              (this.loadingBlock = new y.a()),
                this.addComponent(this.loadingBlock),
                (this.blockSettings = o.a.getSettingValue(
                  'search.suggestionBlocks'
                )),
                (this.onClickBlocks = u.a.getOnClickBlockSettings()),
                (this.blockSettings = this.onClickBlocks.concat(
                  this.blockSettings
                )),
                (this.noResultBlocks = c.a.getNoResultBlockSettings()),
                (this.blockSettings = this.blockSettings.concat(
                  this.noResultBlocks
                )),
                this._applyFilterBlockSettings(),
                (this.hasProductBlock = !1),
                this.blockSettings.forEach(function (e) {
                  var n = new f.a(e);
                  t.addComponent(n),
                    t.blocks.push(n),
                    e.type == s.a.ResultType.PRODUCTS &&
                      'active' == e.status &&
                      (t.hasProductBlock = !0);
                });
              var e = new h.a();
              this.addComponent(e), (this.blockViewAll = e);
              var n = new d.a();
              this.addComponent(n),
                (this.blockEmpty = n),
                c.a.getNoResultData(),
                u.a.getOnClickData();
            },
          },
          {
            key: 'getTemplate',
            value: function () {
              return '\n\t\t\t<div class="{{class.searchSuggestionWrapper}}" id="{{searchSuggestionId}}" data-search-box-id="{{searchInputId}}" role="listbox">\n\t\t\t\t<div class="{{class.searchSuggestion}}-popover" data-direction="{{suggestionDirection}}"></div>\n\t\t\t</div>\n\t\t'.trim();
            },
          },
          {
            key: 'compileTemplate',
            value: function () {
              var t = this._getSuggestionWrapperClass();
              return this.getTemplate()
                .replace(
                  /{{searchSuggestionId}}/g,
                  this.searchInputId.replace(
                    l.a.searchBox,
                    l.a.searchSuggestion
                  )
                )
                .replace(/{{searchInputId}}/g, this.searchInputId)
                .replace(/{{suggestionDirection}}/g, this.suggestionDirection)
                .replace(/{{class.searchSuggestionWrapper}}/g, t)
                .replace(/{{class.searchSuggestion}}/g, l.a.searchSuggestion);
            },
          },
          {
            key: '_getSuggestionWrapperClass',
            value: function () {
              var t = '',
                e =
                  l.a.searchSuggestion +
                  '-mobile-' +
                  o.a.getSettingValue('search.suggestionMobileStyle');
              switch (o.a.getSettingValue('search.suggestionStyle')) {
                case 'style1':
                  var n =
                    'grid' ===
                    o.a.getSettingValue(
                      'search.suggestionStyle1ProductItemType'
                    )
                      ? 3
                      : 1;
                  t =
                    l.a.searchSuggestionWrapper +
                    ' ' +
                    e +
                    ' ' +
                    l.a.searchSuggestion +
                    '-column-1 ' +
                    l.a.searchSuggestion +
                    '-product-position-none ' +
                    l.a.searchSuggestion +
                    '-product-item-type-' +
                    o.a.getSettingValue(
                      'search.suggestionStyle1ProductItemType'
                    ) +
                    ' ' +
                    l.a.searchSuggestion +
                    '-products-per-row-' +
                    n;
                  break;
                case 'style2':
                  var r =
                    'grid' ===
                    o.a.getSettingValue(
                      'search.suggestionStyle2ProductItemType'
                    )
                      ? 3
                      : o.a.getSettingValue(
                          'search.suggestionStyle2ProductPerRow'
                        );
                  t =
                    l.a.searchSuggestionWrapper +
                    ' ' +
                    e +
                    ' ' +
                    l.a.searchSuggestion +
                    '-column-2-non-fullwidth ' +
                    l.a.searchSuggestion +
                    '-product-position-' +
                    o.a.getSettingValue(
                      'search.suggestionStyle2ProductPosition'
                    ) +
                    ' ' +
                    l.a.searchSuggestion +
                    '-product-item-type-' +
                    o.a.getSettingValue(
                      'search.suggestionStyle2ProductItemType'
                    ) +
                    ' ' +
                    l.a.searchSuggestion +
                    '-products-per-row-' +
                    r;
                  break;
                case 'style3':
                  var i =
                    'grid' ===
                    o.a.getSettingValue(
                      'search.suggestionStyle3ProductItemType'
                    )
                      ? 4
                      : o.a.getSettingValue(
                          'search.suggestionStyle3ProductPerRow'
                        );
                  t =
                    l.a.searchSuggestionWrapper +
                    ' ' +
                    e +
                    ' ' +
                    l.a.searchSuggestion +
                    '-column-2-overlay-fullwidth ' +
                    l.a.searchSuggestion +
                    '-product-position-' +
                    o.a.getSettingValue(
                      'search.suggestionStyle3ProductPosition'
                    ) +
                    ' ' +
                    l.a.searchSuggestion +
                    '-product-item-type-' +
                    o.a.getSettingValue(
                      'search.suggestionStyle3ProductItemType'
                    ) +
                    ' ' +
                    l.a.searchSuggestion +
                    '-products-per-row-' +
                    i;
                  break;
                default:
                  var a = o.a.getSettingValue(
                    'search.suggestionProductItemPerRow'
                  );
                  t =
                    l.a.searchSuggestionWrapper +
                    ' ' +
                    e +
                    ' ' +
                    l.a.searchSuggestion +
                    '-column-' +
                    o.a.getSettingValue('search.suggestionColumn') +
                    ' ' +
                    l.a.searchSuggestion +
                    '-product-position-' +
                    o.a.getSettingValue('search.suggestionProductPosition') +
                    ' ' +
                    l.a.searchSuggestion +
                    '-product-item-type-' +
                    o.a.getSettingValue('search.suggestionProductItemType') +
                    ' ' +
                    l.a.searchSuggestion +
                    '-products-per-row-' +
                    a;
              }
              return t;
            },
          },
          { key: '_applyFilterBlockSettings', value: function () {} },
          {
            key: 'render',
            value: function () {
              if (this.isFirstLoad) {
                var t = this.compileTemplate();
                (this.appendToSelector = 'body'),
                  this._applyFilterAutocompleteAppendElement(),
                  i()(this.appendToSelector).append(t),
                  (this.$wrapper = i()(this.selector.wrapper)),
                  (this.$popoverElement = i()(this.selector.popover)),
                  (this.isFirstLoad = !1);
              } else
                this.$instantSearchResult.show(),
                  this.$instantSearchResult.siblings().show(),
                  this.isLoading
                    ? (this._renderSuggestionLoading(), this._renderWrapper())
                    : (this._renderWrapper(), this._renderSuggestion());
            },
          },
          {
            key: 'isBindEvents',
            value: function () {
              return !this.isBoundEvent;
            },
          },
          {
            key: 'bindEvents',
            value: function () {
              window.addEventListener(
                'resize',
                this._setSuggestionPosition.bind(this)
              );
              for (var t = 0; t < this.$searchInputElement.length; t++)
                this.$searchInputElement[t].addEventListener(
                  'click',
                  this._setSuggestionPosition.bind(this)
                );
            },
          },
          {
            key: '_applyFilterAutocompleteAppendElement',
            value: function () {},
          },
          {
            key: '_renderWrapper',
            value: function () {
              var t = a.a.InstantSearch.isFullWidthMobile()
                ? l.a.searchSuggestionMobile
                : '';
              '' !== t && this.$wrapper.addClass(t);
              var e = this._setSuggestionPosition();
              e.setSuggetionPosition(), e.setSuggetionPopoverPosition();
              var n = '';
              (n =
                'auto' == o.a.getSettingValue('search.suggestionWidth') ||
                a.a.isMobile()
                  ? this.$searchInputElement[0].getBoundingClientRect().width
                  : o.a.getSettingValue('search.suggestionWidth')),
                this.$wrapper.css({ width: n });
            },
          },
          {
            key: '_setSuggestionPosition',
            value: function () {
              var t = this,
                e = this,
                n = this.$searchInputElement[0].getBoundingClientRect(),
                r = a.a.InstantSearch.isFullWidthMobile()
                  ? n.bottom
                  : n.bottom + 12,
                o = e._getSuggestionDirection(),
                l = e._maxWidth();
              window.addEventListener('scroll', function () {
                if (!a.a.isMobile()) {
                  var t = e.$searchInputElement[0].getBoundingClientRect();
                  (r = a.a.InstantSearch.isFullWidthMobile()
                    ? t.bottom
                    : t.bottom + 12),
                    'left' == o
                      ? e.$wrapper.css({ top: r + 'px', left: t.left + 'px' })
                      : e.$wrapper.css({
                          top: r + 'px',
                          right: window.innerWidth - t.right + 'px',
                        });
                }
              });
              var s = '',
                c = '',
                u = '';
              if ('left' == o) {
                (s = r + 'px'), (c = n.left + 'px');
                var p = i()(window).width() - n.left,
                  f = l;
                p < l && (f = i()('#' + this.$wrapper[0].id).width()),
                  a.a.isMobile()
                    ? this.$wrapper.css({ top: s, right: '10px', left: '10px' })
                    : this.$wrapper.css({ top: s, left: c });
                var h = function () {
                    p < f
                      ? t.$instantSearchResult.css({
                          top: '0px',
                          left: '-' + (f - p + 20) + 'px',
                        })
                      : t.$instantSearchResult.css({ top: '0px', left: '0px' });
                  },
                  y = function () {
                    t.$popoverElement.css({ top: '-20px', left: '20px' });
                  };
              } else
                (s = r + 'px'),
                  (u = window.innerWidth - n.right + 'px'),
                  a.a.isMobile()
                    ? this.$wrapper.css({ top: s, right: '10px', left: '10px' })
                    : this.$wrapper.css({ top: s, right: u }),
                  (h = function () {
                    t.$instantSearchResult.css({ top: '0px', right: '0px' });
                  }),
                  (y = function () {
                    t.$popoverElement.css({ top: '-20px', right: '20px' });
                  });
              return {
                setSuggetionPosition: h,
                setSuggetionPopoverPosition: y,
              };
            },
          },
          {
            key: '_renderSuggestion',
            value: function () {
              if (
                (this.$instantSearchResult &&
                  this.$instantSearchResult.attr(
                    'data-search-box',
                    a.a.stripHtml(this.id)
                  ),
                this.data)
              ) {
                var t = this._getSuggestionBlockElements(),
                  e = this._isTwoColumn();
                e
                  ? this._renderSuggestionTwoColumn(t)
                  : this._renderSuggestionOneColumn(t);
                var n =
                  a.a.getValueInObjectArray(
                    s.a.ResultType.ALL_EMPTY,
                    this.data
                  ) && !this.hasRedirectData;
                if ((this.$wrapper.show(), n))
                  if (this.blockEmpty.$element)
                    if (
                      this.blockEmpty.isEmptyWithSuggestion &&
                      !a.a.isMobile() &&
                      e
                    ) {
                      var r = this.$instantSearchResult.find(
                          '[data-group=no_result_products]'
                        ),
                        i = this.$instantSearchResult.find(
                          '[data-group=no_result_suggestions]'
                        );
                      r.length > 0
                        ? r
                            .find('.' + l.a.searchSuggestionHeader)
                            .before(this.blockEmpty.$element)
                        : i.length > 0
                        ? i
                            .find('.' + l.a.searchSuggestionHeader)
                            .before(this.blockEmpty.$element)
                        : this.$instantSearchResult.prepend(
                            this.blockEmpty.$element
                          );
                    } else
                      this.$instantSearchResult.prepend(
                        this.blockEmpty.$element
                      );
                  else
                    this.$wrapper.hide(),
                      this.$wrapper.removeClass(l.a.searchSuggestionOpen);
              }
            },
          },
          {
            key: '_getSuggestionBlockElements',
            value: function () {
              var t = [],
                e =
                  a.a.getValueInObjectArray(
                    s.a.ResultType.ALL_EMPTY,
                    this.data
                  ) && !this.hasRedirectData,
                n = a.a.getValueInObjectArray(
                  s.a.ResultType.SUGGEST_QUERY,
                  this.data
                ),
                r = a.a.getValueInObjectArray(
                  s.a.ResultType.DID_YOU_MEAN,
                  this.data
                );
              return (
                !e || n || (r && 0 != r.length)
                  ? (this.blocks.forEach(function (e) {
                      t.push(e.$element);
                    }),
                    this.hasProductBlock && t.push(this.blockViewAll.$element))
                  : this.blockEmpty.$element &&
                    ((!a.a.isMobile() &&
                      this.blockEmpty.isEmptyWithSuggestion) ||
                      t.push(this.blockEmpty.$element),
                    this.blocks.forEach(function (e) {
                      t.push(e.$element);
                    })),
                t
              );
            },
          },
          {
            key: '_isTwoColumn',
            value: function () {
              var t = !1;
              if (!a.a.isMobile() && this.hasProductBlock)
                switch (o.a.getSettingValue('search.suggestionStyle')) {
                  case 'style1':
                    t = !1;
                    break;
                  case 'style2':
                  case 'style3':
                    t = !0;
                    break;
                  default:
                    o.a
                      .getSettingValue('search.suggestionColumn')
                      .startsWith('1') || (t = !0);
                }
              else t = !1;
              return t;
            },
          },
          {
            key: '_maxHeight',
            value: function () {
              var t = '',
                e = o.a.getSettingValue('search.suggestionMaxHeight'),
                n = o.a.getSettingValue('search.suggestionStyle'),
                r = o.a.getSettingValue(
                  'search.suggestionStyle2ProductItemType'
                ),
                i = this.$searchInputElement[0].getBoundingClientRect(),
                l = a.a.InstantSearch.isFullWidthMobile()
                  ? i.bottom
                  : i.bottom + 12;
              return (
                (t = '' == e ? ('style2' == n && 'list' == r ? 564 : 640) : e) +
                  l >
                  window.innerHeight - 30 && (t = window.innerHeight - l - 30),
                t
              );
            },
          },
          {
            key: '_maxWidth',
            value: function () {
              var t = o.a.getSettingValue('search.suggestionMaxWidth'),
                e = o.a.getSettingValue('search.suggestionStyle'),
                n = o.a.getSettingValue(
                  'search.suggestionStyle2ProductItemType'
                ),
                r = o.a.getSettingValue('search.suggestionStyle2ProductPerRow');
              return '' == t
                ? 'style2' == e && 'grid' == n
                  ? 850
                  : 'style2' == e && 'list' == n && '2' == r
                  ? 800
                  : 'style2' == e && 'list' == n && '1' == r
                  ? 526
                  : ''
                : t;
            },
          },
          {
            key: '_renderSuggestionOneColumn',
            value: function (t) {
              var e = this._maxHeight() + 'px';
              this.$instantSearchResult.css('maxHeight', e);
              var n = i()(
                '<div class="boost-pfs-search-suggestion-scroll-groups-element-wrapper"></div>'
              );
              t.forEach(function (t) {
                n.append(t);
              }),
                this.$instantSearchResult.append(n),
                this.$instantSearchResult.append(this.blockViewAll.$element);
            },
          },
          {
            key: '_renderSuggestionTwoColumn',
            value: function (t) {
              var e = this,
                n = this._maxHeight() + 'px';
              this.$instantSearchResult.css('maxHeight', n);
              var r = i()(
                  '<div class="' + l.a.searchSuggestion + '-groups-pro"></div>'
                ),
                o = i()(
                  '<div class="' +
                    l.a.searchSuggestion +
                    '-groups-others"></div>'
                );
              t.forEach(function (t) {
                e.$instantSearchResult.append(o).append(r);
                var n = void 0 !== t.data ? t.data('group') : '';
                void 0 === n && (n = ''),
                  n.includes('products') || 'view-all' == n || 'empty' == n
                    ? r.append(t)
                    : o.append(t);
              }),
                '' == r.html().trim()
                  ? o.addClass(l.a.searchSuggestion + '-no-products')
                  : o.removeClass(l.a.searchSuggestion + '-no-products'),
                '' == o.html().trim()
                  ? (r.addClass(l.a.searchSuggestion + '-no-others'),
                    this.$instantSearchResult
                      .parent()
                      .addClass(l.a.searchSuggestion + '-no-others-wrapper'))
                  : (r.removeClass(l.a.searchSuggestion + '-no-others'),
                    this.$instantSearchResult
                      .parent()
                      .removeClass(
                        l.a.searchSuggestion + '-no-others-wrapper'
                      )),
                this.$instantSearchResult.append(o).append(r);
            },
          },
          {
            key: '_renderSuggestionLoading',
            value: function () {
              this.loadingBlock.$element &&
                !i()(this.selector.loading).length &&
                (this.$instantSearchResult.children().hide(),
                this.$instantSearchResult.prepend(this.loadingBlock.$element),
                (this.$loadingElement = i()(this.selector.loading)),
                this.$wrapper.addClass(l.a.searchSuggestionOpen),
                i()('body').addClass(l.a.searchSuggestionOpenBody),
                this.$instantSearchResult.show(),
                this.$loadingElement.show());
            },
          },
          {
            key: '_getSuggestionDirection',
            value: function () {
              var t = o.a.getSettingValue('search.suggestionPosition');
              if ('' != t) return t;
              var e = i()(window).width() / 2;
              return this.$searchInputElement.offset().left < e
                ? 'left'
                : 'right';
            },
          },
          {
            key: 'setData',
            value: function (t, e, n) {
              var r = this;
              if (
                ((this.$instantSearchResult = t),
                (this.data = e),
                (this.isLoading = n),
                this.data)
              ) {
                this.setRedirectData();
                var i =
                    a.a.getValueInObjectArray(
                      s.a.ResultType.ALL_EMPTY,
                      this.data
                    ) && !this.hasRedirectData,
                  o = a.a.getValueInObjectArray(
                    s.a.ResultType.SUGGEST_QUERY,
                    this.data
                  ),
                  l = a.a.getValueInObjectArray(
                    s.a.ResultType.DID_YOU_MEAN,
                    this.data
                  );
                this.blocks.forEach(function (t) {
                  var e = a.a.getValueInObjectArray(t.type, r.data);
                  if (i && !o && (!l || 0 == l.length)) {
                    var n = c.a.getNoResultData()[t.type];
                    n && (e = n);
                  }
                  t.setData(e, i);
                }),
                  this.blockEmpty.setData(this.data),
                  this.blockViewAll.setData(this.data);
              }
            },
          },
          {
            key: 'setRedirectData',
            value: function () {
              if (
                ((this.redirectData = a.a.getValueInObjectArray(
                  s.a.ResultType.REDIRECT,
                  this.data
                )),
                (this.searchQuery = a.a.getValueInObjectArray(
                  s.a.ResultType.QUERY,
                  this.data
                )),
                (this.hasRedirectData = !1),
                this.redirectData && this.searchQuery)
              ) {
                var t = a.a.getValueInObjectArray(
                  s.a.ResultType.SUGGESTIONS,
                  this.data
                );
                Array.isArray(t) &&
                  (t.includes(this.searchQuery) || t.unshift(this.searchQuery),
                  (this.hasRedirectData = !0));
              }
            },
          },
        ]) && m(e.prototype, n),
        r && m(e, r),
        g
      );
    })(p.a);
    e.a = T;
  },
  86: function (t, e, n) {
    'use strict';
    n(21),
      n(22),
      n(23),
      n(17),
      n(18),
      n(9),
      n(19),
      n(14),
      n(15),
      n(16),
      n(11),
      n(13),
      n(12);
    var r = n(1),
      i = n.n(r),
      o = n(0),
      a = n(4),
      l = n(2),
      s = n(3);
    function c(t) {
      return (c =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function u(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function p(t, e) {
      return (p =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function f(t, e) {
      return !e || ('object' !== c(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function h(t) {
      return (h = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var y = (function (t) {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && p(t, e);
      })(y, t);
      var e,
        n,
        r,
        c = (function (t) {
          function e() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          return function () {
            var n,
              r = h(t);
            if (e()) {
              var i = h(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return f(this, n);
          };
        })(y);
      function y() {
        var t;
        return (
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, y),
          ((t = c.call(this)).id = ''),
          (t.title = ''),
          (t.imageUrl = ''),
          (t.url = ''),
          (t.sku = ''),
          (t.label = ''),
          (t.vendor = ''),
          (t.isShow = !1),
          t
        );
      }
      return (
        (e = y),
        (r = [
          {
            key: 'tempType',
            get: function () {
              return {
                SKU: 'sku',
                VENDOR: 'vendor',
                IMAGE: 'thumb',
                PRICE: 'regular_price',
                PRICE_SALE: 'sale_price',
              };
            },
          },
        ]),
        (n = [
          {
            key: 'getTemplate',
            value: function (t) {
              switch (t) {
                case y.tempType.IMAGE:
                  return '\n\t\t\t\t\t<div class="{{class.searchSuggestion}}-left">\n\t\t\t\t\t\t<img tabindex="-1" src="{{imageUrl}}" alt="{{escapedTitle}}">\n\t\t\t\t\t</div>\n\t\t\t\t'.trim();
                case y.tempType.SKU:
                  return '\n\t\t\t\t\t<p class="{{class.searchSuggestion}}-product-sku">SKU: {{sku}}</p>\n\t\t\t\t'.trim();
                case y.tempType.VENDOR:
                  return '\n\t\t\t\t\t<p class="{{class.searchSuggestion}}-product-vendor">{{vendor}}</p>\n\t\t\t\t'.trim();
                case y.tempType.PRICE:
                  return '\n\t\t\t\t\t<p class="{{class.searchSuggestion}}-product-price">\n\t\t\t\t\t\t<span class="{{class.searchSuggestion}}-product-regular-price">{{regularPrice}}</span>\n\t\t\t\t\t</p>\n\t\t\t\t'.trim();
                case y.tempType.PRICE_SALE:
                  return '\n\t\t\t\t\t<p class="{{class.searchSuggestion}}-product-price">\n            <span class="{{class.searchSuggestion}}-product-sale-price">{{regularPrice}}</span>&nbsp;\n\t\t\t\t\t\t<s>{{compareAtPrice}}</s>\n\t\t\t\t\t\t\n\t\t\t\t\t</p>\n\t\t\t\t'.trim();
                default:
                  return '\n\t\t\t\t\t<li class="{{class.searchSuggestionItem}} {{class.searchSuggestionItem}}-product {{class.searchUiAutocompleteItem}}" aria-label="{{escapedBlockType}}: {{escapedTitle}}" data-id="{{id}}" role="option">\n\t\t\t\t\t\t<a tabindex="-1" href="{{url}}" {{newTabAttribute}}>\n\t\t\t\t\t\t\t{{itemProductImage}}\n\t\t\t\t\t\t\t<div class="{{class.searchSuggestion}}-right">\n\t\t\t\t\t\t\t\t<p class="{{class.searchSuggestion}}-product-title">{{title}}</p>\n\t\t\t\t\t\t\t\t{{itemProductSku}}\n\t\t\t\t\t\t\t\t{{itemProductVendor}}\n\t\t\t\t\t\t\t\t{{itemProductPrice}}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t'.trim();
              }
            },
          },
          {
            key: 'compileTemplate',
            value: function () {
              if (this.isShow) {
                var t = o.a.stripHtml(s.a.currentTerm),
                  e = '';
                l.a.getSettingValue('search.showSuggestionProductImage') &&
                  this.imageUrl.length &&
                  (e = (e = this.getTemplate(y.tempType.IMAGE)).replace(
                    /{{imageUrl}}/g,
                    this.imageUrl
                  ));
                var n = this.customizeProductTitle();
                n = this._highlightSuggestionResult(n, t);
                var r = '';
                l.a.getSettingValue('search.showSuggestionProductSku') &&
                  this.sku.length &&
                  (r = (r = this.getTemplate(y.tempType.SKU)).replace(
                    /{{sku}}/g,
                    this.sku
                  ));
                var i = '';
                l.a.getSettingValue('search.showSuggestionProductVendor') &&
                  this.vendor.length &&
                  (i = (i = this.getTemplate(y.tempType.VENDOR)).replace(
                    /{{vendor}}/g,
                    this.vendor
                  ));
                var c = this.compileSuggestionProductPrice(),
                  u = l.a.getSettingValue('search.openProductNewTab')
                    ? 'target="_blank"'
                    : '';
                return this.getTemplate()
                  .replace(/{{id}}/g, this.id)
                  .replace(
                    /{{escapedBlockType}}/g,
                    o.a.stripHtml(this.parent.type)
                  )
                  .replace(/{{url}}/g, this.url)
                  .replace(/{{newTabAttribute}}/g, u)
                  .replace(/{{itemProductImage}}/g, e)
                  .replace(/{{title}}/g, n)
                  .replace(/{{escapedTitle}}/g, o.a.stripHtml(n))
                  .replace(/{{itemProductSku}}/g, r)
                  .replace(/{{itemProductVendor}}/g, i)
                  .replace(/{{itemProductPrice}}/, c)
                  .replace(/{{class.searchSuggestion}}/g, a.a.searchSuggestion)
                  .replace(
                    /{{class.searchSuggestionItem}}/g,
                    a.a.searchSuggestionItem
                  )
                  .replace(
                    /{{class.searchUiAutocompleteItem}}/g,
                    a.a.searchUiAutocompleteItem
                  );
              }
              return '';
            },
          },
          {
            key: 'render',
            value: function () {
              this.isShow
                ? ((this.$element = i()(this.compileTemplate())),
                  this.$element.attr('data-title', o.a.stripHtml(this.title)))
                : (this.$element = null);
            },
          },
          {
            key: 'setData',
            value: function (t) {
              t
                ? ((this.data = t),
                  (this.id = t.id),
                  (this.title = o.a.stripHtml(t.title)),
                  (this.imageUrl =
                    t.images_info.length > 0
                      ? o.a.optimizeImage(t.images_info[0].src, '200x')
                      : boostPFSConfig.general.no_image_url),
                  (this.url = o.a.buildProductItemUrlWithVariant(t)),
                  (this.sku = o.a.stripHtml(
                    t.skus && t.skus.length > 0 ? t.skus[0] : ''
                  )),
                  (this.label = o.a.stripHtml(t.label)),
                  (this.vendor = o.a.stripHtml(t.vendor)),
                  (this.isShow = !0))
                : ((this.data = null),
                  (this.id = ''),
                  (this.title = ''),
                  (this.imageUrl = ''),
                  (this.url = ''),
                  (this.sku = ''),
                  (this.label = ''),
                  (this.vendor = ''),
                  (this.isShow = !1));
            },
          },
          {
            key: 'compileSuggestionProductPrice',
            value: function () {
              this.prepareSuggestionProductPriceData();
              var t = this.data.compare_at_price_min > this.data.price_min,
                e = o.a.formatMoney(this.data.price_min),
                n = '';
              this.data &&
                this.data.compare_at_price_min &&
                ((n = o.a.formatMoney(this.data.compare_at_price_min)),
                l.a.getSettingValue('search.removePriceDecimal') &&
                  ((e = o.a.removeDecimal(e)), (n = o.a.removeDecimal(n))));
              var r = '';
              return (
                l.a.getSettingValue('search.showSuggestionProductPrice') &&
                  (r =
                    t &&
                    l.a.getSettingValue('search.showSuggestionProductSalePrice')
                      ? this.getTemplate(y.tempType.PRICE_SALE)
                      : this.getTemplate(y.tempType.PRICE)),
                r
                  .replace(/{{regularPrice}}/g, e)
                  .replace(/{{compareAtPrice}}/g, n)
              );
            },
          },
          {
            key: 'customizeProductTitle',
            value: function () {
              return this.title;
            },
          },
          {
            key: 'prepareSuggestionProductPriceData',
            value: function () {
              var t = this.data;
              o.a.isEnableShopifyMultipleCurrencies() &&
                (!t.isConvertedPrice && o.a.isConvertCurrenciesOnFrontEnd()
                  ? ((t.price_min = o.a.convertPriceBasedOnActiveCurrency(
                      t.price_min,
                      !0
                    )),
                    (t.price_max = o.a.convertPriceBasedOnActiveCurrency(
                      t.price_max,
                      !0
                    )),
                    (t.compare_at_price_min =
                      o.a.convertPriceBasedOnActiveCurrency(
                        t.compare_at_price_min,
                        !0
                      )),
                    (t.compare_at_price_max =
                      o.a.convertPriceBasedOnActiveCurrency(
                        t.compare_at_price_max,
                        !0
                      )),
                    (t.isConvertedPrice = !0))
                  : o.a.convertPriceBasedOnPresentmentPrice(t));
            },
          },
        ]) && u(e.prototype, n),
        r && u(e, r),
        y
      );
    })(n(59).a);
    e.a = y;
  },
});

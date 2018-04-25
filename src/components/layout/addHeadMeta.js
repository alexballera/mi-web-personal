'use strict'
import $ from 'jquery'

const data = {
  title: 'Estructura Site',
  description: 'Ha emprendido diferentes negocios, desarrolla sitios responsivos'
}

const meta = `
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<link rel="profile" href="http://gmpg.org/xfn/11">
<title>${data.title}</title>
<meta name="description" content="${data.description}"/>

<!-- Mobile Optimization -->
<meta name="HandheldFriendly" content="True">
<meta name="MobileOptimized" content="320">
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">

<!-- Images Icon -->
<link rel="shortcut icon" href="images/logo.png" />
<link rel="apple-touch-icon" href="images/logo.png" />
<link rel="apple-touch-icon" sizes="72x72" href="images/logo.png" />
<link rel="apple-touch-icon" sizes="114x114" href="images/logo.png" />
<link rel="apple-touch-icon" sizes="152x152" href="images/logo.png">

<!-- START - Facebook Open Graph, Google+ and Twitter Card Tags  -->
<meta name="author" content="Alex Ballera"/>
<meta name="description" content="${data.description}"/>
<meta property="fb:app_id" content="586663831475504"/>
<meta property="fb:admins" content="721354641"/>
<meta property="og:locale" content="es_ES"/>
<meta property="og:site_name" content="${data.title}"/>
<meta property="og:title" content="${data.title}"/>
<meta property="og:url" content="http://alexballera.com"/>
<meta property="og:type" content="blog"/>
<meta property="og:description" content="${data.description}"/>
<meta property="og:image" content="images/logo.png"/>
<meta property="og:image:width" content="400"/>
<meta property="og:image:height" content="400"/>
<meta property="article:publisher" content="https://www.facebook.com/AlexBallera.Dev"/>
<meta property="article:author" content="https://www.facebook.com/alexballera"/>

<!-- Twitter Card -->
<meta name="twitter:title" content="${data.title}"/>
<meta name="twitter:url" content="http://alexballera.com"/>
<meta name="twitter:site" content="@alexballera"/>
<meta name="twitter:creator" content="@alexballera"/>
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:description" content="${data.description}"/>
<meta name="twitter:image:src" content="images/logo.png"/>
<meta name="twitter:image" content="images/logo.png"/>
<link rel="canonical" href="http://alexballera.com"/>
<link rel="publisher" href="https://plus.google.com/100946240394478170627"/>
<link rel="author" href="https://plus.google.com/101028757520419920996"/>

<!-- SEO -->
<meta name="robots" content="noodp,noydir"/>
<meta name="alexaVerifyID" content="J924iFGGdKgq0-GCXwJgfpwUOXo" />
<meta name="msvalidate.01" content="08233A1E02AF2B0463287F1A6529C2F1" />
<meta name='yandex-verification' content='653147f013103fde' />
<meta name="p:domain_verify" content="f6f86a492f4e475ef7cbf5df08a519e7"/>
<meta name="google-site-verification" content="ByMxpIFAuMVCAE6N4WuyEHx62Ys4UuzneZTnxkmyZRI" />

<!-- RSS -->
<link rel="alternate" type="application/rss+xml" title="${data.title} &raquo; Feed" href="http://web.alexballera.com/feed/" />
<link rel="alternate" type="application/rss+xml" title="${data.title} &raquo; RSS de los comentarios" href="http://web.alexballera.com/comments/feed/" />

<!-- END - Facebook Open Graph, Google+ and Twitter Card Tags -->
<script type="application/ld+json">
  {
    "@context": "http://schema.org",
    "@type": "Article",
    "mainEntityOfPage":{
      "@type":"WebPage",
      "@id":"http://alexballera.com"
    },
    "headline": "${data.title}",
    "image": {
      "@type": "ImageObject",
      "url": "images/logo.png",
      "height": 800,
      "width": 800
    },
    "datePublished": "2018-02-05T08:00:00+08:00",
    "dateModified": "2018-02-05T09:20:00+08:00",
    "author": {
      "@type": "Person",
      "name": "Alex Ballera"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Alex Ballera",
      "logo": {
        "@type": "ImageObject",
        "url": "images/logo.png",
        "width": 600,
        "height": 60
      }
    },
    "description": "${data.description}"
  }
</script>
`
const head = () => {
  $('head').prepend(meta)
}

export {head, data}

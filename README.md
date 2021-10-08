# AMD-REQUIRE-JS


<!-- wp:paragraph -->
<p><strong>Asynchronous module definition (AMD) </strong>is a specification for the programming language JavaScript. It defines code modules and their dependencies, and loads them asynchronously in on demand basis.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":537,"sizeSlug":"large","linkDestination":"none","className":"is-style-default"} -->
<figure class="wp-block-image size-large is-style-default"><img src="https://andisitecore.files.wordpress.com/2021/10/amd-sitecore-js-1.jpg?w=734" alt="" class="wp-image-537"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>If you need more information. Refer <a href="https://requirejs.org/docs/whyamd.html" target="_blank" rel="noreferrer noopener">https://requirejs.org/docs/whyamd.html</a>.</p>
<!-- /wp:paragraph -->



<!-- wp:heading {"level":4,"textColor":"secondary"} -->
## Require JS implementation
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>GIT-SRC: <a href="https://github.com/andiappan-ar/AMD-REQUIRE-JS" target="_blank" rel="noreferrer noopener">https://github.com/andiappan-ar/AMD-REQUIRE-JS</a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>As part of this sample created few components and their related JavaScript's. Using Require JS implemented AMD  implementations.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>All of the components related module JavaScript &amp; their dependencies will load on demand basis.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Sample ASP.NET MVC project consists totally 3 modules pages(AboutUs, ContactUs, Roles) and home page. In home page will have all the modules.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":518,"width":628,"height":274,"sizeSlug":"large","linkDestination":"none","className":"is-style-default"} -->
<div class="wp-block-image is-style-default"><figure class="aligncenter size-large is-resized"><img src="https://andisitecore.files.wordpress.com/2021/10/image.png?w=1024" alt="" class="wp-image-518" width="628" height="274"/></figure></div>
<!-- /wp:image -->

<!-- wp:image {"align":"center","id":519,"width":627,"height":377,"sizeSlug":"large","linkDestination":"none","className":"is-style-default"} -->
<div class="wp-block-image is-style-default"><figure class="aligncenter size-large is-resized"><img src="https://andisitecore.files.wordpress.com/2021/10/image-1.png?w=1024" alt="" class="wp-image-519" width="627" height="377"/></figure></div>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>First we have to include require plugin inside head tag. As mentioned below,</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>SRC: <a href="https://github.com/andiappan-ar/AMD-REQUIRE-JS/blob/master/AMD-REQUIREJS/Views/Shared/Main_Layout.cshtml" target="_blank" rel="noreferrer noopener">https://github.com/andiappan-ar/AMD-REQUIRE-JS/blob/master/AMD-REQUIREJS/Views/Shared/Main_Layout.cshtml</a></p>
<!-- /wp:paragraph -->

<!-- wp:syntaxhighlighter/code {"language":"xml","highlightLines":"6"} -->
<pre class="wp-block-syntaxhighlighter-code">&lt;!DOCTYPE html>
&lt;html lang="en">
&lt;head>
    &lt;!-- data-main attribute tells require.js to load
             scripts/main.js after require.js loads. -->
    &lt;script data-main="/scripts/main/main" src="/scripts/main/require.js">&lt;/script>
&lt;/head>

</pre>
<!-- /wp:syntaxhighlighter/code -->

<!-- wp:paragraph -->
<p>This will treat main.js as a entry point of your application. Now in main js import the common dependencies.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"style":{"color":{"background":"#d6d7d8"}}} -->
<p class="has-background" style="background-color:#d6d7d8">Note: In real-time application main js will have all the common module initialization.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>SRC: https://github.com/andiappan-ar/AMD-REQUIRE-JS/blob/master/AMD-REQUIREJS/Scripts/main/main.js</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In the sample main.js importing layout related scripts &amp; bootstrap JS. This two dependencies will use across all the pages. So its imported in layout JS.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>You can import your local files or CDN as well like below,</p>
<!-- /wp:paragraph -->

<!-- wp:syntaxhighlighter/code {"language":"jscript","highlightLines":"2,3"} -->
<pre class="wp-block-syntaxhighlighter-code">requirejs([
"/scripts/main/components/layout.js", "https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"
], function (util,boot) {

});</pre>
<!-- /wp:syntaxhighlighter/code -->

<!-- wp:paragraph -->
<p>As shown like below home page will load all the modules JavaScript and their dependencies.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":529,"sizeSlug":"large","linkDestination":"none","className":"is-style-default"} -->
<div class="wp-block-image is-style-default"><figure class="aligncenter size-large"><img src="https://andisitecore.files.wordpress.com/2021/10/image-2.png?w=1024" alt="" class="wp-image-529"/></figure></div>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>All the component specific dependencies will be import under every component. In sample ContactUs component requires jquery plugin &amp; contactus.js , So this can be import like below in Contactus.cshtml.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>SRC: <a href="https://github.com/andiappan-ar/AMD-REQUIRE-JS/blob/master/AMD-REQUIREJS/Views/Home/_ContactUs.cshtml" target="_blank" rel="noreferrer noopener">https://github.com/andiappan-ar/AMD-REQUIRE-JS/blob/master/AMD-REQUIREJS/Views/Home/_ContactUs.cshtml</a></p>
<!-- /wp:paragraph -->

<!-- wp:syntaxhighlighter/code {"language":"jscript","highlightLines":"2,3"} -->
<pre class="wp-block-syntaxhighlighter-code">    requirejs([
"/scripts/main/jquery-3.4.1.min.js", "/scripts/main/components/contactus.js"], function ($, about) {
    });</pre>
<!-- /wp:syntaxhighlighter/code -->

<!-- wp:paragraph -->
<p>As showed image below , only component specific JavaScript &amp; their dependencies will load on demand basis.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":531,"sizeSlug":"large","linkDestination":"none","className":"is-style-default"} -->
<div class="wp-block-image is-style-default"><figure class="aligncenter size-large"><img src="https://andisitecore.files.wordpress.com/2021/10/image-3.png?w=1024" alt="" class="wp-image-531"/></figure></div>
<!-- /wp:image -->


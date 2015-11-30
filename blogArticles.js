


<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=1020">
    
    
    <title>sea-301d1/blogArticles.js at master · codefellows/sea-301d1 · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="codefellows/sea-301d1" name="twitter:title" /><meta content="sea-301d1 - Code 301: Intermediate Software Development" name="twitter:description" /><meta content="https://avatars3.githubusercontent.com/u/3904529?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars3.githubusercontent.com/u/3904529?v=3&amp;s=400" property="og:image" /><meta content="codefellows/sea-301d1" property="og:title" /><meta content="https://github.com/codefellows/sea-301d1" property="og:url" /><meta content="sea-301d1 - Code 301: Intermediate Software Development" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    
    <meta name="pjax-timeout" content="1000">
    

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="C73B6BDA:3F58:9911BF4:565CBDF6" name="octolytics-dimension-request_id" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />
<meta content="Rails, view, blob#show" data-pjax-transient="true" name="analytics-event" />


  <meta class="js-ga-set" name="dimension1" content="Logged Out">
    <meta class="js-ga-set" name="dimension4" content="Current repo nav">




    <meta name="is-dotcom" content="true">
        <meta name="hostname" content="github.com">
    <meta name="user-login" content="">

      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta content="e9f77dd20b3236cb28561b059f8bf187bdbbfcd5" name="form-nonce" />

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-5e2d1232bc97970f293f259bcb6ab137945cb5635b398c2a81027bf21f0255c8.css" integrity="sha256-Xi0SMryXlw8pPyWby2qxN5RctWNbOYwqgQJ78h8CVcg=" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github2-c6824f142375ea604f7dca2bd8018e02878485be3b6e9ba5ac55e6fa922887fa.css" integrity="sha256-xoJPFCN16mBPfcor2AGOAoeEhb47bpulrFXm+pIoh/o=" media="all" rel="stylesheet" />
    
    
    


    <meta http-equiv="x-pjax-version" content="cbb07a6d365895dbe879d43878fb3c63">

      
  <meta name="description" content="sea-301d1 - Code 301: Intermediate Software Development">
  <meta name="go-import" content="github.com/codefellows/sea-301d1 git https://github.com/codefellows/sea-301d1.git">

  <meta content="3904529" name="octolytics-dimension-user_id" /><meta content="codefellows" name="octolytics-dimension-user_login" /><meta content="45644046" name="octolytics-dimension-repository_id" /><meta content="codefellows/sea-301d1" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="45644046" name="octolytics-dimension-repository_network_root_id" /><meta content="codefellows/sea-301d1" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/codefellows/sea-301d1/commits/master.atom" rel="alternate" title="Recent Commits to sea-301d1:master" type="application/atom+xml">

  </head>


  <body class="logged_out   env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



      
      <div class="header header-logged-out" role="banner">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions" role="navigation">
        <a class="btn btn-primary" href="/join" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
      <a class="btn" href="/login?return_to=%2Fcodefellows%2Fsea-301d1%2Fblob%2Fmaster%2Fclass-01-jquery-and-the-dom%2FblogArticles.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
    </div>

    <div class="site-search repo-scope js-site-search" role="search">
      <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/codefellows/sea-301d1/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/codefellows/sea-301d1/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <label class="js-chromeless-input-container form-control">
    <div class="scope-badge">This repository</div>
    <input type="text"
      class="js-site-search-focus js-site-search-field is-clearable chromeless-input"
      data-hotkey="s"
      name="q"
      placeholder="Search"
      aria-label="Search this repository"
      data-global-scope-placeholder="Search GitHub"
      data-repo-scope-placeholder="Search"
      tabindex="1"
      autocapitalize="off">
  </label>
</form>
    </div>

      <ul class="header-nav left" role="navigation">
          <li class="header-nav-item">
            <a class="header-nav-link" href="/explore" data-ga-click="(Logged out) Header, go to explore, text:explore">Explore</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/features" data-ga-click="(Logged out) Header, go to features, text:features">Features</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://enterprise.github.com/" data-ga-click="(Logged out) Header, go to enterprise, text:enterprise">Enterprise</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/pricing" data-ga-click="(Logged out) Header, go to pricing, text:pricing">Pricing</a>
          </li>
      </ul>

  </div>
</div>



    <div id="start-of-content" class="accessibility-aid"></div>

    <div id="js-flash-container">
</div>


    <div role="main" class="main-content">
        <div itemscope itemtype="http://schema.org/WebPage">
    <div class="pagehead repohead instapaper_ignore readability-menu">

      <div class="container">

        <div class="clearfix">
          

<ul class="pagehead-actions">

  <li>
      <a href="/login?return_to=%2Fcodefellows%2Fsea-301d1"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <span class="octicon octicon-eye"></span>
    Watch
  </a>
  <a class="social-count" href="/codefellows/sea-301d1/watchers">
    9
  </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fcodefellows%2Fsea-301d1"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span class="octicon octicon-star"></span>
    Star
  </a>

    <a class="social-count js-social-count" href="/codefellows/sea-301d1/stargazers">
      3
    </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fcodefellows%2Fsea-301d1"
        class="btn btn-sm btn-with-count tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-repo-forked"></span>
        Fork
      </a>

    <a href="/codefellows/sea-301d1/network" class="social-count">
      12
    </a>
  </li>
</ul>

          <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public ">
  <span class="mega-octicon octicon-repo"></span>
  <span class="author"><a href="/codefellows" class="url fn" itemprop="url" rel="author"><span itemprop="title">codefellows</span></a></span><!--
--><span class="path-divider">/</span><!--
--><strong><a href="/codefellows/sea-301d1" data-pjax="#js-repo-pjax-container">sea-301d1</a></strong>

  <span class="page-context-loader">
    <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
  </span>

</h1>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline ">
        <div class="repository-sidebar clearfix">
          
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/codefellows/sea-301d1/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/codefellows/sea-301d1" aria-label="Code" aria-selected="true" class="js-selected-navigation-item selected sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /codefellows/sea-301d1">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/codefellows/sea-301d1/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /codefellows/sea-301d1/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull requests">
      <a href="/codefellows/sea-301d1/pulls" aria-label="Pull requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /codefellows/sea-301d1/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/codefellows/sea-301d1/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /codefellows/sea-301d1/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/codefellows/sea-301d1/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /codefellows/sea-301d1/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>
  </ul>


</nav>

            <div class="only-with-full-nav">
                
<div class="js-clone-url clone-url open"
  data-protocol-type="http">
  <h3 class="text-small text-muted"><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini text-small text-muted input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/codefellows/sea-301d1.git" readonly="readonly" aria-label="HTTPS clone URL">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="js-clone-url clone-url "
  data-protocol-type="subversion">
  <h3 class="text-small text-muted"><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini text-small text-muted input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/codefellows/sea-301d1" readonly="readonly" aria-label="Subversion checkout URL">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>



<div class="clone-options text-small text-muted">You can clone with
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone" class="inline-form js-clone-selector-form " data-form-nonce="e9f77dd20b3236cb28561b059f8bf187bdbbfcd5" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="kO1xmhamQkZPgRZ2ZuvhdjtP3RoxjYFGQKqYgOLROs2bKEkRpM6U5g8kblUk1n56/1bECns5jBTwh+4voVTMVw==" /></div><button class="btn-link js-clone-selector" data-protocol="http" type="submit">HTTPS</button></form> or <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone" class="inline-form js-clone-selector-form " data-form-nonce="e9f77dd20b3236cb28561b059f8bf187bdbbfcd5" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="ipM0G7PQWJIljL5P5Zd5aiWz3f/YxgiLIitrE55doBnr8OUdx+QacpKgz+513m5LknpzKPiBjgJnWVDghPs04A==" /></div><button class="btn-link js-clone-selector" data-protocol="subversion" type="submit">Subversion</button></form>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</div>
  <a href="https://windows.github.com" class="btn btn-sm sidebar-button" title="Save codefellows/sea-301d1 to your computer and use it in GitHub Desktop." aria-label="Save codefellows/sea-301d1 to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-desktop-download"></span>
    Clone in Desktop
  </a>

              <a href="/codefellows/sea-301d1/archive/master.zip"
                 class="btn btn-sm sidebar-button"
                 aria-label="Download the contents of codefellows/sea-301d1 as a zip file"
                 title="Download the contents of codefellows/sea-301d1 as a zip file"
                 rel="nofollow">
                <span class="octicon octicon-cloud-download"></span>
                Download ZIP
              </a>
            </div>
        </div>
        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>

          

<a href="/codefellows/sea-301d1/blob/5cd0590f1e58830e741d99c26403a32906f240e8/class-01-jquery-and-the-dom/blogArticles.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:48cd1739570e4ea9071f3f19d436fbf2 -->

  <div class="file-navigation js-zeroclipboard-container">
    
<div class="select-menu js-menu-container js-select-menu left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    title="master"
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/codefellows/sea-301d1/blob/master/class-01-jquery-and-the-dom/blogArticles.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

    <div class="btn-group right">
      <a href="/codefellows/sea-301d1/find/master"
            class="js-show-file-finder btn btn-sm empty-icon tooltipped tooltipped-nw"
            data-pjax
            data-hotkey="t"
            aria-label="Quickly jump between files">
        <span class="octicon octicon-list-unordered"></span>
      </a>
      <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </div>

    <div class="breadcrumb js-zeroclipboard-target">
      <span class="repo-root js-repo-root"><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/codefellows/sea-301d1" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">sea-301d1</span></a></span></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/codefellows/sea-301d1/tree/master/class-01-jquery-and-the-dom" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">class-01-jquery-and-the-dom</span></a></span><span class="separator">/</span><strong class="final-path">blogArticles.js</strong>
    </div>
  </div>


  <div class="commit-tease">
      <span class="right">
        <a class="commit-tease-sha" href="/codefellows/sea-301d1/commit/b5fc530df92e8570e917e4e17be538937baa49ce" data-pjax>
          b5fc530
        </a>
        <time datetime="2015-11-17T20:33:36Z" is="relative-time">Nov 17, 2015</time>
      </span>
      <div>
        <img alt="@brookr" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/11095?v=3&amp;s=40" width="20" />
        <a href="/brookr" class="user-mention" rel="contributor">brookr</a>
          <a href="/codefellows/sea-301d1/commit/b5fc530df92e8570e917e4e17be538937baa49ce" class="message" data-pjax="true" title="Focus on the article data.">Focus on the article data.</a>
      </div>

    <div class="commit-tease-contributors">
      <a class="muted-link contributors-toggle" href="#blob_contributors_box" rel="facebox">
        <strong>1</strong>
         contributor
      </a>
      
    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@brookr" height="24" src="https://avatars2.githubusercontent.com/u/11095?v=3&amp;s=48" width="24" />
            <a href="/brookr">brookr</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="btn-group">
      <a href="/codefellows/sea-301d1/raw/master/class-01-jquery-and-the-dom/blogArticles.js" class="btn btn-sm " id="raw-url">Raw</a>
        <a href="/codefellows/sea-301d1/blame/master/class-01-jquery-and-the-dom/blogArticles.js" class="btn btn-sm js-update-url-with-hash">Blame</a>
      <a href="/codefellows/sea-301d1/commits/master/class-01-jquery-and-the-dom/blogArticles.js" class="btn btn-sm " rel="nofollow">History</a>
    </div>

        <a class="octicon-btn tooltipped tooltipped-nw"
           href="https://windows.github.com"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <span class="octicon octicon-device-desktop"></span>
        </a>

        <button type="button" class="octicon-btn disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <span class="octicon octicon-pencil"></span>
        </button>
        <button type="button" class="octicon-btn octicon-btn-danger disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <span class="octicon octicon-trashcan"></span>
        </button>
  </div>

  <div class="file-info">
      172 lines (170 sloc)
      <span class="file-info-divider"></span>
    58.7 KB
  </div>
</div>

  

  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">blog</span>.<span class="pl-smi">rawData</span> <span class="pl-k">=</span> [</td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line">  {</td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line">    title<span class="pl-k">:</span>       <span class="pl-s"><span class="pl-pds">&#39;</span>Bacon Ipsum<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line">    category<span class="pl-k">:</span>    <span class="pl-s"><span class="pl-pds">&#39;</span>food<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line">    author<span class="pl-k">:</span>      <span class="pl-s"><span class="pl-pds">&#39;</span>Kevin Bacon<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line">    authorUrl<span class="pl-k">:</span>   <span class="pl-s"><span class="pl-pds">&#39;</span>http://www.imdb.com/name/nm0000102/<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line">    publishedOn<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>2015-11-05<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line">    body:        &#39;&lt;p&gt;Bacon ipsum dolor amet do ex andouille minim, kielbasa consectetur t-bone. Ullamco alcatra deserunt, occaecat sed drumstick prosciutto. Cupim sed ullamco cow ham hock turkey pariatur. Officia landjaeger minim, tenderloin salami ribeye cupidatat. Consequat reprehenderit shank nostrud proident shoulder mollit flank. Excepteur quis occaecat kevin officia, ribeye sausage chuck et pig.&lt;/p&gt;&lt;p&gt;&lt;img src=&quot;http://baconmockup.com/600/300/&quot; class=&quot;pull-right&quot; &gt; Cupidatat pancetta chuck fugiat shankle dolor drumstick excepteur spare ribs duis. Meatloaf beef ribs et picanha eu in qui dolore tongue enim spare ribs capicola est pork chop swine. Ipsum strip steak nostrud ham hock qui irure. &lt;img src=&quot;http://baconmockup.com/300/400/&quot; class=&quot;pull-right&quot;&gt;Picanha occaecat prosciutto, rump tempor jerky proident voluptate short loin jowl.&lt;/p&gt;&lt;p&gt; Leberkas pariatur commodo ex adipisicing kevin magna meatball turducken id shoulder consectetur officia ham. Ribeye ullamco porchetta, velit fatback beef dolor pastrami swine salami tail. Turducken shoulder aliquip, biltong nostrud enim dolore chuck.&lt;/p&gt;&lt;p&gt; Jerky lorem consectetur tempor consequat pig magna incididunt filet mignon ullamco elit ea ut frankfurter. Andouille salami pig capicola. Short ribs cupim sirloin, in shank non landjaeger tri-tip. Hamburger cillum ground round, ham minim ex short ribs ribeye.&lt;/p&gt;&lt;p&gt; Prosciutto incididunt cow ball tip jowl ex. Nostrud reprehenderit tempor consequat sunt mollit ball tip salami kielbasa excepteur in est eiusmod. Corned beef ham hock cupidatat qui boudin filet mignon tempor, ut pork loin adipisicing doner t-bone short ribs pancetta. Swine veniam short ribs labore bresaola picanha ground round nostrud. Est turkey voluptate beef, fatback frankfurter pig in. Biltong bresaola salami short loin enim ut filet mignon.&lt;/p&gt;&lt;p&gt;Salami elit dolore sunt, in fatback porchetta est shankle ad boudin ea short loin. Velit cow prosciutto venison tri-tip laboris, magna sirloin. In corned beef eu magna dolore porchetta andouille. Chicken sunt occaecat pig.&lt;/p&gt;&#39;</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line">  {</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line">    title<span class="pl-k">:</span>       <span class="pl-s"><span class="pl-pds">&#39;</span>Baseball Ipsum<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line">    category<span class="pl-k">:</span>    <span class="pl-s"><span class="pl-pds">&#39;</span>sports<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line">    author<span class="pl-k">:</span>      <span class="pl-s"><span class="pl-pds">&#39;</span>Felxi Hernandez<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line">    authorUrl<span class="pl-k">:</span>   <span class="pl-s"><span class="pl-pds">&#39;</span>http://www.baseball-reference.com/players/h/hernafe02.shtml<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">    publishedOn<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>2015-11-04<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line">    body:        &#39;&lt;p&gt;Baseball ipsum dolor sit amet base on balls full count leadoff. National pastime stance pine tar dribbler rookie dodgers hardball plate. &lt;img src=&quot;http://lorempixel.com/400/200/&quot; class=&quot;pull-left&quot; &gt;Club sidearm shift red sox ground rule double, left fielder pennant good eye rubber game. Steal petey center field blue wins arm visitors. Out rope base cookie grass bandbox error. Tag pennant designated hitter relief pitcher triple-A alley on deck baseball.&lt;/p&gt;&lt;p&gt;Dribbler left on base arm curve bag, slider around the horn disabled list. Pennant catcher gapper rope screwball home cork foul. Nubber slide rake relief pitcher wrigley choke up cup of coffee cycle bench. Loss strikeout bandbox cardinals second base practice gap center fielder. Screwball fielder\&#39;s choice play baseline rubber game warning track bleeder. Mustard inning in the hole astroturf alley fielder\&#39;s choice left fielder.&lt;/p&gt;&lt;p&gt;Home grand slam suicide squeeze breaking ball batter\&#39;s box flyout starting pitcher. Baseball card basehit double switch save batting average losses tossed umpire batter\&#39;s box. Shift league 4-6-3 no-hitter yankees, bleeder mound defensive indifference shutout. Squeeze mound butcher boy loss rip chin music cracker jack. Scorecard all-star helmet practice defensive indifference pull mound around the horn. Earned run relay curve full count fall classic pinch hitter helmet cheese outfielder.&lt;/p&gt;&lt;p&gt;Foul pitchout moneyball all-star runs left on base fielder\&#39;s choice. Sport pine tar fair dead ball era season rip no-hitter friendly confines. Baseball card no-hitter fenway line drive left field earned run sport bush league. Tossed walk off dodgers error streak, center fielder tossed chin music. Grounder friendly confines mustard center field bandbox pinch runner cookie. Alley left on base bat second baseman passed ball foul error cy young.&lt;/p&gt;&lt;p&gt;No-hitter breaking ball stadium doubleheader rubber fair team rake. Error leather left fielder outs at-bat leadoff cork hit by pitch rally. Relief pitcher bleeder sidearm grounder center fielder gold glove ejection hitter foul line. Error 4-6-3 gold glove knuckleball dead ball era, save pine tar. Robbed reliever cellar alley stretch club starter leather. Red sox dead red pull no-hitter assist can of corn manager error play.&lt;/p&gt;&#39;</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">  {</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">    title<span class="pl-k">:</span>       <span class="pl-s"><span class="pl-pds">&#39;</span>Cat Ipsum<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">    category<span class="pl-k">:</span>    <span class="pl-s"><span class="pl-pds">&#39;</span>pets<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">    author<span class="pl-k">:</span>      <span class="pl-s"><span class="pl-pds">&#39;</span>Meow Meow<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">    authorUrl<span class="pl-k">:</span>   <span class="pl-s"><span class="pl-pds">&#39;</span>https://http.cat/<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">    publishedOn<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>2015-11-03<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">    body:        &#39;&lt;p&gt;Find empty spot in cupboard and sleep all day refuse to leave cardboard box for make meme, make cute face for lick the plastic bag yet stare at wall turn and meow stare at wall some more meow again continue staring.&lt;img src=&quot;http://placekitten.com/203/310&quot; class=&quot;pull-right&quot;&gt; Damn that dog meow, for shake treat bag rub face on owner sleep in the bathroom sink poop in litter box, scratch the walls destroy couch as revenge. &lt;img src=&quot;http://placekitten.com/210/300&quot; class=&quot;pull-left&quot;&gt;Kick up litter. Hide when guests come over sweet beast, and plan steps for world domination but jump off balcony, onto stranger\&#39;s head meowing non stop for food flop over, for scratch leg; meow for can opener to feed me. Missing until dinner time stick butt in face cat is love, cat is life missing until dinner time pee in the shoe spread kitty litter all over house. Meow all night having their mate disturbing sleeping humans plan steps for world domination or why must they do that vommit food and eat it again lick arm hair yet white cat sleeps on a black shirt. Kitty power! pelt around the house and up and down stairs chasing phantoms for hopped up on catnip, and put toy mouse in food bowl run out of litter box at full speed . Loves cheeseburgers put toy mouse in food bowl run out of litter box at full speed the dog smells bad ignore the squirrels, you\&#39;ll never catch them anyway so intrigued by the shower, but inspect anything brought into the house. Cat is love, cat is life find empty spot in cupboard and sleep all day yet destroy couch as revenge plan steps for world domination chase the pig around the house or scamper.&lt;/p&gt;&lt;p&gt;Hate dog fall over dead (not really but gets sypathy) ears back wide eyed refuse to drink water except out of someone\&#39;s glass, yet climb leg, and white cat sleeps on a black shirt yet human give me attention meow. Throwup on your pillow see owner, run in terror intently sniff hand, for leave fur on owners clothes use lap as chair. Meowzer! white cat sleeps on a black shirt but i like big cats and i can not lie so sun bathe make muffins. Why must they do that attack feet lounge in doorway intrigued by the shower peer out window, chatter at birds, lure them to mouth yet peer out window, chatter at birds, lure them to mouth behind the couch. Run in circles kitty power! scratch leg; meow for can opener to feed me so attack feet.&lt;/p&gt;&lt;p&gt;Loves cheeseburgers stare at ceiling, for give attitude, hunt by meowing loudly at 5am next to human slave food dispenser. Scratch the furniture refuse to drink water except out of someone\&#39;s glass and plan steps for world domination yet love to play with owner\&#39;s hair tie. Stare out the window stare at ceiling chase imaginary bugs, or hunt anything that moves, for i am the best or jump around on couch, meow constantly until given food, , swat at dog. Spit up on light gray carpet instead of adjacent linoleum. Cough furball sit in box pooping rainbow while flying in a toasted bread costume in space and destroy couch as revenge. Hunt by meowing loudly at 5am next to human slave food dispenser nap all. &lt;img src=&quot;http://placekitten.com/250/300&quot; class=&quot;pull-right&quot;&gt;&lt;/p&gt;&#39;</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">  {</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">    title<span class="pl-k">:</span>       <span class="pl-s"><span class="pl-pds">&#39;</span>Cheese Impsum<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">    category<span class="pl-k">:</span>    <span class="pl-s"><span class="pl-pds">&#39;</span>food<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line">    author<span class="pl-k">:</span>      <span class="pl-s"><span class="pl-pds">&#39;</span>El Rey de Queso<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">    authorUrl<span class="pl-k">:</span>   <span class="pl-s"><span class="pl-pds">&#39;</span>https://www.youtube.com/watch?v=oHg5SJYRHA0<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line">    publishedOn<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>2015-11-02<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">    body:        &#39;&lt;p&gt;I love cheese, especially edam squirty cheese. Cheesecake cheese triangles boursin cheese slices airedale the big cheese st. agur blue cheese st. agur blue cheese. Fromage frais fromage frais lancashire parmesan cow chalk and cheese cow cheese on toast. Cow cheesy grin.&lt;/p&gt;&lt;p&gt;Melted cheese bavarian bergkase fromage frais. Blue castello cheese triangles cheese and biscuits stinking bishop paneer camembert de normandie goat cream cheese. &lt;img src=&quot;http://lorempixel.com/400/200/&quot; class=&quot;pull-left&quot;&gt;Smelly cheese cheese slices stinking bishop pecorino taleggio red leicester hard cheese queso. Cow fromage chalk and cheese.&lt;/p&gt;&lt;p&gt;Gouda goat mozzarella. Lancashire macaroni cheese cheesecake cheese and biscuits pepper jack cow cheddar cheesy feet. Stilton cheesy grin ricotta everyone loves the big cheese squirty cheese pepper jack edam. Cheese on toast cheese and wine.&lt;/p&gt;&lt;p&gt;Queso camembert de normandie paneer. Parmesan bavarian bergkase feta cauliflower cheese lancashire airedale melted cheese halloumi. Who moved my cheese airedale cheese on toast cheesy feet who moved my cheese dolcelatte monterey jack fromage frais. Emmental cow.&lt;/p&gt;&lt;p&gt;Blue castello roquefort swiss. Cheese slices cottage cheese brie cream cheese pepper jack red leicester say cheese fromage frais. Cheesy grin cow smelly cheese camembert de normandie mozzarella cream cheese goat rubber cheese. Emmental port-salut croque monsieur boursin gouda.&lt;/p&gt;&#39;</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">  {</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">    title<span class="pl-k">:</span>       <span class="pl-s"><span class="pl-pds">&#39;</span>Startup Ipsum<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">    category<span class="pl-k">:</span>    <span class="pl-s"><span class="pl-pds">&#39;</span>business<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">    author<span class="pl-k">:</span>      <span class="pl-s"><span class="pl-pds">&#39;</span>Andy Sack<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">    authorUrl<span class="pl-k">:</span>   <span class="pl-s"><span class="pl-pds">&#39;</span>http://asackofseattle.com/<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">    publishedOn<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>2015-11-01<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">    body:        &#39;&lt;p&gt;Branding business-to-consumer churn rate success lean startup value proposition partnership founders user experience beta. Burn rate scrum project infographic bandwidth startup social media market. &lt;img src=&quot;http://www.fillmurray.com/410/650&quot; class=&quot;pull-right&quot;&gt;Stealth accelerator venture social media product management. Focus paradigm shift MVP twitter pivot analytics. Learning curve return on investment validation series A financing channels equity success. Return on investment facebook pivot hypotheses rockstar. Customer backing success handshake network effects bandwidth monetization market facebook venture seed money equity iPhone accelerator. Churn rate burn rate customer termsheet user experience startup stock series A financing partnership success leverage value proposition founders pivot. Investor paradigm shift gen-z value proposition bandwidth network effects. Early adopters business-to-business social media ecosystem seed round paradigm shift MVP.&lt;/p&gt;&lt;p&gt;Branding client www.discoverartisans.com learning curve validation advisor incubator partner network user experience ecosystem launch party influencer bootstrapping hackathon. Pivot equity long tail user experience infographic backing business-to-business. Marketing MVP responsive web design android technology buzz metrics market disruptive series A financing infographic gamification client return on investment. Influencer channels marketing graphical user interface supply chain accelerator ramen value proposition leverage www.discoverartisans.com pitch success. Www.discoverartisans.com lean startup learning curve incubator crowdsource technology. Traction marketing channels scrum project first mover advantage entrepreneur. Responsive web design investor channels branding validation social media niche market crowdfunding www.discoverartisans.com first mover advantage learning curve. Alpha investor android direct mailing MVP burn rate value proposition accelerator deployment. Beta focus business-to-business bandwidth market value proposition influencer backing release first mover advantage. Crowdsource venture handshake beta buzz low hanging fruit stock investor stealth research &amp; development growth hacking.&lt;/p&gt;&lt;p&gt;Ecosystem ramen scrum project. Partner network network effects founders first mover advantage deployment social media release lean startup hackathon focus. Marketing mass market validation strategy buzz backing termsheet market www.discoverartisans.com. Crowdfunding freemium marketing advisor user experience. Ramen analytics virality venture alpha incubator backing pivot advisor bandwidth freemium accelerator www.discoverartisans.com user experience. Startup responsive web design scrum project. Graphical user interface release strategy hackathon crowdsource early adopters freemium social media direct mailing. Buyer deployment beta interaction design partner network entrepreneur facebook bandwidth analytics sales business-to-consumer innovator mass market infographic. Learning curve scrum project advisor iPad android agile development facebook www.discoverartisans.com social proof technology prototype freemium hackathon niche market. Influencer MVP supply chain bandwidth graphical user interface first mover advantage leverage sales validation return on investment churn rate.&lt;/p&gt;&lt;p&gt;Focus equity seed money graphical user interface alpha iteration crowdsource. Partner network business model canvas rockstar technology responsive web design stealth strategy learning curve gamification monetization virality network effects handshake. Ownership hypotheses strategy network effects hackathon buzz disruptive launch party agile development ecosystem iPad equity scrum project. Hackathon infrastructure entrepreneur infographic bootstrapping market validation stock traction startup research &amp; development pivot assets. Customer deployment startup. Market business plan hypotheses launch party www.discoverartisans.com advisor assets equity twitter bandwidth bootstrapping. Customer supply chain A/B testing conversion accelerator advisor creative angel investor alpha seed round handshake. Seed round interaction design backing burn rate influencer crowdsource focus ownership analytics iPhone ramen social media. Gamification hypotheses launch party partner network supply chain lean startup product management pivot backing direct mailing graphical user interface client sales. Business-to-business crowdsource sales non-disclosure agreement.&lt;/p&gt;&lt;p&gt;Prototype entrepreneur leverage freemium. Termsheet handshake sales assets release buyer. Ramen backing business model canvas return on investment accelerator pivot twitter mass market seed round. Android stealth iPhone buyer return on investment www.discoverartisans.com. First mover advantage responsive web design termsheet long tail vesting period twitter. Marketing scrum project user experience virality. Channels success crowdsource leverage facebook gen-z client www.discoverartisans.com handshake founders vesting period iPad learning curve. Beta interaction design seed round pitch sales ramen series A financing partnership ownership long tail. Monetization validation business model canvas buzz direct mailing bootstrapping marketing hypotheses lean startup startup prototype business-to-business. Early adopters lean startup technology series A financing rockstar handshake direct mailing iPad investor.&lt;/p&gt;&#39;</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">  {</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">    title<span class="pl-k">:</span>       <span class="pl-s"><span class="pl-pds">&#39;</span>Sagan Ipsum<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line">    category<span class="pl-k">:</span>    <span class="pl-s"><span class="pl-pds">&#39;</span>space<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">    author<span class="pl-k">:</span>      <span class="pl-s"><span class="pl-pds">&#39;</span>Carl Sagan<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">    authorUrl<span class="pl-k">:</span>   <span class="pl-s"><span class="pl-pds">&#39;</span>http://www.carlsagan.com/<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line">    publishedOn<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>2015-10-31<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line">    body:        &#39;&lt;p&gt;The only home we\&#39;ve ever known. Birth stirred by starlight. Vanquish the impossible citizens of distant epochs preserve and cherish that pale blue dot, the carbon in our apple pies, tesseract, another world, gathered by gravity colonies Hypatia. &lt;img src=&quot;http://www.fillmurray.com/410/600&quot; class=&quot;pull-left&quot;&gt;Vangelis prime number, extraplanetary decipherment vanquish the impossible a very small stage in a vast cosmic arena, tingling of the spine Rig Veda hundreds of thousands! &lt;img src=&quot;http://lorempixel.com/400/200/&quot; class=&quot;pull-right&quot;&gt;Sea of Tranquility venture radio telescope.&lt;/p&gt;&lt;p&gt;Billions upon billions! Orion\&#39;s sword, worldlets stirred by starlight. Preserve and cherish that pale blue dot Flatland! Stirred by starlight. Network of wormholes, the sky calls to us Jean-François Champollion, something incredible is waiting to be known. Shores of the cosmic ocean! Apollonius of Perga, Flatland a very small stage in a vast cosmic arena the carbon in our apple pies, tingling of the spine tesseract Apollonius of Perga brain is the seed of intelligence Tunguska event the sky calls to us dispassionate extraterrestrial observer the only home we\&#39;ve ever known.&lt;/p&gt;&lt;p&gt;Euclid emerged into consciousness, cosmic ocean two ghostly white figures in coveralls and helmets are soflty dancing hydrogen atoms bits of moving fluff intelligent beings concept of the number one, rogue rich in heavy atoms, are creatures of the cosmos preserve and cherish that pale blue dot the sky calls to us paroxysm of global death, radio telescope. Quasar, white dwarf, astonishment, trillion network of wormholes worldlets another world Euclid emerged into consciousness, billions upon billions Rig Veda ship of the imagination! Cosmic fugue the only home we\&#39;ve ever known.&lt;/p&gt;&lt;p&gt;Rings of Uranus tendrils of gossamer clouds. Vanquish the impossible rich in mystery, made in the interiors of collapsing stars hydrogen atoms Hypatia, galaxies made in the interiors of collapsing stars vastness is bearable only through love. Rig Veda Flatland, cosmos how far away? Stirred by starlight venture Vangelis, rogue worldlets bits of moving fluff a still more glorious dawn awaits tingling of the spine! Billions upon billions? Jean-François Champollion globular star cluster a still more glorious dawn awaits dream of the mind\&#39;s eye Flatland decipherment circumnavigated laws of physics, Vangelis trillion?&lt;/p&gt;&lt;p&gt;Consciousness realm of the galaxies? Culture the sky calls to us! Realm of the galaxies two ghostly white figures in coveralls and helmets are soflty dancing, worldlets with pretty stories for which there\&#39;s little good evidence, tesseract corpus callosum vanquish the impossible galaxies. Citizens of distant epochs corpus callosum hearts of the stars? Kindling the energy hidden in matter how far away dream of the mind\&#39;s eye hundreds of thousands extraplanetary how far away take root and flourish as a patch of light a billion trillion Tunguska event, a mote of dust suspended in a sunbeam not a sunrise but a galaxyrise. Vangelis rich in mystery, star stuff harvesting star light culture science rich in mystery network of wormholes billions upon billions and billions upon billions upon billions upon billions upon billions upon billions upon billions.&lt;/p&gt;&#39;</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line">  {</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">    title<span class="pl-k">:</span>       <span class="pl-s"><span class="pl-pds">&#39;</span>Pirate Ipsum<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">    category<span class="pl-k">:</span>    <span class="pl-s"><span class="pl-pds">&#39;</span>travel<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">    author<span class="pl-k">:</span>      <span class="pl-s"><span class="pl-pds">&#39;</span>The Dread Pirate Roberts<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">    authorUrl<span class="pl-k">:</span>   <span class="pl-s"><span class="pl-pds">&#39;</span>https://en.wikipedia.org/wiki/Ross_Ulbricht<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">    publishedOn<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>2015-10-30<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">    body<span class="pl-k">:</span>        <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;p&gt;Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. &lt;img src=&quot;http://lorempixel.com/800/1200/transport/&quot; class=&quot;pull-left&quot;&gt;Pinnace holystone mizzenmast quarter crow<span class="pl-cce">\&#39;</span>s nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.&lt;/p&gt;&lt;p&gt;Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. &lt;img src=&quot;http://lorempixel.com/400/300/&quot; class=&quot;pull-right&quot;&gt;Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.&lt;/p&gt;&lt;p&gt;Trysail Sail ho Corsair red ensign hulk smartly boom jib rum gangway. Case shot Shiver me timbers gangplank crack Jennys tea cup ballast Blimey lee snow crow<span class="pl-cce">\&#39;</span>s nest rutters. Fluke jib scourge of the seven seas boatswain schooner gaff booty Jack Tar transom spirits.&lt;/p&gt;<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">  {</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line">    title<span class="pl-k">:</span>       <span class="pl-s"><span class="pl-pds">&#39;</span>Cupcake Ipsum<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">    category<span class="pl-k">:</span>    <span class="pl-s"><span class="pl-pds">&#39;</span>food<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">    author<span class="pl-k">:</span>      <span class="pl-s"><span class="pl-pds">&#39;</span>Betty Crocker<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">    authorUrl<span class="pl-k">:</span>   <span class="pl-s"><span class="pl-pds">&#39;</span>http://www.bettycrocker.com/<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">    publishedOn<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>2015-10-29<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">    body<span class="pl-k">:</span>        <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;p&gt;I love danish sweet. Bonbon marshmallow marshmallow cotton candy jelly beans. &lt;img src=&quot;http://lorempixel.com/400/200/food/&quot; class=&quot;pull-left&quot;&gt;I love apple pie I love tootsie roll powder brownie.&lt;/p&gt;&lt;p&gt;Croissant I love wafer. Biscuit ice cream marshmallow cake brownie topping I love. I love oat cake biscuit lemon drops I love tiramisu icing.&lt;/p&gt;&lt;p&gt;Croissant biscuit caramels chupa chups. Cookie fruitcake brownie I love. Sweet roll sesame snaps apple pie.&lt;img src=&quot;http://placekitten.com/1250/1310&quot; class=&quot;pull-right&quot;&gt;&lt;/p&gt;&lt;p&gt;Lemon drops cupcake danish pudding chocolate cake sugar plum sugar plum ice cream. Cupcake carrot cake muffin. Topping gingerbread I love.&lt;/p&gt;&lt;p&gt;Jelly-o muffin oat cake apple pie icing cookie. Soufflé tart pie chupa chups cake. Candy sugar plum I love fruitcake tart halvah. Jelly oat cake pastry.&lt;/p&gt;<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">  {</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">    title<span class="pl-k">:</span>       <span class="pl-s"><span class="pl-pds">&#39;</span>Hipsters Ipsum<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">    category<span class="pl-k">:</span>    <span class="pl-s"><span class="pl-pds">&#39;</span>lifestyle<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">    author<span class="pl-k">:</span>      <span class="pl-s"><span class="pl-pds">&#39;</span>Macklemore<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line">    authorUrl<span class="pl-k">:</span>   <span class="pl-s"><span class="pl-pds">&#39;</span>https://www.youtube.com/watch?v=QK8mJJJvaes<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line">    publishedOn<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>2015-10-28<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line">    body:        &#39;&lt;p&gt;Freegan put a bird on it narwhal, umami marfa viral you probably haven\&#39;t heard of them four loko kinfolk YOLO celiac echo park. &lt;img src=&quot;http://lorempixel.com/400/300/nightlife/&quot; class=&quot;pull-left&quot;&gt;Viral synth fanny pack taxidermy, portland crucifix pug intelligentsia helvetica slow-carb. Venmo synth migas paleo salvia fingerstache retro, microdosing green juice pug taxidermy. Helvetica disrupt cliche you probably haven\&#39;t heard of them mustache brooklyn. Artisan gentrify austin, hoodie portland retro yr fashion axe heirloom lumbersexual tacos messenger bag. Austin hella four loko everyday carry portland synth. Flexitarian schlitz migas yr pitchfork iPhone.&lt;/p&gt;&lt;p&gt;Deep v mlkshk helvetica austin PBR&amp;B lomo raw denim blue bottle VHS cliche street art. Thundercats biodiesel craft beer cronut disrupt, tattooed ennui scenester chia deep v. Tofu +1 roof party, craft beer chicharrones ramps ugh iPhone mixtape. Vice 3 wolf moon farm-to-table chia before they sold out hammock chillwave. Deep v stumptown actually helvetica normcore chambray. Banjo scenester mumblecore gastropub church-key. Austin craft beer beard locavore wolf.&lt;/p&gt;&lt;p&gt;Hashtag try-hard chartreuse selvage, readymade mustache tote bag stumptown. Letterpress 3 wolf moon waistcoat small batch. Single-origin coffee williamsburg church-key, truffaut tacos yuccie stumptown synth waistcoat literally you probably haven\&#39;t heard of them ennui. Narwhal everyday carry cardigan, vegan microdosing pitchfork flannel lomo deep v kombucha shabby chic poutine. Williamsburg VHS squid, mlkshk you probably haven\&#39;t heard of them franzen small batch photo booth taxidermy meggings. Small batch sustainable tousled, hashtag flannel cornhole locavore polaroid lo-fi salvia helvetica franzen austin. Fixie disrupt polaroid, raw denim readymade green juice deep v scenester dreamcatcher tumblr.&lt;/p&gt;&lt;p&gt;Intelligentsia cray blue bottle, cardigan pinterest biodiesel ethical polaroid 8-bit master cleanse. Fap direct trade locavore, ethical shoreditch everyday carry kombucha poutine kickstarter austin. Plaid photo booth knausgaard helvetica, skateboard beard intelligentsia kitsch mixtape. Next level kinfolk farm-to-table semiotics, umami meh quinoa. Listicle viral selfies, street art kombucha squid fanny pack. Artisan XOXO heirloom, everyday carry bicycle rights lumbersexual beard roof party tattooed paleo kitsch fingerstache gluten-free. Cronut YOLO blue bottle meh, banjo skateboard vinyl austin aesthetic put a bird on it chicharrones you probably haven\&#39;t heard of them etsy venmo direct trade.&lt;/p&gt;&#39;</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line">  {</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line">    title<span class="pl-k">:</span>       <span class="pl-s"><span class="pl-pds">&#39;</span>Australia Ipsum<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line">    category<span class="pl-k">:</span>    <span class="pl-s"><span class="pl-pds">&#39;</span>travel<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">    author<span class="pl-k">:</span>      <span class="pl-s"><span class="pl-pds">&#39;</span>Rocko<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line">    authorUrl<span class="pl-k">:</span>   <span class="pl-s"><span class="pl-pds">&#39;</span>https://en.wikipedia.org/wiki/Rocko%27s_Modern_Life<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">    publishedOn<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>2015-10-27<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line">    body<span class="pl-k">:</span>        <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;p&gt;Chaddie the croft institute, rooftop bars temper trap formula one grand prix frankston bogans south melb dim sims, &lt;img src=&quot;http://lorempixel.com/300/300/nightlife/&quot; class=&quot;pull-right&quot;&gt;vic market aami park bill clinton ate two bowls.&lt;/p&gt;&lt;p&gt;Swanston the hawks, running the tan ac/dc dumplings collingwood ferals yarra, old melbourne gaol trams essendon bombers.&lt;/p&gt;&lt;p&gt;Four seasons in one day hipsters, etihad stadium chopper read spring racing carnival victory vs heart south of the river, brunswick and brunswick st NGV culture fix swanston.&lt;/p&gt;&lt;p&gt;The bulldogs temper trap, running the tan swanston north melbourne shinboners food bloggers the saints, grammar vs scotch spring racing carnival richmond tigers.&lt;/p&gt;&lt;p&gt;Formula one grand prix temper trap, the emerald peacock essendon bombers myki queues swanston yarra, hipsters north melbourne shinboners melbourne cricket ground.&lt;/p&gt;<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line">  {</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line">    title<span class="pl-k">:</span>       <span class="pl-s"><span class="pl-pds">&#39;</span>Ice Skate Ipsum<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line">    category<span class="pl-k">:</span>    <span class="pl-s"><span class="pl-pds">&#39;</span>sports<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">    author<span class="pl-k">:</span>      <span class="pl-s"><span class="pl-pds">&#39;</span>Ashley Wagner<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line">    authorUrl<span class="pl-k">:</span>   <span class="pl-s"><span class="pl-pds">&#39;</span>http://www.figureskatersonline.com/ashleywagner/<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">    publishedOn<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>2015-10-26<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line">    body:        &#39;&lt;p&gt;Skate ipsum dolor sit amet, 270 slap maxwell pool lipslide flail. Feeble smith grind vert blunt airwalk. Casper slide Alien Workshop birdie hanger concave cess slide. Pantsman nosepicker downhill opposite footed locals impossible. Ho-ho powerslide nose Saran Wrap casper slide. Pogo powerslide vert death box Vatoland hard flip. Stoked tailslide 540 drop in launch ramp. &lt;img src=&quot;http://lorempixel.com/350/250/sports/&quot; class=&quot;pull-left&quot;&gt;Slide layback slappy hanger coper. Skate or die hip boardslide nose blunt mongo. Lipslide gap impossible Santa Cruz tic-tac 720. Rip grip pogo kingpin nose-bump tuna-flip Rodney Mullen. Method air cess slide noseblunt slide salad grind stoked.&lt;/p&gt;&lt;p&gt;Full pipe Tracker no comply flail mINUTEMEN. Sketchy nose kick-nose powerslide Tower Skate Park. 180 kickturn stalefish no comply. Coping Kevin Harris handplant method air. Blunt slap maxwell Powell Peralta tailslide boardslide. Rick Howard boned out aerial 900 disaster. Rail slide regular footed Rick McCrank crail grab finger flip. Nose bump fast plant hospital flip switch. Rodney Mullen ollie fakie out grind manual. Lipslide nosepicker opposite footed 360. Crail slide opposite footed pogo acid drop. Fastplant Rob Roskopp stoked chicken wing nose. Kingpin axle hand rail skater.&lt;/p&gt;&lt;p&gt;Speed wobbles full pipe Saran Wrap hanger. Concave tail blunt axle set. Powell Peralta transition tic-tac tailslide bigspin. Kidney Sims stalefish hang up grab. Alan Gelfand lipslide soul skate skate or die poseur. Darkslide rail slide bigspin invert. Pivot yeah kickturn g-turn. Nollie baseplate ollie north 270. Fakie bigspin nose grab body varial. Berm darkslide switch slap maxwell. Varial bone air kickturn yeah. Layback nosepicker nosegrind Rick McCrank regular footed.&lt;/p&gt;&lt;p&gt;Japan air death box pool nosepicker. Nollie half-cab stalefish bigspin. Ollie north carve backside Transworld lipslide. Camel back rail opposite footed helipop. Air skater g-turn stalefish. Kick-nose casper mini ramp melancholy. Coper hand rail tuna-flip finger flip. Hip shinner pump feeble. Grab handplant regular footed Randy Ruiz hanger.&lt;/p&gt;&lt;p&gt;Hard flip 50-50 Kevin Harris noseblunt slide. Bank gnarly rad varial. Fastplant Christ air finger flip nosebone Jason Dill. Switch quarter pipe Rune Glifberg gnarly grab. Shoveit boneless chicken wing mINUTEMEN 50-50. Melancholy masonite mINUTEMEN gnarly concave. Ron Chapman poseur acid drop alley oop flypaper. Judo air 360 gnar bucket darkslide. Paul Rodriguez baseplate locals rock and roll bigspin. Coffin boneless blunt indy grab. Hurricane tail masonite Jason Wilson freestyle. Bluntslide drop in Tommy Guerrero tailslide 540. Manual steps fakie out Neal Hendrix lipslide.&lt;/p&gt;&#39;</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line">  {</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line">    title<span class="pl-k">:</span>       <span class="pl-s"><span class="pl-pds">&#39;</span>Alien Ipsum<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line">    category<span class="pl-k">:</span>    <span class="pl-s"><span class="pl-pds">&#39;</span>space<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line">    author<span class="pl-k">:</span>      <span class="pl-s"><span class="pl-pds">&#39;</span>Milton Williams Cooper<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line">    authorUrl<span class="pl-k">:</span>   <span class="pl-s"><span class="pl-pds">&#39;</span>https://en.wikipedia.org/wiki/Milton_William_Cooper<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line">    publishedOn<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>2015-10-26<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line">    body:        &#39;&lt;p&gt;Ancient alien von Daniken UFO Indian texts elongated skull anti-gravity Puma Punku contend, megoliths vortex Giorgio pre-colonial aerodynamics Chariot of the Gods extraterrestrial. &lt;/p&gt;&lt;p&gt;Ancient alien Indian texts King Soloman megoliths flying vessels legendary times, worm hole DNA manipulation Nazca lines kachina doll Puma Punku astronaut, Vymaanika-Shaastra electromagnetic Puma Punku space time otherworldly visitors. &lt;/p&gt;&lt;p&gt;Star people legendary times Ezekiel kachina doll Giorgio, I know it sounds crazy... &lt;img src=&quot;http://lorempixel.com/300/250/sports/&quot; class=&quot;pull-right&quot;&gt;Worm hole Indian texts, otherworldly visitors sky people. &lt;/p&gt;&lt;p&gt;The answer is a resounding YES... Clearly crystal skull, the answer is a resounding &lt;img src=&quot;http://lorempixel.com/300/300/nightlife/&quot; class=&quot;pull-left&quot;&gt;YES... Astronaut DNA manipulation space time sightings, the answer is a resounding YES... Crystal skull worm hole. Extraterrestrial origin Annunaki foo fighter sanskrit Mayan mainstream archaelogy, &lt;img src=&quot;http://lorempixel.com/400/200/sports/&quot; class=&quot;pull-right&quot;&gt;crystal skull SETI otherworldly visitors Sumerian texts ancient alien. &lt;/p&gt;&lt;p&gt;Spaceships clearly sky people worm hole contend, SETI mystery Mahabharata Vymaanika-Shaastra ancient religions, star gates electromagnetic grey megoliths. Nazca lines space brothers Vymaanika-Shaastra I know it sounds crazy... Portal ancient god, cover up petroglyph the vedas magnetic current ancient religions. Ancient god gods alien Giorgio weightless clearly space travel worm hole, electromagnetic Puma Punku ancient alien theorists, I know it sounds crazy... Anti-gravity crystal skull kachina doll electromagnetic. Space time evidence worm hole Mayan SETI targeted mutation, Machu Picchu NASA aircraft ancient religions the vedas, Nazca lines NASA Sumerian texts portal. Von Daniken Nazca lines ancient alien theorists aircraft Giorgio alien electromagnetic Mahabharata, the answer is a resounding YES... Indian texts. The answer is a resounding YES... Portal sky people Vymaanika-Shaastra legendary times Ezekiel megoliths DNA manipulation weightless earth mound, star people extraterrestrial origin technology NASA evidence otherworldly visitors Easter island Indian texts. Cover up inter-dimensional the vedas earth mound Nazca lines grey, Giorgio Indian texts space brothers worm hole SETI, Indian texts von Daniken evidence the vedas Puma Punku. Star gates sanskrit space time star people Puma Punku aircraft, King Soloman ancient god sanskrit space time kachina doll pre-colonial aerodynamics, I know it sounds crazy... NASA pre-colonial aerodynamics. The answer is a resounding YES... Flying vessels, space travel worm hole, helicopter heiroglyph Chariot of the Gods. Flying vessels Easter island space time otherworldly visitors, extraterrestrial origin ancient god ancient alien theorists, Machu Picchu NASA. The answer is a resounding YES... Grey ancient civilization Indian texts legendary times ancient religions, space travel Annunaki pyramids contend Nazca lines star gates Mahabharata. Golden disk extraterrestrial origin ancient god, the answer is a resounding YES... SETI clearly star gates mainstream archaelogy petroglyph pyramids clearly, DNA manipulation grey legendary times extraterrestrial magnetic current Sumerian texts. Ancient god Nazca lines space brothers mercury, I know it sounds crazy... Pyramids targeted mutation kachina doll Annunaki, sanskrit space time kachina doll. The answer is a resounding YES... Ezekiel star gates stonehenge pyramids Nazca lines pyramids NASA Annunaki, spaceships magnetic current choral castle Indian texts Nazca lines. Targeted mutation King Soloman Puma Punku Nazca lines vortex, the answer is a resounding YES... Sun disc SETI stonehenge, I know it sounds crazy... Mayan. Ancient civilization Indian texts megoliths grey otherworldly visitors, ancient religions targeted mutation Mayan.&lt;/p&gt;&#39;</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line">  {</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line">    title<span class="pl-k">:</span>       <span class="pl-s"><span class="pl-pds">&#39;</span>Obama Ipsum<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line">    category<span class="pl-k">:</span>    <span class="pl-s"><span class="pl-pds">&#39;</span>politics<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line">    author<span class="pl-k">:</span>      <span class="pl-s"><span class="pl-pds">&#39;</span>Barack Obama<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line">    authorUrl<span class="pl-k">:</span>   <span class="pl-s"><span class="pl-pds">&#39;</span>https://www.barackobama.com/<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line">    publishedOn<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>2015-10-25<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line">    body:        &#39;&lt;p&gt;King delivered his prayer for our country. Change happens because the American people demand it - because they rise up and insist on new ideas and new leadership, a new politics for a new time. I have come here to seek a new beginning between the United States and Muslims around the world; &lt;img src=&quot;http://lorempixel.com/300/250/people/&quot; class=&quot;pull-left&quot;&gt;one based upon mutual interest and mutual respect; and one based upon the truth that America and Islam are not exclusive, and need not be in competition. They endure the daily humiliations - large and small - that come with occupation. The issues that I have described will not be easy to address.&lt;/p&gt;&lt;p&gt;They know those things. &lt;img src=&quot;http://lorempixel.com/300/250/business/&quot; class=&quot;pull-right&quot;&gt;Now even as we speak, there are those who are preparing to divide us, the spin masters, the negative ad peddlers who embrace the politics of anything goes. Those stories - of survival, and freedom, and hope - became our story, my story; the blood that had spilled was our blood, the tears our tears; until this black church, on this bright day, seemed once more a vessel carrying the story of a people into future generations and into a larger world. But what I will not do is suggest that the Senator takes his positions for political purposes. When one nation pursues a nuclear weapon, the risk of nuclear attack rises for all nations.&lt;/p&gt;&lt;p&gt;But we also know our conscience cannot rest so long as the war goes on in Iraq.&lt;img src=&quot;http://lorempixel.com/300/350/business/&quot; class=&quot;pull-left&quot;&gt; It is not enough to give health care to the sick, or jobs to the jobless, or education to our children. So long as our relationship is defined by our differences, we will empower those who sow hatred rather than peace, and who promote conflict rather than the cooperation that can help all of our people achieve justice and prosperity.&lt;/p&gt;&lt;p&gt;On November 4th, we must stand up and say: &quot;Eight is enough.&quot; If your hopes have been dashed again and again, then it\&#39;s best to stop hoping, and settle for what you already know. It was innovation in Muslim communities that developed the order of algebra; our magnetic compass and tools of navigation; our mastery of pens and printing; our understanding of how disease spreads and how it can be healed.&lt;/p&gt;&lt;p&gt;And just as Lieutenant Kerry did not hesitate to risk his life to protect the men who served with him in Vietnam, President Kerry will not hesitate one moment to use our military might to keep America safe and secure. But race is an issue that I believe this nation cannot afford to ignore right now. So let me spell out exactly what that change would mean if I am President. It was innovation in Muslim communities that developed the order of algebra; our magnetic compass and tools of navigation; our mastery of pens and printing; our understanding of how disease spreads and how it can be healed. But I do have an unyielding belief that all people yearn for certain things: the ability to speak your mind and have a say in how you are governed; confidence in the rule of law and the equal administration of justice; government that is transparent and doesn\&#39;t steal from the people; the freedom to live as you choose. Now let me be clear: issues of women\&#39;s equality are by no means simply an issue for Islam.&lt;/p&gt;&lt;p&gt;Thank you, God Bless you, and God Bless the United States of America.&lt;/p&gt;&#39;</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line">  {</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line">    title<span class="pl-k">:</span>       <span class="pl-s"><span class="pl-pds">&#39;</span>Cajun Ipsum<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line">    category<span class="pl-k">:</span>    <span class="pl-s"><span class="pl-pds">&#39;</span>food<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line">    author<span class="pl-k">:</span>      <span class="pl-s"><span class="pl-pds">&#39;</span>Zatarans<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line">    authorUrl<span class="pl-k">:</span>   <span class="pl-s"><span class="pl-pds">&#39;</span>https://en.wikipedia.org/wiki/Cajun_cuisine<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line">    publishedOn<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>2015-10-24<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line">    body:        &#39;&lt;p&gt;Boucherie zydeco boudin cajun Fauxcheaux. Zydeco zydeco sa fait chaud okra gumbo food.&lt;img src=&quot;http://lorempixel.com/300/450/food/&quot; class=&quot;pull-right&quot;&gt; Tasso mirliton beer sugar cane praline food. &lt;/p&gt;&lt;p&gt;Bread pudding Boudreaux Boudreaux praline boiled crawfish football fais do do. Mardi Gras fried chicken catahoula viens ci Fauxcheaux file etoufee hot sauce King Cake gumbo.&lt;img src=&quot;http://lorempixel.com/300/350/food/&quot; class=&quot;pull-left&quot;&gt; Bisque macque choux interstate cajun fried chicken merci beaucoup barbed wire gulf shrimp andouille iced tea. Catahoula tasso macque choux food canaille hot sauce praline envie. &lt;img src=&quot;http://lorempixel.com/700/450/food/&quot; class=&quot;pull-right&quot;&gt;Etoufee crawfish beer boucherie boudin fried chicken King Cake farmer\&#39;s market sac a lait. File gumbo Mardi Gras macque choux tasso. &lt;/p&gt;&lt;p&gt;Boucherie praline andouille merci beaucoup bisque. Bayou downtown file smoked sausage ca c\&#39;est bon praline Boudreaux downtown. Football lagniappe red beans &amp; rice smoked sausage po-boy interstate remoulade Boudreaux. Downtown boucherie bayou catahoula pirogue. Alligator farmer\&#39;s market andouille bonjour fried catfish hunting lagniappe. Bayou fishing etoufee couillon trail ride merci beaucoup crawfish. &lt;/p&gt;&lt;p&gt;Iced tea bourre tasso alligator pecan pie. Andouille viens ci envie boiled crawfish Mardi Gras. Remoulade yams cher gumbo tasso tasso iced tea boucherie. Envie catahoula ca c\&#39;est bon catahoula red beans &amp; rice bourre bread pudding beer cher pirogue. Alligator football file file hot sauce. Fishing fais do do hunting praline bisque. &lt;/p&gt;&lt;p&gt;Thibideaux red beans &amp; rice smoked sausage sauce piquante interstate Boudreaux fried catfish yams alligator merci beaucoup. Tasso fais do do po-boy Mardi Gras po-boy couillon. Bayou alligator boudin andouille mirliton bread pudding. Etoufee cher sauce piquante barbed wire fried chicken zydeco football turducken praline Acadiana. Yams pirogue file Lafayette food.&lt;/p&gt;&#39;</td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line">  {</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line">    title<span class="pl-k">:</span>       <span class="pl-s"><span class="pl-pds">&#39;</span>Batman Ipsum<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line">    category<span class="pl-k">:</span>    <span class="pl-s"><span class="pl-pds">&#39;</span>lifestyle<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line">    author<span class="pl-k">:</span>      <span class="pl-s"><span class="pl-pds">&#39;</span>Batman -duh<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line">    authorUrl<span class="pl-k">:</span>   <span class="pl-s"><span class="pl-pds">&#39;</span>http://www.dccomics.com/characters/batman<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line">    publishedOn<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>2015-10-23<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line">    body<span class="pl-k">:</span>        <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;p&gt;My anger outweights my guilt.&lt;/p&gt;&lt;p&gt;You care about justice? Look beyond your own pain, Bruce.&lt;img src=&quot;http://lorempixel.com/300/350/people/&quot; class=&quot;pull-left&quot;&gt; This city is rotting.&lt;/p&gt;&lt;p&gt;I<span class="pl-cce">\&#39;</span>ve sewn you up, I<span class="pl-cce">\&#39;</span>ve set your bones, but I won<span class="pl-cce">\&#39;</span>t bury you. I<span class="pl-cce">\&#39;</span>ve buried enough members in the Wayne family.&lt;/p&gt;&lt;p&gt;But it<span class="pl-cce">\&#39;</span>s not who you are underneath... it<span class="pl-cce">\&#39;</span>s what you do that defines you.&lt;/p&gt;&lt;p&gt;Didn<span class="pl-cce">\&#39;</span>t you get the memo?&lt;/p&gt;&lt;p&gt;There is a prison in a more ancient part of the world. A pit where men are thrown to suffer and die. But sometimes a man rises from the darkness. Sometimes, the pit sends something back.&lt;/p&gt;<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line">  {</td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line">    title<span class="pl-k">:</span>       <span class="pl-s"><span class="pl-pds">&#39;</span>Ryan Gosling Ipsum<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line">    category<span class="pl-k">:</span>    <span class="pl-s"><span class="pl-pds">&#39;</span>lifestyle<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line">    author<span class="pl-k">:</span>      <span class="pl-s"><span class="pl-pds">&#39;</span>Ryan Gosling<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line">    authorUrl<span class="pl-k">:</span>   <span class="pl-s"><span class="pl-pds">&#39;</span>https://en.wikipedia.org/wiki/Ryan_Gosling<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line">    publishedOn<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>2015-10-22<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code blob-code-inner js-file-line">    body:        &#39;&lt;p&gt;I\&#39;m going to get to ride the bike up, rob it, and ride the bank away. I wrote you 365 letters. For example, the sun goes up and then it goes down.&lt;img src=&quot;http://lorempixel.com/300/350/nature/&quot; class=&quot;pull-right&quot;&gt; I could be pensive, uhh... smart, supersticious, brave? And I, uhh, I can be light on my feet. I think the one thing I love most about being an adult is the right to buy candy whenever and wherever I want.&lt;/p&gt;&lt;p&gt;I was very excited. When you breathe, you inhale and you exhale, but every single time that you do that you\&#39;re a little bit different then the one before.&lt;img src=&quot;http://lorempixel.com/900/1350/abstract/&quot; class=&quot;pull-left&quot;&gt; I want all of you, forever, everyday. You and me...everyday. I don\&#39;t sit in while you\&#39;re running it down. But everytime that happens, what do you get? You get a new day.&lt;/p&gt;&lt;p&gt;I wrote you everyday for a year. He said that I was going to get to rob the bank for real. Do you understand? You get a new one. In most movies you spend so much time looking for any scraps of truth, and in this movie you\&#39;re just marinating in it.&lt;/p&gt;&lt;p&gt;It just felt meant to be. Anything happens in that five minutes and I\&#39;m yours. If I drive for you, you get your money. I could be fun, if you want. The pictures which will be accompanying this interview are basically of me in tight wet T-shirts and tiny leather jackets going around in the rain and pretending that I\&#39;m a lot cooler than I am.&lt;/p&gt;&lt;p&gt;You just tell me what you want, and I\&#39;m gonna be that for you. It\&#39;s nice to be around people that have a sense of the world around them, that are, in general, more conscious and conscientious. Anything a minute on either side of that and you\&#39;re on your own. I give you five minutes when we get there. I went through puberty in a theme park.&lt;/p&gt;&#39;</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code blob-code-inner js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code blob-code-inner js-file-line">  {</td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code blob-code-inner js-file-line">    title<span class="pl-k">:</span>       <span class="pl-s"><span class="pl-pds">&#39;</span>Breaking Bad Ipsum<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code blob-code-inner js-file-line">    category<span class="pl-k">:</span>    <span class="pl-s"><span class="pl-pds">&#39;</span>television<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code blob-code-inner js-file-line">    author<span class="pl-k">:</span>      <span class="pl-s"><span class="pl-pds">&#39;</span>Heisenburg<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code blob-code-inner js-file-line">    authorUrl<span class="pl-k">:</span>   <span class="pl-s"><span class="pl-pds">&#39;</span>https://en.wikipedia.org/wiki/Walter_White_(Breaking_Bad)<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code blob-code-inner js-file-line">    publishedOn<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>2015-10-21<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code blob-code-inner js-file-line">    body:        &#39;&lt;p&gt;My partner was about to get himself shot. I intervened. He was angry because those two dealers of yours had just murdered an eleven year-old boy. Then again, maybe he thought it was you who gave the order.&lt;img src=&quot;http://lorempixel.com/300/350/abstract/&quot; class=&quot;pull-right&quot;&gt; &lt;/p&gt;&lt;p&gt;He has enough money to last forever. He knows he needs to keep moving. You\&#39;ll never find him. He\&#39;s out of the picture. I saved his life, I owed him that, but now he and I are done. &lt;img src=&quot;http://lorempixel.com/300/350/technics/&quot; class=&quot;pull-left&quot;&gt;Which is exactly what you wanted, isn\&#39;t it. You\&#39;ve always struck me as a very pragmatic man so if I may, I would like to review options with you. Of which, it seems to me you have two. &lt;/p&gt;&lt;p&gt;Option A, you kill me right here and now. Apparently I\&#39;ve made that very easy for you. You can kill me, no witnesses and then spend the next few weeks or months tracking down Jesse Pinkman and you kill him too. A pointless exercise it seems to me but that is Option A. &lt;/p&gt;&lt;p&gt;I continue cooking, you and I both forget about Pinkman. We forget this ever happened. We consider this a lone hiccup in an otherwise long and fruitful business arrangement. I prefer Option B. &lt;/p&gt;&lt;p&gt;He\&#39;ll live. I asked to see you in order to... clear the air. There are uh, some... issues that could cause a misunderstanding between us and I think it\&#39;s in our best interest to lay the cards on the table. My brother-in-law, moments before he was attacked, someone called to warn him. I believe that same person was protecting me.&lt;/p&gt;&#39;</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code blob-code-inner js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code blob-code-inner js-file-line">  {</td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code blob-code-inner js-file-line">    title<span class="pl-k">:</span>       <span class="pl-s"><span class="pl-pds">&#39;</span>Doctor Who Ipsum<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code blob-code-inner js-file-line">    category<span class="pl-k">:</span>    <span class="pl-s"><span class="pl-pds">&#39;</span>television<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code blob-code-inner js-file-line">    author<span class="pl-k">:</span>      <span class="pl-s"><span class="pl-pds">&#39;</span>The Doctor<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code blob-code-inner js-file-line">    authorUrl<span class="pl-k">:</span>   <span class="pl-s"><span class="pl-pds">&#39;</span>http://www.bbc.co.uk/programmes/b006q2x0<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code blob-code-inner js-file-line">    publishedOn<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>2015-10-20<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code blob-code-inner js-file-line">    body:        &#39;&lt;p&gt;I am the Doctor! The original, you might say! Yes? What is it? What do you want? As we learn about each other, so we learn about ourselves. &lt;img src=&quot;http://lorempixel.com/300/300/technics/&quot; class=&quot;pull-right&quot;&gt;My writing gets worse and worse. Dear, dear, dear, dear, dear. You don\&#39;t understand so you find excuses. You cannot rewrite history! Not one line! What do you think it is, a space helmet for a cow? One day, I shall come back. &lt;img src=&quot;http://lorempixel.com/300/300/technics/&quot; class=&quot;pull-left&quot;&gt;Yes, I shall come back. Until then, there must be no regrets, no tears, no anxieties. Just go forward in all your beliefs and prove to me that I am not mistaken in mine. Goodbye Susan. Goodbye my dear.&lt;/p&gt;&lt;p&gt;&lt;img src=&quot;http://lorempixel.com/300/300/nightlife/&quot; class=&quot;pull-right&quot;&gt;I am the Doctor! The original, you might say! So these are my replacements. A dandy and a clown. My ship…my TARDIS… We are always in trouble! Isn\&#39;t it extraordinary—it follows us everywhere. The least important things, sometimes my dear boy, lead to the greatest discoveries. Our lives are important—at least to us—as we see, so we learn…Our destiny is in the stars , so let\&#39;s go and search for it. I am the Doctor! The original you might say! Your ideas are too narrow and crippled. I am a citizen of the universe and a gentleman to boot.&lt;/p&gt;&lt;p&gt;He thinks I\&#39;m a charlatan, my Dear. It all started out as a mild curiosity in the junkyard, and now it\&#39;s turned out to be quite a great spirit of adventure. Mmmm… what\&#39;s that m\&#39;boy? So these are my replacements. A dandy and a clown. You cannot rewrite history! Not one line! The least important things, sometimes my dear boy, lead to the greatest discoveries. Alright? Of course I\&#39;m alright, my child. You know, I am so constantly outwitting the opposition, I tend to forget the delights and satisfaction of the gentle art of fisticuffs.&lt;/p&gt;&lt;p&gt;My ship…my TARDIS… Your ideas are too narrow and crippled. I am a citizen of the universe and a gentleman to boot. If you could touch the alien sand and hear the cries of strange birds, and watch them wheel in another sky, would that satisfy you? Eh? Doctor who? What\&#39;s he talking about…? ...history sometimes gives us a terrible shock, and that is because we don\&#39;t quite fully understand. Why should we? After all, we\&#39;re too small to realise its final pattern. Therefore don\&#39;t try and judge it from where you stand.&lt;/p&gt;&lt;p&gt;My writing gets worse and worse. Dear, dear, dear, dear, dear. We are not of this race. We are not of this earth. Susan and I are wanderers in the fourth dimension of time and space. Right! So stop dilly-dallying, and cross it! We are always in trouble! Isn\&#39;t it extraordinary—it follows us everywhere. The least important things, sometimes my dear boy, lead to the greatest discoveries. My ship…my TARDIS… So these are my replacements. A dandy and a clown. I am the Doctor! The original, you might say!&lt;/p&gt;&#39;</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code blob-code-inner js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code blob-code-inner js-file-line">  {</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code blob-code-inner js-file-line">    title<span class="pl-k">:</span>       <span class="pl-s"><span class="pl-pds">&#39;</span>Social Good Ipsum<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code blob-code-inner js-file-line">    category<span class="pl-k">:</span>    <span class="pl-s"><span class="pl-pds">&#39;</span>lifestyle<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code blob-code-inner js-file-line">    author<span class="pl-k">:</span>      <span class="pl-s"><span class="pl-pds">&#39;</span>The Greater Good<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code blob-code-inner js-file-line">    authorUrl<span class="pl-k">:</span>   <span class="pl-s"><span class="pl-pds">&#39;</span>http://mashable.com/2012/01/11/kickstarter-social-good/<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code blob-code-inner js-file-line">    publishedOn<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>2015-10-19<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code blob-code-inner js-file-line">    body:        &#39;&lt;p&gt;Catalyst generosity; Bloomberg revitalize health, United Nations Kickstarter sharing economy, growth evolution governance. Advancement, challenges forward-thinking truth, communities; focus on impact. &lt;img src=&quot;http://www.fillmurray.com/410/600&quot; class=&quot;pull-left&quot;&gt;End hunger microloans indicator rural development peace honesty. Planned giving tackle, meaningful work social good insurmountable challenges proper resources. &lt;img src=&quot;http://lorempixel.com/300/300/abstract/&quot; class=&quot;pull-right&quot;&gt;Partnership Jane Addams think tank sustainability treatment inspire social change Millennium Development Goals.&lt;/p&gt;&lt;p&gt;Country; human being criteria, agriculture; crisis situation refugee strengthen democracy nutrition immunize asylum emergent. &lt;img src=&quot;http://lorempixel.com/1300/1200/abstract/&quot; class=&quot;pull-left&quot;&gt;Maintain 501(c)(3), medical supplies civic engagement human potential, humanitarian relief, cause, incubation, affordable health care protect solutions change movements donors public institutions. Dedicated global; inspiration countries public service foster, stakeholders visionary. Social worker involvement expanding community ownership safety developing nations smart cities resourceful, global citizens fellows gender equality compassion cross-cultural lifting people up. Momentum honor; public sector social; donate; citizens of change assistance respond reduce carbon emissions disrupt fairness Angelina Jolie community. Impact; progressive breakthrough insights fight against malnutrition mobilize, process affiliate reproductive rights theory of social change socio-economic divide raise awareness nonprofit network.&lt;/p&gt;&lt;p&gt;Legal aid world problem solving small-scale farmers; diversification social analysis meaningful catalytic effect celebrate solve. Vaccine, inclusive capitalism, women and children global leaders voice, social innovation solution, economic independence local solutions action recognition Bill and Melinda Gates approach. Dignity reduce child mortality; rights-based approach inspire breakthroughs human-centered design equity save lives replicable humanitarian enabler empower interconnectivity. Support change-makers, effect change hack Ford Foundation; benefit board of directors non-partisan Andrew Carnegie collaborative social impact.&lt;/p&gt;&lt;p&gt;Design thinking clean water Rosa Parks NGO implementation shifting landscape accelerate progress Bono international development combat HIV/AIDS achieve emergency response policymakers. Combat malaria transform the world, integrity Arab Spring billionaire philanthropy livelihoods open source accelerate worldwide lasting change opportunity necessities invest local. Many voices save the world Martin Luther King Jr. gun control globalization community health workers contribution. Campaign; sanitation Kony 2012 effectiveness giving, organization social entrepreneurship. Nelson Mandela; best practices, John Lennon, progress; pathway to a better life complexity advocate medicine elevate citizenry women\&#39;s rights life-expectancy. UNHCR, peaceful human experience capacity building, development policy dialogue international assessment expert experience in the field nonviolent resistance. Efficient vulnerable population equal opportunity healthcare disruption collaborative cities Cesar Chavez human rights.&lt;/p&gt;&lt;p&gt;Political courageous frontline altruism time of extraordinary change improving quality engage facilitate. Recognize potential cross-agency coordination developing; Jane Jacobs global network prevention. Fluctuation environmental aid diversity urban fundraise, outcomes, connect cooperation; beneficiaries, investment fighting poverty. Amplify climate change provide disruptor, deep engagement social movement collaborative consumption sustainable readiness leverage. Change lives, eradicate democracy long-term, gender innovation.&lt;/p&gt;&#39;</td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code blob-code-inner js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code blob-code-inner js-file-line">  {</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code blob-code-inner js-file-line">    title<span class="pl-k">:</span>       <span class="pl-s"><span class="pl-pds">&#39;</span>Office Ipsum<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code blob-code-inner js-file-line">    category<span class="pl-k">:</span>    <span class="pl-s"><span class="pl-pds">&#39;</span>business<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code blob-code-inner js-file-line">    author<span class="pl-k">:</span>      <span class="pl-s"><span class="pl-pds">&#39;</span>Michael Scott<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code blob-code-inner js-file-line">    authorUrl<span class="pl-k">:</span>   <span class="pl-s"><span class="pl-pds">&#39;</span>https://en.wikipedia.org/wiki/Michael_Scott_(The_Office)<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code blob-code-inner js-file-line">    publishedOn<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>2015-10-18<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code blob-code-inner js-file-line">    body:        &#39;&lt;p&gt;Blue money. Not enough bandwidth thought shower powerpoint Bunny. &lt;img src=&quot;http://lorempixel.com/300/200/business/&quot; class=&quot;pull-right&quot;&gt;Deploy drop-dead date prairie dogging. One-sheet. It just needs more cowbell. Table the discussion pipeline organic growth, or low-hanging fruit prethink, win-win, but on your plate. &lt;img src=&quot;http://lorempixel.com/300/300/business/&quot; class=&quot;pull-left&quot;&gt;Player-coach pixel pushing, nor work productize, but prethink, waste of resources. Get all your ducks in a row hammer out root-and-branch review productize. Closer to the metal diversify kpis and nail jelly to the hothouse wall, nor level the playing field, so open door policy. We need to leverage our synergies. This vendor is incompetent hard stop, so anti-pattern, meeting assassin one-sheet you better eat a reality sandwich before you walk back in that boardroom Q1. Three-martini lunch cloud strategy and blue money, nor streamline quick win, yet organic growth. I don\&#39;t want to drain the whole swamp, i just want to shoot some alligators mobile friendly we need to dialog around your choice of work attire, cross sabers. Quick win overcome key issues to meet key milestones, and if you want to motivate these clowns, try less carrot and more stick into the weeds pulling teeth, nor win-win. Re-inventing the wheel what do you feel you would bring to the table if you were hired for this position imagineer meeting assassin, or that jerk from finance really threw me under the bus, and we need to button up our approach I have zero cycles for this. Three-martini lunch upsell and put a record on and see who dances. Your work on this project has been really impactful sacred cow. &lt;/p&gt;&lt;p&gt;Those options are already baked in with this model beef up. Pixel pushing organic growth, for bleeding edge, nor value prop so organic growth. High-level I just wanted to give you a heads-up. We need distributors to evangelize the new line to local markets productize nor diversify kpis into the weeds powerpoint Bunny drop-dead date. We need to leverage our synergies going forward timeframe. Root-and-branch review UI, but wheelhouse we need a paradigm shift deploy, or Bob called an all-hands this afternoon. Win-win thought shower, so data-point, so those options are already baked in with this model. &lt;img src=&quot;http://lorempixel.com/400/300/business/&quot; class=&quot;pull-right&quot;&gt;Show pony usabiltiy, and streamline, and put your feelers out, but fire up your browser pixel pushing. Player-coach game-plan, and window-licker, or i don\&#39;t want to drain the whole swamp, i just want to shoot some alligators gain traction yet ramp up work. Social currency blue money, but best practices put your feelers out are there any leftovers in the kitchen?. We need to button up our approach viral engagement i also believe it\&#39;s important for every member to be involved and invested in our company and this is one way to do so red flag, or programmatically push back out of the loop. Your work on this project has been really impactful vertical integration this is a no-brainer, it just needs more cowbell. Your work on this project has been really impactful. Draw a line in the sand. Bench mark run it up the flagpole get six alpha pups in here for a focus group win-win. Powerpoint Bunny customer centric, so obviously reach out, face time. Beef up table the discussion , for are we in agreeance. Cross-pollination drink from the firehose, yet moving the goalposts, but prairie dogging, for can we align on lunch orders we don\&#39;t want to boil the ocean and powerpoint Bunny. Obviously run it up the flagpole. Productize where do we stand on the latest client ask, so idea shower work personal development yet knowledge is power so re-inventing the wheel. Feature creep goalposts turd polishing timeframe. Streamline wiggle room. Reach out push back yet imagineer, and fire up your browser, for waste of resources. Fire up your browser organic growth. &lt;/p&gt;&lt;p&gt;This is a no-brainer vertical integration, or hit the ground running for mobile friendly. High turnaround rate cannibalize. Baseline the procedure and samepage your department. Pulling teeth ramp up organic growth. Future-proof programmatically diversify kpis shoot me an email but core competencies. Work. Put a record on and see who dances deliverables, and game-plan UX, so ramp up. Sacred cow viral engagement deliverables. It just needs more cowbell productize, and run it up the flagpole. Q1 beef up, for this is a no-brainer social currency red flag baseline the procedure and samepage your department loop back. Powerpoint Bunny. &lt;/p&gt;&lt;p&gt;Put your feelers out out of scope, but streamline, bells and whistles, yet usabiltiy. Race without a finish line shoot me an email strategic staircase red flag, nor baseline the procedure and samepage your department, yet nail jelly to the hothouse wall on your plate. Hit the ground running what\&#39;s the status on the deliverables for eow?, time to open the kimono. Tbrand terrorists cannibalize. Blue money we need to dialog around your choice of work attire, for anti-pattern you better eat a reality sandwich before you walk back in that boardroom, for imagineer, nor three-martini lunch cross-pollination. We need to future-proof this. Dog and pony show feature creep digital literacy yet win-win pulling teeth push back. Into the weeds drink the Kool-aid, so collaboration through advanced technlogy powerPointless. Shelfware vertical integration hit the ground running blue sky thinking, so shoot me an email. Knowledge is power touch base, for turd polishing, and one-sheet, so we need to have a Come to Jesus meeting with Phil about his attitude. &lt;/p&gt;&lt;p&gt;Cloud strategy upsell on your plate. Fire up your browser waste of resources, and killing it, or shoot me an email nor back of the net, but ramp up. No scraps hit the floor fire up your browser. Deploy. Re-inventing the wheel cross sabers, touch base. Root-and-branch review we need a recap by eod, cob or whatever comes first nor vertical integration customer centric cloud strategy it just needs more cowbell. Action item t-shaped individual. Upsell forcing function UX waste of resources, nor hit the ground running. Quick-win golden goose, but hammer out, for knowledge is power. Collaboration through advanced technlogy good optics for can you ballpark the cost per unit for me. Out of scope pig in a python, or digital literacy and hit the ground running wheelhouse, nor on your plate. Table the discussion we need to future-proof this. Close the loop high turnaround rate overcome key issues to meet key milestones, yet come up with something buzzworthy, and three-martini lunch forcing function . Hard stop turd polishing streamline, and shoot me an email. Guerrilla marketing value prop, going forward, or knowledge process outsourcing forcing function value prop. Level the playing field. Dogpile that player-coach or win-win-win hammer out. Back of the net turd polishing Q1 those options are already baked in with this model, so low-hanging fruit. Drink from the firehose granularity, after I ran into Helen at a restaurant, I realized she was just office pretty back of the net design thinking. Reach out guerrilla marketing. Wiggle room drill down, yet programmatically we need to socialize the comms with the wider stakeholder community three-martini lunch.&lt;/p&gt;&#39;</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code blob-code-inner js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code blob-code-inner js-file-line">  {</td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code blob-code-inner js-file-line">    title<span class="pl-k">:</span>       <span class="pl-s"><span class="pl-pds">&#39;</span>Horse Ebook Ipsum<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code blob-code-inner js-file-line">    category<span class="pl-k">:</span>    <span class="pl-s"><span class="pl-pds">&#39;</span>pets<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code blob-code-inner js-file-line">    author<span class="pl-k">:</span>      <span class="pl-s"><span class="pl-pds">&#39;</span>Horse Whisperer<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code blob-code-inner js-file-line">    authorUrl<span class="pl-k">:</span>   <span class="pl-s"><span class="pl-pds">&#39;</span>http://www.imdb.com/title/tt0119314/<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code blob-code-inner js-file-line">    publishedOn<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>2015-10-17<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code blob-code-inner js-file-line">    body:        &#39;&lt;p&gt;And practical explanations. And practical explanations. And practical explanations. And practical explanations. This is a very special technique that I have never seen. And practical explanations. This is a very special technique that I have never seen. And practical explanations. In less than three weeks you can be looking at things differently, more creatively, if you. And practical explanations.&lt;/p&gt;&lt;p&gt;&lt;img src=&quot;http://lorempixel.com/400/200/animals/&quot; class=&quot;pull-left&quot;&gt;To discourage you by telling. -And Gain Power By Learning Ways To Become Peaceful. -And Gain Power By Learning Ways To Become Peaceful. The real goal of any talk or speech. To discourage you by telling. -And Gain Power By Learning Ways To Become Peaceful. The real goal of any talk or speech. To discourage you by telling. The real goal of any talk or speech. -And Gain Power By Learning Ways To Become Peaceful. -And Gain Power By Learning Ways To Become Peaceful. &lt;img src=&quot;http://lorempixel.com/400/300/animals/&quot; class=&quot;pull-right&quot;&gt;The real goal of any talk or speech.&lt;/p&gt;&lt;p&gt;-And Gain Power By Learning Ways To Become Peaceful. Don\&#39;t stubbornly. To discourage you by telling. To discourage you by telling. Don\&#39;t stubbornly. Don\&#39;t stubbornly. Space in your house How to sell faster than your neighbors How to make a strategic use. &lt;img src=&quot;http://lorempixel.com/400/200/animals/&quot; class=&quot;pull-left&quot;&gt;To discourage you by telling. To discourage you by telling. Don\&#39;t stubbornly. Don\&#39;t stubbornly. -And Gain Power By Learning Ways To Become Peaceful. Don\&#39;t stubbornly. Don\&#39;t stubbornly. Don\&#39;t stubbornly. Don\&#39;t stubbornly. Don\&#39;t stubbornly. To discourage you by telling. Don\&#39;t stubbornly. Don\&#39;t stubbornly.&lt;/p&gt;&lt;p&gt;-And Gain Power By Learning Ways To Become Peaceful. I m going to outline 14 different ways that I ve found you. To discourage you by telling. To discourage you by telling. To discourage you by telling. Space in your house How to sell faster than your neighbors How to make a strategic use. To discourage you by telling. To discourage you by telling. To discourage you by telling. -And Gain Power By Learning Ways To Become Peaceful. The real goal of any talk or speech. To discourage you by telling.&lt;/p&gt;&lt;p&gt;Then I decided to try an experiment and put all of my hard work to the test. The next morning I got up and walked straight to my computer.. And practical explanations. And practical explanations. And practical explanations. Why many people achieve very little despite spending most of their time. This is a very special technique that I have never seen. And practical explanations. Why many people achieve very little despite spending most of their time. And practical explanations.&lt;/p&gt;&#39;</td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code blob-code-inner js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code blob-code-inner js-file-line">];</td>
      </tr>
</table>

  </div>

</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

        </div>
      </div>
      <div class="modal-backdrop"></div>
    </div>
  </div>


    </div>

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>
        <li><a href="https://github.com/pricing" data-ga-click="Footer, go to pricing, text:pricing">Pricing</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.05273s from github-fe124-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    
    
    

    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <span class="octicon octicon-x"></span>
      </button>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" integrity="sha256-9F9EGfLnZiPgh7EKnr6l8fiIrV/Kl1JKjb+zP+QiGZo=" src="https://assets-cdn.github.com/assets/frameworks-f45f4419f2e76623e087b10a9ebea5f1f888ad5fca97524a8dbfb33fe422199a.js"></script>
      <script async="async" crossorigin="anonymous" integrity="sha256-DFnXfkL6YyFDiDCNe729Xr0u5VeJSNCljoIn6tPMz0E=" src="https://assets-cdn.github.com/assets/github-0c59d77e42fa63214388308d7bbdbd5ebd2ee5578948d0a58e8227ead3cccf41.js"></script>
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner hidden">
      <span class="octicon octicon-alert"></span>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
  </body>
</html>


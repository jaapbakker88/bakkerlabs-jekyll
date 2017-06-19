---
layout: post
title:  "Lightning fast HTML and CSS writing with Emmet.io"
date:   2016-08-28 16:15:15 +0200
categories: jekyll update
---

Lately I have been trying to optimize my daily workflow with some useful tools. Earlier I wrote about my switch from Sublime Text to Atom. Well, Atom, just like Sublime, supports plugins which can add some incredible useful functionality. One of those great plugins is [Emmet](http://emmet.io/).

Just typing `!` creates your basic html structure like this:

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  
</body>
</html>
```

And writing `div.container-fluid>(header>ul>li*2>a)+footer>p` turns into:

```
<div class="container-fluid">
    <header>
      <ul>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
      </ul>
    </header>
    <footer>
      <p></p>
    </footer>
  </div>
```

It's a great tool worth checking out and diving into. It really makes writing code you write on a daily basis again and again so much easier. I was used to keeping templates for all kinds of stuff around and since discovering Emmet, I don't do this anymore. The only downside is remembering yet another syntax. 

For all possibilities, check the [cheatsheet](http://docs.emmet.io/cheat-sheet/).
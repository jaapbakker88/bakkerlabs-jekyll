---
layout: page
title: "About"
headline: "About"
order: 2

#img: img

ogtitle: Who, what where when?
metatitle: Meta title
metadesc: Meta desc
metakeys: Mets keys

logos:
  - image_path: /assets/img/logos/logo1.png
    title: Logo Purple
  - image_path: /assets/img/logos/logo2.png
    title: Logo Purple Line
  - image_path: /assets/img/logos/logo3.png
    title: Logo White Line Purple Background
  - image_path: /assets/img/logos/logo5.png
    title: Logo Dark Blue
  - image_path: /assets/img/logos/logo4.png
    title: Logo Dark Blue Line
  - image_path: /assets/img/logos/logo6.png
    title: Logo White Line Dark Blue Background
---


## Who are you guys?
Good question, who are we? We are an independent web design and development agency based in Amsterdam. We have designed and built websites and applications used by millions of people. Bakker Labs was started and is owned by Jaap Bakker. We like to inspire with our designs. We want to wow your, visitor, user, client or whoever is using the product that we design for you. We won't go for less. We're always developing our skills, staying on top of the latest trends and developments in UI, UX and modern day web development.

## The tools we use
This website used to be a custom build node.js application with a blog powered by [Ghost](https://ghost.org). We soon found this solution way to complicated and moved to a different setup. Right now the whole website is built using [Jekyll](https://jekyllrb.com/). For the layout we're using a slightly modified [Flexbox Grid](http://flexboxgrid.com/) just because flexbox is awesome and it's made developing web applications so much easier.

## What's that font?
You like it? Me too 👌! It's called Bree and you can get it on [fonts.com](https://www.fonts.com/font/typetogether/bree)! We always design with the profile of the client in mind. We think it's worth paying nice products. If there's a font you desperately need, get it, I'll help you with it. If you don't you'll never be happy with the end result.

---
## Show me some variations of the Bakker Labs logo!
<div class="row">
	{% for item in page.logos %}
	<div class="col-md-4">
		<img src="{{item.image_path}}" alt="{{item.title}}" class="img-responsive">
	</div>
	{% endfor %}
</div>
# Handbook template

This repository contains the template for handbooks to be built in VU style. These are meant to help make it easier to create community curated books, which can be shared and released online. 

## Getting started 

To make the template your own, please [use this template](https://github.com/new?template_name=handbook-template&template_owner=ubvu) to create a new repository.

After you created your own repository based on the template, go through the checklist to update with your book's metadata:

- [ ] Update `_quarto.yml` file
    - [ ] Change title
    - [ ] `site-url` - `https://<username>.github.io/<repo>`
    - [ ] `repo-url` - `https://github.com/<username>/<repo>`
    - [ ] `issue-url` - `https://github.com/<username>/<repo>/issues/new/choose`

## Deploying

This template tries to take away as much manual labor as possible. The idea is that the website is updated everytime something changes on the `main` branch. This way you can focus on writing great content!

For the automation to work, you need to go through a few manual steps - once. If you don't like command lines and are trying to create a book under [the UBVU organization](https://github.com/ubvu), just contact @chartgerink and they'll help you out!

```
# clone the repo
git clone https://github.com/<username>/<repo>
cd <repo>

# set up the publishing to github pages
quarto publish gh-pages
```

If you like commandlines and need to install Quarto, [check out the Quarto website](https://quarto.org/docs/get-started/index.html) for more info.

## Contributors


<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

All contributions to this project are gratefully acknowledged using the [`allcontributors` package](https://github.com/ropenscilabs/allcontributors) following the [all-contributors](https://allcontributors.org) specification. Contributions of any kind are welcome!

<table>

<tr>
<td align="center">
<a href="https://github.com/chartgerink">
<img src="https://avatars.githubusercontent.com/u/2946344?v=4" width="100px;" alt=""/>
</a><br>
<a href="https://github.com/ubvu/open-handbook/commits?author=chartgerink">chartgerink</a>
</td>
<td align="center">
<a href="https://github.com/Jolien-S">
<img src="https://avatars.githubusercontent.com/u/142608800?v=4" width="100px;" alt=""/>
</a><br>
<a href="https://github.com/ubvu/open-handbook/commits?author=Jolien-S">Jolien-S</a>
</td>
<td align="center">
<a href="https://github.com/Elisa-on-GitHub">
<img src="https://avatars.githubusercontent.com/u/78543806?v=4" width="100px;" alt=""/>
</a><br>
<a href="https://github.com/ubvu/open-handbook/commits?author=Elisa-on-GitHub">Elisa-on-GitHub</a>
</td>
<td align="center">
<a href="https://github.com/Karvovskaya">
<img src="https://avatars.githubusercontent.com/u/44666630?v=4" width="100px;" alt=""/>
</a><br>
<a href="https://github.com/ubvu/open-handbook/commits?author=Karvovskaya">Karvovskaya</a>
</td>
<td align="center">
<a href="https://github.com/jhrudey">
<img src="https://avatars.githubusercontent.com/u/35424147?v=4" width="100px;" alt=""/>
</a><br>
<a href="https://github.com/ubvu/open-handbook/commits?author=jhrudey">jhrudey</a>
</td>
</tr>

</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->


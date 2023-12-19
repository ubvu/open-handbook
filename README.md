# Handbook template

This repository contains the template for handbooks to be built in the VU style. These are meant to help make it easier to create community curated books, which can be shared and released online. 

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
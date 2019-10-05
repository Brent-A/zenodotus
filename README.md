# Zenodotus

## Status

This project is very early, and at present completely exploratory. It is non-functional and not ready for consumption.

At this point the project is organizing into some investigations, designs, and plans. Contributions are welcome.

## Overview

Zenodotus seeks to make software engineering documentation easier to write, maintain, and consume. 

The project starts from a few basic premises about documentation:
* **Documentation of code should live with the code.**
  Durable documentation should live in the same source control system as the code it documents. This benefits discoverability and lifetime, as well as prevents the documentation from being lost over time.
* **Search is better than Hyperlinks.**
  Manually specifying hyperlinks to add structure to documentation is sometimes needed, but it is time consuming, error prone, and often inconsistent. A good search engine and documentation index should be able to draw links between related topics in documentation without the need for the author to manually specify them.
* **Keep documentation simple.** Markdown has become a great de facto choice for writing simple and legible documentation in source control. Complex document formats and editors get in the way of creating clean and durable documentation. A documentation system should avoid authors needing to know the details of the way the documentation will be hosted, including metadata, page structure etc. Simple documentation will outlive the tools used to render it.
* **Good documentation is repetitive.** Important concepts may need to be repeated in many places. Humans don't resolve `#include` statements in documentation, and they don't always follow mentions of *see also*, so good documentation will repeat things where they need to be consumed. Documentation search tools should be designed with this in mind, and should be able to provide insights for documentation authors on where their text is duplicated when they want to change it.

## Road map

The road map is very rough right now since this project is just in its inception.

**Early work**
1. Index and render text (markdown) documents
2. Provide full text search over those documents
3. Automatically and Manually categorize and link documents

**Long term**
* Add code (and code comment) indexing
* Support more document formats (PDF/reStructured Text/etc.)
* Build a documentation edit review bot
* Index issues, pull requests, chat logs, and other sources of informal documentation

## Potential use cases

* Indexing documentation of open source projects, groups of related projects, or public projects at a large scale.
* Sharing and rendering internal documentation for organizations
* Indexing and sharing personal documentation, such as meeting/class notes

## Vision

You use Zenodotus to index projects you are working on as well as their related dependencies. You open your browser to the Zenodotus index page and type "installing *widget*" in the search box. You are presented with some quick snippets of relevant sections that discuss installation in context of the widget. When you click on one you can read the documentation page, where you discover that *widget* has a dependency on *tool*. When you click on *tool* anywhere on the page an overlay appears with search results for what *tool* is and how to install it.

The *widget* documentation author didn't create any links to the *tool* documentation, but Zenodotus inferred that since you are reading about installation in the context of *widget*, you probably wanted to learn about installation in the context of *tool*. 

When you click on that link Zenodotus re-enforces its learning. Future visitors may now see a blue underline under *tool* in the *widget* installation article.

## Why the name?

[Zenodotus](https://en.wikipedia.org/wiki/Zenodotus) was the first librarian of the [Library of Alexandria](https://en.wikipedia.org/wiki/Library_of_Alexandria). He was an early organizer of documents, responsible for the system of separating content by subject matter in to separate physical spaces. As a librarian he didn't just organize but interpreted and modified the works in his collection. His edits might be controversial or destructive in a modern light, but his goal of clarifying and organizing content speaks to the goals of this project.

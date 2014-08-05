# BackboneJS Essentials

We are going to examine how BackboneJS can help us build better JavaScript applications by separating logically units to Models and Views.

This will give us the power of code reuse and loose coupling between modules.

## Loose Coupling

A good read on the topic of "Loose Coupling" is this thread - http://stackoverflow.com/questions/226977/what-is-loose-coupling-please-provide-examples

## BackboneJS

Backbone is a library that provides us with 3 key abstractions:

* Models
* Collections (of Models)
* Views

__Models__ provide good functionality for making AJAX calls to restful servies in order to persist or fetch model data, which skips the annoying `$.ajax()` part.

__Collections__ are simple abstaction to group models together

__Views__ use models and collections in order to display something to the user.

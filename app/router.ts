import EmberRouter from '@ember/routing/router';
import config from 'ember-intl-memory-leak/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('dashboard');
  this.route('about');
});

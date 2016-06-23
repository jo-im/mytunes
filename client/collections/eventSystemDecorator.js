var addEventSystem = function(target) {
  target._reactionsTo = {};
  target._on = function(e, cb) {
    this._reactionsTo[e] = this._reactionsTo[e] || [];
    this._reactionsTo[e].push(cb);
  };
  target.trigger = function(e) {
    _.each(this._reactionsTo[e], function(cb) {
      cb();
    });
  };
};
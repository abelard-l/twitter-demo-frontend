import React from 'react';

export default ({ match }) => (
  <div className="container">
    <div className="row">
      <div className="col-xs-offset-3 col-xs-6">
        {match.path}
      </div>
    </div>
  </div>
);

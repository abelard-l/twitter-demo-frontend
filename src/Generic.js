import React from 'react';
import Helmet from 'react-helmet';

export default ({ match }) => {
  const pageName = match.path[1].toUpperCase() + match.path.slice(2);
  return (
    <React.Fragment>
      <Helmet title={pageName} />
      <div className="container">
        <div className="row">
          <div className="col-xs-offset-3 col-xs-6">
            {pageName}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

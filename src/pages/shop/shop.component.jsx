import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";
import WithSpanner from "../../components/with-spinner/with-spinner.component";

import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";

import { selectFetching } from "../../redux/shop/shop.selector";

const CollectionOverviewSpinner = WithSpanner(CollectionOverview);
const CollectionPageSpinner = WithSpanner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true
  };
  unscribeFromSnapshot = null;

  componentDidMount() {
    const { fetchCollections } = this.props;
    fetchCollections();
  }

  render() {
    const { match, isFetching } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionOverviewSpinner isLoading={isFetching} {...props} />
          )}
        />
        <Route
          exact
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageSpinner isLoading={isFetching} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isFetching: selectFetching
});

const mapDispatchToProps = dispatch => ({
  fetchCollections: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopPage);

import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectFetching } from "../../redux/shop/shop.selector";

import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionOverview from "./collection-overview.component";

const mapStateToProps = createStructuredSelector({
  isFetching: selectFetching
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;

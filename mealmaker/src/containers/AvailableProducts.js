import { connect } from 'react-redux'
import AvailableProductsList from '../components/AvailableProductsList'
import {chooseProduct} from '../actions'

const mapStateToProps = state => ({
  products: state.availableProducts
})

const mapDispatchToProps = dispatch => ({
  chooseProduct : id => dispatch(chooseProduct(id))
})



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AvailableProductsList)

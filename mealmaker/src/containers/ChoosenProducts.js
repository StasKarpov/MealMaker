import { connect } from 'react-redux'
import ChoosenProductsList from '../components/ChoosenProductsList'
import {removeProduct} from '../actions'


const mapStateToProps = state => ({
  products: state.choosenProducts
})

const mapDispatchToProps = dispatch => ({
  removeProduct : id => dispatch(removeProduct(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChoosenProductsList)

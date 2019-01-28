import { connect } from 'react-redux'
import AvailableProductsList from '../components/AvailableProductsList'


const mapStateToProps = state => ({
  products: state.availableProducts
})



export default connect(
  mapStateToProps
)(AvailableProductsList)

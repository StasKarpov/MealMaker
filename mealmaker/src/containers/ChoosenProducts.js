import { connect } from 'react-redux'
import ChoosenProductsList from '../components/ChoosenProductsList'


const mapStateToProps = state => ({
  products: state.choosenProducts
})

export default connect(
  mapStateToProps
)(ChoosenProductsList)

import { connect } from 'react-redux';
import FriendsBlock from './FriendsBlock'
let mapStateToProps = (state) => {
    return {
        friedsState: state.siteBar.friends
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const FriendsBlockContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsBlock);

export default FriendsBlockContainer;


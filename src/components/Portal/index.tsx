import React from 'react'
import { connect } from "react-redux";


interface Props {

}

const Portal = (props: Props) => {  
    return(
        <>
            Trang Chu
        </>
    )
}
const mapState = ({ ...state }) => ({

});
const mapDispatchToProps = {
  
};

export default connect(mapState, mapDispatchToProps)(Portal);
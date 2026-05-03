import React from 'react'

 function Alert(props) {
  return (

        props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>{props.alert.type}</strong> : {props.alert.msg}
                {/* <button type="button" className="btn-close"  aria-label="Close" data-bs-dismiss="alert"> </button> */}
            </div>
  )
}

export default Alert
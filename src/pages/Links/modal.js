import React from "react";
import './stylecard.css';

function Modal(props) {

    return (
        <div className="modal-background">
            <div className="modal-show-fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{props.title}</h5>
                            <button type="button" className="btn-close" onClick={props.hide}></button>
                        </div>
                        <div className="modal-body">
                            <img alt="" src={props.mdSrc} className="img-modal"/>
                            <p className="modal-desc">{props.desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;
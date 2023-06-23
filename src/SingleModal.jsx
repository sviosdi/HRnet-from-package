/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { forwardRef, useImperativeHandle } from 'react'

import './SingleModal.css'

const SingleModal = forwardRef(({ children }, modalRef) => {
    useImperativeHandle(modalRef, () => ({
        // l'objet retourné contient les méthodes qui doivent être accessibles dans le ParentComponent
        toggleModal,
    }))

    const toggleModal = () => {
        const modal = document.querySelector('.sl-singlemodal-wrapper')
        if (!modal.classList.contains('opened')) {
            modal.classList.add('opened')
        } else {
            modal.classList.remove('opened')
        }
    }

    return (
        <div ref={modalRef} className="sl-singlemodal-wrapper">
            <div className="sl-singlemodal">
                <div className="sl-singlemodal-header">
                    <div
                        className="sl-singlemodal-close-btn"
                        onClick={toggleModal}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 22.457 22.457"
                        >
                            <path
                                id="close-btn"
                                d="M122.232,46.019l6.621-6.621a2.7,2.7,0,1,0-3.817-3.817L118.415,42.2l-6.621-6.621a2.7,2.7,0,0,0-3.817,3.817l6.621,6.621-6.621,6.621a2.7,2.7,0,0,0,3.817,3.817l6.621-6.621,6.621,6.621a2.7,2.7,0,0,0,3.817-3.817Z"
                                transform="translate(-107.186 -34.791)"
                            />
                        </svg>
                    </div>
                </div>
                <div className="sl-singlemodal-content">{children}</div>
            </div>
        </div>
    )
})

export default SingleModal

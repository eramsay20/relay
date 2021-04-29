import React, { createContext, useRef, useState, useEffect, useContext } from 'react'
import ReactDOM from 'react-dom'

const ModalContext = createContext()

export const ModalProvider = ({children}) => {
    const modalRef = useRef();
    const [value, setValue] = useState();

    useEffect(() => {
        setValue(modalRef.current)
    }, [])

    return(
        <>
            <ModalContext.Provider value={value} >
                {children}
            </ModalContext.Provider>
            <div id="test" ref={modalRef} />
        </>
    )
};

export const Modal = ({onClose, children, styles}) => {
    const modalNode = useContext(ModalContext);
    if(!modalNode) return null;

    return ReactDOM.createPortal(
        <div id={styles?.modal} className="modal">
            <div id={styles?.modalBackground} className="modal-background" onClick={onClose} />
            <div id={styles?.modalContent} className="modal-content">
                {children}
            </div>
        </div>,
        modalNode
    )
}

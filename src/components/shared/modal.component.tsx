'use client'

import ModalComponent from 'react-modal'

const customStyles = {
    overlay: {
        background: 'rgba(0, 0, 0, 0.5)',
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        'min-height': '50%',
        'min-width': '50%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        color: '#fff',
        background: '#202020',
    },
}

interface ModalProps {
    modalIsOpen: boolean
    setIsOpen: (value: boolean) => void,
    children: React.ReactNode
}

const Modal = ({modalIsOpen, setIsOpen, children}: ModalProps) => {
    function openModal() {
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen(false)
    }

    return (
        <ModalComponent
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel='Modal'
        >
            <span onClick={closeModal}>x</span>
            {children}
        </ModalComponent>
    )
}

export default Modal

import React from 'react';
import styles from './Modal.module.css'; // Importa las clases CSS generadas por CSS Modules

interface IModal {
    children: React.ReactNode;
    showModal: boolean;
    // eslint-disable-next-line no-unused-vars
    setShowModal: (value: boolean) => void;
    title?: string;
    showHeader?: boolean;
    showOverlay?: boolean;
    modalPosition?: string;
    padding?: string;
}

const Modal = ({
    children,
    showModal,
    setShowModal,
    title,
    showHeader,
    showOverlay,
    modalPosition,
    padding
}: IModal) => {
    return (
        <>
            {showModal &&
                <div className={`${styles.overlay} ${showOverlay ? styles.show : ''}`} style={{ alignItems: modalPosition ? modalPosition : 'center' }}>
                    <div className={styles['modal-container']} style={{ padding: padding ? padding : '20px' }}>
                        {showHeader &&
                            <div className={styles['modal-header']}>
                                <h3>{title}</h3>
                            </div>
                        }

                        <button className={styles['close-button']} onClick={() => setShowModal(!showModal)}>
                            <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className={`bi bi-x ${styles['close-icon']}`} viewBox='0 0 16 16'>
                                <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
                            </svg>
                        </button>

                        {children}
                    </div>
                </div>
            }
        </>
    );
}

export default Modal;

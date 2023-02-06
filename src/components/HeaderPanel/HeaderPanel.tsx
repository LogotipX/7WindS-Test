import React from 'react';
import '../../assets/styles/styles.scss';
import './HeaderPanel.style.scss';

import MenuSquares from '../../assets/icons/MenuSquares.svg';
import ArrowBack from '../../assets/icons/ArrowBack.svg';

export function HeaderPanel() {
    return (
        <div className="header-panel bg-main text-simple border-main-b">
            <div className="btns-container pl-6 py-3_5">
                <img src={MenuSquares} />
                <img src={ArrowBack} />
            </div>
            
            <div className="nav-links-container">
                <div className="nav-links__btn selected">
                    Просмотр
                </div>
                <div className="nav-links__btn text-muted">
                    Управление
                </div>
            </div>
        </div>
    );
}

import React from 'react';

import ReactGa from 'react-ga';

export const initGA = (trackingId) =>{
    ReactGa.initialize(trackingId);
};

export const PageView = () => {
    ReactGa.pageview(window.location.pathname + window.location.search);
};

/**
 * Evento - adicione um evento de rastreamento personalizado.
 * @param {string} category
 * @param {string} action
 * @param {string} label 
 */
export const Event = (category, action, label) => {
    ReactGa.event({
        category: category,
        action: action, 
        label: label
    });
};
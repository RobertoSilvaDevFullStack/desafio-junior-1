'use client';

import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Pet } from '../types/pet.d';
import DeleteConfirmation from './DeleteConfirmation';

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  pet: Pet | null;
}

function DeleteModal({ isOpen, onClose, onConfirm, pet }: DeleteModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const modalContent = (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{
        background: 'rgba(0, 8, 20, 0.9)',
        backdropFilter: 'blur(12px)'
      }}
      onClick={onClose}
    >
      <div 
        className="relative"
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'absolute',
          width: '618px',
          height: '583px',
          left: 'calc(50% - 618px/2)',
          top: 'calc(50% - 583px/2 + 0.5px)',
          background: 'linear-gradient(316.01deg, #000814 15.31%, #001E4D 86.58%)',
          boxShadow: '0px 0px 15px 10px rgba(0, 86, 226, 0.2)',
          borderRadius: '10px',
          boxSizing: 'border-box',
          padding: '32px'
        }}
      >
        {/* Header conforme Figma - Versão Remover */}
        <div style={{ position: 'relative', width: '100%', height: '72px' }}>
          {/* Group 13 - Botão circular com ícone de remover */}
          <div style={{
            position: 'absolute',
            width: '72px',
            height: '72px',
            left: 'calc(50% - 72px/2 - 211px)',
            top: '0px'
          }}>
            {/* Ellipse 7 */}
            <div style={{
              position: 'absolute',
              width: '72px',
              height: '72px',
              left: '0px',
              top: '0px',
              background: 'linear-gradient(90deg, #FF4444 0%, #CC0000 100%)',
              borderRadius: '50%'
            }}>
              {/* Ícone lixeira */}
              <div style={{
                position: 'absolute',
                left: '33.09%',
                right: '63.98%',
                top: '24.28%',
                bottom: '70.91%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="white" 
                  strokeWidth="2"
                >
                  <polyline points="3,6 5,6 21,6"></polyline>
                  <path d="m5,6 1,14a2,2 0 0 0 2,2h8a2,2 0 0 0 2,-2l1,-14"></path>
                  <path d="m10,11v6"></path>
                  <path d="m14,11v6"></path>
                  <path d="M9,6V4a1,1 0 0 1 1,-1h4a1,1 0 0 1 1,1v2"></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Texto "Remover" */}
          <h2 style={{
            position: 'absolute',
            width: '141px',
            height: '34px',
            left: '130px',
            top: '19px',
            fontFamily: 'Ubuntu',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '30px',
            lineHeight: '34px',
            display: 'flex',
            alignItems: 'center',
            color: '#FFFFFF'
          }}>
            Remover
          </h2>

          {/* Botão X para fechar */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              left: '85%',
              right: '10%',
              top: '25.72%',
              bottom: '72.36%',
              background: '#FFFFFF',
              border: 'none',
              cursor: 'pointer',
              padding: '0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <svg 
              width="12" 
              height="12" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="#000000" 
              strokeWidth="3"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Content */}
        <div style={{ position: 'relative', marginTop: '60px' }}>
          <DeleteConfirmation pet={pet} />
        </div>

        {/* Botões Voltar e Remover - conforme especificação Figma */}
        {/* Group 38 - Botão Voltar */}
        <div style={{
          position: 'absolute',
          width: '231px',
          height: '40px',
          left: 'calc(50% - 231px/2 - 131.5px)',
          top: '480px'
        }}>
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              width: '231px',
              height: '40px',
              left: '0px',
              top: '0px',
              background: '#FFFFFF',
              borderRadius: '5px',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}
          >
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="#0056E2" 
              strokeWidth="2"
            >
              <polyline points="15,18 9,12 15,6"></polyline>
            </svg>
            <span style={{
              fontFamily: 'Ubuntu',
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: '16px',
              lineHeight: '18px',
              background: 'linear-gradient(90deg, #00CAFC 0%, #0056E2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Voltar
            </span>
          </button>
        </div>

        {/* Group 19 - Botão Remover */}
        <div style={{
          position: 'absolute',
          width: '231px',
          height: '40px',
          left: 'calc(50% - 231px/2 + 132.5px)',
          top: '480px'
        }}>
          <button
            onClick={onConfirm}
            style={{
              position: 'absolute',
              width: '231px',
              height: '40px',
              left: '0px',
              top: '0px',
              background: 'linear-gradient(90deg, #FF4444 0%, #CC0000 100%)',
              borderRadius: '5px',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}
          >
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="white" 
              strokeWidth="2"
            >
              <polyline points="3,6 5,6 21,6"></polyline>
              <path d="m5,6 1,14a2,2 0 0 0 2,2h8a2,2 0 0 0 2,-2l1,-14"></path>
              <path d="m10,11v6"></path>
              <path d="m14,11v6"></path>
              <path d="M9,6V4a1,1 0 0 1 1,-1h4a1,1 0 0 1 1,1v2"></path>
            </svg>
            <span style={{
              fontFamily: 'Ubuntu',
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: '16px',
              lineHeight: '18px',
              color: '#FFFFFF'
            }}>
              Remover
            </span>
          </button>
        </div>
      </div>
    </div>
  );

  // Garantir que só roda no client
  if (typeof window === 'undefined') return null;
  
  return createPortal(modalContent, document.body);
}

export default DeleteModal;

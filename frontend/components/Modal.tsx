'use client';

import { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

function Modal({ isOpen, onClose, children }: ModalProps) {
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
        {/* Header conforme Figma */}
        <div style={{ position: 'relative', width: '100%', height: '72px' }}>
          {/* Group 13 - Botão circular com gradiente */}
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
              background: 'linear-gradient(90deg, #00CAFC 0%, #0056E2 100%)',
              borderRadius: '50%'
            }}>
              {/* Ícone adicionar conforme especificação */}
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
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </div>
            </div>
          </div>

          {/* Texto "Cadastrar" */}
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
            Cadastrar
          </h2>

          {/* Botão X para fechar - conforme especificação */}
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
          {children}
        </div>

        {/* Botões Voltar e Cadastrar - conforme especificação Figma */}
        {/* Group 38 - Botão Voltar */}
        <div style={{
          position: 'absolute',
          width: '231px',
          height: '40px',
          left: 'calc(50% - 231px/2 - 131.5px)',
          top: '480px'
        }}>
          {/* Rectangle 20 - Background do botão Voltar */}
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
            {/* Ícone seta esquerda */}
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
            
            {/* Texto Voltar */}
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

        {/* Group 19 - Botão Cadastrar */}
        <div style={{
          position: 'absolute',
          width: '231px',
          height: '40px',
          left: 'calc(50% - 231px/2 + 132.5px)',
          top: '480px'
        }}>
          {/* Rectangle 20 - Background do botão Cadastrar */}
          <button
            onClick={() => {
              // Submeter o formulário encontrando o form dentro do modal
              const form = document.querySelector('form');
              if (form) {
                form.requestSubmit();
              }
            }}
            style={{
              position: 'absolute',
              width: '231px',
              height: '40px',
              left: '0px',
              top: '0px',
              background: 'linear-gradient(90deg, #00CAFC 0%, #0056E2 100%)',
              borderRadius: '5px',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}
          >
            {/* Texto Cadastrar */}
            <span style={{
              fontFamily: 'Ubuntu',
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: '16px',
              lineHeight: '18px',
              color: '#FFFFFF'
            }}>
              Cadastrar
            </span>
            
            {/* Ícone adicionar */}
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="white" 
              strokeWidth="2"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );

  // Renderizar no portal para evitar problemas de z-index
  // Garantir que só roda no client
  if (typeof window === 'undefined') return null;
  
  return createPortal(modalContent, document.body);
}

export default Modal;

import { CenterBox } from '../base/Box';
import { UpCaret } from '../base/Icons';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled(CenterBox)`
  background-color: var(--ba-scrollup__bg-color, #455a64);
  border-radius: 50%;
  bottom: 1.5rem;
  cursor: pointer;
  height: 3rem;
  opacity: 0.9;
  position: fixed;
  right: 1.5rem;
  transform: ${({ isHidden }) => isHidden && 'translateY(6rem)'};
  transition: transform 0.15s ease-in-out;
  width: 3rem;
`;

function ScrollUp() {
  const [isHidden, setIsHidden] = useState(true);

  /* -- Hooks -- */
  useEffect(() => {
    const callback = () => {
      if (window.scrollY !== 0) {
        setIsHidden(false);
      } else {
        setIsHidden(true);
      }
    };

    document.addEventListener('scroll', callback);

    return () => document.removeEventListener('scroll', callback);
  }, []);

  /* -- Event Handlers -- */
  const handleClick = () => {
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
    });
  };

  return (
    <Container isHidden={isHidden} onClick={handleClick}>
      <UpCaret />
    </Container>
  );
}

export default ScrollUp;

// class BibleAppScrollUp extends LitElement {
//   static get is() { return 'ba-scrollup'; }

//   static get styles() {
//     return [
//       base,

//       css`
//         div {
//           background-color: var(--ba-scrollup__bg-color, #455a64);
//           border-radius: 50%;
//           bottom: 1.5rem;
//           cursor: pointer;
//           height: 3rem;
//           opacity: .9;
//           position: fixed;
//           right: 1.5rem;
//           transition: transform .15s ease-in-out;
//           width: 3rem;
//         }

//         div.hide {
//           transform: translateY(6rem);
//         }

//         span {
//           line-height: 0;
//         }

//         svg {
//           fill: var(--font-color, #fafafa);
//         }
//       `,
//     ];
//   }

//   get $div() { return this.renderRoot.querySelector('div'); }

// render() {
//   return html`
//     <div class="center-content hide" @click=${this._handleClick}>
//       <span>
//         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
//           <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
//           <path d="M0 0h24v24H0z" fill="none"/>
//         </svg>
//       </span>
//     </div>
//   `;
// }

//   connectedCallback() {
//     super.connectedCallback();

//     this._callback = () => {
//       if (window.scrollY !== 0) {
//         this.$div.classList.remove('hide');
//       } else {
//         this.$div.classList.add('hide');
//       }
//     };

//     document.addEventListener('scroll', this._callback, { passive: true });
//   }

//   disconnectedCallback() {
//     super.disconnectedCallback();

//     document.removeEventListener('scroll', this._callback);
//   }

//   _handleClick() {
//     window.scrollTo({
//       behavior: 'smooth',
//       top: 0,
//     });
//   }
// }

// customElements.define(BibleAppScrollUp.is, BibleAppScrollUp);

// export default BibleAppScrollUp;

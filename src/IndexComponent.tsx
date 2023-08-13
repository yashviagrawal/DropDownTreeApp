import React, { Component } from 'react';

class IndexComponent extends Component {
  componentDidMount() {
    const $ = (selector: string) => document.querySelector(selector);
    
    const find = (el: HTMLElement, selector: string) => {
      let finded: HTMLElement | null;
      return (finded = el.querySelector(selector)) ? finded : null;
    };
    
    
    const siblings = (el: HTMLElement) => {
        const siblings: HTMLElement[] = [];
        const parent = el.parentNode;
        
        if (parent) {
          const children = parent.children;
          for (let i = 0; i < children.length; i++) {
            const sibling = children[i] as HTMLElement;
            if (sibling !== el) {
              siblings.push(sibling);
            }
          }
        }
        
        return siblings;
      };
    
    const showAsideBtn = $('.show-side-btn');
    const sidebar = $('.sidebar');
    const wrapper = $('#wrapper');
    
    const slideNavDropdown = $('.sidebar-dropdown');
    
    $('.sidebar .categories')!.addEventListener('click', (event: Event) => {
        event.preventDefault();
      
        const item = (event.target as HTMLElement).closest('.has-dropdown');
      
        if (!item) {
          return;
        }
      
        item.classList.toggle('opened');
      
        const siblingsArray = Array.from(item.parentNode!.children) as HTMLElement[];
      
        siblingsArray.forEach(sibling => {
          sibling.classList.remove('opened');
          const toClose = sibling.querySelector('.sidebar-dropdown');
          if (toClose) {
            toClose.classList.remove('active');
          }
        });
      
        if (item.classList.contains('opened')) {
          const toOpen = item.querySelector('.sidebar-dropdown');
          if (toOpen) {
            toOpen.classList.add('active');
          }
        } else {
          const dropdown = item.querySelector('.sidebar-dropdown');
          if (dropdown) {
            dropdown.classList.toggle('active');
          }
        }
      });
              }
  
  render() {
    return null; // Since this is not a visible component, return null
  }
}

export default IndexComponent;

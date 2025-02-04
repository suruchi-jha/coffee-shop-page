import { useEffect, useState } from 'react';

export const useScrollSpy = (ids, options) => {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observers = [];
    const elements = ids.map(id => document.getElementById(id));

    const cb = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
          window.history.pushState(null, '', `#${entry.target.id}`);
        }
      });
    };

    elements.forEach((el, i) => {
      if (el) {
        observers[i] = new IntersectionObserver(cb, options);
        observers[i].observe(el);
      }
    });

    return () => observers.forEach(obs => obs.disconnect());
  }, [ids, options]);

  return activeId;
};
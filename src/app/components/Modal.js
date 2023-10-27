'use client';
import React, { useEffect, useState } from 'react';

export default function Modal() {
  const [modalDisplayed, setModalDisplayed] = useState(false);

  useEffect(() => {
    // Check if the modal has already been displayed
    const hasModalBeenDisplayed = localStorage.getItem('modalDisplayed');

    if (!hasModalBeenDisplayed) {
      const modal = document.getElementById('my_modal_2');
      if (modal) {
        modal.showModal();
        setModalDisplayed(true);

        // Store in local storage to prevent further displays
        localStorage.setItem('modalDisplayed', 'true');
      }
    }
  }, []);

  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg text-center">Welcome !</h3>
        <p className="py-4 text-center">
          Supercharge your cooking experience by adding a pinch of excitement to
          your plate.
        </p>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}

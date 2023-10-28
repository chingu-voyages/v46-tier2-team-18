'use client';
import React, { useEffect, useState } from 'react';

export default function Modal() {
  const [modalDisplayed, setModalDisplayed] = useState(false);

  useEffect(() => {
    // Check if the modal has already been displayed
    const hasModalBeenDisplayed = localStorage.getItem('modalDisplayed');

    if (!hasModalBeenDisplayed) {
      const modal = document.getElementById('my_modal_5');
      if (modal) {
        modal.showModal();
        setModalDisplayed(true);

        // Store in local storage to prevent further displays
        // localStorage.setItem('modalDisplayed', 'true');
      }
    }
  }, []);

  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if (hours >= 5 && hours < 12) {
    timeOfDay = 'Good morning!';
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = 'Good afternoon!';
  } else if (hours >= 17 && hours < 20) {
    timeOfDay = 'Good evening!';
  } else {
    timeOfDay = 'Time for a late night snack?';
  }

  return (
    <>
      <div className="flex justify-center m-4">
        <button
          className="btn"
          onClick={() => document.getElementById('my_modal_5').showModal()}
        >
          Click to Test Modal
        </button>
      </div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center">{timeOfDay}</h3>
          <p className="py-4 text-center">
            Supercharge your cooking experience by adding a pinch of excitement
            to your plate.
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Let's Cook !</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

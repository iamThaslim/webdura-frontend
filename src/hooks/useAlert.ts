import { useState } from "react";

/**
 * useAlert hook
 *
 * Returns an object with the following properties:
 *   - `showAlert`: boolean indicating whether the alert is visible
 *   - `triggerAlert`: function to show the alert
 *   - `resetAlert`: function to hide the alert
 *
 * @returns {{ showAlert: boolean, triggerAlert: () => void, resetAlert: () => void }}
 */

export const useAlert = () => {
  const [showAlert, setShowAlert] = useState(false);

  const triggerAlert = () => setShowAlert(true);
  const resetAlert = () => setShowAlert(false);

  return { showAlert, triggerAlert, resetAlert };
};

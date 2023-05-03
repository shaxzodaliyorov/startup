import { useState } from "react";

export const UseShowPassword = () => {
  const [show, setShow] = useState<boolean>(false);

  const [showConfirm, setShowConfirm] = useState<boolean>(false);

  const ToggleShow = () => setShow((prev) => !prev);

  const ToggleShowConfirm = () => setShowConfirm((prev) => !prev);

  return { show, ToggleShow, ToggleShowConfirm, showConfirm };
};

"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader } from "./ui/dialog";
import { useMutation } from "@tanstack/react-query";
import { subscribeToNewsletter } from "@/lib/requests";

export default function NewsletterCard() {
  const [open, setOpen] = useState(false);

  const { mutateAsync, isPending, error } = useMutation({
    mutationKey: ["newsletter"],
    mutationFn: subscribeToNewsletter,
  });

  function handleOpen() {
    // Find localStorage key to see if already registered
    if (localStorage.getItem("newsletter")) return;

    setOpen(true);
  }

  useEffect(() => {
    const timeout = setTimeout(() => handleOpen(), 5000);
    return clearTimeout(timeout);
  }, []);

  return (
    <Dialog open={open}>
      <DialogContent>
        <DialogHeader>Join the newsletter</DialogHeader>
        <p>
          Enter your email to join the newsletter and stay up to date with the
          latest posts published in this blog!
        </p>
      </DialogContent>
    </Dialog>
  );
}

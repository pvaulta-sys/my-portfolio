'use client';

import { useEffect } from 'react';

/** Marks `<html>` when React has hydrated so motion fallbacks in globals.css can release. */
export function HydrateMarker() {
  useEffect(() => {
    document.documentElement.classList.add('hydrated');
  }, []);
  return null;
}

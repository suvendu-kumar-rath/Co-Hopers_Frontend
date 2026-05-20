'use client';

import { useEffect } from 'react';

export default function MeetingRoomPage() {
  useEffect(() => {
    window.location.replace('https://services.cohopers.com/meeting-room');
  }, []);

  return null;
}

// src/components/home/WhyChooseUs/variants/order.js
import { QrCode, Zap, Smartphone, BellRing, Printer } from 'lucide-react';

export const orderFeatures = [
  { title: 'QR Code Ordering', icon: QrCode, desc: 'Customers scan & order directly from phone.' },
  {
    title: 'Instant Kitchen Display',
    icon: Zap,
    desc: 'Orders appear in kitchen instantly — no shouting.',
  },
  { title: 'Waiter Tablet Mode', icon: Smartphone, desc: 'Staff take orders fast with tablet.' },
  { title: 'Auto Print to Kitchen', icon: Printer, desc: 'New orders print automatically.' },
  {
    title: 'Real-time Notifications',
    icon: BellRing,
    desc: 'Kitchen & waiters get instant alerts.',
  },
];

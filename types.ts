import React from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  items?: string[];
}

export interface NavItem {
  label: string;
  path: string;
}

export interface ValueItem {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export enum SectionId {
  HOME = 'home',
  ABOUT = 'about',
  SERVICES = 'services',
  CONTACT = 'contact'
}
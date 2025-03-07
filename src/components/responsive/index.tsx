"use client";

import React from "react";
import MediaQuery from "react-responsive";

interface Props {
  children: React.ReactNode;
}

export const MobileView = ({ children }: Props) => (
  <MediaQuery maxWidth={1224}>{children}</MediaQuery>
);

export const DesktopView = ({ children }: Props) => (
  <MediaQuery minWidth={1224}>{children}</MediaQuery>
);

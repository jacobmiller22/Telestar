import React from "react";

export interface ILink {
  label: string;
  url: string;
}

export enum EFormQueryType {
  TEXT,
  TEXTAREA,
  NUMBER,
  SELECT,
  CHECKBOX,
  RADIO,
  DATE,
  DATETIME,
  FILE,
  IMAGE,
}

export interface IFormQuery {
  name: string;
  label: string;
  type: EFormQueryType;
  required: boolean;
  startAdornment?: string | React.ReactElement;
}

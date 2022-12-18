import React from "react";

export interface CategoryProps {
  id: string;
  name: string;
  icon: string;
  order?: number;
  type?: string;
}

"use client";

import React, { useContext, createContext, useState } from "react";

type PageContextType = {
  currentSlug: string;
  setCurrentSlug: (slug: string) => void;
};

const pageContext = createContext<PageContextType | null>(null);

export const pageSlugProvider = ({children}: {children: React.ReactNode}) => {
    
} 

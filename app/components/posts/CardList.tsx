"use client";

import React from "react";

interface CardListProps {
  children: React.ReactNode;
}

const CardList = ({ children }: CardListProps) => {
  return (
    <div className="border p-5 text-center rounded-lg">{children}</div>
  );
};

export default CardList;

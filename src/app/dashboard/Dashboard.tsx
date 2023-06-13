"use client"
import { useHeader } from "@/src/contexts/useHeader";
import React from "react";

export default function Dashboard() {
  const { setShowHeader } = useHeader();
  setShowHeader(false);
  return <div>Dashboard</div>;
}

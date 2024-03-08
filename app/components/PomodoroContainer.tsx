import React from "react";

export const PomodoroContainer = ({ 
  children 
}: { 
  children: React.ReactNode 
}) => {
  return (
    <div className='w-full bg-white rounded-2xl p-2 flex flex-col items-center justify text-black'>{ children }</div>
  )
}
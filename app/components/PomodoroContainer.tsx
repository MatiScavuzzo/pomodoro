import React from "react";

export const PomodoroContainer = ({ 
  children 
}: { 
  children: React.ReactNode 
}) => {
  return (
    <div className='w-full bg-white rounded-2xl pt-6 pb-2 px-6 flex flex-col items-center justify text-black'>{ children }</div>
  )
}
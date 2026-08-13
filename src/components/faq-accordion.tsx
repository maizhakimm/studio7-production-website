"use client";

import { useState } from "react";

type FaqAccordionProps = {
  items: Array<[string, string]>;
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="border-t border-black/10">
      {items.map(([question, answer], index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;

        return (
          <div className="border-b border-black/10" key={question}>
            <button aria-controls={panelId} aria-expanded={isOpen} className="flex w-full items-center justify-between gap-5 py-6 text-left text-lg font-semibold" onClick={() => setOpenIndex(isOpen ? null : index)} type="button">
              <span>{question}</span>
              <span aria-hidden="true" className={`text-2xl font-light text-[#d6472c] transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>+</span>
            </button>
            <div className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`} id={panelId}>
              <div className="overflow-hidden"><p className="max-w-3xl pb-6 text-sm leading-7 text-black/55">{answer}</p></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

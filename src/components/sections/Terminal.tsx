"use client";

import React, { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, CornerDownLeft, Sparkles } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { personalInfo } from "@/data/socials";

interface HistoryItem {
  command: string;
  output: React.ReactNode;
}

const INITIAL_LOGS: HistoryItem[] = [
  {
    command: "whoami",
    output: (
      <div className="text-slate-200">
        <span className="text-cyan-400 font-bold">Nhut Duy</span> — Full-Stack & AI Systems Developer.
      </div>
    ),
  },
  {
    command: "stack --core",
    output: (
      <div className="text-slate-300">
        [Backend] C#, ASP.NET Core Web API, Python
        <br />
        [Frontend] React, TypeScript, Vue.js
        <br />
        [AI & Vision] OpenCV, YOLOv8, CNN, DINO Vision Transformers
      </div>
    ),
  },
  {
    command: "status",
    output: (
      <div className="text-emerald-400 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        AVAILABLE FOR WORK // 5S Group Alum & 9.9 Graduation Score.
      </div>
    ),
  },
];

export default function TerminalSection({ onOpenContact }: { onOpenContact?: () => void }) {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>(INITIAL_LOGS);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [commandList, setCommandList] = useState<string[]>(["whoami", "stack --core", "status"]);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim();
    if (!cmd) return;

    setCommandList((prev) => [...prev, cmd]);
    setHistoryIndex(-1);

    const lowerCmd = cmd.toLowerCase();
    let output: React.ReactNode = null;

    switch (lowerCmd) {
      case "help":
        output = (
          <div className="text-slate-300 space-y-1">
            <div className="text-cyan-400 font-bold mb-1">AVAILABLE COMMANDS:</div>
            <div><span className="text-violet-400 font-mono">whoami</span> - Display identity & background</div>
            <div><span className="text-violet-400 font-mono">role</span> - Engineering capabilities & focus</div>
            <div><span className="text-violet-400 font-mono">stack</span> - View technical ecosystem</div>
            <div><span className="text-violet-400 font-mono">projects</span> - Summary of featured architectures</div>
            <div><span className="text-violet-400 font-mono">score</span> - Academic graduation project evaluation</div>
            <div><span className="text-violet-400 font-mono">contact</span> - Initiate connection dialog</div>
            <div><span className="text-violet-400 font-mono">sudo hire</span> - Direct fast-track interview action</div>
            <div><span className="text-violet-400 font-mono">clear</span> - Clear terminal buffer</div>
          </div>
        );
        break;

      case "whoami":
        output = (
          <div className="text-slate-300">
            {personalInfo.name} — {personalInfo.role}. Specialized in modern enterprise platforms and 3D digital experiences.
          </div>
        );
        break;

      case "role":
        output = (
          <div className="text-slate-300">
            Full-Stack Software Engineer bridging .NET Core backend architecture, complex SQL performance tuning, and high-fidelity Next.js/React frontend development.
          </div>
        );
        break;

      case "stack":
        output = (
          <div className="text-slate-300">
            <span className="text-violet-300 font-bold">Backend:</span> C#, ASP.NET Core Web API, Python
            <br />
            <span className="text-cyan-300 font-bold">Frontend:</span> React, TypeScript, Vue.js
            <br />
            <span className="text-emerald-300 font-bold">AI & Vision:</span> OpenCV, YOLOv8, CNN, DINO Vision Transformers, Prompt Engineering, MCP, Cursor IDE
            <br />
            <span className="text-amber-300 font-bold">Tools & Domain:</span> Docker, Git, AWS S3, SignalR, Draw.io, Import-Export Logistics, Incoterms 2020, VNACCS Customs
          </div>
        );
        break;

      case "projects":
        output = (
          <div className="text-slate-300 space-y-1">
            <div><strong className="text-violet-300">1. ShoeDocX:</strong> Import-Export Document Platform (OCR + VNACCS + C#) [9.9 Score]</div>
            <div><strong className="text-cyan-300">2. SnapConvert:</strong> Image Format Conversion & Cloud Hub (.NET 8 + SignalR + AWS S3)</div>
            <div><strong className="text-indigo-300">3. Testify:</strong> AI Task Management & QA Testing (AI + SendGrid + REST API)</div>
            <div><strong className="text-amber-300">4. DussMann Meal:</strong> Multi-Tenant Enterprise Kiosk (ASP.NET Core + C#)</div>
            <div><strong className="text-orange-300">5. VibeRemote:</strong> Remote AI Agent Mesh (C# + Telegram Bot + SignalR)</div>
            <div><strong className="text-emerald-300">6. Vietnamese OCR:</strong> Offline Character Recognition (Python + CNN + DINO ViT)</div>
          </div>
        );
        break;

      case "score":
        output = (
          <div className="text-slate-300">
            Graduation Defense Score: <span className="text-emerald-400 font-bold font-mono">9.9 / 10</span> at FPT Polytechnic.
          </div>
        );
        break;

      case "contact":
        output = (
          <div className="text-slate-300">
            Email: <span className="text-cyan-400">{personalInfo.email}</span>
            <br />
            Telegram: <span className="text-violet-400">@nhutduy_dev</span>
            <br />
            Launching contact dispatch interface...
          </div>
        );
        if (onOpenContact) setTimeout(onOpenContact, 400);
        break;

      case "sudo hire":
      case "sudo hire me":
        output = (
          <div className="text-emerald-400 font-bold">
            ACCESS GRANTED. Welcome aboard! Connecting to direct dispatch...
          </div>
        );
        if (onOpenContact) setTimeout(onOpenContact, 500);
        break;

      case "clear":
        setHistory([]);
        setInputVal("");
        return;

      default:
        output = (
          <div className="text-rose-400">
            zsh: command not found: {cmd}. Type &apos;<span className="text-cyan-400 underline">help</span>&apos; to view all available commands.
          </div>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: cmd, output }]);
    setInputVal("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandList.length > 0) {
        const nextIdx = historyIndex + 1;
        if (nextIdx < commandList.length) {
          setHistoryIndex(nextIdx);
          setInputVal(commandList[commandList.length - 1 - nextIdx]);
        }
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInputVal(commandList[commandList.length - 1 - nextIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal("");
      }
    }
  };

  return (
    <section id="terminal" className="relative py-24 sm:py-32 px-6 sm:px-12 lg:px-16 max-w-5xl mx-auto">
      <SectionTitle
        kicker="DEVELOPER CONSOLE"
        title="INTERACTIVE TERMINAL"
        subtitle="Experience my technical identity through a direct Unix CLI environment. Try typing 'help'."
      />

      {/* Terminal Window Container */}
      <div
        className="rounded-2xl border border-white/15 bg-[#080A0E]/95 backdrop-blur-2xl shadow-2xl overflow-hidden cursor-text"
        onClick={() => inputRef.current?.focus()}
      >
        {/* Terminal Header Bar */}
        <div className="px-4 py-3 bg-white/[0.04] border-b border-white/10 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 hover:opacity-100 transition-opacity" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 hover:opacity-100 transition-opacity" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 hover:opacity-100 transition-opacity" />
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
            <span>nhutduy@portfolio:~ (zsh)</span>
          </div>

          <div className="text-[10px] font-mono text-slate-500 hidden sm:block">
            UTF-8
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-5 sm:p-7 font-mono text-xs sm:text-sm min-h-[320px] max-h-[460px] overflow-y-auto space-y-4">
          <div className="text-slate-500 text-[11px] pb-2 border-b border-white/5">
            Nhut Duy Interactive Kernel v2.4.0 (x86_64-apple-darwin22). Type &apos;help&apos; for list of commands.
          </div>

          {/* History */}
          {history.map((item, index) => (
            <div key={index} className="space-y-1.5">
              <div className="flex items-center gap-2 text-cyan-400">
                <span className="text-violet-400 font-bold">nhutduy@portfolio:~$</span>
                <span className="text-slate-100">{item.command}</span>
              </div>
              <div className="pl-4 text-slate-300 font-light leading-relaxed">
                {item.output}
              </div>
            </div>
          ))}

          {/* Prompt Input Row */}
          <form onSubmit={handleCommand} className="flex items-center gap-2 pt-2">
            <span className="text-violet-400 font-bold shrink-0">nhutduy@portfolio:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent border-0 outline-none text-slate-100 font-mono text-xs sm:text-sm p-0 m-0 focus:ring-0"
              autoCapitalize="off"
              autoComplete="off"
              spellCheck={false}
              aria-label="Terminal command input"
            />
            <span className="w-2 h-4 bg-cyan-400 inline-block animate-pulse shrink-0" />
          </form>

          <div ref={terminalEndRef} />
        </div>
      </div>
    </section>
  );
}

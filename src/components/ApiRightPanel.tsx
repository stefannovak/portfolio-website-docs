"use client";

import * as React from "react";

type RequestTab = {
    id: string;              // "curl", "js", "python"
    label: string;           // "cURL", "JavaScript", "Python"
    code: string;            // the snippet
    language?: string;       // e.g. "bash", "javascript", "python"
};

type ResponseTab = {
    id: string;              // "200", "401"
    label: string;           // "200", "401"
    body: string;            // pretty printed JSON or text
    language?: string;       // e.g. "json"
};

type ApiRightPanelProps = {
    title?: string;          // "Retrieve current user information"
    requestHeader?: string;  // "curl --request GET …"
    requestTabs: RequestTab[];
    responseHeader?: string; // "200"
    responseTabs?: ResponseTab[];
    className?: string;
};

function CopyButton({ text }: { text: string }) {
    const [copied, setCopied] = React.useState(false);
    return (
        <button
            onClick={async () => {
                try {
                    await navigator.clipboard.writeText(text);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 1200);
                } catch { }
            }}
            className="text-xs px-2 py-1 rounded border border-zinc-700 hover:bg-zinc-800"
            aria-label="Copy to clipboard"
        >
            {copied ? "Copied" : "Copy"}
        </button>
    );
}

function TabStrip<T extends { id: string; label: string }>(
    props: { tabs: T[]; active: string; onChange: (id: string) => void }
) {
    const { tabs, active, onChange } = props;
    return (
        <div className="flex items-center gap-1 text-xs">
            {tabs.map(t => (
                <button
                    key={t.id}
                    onClick={() => onChange(t.id)}
                    className={
                        "px-2 py-1 rounded-md border " +
                        (t.id === active
                            ? "border-zinc-600 bg-zinc-800 text-zinc-100"
                            : "border-transparent hover:border-zinc-700 text-zinc-400")
                    }
                >
                    {t.label}
                </button>
            ))}
        </div>
    );
}

export default function ApiRightPanel({
    title,
    requestHeader = "Request",
    requestTabs,
    responseHeader = "Response",
    responseTabs = [],
    className = ""
}: ApiRightPanelProps) {
    const [reqActive, setReqActive] = React.useState(requestTabs[0]?.id);
    const [resActive, setResActive] = React.useState(responseTabs[0]?.id);

    const activeReq = requestTabs.find(t => t.id === reqActive)!;
    const activeRes = responseTabs.find(t => t.id === resActive);

    return (
        <aside
            className={
                "lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)] lg:overflow-auto " +
                "space-y-4 " + className
            }
        >
            {/* Request card */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-950 shadow-sm">
                <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800">
                    <div className="flex items-center gap-3">
                        <h3 className="text-sm font-semibold text-zinc-200">{title ?? requestHeader}</h3>
                        <TabStrip
                            tabs={requestTabs}
                            active={reqActive}
                            onChange={setReqActive}
                        />
                    </div>
                    <CopyButton text={activeReq.code} />
                </div>

                <div className="p-4">
                    <pre className="relative overflow-x-auto rounded-lg bg-black/60 p-4 text-sm">
                        <code className={`language-${activeReq.language ?? "bash"}`}>
                            {activeReq.code}
                        </code>
                    </pre>
                </div>
            </div>

            {/* Response card */}
            {responseTabs.length > 0 && (
                <div className="rounded-xl border border-zinc-800 bg-zinc-950 shadow-sm">
                    <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800">
                        <div className="flex items-center gap-3">
                            <h3 className="text-sm font-semibold text-zinc-200">{responseHeader}</h3>
                            <TabStrip
                                tabs={responseTabs}
                                active={resActive}
                                onChange={setResActive}
                            />
                        </div>
                        {activeRes && <CopyButton text={activeRes.body} />}
                    </div>

                    <div className="p-4">
                        <pre className="relative overflow-x-auto rounded-lg bg-black/60 p-4 text-sm">
                            <code className={`language-${activeRes?.language ?? "json"}`}>
                                {activeRes?.body}
                            </code>
                        </pre>
                    </div>
                </div>
            )}
        </aside>
    );
}

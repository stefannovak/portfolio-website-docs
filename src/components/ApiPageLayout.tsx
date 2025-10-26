"use client";

import * as React from "react";

export default function ApiPageLayout({ children, rightPanel }) {
    return (
        <div className="nx-flex nx-gap-8">
            <div className="nx-flex-1 nx-min-w-0">
                {children}
            </div>
            <div className="nx-hidden lg:nx-block nx-w-[400px] nx-flex-shrink-0">
                {rightPanel}
            </div>
        </div>
    );
}

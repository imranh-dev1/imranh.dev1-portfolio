"use client";

import { useState } from "react";
import PortfolioLoader from "./portfolio-loader";

export default function PortfolioLoaderWrapper() {
    const [loading, setLoading] = useState(true);

    if (!loading) {
        return null;
    }

    return (
        <PortfolioLoader
            onComplete={() => setLoading(false)}
        />
    );
}
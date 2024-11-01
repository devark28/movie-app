import React from 'react';
import { LogIn } from 'lucide-react';

const LoginButton = () => (
    <button
        type="button"
        // ariaHaspopup="dialog"
        // ariaExpanded="false"
        // dataState="closed"
    >
        <div title="Login" className="size-9 bg-white/10 rounded-full overflow-hidden flex items-center justify-center">
            <LogIn className="text-white" size={20} strokeWidth={2.5} />
        </div>
    </button>
);

export default LoginButton;
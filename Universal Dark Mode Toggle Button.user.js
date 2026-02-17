// ==UserScript==
// @name         Universal Dark Mode Toggle Button (Ctrl+Q / Alt+Q)
// @namespace    https://github.com/csy8
// @version      1.2
// @description  Toggle dark mode on any website using Ctrl+Q or Alt+Q, or Tampermonkey toolbar menu (Global CSS Override)
// @author       csy8
// @match        *://*/*
// @grant        GM_addStyle
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_registerMenuCommand
// @run-at       document-start
// @license MIT
// ==/UserScript==

(function () {
    'use strict';

    try {
        console.log("[Universal Dark Mode] Script Initialized");

        const STORAGE_KEY = 'tm_universal_dark_mode';

        // CSS for Dark Mode
        // Using GM_addStyle for reliable injection
        const DARK_CSS = `
            /* Force dark background and light text on everything */
            html, body, div, table, tr, td, th, ul, li, dl, dt, dd, h1, h2, h3, h4, h5, h6, pre, form, fieldset, input, textarea, p, blockquote, th {
                background-color: #1e1e1e !important;
                color: #d4d4d4 !important;
                border-color: #444 !important;
            }

            /* Wildcard to change EVERYTHING else */
            * {
                background-color: inherit !important;
                color: inherit !important;
                border-color: inherit !important;
                box-shadow: none !important;
                text-shadow: none !important;
            }

            /* Fix links */
            a, a * {
                color: #8ab4f8 !important;
                background-color: transparent !important;
                text-decoration-color: #8ab4f8 !important;
            }

            /* Preserve inputs, images, videos */
            input, textarea, select, button {
                background-color: #2d2d2d !important;
                color: #fff !important;
                border: 1px solid #555 !important;
            }
            /* Revert: Background transparent as per user request */
            img, video, iframe, canvas, svg, embed, object {
                background-color: transparent !important;
                border-radius: 4px !important;
                filter: brightness(0.9) !important;
            }

            /* Fix: Make empty elements transparent to avoid blocking images */
            /* This fixes the black box issue on Naver thumbnails where an overlay/mask div covers the image */
            div:empty, span:empty, a:empty {
                background-color: transparent !important;
            }

            /* Scrollbars */
            ::-webkit-scrollbar { width: 12px; }
            ::-webkit-scrollbar-track { background: #1e1e1e; }
            ::-webkit-scrollbar-thumb { background: #555; border-radius: 6px; }
            * { scrollbar-color: #555 #1e1e1e; }
        `;

        let isDark = GM_getValue(STORAGE_KEY, false);
        let styleElement = null;

        function toggleDarkMode(enable) {
            console.log("[Universal Dark Mode] Toggling to:", enable);
            if (enable) {
                if (!styleElement) {
                    styleElement = GM_addStyle(DARK_CSS);
                }
            } else {
                if (styleElement) {
                    styleElement.remove(); // GM_addStyle returns the <style> element
                    styleElement = null;
                }
            }
            isDark = enable;
            GM_setValue(STORAGE_KEY, enable);
        }

        // Apply immediately if enabled
        if (isDark) {
            toggleDarkMode(true);
        }

        // Keyboard Listener
        document.addEventListener('keydown', (e) => {
            // Check for Ctrl + Q
            if (e.ctrlKey && e.key.toLowerCase() === 'q') {
                console.log("[Universal Dark Mode] Ctrl+Q detected");
                e.preventDefault();
                e.stopPropagation();
                toggleDarkMode(!styleElement);
                // Visual feedback (optional)
                // alert("Dark Mode Toggled");
            }
            // Backup Alt + Q
            else if (e.altKey && e.key.toLowerCase() === 'q') {
                e.preventDefault();
                toggleDarkMode(!styleElement);
            }
        });

        // Register Menu Command
        GM_registerMenuCommand("Toggle Dark Mode (Manual)", () => {
            toggleDarkMode(!styleElement);
        });

        // Debug Menu Command
        GM_registerMenuCommand("Force Enable (Debug)", () => {
            toggleDarkMode(true);
            alert("Dark mode forced ON. Check console for errors.");
        });

    } catch (err) {
        console.error("[Universal Dark Mode] CRITICAL ERROR:", err);
        alert("Dark Mode Script Error: " + err);
    }


})();

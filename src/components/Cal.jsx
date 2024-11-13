/* First make sure that you have installed the package */
/* If you are using yarn */
// yarn add @calcom/embed-react
/* If you are using npm */
// npm install @calcom/embed-react
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { Button } from './Button'

export function Cal({ selectedOption }) {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi();
            cal("ui", { "styles": { "branding": { "brandColor": "#FF551C" } }, "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, [])
    return (<button
    data-cal-link="kinglawnc/consultation"
    data-cal-config='{"layout":"month_view"}'
    type="button"
    className="justify-center rounded-lg bg-amber-400 py-3 font-semibold outline-2 outline-offset-2 transition-colors text-black hover:bg-gray-900 active:bg-gray-800 text-2xl px-6 rounded">Initial Consultation {selectedOption} </button>);
};

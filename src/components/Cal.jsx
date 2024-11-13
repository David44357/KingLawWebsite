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
    className="justify-center rounded-lg bg-amber-400 py-3 font-semibold hover:bg-white hover:text-black hover:border-amber-400- transition-colors text-black text-base px-6 rounded">Initial Consultation {selectedOption} </button>);
};

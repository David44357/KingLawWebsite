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
    return (<Button
    data-cal-link="kinglawnc/consultation"
    data-cal-config='{"layout":"month_view"}'
    className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">Consultation {selectedOption} </Button>);
};

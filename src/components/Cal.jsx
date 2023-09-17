/* First make sure that you have installed the package */
/* If you are using yarn */
// yarn add @calcom/embed-react
/* If you are using npm */
// npm install @calcom/embed-react
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { Button } from './Button'

export function Cal() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi();
            cal("ui", { "styles": { "branding": { "brandColor": "#FF551C" } }, "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, [])
    return <Button
    data-cal-link="kinglawnc/consultation"
    data-cal-config='{"layout":"month_view"}'
    >Schedule a Consultation</Button>;
};
/* First make sure that you have installed the package */
  
  /* If you are using yarn */
  // yarn add @calcom/embed-react
  
  /* If you are using npm */
  // npm install @calcom/embed-react
  
  import Cal, { getCalApi } from "@calcom/embed-react";
  import { useEffect,useMemo } from "react";
  export function CalInline({selectedOption}) {

	useEffect(()=>{
	  (async function () {
		const cal = await getCalApi();
		cal("ui", {"styles":{"branding":{"brandColor":"#FF551C"}},"hideEventTypeDetails":false,"layout":"month_view"});
	  })();
	}, [])

	if (selectedOption=="Select a value") {
		return (<h1 className="text-center p-10">Please select an option above</h1>);
	  }
	  return (<Cal
		className="p-10"
		calLink={selectedOption}
		style={{width:"100%",height:"100%",overflow:"scroll"}}
		config={{layout: 'month_view'}}
	  />);
	}
	  

	

  
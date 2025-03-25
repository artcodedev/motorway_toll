import { useEffect } from "react";
import { useStepsStore } from "../Story/story";





const UTMFrameChecker = ({ children }: { children: React.ReactNode }) => {

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const utm_source = queryParams.get("utm_source");
        const utm_medium = queryParams.get("utm_medium");
        const utm_campaign = queryParams.get('utm_campaign');
        const utm_term = queryParams.get('utm_term');
        const utm_content = queryParams.get('utm_content');
        const utm_nooverride = queryParams.get('utm_nooverride');
        const utm_referrer = queryParams.get('utm_referrer');

        const state = useStepsStore.getState();

        state.setUtmSource(utm_source);
        state.setUtmMedium(utm_medium);
        state.setUtmCampaign(utm_campaign);
        state.setUtmTerm(utm_term);
        state.setUtmContent(utm_content);
        state.setUtmNooverride(utm_nooverride);
        state.setUtmReferrer(utm_referrer);

    });


    return (
        <>
            {children}
        </>
    );
}

export default UTMFrameChecker;
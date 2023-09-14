import type { PageServerLoad } from './$types';

export const load = (async ({locals : {supabase, getSession}}) => {
    const data = (await supabase.from("ACTIVITYTYPE").select("*")).data;
    console.log(await getSession())
  return {
    activityTypes: data ?? [],
  };
}) satisfies PageServerLoad;
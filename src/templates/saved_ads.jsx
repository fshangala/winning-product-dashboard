import saved_ads_template from './saved_ads_template'

export default function SavedAds() {
  const template = saved_ads_template
  return (
    <div dangerouslySetInnerHTML={{__html:template.html}} />
  )
}
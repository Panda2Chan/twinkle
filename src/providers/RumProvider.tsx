'use client'
import { datadogRum } from '@datadog/browser-rum'
import { useEffect } from 'react'

export function RumInit() {
  useEffect(() => {
    datadogRum.init({
      applicationId: '84d18af3-778e-4a29-a0ff-5532fa92636c',
      clientToken: 'pub8ef921fddf8bc03411dadfc633e4ce29',
      // `site` refers to the Datadog site parameter of your organization
      // see https://docs.datadoghq.com/getting_started/site/
      site: 'ap1.datadoghq.com',
      service: 'twinkle',
      env: process.env.NEXT_PUBLIC_ENV || 'development',
      // Specify a version number to identify the deployed version of your application in Datadog
      // version: '1.0.0',
      sessionSampleRate: 100,
      sessionReplaySampleRate: 20,
      defaultPrivacyLevel: 'mask-user-input',
    })

    datadogRum.startSessionReplayRecording()
  }, [])

  return null
}

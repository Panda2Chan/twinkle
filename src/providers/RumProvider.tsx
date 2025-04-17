'use client'
import { datadogRum } from '@datadog/browser-rum'
import { useEffect } from 'react'

export function RumInit() {
  useEffect(() => {
    datadogRum.init({
      applicationId: process.env.NEXT_PUBLIC_DATADOG_APP_ID || '',
      clientToken: process.env.NEXT_PUBLIC_DATADOG_CLIENT_TOKEN || '',
      // `site` refers to the Datadog site parameter of your organization
      // see https://docs.datadoghq.com/getting_started/site/
      site: 'ap1.datadoghq.com',
      service: 'twinkle',
      env: process.env.NODE_ENV || 'development',
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

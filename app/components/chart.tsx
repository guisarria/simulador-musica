'use client'
import { ResponsiveBar } from '@nivo/bar'
import { data } from './data'

export default function Chart() {
  return (
    <ResponsiveBar
      data={data}
      keys={['score']}
      indexBy="scoreName"
      margin={{ top: 70, right: 70, bottom: 50, left: 60 }}
      padding={0.04}
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      colors={{ scheme: 'purple_orange' }}
      borderWidth={1}
      axisLeft={null}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 0,
        tickPadding: 0,
        tickRotation: 0,
      }}
      enableGridY={false}
      enableLabel={false}
      role="application"
      isFocusable={true}
      ariaLabel="Music Score"
      barAriaLabel={function (e: any) {
        return e.id + ': ' + e.formattedValue + ' in scoreName: ' + e.indexValue
      }}
    />
  )
}

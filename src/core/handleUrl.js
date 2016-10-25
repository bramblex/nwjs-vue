/**
 * Created by brambles on 16/10/24.
 */
"use strict"

export default function handleUrl(url){
  if (!/hash=(\w+)/.test(url))
    throw new Error(`Url(${url}) has not hash contented`)
  const hash = url.match(/hash=(\w+)/)[1]
  return `magnet:?xt=urn:btih:${hash}`
}
